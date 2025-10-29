import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BlogDeleteButton from "./blogDeleteButton";
import { getUserSession } from "@/app/helpers/getUserSession";

interface BlogCardProps {
    id: string,
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string | null;
  published: boolean;
  authorName?: string;
}

export async function BlogCard({
    id,
  title,
  excerpt,
  coverImage,
  published,
  authorName,
}: BlogCardProps) {

  const session = await getUserSession()
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1 text-lg font-semibold">{title}</CardTitle>
          <Badge variant={published ? "default" : "secondary"}>
            {published ? "Published" : "Draft"}
          </Badge>
        </div>
        {authorName && (
          <p className="text-sm text-muted-foreground">by {authorName}</p>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        <Link href={`blog/${id}`}>
          <Button variant="outline" size="sm">
            See Details
          </Button>
        </Link>
        

        {session?.user?.role === "OWNER" && (
          <BlogDeleteButton blogId={Number(id)} />
        )}
      </CardFooter>
    </Card>
  );
}
