'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=80"
          alt="Property interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-dark/85" />
      </div>

      <div className="container-narrow text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-inter font-medium uppercase tracking-[0.3em] text-white/50"
        >
          Your Property, Our Priority
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-cormorant text-[2.25rem] md:text-[3rem] font-light text-white mt-5 leading-tight"
        >
          Thinking of selling or letting?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-[15px] font-inter font-light text-white/50 max-w-md mx-auto leading-relaxed"
        >
          Discover how our bespoke approach and local expertise can achieve
          the best result for you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/valuation"
            className="group relative bg-white text-brand-dark px-10 py-4 text-[12px] font-inter font-medium tracking-[0.15em] uppercase overflow-hidden transition-shadow duration-500 hover:shadow-xl"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Free Valuation
            </span>
            <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
          <Link
            href="/contact"
            className="border border-white/25 text-white px-10 py-4 text-[12px] font-inter font-medium tracking-[0.15em] uppercase hover:bg-white/10 transition-all duration-500"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
