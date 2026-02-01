'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="section-padding bg-charcoal text-white">
      <div className="container-narrow text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="heading-display text-white"
        >
          Looking to sell or let your property?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-body font-inter font-light text-white/60 max-w-lg mx-auto"
        >
          Discover how our bespoke approach and local expertise can achieve
          the best result for you
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/valuation"
            className="bg-gold text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-gold-dark transition-colors duration-400"
          >
            Request Free Valuation
          </Link>
          <Link
            href="/register"
            className="border border-white/30 text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/10 transition-all duration-400"
          >
            Register Your Search
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
