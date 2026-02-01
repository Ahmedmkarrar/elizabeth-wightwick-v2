'use client';

import { useState } from 'react';
import { Input, Textarea, Select } from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ValuationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="heading-subtitle text-charcoal">Thank You</h3>
        <p className="mt-3 text-body text-slate font-inter font-light max-w-md mx-auto">
          We have received your valuation request and will be in touch within 24 hours to arrange a convenient time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input id="val-address" label="Property Address" placeholder="Full property address" required />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Select
          id="val-type"
          label="Property Type"
          options={[
            { value: '', label: 'Select type' },
            { value: 'house', label: 'House' },
            { value: 'flat', label: 'Flat / Apartment' },
            { value: 'studio', label: 'Studio' },
            { value: 'other', label: 'Other' },
          ]}
        />
        <Select
          id="val-bedrooms"
          label="Bedrooms"
          options={[
            { value: '', label: 'Select bedrooms' },
            { value: '1', label: '1 bedroom' },
            { value: '2', label: '2 bedrooms' },
            { value: '3', label: '3 bedrooms' },
            { value: '4', label: '4 bedrooms' },
            { value: '5', label: '5+ bedrooms' },
          ]}
        />
      </div>
      <div className="divider my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input id="val-name" label="Your Name" placeholder="Full name" required />
        <Input id="val-email" label="Email" type="email" placeholder="your@email.com" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input id="val-phone" label="Phone" type="tel" placeholder="Your phone number" required />
        <Select
          id="val-time"
          label="Best Time to Contact"
          options={[
            { value: '', label: 'Any time' },
            { value: 'morning', label: 'Morning (9am-12pm)' },
            { value: 'afternoon', label: 'Afternoon (12pm-5pm)' },
            { value: 'evening', label: 'Evening (5pm-7pm)' },
          ]}
        />
      </div>
      <Textarea id="val-info" label="Additional Information" placeholder="Anything else we should know about your property..." />
      <div className="flex items-start gap-3 pt-2">
        <input type="checkbox" id="gdpr-val" required className="mt-1 accent-gold" />
        <label htmlFor="gdpr-val" className="text-tiny text-slate font-inter">
          I consent to Elizabeth Wightwick storing my details to process this valuation request.
        </label>
      </div>
      <Button type="submit" loading={loading} className="w-full md:w-auto">
        Request Valuation
      </Button>
    </form>
  );
}
