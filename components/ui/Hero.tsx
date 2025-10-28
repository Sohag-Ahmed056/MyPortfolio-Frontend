"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine ,Eye} from "lucide-react";
import DownloadCVButton from "./downloadResume";
import DownloadResume from "./downloadResume";
import Link from "next/link";


interface HeroProps {
  className?: string;
  children?: React.ReactNode;
}


export default function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-background text-foreground",
        className
      )}
    >
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/40 to-background" />

      {/* Subtle Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Building Modern Web Experiences
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          I'm a full-stack developer crafting fast, elegant, and scalable web
          applications using modern technologies and best practices.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <DownloadCVButton></DownloadCVButton>
            <ArrowDownToLine></ArrowDownToLine>

          </Button> */}
          <DownloadResume></DownloadResume>

          <Link href="/projects" passHref>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-border text-foreground hover:bg-muted transition-colors"
      >
        <span>
          View Projects <Eye />
        </span>
      </Button>
    </Link>
        </div>

        {/* Optional Demo Area
        {children && (
          <div className="relative mt-16 w-full rounded-2xl border border-border bg-muted/30 p-4 shadow-sm">
            {children}
          </div> */}
        
      </div>
    </section>
  );
}
