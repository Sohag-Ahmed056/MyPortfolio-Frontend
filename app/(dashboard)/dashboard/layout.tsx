// app/(dashboard)/dashboard/layout.tsx
"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full ">
        {/* Sidebar Section */}
        <AppSidebar />

        {/* Main Section */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Optional Sidebar Trigger for small screens */}
         

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
