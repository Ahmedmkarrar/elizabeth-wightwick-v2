'use client';

import Link from 'next/link';
import { mockProperties } from '@/lib/mock-data';
import {
  BuildingOfficeIcon,
  CurrencyPoundIcon,
  HomeModernIcon,
  ChatBubbleLeftEllipsisIcon,
  ArrowTrendingUpIcon,
  EyeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const salesCount = mockProperties.filter((p) => p.department === 'sales').length;
const lettingsCount = mockProperties.filter((p) => p.department === 'lettings').length;


const stats = [
  { label: 'Total Properties', value: mockProperties.length, icon: BuildingOfficeIcon, change: '+3 this month', changeUp: true },
  { label: 'For Sale', value: salesCount, icon: CurrencyPoundIcon, change: `${mockProperties.filter(p => p.department === 'sales' && p.status === 'available').length} available`, changeUp: true },
  { label: 'To Let', value: lettingsCount, icon: HomeModernIcon, change: `${mockProperties.filter(p => p.department === 'lettings' && p.status === 'available').length} available`, changeUp: true },
  { label: 'New Inquiries', value: 7, icon: ChatBubbleLeftEllipsisIcon, change: '3 unread', changeUp: false },
];

const recentActivity = [
  { action: 'New viewing request', detail: 'Ellerton Road, SW20', time: '2 hours ago', icon: EyeIcon },
  { action: 'Property listed', detail: 'Myrtle Grove, KT3', time: '5 hours ago', icon: BuildingOfficeIcon },
  { action: 'Valuation booked', detail: '14 Marryat Road, SW19', time: '1 day ago', icon: ClockIcon },
  { action: 'Inquiry replied', detail: 'Copse Hill, SW20', time: '1 day ago', icon: ChatBubbleLeftEllipsisIcon },
  { action: 'Offer accepted', detail: 'Poplar Grove, KT3', time: '2 days ago', icon: ArrowTrendingUpIcon },
];

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <p className="text-[11px] font-inter uppercase tracking-[0.2em] text-slate/60 mb-1">Welcome back</p>
        <h1 className="font-cormorant text-[2rem] font-light text-charcoal">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 border border-beige/80 hover:border-brand/20 transition-colors group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-brand/8 flex items-center justify-center rounded-sm">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <span className="text-[11px] font-inter text-slate/50">{stat.change}</span>
              </div>
              <p className="font-cormorant text-[2.5rem] font-light text-charcoal leading-none">{stat.value}</p>
              <p className="text-[11px] font-inter uppercase tracking-[0.15em] text-slate/60 mt-2">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Properties - 2 columns */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-beige/80">
            <div className="flex items-center justify-between p-5 border-b border-beige/60">
              <h2 className="font-cormorant text-[1.25rem] font-normal text-charcoal">Recent Properties</h2>
              <Link href="/admin/properties" className="text-[11px] font-inter uppercase tracking-[0.15em] text-brand hover:text-brand-dark transition-colors">
                View All
              </Link>
            </div>
            <div className="divide-y divide-beige/40">
              {mockProperties.slice(0, 6).map((property) => (
                <Link
                  key={property.id}
                  href={`/admin/properties/${property.id}/edit`}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-cream/40 transition-colors group"
                >
                  <div className="w-12 h-9 bg-beige rounded-sm overflow-hidden relative flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={property.main_image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-inter text-charcoal font-medium truncate group-hover:text-brand transition-colors">
                      {property.address_line_1}
                    </p>
                    <p className="text-[11px] font-inter text-slate/50">{property.city}, {property.postcode}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[13px] font-inter text-charcoal">
                      £{property.price.toLocaleString()}{property.rent_period ? ' pcm' : ''}
                    </p>
                    <span className={`text-[10px] font-inter uppercase tracking-wider ${
                      property.status === 'available' ? 'text-emerald-600' :
                      property.status === 'under_offer' ? 'text-amber-600' :
                      property.status === 'let_agreed' ? 'text-blue-600' :
                      'text-slate/50'
                    }`}>
                      {property.status.replace('_', ' ')}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed - 1 column */}
        <div>
          <div className="bg-white border border-beige/80">
            <div className="p-5 border-b border-beige/60">
              <h2 className="font-cormorant text-[1.25rem] font-normal text-charcoal">Recent Activity</h2>
            </div>
            <div className="divide-y divide-beige/30">
              {recentActivity.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 px-5 py-3.5">
                    <div className="w-7 h-7 bg-brand/8 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-brand" />
                    </div>
                    <div>
                      <p className="text-[13px] font-inter text-charcoal">{item.action}</p>
                      <p className="text-[12px] font-inter text-slate/50">{item.detail}</p>
                      <p className="text-[11px] font-inter text-slate/35 mt-0.5">{item.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-5 space-y-2.5">
            <Link
              href="/admin/properties/new"
              className="flex items-center justify-center gap-2 bg-brand text-white px-5 py-3 text-[12px] font-inter font-medium tracking-[0.1em] uppercase hover:bg-brand-dark transition-colors w-full"
            >
              + Add Property
            </Link>
            <Link
              href="/admin/inquiries"
              className="flex items-center justify-center gap-2 border border-charcoal/20 text-charcoal px-5 py-3 text-[12px] font-inter font-medium tracking-[0.1em] uppercase hover:bg-charcoal hover:text-white transition-colors w-full"
            >
              View Inquiries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
