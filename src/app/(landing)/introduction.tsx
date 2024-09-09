/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Profile from "~/assets/profile.png";
import { Button } from "~/components/ui/button";
import { interRegular, quickSand } from "~/lib/font";

import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

import { useTheme } from "next-themes";

export function Introduction() {
  return (
    <section className="relative">
      <div className="flex h-fit flex-row gap-8 py-10 sm:flex-col md:flex-row  lg:flex-row ">
        <MeCard />
        <div className="hidden gap-2 md:flex md:flex-col lg:flex lg:flex-col 2xl:flex 2xl:flex-col h-fit">
          <Image
            src="https://utfs.io/f/ae31c830-ed81-473c-b2a8-b16759556807-69bvvo.jpeg"
            alt="Profile"
            width={500}
            height={500}
            className="rounded-[20px] "
          />
          <div className="mt-5 flex flex-col gap-2">
            <SocialLine title="Follow on Twitter">
              <TwitterIcon size={20} />
            </SocialLine>
            <SocialLine title="Follow on Github">
              <GithubIcon size={20} />
            </SocialLine>
            <SocialLine title="Connect on Linkedin">
              <LinkedinIcon size={20} />
            </SocialLine>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLine({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="block flex-row items-center justify-start gap-5 md:flex lg:flex 2xl:flex">
      {children}
      <h3
        className={`light:text-black text-[14px] font-normal dark:text-white ${interRegular.className}`}
      >
        {title}
      </h3>
    </div>
  );
}

function MeCard() {
  const { theme } = useTheme();
  return (
    <div
      className={`mx-h-[1000px] flex flex-col items-center rounded-[20px] border-[0.3px]  border-[#363535]  bg-transparent px-4   py-6 md:items-start md:px-16 md:py-16 lg:items-start lg:px-16 lg:py-16 2xl:items-start 2xl:px-16  2xl:py-16 `}
    >
      <h1
        className={`light:text-[#0C1927] text-center text-[25px] font-bold dark:text-white md:text-start md:text-[40px] lg:text-start lg:text-[40px] 2xl:text-start 2xl:text-[40px] ${quickSand.className}`}
      >
        Hi, am Emilio, a Software Engineer, with 2+ Years of Experience
      </h1>
      <p className="light: mt-[20px] text-center text-[14px] font-light text-[#0C1927] dark:text-[#D9D9D9] md:text-start md:font-medium lg:text-start lg:font-medium 2xl:text-start 2xl:font-medium">
        I am software engineer who codes like a boss, learns like a sponge, and
        solves problems like a pro. I can make awesome apps for web and mobile
        using cool tech and magic. I work well with others, delivers great
        product, and always looking for new challenges. When am not coding am
        either travelling, reading or watching memes.
      </p>
      <p className="mt-[15px] text-[15px] font-semibold text-[#0C1927] dark:text-[#D9D9D9] md:mt-[25px] md:text-[25px] lg:mt-[25px] lg:text-[25px] 2xl:mt-[25px] 2xl:text-[25px]">
        Currently working at Fourbic
      </p>
      <div className="mt-[20px] flex flex-row items-center justify-start gap-11 md:mt-[30px] lg:mt-[30px] 2xl:mt-[30px]">
        <Button className="h-[40px] w-[200px] rounded-[120px] bg-[#4055C0] hover:bg-[#4d66e3] md:h-[60px] md:w-[250px] lg:h-[60px] lg:w-[250px] 2xl:h-[60px] 2xl:w-[250px]">
          <h1 className="text-[12px] text-[#ffffff] md:text-[15px] lg:text-[15px] 2xl:text-[15px]">
            Connect With Me
          </h1>
        </Button>
      </div>
    </div>
  );
}
