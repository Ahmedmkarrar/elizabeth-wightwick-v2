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
  return (
    <footer className="bg-charcoal text-white/80">
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

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-16 mb-8" />

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
