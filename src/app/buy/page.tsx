import type { Metadata } from 'next';
import BuyPageClient from '@/components/properties/BuyPageClient';

export const metadata: Metadata = {
  title: 'Properties for Sale in Wimbledon | Elizabeth Wightwick',
  description: 'Browse houses and flats for sale in Wimbledon Village, Wimbledon Town, New Malden, Coombe, Putney and Raynes Park. Independent estate agents with over 30 years of local expertise.',
};

export default function BuyPage() {
  return <BuyPageClient />;
}
