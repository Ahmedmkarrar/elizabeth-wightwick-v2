'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Residential Sales',
    description:
      'Expert guidance through every step of selling your property, with bespoke marketing tailored to your home.',
    href: '/services/sales',
  },
  {
    number: '02',
    title: 'Residential Lettings',
    description:
      'Comprehensive lettings service for landlords and tenants, ensuring the perfect match every time.',
    href: '/services/lettings',
  },
  {
    number: '03',
    title: 'Property Management',
    description:
      'Full property management service, handling every aspect of your rental property with care and diligence.',
    href: '/services/property-management',
  },
  {
    number: '04',
    title: 'Property Sourcing',
    description:
      'A bespoke property finding service for buyers who want a dedicated search professional on their side.',
    href: '/services/property-sourcing',
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="heading-display text-charcoal text-center"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-body text-slate font-inter font-light text-center max-w-xl mx-auto"
        >
          Dedicated, personal service across every aspect of property
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-taupe/30 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block bg-white p-10 h-full transition-colors duration-400 hover:bg-cream"
              >
                <span className="font-cormorant text-4xl font-light text-gold">
                  {service.number}
                </span>
                <h3 className="font-cormorant text-subtitle font-light text-charcoal mt-6 mb-4">
                  {service.title}
                </h3>
                <p className="text-small text-slate font-inter font-light leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-6 text-tiny font-inter text-charcoal uppercase tracking-widest relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-400 group-hover:after:w-full">
                  Learn More
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
