"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Send, CheckCircle2, Github, Linkedin } from "lucide-react";
import { sendEmailAction } from "@/app/actions/sendEmailActions";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await sendEmailAction(form);
      if (result.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert(result.error || "Failed to send message.");
      }
    });
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-20 bg-background">
      {/* Background Decorative Elements - Hidden on very small screens to improve performance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[60%] md:w-[40%] h-[40%] rounded-full bg-primary/5 blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[60%] md:w-[40%] h-[40%] rounded-full bg-primary/10 blur-[80px] md:blur-[120px]" />
      </div>

      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-semibold tracking-widest uppercase text-xs md:text-sm"
          >
            Available for new projects
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mt-3 mb-4 md:mb-6"
          >
            Let&apos;s connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-2"
          >
            Have a question or a proposal? I&apos;m always open to discussing new projects, 
            creative ideas, or opportunities to be part of your visions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Contact Info - Stacked on mobile, 2 columns on Large */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8 md:space-y-10 order-2 lg:order-1"
          >
            <div className="bg-card/30 p-6 rounded-3xl border border-border/50 lg:bg-transparent lg:p-0 lg:border-none">
              <h2 className="text-xl md:text-2xl font-bold mb-6">Contact Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                <ContactMethod 
                  icon={<Mail className="w-5 h-5" />} 
                  label="Email" 
                  value="sohagahmed056@gmail.com" 
                  href="mailto:sohagahmed056@gmail.com"
                />
                <ContactMethod 
                  icon={<Phone className="w-5 h-5" />} 
                  label="Phone" 
                  value="+880 13 0224 3428" 
                  href="tel:+8801302243428"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-lg md:text-xl font-bold mb-4">Follow Me</h2>
              <div className="flex justify-center lg:justify-start gap-4">
                <SocialLink href="https://github.com/Sohag-Ahmed056" icon={<Github size={20} />} />
                <SocialLink href="https://linkedin.com/in/sohag-ahmed-9b6425231" icon={<Linkedin size={20} />} />
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Stacked on mobile, 3 columns on Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 order-1 lg:order-2"
          >
            <Card className="border-none shadow-xl md:shadow-2xl bg-card/50 backdrop-blur-md">
              <CardContent className="p-5 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">Full Name</label>
                      <Input
                        name="name"
                        placeholder="John Doe"
                        className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-all h-11 md:h-12"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-all h-11 md:h-12"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-all resize-none"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-11 md:h-12 text-base md:text-lg font-semibold group transition-all"
                    disabled={isPending}
                  >
                    {isPending ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <AnimatePresence>
                    {success && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2 text-green-500 font-medium py-2"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        Message sent successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a href={href} className="group flex items-center gap-4 p-3 md:p-4 rounded-2xl hover:bg-muted/50 lg:hover:bg-muted transition-all">
      <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
        {icon}
      </div>
      <div className="min-w-0"> {/* Prevents text overflow */}
        <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground font-bold">{label}</p>
        <p className="text-base md:text-lg font-medium truncate">{value}</p>
      </div>
    </a>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-all shadow-sm"
    >
      {icon}
    </a>
  );
}