"use server";

import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { authOptions } from "../helpers/authOptions";

export async function submitResume(data: any) {
  // If skills or project technologies are strings, convert to arrays
  // if (typeof data.skills === "string") {
  //   data.skills = data.skills.split(",").map((s: string) => s.trim());
  // }

  const session = await getServerSession(authOptions);
      if (!session?.user?.id) {
        return { success: false, message: "Unauthorized. Please log in first." };
      }

  if (data.projects) {
    data.projects = data.projects.map((p: any) => ({
      ...p,
      technologies: typeof p.technologies === "string" ? p.technologies.split(",").map((t: string) => t.trim()) : p.technologies,
    }));
  }

  // Send data to Express backend
  const res = await fetch("http://localhost:5000/api/v1/resume/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
       userId: Number(session.user.id)
    }),
  });

  const result = await res.json();
  return result;
}
