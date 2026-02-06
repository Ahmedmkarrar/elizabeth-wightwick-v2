'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { mockProperties } from '@/lib/mock-data';
import { formatPrice } from '@/lib/utils';
import MagneticButton from '@/components/ui/MagneticButton';

const featuredProperties = mockProperties.filter((p) => p.featured).slice(0, 4);

// Split text into characters for animation
function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 80, opacity: 0, rotateX: 40 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);

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

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const property = featuredProperties[current];
  if (!property) return null;

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background Images with Ken Burns + Parallax */}
      {featuredProperties.map((p, i) => (
        <div
          key={p.id}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{
            opacity: current === i ? 1 : 0,
            transform: `translateY(${scrollY * 0.15}px) scale(${1 + scrollY * 0.0002})`,
          }}
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

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/40" />

      {/* Vignette effect */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%)',
      }} />

      {/* Slide counter */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 z-10 hidden md:flex flex-col items-center gap-4">
        <span className="text-[11px] font-inter font-medium text-white/50 tracking-wider">
          {String(current + 1).padStart(2, '0')}
        </span>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            key={current}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 7, ease: 'linear' }}
            className="absolute top-0 left-0 w-full bg-white/60"
          />
        </div>
        <span className="text-[11px] font-inter font-medium text-white/30 tracking-wider">
          {String(featuredProperties.length).padStart(2, '0')}
        </span>
      </div>

      {/* Property Info Content */}
      <div className="relative z-10 w-full pb-24 md:pb-32">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Department Tag */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block bg-brand text-white px-5 py-2 text-[10px] font-inter font-medium uppercase tracking-[0.25em] mb-6"
              >
                {property.department === 'sales' ? 'For Sale' : 'To Let'}
              </motion.span>

              {/* Title - Split Text Animation */}
              <div className="overflow-hidden">
                <h1 className="font-cormorant text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.5rem] font-light text-white leading-[0.9] tracking-tight">
                  <SplitText text={property.title} delay={0.3} />
                </h1>
              </div>

              {/* Location with reveal */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-4 text-[15px] md:text-lg font-inter font-light text-white/50 tracking-wide"
              >
                {property.address_line_1}, {property.city} {property.postcode}
              </motion.p>

              {/* Animated divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-20 h-px bg-white/30 mt-6 mb-6 origin-left"
              />

              {/* Price + Features Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
              >
                <span className="font-cormorant text-[2rem] md:text-[2.5rem] text-white font-light">
                  {formatPrice(property.price, property.department)}
                </span>
                <div className="flex items-center gap-5 text-[13px] text-white/40 font-inter">
                  <span>{property.bedrooms} Beds</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span>{property.bathrooms} Baths</span>
                  {(property.reception_rooms ?? 0) > 0 && (
                    <>
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      <span>{property.reception_rooms} Reception</span>
                    </>
                  )}
                </div>
              </motion.div>

              {/* View Property CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="mt-8"
              >
                <MagneticButton>
                  <Link
                    href={`/properties/${property.id}`}
                    className="group inline-flex items-center gap-4 text-[11px] font-inter font-medium uppercase tracking-[0.25em] text-white/80 hover:text-white transition-colors duration-500"
                  >
                    <span className="relative">
                      View Property
                      <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-white transition-all duration-500" />
                    </span>
                    <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-6 md:left-12 bottom-24 md:bottom-32 z-10 flex items-center gap-2">
        <MagneticButton>
          <button
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-500 backdrop-blur-sm"
            aria-label="Previous property"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        </MagneticButton>
        <MagneticButton>
          <button
            onClick={next}
            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-500 backdrop-blur-sm"
            aria-label="Next property"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </MagneticButton>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-inter uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-6 bg-white/20"
        />
      </motion.div>
    </section>
  );
}
