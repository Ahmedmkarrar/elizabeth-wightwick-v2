'use client';

import { useState } from 'react';
import { Input, Select } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [department, setDepartment] = useState<'sales' | 'lettings'>('sales');

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
        <h3 className="heading-subtitle text-charcoal">You&apos;re Registered</h3>
        <p className="mt-3 text-body text-slate font-inter font-light max-w-md mx-auto">
          We have your requirements and will be in touch as soon as we have a matching property. You will also receive alerts when new properties are listed.
        </p>
      </div>
    );
  }

  const priceOptions = department === 'sales'
    ? [
        { value: '', label: 'Any' },
        { value: '500000', label: '£500,000' },
        { value: '750000', label: '£750,000' },
        { value: '1000000', label: '£1,000,000' },
        { value: '1500000', label: '£1,500,000' },
        { value: '2000000', label: '£2,000,000' },
        { value: '3000000', label: '£3,000,000' },
        { value: '5000000', label: '£5,000,000' },
      ]
    : [
        { value: '', label: 'Any' },
        { value: '1000', label: '£1,000 pcm' },
        { value: '1500', label: '£1,500 pcm' },
        { value: '2000', label: '£2,000 pcm' },
        { value: '3000', label: '£3,000 pcm' },
        { value: '5000', label: '£5,000 pcm' },
        { value: '10000', label: '£10,000 pcm' },
      ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Department Toggle */}
      <div>
        <label className="block text-tiny font-inter font-medium uppercase tracking-widest text-slate mb-3">
          I&apos;m Looking To
        </label>
        <div className="flex border border-taupe/40">
          {(['sales', 'lettings'] as const).map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setDepartment(dept)}
              className={cn(
                'flex-1 py-3 text-small font-inter tracking-wide transition-all duration-400',
                department === dept
                  ? 'bg-charcoal text-white'
                  : 'bg-white text-charcoal hover:bg-cream'
              )}
            >
              {dept === 'sales' ? 'Buy' : 'Rent'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Select
          id="reg-type"
          label="Property Type"
          options={[
            { value: '', label: 'Any type' },
            { value: 'house', label: 'House' },
            { value: 'flat', label: 'Flat / Apartment' },
            { value: 'studio', label: 'Studio' },
          ]}
        />
        <Select
          id="reg-beds"
          label="Minimum Bedrooms"
          options={[
            { value: '', label: 'Any' },
            { value: '1', label: '1+' },
            { value: '2', label: '2+' },
            { value: '3', label: '3+' },
            { value: '4', label: '4+' },
            { value: '5', label: '5+' },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Select id="reg-min-price" label="Minimum Budget" options={priceOptions} />
        <Select id="reg-max-price" label="Maximum Budget" options={priceOptions} />
      </div>

      <Input
        id="reg-locations"
        label="Preferred Locations"
        placeholder="e.g. Wimbledon Village, Wimbledon Common Side"
      />

      <div className="divider my-2" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input id="reg-name" label="Your Name" placeholder="Full name" required />
        <Input id="reg-email" label="Email" type="email" placeholder="your@email.com" required />
      </div>
      <Input id="reg-phone" label="Phone" type="tel" placeholder="Your phone number" />

      <div className="flex items-start gap-3 pt-2">
        <input type="checkbox" id="gdpr-reg" required className="mt-1 accent-brand" />
        <label htmlFor="gdpr-reg" className="text-tiny text-slate font-inter">
          I consent to Elizabeth Wightwick storing my details and contacting me about properties matching my requirements.
        </label>
      </div>
      <Button type="submit" loading={loading} className="w-full md:w-auto">
        Register
      </Button>
    </form>
  );
}
