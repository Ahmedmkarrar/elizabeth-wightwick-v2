'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function ListingPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const pathname = usePathname();

  const isAdmin = pathname.startsWith('/admin');

  useEffect(() => {
    // Check if already dismissed this session
    const dismissed = sessionStorage.getItem('listing-popup-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show popup after 30 seconds or when user scrolls 60% of page
    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 30000);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 60 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('listing-popup-dismissed', 'true');
  };

  if (isAdmin) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-charcoal/50"
            onClick={handleDismiss}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white max-w-lg w-full p-10 md:p-12 text-center relative pointer-events-auto shadow-xl">
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 text-slate hover:text-charcoal transition-colors"
                aria-label="Close"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>

              <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">
                Elizabeth Wightwick
              </span>
              <h2 className="heading-title text-charcoal mt-4">
                Thinking of Listing Your Property?
              </h2>
              <p className="mt-4 text-body text-slate font-inter font-light leading-relaxed">
                Book a free, no-obligation valuation with us and discover what your home is truly worth
                in today&apos;s market.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/valuation"
                  onClick={handleDismiss}
                  className="bg-brand text-white px-8 py-3.5 text-small font-inter tracking-wide hover:bg-brand-dark transition-colors inline-block"
                >
                  Book a Free Valuation
                </Link>
                <button
                  onClick={handleDismiss}
                  className="text-small font-inter text-slate hover:text-charcoal transition-colors py-2"
                >
                  No thanks, continue browsing
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
