"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className=" bg-background text-foreground flex flex-col items-center justify-center px-6 py-20">
      {/* Profile Section */}
      <div className="max-w-4xl w-full space-y-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg border border-border">
            <Image
              src="/profile.jpg"
              alt="Sohag Ahmed"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold">Sohag Ahmed</h1>
            <p className="text-lg text-muted-foreground">
              Full Stack Web Developer | Building scalable, user-centric web
              applications with modern technologies.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/Sohag-Ahmed056"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/sohag-ahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:sohag@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <Card className="shadow-md border border-border/40 bg-card/50">
          <CardContent className="space-y-4 p-6 leading-relaxed text-muted-foreground">
            <p>
              I’m a passionate <strong>Full Stack Web Developer</strong> with a
              strong focus on building modern, scalable, and maintainable web
              applications. My expertise spans across the entire web stack —
              from creating sleek, responsive front-ends to designing efficient
              back-end APIs and database architectures.
            </p>

            <p>
              I have hands-on experience with technologies such as{" "}
              <strong>
                Next.js, React, TypeScript, Node.js, Express, Prisma,
                PostgreSQL, and MongoDB
              </strong>
              . I enjoy solving complex problems, optimizing performance, and
              writing clean, maintainable code following industry best practices.
            </p>

            <p>
              Beyond coding, I love collaborating with cross-functional teams,
              contributing to open-source projects, and continuously learning
              about new technologies in the JavaScript ecosystem. My goal is to
              create digital products that not only work efficiently but also
              deliver delightful user experiences.
            </p>

            <p>
              When I’m not coding, you’ll find me exploring new tech trends,
              mentoring developers, or fine-tuning side projects that merge
              creativity with technology.
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Core Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Express",
              "Prisma",
              "Tailwind CSS",
              "PostgreSQL",
              "MongoDB",
            ].map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center py-3 rounded-xl bg-muted/40 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
