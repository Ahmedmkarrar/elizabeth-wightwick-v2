import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, department?: string): string {
  if (department === 'lettings') {
    return `£${price.toLocaleString('en-GB')} pcm`;
  }
  if (price >= 1000000) {
    const millions = price / 1000000;
    const formatted = millions % 1 === 0
      ? millions.toFixed(0)
      : millions.toFixed(millions * 10 % 1 === 0 ? 1 : 2);
    return `£${formatted}m`;
  }
  return `£${price.toLocaleString('en-GB')}`;
}

export function formatPriceFull(price: number, department?: string, qualifier?: string): string {
  const formatted = department === 'lettings'
    ? `£${price.toLocaleString('en-GB')} pcm`
    : `£${price.toLocaleString('en-GB')}`;

  if (qualifier && qualifier !== 'fixed') {
    return `${qualifier} ${formatted}`;
  }
  return formatted;
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    available: 'Available',
    let_agreed: 'Let Agreed',
    sold: 'Sold',
    under_offer: 'Under Offer',
  };
  return labels[status] || status;
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    available: 'bg-brand text-white',
    let_agreed: 'bg-brand-dark text-white',
    sold: 'bg-slate text-white',
    under_offer: 'bg-brand-dark text-white',
  };
  return colors[status] || 'bg-slate text-white';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length).replace(/\s+\S*$/, '') + '...';
}

export function getPropertyTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    house: 'House',
    flat: 'Flat / Apartment',
    studio: 'Studio',
    land: 'Land',
  };
  return labels[type] || type;
}

export function getDepartmentLabel(department: string): string {
  return department === 'sales' ? 'For Sale' : 'To Let';
}
