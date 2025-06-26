'use client';
import { Providers } from '@/components/Providers';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RouteGuard } from '@/components/RouteGuard';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      <RouteGuard>
        {children}
      </RouteGuard>
      <Footer />
    </Providers>
  );
} 