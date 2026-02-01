'use client';

import { useState } from 'react';
import { Input, Textarea, Select } from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function NewPropertyPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    alert('Property saved (demo mode)');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="heading-title text-charcoal">Add New Property</h1>
        <p className="text-small text-slate font-inter mt-1">Create a new property listing</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl space-y-8">
        {/* Address */}
        <div className="bg-white p-8">
          <h2 className="heading-section text-charcoal mb-6">Address</h2>
          <div className="space-y-5">
            <Input id="address1" label="Address Line 1" placeholder="e.g. Marryat Road" required />
            <Input id="address2" label="Address Line 2" placeholder="e.g. Wimbledon Village" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input id="city" label="City" placeholder="London" required />
              <Input id="postcode" label="Postcode" placeholder="SW19 5BB" required />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="bg-white p-8">
          <h2 className="heading-section text-charcoal mb-6">Property Details</h2>
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Select
                id="department"
                label="Department"
                options={[
                  { value: 'sales', label: 'For Sale' },
                  { value: 'lettings', label: 'To Let' },
                ]}
              />
              <Select
                id="type"
                label="Property Type"
                options={[
                  { value: 'house', label: 'House' },
                  { value: 'flat', label: 'Flat / Apartment' },
                  { value: 'studio', label: 'Studio' },
                  { value: 'land', label: 'Land' },
                ]}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Input id="price" label="Price" type="number" placeholder="2950000" required />
              <Select
                id="qualifier"
                label="Price Qualifier"
                options={[
                  { value: 'fixed', label: 'Fixed Price' },
                  { value: 'OIRO', label: 'OIRO' },
                  { value: 'OIEO', label: 'OIEO' },
                  { value: 'guide_price', label: 'Guide Price' },
                  { value: 'POA', label: 'POA' },
                ]}
              />
              <Select
                id="status"
                label="Status"
                options={[
                  { value: 'available', label: 'Available' },
                  { value: 'under_offer', label: 'Under Offer' },
                  { value: 'sold', label: 'Sold' },
                  { value: 'let_agreed', label: 'Let Agreed' },
                ]}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Input id="bedrooms" label="Bedrooms" type="number" placeholder="5" />
              <Input id="bathrooms" label="Bathrooms" type="number" placeholder="4" />
              <Input id="receptions" label="Reception Rooms" type="number" placeholder="2" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white p-8">
          <h2 className="heading-section text-charcoal mb-6">Description</h2>
          <Textarea
            id="description"
            label="Full Description"
            placeholder="Write a compelling description of the property..."
            className="min-h-[200px]"
          />
          <div className="mt-5">
            <Input id="features" label="Key Features (comma separated)" placeholder="Period features, South-facing garden, Off-street parking" />
          </div>
        </div>

        {/* Additional */}
        <div className="bg-white p-8">
          <h2 className="heading-section text-charcoal mb-6">Additional Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Select
              id="tenure"
              label="Tenure"
              options={[
                { value: '', label: 'N/A' },
                { value: 'Freehold', label: 'Freehold' },
                { value: 'Leasehold', label: 'Leasehold' },
                { value: 'Share of Freehold', label: 'Share of Freehold' },
              ]}
            />
            <Select
              id="epc"
              label="EPC Rating"
              options={[
                { value: '', label: 'N/A' },
                { value: 'A', label: 'A' },
                { value: 'B', label: 'B' },
                { value: 'C', label: 'C' },
                { value: 'D', label: 'D' },
                { value: 'E', label: 'E' },
              ]}
            />
            <Select
              id="council-tax"
              label="Council Tax Band"
              options={[
                { value: '', label: 'N/A' },
                ...['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((b) => ({ value: b, label: `Band ${b}` })),
              ]}
            />
          </div>
        </div>

        {/* Images */}
        <div className="bg-white p-8">
          <h2 className="heading-section text-charcoal mb-6">Images</h2>
          <div className="border-2 border-dashed border-taupe/40 p-12 text-center">
            <p className="text-body text-slate font-inter">Drag and drop images here or click to upload</p>
            <p className="text-tiny text-slate/60 font-inter mt-2">Supports JPG, PNG, WebP. Max 10MB each.</p>
            <input type="file" multiple accept="image/*" className="mt-4" />
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-4">
          <Button type="submit" loading={loading}>
            Publish Property
          </Button>
          <Button type="button" variant="secondary">
            Save Draft
          </Button>
        </div>
      </form>
    </div>
  );
}
