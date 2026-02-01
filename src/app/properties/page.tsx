'use client';

import { useState, useMemo } from 'react';
import { PropertyFilters } from '@/types';
import { mockProperties } from '@/lib/mock-data';
import PropertyGrid from '@/components/properties/PropertyGrid';
import PropertyFilter from '@/components/properties/PropertyFilter';
import { motion } from 'framer-motion';
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function PropertiesPage() {
  const [filters, setFilters] = useState<PropertyFilters>({ page: 1 });
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const filteredProperties = useMemo(() => {
    let results = [...mockProperties];

    if (filters.department) {
      results = results.filter((p) => p.department === filters.department);
    }
    if (filters.property_type) {
      results = results.filter((p) => p.property_type === filters.property_type);
    }
    if (filters.min_bedrooms) {
      results = results.filter((p) => p.bedrooms >= (filters.min_bedrooms || 0));
    }
    if (filters.min_price) {
      results = results.filter((p) => p.price >= (filters.min_price || 0));
    }
    if (filters.status) {
      results = results.filter((p) => p.status === filters.status);
    }

    if (filters.sort === 'price_asc') {
      results.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price_desc') {
      results.sort((a, b) => b.price - a.price);
    } else {
      results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }

    return results;
  }, [filters]);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-cream">
        <div className="container-wide">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-display text-charcoal"
          >
            Properties
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-body text-slate font-inter font-light"
          >
            Explore our collection of homes in Wimbledon and South West London
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="flex gap-16">
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-28">
                <PropertyFilter
                  filters={filters}
                  onChange={setFilters}
                  totalResults={filteredProperties.length}
                />
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">
              {/* Sort & Mobile Filter Button */}
              <div className="flex items-center justify-between mb-10">
                <p className="text-small font-inter text-slate">
                  <span className="text-charcoal font-medium">{filteredProperties.length}</span>{' '}
                  {filteredProperties.length === 1 ? 'property' : 'properties'} found
                </p>
                <div className="flex items-center gap-4">
                  {/* Mobile filter */}
                  <button
                    onClick={() => setShowMobileFilter(true)}
                    className="lg:hidden flex items-center gap-2 text-small font-inter text-charcoal border border-taupe/40 px-4 py-2"
                  >
                    <AdjustmentsHorizontalIcon className="w-4 h-4" />
                    Filters
                  </button>
                  {/* Sort */}
                  <select
                    value={filters.sort || 'newest'}
                    onChange={(e) => setFilters({ ...filters, sort: e.target.value as PropertyFilters['sort'] })}
                    className="bg-white border border-taupe/40 px-4 py-2 text-small font-inter text-charcoal focus:outline-none"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                  </select>
                </div>
              </div>

              <PropertyGrid properties={filteredProperties} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {showMobileFilter && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal/50" onClick={() => setShowMobileFilter(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-cream p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="heading-section text-charcoal">Filters</h3>
              <button onClick={() => setShowMobileFilter(false)} aria-label="Close filters">
                <XMarkIcon className="w-6 h-6 text-charcoal" />
              </button>
            </div>
            <PropertyFilter
              filters={filters}
              onChange={(f) => {
                setFilters(f);
                setShowMobileFilter(false);
              }}
              totalResults={filteredProperties.length}
            />
          </div>
        </div>
      )}
    </>
  );
}
