'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mockProperties } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export default function AdminPropertiesPage() {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = mockProperties.filter((p) => {
    if (filter !== 'all' && p.department !== filter) return false;
    if (search && !p.address_line_1.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="heading-title text-charcoal">Properties</h1>
          <p className="text-small text-slate font-inter mt-1">{filtered.length} properties</p>
        </div>
        <Link
          href="/admin/properties/new"
          className="bg-gold text-white px-6 py-3 text-small font-inter tracking-wide hover:bg-gold-dark transition-colors"
        >
          + Add Property
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex border border-taupe/40">
          {['all', 'sales', 'lettings'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'px-4 py-2 text-small font-inter capitalize transition-all',
                filter === f ? 'bg-charcoal text-white' : 'bg-white text-charcoal hover:bg-cream'
              )}
            >
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Search by address..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white border border-taupe/40 px-4 py-2 text-small font-inter text-charcoal focus:outline-none focus:border-charcoal flex-1"
        />
      </div>

      {/* Table */}
      <div className="bg-white overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-taupe/20">
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Image</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Address</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Department</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Price</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Status</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Featured</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((property) => (
              <tr key={property.id} className="border-b border-taupe/10 hover:bg-cream/50 transition-colors">
                <td className="py-3 px-4">
                  <div className="relative w-16 h-12 overflow-hidden bg-beige">
                    <Image src={property.main_image} alt="" fill className="object-cover" sizes="64px" />
                  </div>
                </td>
                <td className="py-3 px-4 text-small font-inter text-charcoal">
                  {property.address_line_1}
                  <span className="block text-tiny text-slate">{property.postcode}</span>
                </td>
                <td className="py-3 px-4 text-small font-inter text-slate capitalize">{property.department}</td>
                <td className="py-3 px-4 text-small font-inter text-charcoal">
                  £{property.price.toLocaleString()}{property.rent_period ? ' pcm' : ''}
                </td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-1 text-[10px] font-inter font-medium uppercase tracking-wider ${
                    property.status === 'available' ? 'bg-forest/10 text-forest' :
                    property.status === 'let_agreed' ? 'bg-gold/10 text-gold-dark' :
                    property.status === 'under_offer' ? 'bg-gold/10 text-gold-dark' :
                    'bg-slate/10 text-slate'
                  }`}>
                    {property.status.replace('_', ' ')}
                  </span>
                </td>
                <td className="py-3 px-4 text-small font-inter">
                  {property.featured ? (
                    <span className="text-gold">Yes</span>
                  ) : (
                    <span className="text-slate/40">No</span>
                  )}
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-3">
                    <Link
                      href={`/admin/properties/${property.id}/edit`}
                      className="text-tiny font-inter text-charcoal hover:text-gold transition-colors"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/properties/${property.id}`}
                      className="text-tiny font-inter text-slate hover:text-charcoal transition-colors"
                      target="_blank"
                    >
                      View
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
