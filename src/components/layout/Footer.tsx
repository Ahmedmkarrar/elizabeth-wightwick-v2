'use client';

import { useState } from 'react';
import Link from 'next/link';

const footerLinks = {
  properties: [
    { href: '/buy', label: 'Buy' },
    { href: '/rent', label: 'Rent' },
    { href: '/best-of-2025', label: 'Best of 2025' },
    { href: '/properties/archive', label: 'Property Archive' },
    { href: '/valuation', label: 'Free Valuation' },
    { href: '/register', label: 'Register' },
  ],
  homeowners: [
    { href: '/homeowners/selling-with-us', label: 'Selling With Us' },
    { href: '/homeowners/buying-with-us', label: 'Buying With Us' },
    { href: '/homeowners/property-management', label: 'Property Management' },
    { href: '/homeowners/preparing-to-list', label: 'Preparing to List' },
    { href: '/fees', label: 'Our Fees' },
  ],
  company: [
    { href: '/who-we-are', label: 'Who We Are' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/complaints-procedure', label: 'Complaints Procedure' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-charcoal text-white/80">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-wide py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="font-cormorant text-[1.75rem] md:text-[2rem] font-light text-white">
                Stay Updated
              </h3>
              <p className="mt-2 text-small text-white/50 font-inter font-light max-w-md">
                Receive our latest properties and market insights directly to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 md:w-72 bg-white/5 border border-white/15 px-5 py-3 text-[13px] font-inter text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                type="submit"
                className="bg-brand hover:bg-brand-dark text-white px-6 py-3 text-[11px] font-inter font-medium uppercase tracking-[0.15em] transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-wide section-padding">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-cormorant text-2xl font-light text-white tracking-wide">
              Elizabeth Wightwick
            </Link>
            <p className="mt-6 text-small leading-relaxed text-white/60">
              Independent, family-run estate agency in Wimbledon Village with over 30 years of combined experience.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-small text-white/80">0203 597 3484</p>
              <p className="text-small text-white/60">info@elizabeth-wightwick.co.uk</p>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h3 className="font-inter text-tiny font-medium uppercase tracking-widest text-white/40 mb-6">
              Properties
            </h3>
            <ul className="space-y-3">
              {footerLinks.properties.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-white/60 hover:text-white transition-colors duration-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Homeowners */}
          <div>
            <h3 className="font-inter text-tiny font-medium uppercase tracking-widest text-white/40 mb-6">
              Homeowners
            </h3>
            <ul className="space-y-3">
              {footerLinks.homeowners.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-white/60 hover:text-white transition-colors duration-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-inter text-tiny font-medium uppercase tracking-widest text-white/40 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-white/60 hover:text-white transition-colors duration-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mt-14">
          <a href="#" aria-label="Instagram" className="text-white/40 hover:text-white transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white/40 hover:text-white transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="text-white/40 hover:text-white transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-12 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-tiny text-white/40">
            <p>60 High Street, Wimbledon Village, London SW19 5EE</p>
            <span className="hidden md:inline">|</span>
            <p>Company No. 10669465</p>
            <span className="hidden md:inline">|</span>
            <p>VAT No. 312425641</p>
          </div>
          <div className="flex items-center gap-4 text-tiny text-white/30">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <span>|</span>
            <Link href="/complaints-procedure" className="hover:text-white/60 transition-colors">Complaints</Link>
            <span>|</span>
            <p>&copy; {new Date().getFullYear()} Elizabeth Wightwick</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
