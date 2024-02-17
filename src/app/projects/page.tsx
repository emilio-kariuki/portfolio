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
      <div className="mx-[15px] lg:mx-[170px] md:mx-[90px] my-10 flex flex-col">
        <h1
          className={`light:text-[#0C1927] mx-auto mx-w-[1000px] text-center lg:text-start md:text-start xl:text-start text-[30px] lg:text-[40px] md:text-[40px] xl:text-[40px] dark:text-white  ${quickSand.className}`}
        >
          A testament to my engineering passion and problem-solving prowess.
        </h1>
        <p className="light:text-[#0C1927] mt-5 lg:mt-0 md:mt-0 xl:mt-0 2xl:mt-0 my-2 lg:my-5 md:my-5 mx-auto mx-w-[700px] text-center lg:text-start md:text-start xl:text-start  text-[16px] lg:text-[20px] md:text-[20px] xl:text-[20px] 2xl:text-[20px] dark:text-[#827c7c]">
          Dynamic portfolio showcasing my engineering passion and
          problem-solving prowess through innovative projects. Join me on a
          journey through tech realms where code weaves tales of innovation and
          excellence.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start gap-2"
            >
              <div className="rounded-[8px] border-[0.2px] p-4 hover:bg-[#ffffff] dark:hover:bg-[#030b20] border-[#6B6A6A] hover:shadow-xl transition-all duration-300 ease-in-out ">

                <div className="flex flex-row items-center justify-start gap-2 ">
                  <h1
                    className={`light:text-[#0C1927] text-[20px] lg:text-[25px] md:text-[25px] xl:text-[25px] font-bold dark:text-white ${quickSand.className}`}
                  >
                    {project.name}
                  </h1>
                </div>
                <p className="light:text-[#0C1927] py-1 text-[14px] dark:text-[#827c7c]">
                  {project.description}
                </p>
                <div className="mt-1 flex flex-row items-center justify-start gap-2 mb-5">
                  {project.stack.map((stack, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center rounded-[5px] bg-[#e6e7ea] px-2 py-1 dark:bg-[#151d41] "
                    >
                      <span
                        key={index}
                        className={`light:text-[#0C1927] light:text-[#0C1927] text-[10px] font-light dark:text-[#e2dcdc] ${quickSandRegular.className}`}
                      >
                        {stack}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mx-auto h-[160px] xl:h-[240px] relative">
                  <Image
                    src={project.image}
                    alt="@project_image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[8px]"
                  />
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
