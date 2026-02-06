'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-12 h-px bg-brand mx-auto mb-8 origin-center"
            />

            {/* Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-cormorant text-[2rem] sm:text-[2.75rem] font-light text-white tracking-wider"
              >
                Elizabeth Wightwick
              </motion.h1>
            </div>

            {/* Tagline */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 text-[10px] font-inter font-medium uppercase tracking-[0.4em] text-white/30"
              >
                Estate Agents &middot; Wimbledon Village
              </motion.p>
            </div>

            {/* Bottom Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="w-12 h-px bg-brand mx-auto mt-8 origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
