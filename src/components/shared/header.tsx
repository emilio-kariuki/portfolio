/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import * as React from "react";

import Link from "next/link";
import { cn } from "~/lib/utils";
import { Logo } from "./logo";
import { useTheme } from "next-themes";
import { MoonStar, Sun, Github } from "lucide-react";
import { MobileMenu } from "./mobile-header";
import { DesktopMenu } from "./desktop-header";


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
    label: "Blogs",
    href: "/blogs",
  },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <nav
      className={cn(
        "mn-w-[] z-30 flex w-full items-center bg-[#FAFBFC] dark:bg-[#030b20] px-1 lg:px-[160px] md:px-[160px] 2xl:px-[160px]",
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

        <DesktopMenu />
        <div className="flex items-center justify-center gap-2">
          <button
            className="border-[0.2px] border-[#363535] light:border-[#0C1927] p-3  transition-colors rounded-[8px]"
            onClick={() => window.open("https://github.com/emilio-kariuki")}
          >
            <Github size={20} />
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
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
