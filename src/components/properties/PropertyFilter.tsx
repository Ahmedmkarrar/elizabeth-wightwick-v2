'use client';

import { PropertyFilters } from '@/types';
import { cn } from '@/lib/utils';

interface PropertyFilterProps {
  filters: PropertyFilters;
  onChange: (filters: PropertyFilters) => void;
  totalResults: number;
}

const priceRangesSales = [
  { value: '', label: 'Any Price' },
  { value: '500000', label: '£500,000+' },
  { value: '750000', label: '£750,000+' },
  { value: '1000000', label: '£1,000,000+' },
  { value: '1500000', label: '£1,500,000+' },
  { value: '2000000', label: '£2,000,000+' },
  { value: '3000000', label: '£3,000,000+' },
  { value: '5000000', label: '£5,000,000+' },
];

const priceRangesLettings = [
  { value: '', label: 'Any Price' },
  { value: '1000', label: '£1,000+ pcm' },
  { value: '1500', label: '£1,500+ pcm' },
  { value: '2000', label: '£2,000+ pcm' },
  { value: '3000', label: '£3,000+ pcm' },
  { value: '5000', label: '£5,000+ pcm' },
  { value: '10000', label: '£10,000+ pcm' },
];

export default function PropertyFilter({ filters, onChange, totalResults }: PropertyFilterProps) {
  const priceRanges = filters.department === 'lettings' ? priceRangesLettings : priceRangesSales;

  const updateFilter = (key: keyof PropertyFilters, value: string | number | undefined) => {
    onChange({ ...filters, [key]: value || undefined, page: 1 });
  };

  return (
    <div className="space-y-8">
      {/* Department Toggle */}
      <div className="flex border border-taupe/40">
        {(['sales', 'lettings'] as const).map((dept) => (
          <button
            key={dept}
            onClick={() => updateFilter('department', filters.department === dept ? undefined : dept)}
            className={cn(
              'flex-1 py-3 text-small font-inter tracking-wide transition-all duration-400',
              filters.department === dept
                ? 'bg-charcoal text-white'
                : 'bg-white text-charcoal hover:bg-cream'
            )}
          >
            {dept === 'sales' ? 'For Sale' : 'To Let'}
          </button>
        ))}
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-tiny font-inter font-medium uppercase tracking-widest text-slate mb-3">
          Property Type
        </label>
        <select
          value={filters.property_type || ''}
          onChange={(e) => updateFilter('property_type', e.target.value || undefined)}
          className="w-full bg-white border border-taupe/40 px-4 py-3 text-small font-inter text-charcoal focus:outline-none focus:border-charcoal transition-colors"
        >
          <option value="">All Types</option>
          <option value="house">Houses</option>
          <option value="flat">Flats / Apartments</option>
          <option value="studio">Studios</option>
          <option value="land">Land</option>
        </select>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="block text-tiny font-inter font-medium uppercase tracking-widest text-slate mb-3">
          Bedrooms
        </label>
        <div className="flex gap-2">
          {['Any', '1+', '2+', '3+', '4+', '5+'].map((label, i) => {
            const value = i === 0 ? undefined : i;
            return (
              <button
                key={label}
                onClick={() => updateFilter('min_bedrooms', value)}
                className={cn(
                  'flex-1 py-2.5 text-tiny font-inter border transition-all duration-400',
                  filters.min_bedrooms === value
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-white text-charcoal border-taupe/40 hover:border-charcoal'
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-tiny font-inter font-medium uppercase tracking-widest text-slate mb-3">
          Minimum Price
        </label>
        <select
          value={filters.min_price || ''}
          onChange={(e) => updateFilter('min_price', e.target.value ? Number(e.target.value) : undefined)}
          className="w-full bg-white border border-taupe/40 px-4 py-3 text-small font-inter text-charcoal focus:outline-none focus:border-charcoal transition-colors"
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Results Count */}
      <div className="pt-4 border-t border-taupe/30">
        <p className="text-small font-inter text-slate">
          Showing <span className="text-charcoal font-medium">{totalResults}</span>{' '}
          {totalResults === 1 ? 'property' : 'properties'}
        </p>
      </div>

      {/* Clear Filters */}
      {(filters.department || filters.property_type || filters.min_bedrooms || filters.min_price) && (
        <button
          onClick={() => onChange({ page: 1 })}
          className="text-small font-inter text-slate underline underline-offset-4 hover:text-charcoal transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}
