import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Sales',
  description: 'Expert property sales service in Wimbledon Village. Bespoke marketing, professional photography, and dedicated guidance from listing to completion.',
};

const process = [
  { step: '01', title: 'Valuation', description: 'We visit your property and provide an honest, accurate assessment of its market value based on our deep local knowledge.' },
  { step: '02', title: 'Marketing', description: 'Professional photography, detailed floor plans, and compelling descriptions. Your property is showcased across all major portals and our website.' },
  { step: '03', title: 'Viewings', description: 'We personally accompany all viewings, presenting your property at its best and answering any questions prospective buyers may have.' },
  { step: '04', title: 'Negotiation', description: 'Expert negotiation to achieve the best possible price. We manage offers transparently and advise you throughout.' },
  { step: '05', title: 'Completion', description: 'We coordinate with solicitors, surveyors and all parties to ensure a smooth progression from offer to exchange and completion.' },
];

export default function SalesServicePage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
          alt="Luxury property for sale in Wimbledon"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        <div className="relative container-wide pb-12 text-white">
          <h1 className="heading-display text-white">Residential Sales</h1>
          <p className="mt-3 text-body font-inter font-light text-white/80 max-w-xl">
            Expert guidance from valuation to completion, ensuring the best result for your property
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="max-w-2xl">
            <h2 className="heading-title text-charcoal">Why Choose Us</h2>
            <div className="divider-brand mt-6 mb-8" />
            <p className="text-body text-slate font-inter font-light leading-relaxed">
              Selling your home is one of the most significant decisions you will make. At Elizabeth Wightwick, we combine over 30 years of local expertise with a genuinely personal approach. As an independent, family-run agency, you will always deal directly with us &mdash; never a junior or a call centre.
            </p>
            <p className="text-body text-slate font-inter font-light leading-relaxed mt-4">
              We take the time to understand your property, your circumstances, and your goals. This enables us to create a tailored marketing strategy that positions your home to achieve the best possible price within your desired timeframe.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <h2 className="heading-title text-charcoal mb-14">Our Process</h2>
          <div className="space-y-12">
            {process.map((item) => (
              <div key={item.step} className="flex gap-8 items-start">
                <span className="font-cormorant text-4xl font-light text-brand flex-shrink-0 w-12">{item.step}</span>
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
          <h2 className="heading-display text-white">Thinking of selling?</h2>
          <p className="mt-4 text-body font-inter font-light text-white/60 max-w-lg mx-auto">
            Request a free, no-obligation valuation of your property
          </p>
          <Link
            href="/valuation"
            className="inline-block mt-8 bg-brand text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-brand-dark transition-colors"
          >
            Request Free Valuation
          </Link>
        </div>
      </section>
    </>
  );
}
