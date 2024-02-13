/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import * as React from "react";

import Link from "next/link";
import { cn } from "~/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Logo } from "./logo";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";
import Github_white from "~/assets/github_white.svg";
import Github_dark from "~/assets/github.svg";
import Image from "next/image";




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
  const { theme, setTheme } = useTheme();
  return (
    <nav
      className={cn(
        "mn-w-[] z-30 flex w-full items-center bg-[#FAFBFC] dark:bg-[#030b20] px-[160px]",
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
                      "rounded-3xl px-3 py-2 text-base font-normal dark:text-white light:text-[#0C1927] transition-colors",
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center justify-center gap-4">
        <button
            className="border-[0.2px] border-[#363535] light:border-[#0C1927] p-3  transition-colors rounded-[8px]"
            onClick={() => {
              window.open("https://github.com/emilio-kariuki/portfolio.git");
            }}
          >
            {
              theme === "dark" ? (
                <Image src={Github_white} alt="github" height={20} width={20} />
              ) : (
                <Image src={Github_dark} alt="github" height={20} width={20} />
              )
            }
          </button>
          <button
            className="border-[0.2px] border-[#363535] light:border-[#0C1927] p-3  transition-colors rounded-[8px]"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {
              theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <MoonStar size={20} />
              )
            }
          </button>
        </div>
      </div>
    </nav>
  );
}
