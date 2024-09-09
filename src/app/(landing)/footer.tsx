/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

const footerRoutes = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  // {
  //   name: "Blogs",
  //   href: "/blogs",
  // },
];

export function Footer() {
  return (
    <section className="relative">
      <div className="block lg:flex md:flex xl:flex lg:flex-row md:flex-row xl:flex-row items-center justify-center  lg:justify-between md:justify-between xl:justify-between  light:bg-[#F6F7FE]  py-6 border-t-[0.4px] border-[#4d4f5b] ">
        <div className="flex flex-col items-center lg:items-start md:items-start xl:items-start 2xl:items-start justify-start gap-2">
          <div className="grid grid-cols-3 gap-10 ">
            {footerRoutes.map((route, index) => (
              <a
                key={index}
                href={route.href}
                className="text-[17px] font-medium dark:text-[#D9D9D9] dark:hover:text-white light:text-[#0C1927] light:hover:text-[#4055C0]"
              >
                {route.name}
              </a>
            ))}
          </div>

          <span className="text-center text-[13px] text-gray-600">
            &copy; {new Date().getFullYear()} Emilio Kariuki. All rights reserved.
          </span>
        </div>
        <div className="flex flex-row items-center justify-center mt-5 lg:mt-0 md:mt-0 xl:mt-0 2xl:mt-0">
          <Button className="px-10 py-4 rounded-[120px] dark:bg-[#4055C0]  hover:bg-[#4b64e2]">
            <h1 className="text-[12px] lg:text-[14px] md:text-[14px] 2xl:text-[14px] font-medium light:text-[#0C1927] dark:text-white">Talk With Me</h1>
          </Button>
        </div>
      </div>
    </section>
  );
}
