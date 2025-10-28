// components/ClientLayoutWrapper.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";
import { Toaster } from "@/components/ui/sonner";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main className="max-w-7xl mx-auto px-4">
     
          {children}
          <Toaster richColors position="top-center" />
        
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}
