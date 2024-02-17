/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { inter, quickSand } from "~/lib/font";
import Profile from "~/assets/profile.png";
import { Button } from "~/components/ui/button";

import Twitter_white from "~/assets/twitter_white.svg";
import Github_white from "~/assets/github_white.svg";
import LinkedIn_white from "~/assets/linkedin_white.svg";

import Twitter_dark from "~/assets/twitter.svg";
import Github_dark from "~/assets/github.svg";
import LinkedIn_dark from "~/assets/linkedin.svg";
import { useTheme } from "next-themes";

export function Introduction() {
  return (
    <section className="relative">
      <div className="flex flex-row  gap-8 py-10 sm:flex-col md:flex-row  lg:flex-row ">
        <MeCard />
        <div className="flex flex-col gap-2">
        <Image
          src={Profile}
          alt="Profile"
          width={1000}
          className="rounded-[20px] "
        />
        <div className="flex flex-col gap-2 mt-5">
        <SocialLine icon={Twitter_dark} title="Follow on Twitter" />
        <SocialLine icon={Github_dark} title="Follow on Github" />
        <SocialLine icon={LinkedIn_dark} title="Follow on LinkedIn" />

        </div>
        </div>
      </div>
    </section>
  );
}

function SocialLine(props:{
  title: string,
  icon: string
}){
  return (
    <div className="flex flex-row items-center justify-start gap-5">
      <Image
        src={props.icon}
        alt="twitter"
        height={20}
        width={20}
        className="fill-white"
      />
       <h3 className="text-[16px] font-medium text-black">{props.title}</h3>
      </div>
  )
}

function MeCard() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col rounded-[40px] border-[#363535] bg-[#F5F6F8]  px-16 py-16 dark:border-[0.1px] dark:bg-[#030b20] mx-h-[1000px] `}
    >
      <h1
        className={`light:text-[#0C1927] text-[40px] font-bold dark:text-white ${quickSand.className}`}
      >
        Hi, am Emilio, a Software Engineer, with 2+ Years of Experience
      </h1>
      <p className="light: mt-[20px] text-[14px] font-medium text-[#0C1927] dark:text-[#D9D9D9]">
        I am software engineer who codes like a boss, learns like a sponge, and
        solves problems like a pro. I can make awesome apps for web and mobile
        using cool tech and magic. I work well with others, delivers great
        product, and always looking for new challenges. When am not coding am
        either travelling, reading or watching memes.
      </p>
      <p className="light: mt-[25px] text-[25px] font-semibold text-[#0C1927] dark:text-[#D9D9D9]">
        Currently working at Fourbic
      </p>
      <div className="mt-[30px] flex flex-row items-center justify-start gap-11">
        <Button className="h-[55px] w-[250px] rounded-[120px] bg-[#4055C0] hover:bg-[#4d66e3]">
          <h1 className="text-[15px] text-[#ffffff]">Connect With Me</h1>
        </Button>

      </div>
    </div>
  );
}
