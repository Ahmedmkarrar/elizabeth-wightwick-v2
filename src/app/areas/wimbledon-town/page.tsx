import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Wimbledon Town Area Guide — SW19',
  description: 'Discover Wimbledon Town — the vibrant heart of SW19, with excellent transport, a thriving town centre, and easy access to Wimbledon Common and the Village.',
};

const sections = [
  {
    title: 'The Town Centre',
    content: 'Wimbledon Town is the commercial and social heart of the wider Wimbledon area. The town centre is anchored by the Centre Court Shopping Centre and surrounded by a diverse mix of restaurants, cafes, independent retailers, and cultural venues. The New Wimbledon Theatre is one of the finest regional theatres in London. It is a place with genuine energy — a proper town, not just a commuter stop.',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Property',
    content: 'Wimbledon Town offers a broader range of property types than the Village, including Victorian and Edwardian terraces, mansion flats, and a number of purpose-built apartment buildings. The area south of the station towards South Wimbledon and the roads near Wimbledon Park are particularly popular with young professionals and families. There is genuine variety here at every price point.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Schools',
    content: 'Wimbledon Town is served by an excellent range of schools. Wimbledon Park Primary and Merton Abbey Primary are both popular and well-regarded. For secondary, Ricards Lodge and Rutlish School serve the area with strong results. Wimbledon High School (GDST) and King\'s College School are nearby independent options of the highest calibre.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Transport',
    content: 'Wimbledon station is one of South West London\'s most connected hubs. It serves the District Line (underground), Thameslink, South Western Railway to Waterloo (17 minutes), and the Tramlink network to Croydon and Sutton. This combination of services makes Wimbledon Town accessible to virtually anywhere in London with speed and ease — a genuine transport asset.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Green Spaces',
    content: 'Despite being a busy town centre, Wimbledon Town is within easy reach of some extraordinary green spaces. Wimbledon Park, with its lake and sports facilities, is just minutes from the station. Wimbledon Common — over 1,100 acres of ancient common land — is accessible from the upper end of town. The combination of town and green is one of Wimbledon\'s greatest assets.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  },
];

export default function WimbledonTownPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1920&q=80" alt="Wimbledon Town" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">Area Guide</span>
          <h1 className="heading-display text-white mt-2">Wimbledon Town</h1>
          <p className="mt-3 text-body font-inter font-light text-white/80 max-w-xl">
            The vibrant heart of SW19 — outstanding connections, real community, and London&apos;s Common at the door
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="heading-title text-charcoal">The Best of Both</h2>
            <div className="divider-brand mt-6 mb-8" />
            <p className="text-body text-slate font-inter font-light leading-relaxed text-lg">
              Wimbledon Town gives you London at its most liveable: a proper high street, the finest transport connections in South West London, excellent schools, and Wimbledon Common within walking distance. It is a place that works as hard as the people who choose to live in it.
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
          <h2 className="heading-title text-charcoal text-center mb-12">Wimbledon Town at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Postcode', value: 'SW19' },
              { label: 'To Waterloo', value: '17 mins' },
              { label: 'Property Type', value: 'Mixed' },
              { label: 'Character', value: 'Town & Common' },
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
          <h2 className="heading-display text-white">Find Your Wimbledon Home</h2>
          <p className="mt-4 text-body font-inter font-light text-white/70 max-w-lg mx-auto">
            Browse our current properties or register to be the first to hear about new homes in Wimbledon.
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
