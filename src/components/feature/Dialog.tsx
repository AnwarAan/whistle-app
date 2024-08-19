"use client";
import { cn } from "@/lib/utils";
import { Dialog as DialogUi, DialogContent, DialogTrigger } from "../ui/dialog";
import Image from "next/image";

type Props = {
  className?: string;
  icon?: any;
  childrenTrigger: Readonly<React.ReactNode>;
  childrenContent: Readonly<React.ReactNode>;
};

export function Dialog({ childrenTrigger, childrenContent, className, icon }: Props) {
  return (
    <DialogUi>
      {icon ? (
        <DialogTrigger
          className={cn(
            "dark:bg-[#1DA1F2] dark:hover:bg-[#1DA1F2]/80 ease-in-out duration-300 rounded-full w-[280px] h-10 px-4 border-2 border-slate-100",
            className
          )}
        >
          <span className="flex justify-center space-x-2">
            <p>{childrenTrigger}</p>
            <Image className="" src={icon} width={20} height={20} alt={`icon-${icon}`} />
          </span>
        </DialogTrigger>
      ) : (
        <DialogTrigger
          className={cn(
            "dark:bg-[#1DA1F2] dark:hover:bg-[#1DA1F2]/80 bg-[#1DA1F2] hover:bg-[#1DA1F2]/80 text-white ease-in-out duration-300 rounded-full w-[280px] h-10 px-4 dark:border-slate-100",
            className
          )}
        >
          {childrenTrigger}
        </DialogTrigger>
      )}
      <DialogContent>{childrenContent}</DialogContent>
    </DialogUi>
  );
}
