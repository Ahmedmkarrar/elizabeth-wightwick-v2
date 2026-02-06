'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Best of 2025',
    subtitle: 'Curated Collection',
    description: 'The finest properties we have had the privilege of marketing this year. Each one hand-selected to showcase the very best of what South West London has to offer.',
    href: '/best-of-2025',
    label: 'View Collection',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    reverse: false,
  },
  {
    title: 'For Homeowners',
    subtitle: 'Our Services',
    description: 'A bespoke service built on trust, expertise, and genuine care for your home. Whether selling, letting, or managing your property, we bring a personal approach that larger agencies simply cannot match.',
    href: '/homeowners',
    label: 'Explore Services',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    reverse: true,
  },
];

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container-wide space-y-20 lg:space-y-28">
        {sections.map((section) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
              section.reverse ? 'lg:[direction:rtl]' : ''
            }`}
          >
            {/* Image */}
            <div className={section.reverse ? 'lg:[direction:ltr]' : ''}>
              <div className="relative aspect-[4/5] overflow-hidden bg-beige">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className={section.reverse ? 'lg:[direction:ltr]' : ''}>
              <span className="text-[11px] font-inter font-medium uppercase tracking-[0.3em] text-brand">
                {section.subtitle}
              </span>
              <h3 className="font-cormorant text-[2rem] sm:text-[2.5rem] font-light text-charcoal mt-4 leading-tight">
                {section.title}
              </h3>
              <div className="w-12 h-px bg-brand/40 mt-6 mb-6" />
              <p className="text-[15px] text-slate font-inter font-light leading-[1.8] max-w-md">
                {section.description}
              </p>
              <Link
                href={section.href}
                className="group inline-flex items-center gap-3 mt-8 text-[12px] font-inter font-medium uppercase tracking-[0.15em] text-charcoal hover:text-brand transition-colors duration-500"
              >
                {section.label}
                <span className="w-6 h-px bg-charcoal group-hover:w-10 group-hover:bg-brand transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
