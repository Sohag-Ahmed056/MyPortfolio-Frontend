"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription 
} from "@/components/ui/dialog"; // Ensure you have installed shadcn dialog
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import { useSession } from "next-auth/react";
import ProjectDeleteButton from "./projectDeleteButton";

interface ProjectCardProps {
  id: number | string;
  title: string;
  thumbnail: string;
  liveUrl?: string;
  repoUrl?: string;
  description: string;
  tags?: string[];
  features?: string[]; // Added to match your requested content
}

export default function ProjectCard({
  id,
  title,
  thumbnail,
  liveUrl,
  repoUrl,
  description,
  tags = [],
  features = [], // Default to empty array
}: ProjectCardProps) {
  const { data: session } = useSession();
  const isOwner = session?.user?.role === "OWNER";

  return (
    <Card className="group flex flex-col h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
      
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </div>

      <CardHeader className="p-5 pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl font-bold tracking-tight">{title}</CardTitle>
          {isOwner && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
               <ProjectDeleteButton projectId={Number(id)} />
            </div>
          )}
        </div>
        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col flex-1 p-5 pt-2">
        {/* Tags/Tech Stack */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider font-semibold py-0 px-2">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto flex flex-wrap items-center gap-3">
          {/* DIALOG START */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full px-4 border-primary/20 hover:bg-primary/5">
                <Maximize2 className="mr-2 h-3.5 w-3.5" />
                <span>See Details</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
              <CardHeader className="space-y-1 p-0">
                <CardTitle className="text-xl sm:text-2xl font-semibold">{title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 p-0 mt-4">
                {/* Features List */}
                {features.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
                      {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Quick Links inside Dialog for convenience */}
                <div className="flex gap-4 pt-4 border-t">
                  {liveUrl && (
                    <a href={liveUrl} target="_blank" className="text-sm flex items-center text-primary hover:underline">
                      <ExternalLink className="mr-1 h-4 w-4" /> Live Preview
                    </a>
                  )}
                  {repoUrl && (
                    <a href={repoUrl} target="_blank" className="text-sm flex items-center text-muted-foreground hover:text-foreground">
                      <Github className="mr-1 h-4 w-4" /> Repository
                    </a>
                  )}
                </div>
              </CardContent>
            </DialogContent>
          </Dialog>
          {/* DIALOG END */}

          {liveUrl && repoUrl && (
            <Button asChild size="sm" className="rounded-full px-4 shadow-sm ml-auto">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button asChild size="sm" className="rounded-full px-4 shadow-sm ml-auto">
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}