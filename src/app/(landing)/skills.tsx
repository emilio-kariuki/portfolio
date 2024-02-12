/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { inter, quickSand } from "~/lib/font";
import Image from "next/image";
import { Check } from "lucide-react";

import Android from "~/assets/android.svg";
import Web from "~/assets/web.svg";
import Backend from "~/assets/backend.svg";
import Design from "~/assets/design.svg";
import React from "react";

const stacks = [
  {
    name: "Mobile Development",
    icon: Android,
    tasks: [
      "Experience in creating both android and ios applications with a pleasing UI and UX experience.",
      "Using Flutter to deploy cross-platform application for android, ios , desktop and web.",
      "Building with react native, using react native expo library using typescript and javascript.",
      "Deploying the android applications to Google Play store both for production and testing purposes.",
      "Deploying the android applications to Google Play store both for production and testing purposes.",
    ],
  },
  {
    name: "Web Development",
    icon: Web,
    tasks: [
      "Experience in creating both android and ios applications with a pleasing UI and UX experience.",
      "Using Flutter to deploy cross-platform application for android, ios , desktop and web.",
      "Building with react native, using react native expo library using typescript and javascript.",
      "Deploying the android applications to Google Play store both for production and testing purposes.",
      "Deploying the android applications to Google Play store both for production and testing purposes.",
    ],
  },
  {
    name: "Backend Development",
    icon: Backend,
    tasks: [
      "Experience in creating both android and ios applications with a pleasing UI and UX experience.",
      "Using Flutter to deploy cross-platform application for android, ios , desktop and web.",
      "Building with react native, using react native expo library using typescript and javascript.",
      "Deploying the android applications to Google Play store both for production and testing purposes.",
      "Deploying the android applications to Google Play store both for production and testing purposes.",
    ],
  },
  {
    name: "Mobile & Web Design",
    icon: Design,
    tasks: [
      "Experience in creating both android and ios applications with a pleasing UI and UX experience.",
      "Using Flutter to deploy cross-platform application for android, ios , desktop and web.",
      "Building with react native, using react native expo library using typescript and javascript.",
      "Deploying the android applications to Google Play store both for production and testing purposes.",
      "Deploying the android applications to Google Play store both for production and testing purposes.",
    ],
  },
];

export function Skills() {
  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center py-16 ">
        <h1
          className={`text-[40px] font-bold text-[#0C1927] ${quickSand.className}`}
        >
          Skills & Stacks
        </h1>
        <p
          className={`text-[15px] font-bold text-[#4055C0] ${quickSand.className}`}
        >
          Preview and Browse my Skills
        </p>
        <SkillCard />
      </div>
    </section>
  );
}

function SkillCard() {
  return (
    <div className="gap:6 m-10 grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:gap-5">
      {stacks.map((stack, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-[40px] bg-[#0C1927] px-10 py-10"
        >
          <div
            className={`rounded-full ${index === 0 ? "bg-[#4055C0]" : index === 1 ? "bg-[#FF4901]" : index === 2 ? "bg-[#0AB987]" : index === 3 ? "bg-[#B80E42]" : "bg-[#FF4901]"} p-4`}
          >
            <Image src={stack.icon} alt={stack.name} height={80} width={80} />
          </div>
          <h1
            className={`py-3 text-3xl font-semibold text-white ${quickSand.className}`}
          >
            {stack.name}
          </h1>
          <ul
            className={`text-[16px] font-regular mt-2 text-white ${quickSand.className}`}
          >
            {stack.tasks.map((task, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-row items-center justify-center">
                  <div className="mr-5 items-center justify-center rounded-full bg-[#21C55E] p-1">
                    <Check size={15} />
                  </div>
                  <li className="py-2">{task}</li>
                </div>
              </React.Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
