'use client';

import { useMemo } from 'react';
import { mockProperties } from '@/lib/mock-data';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function BestOf2025Page() {
  const featuredProperties = useMemo(() => {
    return mockProperties
      .sort((a, b) => b.price - a.price)
      .slice(0, 6);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-wide text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-tiny font-inter font-medium uppercase tracking-widest text-brand"
          >
            Curated Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-hero text-charcoal mt-4"
          >
            Best of 2025
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-body text-slate font-inter font-light max-w-2xl mx-auto"
          >
            A curated selection of the finest properties we have had the privilege of marketing this year.
            Each one chosen for its character, quality, and enduring appeal.
          </motion.p>
        </div>
      </section>

      {/* Featured Properties - Magazine Layout */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="space-y-20">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Link href={`/properties/${property.id}`} className="group">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-[16/11] overflow-hidden bg-beige">
                        <Image
                          src={property.images[0]}
                          alt={property.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">
                        {property.department === 'sales' ? 'For Sale' : 'To Let'}
                      </span>
                      <h2 className="heading-title text-charcoal mt-3 group-hover:text-brand transition-colors">
                        {property.title}
                      </h2>
                      <p className="text-body text-slate font-inter font-light mt-2">{property.address_line_1}, {property.city}</p>
                      <p className="font-cormorant text-subtitle text-charcoal mt-4">
                        {formatPrice(property.price, property.department)}
                      </p>
                      <div className="flex items-center gap-6 mt-4 text-small text-slate font-inter">
                        <span>{property.bedrooms} bedrooms</span>
                        <span>{property.bathrooms} bathrooms</span>
                        {(property.reception_rooms ?? 0) > 0 && <span>{property.reception_rooms} reception</span>}
                      </div>
                      <p className="text-small text-slate font-inter font-light leading-relaxed mt-6 line-clamp-3">
                        {property.description}
                      </p>
                      <span className="inline-block mt-6 text-tiny font-inter font-medium uppercase tracking-widest text-brand">
                        View Property
                      </span>
                    </div>
                  </div>
                </Link>
                {index < featuredProperties.length - 1 && (
                  <div className="divider mt-20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
