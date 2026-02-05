'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface PropertyGalleryProps {
  images: string[];
  address: string;
}

export default function PropertyGallery({ images, address }: PropertyGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, goNext, goPrev]);

  const displayImages = images.slice(0, 5);
  const remaining = images.length - 5;

  return (
    <>
      {/* Mosaic Gallery Grid */}
      <div className="cursor-pointer" onClick={() => openLightbox(0)}>
        {displayImages.length === 1 ? (
          <div className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] group">
            <Image src={displayImages[0]} alt={address} fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400" />
          </div>
        ) : displayImages.length === 2 ? (
          <div className="grid grid-cols-2 gap-1 h-[50vh] md:h-[65vh] lg:h-[70vh]">
            {displayImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden group" onClick={(e) => { e.stopPropagation(); openLightbox(i); }}>
                <Image src={img} alt={`${address} - ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" sizes="50vw" priority={i === 0} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 grid-rows-2 gap-1 h-[50vh] md:h-[60vh] lg:h-[70vh]">
            {/* Main large image */}
            <div
              className="relative col-span-2 row-span-2 overflow-hidden group"
              onClick={(e) => { e.stopPropagation(); openLightbox(0); }}
            >
              <Image src={displayImages[0]} alt={address} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" sizes="50vw" priority />
            </div>
            {/* Secondary images */}
            {displayImages.slice(1).map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden group"
                onClick={(e) => { e.stopPropagation(); openLightbox(i + 1); }}
              >
                <Image src={img} alt={`${address} - ${i + 2}`} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" sizes="25vw" />
                {/* Show remaining count on last image */}
                {i === displayImages.length - 2 && remaining > 0 && (
                  <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center">
                    <span className="font-inter text-white text-lg font-medium">+{remaining} more</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* View all photos bar */}
      <div className="container-wide py-3 flex justify-between items-center">
        <button
          onClick={() => openLightbox(0)}
          className="text-tiny font-inter text-brand font-medium uppercase tracking-widest hover:text-brand-dark transition-colors"
        >
          View All {images.length} Photos
        </button>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close gallery"
            >
              <XMarkIcon className="w-7 h-7" />
            </button>

            <div className="absolute top-6 left-6 z-10 text-small font-inter text-white/60">
              {currentIndex + 1} / {images.length}
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-4 md:left-8 z-10 p-3 text-white/50 hover:text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-8 h-8" />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-4 md:right-8 z-10 p-3 text-white/50 hover:text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-8 h-8" />
                </button>
              </>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 md:mx-12"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${address} - Photo ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
