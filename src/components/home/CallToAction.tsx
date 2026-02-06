'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';

export default function CallToAction() {
  return (
    <section className="relative py-32 md:py-44 bg-brand-dark overflow-hidden">
      {/* Atmospheric gradient orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand rounded-full blur-[200px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-light rounded-full blur-[200px]" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="container-narrow text-center relative z-10">
        <ScrollReveal>
          <span className="text-[11px] font-inter font-medium uppercase tracking-[0.3em] text-white/30">
            Your Property, Our Priority
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-cormorant text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-light text-white mt-6 leading-[1.05]">
            Thinking of selling
            <br />
            <em className="italic">or letting?</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 h-px bg-white/20 mx-auto mt-8 mb-8 origin-center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[15px] md:text-[16px] font-inter font-light text-white/45 max-w-lg mx-auto leading-relaxed">
            Discover how our bespoke approach and local expertise can achieve
            the best result for your property.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <MagneticButton>
              <Link
                href="/valuation"
                className="group relative bg-white text-brand-dark px-14 py-5 text-[11px] font-inter font-semibold tracking-[0.2em] uppercase overflow-hidden transition-shadow duration-500 hover:shadow-2xl"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Free Valuation
                </span>
                <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/contact"
                className="group border border-white/20 text-white px-14 py-5 text-[11px] font-inter font-medium tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-500"
              >
                Get in Touch
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
