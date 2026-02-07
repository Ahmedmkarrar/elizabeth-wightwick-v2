'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <div className="mb-8">
        <p className="text-[11px] font-inter uppercase tracking-[0.2em] text-slate/60 mb-1">Configuration</p>
        <h1 className="font-cormorant text-[2rem] font-light text-charcoal">Settings</h1>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Contact Details */}
        <div className="bg-white border border-beige/80 p-7">
          <h2 className="font-cormorant text-[1.25rem] font-normal text-charcoal mb-5">Contact Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-inter font-medium uppercase tracking-[0.15em] text-slate/60 mb-1.5">Phone Number</label>
              <input defaultValue="0203 597 3484" className="w-full border border-beige px-4 py-2.5 text-[13px] font-inter text-charcoal focus:outline-none focus:border-brand/50 transition-colors" />
            </div>
            <div>
              <label className="block text-[11px] font-inter font-medium uppercase tracking-[0.15em] text-slate/60 mb-1.5">Email Address</label>
              <input defaultValue="info@elizabeth-wightwick.co.uk" className="w-full border border-beige px-4 py-2.5 text-[13px] font-inter text-charcoal focus:outline-none focus:border-brand/50 transition-colors" />
            </div>
            <div>
              <label className="block text-[11px] font-inter font-medium uppercase tracking-[0.15em] text-slate/60 mb-1.5">Office Address</label>
              <input defaultValue="60 High Street, Wimbledon Village, London, SW19 5EE" className="w-full border border-beige px-4 py-2.5 text-[13px] font-inter text-charcoal focus:outline-none focus:border-brand/50 transition-colors" />
            </div>
          </div>
        </div>

        {/* Account */}
        <div className="bg-white border border-beige/80 p-7">
          <h2 className="font-cormorant text-[1.25rem] font-normal text-charcoal mb-5">Account</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-inter font-medium uppercase tracking-[0.15em] text-slate/60 mb-1.5">Admin Email</label>
              <input defaultValue="info@elizabeth-wightwick.co.uk" className="w-full border border-beige px-4 py-2.5 text-[13px] font-inter text-charcoal focus:outline-none focus:border-brand/50 transition-colors" />
            </div>
            <div>
              <label className="block text-[11px] font-inter font-medium uppercase tracking-[0.15em] text-slate/60 mb-1.5">New Password</label>
              <input type="password" placeholder="Leave blank to keep current" className="w-full border border-beige px-4 py-2.5 text-[13px] font-inter text-charcoal placeholder:text-slate/30 focus:outline-none focus:border-brand/50 transition-colors" />
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="bg-white border border-beige/80 p-7">
          <h2 className="font-cormorant text-[1.25rem] font-normal text-charcoal mb-1">Integrations</h2>
          <p className="text-[12px] font-inter text-slate/50 mb-5">Connect external services to your website</p>
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-inter font-medium uppercase tracking-[0.15em] text-slate/60 mb-1.5">Supabase URL</label>
              <input placeholder="https://your-project.supabase.co" className="w-full border border-beige px-4 py-2.5 text-[13px] font-inter text-charcoal placeholder:text-slate/30 focus:outline-none focus:border-brand/50 transition-colors font-mono text-[12px]" />
            </div>
            <div>
              <label className="block text-[11px] font-inter font-medium uppercase tracking-[0.15em] text-slate/60 mb-1.5">Supabase Anon Key</label>
              <input placeholder="eyJ..." className="w-full border border-beige px-4 py-2.5 text-[13px] font-inter text-charcoal placeholder:text-slate/30 focus:outline-none focus:border-brand/50 transition-colors font-mono text-[12px]" />
            </div>
            <div>
              <label className="block text-[11px] font-inter font-medium uppercase tracking-[0.15em] text-slate/60 mb-1.5">Google Maps API Key</label>
              <input placeholder="AIza..." className="w-full border border-beige px-4 py-2.5 text-[13px] font-inter text-charcoal placeholder:text-slate/30 focus:outline-none focus:border-brand/50 transition-colors font-mono text-[12px]" />
            </div>
          </div>
        </div>

        {/* Save */}
        <div className="flex items-center gap-4">
          <Button onClick={handleSave}>Save Settings</Button>
          {saved && (
            <span className="text-[13px] font-inter text-emerald-600 animate-pulse">Settings saved successfully</span>
          )}
        </div>
      </div>
    </div>
  );
}
