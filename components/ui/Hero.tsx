"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import DownloadResume from "./downloadResume";
import Link from "next/link";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // GSAP: Continuous floating animation for the background glow
  useGSAP(() => {
    gsap.to(glowRef.current, {
      x: 50,
      y: 30,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: container });

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as const // <--- Add this
    },
  },
};
  const titleText = "Building Modern Web Experiences";

  return (
    <section
      ref={container}
      className={cn(
        "relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-background text-foreground",
        className
      )}
    >
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/40 to-background" />

      {/* GSAP Animated Accent Glow */}
      <div
        ref={glowRef}
        className="absolute top-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[100px] pointer-events-none"
      />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* Animated Heading */}
        <motion.h1 
          className="text-4xl font-bold leading-tight tracking-tight md:text-6xl"
        >
          {titleText.split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p 
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg"
        >
          I'm a full-stack developer crafting fast, elegant, and scalable web
          applications using modern technologies and best practices.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <DownloadResume />

          <Link href="/projects" passHref>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-border text-foreground hover:bg-muted transition-colors"
            >
              <span>
                View Projects 
                <Eye className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}