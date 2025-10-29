

import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "@/components/clientWrapper";
 // ✅ new wrapper

export const metadata: Metadata = {
   title: "Sohag Ahmed | Full-Stack Developer",
  description: "Welcome to my personal portfolio built with Next.js and TypeScript.",
  openGraph: {
    title: "Sohag Ahmed | Full-Stack Developer",
    description: "Check out my portfolio projects and contact me for collaboration.",
    url: "https://my-portfolio-frontend-xi-one.vercel.app/",
    siteName: "Sohag Ahmed Portfolio",
    images: [
      {
        url: "https://my-portfolio-frontend-xi-one.vercel.app/og-image.png", // <-- public image URL
        width: 1200,
        height: 630,
        alt: "Sohag Ahmed Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohag Ahmed | Full-Stack Developer",
    description: "Check out my portfolio projects and contact me for collaboration.",
    images: ["https://my-portfolio-frontend-xi-one.vercel.app/og-image.png"],
  },
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
