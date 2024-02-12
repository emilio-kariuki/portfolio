import Profile from "~/assets/profile.png";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "~/components/ui/avatar"

export function Logo() {
    return (
        <Avatar>
            <AvatarImage src="https://" alt="@shadcn" />
            <AvatarFallback>PR</AvatarFallback>
        </Avatar>
    );
}
