'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 30, suffix: '+', label: 'Years Combined Experience' },
  { value: 500, suffix: 'm+', prefix: '£', label: 'Property Sold & Let' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 1, suffix: '', label: 'Wimbledon Village Office', prefix: '' },
];

function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  inView,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
      {/* Subtle gradient decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-light rounded-full blur-[150px]" />
      </div>

      <div className="container-wide relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="font-cormorant text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-light text-white leading-none">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  inView={isInView}
                />
              </div>
              <div className="w-8 h-px bg-brand/50 mx-auto mt-4 mb-4" />
              <p className="text-[11px] md:text-[12px] font-inter font-medium uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
