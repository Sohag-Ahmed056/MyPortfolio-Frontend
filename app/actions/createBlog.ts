"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { authOptions } from "../helpers/authOptions";

const blogSchema = z.object({
  title: z.string().min(3, "Title is required"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  coverImage: z.string().optional().nullable(),
  published: z.boolean().optional().default(false),
});

export async function createBlogAction(formData: FormData) {
  try {
    // ✅ Get user session from NextAuth
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return { success: false, message: "Unauthorized. Please log in first." };
    }

    // ✅ Extract and validate data from form
    const rawData = {
      title: formData.get("title"),
      excerpt: formData.get("excerpt"),
      content: formData.get("content"),
      coverImage: formData.get("coverImage") || null,
      published: formData.get("published") === "true",
    };

    const validated = blogSchema.parse(rawData);

    // ✅ Send to backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/v1/blog/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...validated,
        userId: Number(session.user.id),
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      return { success: false, message: data.message || "Failed to create blog." };
    }

    // ✅ Optional: revalidate blogs list page
    revalidatePath("/blogs");

    return { success: true, message: "Blog created successfully!" };
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong." };
  }
}
