'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const heroImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Cycling Background Images with Ken Burns */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <Image
            src={img}
            alt="Luxury property"
            fill
            className="object-cover animate-ken-burns"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-[11px] font-inter font-medium uppercase tracking-[0.35em] text-white/70">
            Wimbledon Village
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="font-cormorant text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] font-light text-white leading-[0.95] tracking-tight">
            Property of
            <br />
            <em className="font-light italic">Distinction</em>
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="w-20 h-px bg-white/40 mx-auto mt-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          className="mt-8 text-[15px] md:text-lg font-inter font-light text-white/70 max-w-md mx-auto leading-relaxed tracking-wide"
        >
          Independent estate agency with over 30 years of expertise
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/buy"
            className="group relative bg-white text-charcoal px-12 py-4 text-[12px] font-inter font-medium tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:shadow-lg"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Buy</span>
            <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
          <Link
            href="/rent"
            className="group relative border border-white/40 text-white px-12 py-4 text-[12px] font-inter font-medium tracking-[0.2em] uppercase overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10">Rent</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDownIcon className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-px transition-all duration-700 ${
              current === i ? 'w-8 bg-white/80' : 'w-4 bg-white/30'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
