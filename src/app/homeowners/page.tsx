import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeowners',
  description: 'Whether you are selling, buying, letting, or looking for property management, Elizabeth Wightwick provides a personal, expert service in Wimbledon.',
};

const services = [
  {
    title: 'Selling With Us',
    description: 'We take a considered, personal approach to selling your home. Our marketing is tailored, our photography is exceptional, and our negotiation is tenacious.',
    href: '/homeowners/selling-with-us',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    title: 'Buying With Us',
    description: 'Finding your perfect home requires patience, local knowledge, and access to properties before they reach the open market. We offer all three.',
    href: '/homeowners/buying-with-us',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    title: 'Property Management',
    description: 'Comprehensive property management that protects your investment and gives you peace of mind. From tenant sourcing to day-to-day maintenance.',
    href: '/homeowners/property-management',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  },
  {
    title: 'Preparing to List Your Home',
    description: 'First impressions matter. Our guide to preparing your home for sale or let will help you achieve the best possible result.',
    href: '/homeowners/preparing-to-list',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
];

export default function HomeownersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
            alt="Beautiful home interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 container-wide">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">For Homeowners</span>
          <h1 className="heading-display text-white mt-3 max-w-2xl">
            Your Property, Our Priority
          </h1>
          <p className="mt-4 text-body font-inter font-light text-white/80 max-w-xl">
            Whether selling, buying, or managing your property, we offer a service built on trust, expertise, and genuine care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group">
                <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="heading-section text-charcoal mt-6 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-small text-slate font-inter font-light leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-tiny font-inter font-medium uppercase tracking-widest text-brand">
                  Learn More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-beige/30">
        <div className="container-narrow text-center">
          <h2 className="heading-title text-charcoal">Thinking of Selling or Letting?</h2>
          <p className="mt-4 text-body font-inter font-light text-slate max-w-lg mx-auto">
            Book a free, no-obligation valuation with us. We will provide honest, expert advice on your property and the current market.
          </p>
          <div className="mt-8">
            <Link
              href="/valuation"
              className="bg-brand text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-brand-dark transition-colors inline-block"
            >
              Book a Free Valuation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
