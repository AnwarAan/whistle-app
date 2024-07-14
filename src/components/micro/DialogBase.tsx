"use client";
import { useAppSelector } from "@/store/hook";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../ui/dialog";
import { useEffect, useRef } from "react";
import { random } from "@/store/global";

const DialogBase = ({
  childrenTrigger,
  childrenContent,
  title,
  description = "",
  onClick,
}: {
  childrenTrigger: Readonly<React.ReactNode>;
  childrenContent: Readonly<React.ReactNode>;
  childrenClose?: Readonly<React.ReactNode>;
  title?: string;
  description?: string;
  onClick?: () => void;
}) => {
  const refClick = useRef<HTMLButtonElement>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>{childrenTrigger}</DialogTrigger>
      <DialogContent onClick={onClick}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {childrenContent}
        <DialogClose ref={refClick}></DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBase;
