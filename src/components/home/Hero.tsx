'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { mockProperties } from '@/lib/mock-data';
import { formatPrice } from '@/lib/utils';

const featuredProperties = mockProperties.filter((p) => p.featured).slice(0, 4);

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % featuredProperties.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const property = featuredProperties[current];
  if (!property) return null;

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background Images with Ken Burns */}
      {featuredProperties.map((p, i) => (
        <div
          key={p.id}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <Image
            src={p.main_image}
            alt={p.title}
            fill
            className="object-cover animate-ken-burns"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-charcoal/30" />

      {/* Property Info Content */}
      <div className="relative z-10 w-full pb-20 md:pb-28">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Department Tag */}
              <span className="inline-block bg-brand text-white px-4 py-1.5 text-[10px] font-inter font-medium uppercase tracking-[0.2em] mb-5">
                {property.department === 'sales' ? 'For Sale' : 'To Let'}
              </span>

              {/* Title */}
              <h1 className="font-cormorant text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-light text-white leading-[0.95] tracking-tight">
                {property.title}
              </h1>

              {/* Location */}
              <p className="mt-3 text-[15px] md:text-lg font-inter font-light text-white/60 tracking-wide">
                {property.address_line_1}, {property.city} {property.postcode}
              </p>

              {/* Price + Features Row */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <span className="font-cormorant text-[1.75rem] md:text-[2.25rem] text-white font-light">
                  {formatPrice(property.price, property.department)}
                </span>
                <div className="flex items-center gap-4 text-[13px] text-white/50 font-inter">
                  <span>{property.bedrooms} Beds</span>
                  <span className="w-0.5 h-0.5 bg-white/30 rounded-full" />
                  <span>{property.bathrooms} Baths</span>
                  {(property.reception_rooms ?? 0) > 0 && (
                    <>
                      <span className="w-0.5 h-0.5 bg-white/30 rounded-full" />
                      <span>{property.reception_rooms} Reception</span>
                    </>
                  )}
                </div>
              </div>

              {/* View Property CTA */}
              <Link
                href={`/properties/${property.id}`}
                className="group inline-flex items-center gap-3 mt-8 text-[12px] font-inter font-medium uppercase tracking-[0.2em] text-white hover:text-white/80 transition-colors duration-500"
              >
                View Property
                <span className="w-6 h-px bg-white/50 group-hover:w-10 transition-all duration-500" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-6 md:right-12 bottom-20 md:bottom-28 z-10 flex items-center gap-3">
        <button
          onClick={prev}
          className="w-11 h-11 flex items-center justify-center border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
          aria-label="Previous property"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-11 h-11 flex items-center justify-center border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
          aria-label="Next property"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5">
        {featuredProperties.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-700 rounded-full ${
              current === i ? 'w-8 h-1.5 bg-white/90' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to property ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
