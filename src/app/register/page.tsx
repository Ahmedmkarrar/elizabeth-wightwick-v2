import type { Metadata } from 'next';
import RegisterForm from '@/components/forms/RegisterForm';

export const metadata: Metadata = {
  title: 'Register Your Property Search',
  description: 'Register your requirements with Elizabeth Wightwick and be the first to know about new properties in Wimbledon and South West London.',
};

export default function RegisterPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-content">
          <h1 className="heading-display text-charcoal">Register Your Requirements</h1>
          <p className="mt-4 text-body text-slate font-inter font-light max-w-2xl">
            Tell us what you are looking for and we will match you with properties as they become available &mdash; often before they reach the open market.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-10">
                <RegisterForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="heading-title text-charcoal mb-8">Why Register</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="heading-section text-charcoal mb-2">First to Know</h3>
                  <p className="text-small text-slate font-inter font-light leading-relaxed">
                    Be the first to hear about properties that match your requirements, including pre-market opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="heading-section text-charcoal mb-2">Tailored Matches</h3>
                  <p className="text-small text-slate font-inter font-light leading-relaxed">
                    We only contact you about properties that genuinely match what you are looking for. No spam, no irrelevant alerts.
                  </p>
                </div>
                <div>
                  <h3 className="heading-section text-charcoal mb-2">Expert Guidance</h3>
                  <p className="text-small text-slate font-inter font-light leading-relaxed">
                    Benefit from our honest, informed guidance on properties, pricing, and the local area throughout your search.
                  </p>
                </div>
                <div>
                  <h3 className="heading-section text-charcoal mb-2">Off-Market Access</h3>
                  <p className="text-small text-slate font-inter font-light leading-relaxed">
                    Gain access to properties that are not publicly advertised, giving you an advantage in a competitive market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
