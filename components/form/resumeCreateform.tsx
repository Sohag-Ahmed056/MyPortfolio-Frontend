"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { submitResume } from "@/app/actions/resumeCreateAction";
import ResumePDF from "../ui/resumeTemplate";
// import ResumePdfGenerator from "../ui/resumeTemplate";

type ResumeFormValues = {
  title: string;
  name: string;
  email: string;
  phone: string;
  github: string;
  skills: string;
  education: {
    degree: string;
    institution: string;
    year: number;
    grade: string;
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string;
    year: number;
  }[];
  certifications: {
    name: string;
    issuer: string;
    year: number;
  }[];
  experience: {
    company: string;
    position: string;
    duration: string;
    responsibilities: string;
  }[];
};1

export default function CreateResumePage() {
  const [createdResume, setCreatedResume] = useState<any>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<ResumeFormValues>({
    defaultValues: {
      title: "My Professional Resume",
      name: "",
      email: "",
      phone: "",
      github: "",
      skills: "",
      education: [{ degree: "", institution: "", year: 2025, grade: "" }],
      projects: [{ name: "", description: "", technologies: "", year: 2025 }],
      certifications: [{ name: "", issuer: "", year: 2025 }],
      experience: [{ company: "", position: "", duration: "", responsibilities: "" }],
    },
  });

  const educationArray = useFieldArray({ control: form.control, name: "education" });
  const projectsArray = useFieldArray({ control: form.control, name: "projects" });
  const certificationsArray = useFieldArray({ control: form.control, name: "certifications" });
  const experienceArray = useFieldArray({ control: form.control, name: "experience" });

  const onSubmit = (values: ResumeFormValues) => {
    startTransition(async () => {
      const formattedData = {
        ...values,
        skills: values.skills.split(",").map((s) => s.trim()),
      };

      const res = await submitResume(formattedData);

      if (res.success) {
        toast.success("✅ Resume created successfully!");
        form.reset();
        setCreatedResume(res.data);
        

        // router.push("/");
      } else {
        toast.error("❌ Failed to create resume", { description: res.error });
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <Card className="w-full max-w-4xl shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Create Your Resume
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Basic Info */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Resume Title" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+8801XXXXXXXXX" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://github.com/username" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills (comma separated)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="JavaScript, React, Node.js" {...field} rows={3} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Education */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Education</h3>
                {educationArray.fields.map((item, index) => (
                  <div key={item.id} className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
                    <Input placeholder="Degree" {...form.register(`education.${index}.degree`)} />
                    <Input placeholder="Institution" {...form.register(`education.${index}.institution`)} />
                    <Input type="number" placeholder="Year" {...form.register(`education.${index}.year`, { valueAsNumber: true })} />
                    <div className="flex gap-2">
                      <Input placeholder="Grade" {...form.register(`education.${index}.grade`)} />
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => educationArray.remove(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => educationArray.append({ degree: "", institution: "", year: 2025, grade: "" })}
                >
                  + Add Education
                </Button>
              </div>

              {/* Projects */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Projects</h3>
                {projectsArray.fields.map((item, index) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                    <Input placeholder="Project Name" {...form.register(`projects.${index}.name`)} />
                    <Input placeholder="Technologies Used" {...form.register(`projects.${index}.technologies`)} />
                    <Textarea placeholder="Project Description" {...form.register(`projects.${index}.description`)} rows={3} />
                    <div className="flex gap-2">
                      <Input type="number" placeholder="Year" {...form.register(`projects.${index}.year`, { valueAsNumber: true })} />
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => projectsArray.remove(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => projectsArray.append({ name: "", description: "", technologies: "", year: 2025 })}
                >
                  + Add Project
                </Button>
              </div>

              {/* Certifications */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Certifications</h3>
                {certificationsArray.fields.map((item, index) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <Input placeholder="Certification Name" {...form.register(`certifications.${index}.name`)} />
                    <Input placeholder="Issuer" {...form.register(`certifications.${index}.issuer`)} />
                    <div className="flex gap-2">
                      <Input type="number" placeholder="Year" {...form.register(`certifications.${index}.year`, { valueAsNumber: true })} />
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => certificationsArray.remove(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => certificationsArray.append({ name: "", issuer: "", year: 2025 })}
                >
                  + Add Certification
                </Button>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Experience</h3>
                {experienceArray.fields.map((item, index) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                    <Input placeholder="Company" {...form.register(`experience.${index}.company`)} />
                    <Input placeholder="Position" {...form.register(`experience.${index}.position`)} />
                    <Input placeholder="Duration" {...form.register(`experience.${index}.duration`)} />
                    <div className="flex gap-2">
                      <Textarea placeholder="Responsibilities" {...form.register(`experience.${index}.responsibilities`)} rows={3} />
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => experienceArray.remove(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => experienceArray.append({ company: "", position: "", duration: "", responsibilities: "" })}
                >
                  + Add Experience
                </Button>
              </div>

              <Button type="submit" disabled={isPending} className="w-full font-medium">
                {isPending ? "Creating..." : "Create Resume"}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="justify-center text-sm text-muted-foreground">
          Your resume will appear after publishing.
        </CardFooter>
      </Card>
      <div className="m-4">
             {createdResume && <ResumePDF data={createdResume} />}
      </div>
      
    </div>
  );
}
