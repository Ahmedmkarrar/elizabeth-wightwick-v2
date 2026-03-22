import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Downloads & Forms',
  description: 'Download our property forms including Tenant Offer Form, Sales Terms and Conditions, Lettings Instruction Form, and Renters Act guidance.',
};

const downloads = [
  {
    title: 'Tenant Offer Form',
    description: 'Complete this form to submit an offer on a rental property. Please return the completed form to our office.',
    href: '/documents/tenant-offer-form.pdf',
    category: 'Lettings',
    icon: 'T',
  },
  {
    title: 'Lettings Instruction Form',
    description: 'For landlords wishing to instruct Elizabeth Wightwick to let and/or manage their property.',
    href: '/documents/lettings-instruction-form.pdf',
    category: 'Lettings',
    icon: 'L',
  },
  {
    title: 'Sales Terms & Conditions',
    description: 'Our standard terms and conditions for the sale of residential property.',
    href: '/documents/sales-terms-and-conditions.pdf',
    category: 'Sales',
    icon: 'S',
  },
  {
    title: 'Renters Act — Key Updates',
    description: 'An overview of the key changes introduced by the Renters (Reform) Act and what they mean for landlords and tenants.',
    href: '/documents/renters-act-update.pdf',
    category: 'Guidance',
    icon: 'R',
  },
];

const categoryColours: Record<string, string> = {
  Lettings: 'bg-brand/10 text-brand',
  Sales: 'bg-charcoal/10 text-charcoal',
  Guidance: 'bg-slate/10 text-slate',
};

export default function DownloadsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 md:pt-40 pb-12">
        <div className="container-content">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">Resources</span>
          <h1 className="heading-display text-charcoal mt-3">Downloads &amp; Forms</h1>
          <p className="mt-4 text-body text-slate font-inter font-light max-w-2xl">
            All forms and guidance documents are available to download below. If you require a form that is not listed, please contact our office.
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding pt-0">
        <div className="container-content">
          <div className="space-y-4">
            {downloads.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 border border-beige p-6 hover:border-brand/30 hover:bg-beige/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand/10 flex items-center justify-center shrink-0">
                  <span className="font-cormorant text-[1.5rem] font-light text-brand">{doc.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-inter text-[15px] font-medium text-charcoal group-hover:text-brand transition-colors">
                      {doc.title}
                    </h3>
                    <span className={`text-[10px] font-inter font-medium uppercase tracking-wider px-2 py-0.5 ${categoryColours[doc.category] || 'bg-beige text-slate'}`}>
                      {doc.category}
                    </span>
                  </div>
                  <p className="text-small text-slate font-inter font-light">{doc.description}</p>
                </div>
                <div className="shrink-0 text-slate/40 group-hover:text-brand transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for more */}
      <section className="section-padding bg-beige/30">
        <div className="container-narrow text-center">
          <h2 className="heading-title text-charcoal">Need Something Else?</h2>
          <p className="mt-4 text-body font-inter font-light text-slate max-w-lg mx-auto">
            If you need a specific form or document that is not listed here, get in touch and our team will assist.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-brand text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-brand-dark transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
