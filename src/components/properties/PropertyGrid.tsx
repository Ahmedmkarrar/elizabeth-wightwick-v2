'use client';

import { Property } from '@/types';
import PropertyCard from './PropertyCard';
import { motion } from 'framer-motion';

interface PropertyGridProps {
  properties: Property[];
  columns?: 2 | 3;
}

export default function PropertyGrid({ properties, columns = 3 }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="heading-subtitle text-charcoal">No properties found</h3>
        <p className="mt-3 text-body text-slate font-inter font-light">
          Try adjusting your search criteria
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${
        columns === 3 ? 'lg:grid-cols-3' : ''
      } gap-8 lg:gap-10`}
    >
      {properties.map((property, i) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <PropertyCard property={property} />
        </motion.div>
      ))}
    </div>
  );
}
