import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Fees',
  description: 'Transparent fee structure for sales, lettings and property management services. Elizabeth Wightwick, Wimbledon Village estate agents.',
};

export default function FeesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-content">
          <h1 className="heading-display text-charcoal">Our Fees</h1>
          <p className="mt-4 text-body text-slate font-inter font-light max-w-2xl">
            Transparent pricing, exceptional service. No hidden costs, no surprises.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sales */}
            <div className="bg-white p-10">
              <span className="text-tiny font-inter font-medium uppercase tracking-widest text-gold">Sales</span>
              <h2 className="heading-title text-charcoal mt-3">Residential Sales</h2>
              <div className="divider-gold mt-6 mb-8" />
              <p className="font-cormorant text-title text-charcoal">1.5% + VAT</p>
              <p className="text-small text-slate font-inter mt-2">of the achieved sale price</p>
              <ul className="mt-8 space-y-3">
                {[
                  'Free market appraisal',
                  'Professional photography',
                  'Floor plans',
                  'Rightmove & Zoopla listing',
                  'Accompanied viewings',
                  'Expert negotiation',
                  'Sale progression to completion',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-small text-slate font-inter font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lettings */}
            <div className="bg-white p-10">
              <span className="text-tiny font-inter font-medium uppercase tracking-widest text-gold">Lettings</span>
              <h2 className="heading-title text-charcoal mt-3">Tenant Find</h2>
              <div className="divider-gold mt-6 mb-8" />
              <p className="font-cormorant text-title text-charcoal">8% + VAT</p>
              <p className="text-small text-slate font-inter mt-2">of the annual rent</p>
              <ul className="mt-8 space-y-3">
                {[
                  'Free rental valuation',
                  'Professional marketing',
                  'Comprehensive referencing',
                  'Tenancy agreement preparation',
                  'Deposit registration',
                  'Right to Rent checks',
                  'Inventory preparation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-small text-slate font-inter font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Management */}
            <div className="bg-white p-10">
              <span className="text-tiny font-inter font-medium uppercase tracking-widest text-gold">Management</span>
              <h2 className="heading-title text-charcoal mt-3">Full Management</h2>
              <div className="divider-gold mt-6 mb-8" />
              <p className="font-cormorant text-title text-charcoal">12% + VAT</p>
              <p className="text-small text-slate font-inter mt-2">of the monthly rent</p>
              <ul className="mt-8 space-y-3">
                {[
                  'Everything in Tenant Find',
                  'Monthly rent collection',
                  'Maintenance coordination',
                  'Quarterly inspections',
                  'Compliance management',
                  'Tenant communication',
                  'Financial reporting',
                  'Emergency support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-small text-slate font-inter font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-white p-10">
            <h3 className="heading-section text-charcoal mb-4">Important Information</h3>
            <ul className="space-y-3 text-small text-slate font-inter font-light">
              <li>All fees are subject to VAT at the prevailing rate (currently 20%).</li>
              <li>Fee percentages are based on standard terms. Bespoke arrangements are available upon request.</li>
              <li>There are no upfront charges for sales &mdash; our fee is only payable upon successful completion.</li>
              <li>Energy Performance Certificates (EPCs) can be arranged at £95 + VAT where required.</li>
              <li>All fees and services will be confirmed in writing before any commitment.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-white">Have a question about fees?</h2>
          <p className="mt-4 text-body font-inter font-light text-white/60 max-w-lg mx-auto">
            We are always happy to discuss our services and fees in detail
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-gold text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-gold-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
