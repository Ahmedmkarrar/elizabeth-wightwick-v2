'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  HomeIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

const adminLinks = [
  { href: '/admin', label: 'Dashboard', icon: HomeIcon },
  { href: '/admin/properties', label: 'Properties', icon: BuildingOfficeIcon },
  { href: '/admin/inquiries', label: 'Inquiries', icon: ChatBubbleLeftIcon },
  { href: '/admin/valuations', label: 'Valuations', icon: DocumentTextIcon },
  { href: '/admin/settings', label: 'Settings', icon: Cog6ToothIcon },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-charcoal min-h-screen flex flex-col">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin" className="font-cormorant text-xl text-white font-light tracking-wide">
          Elizabeth Wightwick
        </Link>
        <p className="text-tiny text-white/40 font-inter mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 py-6">
        {adminLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 px-6 py-3 text-small font-inter transition-colors',
                isActive
                  ? 'text-white bg-white/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              )}
            >
              <Icon className="w-5 h-5" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-3 text-small font-inter text-white/40 hover:text-white transition-colors"
        >
          <ArrowLeftOnRectangleIcon className="w-5 h-5" />
          Back to Website
        </Link>
      </div>
    </aside>
  );
}
