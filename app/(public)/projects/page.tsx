import { getUserSession } from "@/app/helpers/getUserSession";
import ProjectCard from "@/components/ui/projectCard";
import { redirect } from "next/navigation";
import React from "react";

const ProjectPage = async () => {


  const session = await getUserSession()
  if(!session){
    redirect('/login')

  }
  // ✅ Fetch data (server-side)
  const res = await fetch("http://localhost:5000/api/v1/project/getAll", {
    next:{
      revalidate:20,
    }

  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();
  const projects = data?.data || [];

  return (
    <div className="p-6 mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.length > 0 ? (
        projects.map((project: any) => (
          <ProjectCard
            key={project.id}
            id ={project.id}
            title={project.title}
            thumbnail={project.thumbnail}
            liveUrl={project.liveUrl}
            repoUrl={project.repoUrl}
            description={project.description}
            features={project.features}
          />
        ))
      ) : (
        <p className="text-muted-foreground text-center col-span-full">
          No projects found.
        </p>
      )}
    </div>
  );
};

export default ProjectPage;
