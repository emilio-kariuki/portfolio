/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Profile from "~/assets/profile.png";
import { Button } from "~/components/ui/button";
import { interRegular, quickSand } from "~/lib/font";

import { GithubIcon, LinkedinIcon, TwitterIcon, } from "lucide-react";

import { useTheme } from "next-themes";

export function Introduction() {
  return (
    <section className="relative">
      <div className="flex flex-row gap-8 py-10 sm:flex-col md:flex-row  lg:flex-row ">
        <MeCard />
        <div className="hidden lg:flex md:flex 2xl:flex lg:flex-col md:flex-col 2xl:flex-col gap-2">
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            className="rounded-[20px] "
          />
          <div className="flex flex-col gap-2 mt-5">
            <SocialLine children={
              <TwitterIcon size={20} />
            } title="Follow on Twitter" />
            <SocialLine children={
              <GithubIcon size={20} />
            } title="Follow on Github" />
            <SocialLine children={
              <LinkedinIcon size={20} />
            } title="Follow on LinkedIn" />

          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLine(props: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className="block lg:flex md:flex 2xl:flex flex-row items-center justify-start gap-5">
      {props.children}
      <h3 className={`text-[14px] font-normal light:text-black dark:text-white ${interRegular.className}`}>{props.title}</h3>
    </div>
  )
}

function MeCard() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col items-center lg:items-start md:items-start 2xl:items-start  rounded-[20px]  border-[#363535] bg-transparent   px-4 py-6 lg:px-16 lg:py-16 md:px-16 md:py-16 2xl:px-16 2xl:py-16 border-[0.3px]  mx-h-[1000px] `}
    >
      <h1
        className={`light:text-[#0C1927] text-center lg:text-start md:text-start 2xl:text-start text-[25px] lg:text-[40px] md:text-[40px] 2xl:text-[40px] font-bold dark:text-white ${quickSand.className}`}
      >
        Hi, am Emilio, a Software Engineer, with 2+ Years of Experience
      </h1>
      <p className="light: mt-[20px] text-center lg:text-start md:text-start 2xl:text-start text-[14px] font-light lg:font-medium md:font-medium 2xl:font-medium text-[#0C1927] dark:text-[#D9D9D9]">
        I am software engineer who codes like a boss, learns like a sponge, and
        solves problems like a pro. I can make awesome apps for web and mobile
        using cool tech and magic. I work well with others, delivers great
        product, and always looking for new challenges. When am not coding am
        either travelling, reading or watching memes.
      </p>
      <p className="mt-[15px] lg:mt-[25px] md:mt-[25px] 2xl:mt-[25px] text-[15px] lg:text-[25px] md:text-[25px] 2xl:text-[25px] font-semibold text-[#0C1927] dark:text-[#D9D9D9]">
        Currently working at Fourbic
      </p>
      <div className="mt-[20px] lg:mt-[30px] md:mt-[30px] 2xl:mt-[30px] flex flex-row items-center justify-start gap-11">
        <Button className="h-[40px] lg:h-[60px] md:h-[60px] 2xl:h-[60px] w-[200px] lg:w-[250px] md:w-[250px] 2xl:w-[250px] rounded-[120px] bg-[#4055C0] hover:bg-[#4d66e3]">
          <h1 className="text-[12px] lg:text-[15px] md:text-[15px] 2xl:text-[15px] text-[#ffffff]">Connect With Me</h1>
        </Button>

      </div>
    </div>
  );
}
