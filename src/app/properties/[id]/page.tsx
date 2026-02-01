'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { mockProperties } from '@/lib/mock-data';
import { formatPriceFull, getDepartmentLabel } from '@/lib/utils';
import PropertyGallery from '@/components/properties/PropertyGallery';
import PropertyCard from '@/components/properties/PropertyCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  HomeIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState<'viewing' | 'info'>('viewing');

  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="heading-display text-charcoal">Property Not Found</h1>
        <p className="mt-4 text-body text-slate font-inter">
          This property may have been removed or the link is incorrect.
        </p>
        <Link
          href="/properties"
          className="inline-block mt-8 bg-gold text-white px-8 py-3 text-small font-inter hover:bg-gold-dark transition-colors"
        >
          Browse Properties
        </Link>
      </div>
    );
  }

  const address = [property.address_line_1, property.address_line_2].filter(Boolean).join(', ');
  const fullAddress = [address, property.city, property.postcode].join(', ');

  const similar = mockProperties
    .filter((p) => p.id !== property.id && p.department === property.department)
    .slice(0, 3);

  const openEnquiry = (type: 'viewing' | 'info') => {
    setEnquiryType(type);
    setEnquiryOpen(true);
  };

  return (
    <>
      {/* Gallery */}
      <div className="pt-20 lg:pt-24">
        <PropertyGallery images={property.images} address={address} />
      </div>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          {/* Breadcrumbs */}
          <nav className="mb-10 text-tiny font-inter text-slate">
            <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/properties" className="hover:text-charcoal transition-colors">Properties</Link>
            <span className="mx-2">/</span>
            <Link
              href={`/properties/${property.department}`}
              className="hover:text-charcoal transition-colors"
            >
              {getDepartmentLabel(property.department)}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{property.address_line_1}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 min-w-0"
            >
              {/* Title */}
              <h1 className="font-cormorant text-title md:text-[2.5rem] font-light text-charcoal leading-tight">
                {address}
              </h1>
              <div className="flex items-center gap-4 mt-4">
                <p className="font-cormorant text-subtitle text-gold">
                  {formatPriceFull(property.price, property.department, property.price_qualifier)}
                </p>
                {property.status !== 'available' && <Badge status={property.status} />}
              </div>

              <div className="divider my-10" />

              {/* Overview */}
              <div>
                <h2 className="heading-section text-charcoal mb-4">Overview</h2>
                {property.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-body text-slate font-inter font-light leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="divider my-10" />

              {/* Key Features */}
              <div>
                <h2 className="heading-section text-charcoal mb-6">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                      <span className="text-body text-slate font-inter font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="divider my-10" />

              {/* Details */}
              <div>
                <h2 className="heading-section text-charcoal mb-6">Property Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {property.bedrooms > 0 && (
                    <div>
                      <p className="text-tiny font-inter uppercase tracking-widest text-slate/70">Bedrooms</p>
                      <p className="text-body text-charcoal font-inter mt-1">{property.bedrooms}</p>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div>
                      <p className="text-tiny font-inter uppercase tracking-widest text-slate/70">Bathrooms</p>
                      <p className="text-body text-charcoal font-inter mt-1">{property.bathrooms}</p>
                    </div>
                  )}
                  {property.reception_rooms && (
                    <div>
                      <p className="text-tiny font-inter uppercase tracking-widest text-slate/70">Reception Rooms</p>
                      <p className="text-body text-charcoal font-inter mt-1">{property.reception_rooms}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-tiny font-inter uppercase tracking-widest text-slate/70">Type</p>
                    <p className="text-body text-charcoal font-inter mt-1 capitalize">{property.property_type}</p>
                  </div>
                  {property.tenure && (
                    <div>
                      <p className="text-tiny font-inter uppercase tracking-widest text-slate/70">Tenure</p>
                      <p className="text-body text-charcoal font-inter mt-1">{property.tenure}</p>
                    </div>
                  )}
                  {property.epc_rating && (
                    <div>
                      <p className="text-tiny font-inter uppercase tracking-widest text-slate/70">EPC Rating</p>
                      <p className="text-body text-charcoal font-inter mt-1">{property.epc_rating}</p>
                    </div>
                  )}
                  {property.council_tax_band && (
                    <div>
                      <p className="text-tiny font-inter uppercase tracking-widest text-slate/70">Council Tax</p>
                      <p className="text-body text-charcoal font-inter mt-1">Band {property.council_tax_band}</p>
                    </div>
                  )}
                  {property.lease_length && (
                    <div>
                      <p className="text-tiny font-inter uppercase tracking-widest text-slate/70">Lease Length</p>
                      <p className="text-body text-charcoal font-inter mt-1">{property.lease_length} years</p>
                    </div>
                  )}
                  {property.service_charge && (
                    <div>
                      <p className="text-tiny font-inter uppercase tracking-widest text-slate/70">Service Charge</p>
                      <p className="text-body text-charcoal font-inter mt-1">
                        £{property.service_charge.toLocaleString()} p.a.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="divider my-10" />

              {/* Location */}
              <div>
                <h2 className="heading-section text-charcoal mb-4">Location</h2>
                <p className="text-body text-slate font-inter font-light">{fullAddress}</p>
                <div className="mt-6 bg-beige h-[300px] flex items-center justify-center text-small text-slate font-inter">
                  Map integration available with Google Maps API key
                </div>
              </div>
            </motion.div>

            {/* Right Column - Sticky Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[360px] flex-shrink-0"
            >
              <div className="sticky top-28 bg-white p-8 space-y-6">
                <div>
                  <p className="font-cormorant text-subtitle text-charcoal">
                    {formatPriceFull(property.price, property.department, property.price_qualifier)}
                  </p>
                  <p className="text-small text-slate font-inter mt-1">
                    {getDepartmentLabel(property.department)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-tiny font-inter text-slate">
                  {property.bedrooms > 0 && <span>{property.bedrooms} bed</span>}
                  {property.bathrooms > 0 && (
                    <>
                      <span className="text-taupe">·</span>
                      <span>{property.bathrooms} bath</span>
                    </>
                  )}
                  {property.reception_rooms && (
                    <>
                      <span className="text-taupe">·</span>
                      <span>{property.reception_rooms} recep</span>
                    </>
                  )}
                </div>

                <div className="divider" />

                <Button
                  onClick={() => openEnquiry('viewing')}
                  className="w-full"
                >
                  Book Viewing
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => openEnquiry('info')}
                  className="w-full"
                >
                  Request Information
                </Button>

                <div className="divider" />

                <div className="space-y-3">
                  <p className="font-cormorant text-section text-charcoal">Elizabeth Wightwick</p>
                  <div className="flex items-center gap-3 text-small text-slate font-inter">
                    <PhoneIcon className="w-4 h-4" />
                    <a href="tel:02035973484" className="hover:text-charcoal transition-colors">
                      0203 597 3484
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-small text-slate font-inter">
                    <EnvelopeIcon className="w-4 h-4" />
                    <a
                      href="mailto:info@elizabeth-wightwick.co.uk"
                      className="hover:text-charcoal transition-colors"
                    >
                      info@elizabeth-wightwick.co.uk
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-small text-slate font-inter">
                    <HomeIcon className="w-4 h-4" />
                    <span>60 High Street, Wimbledon Village</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      {similar.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <h2 className="heading-display text-charcoal mb-12">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry Modal */}
      <Modal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        title={enquiryType === 'viewing' ? 'Book a Viewing' : 'Request Information'}
      >
        <EnquiryForm
          propertyAddress={address}
          propertyId={property.id}
          type={enquiryType}
        />
      </Modal>
    </>
  );
}
