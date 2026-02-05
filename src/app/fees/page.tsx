import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Fees',
  description: 'Transparent fee structure for sales, lettings and property management services. All fees inclusive of VAT. Elizabeth Wightwick, Wimbledon Village estate agents.',
};

export default function FeesPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-content">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">Fees &amp; Charges</span>
          <h1 className="heading-display text-charcoal mt-3">Our Fees</h1>
          <p className="mt-4 text-body text-slate font-inter font-light max-w-2xl">
            Transparent pricing, exceptional service. All fees shown are inclusive of VAT at the prevailing rate (currently 20%).
          </p>
          <div className="mt-6">
            <a
              href="/fees/elizabeth-wightwick-fees.pdf"
              className="inline-flex items-center gap-2 text-small font-inter text-brand border-b border-brand pb-0.5 hover:text-brand-dark hover:border-brand-dark transition-colors"
              download
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Fee Schedule (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-content">
          {/* Sales Fees */}
          <div className="mb-16">
            <h2 className="heading-title text-charcoal mb-8">Sales Fees</h2>
            <div className="bg-beige/30 p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="heading-section text-charcoal">Residential Sales</h3>
                  <p className="font-cormorant text-title text-charcoal mt-3">1.8% inc. VAT</p>
                  <p className="text-small text-slate font-inter mt-1">of the achieved sale price</p>
                </div>
                <div>
                  <h4 className="text-tiny font-inter font-medium uppercase tracking-widest text-brand mb-4">Includes</h4>
                  <ul className="space-y-2">
                    {[
                      'Free market appraisal',
                      'Professional photography',
                      'Floor plans and EPC',
                      'Rightmove, Zoopla & OnTheMarket listing',
                      'Accompanied viewings',
                      'Expert negotiation',
                      'Sale progression to completion',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 flex-shrink-0" />
                        <span className="text-small text-slate font-inter font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-tiny text-slate font-inter mt-6 pt-6 border-t border-taupe/30">
                No upfront charges. Our fee is only payable upon successful completion of the sale.
              </p>
            </div>
          </div>

          {/* Lettings Fees */}
          <div className="mb-16">
            <h2 className="heading-title text-charcoal mb-8">Lettings Fees</h2>

            {/* Landlord Fees */}
            <div className="bg-beige/30 p-8 md:p-10 mb-6">
              <h3 className="heading-section text-charcoal mb-6">Landlord Fees</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-taupe/30">
                  <div>
                    <h4 className="text-small font-inter font-medium text-charcoal">Tenant Find Only</h4>
                    <p className="font-cormorant text-section text-charcoal mt-1">9.6% inc. VAT</p>
                    <p className="text-tiny text-slate font-inter">of the annual rent</p>
                  </div>
                  <div>
                    <h4 className="text-small font-inter font-medium text-charcoal">Rent Collection</h4>
                    <p className="font-cormorant text-section text-charcoal mt-1">10.8% inc. VAT</p>
                    <p className="text-tiny text-slate font-inter">of the monthly rent</p>
                  </div>
                  <div>
                    <h4 className="text-small font-inter font-medium text-charcoal">Full Management</h4>
                    <p className="font-cormorant text-section text-charcoal mt-1">14.4% inc. VAT</p>
                    <p className="text-tiny text-slate font-inter">of the monthly rent</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-tiny font-inter font-medium uppercase tracking-widest text-brand mb-3">Other Landlord Charges (inc. VAT)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { item: 'Tenancy agreement preparation', fee: '£300 inc. VAT' },
                      { item: 'Tenancy renewal', fee: '£180 inc. VAT' },
                      { item: 'Inventory / check-in', fee: 'From £180 inc. VAT' },
                      { item: 'Check-out report', fee: 'From £150 inc. VAT' },
                      { item: 'Energy Performance Certificate (EPC)', fee: '£114 inc. VAT' },
                      { item: 'Gas Safety Certificate', fee: '£114 inc. VAT' },
                      { item: 'EICR (Electrical Safety)', fee: 'From £240 inc. VAT' },
                    ].map((charge) => (
                      <div key={charge.item} className="flex justify-between items-center py-2 border-b border-taupe/20">
                        <span className="text-small text-slate font-inter font-light">{charge.item}</span>
                        <span className="text-small text-charcoal font-inter ml-4 whitespace-nowrap">{charge.fee}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tenant Fees */}
            <div className="bg-beige/30 p-8 md:p-10">
              <h3 className="heading-section text-charcoal mb-6">Tenant Fees</h3>
              <p className="text-body text-slate font-inter font-light mb-6">
                As per the Tenant Fees Act 2019, the following are the only permitted payments.
              </p>
              <div className="space-y-3">
                {[
                  { item: 'Holding deposit', fee: 'Equivalent to one week\'s rent', note: 'Refundable, subject to conditions' },
                  { item: 'Security deposit', fee: 'Equivalent to five weeks\' rent', note: 'Where annual rent is under £50,000' },
                  { item: 'Security deposit', fee: 'Equivalent to six weeks\' rent', note: 'Where annual rent is £50,000 or above' },
                  { item: 'Early termination', fee: 'Not exceeding remaining rent due', note: 'If tenant requests early release from tenancy' },
                  { item: 'Late rent payment', fee: '3% above Bank of England base rate', note: 'Charged on rent overdue by 14+ days' },
                  { item: 'Lost keys / security devices', fee: 'Reasonable cost of replacement', note: 'Based on actual cost incurred' },
                  { item: 'Changes to tenancy', fee: '£50 inc. VAT', note: 'Per variation requested by tenant' },
                ].map((charge) => (
                  <div key={charge.item} className="flex flex-col md:flex-row md:justify-between md:items-center py-3 border-b border-taupe/20">
                    <div>
                      <span className="text-small text-charcoal font-inter">{charge.item}</span>
                      <p className="text-tiny text-slate font-inter mt-0.5">{charge.note}</p>
                    </div>
                    <span className="text-small text-charcoal font-inter mt-1 md:mt-0 md:ml-4 whitespace-nowrap">{charge.fee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Property Management */}
          <div className="mb-16">
            <h2 className="heading-title text-charcoal mb-8">Property Management</h2>
            <div className="bg-beige/30 p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="heading-section text-charcoal">Full Management Service</h3>
                  <p className="font-cormorant text-title text-charcoal mt-3">14.4% inc. VAT</p>
                  <p className="text-small text-slate font-inter mt-1">of the monthly rent collected</p>
                </div>
                <div>
                  <h4 className="text-tiny font-inter font-medium uppercase tracking-widest text-brand mb-4">Includes</h4>
                  <ul className="space-y-2">
                    {[
                      'Tenant find and referencing',
                      'Monthly rent collection',
                      'Maintenance coordination',
                      'Quarterly property inspections',
                      'Compliance management',
                      'Tenant communication',
                      'Monthly financial statements',
                      '24/7 emergency support',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 flex-shrink-0" />
                        <span className="text-small text-slate font-inter font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Important Info */}
          <div className="border border-beige p-8 md:p-10">
            <h3 className="heading-section text-charcoal mb-4">Important Information</h3>
            <ul className="space-y-3 text-small text-slate font-inter font-light">
              <li>All fees shown on this page are inclusive of VAT at the prevailing rate (currently 20%).</li>
              <li>Elizabeth Wightwick Ltd is a member of The Property Ombudsman and a client money protection scheme.</li>
              <li>All tenancy deposits are registered with a government-approved deposit protection scheme.</li>
              <li>Fee percentages are based on standard terms. Bespoke arrangements are available upon request.</li>
              <li>All fees and services will be confirmed in writing before any commitment.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-dark">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-white">Have a question about fees?</h2>
          <p className="mt-4 text-body font-inter font-light text-white/70 max-w-lg mx-auto">
            We are always happy to discuss our services and fees in detail
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-brand-dark px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/90 transition-colors inline-block"
            >
              Get in Touch
            </Link>
            <a
              href="/fees/elizabeth-wightwick-fees.pdf"
              className="border border-white/30 text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/10 transition-all inline-block"
              download
            >
              Download Fee Schedule
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
