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
        setTimeout(() => setSuccess(false), 5000); // Reset success message
      } else {
        alert(result.error || "Failed to send message.");
      }
    });
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-20 bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-semibold tracking-widest uppercase text-sm"
          >
            Available for new projects
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mt-4 mb-6"
          >
            Let&apos;s connect with me 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Have a question or a proposal? I&apos;m always open to discussing new projects, 
            creative ideas, or opportunities to be part of your visions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info - 2 Columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-6">
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

            <div>
              <h2 className="text-xl font-bold mb-4">Follow Me</h2>
              <div className="flex gap-4">
                <SocialLink href="https://github.com/Sohag-Ahmed056" icon={<Github size={20} />} />
                <SocialLink href="https://linkedin.com/in/sohag-ahmed-9b6425231" icon={<Linkedin size={20} />} />
              </div>
            </div>
          </motion.div>

          {/* Contact Form - 3 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-md">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">Full Name</label>
                      <Input
                        name="name"
                        placeholder="John Doe"
                        className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-all h-12"
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
                        className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-all h-12"
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
                      rows={6}
                      className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-all resize-none"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-lg font-semibold group transition-all"
                    disabled={isPending}
                  >
                    {isPending ? (
                      "Sending..."
                    ) : (
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

// Sub-components for cleaner code
function ContactMethod({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a href={href} className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-muted transition-all">
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{label}</p>
        <p className="text-lg font-medium">{value}</p>
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
      className="w-12 h-12 flex items-center justify-center rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-all shadow-sm"
    >
      {icon}
    </a>
  );
}