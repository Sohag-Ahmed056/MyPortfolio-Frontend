"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, Github } from "lucide-react";
import { useSession } from "next-auth/react";
import ProjectDeleteButton from "./projectDeleteButton";

interface ProjectCardProps {
  id: number | string;
  title: string;
  thumbnail: string;
  liveUrl?: string;
  repoUrl?: string;
  description: string;
  features?: string[];
}

export default function ProjectCard({
  id,
  title,
  thumbnail,
  liveUrl,
  repoUrl,
  description,
  features = [],
}: ProjectCardProps) {
  const { data: session } = useSession();

  return (
    <Card className="max-w-md rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-900 transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Card content */}
      <CardContent className="space-y-4 p-6">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl sm:text-2xl font-semibold">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>

        {/* Features */}
        {features.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {liveUrl && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex items-center gap-1"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </Button>
          )}

          {repoUrl && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex items-center gap-1"
            >
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                Code <Github className="w-4 h-4" />
              </a>
            </Button>
          )}

          {session?.user?.role==="OWNER" && (
            <ProjectDeleteButton projectId={Number(id)} />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
