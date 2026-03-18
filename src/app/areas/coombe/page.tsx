import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Coombe Area Guide — SW20',
  description: 'Discover Coombe, one of South West London\'s most exclusive private estates. Substantial family homes, privacy, and outstanding schools near Wimbledon.',
};

const sections = [
  {
    title: 'The Estate',
    content: 'Coombe is one of South West London\'s most discreet and exclusive addresses. Set within private roads and mature landscaping, the area is characterised by substantial detached homes — many set in grounds of an acre or more — that rarely come to market. The combination of scale, privacy, and proximity to Wimbledon Village makes Coombe among the most sought-after postcodes in the capital.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Character & Architecture',
    content: 'The properties in Coombe range from grand Edwardian and inter-war residences to architect-designed contemporary homes. Many have been significantly extended and updated over the years, combining period grandeur with modern living. Gardens are generous, gates and privacy screening are common, and the overall atmosphere is one of peaceful, understated affluence.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Schools',
    content: 'Coombe is ideally placed for some of the finest schools in South West London. Coombe Hill Infants and Junior Schools are within walking distance and consistently rated Outstanding. Tiffin School and Tiffin Girls\' School — two of the country\'s top-performing grammar schools — are in nearby Kingston. King\'s College School and Wimbledon High School are also accessible.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Transport & Location',
    content: 'Coombe is positioned between Wimbledon and Kingston upon Thames, offering the best of both. New Malden and Norbiton stations (South Western Railway) are both within easy reach, providing fast services to Waterloo in approximately 25 minutes. The A3 and Kingston bypass provide excellent road connections, and both Wimbledon Village and Kingston town centre are minutes away.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
  },
];

export default function CoombePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80" alt="Coombe, SW20" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">Area Guide</span>
          <h1 className="heading-display text-white mt-2">Coombe</h1>
          <p className="mt-3 text-body font-inter font-light text-white/80 max-w-xl">
            South West London&apos;s most exclusive private enclave, where scale and privacy define the address
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="heading-title text-charcoal">An Address Like No Other</h2>
            <div className="divider-brand mt-6 mb-8" />
            <p className="text-body text-slate font-inter font-light leading-relaxed text-lg">
              Within minutes of both Wimbledon Village and Kingston, Coombe occupies a rare position: truly private yet supremely connected. Properties here are among the largest in South West London, typically set in significant grounds behind private roads. It is the kind of address that, once discovered, is rarely left.
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
          <h2 className="heading-title text-charcoal text-center mb-12">Coombe at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Postcode', value: 'SW20 / KT2' },
              { label: 'To Waterloo', value: '~25 mins' },
              { label: 'Property Type', value: 'Detached Houses' },
              { label: 'Character', value: 'Private Estate' },
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
          <h2 className="heading-display text-white">Looking in Coombe?</h2>
          <p className="mt-4 text-body font-inter font-light text-white/70 max-w-lg mx-auto">
            Many properties in Coombe are sold discreetly, before reaching the open market. Register with us to hear about them first.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="bg-white text-brand-dark px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/90 transition-colors inline-block"
            >
              Register Your Search
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
