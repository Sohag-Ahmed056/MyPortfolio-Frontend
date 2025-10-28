

import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "@/components/clientWrapper";
 // ✅ new wrapper

export const metadata: Metadata = {
  title: "Sohag's Portfolio",
  description: "Find A Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}1
