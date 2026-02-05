import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preparing to List Your Home',
  description: 'Expert guidance on preparing your property for sale or let in Wimbledon. Tips on presentation, decluttering, and maximising your home\'s appeal.',
};

const tips = [
  {
    number: '01',
    title: 'Declutter & Depersonalise',
    description: 'Buyers need to imagine themselves in your home. Remove excess furniture, personal photographs, and anything that distracts from the space itself. Less is more — a decluttered room always feels larger and more inviting.',
  },
  {
    number: '02',
    title: 'Deep Clean Everything',
    description: 'A spotless home signals that the property has been well maintained. Pay particular attention to kitchens, bathrooms, windows, and any outdoor areas. Consider a professional clean before photography and viewings.',
  },
  {
    number: '03',
    title: 'Address Minor Repairs',
    description: 'Fix dripping taps, cracked tiles, scuffed paintwork, and squeaky doors. These small issues can create an impression of neglect. A fresh coat of neutral paint in tired rooms can transform the feel of your home.',
  },
  {
    number: '04',
    title: 'Maximise Natural Light',
    description: 'Clean windows, open curtains, and remove anything blocking light. Well-lit rooms photograph beautifully and create a warm, welcoming atmosphere for viewers.',
  },
  {
    number: '05',
    title: 'Kerb Appeal Matters',
    description: 'The front of your home is the first thing buyers see. Tidy the garden, clean the front door, polish the letterbox, and ensure the entrance is welcoming. First impressions are formed in seconds.',
  },
  {
    number: '06',
    title: 'Stage Key Rooms',
    description: 'Focus on the rooms that matter most: kitchen, living room, and master bedroom. Fresh flowers, neatly arranged cushions, and a clear dining table help buyers connect emotionally with the space.',
  },
];

export default function PreparingToListPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Beautifully staged home interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">Homeowners</span>
          <h1 className="heading-display text-white mt-2">Preparing to List Your Home</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="text-body text-slate font-inter font-light leading-relaxed text-lg">
              The way your property is presented can significantly impact both the price you achieve and the speed of your sale. These are our recommendations for preparing your home to make the best possible impression.
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-padding pt-0">
        <div className="container-content">
          <div className="space-y-12">
            {tips.map((tip) => (
              <div key={tip.number} className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-b border-beige pb-12 last:border-0">
                <div className="lg:col-span-1">
                  <span className="font-cormorant text-title text-brand/30 font-light">{tip.number}</span>
                </div>
                <div className="lg:col-span-11">
                  <h3 className="heading-section text-charcoal mb-3">{tip.title}</h3>
                  <p className="text-body text-slate font-inter font-light leading-relaxed max-w-3xl">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-white">Ready to List?</h2>
          <p className="mt-4 text-body font-inter font-light text-white/70 max-w-lg mx-auto">
            When your home is ready, we are here to help. Book a free valuation and let us get started.
          </p>
          <div className="mt-8">
            <Link
              href="/valuation"
              className="bg-white text-brand-dark px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/90 transition-colors inline-block"
            >
              Book a Free Valuation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
