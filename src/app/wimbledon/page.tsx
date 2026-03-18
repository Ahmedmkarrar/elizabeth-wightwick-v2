import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Wimbledon Village Area Guide',
  description: 'Discover Wimbledon Village — one of London\'s most desirable residential areas. Schools, transport, restaurants, Wimbledon Common and more.',
};

const sections = [
  {
    title: 'The Village',
    content: 'Wimbledon Village is one of London\'s most sought-after residential areas, combining the charm of a traditional English village with the convenience of Zone 3 connectivity. The High Street is lined with independent boutiques, acclaimed restaurants, and artisan shops, creating a genuine sense of community that is increasingly rare in London.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Wimbledon Common',
    content: 'At over 1,100 acres, Wimbledon Common is one of the largest areas of common land in London. A haven for walkers, riders, and nature enthusiasts, the Common provides an extraordinary natural backdrop to village life. Properties overlooking or adjacent to the Common are among the most prized in South West London.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Schools',
    content: 'Wimbledon is renowned for its exceptional schools. The area is served by outstanding primary schools including Wimbledon Park Primary and Bishop Gilpin, while King\'s College School and Wimbledon High School are among the leading independent schools in the country. For state secondary education, Ricards Lodge and Rutlish School are both highly regarded.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Transport',
    content: 'Despite its village atmosphere, Wimbledon offers excellent transport connections. Wimbledon station provides District Line Underground, Thameslink, South Western Railway, and Tram services. The journey to Waterloo takes just 17 minutes, while Wimbledon is connected to the City and Canary Wharf via the District Line. The A3 provides swift road access to central London and the M25.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Dining & Leisure',
    content: 'The Village High Street and surrounding streets offer a remarkable selection of restaurants and cafes. From the Michelin-recommended to the neighbourhood favourite, dining in Wimbledon caters to every taste. The New Wimbledon Theatre, Polka Theatre, and a thriving calendar of community events ensure there is always something to enjoy.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'The Championships',
    content: 'Wimbledon is, of course, synonymous with The Championships &mdash; the oldest and most prestigious tennis tournament in the world. The All England Lawn Tennis Club, situated on Church Road, brings a unique international prestige to the area and contributes to the distinctive character that makes Wimbledon truly special.',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
  },
];

export default function WimbledonPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80" alt="Wimbledon Village" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12 text-white">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">Area Guide</span>
          <h1 className="heading-display text-white mt-2">Wimbledon Village</h1>
          <p className="mt-3 text-body font-inter font-light text-white/80 max-w-xl">
            One of London&apos;s most desirable residential areas, where village charm meets city convenience
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="heading-title text-charcoal">Why Wimbledon?</h2>
            <div className="divider-brand mt-6 mb-8" />
            <p className="text-body text-slate font-inter font-light leading-relaxed text-lg">
              Wimbledon Village offers a rare combination of open green spaces, excellent schools, a thriving high street, and outstanding transport links &mdash; all within a close-knit community atmosphere. It is no wonder that Wimbledon consistently ranks among the most desirable places to live in London.
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
                  <p
                    className="text-body text-slate font-inter font-light leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
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

      {/* CTA */}
      <section className="section-padding bg-brand-dark">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-white">Find Your Wimbledon Home</h2>
          <p className="mt-4 text-body font-inter font-light text-white/70 max-w-lg mx-auto">
            Browse our current selection of properties in Wimbledon and South West London
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/buy"
              className="bg-white text-brand-dark px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/90 transition-colors"
            >
              Browse Properties
            </Link>
            <Link
              href="/register"
              className="border border-white/40 text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/10 transition-all"
            >
              Register Your Search
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
