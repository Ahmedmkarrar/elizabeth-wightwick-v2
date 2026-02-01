'use client';

import Link from 'next/link';
import { mockProperties } from '@/lib/mock-data';
import PropertyCard from '@/components/properties/PropertyCard';
import { motion } from 'framer-motion';

export default function FeaturedProperties() {
  const featured = mockProperties.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="heading-display text-charcoal"
            >
              Latest Properties
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-body text-slate font-inter font-light max-w-lg"
            >
              A curated selection of our finest properties in Wimbledon and South West London
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/properties"
              className="text-small font-inter text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-400 mt-4 md:mt-0 inline-block"
            >
              View All Properties
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {featured.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
