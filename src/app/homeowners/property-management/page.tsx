import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Management',
  description: 'Comprehensive property management services in Wimbledon from Elizabeth Wightwick. Tenant sourcing, maintenance, inspections, and full landlord support.',
};

const services = [
  {
    title: 'Tenant Sourcing & Referencing',
    description: 'We find reliable tenants through thorough referencing including credit checks, employment verification, and previous landlord references.',
  },
  {
    title: 'Rent Collection',
    description: 'We collect rent on your behalf and chase any late payments promptly, providing you with regular financial statements.',
  },
  {
    title: 'Maintenance & Repairs',
    description: 'Our network of trusted local contractors ensures all maintenance issues are handled quickly and cost-effectively.',
  },
  {
    title: 'Regular Inspections',
    description: 'We conduct periodic property inspections with detailed reports and photographs, so you always know the condition of your property.',
  },
  {
    title: 'Legal Compliance',
    description: 'We ensure your property meets all current legal requirements including gas safety, EPC ratings, deposit protection, and right to rent checks.',
  },
  {
    title: 'End of Tenancy',
    description: 'We manage the checkout process, negotiate deposit returns fairly, and prepare the property for the next tenancy.',
  },
];

export default function PropertyManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80"
            alt="Well-managed property"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">Homeowners</span>
          <h1 className="heading-display text-white mt-2">Property Management</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="heading-title text-charcoal">Peace of Mind for Landlords</h2>
            <div className="divider-brand mt-6 mb-8" />
            <p className="text-body text-slate font-inter font-light leading-relaxed text-lg">
              Owning a rental property should not be a source of stress. Our property management service handles every aspect of the landlord-tenant relationship, from finding the right tenant to managing day-to-day maintenance. We treat your property as if it were our own.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.title} className="border border-beige p-8">
                <h3 className="heading-section text-charcoal mb-3">{service.title}</h3>
                <p className="text-small text-slate font-inter font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees link */}
      <section className="section-padding bg-beige/30">
        <div className="container-narrow text-center">
          <h2 className="heading-title text-charcoal">Management Fees</h2>
          <p className="mt-4 text-body font-inter font-light text-slate max-w-lg mx-auto">
            Our property management fees are transparent and competitive. View our full fee schedule for details.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/fees"
              className="bg-brand text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-brand-dark transition-colors inline-block"
            >
              View Our Fees
            </Link>
            <Link
              href="/contact"
              className="border border-charcoal text-charcoal px-8 py-3.5 text-small font-inter tracking-wide hover:bg-charcoal hover:text-white transition-all inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
