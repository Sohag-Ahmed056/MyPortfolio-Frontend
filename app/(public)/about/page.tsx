"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, Linkedin, ExternalLink, Code2, Terminal, Cpu } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-20">
        
        {/* Profile Header */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-background shadow-2xl">
              <Image
                src="/sohag.jpeg"
                alt="Sohag Ahmed"
                fill
                priority
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-6">
            <div>
              <motion.span className="text-primary font-mono text-sm tracking-widest uppercase">
                Based in Bangladesh
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mt-2">
                Sohag Ahmed
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mt-4">
                Full Stack Architect & <span className="text-foreground">Product Builder</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
             
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://github.com/Sohag-Ahmed056" target="_blank"><Github size={18} /></a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://linkedin.com/in/sohag-ahmed-9b6425231" target="_blank"><Linkedin size={18} /></a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Narrative Bio */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Terminal className="text-primary" size={24} /> My Story
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I don’t just write code; I build <strong>digital experiences</strong>. My journey as a Full Stack Developer is driven by a curiosity to understand how things work from the pixel-perfect front-end down to the database schema.
              </p>
              <p>
                With a deep specialization in the <strong>T3 Stack (TypeScript, Tailwind, TRPC/Next.js)</strong>, I bridge the gap between complex technical requirements and intuitive user interfaces. I believe that performance and accessibility are non-negotiable features of the modern web.
              </p>
            </div>
          </div>

          <Card className="bg-card/50 border-primary/10 backdrop-blur-sm shadow-xl">
            <CardContent className="p-6 space-y-6">
              <h4 className="font-bold text-lg">Quick Facts</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                  <Code2 className="text-primary shrink-0" size={18} />
                  <span>10+ Projects Completed</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <Cpu className="text-primary shrink-0" size={18} />
                  <span>Specialized in Scalable SaaS</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <ExternalLink className="text-primary shrink-0" size={18} />
                  <span>Open Source Contributor</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skill Bento Grid */}
        <motion.div
           initial="initial"
           whileInView="animate"
           viewport={{ once: true }}
           variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: "Next.js", level: "Expert" },
              { name: "React", level: "Expert" },
              { name: "TypeScript", level: "Expert" },
              { name: "Node.js", level: "Advanced" },
              { name: "PostgreSQL", level: "Advanced" },
              { name: "Prisma", level: "Advanced" },
              { name: "Tailwind", level: "Expert" },
              { name: "MongoDB", level: "Advanced" },
              { name: "Express", level: "Advanced" },
              { name: "Docker", level: "Basic" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="group relative p-4 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 hover:bg-card transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -right-2 -bottom-2 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                   <Code2 size={60} />
                </div>
                <p className="font-semibold text-foreground">{tech.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.level}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}