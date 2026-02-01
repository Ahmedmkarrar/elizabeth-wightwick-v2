'use client';

import Link from 'next/link';
import { mockProperties } from '@/lib/mock-data';

const stats = [
  { label: 'Total Properties', value: mockProperties.length, color: 'bg-charcoal' },
  { label: 'For Sale', value: mockProperties.filter((p) => p.department === 'sales').length, color: 'bg-forest' },
  { label: 'To Let', value: mockProperties.filter((p) => p.department === 'lettings').length, color: 'bg-gold' },
  { label: 'New Inquiries', value: 7, color: 'bg-slate' },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="heading-title text-charcoal">Dashboard</h1>
        <p className="text-small text-slate font-inter mt-1">Overview of your property portfolio and activity</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6">
            <p className="text-tiny font-inter font-medium uppercase tracking-widest text-slate">{stat.label}</p>
            <p className="font-cormorant text-[2.5rem] font-light text-charcoal mt-2">{stat.value}</p>
            <div className={`w-12 h-1 ${stat.color} mt-3`} />
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-12">
        <h2 className="heading-section text-charcoal mb-6">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/admin/properties/new"
            className="bg-gold text-white px-6 py-3 text-small font-inter tracking-wide hover:bg-gold-dark transition-colors"
          >
            + Add Property
          </Link>
          <Link
            href="/admin/inquiries"
            className="border border-charcoal text-charcoal px-6 py-3 text-small font-inter tracking-wide hover:bg-charcoal hover:text-white transition-colors"
          >
            View Inquiries
          </Link>
          <Link
            href="/admin/valuations"
            className="border border-charcoal text-charcoal px-6 py-3 text-small font-inter tracking-wide hover:bg-charcoal hover:text-white transition-colors"
          >
            View Valuations
          </Link>
        </div>
      </div>

      {/* Recent Properties */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="heading-section text-charcoal">Recent Properties</h2>
          <Link
            href="/admin/properties"
            className="text-small font-inter text-gold hover:text-gold-dark transition-colors"
          >
            View All
          </Link>
        </div>
        <div className="bg-white overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-taupe/20">
                <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Address</th>
                <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Type</th>
                <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Price</th>
                <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockProperties.slice(0, 5).map((property) => (
                <tr key={property.id} className="border-b border-taupe/10 hover:bg-cream/50 transition-colors">
                  <td className="py-3 px-4 text-small font-inter text-charcoal">
                    <Link href={`/admin/properties/${property.id}/edit`} className="hover:text-gold transition-colors">
                      {property.address_line_1}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-small font-inter text-slate capitalize">{property.department}</td>
                  <td className="py-3 px-4 text-small font-inter text-charcoal">
                    £{property.price.toLocaleString()}
                    {property.rent_period ? ' pcm' : ''}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-1 text-[10px] font-inter font-medium uppercase tracking-wider ${
                      property.status === 'available' ? 'bg-forest/10 text-forest' :
                      property.status === 'let_agreed' ? 'bg-gold/10 text-gold-dark' :
                      'bg-slate/10 text-slate'
                    }`}>
                      {property.status.replace('_', ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
