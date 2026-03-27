'use client';

import { PhoneIcon, EnvelopeIcon, HomeIcon, ShareIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';
import { formatPriceFull, getDepartmentLabel } from '@/lib/utils';
import type { Property } from '@/types';
import MortgageCalculator from './MortgageCalculator';

interface PropertySidebarProps {
  property: Property;
  onEnquiry: (type: 'viewing' | 'info') => void;
  onShare: () => void;
  copied: boolean;
}

export default function PropertySidebar({ property, onEnquiry, onShare, copied }: PropertySidebarProps) {
  const priceQualifierLabel: Record<string, string> = {
    OIRO: 'Offers in the Region of',
    OIEO: 'Offers in Excess of',
    guide_price: 'Guide Price',
    POA: 'Price on Application',
  };

  return (
    <div className="sticky top-28 space-y-4">
      {/* Contact Card */}
      <div className="bg-white border border-beige p-8 space-y-6">
        <div>
          {property.price_qualifier && property.price_qualifier !== 'fixed' && (
            <p className="text-[10px] font-inter uppercase tracking-widest text-slate/60 mb-0.5">
              {priceQualifierLabel[property.price_qualifier] ?? property.price_qualifier}
            </p>
          )}
          <p className="font-cormorant text-subtitle text-charcoal">
            {formatPriceFull(property.price, property.department, property.price_qualifier)}
          </p>
          <p className="text-small text-slate font-inter mt-1">
            {getDepartmentLabel(property.department)}
          </p>
        </div>

        <div className="h-px bg-beige" />

        <div className="space-y-3">
          <Button onClick={() => onEnquiry('viewing')} className="w-full">
            Book a Viewing
          </Button>
          <Button variant="secondary" onClick={() => onEnquiry('info')} className="w-full">
            Request Information
          </Button>
          <button
            onClick={onShare}
            className="w-full flex items-center justify-center gap-2 border border-beige text-slate hover:border-charcoal/30 hover:text-charcoal transition-colors py-2.5 text-[12px] font-inter"
          >
            <ShareIcon className="w-4 h-4" />
            {copied ? 'Link copied!' : 'Share property'}
          </button>
        </div>

        <div className="h-px bg-beige" />

        <div className="space-y-4">
          <p className="font-cormorant text-section text-charcoal font-medium italic">Elizabeth Wightwick</p>
          <div className="flex items-center gap-3 text-small text-slate font-inter">
            <PhoneIcon className="w-4 h-4 text-brand flex-shrink-0" />
            <a href="tel:02035973484" className="hover:text-charcoal transition-colors">
              0203 597 3484
            </a>
          </div>
          <div className="flex items-center gap-3 text-small text-slate font-inter">
            <EnvelopeIcon className="w-4 h-4 text-brand flex-shrink-0" />
            <a href="mailto:info@elizabeth-wightwick.co.uk" className="hover:text-charcoal transition-colors text-[12px]">
              info@elizabeth-wightwick.co.uk
            </a>
          </div>
          <div className="flex items-center gap-3 text-small text-slate font-inter">
            <HomeIcon className="w-4 h-4 text-brand flex-shrink-0" />
            <span>60 High Street, Wimbledon Village</span>
          </div>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="bg-beige/20 p-6 border border-beige/30">
        <p className="text-tiny font-inter font-medium uppercase tracking-widest text-brand mb-3">Opening Hours</p>
        <div className="space-y-1.5 text-small font-inter text-slate">
          <div className="flex justify-between">
            <span>Monday – Friday</span>
            <span className="text-charcoal">9am – 5pm</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span className="text-charcoal">9am – 1pm</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span className="text-charcoal font-light italic text-[11px]">By appointment</span>
          </div>
        </div>
      </div>

      {/* Mortgage Calculator — only for sales */}
      {property.department === 'sales' && property.price > 0 && (
        <MortgageCalculator price={property.price} />
      )}
    </div>
  );
}
