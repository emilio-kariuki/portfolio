"use client";

import { cn } from "~/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

type PageLink = {
  label: string;
  href: string;
};

export function DesktopMenu() {
  const activePath = usePathname();

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    // {
    //   label: "Blogs",
    //   href: "/blogs",
    // },
  ];

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex items-center space-x-3">
        {links.map((link) => (
          <NavigationMenuItem key={link.label}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "rounded-3xl px-3 py-2 text-base font-normal transition-colors",
                  "hover:font-medium "
                )}
              >
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
