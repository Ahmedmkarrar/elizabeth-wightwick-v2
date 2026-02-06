'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mockProperties } from '@/lib/mock-data';
import { formatPrice, cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import ScrollReveal from '@/components/ui/ScrollReveal';

type FilterTab = 'all' | 'sales' | 'lettings';

const tabs: { key: FilterTab; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'sales', label: 'For Sale' },
  { key: 'lettings', label: 'To Let' },
];

function PropertyImageHover({ property }: { property: typeof mockProperties[0] }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = property.images.slice(0, 4);

  return (
    <div
      className="relative aspect-[3/4] overflow-hidden bg-beige"
      onMouseLeave={() => setImgIndex(0)}
    >
      {/* Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: imgIndex === i ? 1 : 0 }}
        >
          <Image
            src={img}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}

      {/* Hover zones to switch images */}
      {images.length > 1 && (
        <div className="absolute inset-0 z-10 flex">
          {images.map((_, i) => (
            <div
              key={i}
              className="flex-1"
              onMouseEnter={() => setImgIndex(i)}
            />
          ))}
        </div>
      )}

      {/* Image indicator dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                imgIndex === i ? 'w-5 bg-white' : 'w-1 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-4 left-4 z-20">
        <Badge status={property.status} />
      </div>

      {/* Department tag */}
      <div className="absolute top-4 right-4 z-20">
        <span className="bg-white/90 backdrop-blur-sm text-charcoal px-3 py-1.5 text-[9px] font-inter font-semibold uppercase tracking-[0.2em]">
          {property.department === 'sales' ? 'Sale' : 'Let'}
        </span>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const allFeatured = mockProperties.filter((p) => p.featured);
  const filtered = activeTab === 'all'
    ? allFeatured
    : allFeatured.filter((p) => p.department === activeTab);

  const displayed = filtered.slice(0, 6);

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <ScrollReveal>
            <span className="text-[11px] font-inter font-medium uppercase tracking-[0.3em] text-brand">
              Featured
            </span>
            <h2 className="font-cormorant text-[2.25rem] md:text-[3rem] font-light text-charcoal mt-3">
              Latest Properties
            </h2>
          </ScrollReveal>

          {/* Tab Filters */}
          <ScrollReveal delay={0.2}>
            <div className="mt-6 md:mt-0 flex items-center gap-1 bg-beige rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    'relative px-6 py-2.5 text-[11px] font-inter font-medium tracking-[0.1em] uppercase transition-all duration-400 rounded-full',
                    activeTab === tab.key
                      ? 'text-white'
                      : 'text-charcoal hover:text-brand'
                  )}
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-brand rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* 2-Column Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {displayed.map((property, i) => (
            <ScrollReveal key={property.id} delay={i * 0.1}>
              <Link href={`/properties/${property.id}`} className="group block">
                <PropertyImageHover property={property} />

                {/* Info */}
                <div className="mt-6">
                  <h3 className="font-cormorant text-[1.5rem] md:text-[1.85rem] font-light text-charcoal group-hover:text-brand transition-colors duration-500">
                    {property.title}
                  </h3>
                  <p className="text-[13px] text-slate font-inter font-light mt-1.5">
                    {property.address_line_1}, {property.city}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <p className="font-cormorant text-[1.35rem] text-charcoal">
                      {formatPrice(property.price, property.department)}
                    </p>
                    <div className="flex items-center gap-4 text-[12px] text-slate/60 font-inter">
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
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Link */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16">
            <Link
              href="/buy"
              className="group inline-flex items-center gap-4 text-[11px] font-inter font-medium uppercase tracking-[0.2em] text-charcoal hover:text-brand transition-colors duration-500"
            >
              <span className="relative">
                View All Properties
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-brand transition-all duration-500" />
              </span>
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
