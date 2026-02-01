'use client';

import { useState } from 'react';
import { Input, Textarea } from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface EnquiryFormProps {
  propertyAddress: string;
  propertyId: string;
  type?: 'viewing' | 'info';
}

export default function EnquiryForm({ propertyAddress, propertyId, type = 'viewing' }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <h3 className="heading-section text-charcoal">Thank You</h3>
        <p className="mt-3 text-body text-slate font-inter font-light">
          We&apos;ve received your enquiry about {propertyAddress} and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-small text-slate font-inter">
        {type === 'viewing' ? 'Request a viewing of' : 'Enquire about'}{' '}
        <span className="text-charcoal font-medium">{propertyAddress}</span>
      </p>
      <input type="hidden" name="property_id" value={propertyId} />
      <input type="hidden" name="type" value={type} />
      <Input id="name" label="Name" placeholder="Your full name" required />
      <Input id="email" label="Email" type="email" placeholder="your@email.com" required />
      <Input id="phone" label="Phone" type="tel" placeholder="Your phone number" />
      {type === 'viewing' && (
        <Input id="preferred_time" label="Preferred Time" placeholder="e.g. Weekday mornings" />
      )}
      <Textarea id="message" label="Message" placeholder="Any additional details..." />
      <div className="flex items-start gap-3 pt-2">
        <input type="checkbox" id="gdpr" required className="mt-1 accent-gold" />
        <label htmlFor="gdpr" className="text-tiny text-slate font-inter">
          I consent to Elizabeth Wightwick storing my details to respond to this enquiry.
        </label>
      </div>
      <Button type="submit" loading={loading} className="w-full">
        {type === 'viewing' ? 'Request Viewing' : 'Send Enquiry'}
      </Button>
    </form>
  );
}
