import type { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Elizabeth Wightwick estate agents in Wimbledon Village. Call 0203 597 3484 or visit us at 60 High Street, Wimbledon Village, SW19 5EE.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-content">
          <h1 className="heading-display text-charcoal">Contact Us</h1>
          <p className="mt-4 text-body text-slate font-inter font-light max-w-2xl">
            We would be delighted to hear from you. Get in touch by phone, email, or visit our office on Wimbledon Village High Street.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="heading-title text-charcoal mb-8">Send a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="heading-title text-charcoal mb-8">Our Details</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-body font-inter text-charcoal font-medium">Office</p>
                    <p className="text-small text-slate font-inter font-light mt-1">
                      60 High Street<br />
                      Wimbledon Village<br />
                      London, SW19 5EE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-body font-inter text-charcoal font-medium">Phone</p>
                    <a href="tel:02035973484" className="text-small text-slate font-inter font-light mt-1 block hover:text-charcoal transition-colors">
                      0203 597 3484
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-body font-inter text-charcoal font-medium">Email</p>
                    <a href="mailto:info@elizabeth-wightwick.co.uk" className="text-small text-slate font-inter font-light mt-1 block hover:text-charcoal transition-colors">
                      info@elizabeth-wightwick.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ClockIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-body font-inter text-charcoal font-medium">Opening Hours</p>
                    <div className="text-small text-slate font-inter font-light mt-1 space-y-1">
                      <p>Monday &ndash; Friday: 9am &ndash; 6pm</p>
                      <p>Saturday: 10am &ndash; 4pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 bg-beige h-[250px] flex items-center justify-center text-small text-slate font-inter">
                Google Maps integration available
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
