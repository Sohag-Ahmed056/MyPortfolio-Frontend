"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteBlogAction } from "@/app/actions/deleteBlogAction";
import { deleteProjectAction } from "@/app/actions/deleteProjectAction";

interface ProjectDeleteButtonProps {
  projectId: number;
  onDelete?: () => void; // optional callback to remove blog from parent state
}

export default function ProjectDeleteButton({ projectId, onDelete }: ProjectDeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    startTransition(async () => {
      try {
        await deleteProjectAction(projectId);
        toast.success("Project deleted successfully!");
        onDelete?.(); // call callback to update parent UI
      } catch (err: any) {
        toast.error(err.message || "Failed to delete project");
      }
    });
  };

  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={handleDelete}
      disabled={isPending}
      className="flex items-center gap-2"
    >
      {isPending ? "Deleting..." : <Trash2 className="w-4 h-4" />}
      Delete
    </Button>
  );
}
