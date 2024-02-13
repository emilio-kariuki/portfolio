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
      <div className=" mx-10  flex flex-row items-center  justify-between bg-[#0C1927]  p-6 border-t-[0.4px] border-[#4d4f5b] ">
        <div className="flex flex-col items-start justify-start gap-2">
        <div className="grid grid-cols-5 gap-10 ">
          {footerRoutes.map((route, index) => (
            <a
              key={index}
              href={route.href}
              className="text-[17px] font-medium text-[#D9D9D9] hover:text-white"
            >
              {route.name}
            </a>
          ))}
        </div>
       
        <span className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Emilio Kariuki . All rights reserved.
        </span>
        </div>
        <Button className="h-[55px] w-[230px] rounded-[120px] bg-white  hover:bg-[#D9D9D9]">
          <h1 className="text-[16px] font-semibold text-[#0C1927]">Talk With Me</h1>
        </Button>
      </div>
    </section>
  );
}
