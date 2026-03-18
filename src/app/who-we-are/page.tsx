import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Who We Are',
  description: 'Elizabeth Wightwick is an independent estate agency in Wimbledon Village with over 30 years of combined experience in residential sales, lettings, and property management.',
};

const team = [
  {
    name: 'Elizabeth Wightwick',
    role: 'Director',
    initials: 'EW',
    bio: 'With over a decade of professional experience in the London property market, Elizabeth established Elizabeth Wightwick Limited in 2017. The agency has grown entirely by word of mouth — a reflection of the level of service provided. Elizabeth combines vast local knowledge with a straightforward, client-first approach that puts your interests ahead of transaction volume.',
  },
  {
    name: 'Karlien Munro',
    role: 'Business Coordinator',
    initials: 'KM',
    bio: 'Karlien joined in 2020 and oversees the business\'s operational backbone — property management, administration, and accounting. With over 16 years of experience in sales and lettings across Central London and Surrey, and as a member of ARLA, she ensures every administrative and legal detail is handled with precision and care.',
  },
  {
    name: 'Sophie Gittins',
    role: 'Senior Negotiator',
    initials: 'SG',
    bio: 'Sophie joined the team in 2022 as a Senior Sales and Lettings Negotiator. Her extensive experience in the London property market, combined with a calm and tenacious approach to negotiation, ensures that clients consistently achieve the best possible outcome — whether buying, selling, or renting.',
  },
];

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80" alt="Wimbledon Village High Street" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-white/70">About Us</span>
          <h1 className="heading-display text-white mt-2">Who We Are</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <div className="relative aspect-[4/5] bg-beige overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                  alt="60 High Street, Wimbledon Village"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="text-tiny font-inter text-slate/50 mt-3">60 High Street, Wimbledon Village, SW19 5EE</p>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">Our Story</span>
              <h2 className="heading-title text-charcoal mt-4">
                30 Years of Wimbledon Expertise
              </h2>
              <div className="divider-brand mt-6 mb-8" />
              <div className="space-y-5 text-body text-slate font-inter font-light leading-relaxed">
                <p>
                  Elizabeth Wightwick was founded with a simple belief: that buying, selling, or letting a property should be a personal experience, guided by people who genuinely care about getting it right.
                </p>
                <p>
                  Based at 60 High Street in Wimbledon Village, we are an independent agency with more than 30 years of combined experience in the local property market. Our intimate knowledge of Wimbledon and South West London, combined with our commitment to bespoke service, sets us apart from the national chains and online agencies.
                </p>
                <p>
                  We deliberately keep our client list manageable. This means every property we handle receives our full and undivided attention, every client has direct access to us, and every transaction is handled with the care and professionalism it deserves.
                </p>
                <p>
                  We do not believe in high-pressure tactics or inflated valuations designed to win instructions. We provide honest, evidence-based advice — and our reputation, built entirely on referral and repeat business, reflects that approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propertymark Accreditation */}
      <section className="section-padding bg-beige/20 border-y border-beige">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">Professional Standards</span>
              <h2 className="heading-title text-charcoal mt-4">Regulated &amp; Accredited</h2>
              <div className="divider-brand mt-6 mb-8" />
              <div className="space-y-4 text-body text-slate font-inter font-light leading-relaxed">
                <p>
                  Elizabeth Wightwick is a member of Propertymark — the UK&apos;s leading professional body for estate agents. This membership confirms that we adhere to a strict code of conduct, hold Client Money Protection insurance, and maintain the professional standards that protect our clients.
                </p>
                <p>
                  Our team includes ARLA-qualified professionals, ensuring that lettings clients receive advice and management that is fully compliant with the latest legislation — including right to rent, deposit protection, energy performance requirements, and tenant fee regulations.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="w-full max-w-[200px] bg-white border border-beige p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <p className="font-inter text-[11px] font-semibold text-charcoal uppercase tracking-wider">Propertymark</p>
                  <p className="font-inter text-[10px] text-slate/60 mt-1">Member</p>
                </div>
              </div>
              <div className="w-full max-w-[200px] bg-white border border-beige p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <p className="font-inter text-[11px] font-semibold text-charcoal uppercase tracking-wider">ARLA</p>
                  <p className="font-inter text-[10px] text-slate/60 mt-1">Qualified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center mb-16">
            <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">Our People</span>
            <h2 className="heading-title text-charcoal mt-4">Meet the Team</h2>
            <div className="divider-brand mt-6 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-brand/10 mx-auto mb-6 flex items-center justify-center border border-brand/20">
                  <span className="text-xl font-cormorant font-semibold text-brand">
                    {member.initials}
                  </span>
                </div>
                <h3 className="heading-section text-charcoal">{member.name}</h3>
                <p className="text-tiny font-inter font-medium text-brand mt-1 mb-5 uppercase tracking-widest">{member.role}</p>
                <p className="text-small text-slate font-inter font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Off-Market */}
      <section className="section-padding bg-charcoal">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand/80">Exclusive Access</span>
              <h2 className="heading-title text-white mt-4">The Off-Market Advantage</h2>
              <div className="divider-brand mt-6 mb-8" />
              <div className="space-y-4 text-body text-white/70 font-inter font-light leading-relaxed">
                <p>
                  A significant proportion of the properties we handle never appear on Rightmove or Zoopla. Our network of registered buyers, relocation agents, and financial advisers means we can introduce the right purchaser to the right property — discreetly, and often at a premium.
                </p>
                <p>
                  For sellers who value their privacy, or who simply do not wish to open their home to speculative viewers, this is an increasingly attractive option. We can advise on whether an off-market or quiet launch is right for your property and the current market conditions.
                </p>
                <p>
                  For buyers, registering with us is the single most effective way to access homes in Wimbledon and South West London before the competition.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="bg-brand text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-brand-dark transition-colors inline-block text-center"
                >
                  Register as a Buyer
                </Link>
                <Link
                  href="/valuation"
                  className="border border-white/30 text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/10 transition-all inline-block text-center"
                >
                  Discuss Your Sale
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-charcoal/50 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Exclusive property"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-white">Get in Touch</h2>
          <p className="mt-4 text-body font-inter font-light text-white/70 max-w-lg mx-auto">
            Whether you are looking to sell, let, buy, or rent, we would be delighted to hear from you
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-brand-dark px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/90 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:02035973484"
              className="border border-white/30 text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-white/10 transition-all"
            >
              Call 0203 597 3484
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
