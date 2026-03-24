import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon | Elizabeth Wightwick',
  description: 'Elizabeth Wightwick — Independent estate agency in Wimbledon Village. Our new website is coming soon.',
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F5F2ED] px-6">
      <div className="max-w-lg text-center">
        {/* Wordmark */}
        <h1
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          className="text-3xl sm:text-4xl font-light tracking-wide text-[#2C3B2D] mb-8"
        >
          Elizabeth Wightwick
        </h1>

        {/* Thin rule */}
        <div className="w-16 h-px bg-[#2C3B2D]/30 mx-auto mb-8" />

        {/* Message */}
        <p
          style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
          className="text-base text-[#2C3B2D]/70 font-light leading-relaxed mb-2"
        >
          We are making some improvements.
        </p>
        <p
          style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
          className="text-base text-[#2C3B2D]/70 font-light leading-relaxed"
        >
          Our new website will be with you very shortly.
        </p>

        {/* Contact */}
        <div className="mt-12 space-y-2">
          <p
            style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
            className="text-sm text-[#2C3B2D]/50 font-light tracking-wide uppercase"
          >
            In the meantime
          </p>
          <a
            href="tel:02035973484"
            style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
            className="block text-sm text-[#2C3B2D]/70 hover:text-[#2C3B2D] transition-colors"
          >
            0203 597 3484
          </a>
          <a
            href="mailto:info@elizabeth-wightwick.co.uk"
            style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
            className="block text-sm text-[#2C3B2D]/70 hover:text-[#2C3B2D] transition-colors"
          >
            info@elizabeth-wightwick.co.uk
          </a>
        </div>

        {/* Address */}
        <p
          style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
          className="mt-10 text-xs text-[#2C3B2D]/35 font-light"
        >
          60 High Street, Wimbledon Village, London SW19 5EE
        </p>
      </div>
    </main>
  );
}
