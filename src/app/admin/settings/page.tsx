'use client';

import { Input } from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="heading-title text-charcoal">Settings</h1>
        <p className="text-small text-slate font-inter mt-1">Manage your account and website settings</p>
      </div>

      <div className="max-w-2xl space-y-8">
        <div className="bg-white p-8">
          <h2 className="heading-section text-charcoal mb-6">Contact Details</h2>
          <div className="space-y-5">
            <Input id="phone" label="Phone Number" defaultValue="0203 597 3484" />
            <Input id="email" label="Email Address" defaultValue="info@elizabeth-wightwick.co.uk" />
            <Input id="address" label="Office Address" defaultValue="60 High Street, Wimbledon Village, London, SW19 5EE" />
          </div>
        </div>

        <div className="bg-white p-8">
          <h2 className="heading-section text-charcoal mb-6">Account</h2>
          <div className="space-y-5">
            <Input id="admin-email" label="Admin Email" defaultValue="elizabeth@elizabeth-wightwick.co.uk" />
            <Input id="admin-password" label="New Password" type="password" placeholder="Leave blank to keep current" />
          </div>
        </div>

        <div className="bg-white p-8">
          <h2 className="heading-section text-charcoal mb-6">Integrations</h2>
          <div className="space-y-5">
            <Input id="supabase-url" label="Supabase URL" placeholder="https://your-project.supabase.co" />
            <Input id="supabase-key" label="Supabase Anon Key" placeholder="eyJ..." />
            <Input id="google-maps" label="Google Maps API Key" placeholder="AIza..." />
          </div>
        </div>

        <Button>Save Settings</Button>
      </div>
    </div>
  );
}
