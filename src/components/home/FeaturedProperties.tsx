'use client';

import Link from 'next/link';
import Image from 'next/image';
import { mockProperties } from '@/lib/mock-data';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function FeaturedProperties() {
  const featured = mockProperties.filter((p) => p.featured).slice(0, 4);
  const hero = featured[0];
  const rest = featured.slice(1, 4);

  if (!hero) return null;

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4 }}
              className="text-tiny font-inter font-medium uppercase tracking-widest text-brand"
            >
              Featured
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-display text-charcoal mt-3"
            >
              Latest Properties
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <Link
              href="/buy"
              className="text-small font-inter text-charcoal border-b border-charcoal pb-0.5 hover:text-brand hover:border-brand transition-colors duration-400"
            >
              View All Properties
            </Link>
          </motion.div>
        </div>

        {/* Hero Property - Large Format */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <Link href={`/properties/${hero.id}`} className="group block">
            <div className="relative aspect-[21/9] overflow-hidden bg-beige">
              <Image
                src={hero.images[0]}
                alt={hero.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="100vw"
              />
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="heading-title text-charcoal group-hover:text-brand transition-colors">
                  {hero.title}
                </h3>
                <p className="text-body text-slate font-inter font-light mt-1">{hero.address_line_1}, {hero.city}</p>
              </div>
              <div className="text-right">
                <p className="font-cormorant text-subtitle text-charcoal">
                  {formatPrice(hero.price, hero.department)}
                </p>
                <div className="flex items-center gap-4 mt-1 text-small text-slate font-inter justify-end">
                  <span>{hero.bedrooms} beds</span>
                  <span>{hero.bathrooms} baths</span>
                  {(hero.reception_rooms ?? 0) > 0 && <span>{hero.reception_rooms} reception</span>}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary Properties - Three Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {rest.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/properties/${property.id}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="heading-section text-charcoal group-hover:text-brand transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-small text-slate font-inter font-light mt-1">{property.address_line_1}, {property.city}</p>
                  <p className="font-cormorant text-section text-charcoal mt-2">
                    {formatPrice(property.price, property.department)}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-tiny text-slate font-inter">
                    <span>{property.bedrooms} beds</span>
                    <span>{property.bathrooms} baths</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
