'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

const differences = [
  {
    number: '01',
    title: 'A Deliberately Small Client Roster',
    description: 'We choose to work with a limited number of clients at any one time. This is not an accident — it is a decision we make deliberately so that every property we handle receives our full attention. You will not be passed to a junior negotiator. You will speak to us.',
  },
  {
    number: '02',
    title: 'Over 30 Years of Local Knowledge',
    description: 'We have been selling and letting property in Wimbledon and South West London since the early 1990s. We know the streets, the micro-markets, the seasonal rhythms, and the buyers. That knowledge is not something you can replicate with a database.',
  },
  {
    number: '03',
    title: 'Honest Advice, Not Inflated Valuations',
    description: 'We do not tell you what you want to hear to win your instruction. We tell you what the market will bear, supported by evidence. Properties priced correctly from the outset sell faster and for more. That is in your interest — and ours.',
  },
  {
    number: '04',
    title: 'Access to Off-Market Buyers',
    description: 'Many of our finest transactions happen quietly, before a property ever appears on Rightmove. Our network of registered buyers and their advisers means we can find the right purchaser discreetly — often achieving a better result than an open-market campaign.',
  },
];

export default function WhyDifferent() {
  return (
    <section className="section-padding bg-beige/20">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">
                Our Approach
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-cormorant text-[2.5rem] sm:text-[3rem] font-light text-charcoal mt-4 leading-tight">
                Why We&apos;re Different
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="divider-brand mt-6 mb-8" />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                Elizabeth Wightwick is not a national chain, a franchise, or an algorithm. It is a property agency run by people who live and work in this community and who take genuine personal responsibility for every client they represent.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="mt-10">
                <Link
                  href="/who-we-are"
                  className="group inline-flex items-center gap-4 text-[11px] font-inter font-medium uppercase tracking-[0.2em] text-charcoal hover:text-brand transition-colors duration-500"
                >
                  <span className="relative">
                    Meet the Team
                    <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-brand transition-all duration-500" />
                  </span>
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-0">
              {differences.map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group border-b border-beige py-8 first:pt-0 last:border-0"
                >
                  <div className="flex gap-6 items-start">
                    <span className="font-cormorant text-[1.5rem] text-brand/25 font-light w-10 shrink-0 leading-tight mt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-inter text-[15px] font-medium text-charcoal tracking-wide mb-3">
                        {item.title}
                      </h3>
                      <p className="text-small text-slate font-inter font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
