import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Elizabeth Wightwick privacy policy. How we collect, use, and protect your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container-narrow">
          <h1 className="heading-display text-charcoal">Privacy Policy</h1>
          <p className="mt-3 text-small text-slate font-inter">Last updated: January 2025</p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="prose-ew space-y-10">
            <div>
              <h2 className="heading-section text-charcoal mb-4">1. Introduction</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                Elizabeth Wightwick Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy and security of your personal information. This privacy policy describes how we collect, use, and safeguard your data when you use our website, services, or interact with us.
              </p>
              <p className="text-body text-slate font-inter font-light leading-relaxed mt-3">
                Elizabeth Wightwick Ltd is the data controller and is registered with the Information Commissioner&apos;s Office. Company No. 10669465. Registered address: 60 High Street, Wimbledon Village, London SW19 5EE.
              </p>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">2. Information We Collect</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                We may collect the following information:
              </p>
              <ul className="mt-3 space-y-2 text-body text-slate font-inter font-light">
                <li className="pl-4 border-l-2 border-brand/20">Name, email address, telephone number, and postal address</li>
                <li className="pl-4 border-l-2 border-brand/20">Property requirements and preferences</li>
                <li className="pl-4 border-l-2 border-brand/20">Financial information relevant to property transactions</li>
                <li className="pl-4 border-l-2 border-brand/20">Website usage data through cookies and analytics</li>
                <li className="pl-4 border-l-2 border-brand/20">Communication records including emails and call notes</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">3. How We Use Your Information</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                We use your personal data to:
              </p>
              <ul className="mt-3 space-y-2 text-body text-slate font-inter font-light">
                <li className="pl-4 border-l-2 border-brand/20">Provide our estate agency, lettings, and property management services</li>
                <li className="pl-4 border-l-2 border-brand/20">Match you with suitable properties based on your requirements</li>
                <li className="pl-4 border-l-2 border-brand/20">Arrange and conduct property viewings</li>
                <li className="pl-4 border-l-2 border-brand/20">Process applications, references, and contracts</li>
                <li className="pl-4 border-l-2 border-brand/20">Send property alerts and marketing communications (with your consent)</li>
                <li className="pl-4 border-l-2 border-brand/20">Comply with legal and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">4. Legal Basis for Processing</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                We process your personal data on the following legal bases: consent (for marketing communications), contractual necessity (to provide our services), legal obligation (anti-money laundering and regulatory requirements), and legitimate interest (to improve our services and communicate with you about relevant properties).
              </p>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">5. Data Sharing</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                We may share your data with: property portals (Rightmove, Zoopla, OnTheMarket) for listing purposes; referencing agencies; solicitors and conveyancers involved in transactions; our professional advisors; and regulatory bodies where required by law. We do not sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">6. Data Retention</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. Property transaction records are retained for six years after completion.
              </p>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">7. Your Rights</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                Under data protection law, you have the right to: access your personal data; request correction of inaccurate data; request deletion of your data; object to processing; request restriction of processing; data portability; and withdraw consent at any time. To exercise these rights, please contact us at info@elizabeth-wightwick.co.uk.
              </p>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">8. Cookies</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                Our website uses cookies to improve your browsing experience and to analyse website traffic. You can control cookie preferences through your browser settings. Essential cookies are required for the website to function correctly.
              </p>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">9. Contact</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-beige/30 text-body text-slate font-inter font-light">
                <p>Elizabeth Wightwick Ltd</p>
                <p>60 High Street, Wimbledon Village</p>
                <p>London SW19 5EE</p>
                <p className="mt-2">Email: info@elizabeth-wightwick.co.uk</p>
                <p>Phone: 0203 597 3484</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
