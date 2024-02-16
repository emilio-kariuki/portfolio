/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { Download } from "lucide-react";
import { Button } from "~/components/ui/button";
import { quickSand } from "~/lib/font";
import Flutter from "~/assets/flutter.svg";
import Native from "~/assets/native.svg";
import Next from "~/assets/next.svg";
import Figma from "~/assets/figma.svg";
import Figma_dark from "~/assets/figma_dark.svg";
import TypeScript from "~/assets/typescript.svg";
import Git from "~/assets/git.svg";
import Postgres from "~/assets/postgres.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

export function About() {
  const { theme } = useTheme();

  const stackIcons = [
    {
      name: Flutter,
    },
    {
      name: Native,
    },
    {
      name: Next,
    },
    {
      name: theme === "dark" ? Figma : Figma_dark,
    },
    {
      name: TypeScript,
    },
    {
      name: Git,
    },
    {
      name: Postgres,
    },
  ];
  return (
    <section className="relative">
      <div className="flex flex-col rounded-[40px] border-[#363535] bg-[#F5F6F8] px-16  py-10  dark:border-[0.1px] dark:bg-[#030b20] ">
        <h1
          className={`light:text-[#4055C0] text-[40px] font-bold dark:text-white ${quickSand.className}`}
        >
          About Me
        </h1>

        <p className="light:text-[#0C1927] mt-[40px] text-[16px] font-medium dark:text-[#D9D9D9]">
          I am a passionate software developer with a strong interest in
          developing mobile applications. I have been working with Flutter for
          the past 2 years and have developed a strong understanding of the
          framework. I have also worked with React Native and Next.js. I am
          always eager to learn new technologies and have a strong interest in
          developing web applications. I am also a UI/UX enthusiast and have
          experience working with Figma.

        </p>
        <div className="gap:6 my-[65px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-7 lg:gap-10">
          {stackIcons.map((stack, index) => (
            <div
              key={index}
              className="flex  flex-col items-center justify-center rounded-[20px] bg-[#fafbfc]  py-10 dark:bg-[#112439]"
            >
              <Image src={stack.name} alt="stack" height={45} width={45} />
            </div>
          ))}
        </div>
        <Button className="mt-1 flex h-[60px] w-[300px]  flex-row gap-3 rounded-[120px] bg-[#4055D0] hover:bg-[#4055D0]">
          <h1 className="text-[15px] text-white">Download Resume</h1>
          <Download size={20} color="#ffffff" />
        </Button>
      </div>
    </section>
  );
}
