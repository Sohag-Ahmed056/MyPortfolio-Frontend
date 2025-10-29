// app/actions/projectActions.ts
"use server";

export async function createProjectAction(data: {
  title: string;
  slug: string;
  thumbnail: string;
  liveUrl: string;
  repoUrl: string;
  description: string;
  features: string[];
}) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/v1/project/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to create project");
    }

    const result = await res.json();
    return { success: true, project: result };
  } catch (error: any) {
    console.error(error);
    return { success: false, error: error.message || "Something went wrong" };
  }
}
