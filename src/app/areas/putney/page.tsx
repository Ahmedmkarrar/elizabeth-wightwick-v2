import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Putney Area Guide — SW15',
  description: 'Discover Putney — riverside living in South West London with excellent schools, the Thames on the doorstep, and outstanding connections to central London.',
};

const sections = [
  {
    title: 'Riverside Life',
    content: 'Putney is one of South West London\'s most attractive riverside villages. The Thames Embankment, the annual Oxford-Cambridge Boat Race, and Putney Bridge itself define the character of an area that combines the energy of a busy high street with the calm of waterside living. Properties along the river and the tree-lined streets behind it are perennially in demand.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Property & Streets',
    content: 'Putney\'s residential streets offer a mix of Victorian and Edwardian family houses, purpose-built flats, and modern riverside apartments. The most desirable streets are found in the Upper Richmond Road and Putney Hill areas, as well as the quieter roads east of the high street. Properties along or near the Thames command a significant premium for their views and setting.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Schools',
    content: 'Putney has a strong school offering. Brandlehow Primary and Putney Park School are well-regarded primaries, while Putney High School (GDST) is one of the finest independent girls\' schools in London. The Putney School of Art and Design adds to the area\'s cultural character. For state secondary, Ashcroft Technology Academy consistently achieves strong results.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Transport & Connections',
    content: 'Putney is exceptionally well connected. Putney station (South Western Railway) reaches Waterloo in approximately 15 minutes. East Putney Underground station (District Line) provides further options into the city. The A3 and A205 South Circular make road travel straightforward, while Putney Bridge allows easy access into Fulham and Chelsea. Heathrow is around 40 minutes by road.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Dining & Leisure',
    content: 'Putney\'s high street and Embankment offer an excellent array of restaurants, cafes, and wine bars. Independent boutiques sit alongside well-known brands. Wandsworth Park, Putney Heath, and the Thames Path provide green space and walking routes. The rowing clubs along the embankment give Putney a sporting character unique in South West London.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
];

export default function PutneyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80" alt="Putney" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">Area Guide</span>
          <h1 className="heading-display text-white mt-2">Putney</h1>
          <p className="mt-3 text-body font-inter font-light text-white/80 max-w-xl">
            London&apos;s favourite riverside village, where the Thames sets the scene
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="heading-title text-charcoal">Life on the Thames</h2>
            <div className="divider-brand mt-6 mb-8" />
            <p className="text-body text-slate font-inter font-light leading-relaxed text-lg">
              Putney has long attracted those who want the energy of London with the sense of space and community that the river provides. The combination of excellent transport, superb schools, and the Thames on the doorstep makes it one of the most sought-after addresses in South West London.
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
          <h2 className="heading-title text-charcoal text-center mb-12">Putney at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Postcode', value: 'SW15' },
              { label: 'To Waterloo', value: '~15 mins' },
              { label: 'Property Type', value: 'Mixed' },
              { label: 'Character', value: 'Riverside Village' },
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
          <h2 className="heading-display text-white">Find Your Home in Putney</h2>
          <p className="mt-4 text-body font-inter font-light text-white/70 max-w-lg mx-auto">
            Browse our current properties or talk to us about what Putney has to offer.
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
