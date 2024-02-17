/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { inter, interRegular, quickSand, quickSandRegular } from "~/lib/font";
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
      "Using code push to deploy updates to the android applications."
    ],
  },
  {
    name: "Web Development",
    icon: Web,
    tasks: [
      "Proficient in creating responsive web applications using react, nextjs, gatsby and other modern web technologies.",
      "Experience with integrating web applications with third-party APIs and services.",
      "Using tailwindcss to create responsive and modern web applications.",
      "Deploying web applications to vercel, netlify and other modern web hosting platforms.",
      "CI/CD with github actions and other modern CI/CD tools.",
    ],
  },
  {
    name: "Backend Development",
    icon: Backend,
    tasks: [
      "Experience in creating backend services using nodejs, expressjs, nestjs and other modern backend technologies.",
      "Creating and deploying RESTful and GraphQL APIs.",
      "Experience with creating and deploying microservices.",
      "Using docker and kubernetes to deploy and manage backend services.",
      "Experience with creating and deploying serverless functions.",
    ],
  },
  {
    name: "Mobile & Web Design",
    icon: Design,
    tasks: [
      "Experience in creating modern and responsive UI/UX designs for mobile and web applications.",
      "Using figma and adobe XD to create and prototype UI/UX designs.",
      "Creating and deploying modern and responsive web designs using tailwindcss.",
      "Experience with creating and deploying modern and responsive mobile designs using flutter and react native.",
      "Creating and deploying modern and responsive web designs using tailwindcss.",
    ],
  },
];

export function Skills() {
  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center py-16 ">
        <h1
          className={`light:text-[#0C1927] text-[40px] font-bold dark:text-white ${quickSand.className}`}
        >
          Skills & Stacks
        </h1>
        <p
          className={`text-[15px] font-bold text-[#4055C0] ${quickSand.className} mb-10`}
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-5  md:gap-8 lg:grid-cols-2 ">
      {stacks.map((stack, index) => (
        <div
          key={index}
          className="flex transform cursor-pointer flex-col items-center justify-center rounded-[20px] dark:border-[0.2px] border-[#363535]  bg-[#F5F6F8] px-4 py-6 lg:px-16 lg:py-16 md:px-16 md:py-16 2xl:px-16 2xl:py-16
          dark:bg-[#030b20]"
        >
          <div
            className={`rounded-full ${index === 0 ? "bg-[#4055C0]" : index === 1 ? "bg-[#FF4901]" : index === 2 ? "bg-[#0AB987]" : index === 3 ? "bg-[#B80E42]" : "bg-[#FF4901]"} p-4`}
          >
            <Image src={stack.icon} alt={stack.name} className="h-[50px] w-[50px] lg:h-[80px] lg:w-[80px] md:h-[80px] md:w-[80px] 2xl:h-[80px] 2xl:w-[80px]  " />
          </div>
          <h1
            className={`light:text-[#0C1927] py-2 text-[20px] lg:text-[30px] md:text-[30px] 2xl:text-[30px] font-semibold dark:text-white ${quickSand.className}`}
          >
            {stack.name}
          </h1>
          <ul
            className={`light:text-[#0C1927] font-light lg:font-medium md:font-medium 2xl:font-medium text-[14px] lg:text-[16px] md:text-[16px] 2xl:text-[16px] dark:text-white ${quickSandRegular.className}`}
          >
            {stack.tasks.map((task, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-row items-center justify-start">
                  <div className="mr-3 items-center justify-center rounded-full bg-[#21C55E] p-1">
                    <Check size={12} />
                  </div>
                  <li className="py-2 font-light lg:font-medium md:font-medium 2xl:font-medium">{task}</li>
                </div>
              </React.Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
