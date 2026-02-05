'use client';

import { usePathname } from 'next/navigation';
import AdminNav from '@/components/layout/AdminNav';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === '/admin/login';

  if (isLogin) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-[#f7f7f5]">
      <AdminNav />
      <main className="flex-1 p-8 lg:p-10 overflow-auto">
        {children}
      </main>
    </div>
  );
}
