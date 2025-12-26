"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each item enters 0.1s after the previous
    },
  },
};

// Animation variants for individual items
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" as const // Fixes the error by narrowing the type
    },
  },
};

export default function SkillsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Technical Toolbelt
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             viewport={{ once: true }}
             className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" 
          />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I specialize in building full-stack applications using modern frameworks and scalable databases.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="group relative flex flex-col items-center gap-4 p-8 
                         bg-card/40 backdrop-blur-sm border border-border/50 
                         rounded-2xl hover:border-primary/50 transition-colors 
                         hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 relative grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Label */}
              <span className="text-sm font-semibold tracking-wide uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}