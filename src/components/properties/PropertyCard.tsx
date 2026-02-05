'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types';
import { formatPriceFull } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export default function PropertyCard({ property, featured = false }: PropertyCardProps) {
  const address = [property.address_line_1, property.address_line_2].filter(Boolean).join(', ');

  const features = [
    property.bedrooms ? `${property.bedrooms} bed${property.bedrooms !== 1 ? 's' : ''}` : null,
    property.bathrooms ? `${property.bathrooms} bath${property.bathrooms !== 1 ? 's' : ''}` : null,
    (property.reception_rooms ?? 0) > 0 ? `${property.reception_rooms} recep` : null,
  ].filter(Boolean);

  return (
    <Link href={`/properties/${property.id}`} className="group block">
      {/* Image */}
      <div className={`relative overflow-hidden bg-beige ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <Image
          src={property.main_image}
          alt={address}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Status badge */}
        {property.status !== 'available' && (
          <div className="absolute top-4 left-4">
            <Badge status={property.status} />
          </div>
        )}

        {/* Department tag */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-charcoal px-3 py-1.5 text-[11px] font-inter font-medium uppercase tracking-widest">
            {property.department === 'sales' ? 'For Sale' : 'To Let'}
          </span>
        </div>

        {/* Image count */}
        {property.images.length > 1 && (
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <span className="bg-charcoal/70 backdrop-blur-sm text-white px-3 py-1.5 text-[11px] font-inter">
              {property.images.length} photos
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pt-5 space-y-2.5">
        {/* Price */}
        <p className="font-cormorant text-[1.5rem] text-charcoal font-normal leading-tight">
          {formatPriceFull(property.price, property.department, property.price_qualifier)}
        </p>

        {/* Address */}
        <h3 className="font-inter text-small font-medium text-charcoal group-hover:text-brand transition-colors duration-300">
          {address}
        </h3>

        {/* Location */}
        <p className="text-tiny text-slate font-inter">
          {property.city}{property.postcode ? `, ${property.postcode}` : ''}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="flex items-center gap-4 pt-1">
            {features.map((f, i) => (
              <span key={i} className="text-tiny font-inter text-slate/80 flex items-center gap-1.5">
                {i > 0 && <span className="w-1 h-1 bg-taupe rounded-full" />}
                {f}
              </span>
            ))}
          </div>
        )}

        {/* View link */}
        <div className="pt-2">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0 inline-block">
            View Property &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
