"use client";
import Link from "next/link";
import { useState } from "react";

const listMenu = [
  {
    name: "Post",
    to: "/profile",
  },
  {
    name: "Replies",
    to: "/profile/replies",
  },
  {
    name: "Media",
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

const ProfileMenu = () => {
  const [selectIndex, setSelectIndex] = useState(0);

  const handleClick = (i: any) => {
    setSelectIndex(i);
  };

  return (
    <div className="flex justify-between">
      {listMenu.map(({ name, to }, i) => (
        <Link
          className={`${i === selectIndex ? "pb-2 border-b-2 border-sky-500" : ""} `}
          key={i}
          href={to}
          onClick={() => handleClick(i)}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default ProfileMenu;
