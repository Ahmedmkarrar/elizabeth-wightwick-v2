'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const mockInquiries = [
  { id: '1', name: 'James Robertson', email: 'james.robertson@email.com', phone: '07700 900111', type: 'viewing', property: 'Ellerton Road, SW20', date: '2025-01-28', status: 'new' },
  { id: '2', name: 'Sarah Collins', email: 'sarah.collins@email.com', phone: '07700 900222', type: 'info', property: 'Copse Hill, SW20', date: '2025-01-27', status: 'new' },
  { id: '3', name: 'The Patel Family', email: 'patel.family@email.com', phone: '07700 900333', type: 'viewing', property: 'Linkside, KT3', date: '2025-01-26', status: 'new' },
  { id: '4', name: 'Michael Chen', email: 'michael.chen@email.com', phone: '07700 900444', type: 'viewing', property: 'Lincoln Avenue, SW19', date: '2025-01-25', status: 'replied' },
  { id: '5', name: 'Emma Thompson', email: 'emma.t@email.com', phone: '07700 900555', type: 'general', property: null, date: '2025-01-24', status: 'replied' },
  { id: '6', name: 'David Park', email: 'david.park@email.com', phone: '07700 900666', type: 'viewing', property: 'Parkside Avenue, SW19', date: '2025-01-22', status: 'closed' },
  { id: '7', name: 'Catherine Wells', email: 'c.wells@email.com', phone: '07700 900777', type: 'info', property: 'Myrtle Grove, KT3', date: '2025-01-20', status: 'closed' },
];

const statusColors: Record<string, string> = {
  new: 'bg-emerald-500',
  replied: 'bg-amber-500',
  closed: 'bg-slate/30',
};

const statusBadge: Record<string, string> = {
  new: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  replied: 'bg-amber-50 text-amber-700 border-amber-200',
  closed: 'bg-slate/5 text-slate/50 border-slate/15',
};

export default function AdminInquiriesPage() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? mockInquiries : mockInquiries.filter((i) => i.status === filter);
  const newCount = mockInquiries.filter((i) => i.status === 'new').length;

  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-[11px] font-inter uppercase tracking-[0.2em] text-slate/60 mb-1">Manage</p>
          <h1 className="font-cormorant text-[2rem] font-light text-charcoal">Inquiries</h1>
        </div>
        {newCount > 0 && (
          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 text-[11px] font-inter font-medium rounded-sm">
            {newCount} new
          </span>
        )}
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {['all', 'new', 'replied', 'closed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'px-4 py-2 text-[12px] font-inter capitalize transition-all border',
              filter === f
                ? 'bg-charcoal text-white border-charcoal'
                : 'bg-white text-slate border-beige hover:border-charcoal/30'
            )}
          >
            {f} {f !== 'all' && `(${mockInquiries.filter(i => i.status === f).length})`}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-beige/80 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-beige/60">
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Status</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Name</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Contact</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Type</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Property</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Date</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((inquiry) => (
              <tr key={inquiry.id} className="border-b border-beige/30 hover:bg-cream/30 transition-colors">
                <td className="py-3.5 px-5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${statusColors[inquiry.status]}`} />
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-inter font-medium capitalize border rounded-sm ${statusBadge[inquiry.status]}`}>
                      {inquiry.status}
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-5 text-[13px] font-inter text-charcoal font-medium">{inquiry.name}</td>
                <td className="py-3.5 px-5">
                  <p className="text-[12px] font-inter text-slate">{inquiry.email}</p>
                  <p className="text-[11px] font-inter text-slate/50">{inquiry.phone}</p>
                </td>
                <td className="py-3.5 px-5">
                  <span className="text-[12px] font-inter text-slate capitalize bg-beige/50 px-2 py-0.5">{inquiry.type}</span>
                </td>
                <td className="py-3.5 px-5 text-[12px] font-inter text-slate">{inquiry.property || <span className="text-slate/30">General</span>}</td>
                <td className="py-3.5 px-5 text-[12px] font-inter text-slate/60">{inquiry.date}</td>
                <td className="py-3.5 px-5">
                  <button className="text-[11px] font-inter text-brand hover:text-brand-dark transition-colors font-medium uppercase tracking-wider">
                    Reply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
