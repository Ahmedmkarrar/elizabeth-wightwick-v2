import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Raynes Park Area Guide — SW20',
  description: 'Discover Raynes Park — a well-connected, family-friendly neighbourhood in SW20 offering excellent schools, great value, and easy access to Wimbledon and central London.',
};

const sections = [
  {
    title: 'The Neighbourhood',
    content: 'Raynes Park is one of those areas that rewards closer inspection. Tucked between Wimbledon and New Malden, it offers a genuine neighbourhood feel — local shops, community parks, and quiet residential streets that are well away from the bustle of the high street. It has attracted a loyal base of families and young professionals who value space, community, and outstanding transport at a price that makes sense.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Property',
    content: 'Raynes Park offers predominantly Victorian and Edwardian terraced and semi-detached homes, many of which have been extended and updated to provide generous modern family accommodation. The streets around West Barnes Lane and Grand Drive are among the most sought after. There is also a good selection of purpose-built flats for those entering the market.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Schools',
    content: 'Raynes Park is served by a strong cluster of schools. Poplar Primary and West Barnes Primary are both well-regarded. Raynes Park High School is a large, popular comprehensive with consistent results. For those seeking independent education, the proximity to Wimbledon and Kingston opens access to some of the finest schools in South London.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Transport',
    content: 'Raynes Park station is on the South Western Main Line, delivering fast and frequent services to London Waterloo in approximately 22 minutes. The A3 and A238 provide good road access, and Wimbledon — with its District Line, tram, and National Rail connections — is just minutes away. The area is also well served by local bus routes linking it to Kingston, Morden, and Tooting.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
  },
];

export default function RaynesParkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1920&q=80" alt="Raynes Park" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">Area Guide</span>
          <h1 className="heading-display text-white mt-2">Raynes Park</h1>
          <p className="mt-3 text-body font-inter font-light text-white/80 max-w-xl">
            The quiet achiever — well-connected, family-friendly, and full of character
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="heading-title text-charcoal">Understated and Well-Considered</h2>
            <div className="divider-brand mt-6 mb-8" />
            <p className="text-body text-slate font-inter font-light leading-relaxed text-lg">
              Raynes Park is an area that does not shout about itself — and that is part of its appeal. With fast trains to Waterloo, excellent value for the money, and a strong community feel, it consistently attracts buyers who have done their research and know what they want.
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
          <h2 className="heading-title text-charcoal text-center mb-12">Raynes Park at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Postcode', value: 'SW20' },
              { label: 'To Waterloo', value: '~22 mins' },
              { label: 'Property Type', value: 'Houses & Flats' },
              { label: 'Character', value: 'Family Neighbourhood' },
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
          <h2 className="heading-display text-white">Explore Raynes Park</h2>
          <p className="mt-4 text-body font-inter font-light text-white/70 max-w-lg mx-auto">
            Browse our current listings or get in touch to discuss what Raynes Park can offer you.
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
