"use server";

import { revalidateTag } from "next/cache";

export async function deleteBlogAction(blogId: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/v1/blog/delete/${blogId}`, {
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
     revalidateTag("blogs","default");

    return { success: true };
  } catch (err: any) {
    throw new Error(err.message || "Something went wrong");
  }
}
