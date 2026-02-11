import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are',
  description: 'Elizabeth Wightwick is an independent, family-run estate agency in Wimbledon Village with over 30 years of combined experience in residential sales and lettings.',
};

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-content">
          <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">About Us</span>
          <h1 className="heading-display text-charcoal mt-3">Who We Are</h1>
          <p className="mt-4 text-body text-slate font-inter font-light max-w-2xl">
            Independent, family-run estate agency in the heart of Wimbledon Village
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pt-0">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <div className="relative aspect-[4/5] bg-beige">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Elizabeth Wightwick office, Wimbledon Village High Street"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">Our Story</span>
              <h2 className="heading-title text-charcoal mt-4">
                30 Years of Wimbledon Expertise
              </h2>
              <div className="divider-brand mt-6 mb-8" />
              <div className="space-y-4 text-body text-slate font-inter font-light leading-relaxed">
                <p>
                  Elizabeth Wightwick was founded with a simple belief: that buying, selling, or letting a property should be a personal experience, guided by people who genuinely care about getting it right.
                </p>
                <p>
                  Based at 60 High Street in Wimbledon Village, we are an independent, family-run agency with over 30 years of combined experience in the local property market. Our intimate knowledge of Wimbledon and South West London, combined with our commitment to bespoke service, sets us apart from the larger chains.
                </p>
                <p>
                  We deliberately keep our client list manageable. This means every property receives our full attention, every client has direct access to us, and every transaction is handled with the care and dedication it deserves.
                </p>
                <p>
                  Our approach is one of unassuming professionalism. We do not believe in high-pressure tactics or empty promises. Instead, we let our track record, local knowledge, and dedication to our clients speak for themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center mb-16">
            <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">Our People</span>
            <h2 className="heading-title text-charcoal mt-4">Meet The Team</h2>
            <div className="divider-brand mt-6 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                name: 'Elizabeth Wightwick',
                role: 'Director',
                bio: 'With over a decade\u2019s professional experience in the London property market, Elizabeth set up Elizabeth Wightwick Limited in 2017 and has since grown, simply by word of mouth. Elizabeth has successfully grown market share with her vast knowledge and expertise, with the simple goal of providing the best service, tailored by her clients needs.',
              },
              {
                name: 'Karlien Munro',
                role: 'Business Coordinator',
                bio: 'Karlien joined Elizabeth Wightwick in 2020 and maintains the business on the back end, ensuring that all property management, administrative and accounting areas are quickly and consistently dealt with, while supporting each department in growing their portfolios. Karlien has over 16 years experience within the Sales and Lettings market in Central London and Surrey and is a member of ARLA, therefore is very familiar with the constant flow of changes to the market and legislation.',
              },
              {
                name: 'Sophie Gittins',
                role: 'Senior Negotiator',
                bio: 'Sophie joined the team in 2022 as a Senior Lettings and Sales Negotiator. Having had many years of experience in the London property market, Sophie is a skilled negotiator with extensive knowledge in both sales and lettings negotiations.',
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-brand/10 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-cormorant font-semibold text-brand">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="heading-section text-charcoal">{member.name}</h3>
                <p className="text-small font-inter font-medium text-brand mt-1 mb-4">{member.role}</p>
                <p className="text-small text-slate font-inter font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-beige/30">
        <div className="container-content">
          <h2 className="heading-title text-charcoal text-center mb-14">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Personal Service',
                description: 'You will always deal directly with us. No call centres, no juniors — just dedicated, experienced professionals who know your property and your goals.',
              },
              {
                title: 'Local Expertise',
                description: 'We live and work in Wimbledon. Our knowledge of the area, the streets, the schools, and the market is genuine and deeply rooted. This matters when pricing, marketing, and negotiating.',
              },
              {
                title: 'Honest Advice',
                description: 'We provide straightforward, considered guidance. If we think something will not work, we will tell you. Our reputation is built on trust, and we intend to keep it that way.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="heading-section text-charcoal mb-4">{value.title}</h3>
                <p className="text-small text-slate font-inter font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
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
