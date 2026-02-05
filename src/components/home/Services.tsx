'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Best of 2025',
    description: 'A curated collection of the finest properties we have marketed this year. Each chosen for character, quality, and enduring appeal.',
    href: '/best-of-2025',
    label: 'View Collection',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
  },
  {
    title: 'For Homeowners',
    description: 'Whether selling, buying, or managing your property, we offer a service built on trust, expertise, and genuine care for your home.',
    href: '/homeowners',
    label: 'Explore',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-beige/20">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Link href={section.href} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <h3 className="heading-title text-charcoal mt-6 group-hover:text-brand transition-colors">
                  {section.title}
                </h3>
                <p className="mt-3 text-body text-slate font-inter font-light leading-relaxed">
                  {section.description}
                </p>
                <span className="inline-block mt-4 text-tiny font-inter font-medium uppercase tracking-widest text-brand">
                  {section.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
