'use client';

import { useState, useMemo } from 'react';
import { mockProperties } from '@/lib/mock-data';
import PropertyGrid from '@/components/properties/PropertyGrid';
import { motion } from 'framer-motion';

export default function LettingsPage() {
  const [sort, setSort] = useState<string>('newest');

  const properties = useMemo(() => {
    const results = mockProperties.filter((p) => p.department === 'lettings');
    if (sort === 'price_asc') return results.sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') return results.sort((a, b) => b.price - a.price);
    return results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [sort]);

  return (
    <>
      <section className="pt-32 pb-12 bg-cream">
        <div className="container-wide">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-display text-charcoal"
          >
            Properties to Let
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-body text-slate font-inter font-light"
          >
            Exceptional rental properties in Wimbledon and South West London
          </motion.p>
        </div>
      </section>
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-10">
            <p className="text-small font-inter text-slate">
              <span className="text-charcoal font-medium">{properties.length}</span> properties to let
            </p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-white border border-taupe/40 px-4 py-2 text-small font-inter text-charcoal focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
          <PropertyGrid properties={properties} />
        </div>
      </section>
    </>
  );
}
