"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    duration: "2022 - Present",
    location: "Dhaka, Bangladesh",
    description: "Specializing in Software Architecture and Full-Stack Systems. Actively exploring distributed systems and modern web optimization.",
    achievements: ["Dean's List Candidate", "Community Tech Lead"],
    skills: ["Data Structures", "Algorithms", "Next.js", "PostgreSQL"]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Shahdowla Govt. College,Bagha, Rajshahi",
    duration: "2018 - 2020",
    location: "Science Group",
    description: "Mastered core analytical concepts in Advanced Mathematics and Physics.",
    achievements: ["GPA 5.00 / 5.00", "Regional Merit Scholarship"],
    skills: ["Mathematics", "Physics", "Chemistry", "ICT"]
  },
];

export default function EducationSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">Academic <span className="text-primary">Path</span></h2>
          <p className="text-muted-foreground max-w-lg mx-auto">A timeline of my formal education and academic achievements.</p>
        </motion.div>

        {/* The Timeline Container */}
        <div className="relative">
          
          {/* Centered Vertical Line - Hidden on small screens, centered on md+ */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-16">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-center justify-between flex-col md:flex-row w-full">
                  
                  {/* Timeline Node (The Circle) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary z-20 shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                  >
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                  </motion.div>

                  {/* Left Side (Empty on Odd, Content on Even) */}
                  <div className={`flex w-full md:w-[45%] ${isEven ? 'justify-end' : 'hidden md:flex'}`}>
                    {isEven && <EducationCard edu={edu} align="right" />}
                  </div>

                  {/* Spacer for Middle */}
                  <div className="hidden md:block w-[5%]" />

                  {/* Right Side (Content on Odd, Empty on Even) */}
                  <div className={`flex w-full md:w-[45%] pl-10 md:pl-0 ${!isEven ? 'justify-start' : 'md:hidden flex'}`}>
                    {!isEven && <EducationCard edu={edu} align="left" />}
                    {/* Mobile fallback: Show even cards on the right side list when screen is small */}
                    {isEven && <div className="md:hidden w-full"><EducationCard edu={edu} align="left" /></div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationCard({ edu, align }: { edu: typeof educationData[0], align: 'left' | 'right' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'right' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="group relative overflow-hidden border-none bg-card/50 backdrop-blur-sm hover:bg-card transition-all shadow-lg hover:shadow-primary/5">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col gap-4">
            
            {/* Top Row: Date & Icon */}
            <div className="flex justify-between items-start">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-2 bg-muted rounded-md text-muted-foreground">
                {edu.duration}
              </span>
            </div>

            {/* Title & School */}
            <div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                {edu.degree}
              </h3>
              <p className="text-primary text-sm font-medium mt-1">{edu.institution}</p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed italic">
              &quot;{edu.description}&quot;
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {edu.skills.map((skill) => (
                <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-border/50 text-foreground/70 border border-border">
                  {skill}
                </span>
              ))}
            </div>

            {/* Achievements */}
            <div className="pt-4 border-t border-border/50 space-y-2">
              {edu.achievements.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Award size={12} className="text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}