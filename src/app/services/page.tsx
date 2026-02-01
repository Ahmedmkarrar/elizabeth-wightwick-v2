import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Residential sales, lettings, property management and property sourcing services in Wimbledon Village. Independent, bespoke service with 30+ years experience.',
};

const services = [
  {
    number: '01',
    title: 'Residential Sales',
    description: 'Expert guidance through every step of selling your Wimbledon property. We provide bespoke marketing strategies, professional photography, and dedicated service to achieve the best possible price for your home.',
    href: '/services/sales',
    highlights: ['Bespoke marketing strategy', 'Professional photography & floor plans', 'Rightmove & Zoopla listing', 'Accompanied viewings', 'Expert negotiation'],
  },
  {
    number: '02',
    title: 'Residential Lettings',
    description: 'Comprehensive lettings service for landlords and tenants in Wimbledon and South West London. From tenant finding to full management, we provide a seamless, professional service.',
    href: '/services/lettings',
    highlights: ['Thorough tenant referencing', 'Professional marketing', 'Regular property inspections', 'Compliance management', 'Dedicated contact'],
  },
  {
    number: '03',
    title: 'Property Management',
    description: 'Full property management for landlords who want peace of mind. We handle every aspect of your rental property, from rent collection to maintenance coordination.',
    href: '/services/property-management',
    highlights: ['Rent collection', 'Maintenance coordination', 'Regular inspections', 'Legal compliance', 'Emergency support'],
  },
  {
    number: '04',
    title: 'Property Sourcing',
    description: 'A bespoke property finding service for buyers seeking their perfect home. We search on and off the market to find properties that match your exact requirements.',
    href: '/services/property-sourcing',
    highlights: ['Off-market opportunities', 'Tailored property search', 'Viewing accompaniment', 'Negotiation support', 'Local market intelligence'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-content">
          <h1 className="heading-display text-charcoal">Our Services</h1>
          <p className="mt-4 text-body text-slate font-inter font-light max-w-2xl">
            Dedicated, personal service across every aspect of property in Wimbledon
            and South West London. Independent expertise you can trust.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-cream">
        <div className="container-content space-y-20">
          {services.map((service) => (
            <div key={service.number} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <span className="font-cormorant text-5xl font-light text-gold">{service.number}</span>
                <h2 className="heading-title text-charcoal mt-4 mb-6">{service.title}</h2>
                <p className="text-body text-slate font-inter font-light leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-block mt-8 bg-gold text-white px-7 py-3 text-small font-inter tracking-wide hover:bg-gold-dark transition-colors duration-400"
                >
                  Learn More
                </Link>
              </div>
              <div className="space-y-4">
                <p className="text-tiny font-inter font-medium uppercase tracking-widest text-slate/60 mb-4">
                  What&apos;s Included
                </p>
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-4 py-3 border-b border-taupe/20">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-body font-inter text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-white">Ready to get started?</h2>
          <p className="mt-4 text-body font-inter font-light text-white/60 max-w-lg mx-auto">
            Contact us today to discuss how we can help with your property needs
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-gold-dark transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/valuation"
              className="border border-white/30 text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/10 transition-all"
            >
              Free Valuation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
