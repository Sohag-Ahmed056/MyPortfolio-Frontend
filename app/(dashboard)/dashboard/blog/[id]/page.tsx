import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

// interface Blog {
//   id: number;
//   title: string;
//   content: string;
//   excerpt: string;
//   coverImage: string | null;
//   published: boolean;
//   author: {
//     id: number;
//     name: string;
//     email: string;
//   };
// }

interface Props {
  params: { id: string };
}

export default async function BlogDetails({ params }: Props) {
  const {id}= await params;
  const res = await fetch(`http://localhost:5000/api/v1/blog/details/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  const blog = data?.data 




  if (!blog) {
    console.log("Blog not found for id:", id);
    notFound();
  }

  return (
     <div className="max-w-4xl mx-auto py-12 px-6">
      <Card className="shadow-lg rounded-2xl overflow-hidden">
        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-80 object-cover"
          />
        )}

        <CardContent className="space-y-6">
          <CardHeader>
            <CardTitle className="text-4xl font-extrabold">{blog.title}</CardTitle>
            <CardDescription className="text-gray-500 mt-2">
              Published on {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "Unknown Date"}
            </CardDescription>
          </CardHeader>

          <div className="flex items-center space-x-4">
            <Avatar>
              {blog.author?.avatar ? (
                <AvatarImage src={blog.author.avatar} />
              ) : (
                <AvatarFallback>{blog.author?.name?.[0] || "A"}</AvatarFallback>
              )}
            </Avatar>
            <div>
              <p className="text-sm font-medium">{blog.author?.name || "Anonymous"}</p>
              <p className="text-xs text-gray-400">Author</p>
            </div>
          </div>

          <Separator />

          <div className="prose max-w-none text-gray-700">
            {blog.content}
          </div>

          <div className="pt-6 flex justify-end">
            <Button variant="outline">Back to Blog List</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
