import ListMenu from "@/components/feature/Menu";
import Link from "next/link";

interface Props {
  children: Readonly<React.ReactNode>;
}

const Header = ({ children }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-col w-1/4">
        <Link href={"/home"} className="text-4xl mx-auto font-bold font-serif ">
          BRAND
        </Link>
        <div className="mx-auto text-base lg:text-xl my-auto">
          <ListMenu />
        </div>
      </div>

      <div className="flex w-2/4 border-r border-l border-sky-500 overflow-scroll h-screen">{children}</div>
      <div className="flex w-1/4">
        <h1>Suggestion</h1>
      </div>
    </div>
  );
};

export default Header;
