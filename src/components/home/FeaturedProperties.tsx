'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mockProperties } from '@/lib/mock-data';
import { formatPrice, cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';

type FilterTab = 'all' | 'sales' | 'lettings';

const tabs: { key: FilterTab; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'sales', label: 'For Sale' },
  { key: 'lettings', label: 'To Let' },
];

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const allFeatured = mockProperties.filter((p) => p.featured);
  const filtered = activeTab === 'all'
    ? allFeatured
    : allFeatured.filter((p) => p.department === activeTab);

  // Show up to 6 properties
  const displayed = filtered.slice(0, 6);

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4 }}
              className="text-[11px] font-inter font-medium uppercase tracking-[0.3em] text-brand"
            >
              Featured
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-cormorant text-[2.25rem] md:text-[2.75rem] font-light text-charcoal mt-3"
            >
              Latest Properties
            </motion.h2>
          </div>

          {/* Tab Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0 flex items-center gap-1"
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  'px-5 py-2 text-[12px] font-inter font-medium tracking-wide transition-all duration-300 rounded-full',
                  activeTab === tab.key
                    ? 'bg-brand text-white'
                    : 'text-charcoal hover:bg-beige'
                )}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* 2-Column Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {displayed.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/properties/${property.id}`} className="group block">
                {/* Taller Image - 3:4 Aspect */}
                <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                  <Image
                    src={property.main_image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge status={property.status} />
                  </div>
                  {/* Department tag */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-charcoal px-3 py-1.5 text-[10px] font-inter font-medium uppercase tracking-[0.15em]">
                      {property.department === 'sales' ? 'For Sale' : 'To Let'}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5">
                  <h3 className="font-cormorant text-[1.5rem] md:text-[1.75rem] font-light text-charcoal group-hover:text-brand transition-colors duration-500">
                    {property.title}
                  </h3>
                  <p className="text-[13px] text-slate font-inter font-light mt-1">
                    {property.address_line_1}, {property.city}
                  </p>
                  <p className="font-cormorant text-[1.25rem] text-charcoal mt-2">
                    {formatPrice(property.price, property.department)}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-[12px] text-slate/60 font-inter">
                    <span>{property.bedrooms} beds</span>
                    <span className="w-0.5 h-0.5 bg-taupe rounded-full" />
                    <span>{property.bathrooms} baths</span>
                    {(property.reception_rooms ?? 0) > 0 && (
                      <>
                        <span className="w-0.5 h-0.5 bg-taupe rounded-full" />
                        <span>{property.reception_rooms} recep</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-14">
          <Link
            href="/buy"
            className="group inline-flex items-center gap-3 text-[12px] font-inter font-medium uppercase tracking-[0.15em] text-charcoal hover:text-brand transition-colors duration-500"
          >
            View All Properties
            <span className="w-6 h-px bg-charcoal group-hover:w-10 group-hover:bg-brand transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
