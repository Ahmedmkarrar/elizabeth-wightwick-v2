import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buying With Us',
  description: 'Find your perfect home in Wimbledon with Elizabeth Wightwick. Access to properties before they reach the market, expert guidance, and personal service.',
};

export default function BuyingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Luxury home interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">Homeowners</span>
          <h1 className="heading-display text-white mt-2">Buying With Us</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <h2 className="heading-title text-charcoal">Finding Your Perfect Home</h2>
              <div className="divider-brand mt-6 mb-8" />
              <div className="space-y-4 text-body text-slate font-inter font-light leading-relaxed">
                <p>
                  Buying a home in Wimbledon is about more than bricks and mortar. It is about finding the right street, the right character, and the right feel. Our intimate knowledge of the area means we can guide you to properties that match not just your requirements, but your aspirations.
                </p>
                <p>
                  As a buyer registered with Elizabeth Wightwick, you gain access to properties before they reach the open market. Many of our finest homes are sold discreetly, through our network, before a &lsquo;For Sale&rsquo; board ever goes up.
                </p>
                <p>
                  We take the time to understand what you are looking for — not just the number of bedrooms and bathrooms, but the lifestyle you want. This means we only contact you about properties that are genuinely right for you.
                </p>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/5] bg-beige">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Beautiful home interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-beige/30">
        <div className="container-content">
          <h2 className="heading-title text-charcoal text-center mb-14">Why Buy Through Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Off-Market Access',
                description: 'Many of our properties are sold before reaching the open market. Register with us to be the first to know about new homes.',
              },
              {
                title: 'Expert Guidance',
                description: 'From viewing to completion, we guide you through every step of the buying process with honest, practical advice.',
              },
              {
                title: 'Area Knowledge',
                description: 'We know every street in Wimbledon. We can advise on schools, transport links, local amenities, and the nuances that make each area unique.',
              },
              {
                title: 'No Pressure',
                description: 'We will never push you towards a property that is not right. Our job is to help you find the one that is.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-brand/20 pl-6">
                <h3 className="heading-section text-charcoal mb-3">{item.title}</h3>
                <p className="text-small text-slate font-inter font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="heading-title text-charcoal">Register Your Search</h2>
          <p className="mt-4 text-body font-inter font-light text-slate max-w-lg mx-auto">
            Tell us what you are looking for and be the first to know about new properties that match your criteria.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="bg-brand text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-brand-dark transition-colors inline-block"
            >
              Register Now
            </Link>
            <Link
              href="/buy"
              className="border border-charcoal text-charcoal px-8 py-3.5 text-small font-inter tracking-wide hover:bg-charcoal hover:text-white transition-all inline-block"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
