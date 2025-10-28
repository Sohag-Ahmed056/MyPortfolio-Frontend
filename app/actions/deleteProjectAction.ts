"use server";

export async function deleteProjectAction(projectId: number) {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/project/delete/${projectId}`, {
        cache:'no-store',
      method: "DELETE",
      credentials: "include", // send cookies if needed
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to delete blog");
    }

    return { success: true };
  } catch (err: any) {
    throw new Error(err.message || "Something went wrong");
  }
}
