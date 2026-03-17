'use client';

import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury interior',
    span: 'col-span-1 row-span-2',
    aspect: 'aspect-[3/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    alt: 'Property exterior',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern kitchen',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    alt: 'Living room',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    alt: 'Wimbledon village',
    span: 'col-span-1 row-span-2',
    aspect: 'aspect-[3/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
    alt: 'Interior detail',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[4/3]',
  },
];

export default function LifestyleGallery() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[11px] font-inter font-medium uppercase tracking-[0.3em] text-brand">
            The Lifestyle
          </span>
          <h2 className="font-cormorant text-[2.25rem] md:text-[2.75rem] font-light text-charcoal mt-3">
            Living in Wimbledon
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`${img.span} overflow-hidden group`}
            >
              <div className={`relative ${img.aspect} w-full overflow-hidden`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
