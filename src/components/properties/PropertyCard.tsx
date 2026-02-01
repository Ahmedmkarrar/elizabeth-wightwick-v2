'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types';
import { formatPriceFull, truncate } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const address = [property.address_line_1, property.address_line_2].filter(Boolean).join(', ');

  const features = [
    property.bedrooms ? `${property.bedrooms} bed` : null,
    property.bathrooms ? `${property.bathrooms} bath` : null,
    property.reception_rooms ? `${property.reception_rooms} recep` : null,
  ].filter(Boolean);

  return (
    <Link href={`/properties/${property.id}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-beige">
        <Image
          src={property.main_image}
          alt={address}
          fill
          className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {property.status !== 'available' && (
          <div className="absolute top-4 right-4">
            <Badge status={property.status} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pt-6 space-y-3">
        <h3 className="font-cormorant text-[1.4rem] md:text-subtitle font-light text-charcoal leading-snug">
          {address}
        </h3>

        <p className="font-cormorant text-xl text-gold font-normal">
          {formatPriceFull(property.price, property.department, property.price_qualifier)}
        </p>

        <p className="text-small text-slate font-inter font-light leading-relaxed">
          {truncate(property.description, 120)}
        </p>

        {features.length > 0 && (
          <p className="text-tiny font-inter font-medium uppercase tracking-widest text-slate/70 pt-1">
            {features.join(' \u00B7 ')}
          </p>
        )}

        <span className="inline-block text-small font-inter text-charcoal mt-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-charcoal after:transition-all after:duration-400 group-hover:after:w-full">
          View Details
        </span>
      </div>
    </Link>
  );
}
