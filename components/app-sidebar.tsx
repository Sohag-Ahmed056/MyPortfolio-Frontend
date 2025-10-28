"use client";

import * as React from "react";
import Link from "next/link";
import { GalleryVerticalEnd } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";

const navItems = [
  { title: "Home", url: "/" },
  { title: "Create Blog", url: "/dashboard/blog/create" },
  { title: "Build CV", url: "/dashboard/cv-builder" },
  { title: "Create Project", url: "/dashboard/project" },
  { title: "Get All Users", url: "/dashboard/users" },
  { title: "All Blogs", url: "/dashboard/blog" },
];

export function AppSidebar() {
  const [open, setOpen] = React.useState(false);
  const{data:session}= useSession()
  const name = session?.user.name || "User Dashboard"

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>

      {/* Sidebar */}
      <Sidebar
        variant="floating"
        className={`fixed md:static h-screen z-40 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-200`}
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex w-8 h-8 items-center justify-center rounded-lg">
                    <GalleryVerticalEnd className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-medium text-base">{name}</span>
                    <span className="text-xs text-muted-foreground">
                      Manage Your Content
                    </span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu className="gap-2">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="font-medium hover:text-sidebar-primary"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
