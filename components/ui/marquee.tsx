"use client";

import Image from "next/image";

const technologies = [
  { name: "Next.js", icon: "/asset/icons8-nextjs.svg" },
  { name: "React", icon: "/asset/icons8-react-24.png" },
  { name: "TypeScript", icon: "/asset/icons8-typescript-48.png" },
  { name: "JavaScript", icon: "/asset/icons8-javascript-48.png" },
  { name: "Node.js", icon: "/asset/icons8-nodejs-48.png" },
  { name: "Express", icon: "/asset/icons8-express-js-64.png" },
  { name: "Prisma", icon: "/asset/icons8-prisma-orm-48.png" },
  { name: "TailwindCSS", icon: "/asset/icons8-tailwind-css-48.png" },
  { name: "PostgreSQL", icon: "/asset/icons8-postgresql-48.png" },
  { name: "MongoDB", icon: "/asset/icons8-mongodb-48.png" }
];

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden rounded-2xl mt-8 py-8">
      {/* Gradient overlays for fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-muted to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-muted to-transparent z-10" />

      {/* Marquee container */}
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3  text-muted-foreground hover:text-foreground transition-colors"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={60}
              height={70}
              className="object-contain h-8 w-12"
            />
            <span className="text-sm font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
