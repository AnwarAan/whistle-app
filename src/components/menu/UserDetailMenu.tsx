"use client";
import Link from "next/link";
import { useState } from "react";

const listMenu = [
  {
    name: "Post",
    to: "/profile",
  },
  {
    name: "Reply",
    to: "/profile/media",
  },
  {
    name: "Article",
    to: "/profile/article",
  },
  {
    name: "Likes",
    to: "/profile/likes",
  },
];

export default function UserDetailMenu() {
  const [selectIndex, setSelectIndex] = useState(0);

  const handleClick = (i: any) => {
    setSelectIndex(i);
  };

  return (
    <div className="flex justify-between">
      {listMenu.map(({ name, to }, i) => (
        <Link className="space-y-2" key={i} href={to} onClick={() => handleClick(i)}>
          <p className="px-2">{name}</p>
          <div className={`${i === selectIndex ? "border-2 rounded-full border-[#1DA1F2]" : ""} `}></div>
        </Link>
      ))}
    </div>
  );
}
