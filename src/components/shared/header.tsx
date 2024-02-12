"use client";

import * as React from "react";

import  Link  from "next/link";
import { cn } from "~/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Logo } from "./logo";

const links = [
    {
        label: "Home",
        href: "/",
      },
      {
        label: "Projects",
        href: "/projects",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Blogs",
        href: "/blogs",
      },
];

export default function Header() {

  return (
    <nav
      className={cn(
        "mn-w-[] z-30 flex w-full items-center bg-[#ffffff] px-3",
        "sticky top-0",
      )}
    >
      <div className="mx-auto flex w-full max-w-[85rem] items-center justify-between py-3">
        <Link
          href="/"
          className=" flex flex-row items-center justify-center gap-2"
        >
          <Logo />
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center space-x-5">
            {links.map((link) => (
              <NavigationMenuItem key={link.label}>
                <Link legacyBehavior passHref href={link.href}>
                  <NavigationMenuLink
                    className={cn(
                      "rounded-3xl px-3 py-2 text-base font-normal transition-colors"
                      
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
