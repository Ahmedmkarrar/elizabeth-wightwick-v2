'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { formatPriceFull, getDepartmentLabel } from '@/lib/utils';
import PropertyGallery from '@/components/properties/PropertyGallery';
import PropertyCard from '@/components/properties/PropertyCard';
import PropertySidebar from '@/components/properties/PropertySidebar';
import Badge from '@/components/ui/Badge';
import Modal from '@/components/ui/Modal';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { motion } from 'framer-motion';
import type { Property } from '@/types';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function PropertyDetailClient({ params }: { params: { id: string } }) {
  const { id } = params;
  const [property, setProperty] = useState<Property | null>(null);
  const [similar, setSimilar] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState<'viewing' | 'info'>('viewing');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(`/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) { setNotFound(true); return null; }
        return res.json();
      })
      .then((data: Property | null) => {
        if (!data) return;
        setProperty(data);
        fetch(`/api/properties?department=${data.department}&status=available&limit=7`)
          .then((r) => r.json())
          .then((d) => setSimilar((d.properties || []).filter((p: Property) => p.id !== data.id).slice(0, 3)));
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  if (loading) return <div className="h-screen bg-warm-white animate-pulse" />;
  if (notFound || !property) return <div className="pt-40 text-center">Property not found</div>;

  const address = [property.address_line_1, property.address_line_2].filter(Boolean).join(', ');
  const fullAddress = [address, property.city, property.postcode].join(', ');

  return (
    <>
      <div className="pt-20 lg:pt-24">
        <PropertyGallery images={property.images} address={address} />
      </div>

      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Main Content */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex-1 min-w-0">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-tiny font-inter font-medium uppercase tracking-widest text-brand">{getDepartmentLabel(property.department)}</span>
                  {property.status !== 'available' && <Badge status={property.status} createdAt={property.created_at} />}
                </div>
                <h1 className="font-cormorant text-[2rem] md:text-[2.75rem] font-light text-charcoal leading-tight">{address}</h1>
                <p className="text-body text-slate font-inter font-light mt-2">{property.city}, {property.postcode}</p>
              </div>

              {/* Description & Features */}
              <div className="space-y-12">
                <div className="flex flex-wrap gap-8 py-6 border-y border-beige">
                  {property.bedrooms > 0 && <div><p className="font-cormorant text-[2rem] text-charcoal">{property.bedrooms}</p><p className="text-tiny font-inter uppercase tracking-widest text-slate mt-1">Bedrooms</p></div>}
                  {property.bathrooms > 0 && <div><p className="font-cormorant text-[2rem] text-charcoal">{property.bathrooms}</p><p className="text-tiny font-inter uppercase tracking-widest text-slate mt-1">Bathrooms</p></div>}
                  <div><p className="font-cormorant text-[2rem] text-charcoal capitalize">{property.property_type}</p><p className="text-tiny font-inter uppercase tracking-widest text-slate mt-1">Type</p></div>
                </div>

                <div>
                  <h2 className="heading-section text-charcoal mb-6">About This Property</h2>
                  {property.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-body text-slate font-inter font-light leading-[1.8] mb-5">{paragraph}</p>
                  ))}
                </div>

                {property.features.length > 0 && (
                  <div>
                    <h2 className="heading-section text-charcoal mb-6">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                      {property.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckIcon className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
                          <span className="text-body text-slate font-inter font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full lg:w-[380px]">
              <PropertySidebar
                property={property}
                onEnquiry={(type) => { setEnquiryType(type); setEnquiryOpen(true); }}
                onShare={handleShare}
                copied={copied}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Similar Grid */}
      {similar.length > 0 && (
        <section className="section-padding bg-warm-white/30 border-t border-beige">
          <div className="container-wide">
            <h2 className="heading-display text-charcoal mb-12 text-center">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {similar.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          </div>
        </section>
      )}

      <Modal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} title={enquiryType === 'viewing' ? 'Book a Viewing' : 'Request Information'}>
        <EnquiryForm propertyAddress={address} propertyId={property.id} type={enquiryType} />
      </Modal>
    </>
  );
}
