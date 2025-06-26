"use client";

import { Providers, Header, RouteGuard, Footer } from "@/components";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <Providers>
      <Header />
      <RouteGuard>{children}</RouteGuard>
      <Footer />
    </Providers>
  );
} 