// components/Footer.tsx
"use client";

import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Globe, Heart, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Sohag-Ahmed056" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/sohagali" },
  ];

  return (
    <footer className="bg-gradient-to-b mt-5 from-background to-muted/50 text-muted-foreground transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Sohag Ali <span className="text-blue-500">| Full Stack Dev</span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I build scalable, modern web apps with clean UI & optimized backend,
              powered by React, Next.js, Node.js, and MongoDB.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:sohagali@example.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  sohagali@example.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <a
                  href="https://sohagali.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  sohagali.dev
                </a>
              </li>
            </ul>
          </div>

          {/* Socials + Theme Switch */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Connect</h3>
            <div className="flex gap-3 mb-4">
              {socials.map((social, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </Link>
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex items-center gap-2 border-gray-400 text-muted-foreground transition-colors"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-4 w-4" />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4" />
                  Light Mode
                </>
              )}
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-muted" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sohag Ali. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Made with <Heart size={14} className="text-red-500" /> using{" "}
            <span className="text-blue-500 ml-1">Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
