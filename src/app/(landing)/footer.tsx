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
];

export function Footer() {
  return (
    <section className="relative">
      <div className=" mx-10 mb-5 flex flex-row items-center justify-start rounded-full bg-[#0C1927] p-6 gap-32">
        <div className="flex flex-row gap-8 items-center ">
        <Avatar className="h-32 w-32">
          <AvatarImage
            src="http://emiliok.vercel.app/profile.png"
            alt="@profiles"
            height={300}
            width={300}
          />
          <AvatarFallback>PR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-[25px] font-bold text-white">
            I'm Emilio Kariuki
          </h1>
          <p className="text-[15px] font-medium text-[#D9D9D9]">
            A Software Engineer based in Nyeri, Kenya
          </p>
        </div>
        </div>

        <div className="flex flex-col items-start justify-start">
          <div className="grid grid-cols-2 gap-10">
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
        </div>

        <Button className="h-[70px] w-[300px] rounded-[120px] bg-white  hover:bg-[#D9D9D9]">
          <h1 className="text-[18px] text-[#0C1927]">Talk With Me</h1>
        </Button>

      </div>
    </section>
  );
}
