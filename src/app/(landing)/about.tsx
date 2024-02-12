/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Download } from "lucide-react";
import { Button } from "~/components/ui/button";
import { quickSand } from "~/lib/font";
import Flutter from "~/assets/flutter.svg";
import Native from "~/assets/native.svg";
import Next from "~/assets/next.svg";
import Figma from "~/assets/figma.svg";
import TypeScript from "~/assets/typescript.svg";
import Git from "~/assets/git.svg";
import Postgres from "~/assets/postgres.svg";
import Image from "next/image";

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
    name: Figma,
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

export function About() {
  return (
    <section className="relative">
      <div className="mx-10 flex flex-col rounded-[40px] bg-[#0C1927]  px-16  py-10">
        <h1
          className={`text-[40px] font-bold text-white ${quickSand.className}`}
        >
          About Me
        </h1>
        <p className="mt-[40px] text-[16px] font-medium text-[#D9D9D9]">
          👾 Hey there! I’m Emilio 👾, a code sorcerer from Kenya’s tech
          wonderland. With 2+ years of enchanting experience, I’ve spun digital
          spells that dance across screens. My web potions? Top-notch! My mobile
          elixirs? Pure magic! 🚀 When the moon rises, I wield my keyboard like
          Excalibur, crafting apps that sparkle. Off-duty, I sip chai, chase
          sunsets, and plot world domination (or at least a killer app). Let’s
          connect—tech talk, cat memes, or inter-dimensional travel tips, I’m
          all ears (and a few lines of code). Remember, bugs are just
          misunderstood features waiting for a little magic. 🪄✨
        </p>
        <div className="gap:6 my-[65px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-7 lg:gap-16">
          {stackIcons.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-[20px] bg-[#12243a] py-6 border-[0px] border-[#4055C0] hover:bg-[#D9D9D9] hover:border-transparent"
            >
              <Image
                src={stack.name}
                alt="stack"
                height={ 45}
                width={45}
              />
            </div>
          ))}
        </div>
        <Button className="mt-1 flex h-[60px] w-[300px]  flex-row gap-3 rounded-[120px] bg-[#4055D0] hover:bg-[#4055D0]">
          <h1 className="text-[18px] text-white">Download Resume</h1>
          <Download size={20} />
        </Button>
      </div>
    </section>
  );
}
