/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { inter, quickSand } from "~/lib/font";
import Profile from "~/assets/profile.png";
import { Button } from "~/components/ui/button";

import Twitter from "~/assets/twitter_white.svg";
import Github from "~/assets/github_white.svg";
import LinkedIn from "~/assets/linkedin_white.svg";

export function Introduction() {
  return (
    <section className="relative">
      <div className="flex flex-row  gap-8 px-10 py-10 sm:flex-col md:flex-row  lg:flex-row ">
        <MeCard />
        <Image
          src={Profile}
          alt="Profile"
          height={550}
          width={400}
          className="rounded-[40px] "
        />
      </div>
    </section>
  );
}

function MeCard() {
  return (
    <div
      className={`flex flex-col rounded-[40px] border-[0.1px] border-[#4d4f5b] bg-[#0C1927] px-16 py-16 `}
    >
      <h1 className={`text-[40px] font-bold text-white ${quickSand.className}`}>
        Hi, am Emilio, a Software Engineer, with 2+ Years of Experience
      </h1>
      <p className="mt-[40px] text-[14px] font-medium text-[#D9D9D9]">
        I am software engineer who codes like a boss, learns like a sponge, and
        solves problems like a pro. I can make awesome apps for web and mobile
        using cool tech and magic. I work well with others, delivers great
        product, and always looking for new challenges. When am not coding am
        either travelling, reading or watching memes.
      </p>
      <p className="mt-[50px] text-[25px] font-semibold text-[#D9D9D9]">
        Currently working at Fourbic
      </p>
      <div className="mt-[100px] flex flex-row items-center justify-start gap-11">
        <Button className="h-[70px] w-[400px] rounded-[120px] bg-[#4055C0] hover:bg-[#4d66e3]">
          <h1 className="text-[18px] text-[#ffffff]">Connect Me</h1>
        </Button>
        <Image src={Github} alt="@github" className="w-[45px]= h-[45px]" />
        <Image src={LinkedIn} alt="@github" className="h-[45px] w-[45px]" />
        <Image src={Twitter} alt="@github" className="h-[40px] w-[40px]" />
      </div>
    </div>
  );
}
