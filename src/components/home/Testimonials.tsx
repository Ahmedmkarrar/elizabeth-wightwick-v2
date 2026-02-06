'use client';

import { useState, useCallback, useEffect } from 'react';
import { mockTestimonials } from '@/lib/mock-data';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonials = mockTestimonials;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 md:py-32 bg-warm-white relative overflow-hidden">
      {/* Subtle brand accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/10 to-transparent" />

      <div className="container-narrow text-center relative z-10">
        <ScrollReveal>
          <span className="text-[11px] font-inter font-medium uppercase tracking-[0.3em] text-brand">
            What Our Clients Say
          </span>
        </ScrollReveal>

        <div className="relative min-h-[300px] flex items-center justify-center mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Five stars */}
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand/60" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-cormorant text-[1.5rem] sm:text-[1.85rem] md:text-[2.25rem] font-light text-charcoal leading-[1.3] italic max-w-3xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="mt-10">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-10 h-px bg-brand/30 mx-auto mb-5 origin-center"
                />
                <p className="font-inter text-[13px] font-semibold text-charcoal tracking-wide">
                  {testimonials[current].name}
                </p>
                <p className="font-inter text-[12px] text-slate/60 mt-1.5 tracking-wide">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center border border-taupe/30 text-slate hover:text-brand hover:border-brand/30 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === current ? 'w-8 h-1.5 bg-brand' : 'w-1.5 h-1.5 bg-taupe/40 hover:bg-taupe'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center border border-taupe/30 text-slate hover:text-brand hover:border-brand/30 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
