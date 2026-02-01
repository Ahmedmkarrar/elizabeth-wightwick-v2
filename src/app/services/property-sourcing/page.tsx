import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Sourcing',
  description: 'Bespoke property finding service in Wimbledon. We search on and off the market to find your perfect home in South West London.',
};

const steps = [
  { step: '01', title: 'Share Your Requirements', description: 'We take the time to understand exactly what you are looking for &mdash; from the number of bedrooms to the feel of the street. No detail is too small.' },
  { step: '02', title: 'We Search for You', description: 'Using our extensive network and deep local knowledge, we search both on and off the market to identify properties that match your criteria.' },
  { step: '03', title: 'Curated Shortlist', description: 'We present you with a carefully curated selection of properties, each accompanied by our honest assessment and local insight.' },
  { step: '04', title: 'Viewings & Advice', description: 'We accompany you to viewings, providing objective guidance to help you make an informed decision.' },
  { step: '05', title: 'Offer & Negotiation', description: 'When you find the right property, we advise on the offer and negotiate on your behalf to secure the best possible terms.' },
];

export default function PropertySourcingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-content">
          <h1 className="heading-display text-charcoal">Property Sourcing</h1>
          <p className="mt-4 text-body text-slate font-inter font-light max-w-2xl">
            A bespoke property finding service for buyers who want a dedicated search professional working exclusively on their behalf.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="max-w-2xl mb-20">
            <h2 className="heading-title text-charcoal">We&apos;ll Find Your Perfect Home</h2>
            <div className="divider-gold mt-6 mb-8" />
            <p className="text-body text-slate font-inter font-light leading-relaxed">
              Searching for a home in Wimbledon can be time-consuming and competitive. Our property sourcing service puts a local expert in your corner, dedicated entirely to finding the right property for you.
            </p>
            <p className="text-body text-slate font-inter font-light leading-relaxed mt-4">
              With access to off-market opportunities and pre-market properties, we can often introduce you to homes before they reach the open market &mdash; giving you a significant advantage in a sought-after area.
            </p>
          </div>

          <h2 className="heading-title text-charcoal mb-14">How It Works</h2>
          <div className="space-y-12">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-8 items-start">
                <span className="font-cormorant text-4xl font-light text-gold flex-shrink-0 w-12">{item.step}</span>
                <div className="pb-12 border-b border-taupe/20 flex-1">
                  <h3 className="heading-section text-charcoal mb-3">{item.title}</h3>
                  <p className="text-body text-slate font-inter font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-white">Ready to start your search?</h2>
          <p className="mt-4 text-body font-inter font-light text-white/60 max-w-lg mx-auto">
            Register your requirements and let us find your perfect Wimbledon home
          </p>
          <Link
            href="/register"
            className="inline-block mt-8 bg-gold text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-gold-dark transition-colors"
          >
            Register Your Requirements
          </Link>
        </div>
      </section>
    </>
  );
}
