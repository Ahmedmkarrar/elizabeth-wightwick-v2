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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <Link
              href="/buy"
              className="group inline-flex items-center gap-2 text-[12px] font-inter font-medium uppercase tracking-[0.15em] text-charcoal hover:text-brand transition-colors duration-500"
            >
              View All
              <span className="w-4 h-px bg-charcoal group-hover:w-8 group-hover:bg-brand transition-all duration-500" />
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
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="font-cormorant text-[1.75rem] md:text-[2rem] font-light text-charcoal group-hover:text-brand transition-colors duration-500">
                  {hero.title}
                </h3>
                <p className="text-[14px] text-slate font-inter font-light mt-1">{hero.address_line_1}, {hero.city}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="font-cormorant text-[1.5rem] md:text-subtitle text-charcoal">
                  {formatPrice(hero.price, hero.department)}
                </p>
                <div className="flex items-center gap-4 mt-1 text-[13px] text-slate/70 font-inter md:justify-end">
                  <span>{hero.bedrooms} beds</span>
                  <span className="w-0.5 h-0.5 bg-taupe rounded-full" />
                  <span>{hero.bathrooms} baths</span>
                  {(hero.reception_rooms ?? 0) > 0 && (
                    <>
                      <span className="w-0.5 h-0.5 bg-taupe rounded-full" />
                      <span>{hero.reception_rooms} reception</span>
                    </>
                  )}
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
                    className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-5">
                  <p className="font-cormorant text-[1.35rem] text-charcoal font-normal">
                    {formatPrice(property.price, property.department)}
                  </p>
                  <h3 className="font-inter text-[13px] font-medium text-charcoal group-hover:text-brand transition-colors duration-300 mt-2">
                    {property.title}
                  </h3>
                  <p className="text-[12px] text-slate/70 font-inter mt-1">{property.address_line_1}, {property.city}</p>
                  <div className="flex items-center gap-3 mt-2.5 text-[12px] text-slate/60 font-inter">
                    <span>{property.bedrooms} beds</span>
                    <span className="w-0.5 h-0.5 bg-taupe rounded-full" />
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
