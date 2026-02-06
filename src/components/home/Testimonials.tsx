'use client';

import { useState, useCallback, useEffect } from 'react';
import { mockTestimonials } from '@/lib/mock-data';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonials = mockTestimonials;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-warm-white relative overflow-hidden">
      <div className="container-narrow text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-inter font-medium uppercase tracking-[0.3em] text-brand"
        >
          Testimonials
        </motion.span>

        <div className="relative min-h-[260px] flex items-center justify-center mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <blockquote className="font-cormorant text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-light text-charcoal leading-snug italic max-w-3xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="mt-10">
                <div className="w-8 h-px bg-brand/30 mx-auto mb-5" />
                <p className="font-inter text-[13px] font-medium text-charcoal tracking-wide">
                  {testimonials[current].name}
                </p>
                <p className="font-inter text-[12px] text-slate/70 mt-1.5 tracking-wide">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-500 rounded-full ${
                i === current ? 'w-8 h-1.5 bg-brand' : 'w-1.5 h-1.5 bg-taupe/60 hover:bg-taupe'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
