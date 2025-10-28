import { authOptions } from "@/app/helpers/authOptions"
import { getUserSession } from "@/app/helpers/getUserSession"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { h1, h2 } from "motion/react-client"
import { useSession } from "next-auth/react"


export default async function Dashboard() {


const session= await getUserSession();
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
   
      <h1 className="text-5xl text center ">
  {session ? `Hi ${session.user?.name}` : "Welcome, Guest"}
</h1>

     
    </SidebarProvider>
  )
}
