import {
  HomeIcon,
  MenuIcon,
  Book,
  Filter,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileMenu() {
  const path = usePathname();

  return (
    <div className="block md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <MenuIcon className="h-6 w-6 light:text-[#4055C0]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <HomeIcon className="mr-2 h-4 w-4" />
              <Link href={"/"}>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Filter className="mr-2 h-4 w-4" />
              <Link href={"/projects"}>Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Book className="mr-2 h-4 w-4" />
              <Link href={"/blogs"}>Blogs</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
