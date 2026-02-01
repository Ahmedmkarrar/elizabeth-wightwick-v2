'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
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

  return (
    <>
      {/* Hero Image */}
      <div
        className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] cursor-pointer group"
        onClick={() => openLightbox(0)}
      >
        <Image
          src={images[0]}
          alt={address}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400" />
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-tiny font-inter text-charcoal">
          1 / {images.length} photos
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="container-wide py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className={cn(
                  'relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 overflow-hidden transition-opacity duration-400',
                  i === currentIndex ? 'opacity-100 ring-2 ring-gold' : 'opacity-60 hover:opacity-100'
                )}
              >
                <Image
                  src={img}
                  alt={`${address} - Photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </button>
            ))}
          </div>
        </div>
      )}

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
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close gallery"
            >
              <XMarkIcon className="w-7 h-7" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-10 text-small font-inter text-white/60">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Navigation */}
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

            {/* Image */}
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
