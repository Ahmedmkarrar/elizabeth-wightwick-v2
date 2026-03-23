import type { Metadata } from 'next';
import RentPageClient from '@/components/properties/RentPageClient';

export const metadata: Metadata = {
  title: 'Properties to Let in Wimbledon | Elizabeth Wightwick',
  description: 'Find houses and flats to rent in Wimbledon Village, Wimbledon Town, New Malden, Coombe, Putney and Raynes Park. Bespoke lettings service from an independent Wimbledon estate agent.',
};

export default function RentPage() {
  return <RentPageClient />;
}
