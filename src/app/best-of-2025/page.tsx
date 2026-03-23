import type { Metadata } from 'next';
import BestOf2025Client from '@/components/BestOf2025Client';

export const metadata: Metadata = {
  title: 'Best of 2025 | Elizabeth Wightwick',
  description: 'A curated selection of the finest properties we have had the privilege of marketing in 2025 — chosen for their character, quality, and enduring appeal.',
};

export default function BestOf2025Page() {
  return <BestOf2025Client />;
}
