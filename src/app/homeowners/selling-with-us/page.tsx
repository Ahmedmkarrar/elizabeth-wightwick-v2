import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selling With Us',
  description: 'Sell your property in Wimbledon with Elizabeth Wightwick. Personal service, exceptional marketing, and expert local knowledge.',
};

const steps = [
  {
    number: '01',
    title: 'Valuation & Appraisal',
    description: 'We visit your property, assess its strengths, and provide an honest, evidence-based valuation. No inflated figures to win your business — just realistic pricing supported by comparable sales data.',
  },
  {
    number: '02',
    title: 'Preparation & Photography',
    description: 'We advise on presentation, arrange professional photography and floor plans, and craft compelling property descriptions that highlight what makes your home special.',
  },
  {
    number: '03',
    title: 'Marketing & Viewings',
    description: 'Your property is marketed across all major portals, our website, and through our network of registered buyers. We conduct accompanied viewings and provide detailed feedback.',
  },
  {
    number: '04',
    title: 'Negotiation & Completion',
    description: 'We negotiate tenaciously on your behalf, qualify buyers thoroughly, and guide you through the conveyancing process to ensure a smooth completion.',
  },
];

export default function SellingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Beautiful property exterior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">Homeowners</span>
          <h1 className="heading-display text-white mt-2">Selling With Us</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="text-body text-slate font-inter font-light leading-relaxed text-lg">
              Selling your home is one of the most significant decisions you will make. We understand this, and our approach reflects it. From the initial valuation to the day you hand over the keys, we provide a personal, considered service that puts your interests first.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding pt-0">
        <div className="container-content">
          <h2 className="heading-title text-charcoal mb-14">Our Process</h2>
          <div className="space-y-16">
            {steps.map((step) => (
              <div key={step.number} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <span className="font-cormorant text-display text-brand/20 font-light">{step.number}</span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="heading-section text-charcoal mb-3">{step.title}</h3>
                  <p className="text-body text-slate font-inter font-light leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-beige/30">
        <div className="container-content">
          <h2 className="heading-title text-charcoal text-center mb-14">Why Sell With Elizabeth Wightwick</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Personal Attention',
                description: 'Every property on our books receives dedicated attention. We deliberately limit our portfolio to ensure the highest standard of service.',
              },
              {
                title: 'Local Market Knowledge',
                description: 'With over 30 years in Wimbledon, we understand the micro-markets, buyer preferences, and pricing dynamics that national chains simply cannot match.',
              },
              {
                title: 'Exceptional Marketing',
                description: 'Professional photography, compelling descriptions, and strategic placement across all major portals and our curated buyer network.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="heading-section text-charcoal mb-4">{item.title}</h3>
                <p className="text-small text-slate font-inter font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-white">Ready to Sell?</h2>
          <p className="mt-4 text-body font-inter font-light text-white/70 max-w-lg mx-auto">
            Book a free, no-obligation valuation and let us show you what we can achieve for your property.
          </p>
          <div className="mt-8">
            <Link
              href="/valuation"
              className="bg-white text-brand-dark px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/90 transition-colors inline-block"
            >
              Book a Free Valuation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
