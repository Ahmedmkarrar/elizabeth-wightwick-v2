'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury property in Wimbledon Village"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="heading-hero text-white">
            Wimbledon&apos;s Finest
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="w-16 h-px bg-white/50 mx-auto mt-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-8 text-lg md:text-xl font-inter font-light text-white/80 max-w-xl mx-auto leading-relaxed tracking-wide"
        >
          Independent estate agency with 30 years of expertise in Wimbledon Village
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/buy"
            className="bg-white/95 text-charcoal px-10 py-4 text-small font-inter tracking-widest uppercase hover:bg-white transition-colors duration-400"
          >
            Buy
          </Link>
          <Link
            href="/rent"
            className="border border-white/50 text-white px-10 py-4 text-small font-inter tracking-widest uppercase hover:bg-white/10 transition-all duration-400"
          >
            Rent
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
