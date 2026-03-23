import type { Metadata } from 'next';
import { getPropertyById } from '@/lib/data';
import PropertyDetailClient from '@/components/properties/PropertyDetailClient';
import { formatPriceFull } from '@/lib/utils';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = await getPropertyById(params.id).catch(() => null);

  if (!property) {
    return {
      title: 'Property | Elizabeth Wightwick',
      description: 'View this property exclusively marketed by Elizabeth Wightwick estate agents in Wimbledon Village.',
    };
  }

  const deptLabel = property.department === 'sales' ? 'For Sale' : 'To Let';
  const typeLabel = property.property_type.charAt(0).toUpperCase() + property.property_type.slice(1);
  const price = formatPriceFull(property.price, property.department, property.price_qualifier);
  const bedsLabel = property.bedrooms > 0 ? `${property.bedrooms} bedroom ` : '';

  const title = `${bedsLabel}${typeLabel} ${deptLabel} | ${property.address_line_1}, ${property.city} | Elizabeth Wightwick`;
  const description = `${bedsLabel}${typeLabel.toLowerCase()} ${deptLabel.toLowerCase()} in ${property.city}${property.postcode ? `, ${property.postcode}` : ''}. ${price}. Exclusively marketed by Elizabeth Wightwick, independent estate agents in Wimbledon Village.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: property.main_image ? [{ url: property.main_image, width: 1200, height: 800, alt: property.address_line_1 }] : [],
    },
  };
}

export default function PropertyDetailPage({ params }: Props) {
  return <PropertyDetailClient params={params} />;
}
