"use client";

import Image from "next/image";


export default function SkillsSection() {

    const skills = [
  { name: "Next.js", icon: "/asset/icons8-nextjs.svg" },
  { name: "React", icon: "/asset/icons8-react-24.png" },
  { name: "TypeScript", icon: "/asset/icons8-typescript-48.png" },
  { name: "JavaScript", icon: "/asset/icons8-javascript-48.png" },
  { name: "Node.js", icon: "/asset/icons8-nodejs-48.png" },
  { name: "Express", icon: "/asset/icons8-express-js-64.png" },
  { name: "Prisma", icon: "/asset/icons8-prisma-orm-48.png" },
  { name: "TailwindCSS", icon: "/asset/icons8-tailwind-css-48.png" },
  { name: "PostgreSQL", icon: "/asset/icons8-postgresql-48.png" },
  { name: "MongoDB", icon: "/asset/icons8-mongodb-48.png" },
];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Skills</h2>
        <p className="text-muted-foreground  text-center mb-8">
          A showcase of my technical skills and technologies I work with.
        </p>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 bg-background/50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 relative">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
