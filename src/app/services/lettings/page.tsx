import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Lettings',
  description: 'Professional lettings service in Wimbledon Village. Comprehensive landlord and tenant services with full management options available.',
};

const landlordServices = [
  'Free rental valuation and market advice',
  'Professional photography and marketing',
  'Comprehensive tenant referencing',
  'Tenancy agreement preparation',
  'Deposit registration and compliance',
  'Right to Rent checks',
  'Inventory preparation',
  'Regular property inspections',
  'Maintenance coordination',
  'End of tenancy management',
];

const tenantServices = [
  'Access to exclusive Wimbledon properties',
  'Personalised property matching',
  'Accompanied viewings',
  'Transparent referencing process',
  'Tenancy agreement guidance',
  'Dedicated point of contact throughout',
];

export default function LettingsServicePage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80"
          alt="Luxury rental property in Wimbledon"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        <div className="relative container-wide pb-12 text-white">
          <h1 className="heading-display text-white">Residential Lettings</h1>
          <p className="mt-3 text-body font-inter font-light text-white/80 max-w-xl">
            Comprehensive lettings service for landlords and tenants in Wimbledon
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="heading-title text-charcoal">For Landlords</h2>
              <div className="divider-gold mt-6 mb-8" />
              <p className="text-body text-slate font-inter font-light leading-relaxed mb-8">
                Whether you own a single property or a portfolio, we provide a dedicated lettings service tailored to your needs. Our focus is on finding the right tenants quickly, minimising void periods, and protecting your investment.
              </p>
              <ul className="space-y-3">
                {landlordServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-body text-slate font-inter font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="heading-title text-charcoal">For Tenants</h2>
              <div className="divider-gold mt-6 mb-8" />
              <p className="text-body text-slate font-inter font-light leading-relaxed mb-8">
                Looking for your ideal home in Wimbledon? Register your requirements with us and gain access to a curated selection of properties, many of which are not available elsewhere.
              </p>
              <ul className="space-y-3">
                {tenantServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-body text-slate font-inter font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="inline-block mt-8 bg-gold text-white px-7 py-3 text-small font-inter tracking-wide hover:bg-gold-dark transition-colors"
              >
                Register Your Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-white">Looking to let your property?</h2>
          <p className="mt-4 text-body font-inter font-light text-white/60 max-w-lg mx-auto">
            Contact us for a free rental valuation and discover how we can help
          </p>
          <Link
            href="/valuation"
            className="inline-block mt-8 bg-gold text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-gold-dark transition-colors"
          >
            Free Rental Valuation
          </Link>
        </div>
      </section>
    </>
  );
}
