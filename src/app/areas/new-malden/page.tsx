import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'New Malden Area Guide — KT3',
  description: 'Discover New Malden — a vibrant, family-friendly community in South West London with excellent schools, great transport, and outstanding value.',
};

const sections = [
  {
    title: 'The Area',
    content: 'New Malden is one of South West London\'s most consistently popular family destinations. Combining genuine community spirit with excellent amenities, outstanding schools, and direct rail links to central London, it offers a quality of life that is difficult to match at its price point. The area has a diverse, cosmopolitan character and a high street that reflects its welcoming personality.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Property & Value',
    content: 'New Malden offers some of the best value in South West London, with a mix of Victorian and Edwardian terraces, semi-detached homes, and modern apartments. Streets in the Burlington Road and Beverley areas are particularly sought after for their period character and proximity to good schools. Buyers often find they can acquire more space here than in neighbouring Wimbledon.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Schools',
    content: 'New Malden is exceptionally well served educationally. Coombe Hill Infants and Junior Schools are rated Outstanding by Ofsted. Tiffin School and Tiffin Girls\' School — two of England\'s most competitive grammar schools — are in nearby Kingston. Holy Cross Preparatory School is a highly regarded independent option. For secondary, Burlington Danes and Coombe Boys\' are strong comprehensive choices.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Transport',
    content: 'New Malden station sits on the South Western Main Line, providing fast and frequent services to London Waterloo in approximately 22 minutes. Trains run every few minutes at peak times. The A3 runs along the western boundary, offering quick road access to central London, the M25, and Gatwick Airport. Kingston upon Thames is just five minutes by car.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
  },
];

export default function NewMaldenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80" alt="New Malden" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">Area Guide</span>
          <h1 className="heading-display text-white mt-2">New Malden</h1>
          <p className="mt-3 text-body font-inter font-light text-white/80 max-w-xl">
            A vibrant, family-friendly community offering exceptional value and outstanding connections
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="heading-title text-charcoal">The Smart Choice</h2>
            <div className="divider-brand mt-6 mb-8" />
            <p className="text-body text-slate font-inter font-light leading-relaxed text-lg">
              New Malden consistently rewards those who look beyond the obvious. With grammar schools that draw buyers from across South London, fast trains to Waterloo, and a genuine sense of community, this is an area that punches well above its price point.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="section-padding pt-0">
        <div className="container-content">
          <div className="space-y-20">
            {sections.map((section, i) => (
              <div key={section.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h2 className="heading-title text-charcoal">{section.title}</h2>
                  <div className="divider-brand mt-5 mb-6" />
                  <p className="text-body text-slate font-inter font-light leading-relaxed">{section.content}</p>
                </div>
                <div className={`relative aspect-[4/3] bg-beige overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={section.image} alt={section.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="section-padding bg-beige/30">
        <div className="container-content">
          <h2 className="heading-title text-charcoal text-center mb-12">New Malden at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Postcode', value: 'KT3' },
              { label: 'To Waterloo', value: '~22 mins' },
              { label: 'Property Type', value: 'Mixed' },
              { label: 'Character', value: 'Family Community' },
            ].map((fact) => (
              <div key={fact.label}>
                <p className="font-cormorant text-[2rem] font-light text-charcoal">{fact.value}</p>
                <p className="text-tiny font-inter uppercase tracking-widest text-slate/60 mt-1">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-white">Find Your Home in New Malden</h2>
          <p className="mt-4 text-body font-inter font-light text-white/70 max-w-lg mx-auto">
            Browse our current properties or register to be notified as soon as new homes come to market.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/buy"
              className="bg-white text-brand-dark px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/90 transition-colors inline-block"
            >
              Browse Properties
            </Link>
            <Link
              href="/areas"
              className="border border-white/40 text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/10 transition-all inline-block"
            >
              All Area Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
