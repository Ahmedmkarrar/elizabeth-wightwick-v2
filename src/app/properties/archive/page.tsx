import type { Metadata } from 'next';
import ArchivePageClient from '@/components/properties/ArchivePageClient';

export const metadata: Metadata = {
  title: 'Recently Sold & Let | Elizabeth Wightwick',
  description: 'A selection of properties recently sold and let by Elizabeth Wightwick across Wimbledon Village, New Malden and South West London. Our track record speaks for itself.',
};

export default function PropertyArchivePage() {
  return <ArchivePageClient />;
}
