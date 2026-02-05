'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { mockProperties } from '@/lib/mock-data';
import PropertyGrid from '@/components/properties/PropertyGrid';
import { motion } from 'framer-motion';

export default function BuyPage() {
  const [sort, setSort] = useState<string>('price_desc');

  const properties = useMemo(() => {
    const results = mockProperties.filter((p) => p.department === 'sales' && p.status === 'available');
    if (sort === 'price_asc') return results.sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') return results.sort((a, b) => b.price - a.price);
    return results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [sort]);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
            alt="Properties for sale"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-charcoal/30" />
        </div>
        <div className="container-wide relative z-10 pb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-inter font-medium uppercase tracking-[0.3em] text-white/60"
          >
            Properties for Sale
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cormorant text-[2.5rem] md:text-[3.5rem] font-light text-white mt-3 leading-tight"
          >
            Find Your Home
          </motion.h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-10 border-b border-beige pb-6">
            <p className="text-[13px] font-inter text-slate">
              <span className="text-charcoal font-medium">{properties.length}</span> properties available
            </p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-white border border-taupe/30 px-4 py-2.5 text-[13px] font-inter text-charcoal focus:outline-none focus:border-brand/50 transition-colors"
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
