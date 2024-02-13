/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

const footerRoutes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
];

export function Footer() {
  return (
    <section className="relative">
      <div className="flex flex-row items-center  justify-between  light:bg-[#F6F7FE]  py-6 border-t-[0.4px] border-[#4d4f5b] ">
        <div className="flex flex-col items-start justify-start gap-2">
        <div className="grid grid-cols-5 gap-10 ">
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
          &copy; {new Date().getFullYear()} Emilio Kariuki . All rights reserved.
        </span>
        </div>
        <Button className="h-[55px] w-[230px] rounded-[120px] dark:bg-[#4055C0]  hover:bg-[#4b64e2]">
          <h1 className="text-[14px] font-medium light:text-[#0C1927] dark:text-white">Talk With Me</h1>
        </Button>
      </div>
    </section>
  );
}
