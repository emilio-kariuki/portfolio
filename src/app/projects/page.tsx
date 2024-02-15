/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { inter, quickSand, quickSandRegular } from "~/lib/font";
import Picsa from "~/assets/picsa.png";
import GDSC from "~/assets/dsc.svg";
import Image from "next/image";
import { Footer } from "../(landing)/footer";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Link } from "lucide-react";
const projects = [
  {
    name: "GDSC Dekut",
    dlink: "gdsc.community.dev",
    description:
      "A community of developers at DeKUT, where we learn and grow together.",
    image: "http://emiliok.vercel.app/dsc.svg",
    link: "https://gdsc.community.dev/dekut/",
    stack: ["Flutter", "Firebase", "Git"],
  },
  {
    name: "Picsa",
    dlink: "picsa.pro",
    description:
      "A photo sharing app that allows users to share their photos with the world.",
    image: "http://emiliok.vercel.app/picsa.png",
    link: "https://www.picsa.pro/",
    stack: ["Next.js", "Supabase", "Expo"],
  },
  {
    name: "Status Saver",
    dlink: "gdsc.community.dev",
    description:
      "A community of developers at DeKUT, where we learn and grow together.",
    image: "http://emiliok.vercel.app/dsc.svg",
    link: "https://gdsc.community.dev/dekut/",
    stack: ["Flutter", "Firebase", "Git"],
  },
  {
    name: "Movi",
    dlink: "picsa.pro",
    description:
      "A photo sharing app that allows users to share their photos with the world.",
    image: "http://emiliok.vercel.app/picsa.png",
    link: "https://www.picsa.pro/",
    stack: ["Next.js", "Supabase", "Expo"],
  },
  {
    name: "Movi",
    dlink: "picsa.pro",
    description:
      "A photo sharing app that allows users to share their photos with the world.",
    image: "http://emiliok.vercel.app/dsc.svg",
    link: "https://www.picsa.pro/",
    stack: ["Next.js", "Supabase", "Expo"],
  },
];

export default function Projects() {
  return (
    <section className="relative">
      <div className="mx-[170px] my-10 flex flex-col">
        <h1
          className={`light:text-[#0C1927] w-[1000px] text-[40px] dark:text-white  ${quickSand.className}`}
        >
          A testament to my engineering passion and problem-solving prowess.
        </h1>
        <p className="light:text-[#0C1927] my-5 w-[700px] text-[20px] dark:text-[#827c7c]">
          Dynamic portfolio showcasing my engineering passion and
          problem-solving prowess through innovative projects. Join me on a
          journey through tech realms where code weaves tales of innovation and
          excellence.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start gap-2"
            >
              <div className="rounded-[15px] border-[0.2px] border-[#363535] p-5 hover:bg-[#ffffff] dark:hover:bg-[#030b20]">
                <Avatar className="mb-3 h-[45px] w-[45px]">
                  <AvatarImage src={project.image} alt="@profile" />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <div className="flex flex-row items-center justify-start gap-2 ">
                  <h1
                    className={`light:text-[#0C1927] text-[25px] font-bold dark:text-white ${quickSand.className}`}
                  >
                    {project.name}
                  </h1>
                </div>
                <p className="light:text-[#0C1927] py-2 text-[14px] dark:text-[#827c7c]">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-row items-center justify-start gap-2 ">
                  {project.stack.map((stack, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center rounded-[20px] bg-[#e6e7ea] px-4 py-2 dark:bg-[#151d41] "
                    >
                      <span
                        key={index}
                        className={`light:text-[#0C1927] light:text-[#0C1927] text-[12px] font-light dark:text-[#e2dcdc] ${quickSandRegular.className}`}
                      >
                        {stack}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-row gap-2 items-center justify-start">
                  <Link size={14} color="#0AB987"  />
                  <a
                    href={project.link}
                    className="light:text-[#4055C0]  text-[14px] font-bold dark:text-[#0AB987]"
                  >
                    {project.dlink}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-24"></div>
        <Footer />
      </div>
    </section>
  );
}
