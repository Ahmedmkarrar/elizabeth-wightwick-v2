'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-5">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="font-cormorant text-title font-light text-charcoal">Elizabeth Wightwick</h1>
          <p className="text-small text-slate font-inter mt-2">Admin Login</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-8 space-y-5">
          <Input id="login-email" label="Email" type="email" placeholder="your@email.com" required />
          <Input id="login-password" label="Password" type="password" placeholder="Your password" required />
          <Button type="submit" loading={loading} className="w-full">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
