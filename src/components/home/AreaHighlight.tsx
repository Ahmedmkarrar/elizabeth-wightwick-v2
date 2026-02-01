'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AreaHighlight() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Image */}
        <div className="relative h-[400px] lg:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80"
            alt="Wimbledon Village"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="flex items-center bg-white">
          <div className="px-8 py-16 lg:px-16 lg:py-20 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tiny font-inter font-medium uppercase tracking-widest text-gold">
                Local Expertise
              </span>
              <h2 className="heading-display text-charcoal mt-4">
                Wimbledon Village
              </h2>
              <div className="divider-gold mt-6 mb-8" />
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                With over 30 years of combined experience in Wimbledon and South West London,
                we bring unrivalled local knowledge to every property transaction. From the
                tree-lined streets of the Village to the open spaces of the Common, we know
                every corner of this exceptional area.
              </p>
              <p className="text-body text-slate font-inter font-light leading-relaxed mt-4">
                Our office on the High Street places us at the heart of the community,
                enabling us to offer genuinely local insight and a personal service that
                larger agencies simply cannot match.
              </p>
              <Link
                href="/wimbledon"
                className="inline-block mt-8 text-small font-inter text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-400"
              >
                Explore Wimbledon
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
