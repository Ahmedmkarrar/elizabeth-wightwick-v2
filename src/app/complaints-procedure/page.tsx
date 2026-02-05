import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complaints Procedure',
  description: 'Elizabeth Wightwick complaints procedure. How to raise a complaint and our process for resolving it.',
};

export default function ComplaintsProcedurePage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container-narrow">
          <h1 className="heading-display text-charcoal">Complaints Procedure</h1>
          <p className="mt-3 text-body text-slate font-inter font-light max-w-2xl">
            We are committed to providing an excellent service. If something goes wrong, we want to know about it so we can put it right.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="space-y-10">
            <div>
              <h2 className="heading-section text-charcoal mb-4">Our Commitment</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                Elizabeth Wightwick is a member of The Property Ombudsman scheme and adheres to the TPO Code of Practice. We take all complaints seriously and aim to resolve them quickly and fairly.
              </p>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">Step 1: Raise Your Concern</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                In the first instance, please raise your concern with the member of staff you have been dealing with. Many issues can be resolved informally and quickly at this stage. If you prefer to put your complaint in writing, please send it to:
              </p>
              <div className="mt-4 p-6 bg-beige/30 text-body text-slate font-inter font-light">
                <p>Elizabeth Wightwick Ltd</p>
                <p>60 High Street, Wimbledon Village</p>
                <p>London SW19 5EE</p>
                <p className="mt-2">Email: info@elizabeth-wightwick.co.uk</p>
              </div>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">Step 2: Investigation</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                Upon receipt of your written complaint, we will acknowledge it within three working days and provide you with a copy of this complaints procedure. We will investigate your complaint thoroughly, which may involve reviewing correspondence, speaking with relevant staff, and gathering all pertinent information.
              </p>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">Step 3: Response</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                We aim to provide a formal written response within 15 working days. If this is not possible due to the complexity of the complaint, we will write to you explaining the reason for the delay and provide an expected response date. Our response will include a summary of the complaint, the results of our investigation, and any proposed resolution.
              </p>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">Step 4: If You Remain Dissatisfied</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                If you are not satisfied with our response, you may request a final review by a senior member of the firm. This review will be completed within 15 working days.
              </p>
            </div>

            <div>
              <h2 className="heading-section text-charcoal mb-4">Step 5: The Property Ombudsman</h2>
              <p className="text-body text-slate font-inter font-light leading-relaxed">
                If after completing our internal complaints procedure you remain dissatisfied, you may refer the matter to The Property Ombudsman (TPO). You must refer your complaint within 12 months of our final response.
              </p>
              <div className="mt-4 p-6 bg-beige/30 text-body text-slate font-inter font-light">
                <p className="font-medium text-charcoal">The Property Ombudsman</p>
                <p>Milford House, 43-55 Milford Street</p>
                <p>Salisbury, Wiltshire SP1 2BP</p>
                <p className="mt-2">Phone: 01722 333 306</p>
                <p>Email: admin@tpos.co.uk</p>
                <p>Website: www.tpos.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
