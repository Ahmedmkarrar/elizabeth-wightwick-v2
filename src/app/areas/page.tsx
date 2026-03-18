import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Area Guides — Wimbledon & South West London',
  description: 'Explore our area guides for Wimbledon Village, Coombe, New Malden, Putney, Raynes Park, and Wimbledon Town. Local knowledge from Elizabeth Wightwick.',
};

const areas = [
  {
    name: 'Wimbledon Village',
    tagline: 'Village charm, city convenience',
    description: 'One of London\'s most coveted addresses, with independent boutiques, excellent schools, and 1,100 acres of Common on the doorstep.',
    href: '/wimbledon',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Coombe',
    tagline: 'Secluded luxury in SW20',
    description: 'An enclave of substantial family homes set within tree-lined roads and private estates, offering privacy and space rarely found this close to London.',
    href: '/areas/coombe',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'New Malden',
    tagline: 'Family-friendly with great value',
    description: 'A vibrant, diverse community with excellent schools, outstanding transport links, and a strong sense of neighbourhood that families consistently return to.',
    href: '/areas/new-malden',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Putney',
    tagline: 'The riverside village',
    description: 'With the Thames at its doorstep, Putney combines riverside living with a thriving high street, outstanding schools, and direct access to central London.',
    href: '/areas/putney',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Raynes Park',
    tagline: 'The quiet achiever',
    description: 'A well-connected neighbourhood offering exceptional value, strong community life, and direct rail links to Waterloo in under 20 minutes.',
    href: '/areas/raynes-park',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Wimbledon Town',
    tagline: 'The best of both worlds',
    description: 'Combining the energy of a thriving town centre with easy access to Wimbledon Common and the Village, Town is the gateway to everything Wimbledon offers.',
    href: '/areas/wimbledon-town',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80',
  },
];

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80" alt="South West London" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">Local Knowledge</span>
          <h1 className="heading-display text-white mt-2">Area Guides</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="heading-title text-charcoal">Know Your Neighbourhood</h2>
            <div className="divider-brand mt-6 mb-8" />
            <p className="text-body text-slate font-inter font-light leading-relaxed text-lg">
              Choosing the right area is just as important as choosing the right property. Our area guides are written from over 30 years of living and working in South West London — local knowledge you cannot find on a portal.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <Link key={area.href} href={area.href} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={area.image} alt={area.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-cormorant text-[1.5rem] font-light text-white">{area.name}</h3>
                    <p className="text-[11px] font-inter text-white/70 tracking-wide mt-1">{area.tagline}</p>
                  </div>
                </div>
                <p className="mt-4 text-small text-slate font-inter font-light leading-relaxed">
                  {area.description}
                </p>
                <span className="inline-block mt-3 text-tiny font-inter font-medium uppercase tracking-widest text-brand">
                  Explore Area
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-beige/30">
        <div className="container-narrow text-center">
          <h2 className="heading-title text-charcoal">Not Sure Which Area?</h2>
          <p className="mt-4 text-body font-inter font-light text-slate max-w-lg mx-auto">
            Talk to us. With 30 years of local expertise, we can help you find the right neighbourhood for your lifestyle and budget.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-brand text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-brand-dark transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
