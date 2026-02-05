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
    <section className="section-padding bg-cream">
      <div className="container-narrow text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="heading-display text-charcoal mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <blockquote className="font-cormorant text-subtitle md:text-title font-light text-charcoal leading-snug italic max-w-3xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="font-inter text-small font-medium text-charcoal">
                  {testimonials[current].name}
                </p>
                <p className="font-inter text-tiny text-slate mt-1">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-400 ${
                i === current ? 'bg-brand w-6' : 'bg-taupe'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
