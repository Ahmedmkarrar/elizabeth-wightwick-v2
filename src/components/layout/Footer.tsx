import Link from 'next/link';

const footerLinks = {
  properties: [
    { href: '/properties/sales', label: 'Properties for Sale' },
    { href: '/properties/lettings', label: 'Properties to Let' },
    { href: '/valuation', label: 'Free Valuation' },
    { href: '/register', label: 'Register' },
  ],
  services: [
    { href: '/services/sales', label: 'Residential Sales' },
    { href: '/services/lettings', label: 'Residential Lettings' },
    { href: '/services/property-management', label: 'Property Management' },
    { href: '/services/property-sourcing', label: 'Property Sourcing' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/wimbledon', label: 'Wimbledon Guide' },
    { href: '/fees', label: 'Our Fees' },
    { href: '/contact', label: 'Contact' },
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

          {/* Services */}
          <div>
            <h3 className="font-inter text-tiny font-medium uppercase tracking-widest text-white/40 mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
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
          <p className="text-tiny text-white/30">
            &copy; {new Date().getFullYear()} Elizabeth Wightwick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
