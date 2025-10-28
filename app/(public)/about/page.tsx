

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Knows About Sohag Ahmed, A full stack web developer",
};


export default function AboutPage() {
  return (
    <section className=" bg-background text-foreground flex flex-col items-center justify-center px-6 py-20">
      {/* Profile Section */}
      <div className="max-w-4xl w-full space-y-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg border border-border">
            <Image
              src="/sohag.jpeg"
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
                 <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1536 1504"><path fill="#000000" d="M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0zM291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2zm31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3zm30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7zm42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3zm57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11zm58-10q-2-11-18-9q-16 3-14 15t18 8t14-14z"/></svg>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/sohag-ahmed-9b6425231"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24" fill="#000000"><path fill="#000000" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
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
