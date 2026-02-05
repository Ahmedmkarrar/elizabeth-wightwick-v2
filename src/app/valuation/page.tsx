import type { Metadata } from 'next';
import ValuationForm from '@/components/forms/ValuationForm';

export const metadata: Metadata = {
  title: 'Free Property Valuation',
  description: 'Request a free, no-obligation property valuation from Elizabeth Wightwick. Expert local knowledge of Wimbledon and South West London property values.',
};

const benefits = [
  { title: 'Free & No Obligation', description: 'Our valuations are completely free with no obligation to instruct us.' },
  { title: 'Expert Local Knowledge', description: '30+ years of combined experience in the Wimbledon property market.' },
  { title: 'Honest Assessment', description: 'An accurate, realistic valuation based on current market conditions.' },
  { title: 'Bespoke Advice', description: 'Tailored recommendations on presentation, timing, and pricing strategy.' },
];

export default function ValuationPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-content">
          <h1 className="heading-display text-charcoal">Free Property Valuation</h1>
          <p className="mt-4 text-body text-slate font-inter font-light max-w-2xl">
            Find out what your property is worth with a free, no-obligation valuation from our experienced local team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="heading-title text-charcoal mb-8">Request Your Valuation</h2>
              <div className="bg-white p-8 md:p-10">
                <ValuationForm />
              </div>
            </div>

            {/* Benefits */}
            <div className="lg:col-span-2">
              <h2 className="heading-title text-charcoal mb-8">Why Value With Us</h2>
              <div className="space-y-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title}>
                    <h3 className="heading-section text-charcoal mb-2">{benefit.title}</h3>
                    <p className="text-small text-slate font-inter font-light leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-white">
                <p className="text-tiny font-inter font-medium uppercase tracking-widest text-brand mb-3">
                  Prefer to speak to us?
                </p>
                <p className="text-body font-inter text-charcoal">
                  Call us on{' '}
                  <a href="tel:02035973484" className="text-brand hover:text-brand-dark transition-colors">
                    0203 597 3484
                  </a>
                </p>
                <p className="text-small text-slate font-inter font-light mt-2">
                  Mon&ndash;Fri 9am&ndash;6pm, Sat 10am&ndash;4pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
