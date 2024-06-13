import { Button } from "../ui/button";

type Color = "primary" | "dark" | "white" | "slate" | "basic";

const ButtonBase = ({
  name,
  color = "basic",
  icon,
}: {
  name: string;
  color?: Color;
  icon?: Readonly<React.ReactNode>;
}) => {
  const bg_color =
    color === "primary"
      ? "bg-[#1DA1F2] dark:bg-[#1DA1F2] dark:hover:bg-[#1DA1F2]/80 hover:bg-[#1DA1F2]/80 text-white dark:text-white"
      : color === "dark"
      ? "dark:bg-slate-800 bg-slate-800 hover:dark:bg-slate-800/80 hover:bg-slate-800/80 text-white dark:text-white"
      : color === "basic"
      ? "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80"
      : "bg-slate-200";

  return (
    <Button
      className={`${bg_color} hover:bg-[#1DA1F2] h-10 ease-in-out duration-300 rounded-full items-center space-x-2 text-base lg:text-lg w-full`}
      size={"lg"}
    >
      {icon ? <span>{icon}</span> : ""}
      <span>{name}</span>
    </Button>
  );
};

export default ButtonBase;
