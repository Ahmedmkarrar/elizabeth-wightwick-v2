import type { Metadata } from 'next';
import PropertyFinderClient from '@/components/PropertyFinderClient';

export const metadata: Metadata = {
  title: 'Bespoke Property Finder | Wimbledon & South West London | Elizabeth Wightwick',
  description: 'Your personal property finder in Wimbledon and South West London. We search on and off-market to find the right home for you — exclusively for buyers.',
};

export default function PropertyFinderPage() {
  return <PropertyFinderClient />;
}
