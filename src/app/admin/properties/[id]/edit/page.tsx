'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { mockProperties } from '@/lib/mock-data';

export default function EditPropertyPage() {
  const { id } = useParams();
  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="py-12 text-center">
        <h1 className="heading-title text-charcoal">Property Not Found</h1>
        <Link href="/admin/properties" className="text-brand hover:text-brand-dark mt-4 inline-block font-inter text-small">
          Back to Properties
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="heading-title text-charcoal">Edit Property</h1>
        <p className="text-small text-slate font-inter mt-1">{property.address_line_1}, {property.postcode}</p>
      </div>

      <div className="bg-white p-8 max-w-4xl">
        <p className="text-body text-slate font-inter">
          Property editing form would be pre-populated with the property data.
          This is a structural placeholder &mdash; the form is identical to the Add Property form
          but with fields pre-filled from the existing property record.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/admin/properties"
            className="bg-charcoal text-white px-6 py-3 text-small font-inter tracking-wide hover:bg-charcoal/80 transition-colors"
          >
            Back to Properties
          </Link>
          <Link
            href={`/properties/${property.id}`}
            className="border border-charcoal text-charcoal px-6 py-3 text-small font-inter tracking-wide hover:bg-charcoal hover:text-white transition-colors"
            target="_blank"
          >
            View Live
          </Link>
        </div>
      </div>
    </div>
  );
}
