'use client';

import { useState, useMemo } from 'react';
import { mockProperties } from '@/lib/mock-data';
import PropertyGrid from '@/components/properties/PropertyGrid';
import { motion } from 'framer-motion';

export default function PropertyArchivePage() {
  const [filter, setFilter] = useState<string>('all');

  const properties = useMemo(() => {
    const archived = mockProperties.filter((p) => p.status === 'sold' || p.status === 'let_agreed');
    if (filter === 'sold') return archived.filter((p) => p.status === 'sold');
    if (filter === 'let') return archived.filter((p) => p.status === 'let_agreed');
    return archived;
  }, [filter]);

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container-wide">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-tiny font-inter font-medium uppercase tracking-widest text-brand"
          >
            Previous Properties
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display text-charcoal mt-3"
          >
            Property Archive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-body text-slate font-inter font-light max-w-2xl"
          >
            A selection of properties we have previously sold and let. A testament to our
            experience and the quality of homes we represent.
          </motion.p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-10 border-b border-beige pb-6">
            <p className="text-small font-inter text-slate">
              <span className="text-charcoal font-medium">{properties.length}</span> archived properties
            </p>
            <div className="flex items-center gap-4">
              {['all', 'sold', 'let'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-small font-inter px-4 py-2 transition-colors ${
                    filter === f
                      ? 'bg-brand text-white'
                      : 'text-slate hover:text-charcoal bg-beige/50'
                  }`}
                >
                  {f === 'all' ? 'All' : f === 'sold' ? 'Sold' : 'Let'}
                </button>
              ))}
            </div>
          </div>
          {properties.length > 0 ? (
            <PropertyGrid properties={properties} columns={3} />
          ) : (
            <div className="text-center py-20">
              <p className="text-body text-slate font-inter font-light">
                No archived properties found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
