import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Management',
  description: 'Full property management service in Wimbledon. Rent collection, maintenance, compliance and tenant management for complete peace of mind.',
};

const included = [
  { title: 'Rent Collection', description: 'Reliable monthly rent collection with prompt payment to you, plus arrears management when needed.' },
  { title: 'Maintenance Coordination', description: 'A network of trusted local contractors for all repairs and maintenance, with competitive quotes and quality workmanship.' },
  { title: 'Regular Inspections', description: 'Quarterly property inspections with detailed photographic reports, ensuring your property is well maintained.' },
  { title: 'Legal Compliance', description: 'Full management of gas safety certificates, electrical checks, EPC renewals, and all regulatory requirements.' },
  { title: 'Tenant Communication', description: 'Dedicated point of contact for your tenants, handling all day-to-day queries and issues promptly and professionally.' },
  { title: 'Emergency Support', description: 'Out-of-hours emergency contact for urgent property issues, providing peace of mind around the clock.' },
  { title: 'Tenancy Renewals', description: 'Proactive management of tenancy renewals, rent reviews, and re-letting when tenants move on.' },
  { title: 'Financial Reporting', description: 'Clear monthly statements and annual summaries, simplifying your record-keeping and tax returns.' },
];

export default function PropertyManagementPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-content">
          <h1 className="heading-display text-charcoal">Property Management</h1>
          <p className="mt-4 text-body text-slate font-inter font-light max-w-2xl">
            Complete property management for landlords seeking peace of mind. We handle every detail so you don&apos;t have to.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="max-w-2xl mb-16">
            <h2 className="heading-title text-charcoal">Full Management Service</h2>
            <div className="divider-brand mt-6 mb-8" />
            <p className="text-body text-slate font-inter font-light leading-relaxed">
              Our full management service is designed for landlords who want a truly hands-off experience. From the moment a tenancy begins, we take care of everything &mdash; from collecting rent and coordinating repairs to managing compliance and conducting inspections.
            </p>
            <p className="text-body text-slate font-inter font-light leading-relaxed mt-4">
              As a local, independent agency, you always deal directly with us. There are no call centres, no layers of bureaucracy &mdash; just dedicated, personal service from people who know your property and care about getting things right.
            </p>
          </div>

          <h2 className="heading-title text-charcoal mb-10">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {included.map((item) => (
              <div key={item.title} className="bg-white p-8">
                <h3 className="heading-section text-charcoal mb-3">{item.title}</h3>
                <p className="text-small text-slate font-inter font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-white">Interested in our management service?</h2>
          <p className="mt-4 text-body font-inter font-light text-white/60 max-w-lg mx-auto">
            Get in touch to discuss how we can look after your property
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-brand text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-brand-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
