"use client";

import { useId } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  HouseIcon,
  InboxIcon,
  Info,
  Notebook,
  ChartNoAxesGantt,
} from "lucide-react";


import Logo from "@/components/navbar-components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "./modeTogle";
import { useSession, } from "next-auth/react";
import { UserProfileMenu } from "./ui/profileMenu";

const navigationLinks = [
  { href: "/", label: "Home", icon: HouseIcon },
  { href: "/about", label: "About", icon: Info },
  { href: "/dashboard/blog", label: "Blogs", icon: Notebook },
  { href: "/projects", label: "Projects", icon: ChartNoAxesGantt },
  { href: "/contact", label: "Contact", icon: InboxIcon },
];

export default function Navbar() {
  const id = useId();
  const pathname = usePathname();
   const { data: session } = useSession();

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>

            {/* Mobile menu */}
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className={`flex-row items-center gap-2 py-1.5 ${
                            isActive
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Icon
                            size={16}
                            className="text-muted-foreground/80"
                            aria-hidden="true"
                          />
                          <span>{link.label}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-primary hover:text-primary/90">
              <Logo />
            </a>
          </div>
        </div>

        {/* Desktop navigation */}
        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="gap-2">
            {navigationLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={link.href}
                    className={`flex-row items-center gap-2 py-1.5 font-medium text-foreground hover:text-primary transition-colors ${
                      isActive ? "text-primary" : ""
                    }`}
                  >
                    <Icon
                      size={16}
                      className={`${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground/80"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{link.label}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="flex items-center gap-2">
            {
              !session?(

                <Button asChild variant="ghost" size="sm" className="text-sm">
                 <Link href="/login">Sign In</Link>
            </Button>
              ):(
                <UserProfileMenu></UserProfileMenu>
                
              )
            }

            {
              session && (
                  <Button asChild size="sm" className="text-sm">
                <p> Hi {session?.user?.name}</p>
            </Button>
              )
            }
         
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
