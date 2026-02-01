'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/properties', label: 'Properties' },
  { href: '/services', label: 'Services' },
  { href: '/wimbledon', label: 'Wimbledon' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isAdmin = pathname.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  if (isAdmin) return null;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-600',
          isScrolled || !isHome
            ? 'bg-white/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="container-wide flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span
              className={cn(
                'font-cormorant text-xl md:text-2xl font-light tracking-wide transition-colors duration-400',
                isScrolled || !isHome ? 'text-charcoal' : 'text-white'
              )}
            >
              Elizabeth Wightwick
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-small font-inter font-normal tracking-wide transition-colors duration-400 relative',
                  isScrolled || !isHome
                    ? 'text-charcoal hover:text-gold'
                    : 'text-white/90 hover:text-white',
                  pathname === link.href && 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-current'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/valuation"
              className={cn(
                'text-small font-inter font-normal tracking-wide px-6 py-2.5 transition-all duration-400',
                isScrolled || !isHome
                  ? 'bg-gold text-white hover:bg-gold-dark'
                  : 'border border-white/60 text-white hover:bg-white/10'
              )}
            >
              Book Valuation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              'lg:hidden relative z-50 p-2 transition-colors duration-400',
              isMobileOpen
                ? 'text-charcoal'
                : isScrolled || !isHome
                  ? 'text-charcoal'
                  : 'text-white'
            )}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-cream lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'font-cormorant text-title font-light text-charcoal transition-colors hover:text-gold',
                      pathname === link.href && 'text-gold'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/valuation"
                  className="bg-gold text-white px-8 py-3 text-small font-inter tracking-wide hover:bg-gold-dark transition-colors"
                >
                  Book Valuation
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute bottom-12 text-center"
              >
                <p className="text-tiny text-slate font-inter">0203 597 3484</p>
                <p className="text-tiny text-slate font-inter mt-1">info@elizabeth-wightwick.co.uk</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
