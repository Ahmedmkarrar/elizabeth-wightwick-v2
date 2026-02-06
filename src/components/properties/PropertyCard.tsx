'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types';
import { formatPriceFull, isNewListing } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const address = [property.address_line_1, property.address_line_2].filter(Boolean).join(', ');

  const features = [
    property.bedrooms ? `${property.bedrooms} bed${property.bedrooms !== 1 ? 's' : ''}` : null,
    property.bathrooms ? `${property.bathrooms} bath${property.bathrooms !== 1 ? 's' : ''}` : null,
    (property.reception_rooms ?? 0) > 0 ? `${property.reception_rooms} recep` : null,
  ].filter(Boolean);

  // Determine badge to show
  const showNewListing = property.status === 'available' && isNewListing(property.created_at);
  const badgeStatus = showNewListing ? 'new_listing' : property.status;

  return (
    <Link href={`/properties/${property.id}`} className="group block">
      {/* Image - Portrait 3:4 */}
      <div className="relative aspect-[3/4] overflow-hidden bg-beige">
        <Image
          src={property.main_image}
          alt={address}
          fill
          className="object-cover transition-all duration-[1000ms] ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Status badge - always visible */}
        <div className="absolute top-4 left-4 z-10">
          <Badge status={badgeStatus} />
        </div>

        {/* Department tag */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-charcoal px-3 py-1.5 text-[10px] font-inter font-medium uppercase tracking-[0.15em]">
            {property.department === 'sales' ? 'For Sale' : 'To Let'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="pt-5 space-y-1.5">
        {/* Title */}
        <h3 className="font-cormorant text-[1.35rem] md:text-[1.5rem] font-light text-charcoal group-hover:text-brand transition-colors duration-500">
          {property.title}
        </h3>

        {/* Location */}
        <p className="text-[12px] text-slate/70 font-inter">
          {address}, {property.city}{property.postcode ? ` ${property.postcode}` : ''}
        </p>

        {/* Price */}
        <p className="font-cormorant text-[1.25rem] text-charcoal font-normal">
          {formatPriceFull(property.price, property.department, property.price_qualifier)}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="flex items-center gap-3 pt-1">
            {features.map((f, i) => (
              <span key={i} className="text-[12px] font-inter text-slate/60 flex items-center gap-2">
                {i > 0 && <span className="w-0.5 h-0.5 bg-taupe rounded-full" />}
                {f}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
