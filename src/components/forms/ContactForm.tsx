'use client';

import { useState } from 'react';
import { Input, Textarea, Select } from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ContactForm() {
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
        <p className="mt-3 text-body text-slate font-inter font-light">
          We have received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input id="name" label="Name" placeholder="Your full name" required />
        <Input id="email" label="Email" type="email" placeholder="your@email.com" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input id="phone" label="Phone" type="tel" placeholder="Your phone number" />
        <Select
          id="subject"
          label="Subject"
          options={[
            { value: '', label: 'Select a subject' },
            { value: 'sales', label: 'Selling a Property' },
            { value: 'lettings', label: 'Letting a Property' },
            { value: 'buying', label: 'Buying a Property' },
            { value: 'renting', label: 'Renting a Property' },
            { value: 'management', label: 'Property Management' },
            { value: 'valuation', label: 'Valuation Request' },
            { value: 'general', label: 'General Enquiry' },
          ]}
        />
      </div>
      <Textarea id="message" label="Message" placeholder="How can we help?" required />
      <div className="flex items-start gap-3 pt-2">
        <input type="checkbox" id="gdpr-contact" required className="mt-1 accent-gold" />
        <label htmlFor="gdpr-contact" className="text-tiny text-slate font-inter">
          I consent to Elizabeth Wightwick storing my details to respond to this enquiry.
          Your data will be handled in accordance with our privacy policy.
        </label>
      </div>
      <Button type="submit" loading={loading} className="w-full md:w-auto">
        Send Message
      </Button>
    </form>
  );
}
