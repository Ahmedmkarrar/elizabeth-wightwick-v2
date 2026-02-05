'use client';

import { useState, useMemo } from 'react';
import { mockProperties } from '@/lib/mock-data';
import PropertyGrid from '@/components/properties/PropertyGrid';
import { motion } from 'framer-motion';

export default function RentPage() {
  const [sort, setSort] = useState<string>('price_desc');

  const properties = useMemo(() => {
    const results = mockProperties.filter((p) => p.department === 'lettings' && p.status === 'available');
    if (sort === 'price_asc') return results.sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') return results.sort((a, b) => b.price - a.price);
    return results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [sort]);

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container-wide">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-tiny font-inter font-medium uppercase tracking-widest text-brand"
          >
            Properties to Let
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display text-charcoal mt-3"
          >
            Rent in Wimbledon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-body text-slate font-inter font-light max-w-2xl"
          >
            Exceptional rental properties in Wimbledon and South West London,
            carefully curated for discerning tenants.
          </motion.p>
        </div>
      </section>
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-10 border-b border-beige pb-6">
            <p className="text-small font-inter text-slate">
              <span className="text-charcoal font-medium">{properties.length}</span> properties to let
            </p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-white border border-taupe/40 px-4 py-2 text-small font-inter text-charcoal focus:outline-none"
            >
              <option value="price_desc">Price: High to Low</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
          <PropertyGrid properties={properties} columns={2} />
        </div>
      </section>
    </>
  );
}
