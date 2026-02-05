'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Best of 2025',
    subtitle: 'Curated Collection',
    description: 'The finest properties we have had the privilege of marketing this year.',
    href: '/best-of-2025',
    label: 'View Collection',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
  },
  {
    title: 'For Homeowners',
    subtitle: 'Our Services',
    description: 'A bespoke service built on trust, expertise, and genuine care for your home.',
    href: '/homeowners',
    label: 'Explore Services',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-beige/20">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Link href={section.href} className="group block relative">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-beige">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                    <span className="text-[10px] font-inter font-medium uppercase tracking-[0.3em] text-white/60 mb-3">
                      {section.subtitle}
                    </span>
                    <h3 className="font-cormorant text-[2rem] sm:text-[2.5rem] font-light text-white leading-tight">
                      {section.title}
                    </h3>
                    <p className="mt-3 text-[13px] text-white/60 font-inter font-light leading-relaxed max-w-xs">
                      {section.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2">
                      <span className="text-[11px] font-inter font-medium uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors duration-500">
                        {section.label}
                      </span>
                      <span className="w-4 h-px bg-white/50 group-hover:w-8 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
