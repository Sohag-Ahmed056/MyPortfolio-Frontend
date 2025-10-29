import { BlogCard } from "@/components/ui/blogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lastest Blogs",
  description: "Find your latest blogs",
};


export default async function BlogsPage() {


 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/v1/blog/getAll`, {
       next: { tags: ["projects","default"]},
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  const blogs = data?.data?.data


  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">All Blogs</h1>

      {blogs?.length === 0 ? (
        <p className="text-muted-foreground">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog: any) => (
            <BlogCard
              key={blog.id}
              id = {blog.id}
              title={blog.title}
              slug={blog.slug}
              excerpt={blog.excerpt}
              coverImage={blog.coverImage}
              published={blog.published}
              authorName={blog.author?.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}