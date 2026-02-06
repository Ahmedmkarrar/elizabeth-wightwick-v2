'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AreaHighlight() {
  return (
    <section className="relative overflow-hidden bg-warm-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[650px]">
        {/* Image */}
        <div className="relative h-[450px] lg:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80"
            alt="Wimbledon Village"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="flex items-center">
          <div className="px-8 py-20 lg:px-20 lg:py-24 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] font-inter font-medium uppercase tracking-[0.3em] text-brand">
                Local Expertise
              </span>
              <h2 className="font-cormorant text-[2.25rem] md:text-[2.75rem] font-light text-charcoal mt-5 leading-tight">
                Wimbledon Village
              </h2>
              <div className="w-12 h-px bg-brand/40 mt-6 mb-8" />
              <p className="text-[15px] text-slate font-inter font-light leading-[1.9]">
                With over 30 years of combined experience in Wimbledon and South West London,
                we bring unrivalled local knowledge to every property transaction. From the
                tree-lined streets of the Village to the open spaces of the Common, we know
                every corner of this exceptional area.
              </p>
              <p className="text-[15px] text-slate font-inter font-light leading-[1.9] mt-5">
                Our office on the High Street places us at the heart of the community,
                enabling us to offer genuinely local insight and a personal service that
                larger agencies simply cannot match.
              </p>
              <Link
                href="/wimbledon"
                className="group inline-flex items-center gap-3 mt-10 text-[12px] font-inter font-medium uppercase tracking-[0.15em] text-charcoal hover:text-brand transition-colors duration-500"
              >
                Explore Wimbledon
                <span className="w-6 h-px bg-charcoal group-hover:w-10 group-hover:bg-brand transition-all duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
