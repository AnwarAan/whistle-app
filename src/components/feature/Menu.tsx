import { listMenu } from "./ListMenu";
import Link from "next/link";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import Logout from "@/app/auth/Logout";
import Avatar from "./Avatar";
import { Authentication } from "./Authentication";
import { Label } from "../ui/label";

export default async function ListMenu() {
  const data = await Authentication();
  return (
    <div>
      {listMenu.map(({ icon, name, to }, i) => (
        <Link
          href={`/${to}`}
          key={i}
          className="flex items-center p-4 space-x-4 hover:bg-blue-200 ease-in-out duration-200 dark:hover:bg-slate-700 rounded-full cursor-pointer"
        >
          <div className="text-blue-500 dark:text-white"> {icon}</div>
          <span>{name}</span>
        </Link>
      ))}
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex items-center space-x-1">
            <Avatar imageUrl="" />
            <div className="flex flex-col space-y-1">
              <Label className="">{data.name}</Label>
              <Label className="text-slate-500">{data.username}</Label>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <Logout />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
