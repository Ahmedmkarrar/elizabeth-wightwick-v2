'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="section-padding border-b border-beige">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-cormorant text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] font-light text-charcoal leading-[1.1] tracking-tight">
              London property,<br />
              <span className="text-brand">handled personally.</span>
            </h2>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <p className="text-body text-slate font-inter font-light leading-relaxed text-[16px]">
              We are a boutique estate agency based in Wimbledon Village with more than 30 years of experience in South West London property. We work with a deliberately small number of clients — sellers, buyers, landlords, and tenants — to ensure that every relationship receives our full and undivided attention.
            </p>
            <p className="text-body text-slate font-inter font-light leading-relaxed text-[16px]">
              This is not an agency where your home is one of hundreds on a database. Every property we handle is handled by us, personally. From the first conversation to the final completion, you will always know who is looking after you.
            </p>
            <div className="pt-4">
              <Link
                href="/who-we-are"
                className="group inline-flex items-center gap-4 text-[11px] font-inter font-medium uppercase tracking-[0.25em] text-charcoal hover:text-brand transition-colors duration-500"
              >
                <span className="relative">
                  About Elizabeth Wightwick
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-brand transition-all duration-500" />
                </span>
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
