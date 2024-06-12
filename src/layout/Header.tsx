import ListMenu from "@/components/macro/Menu";

interface Props {
  children: Readonly<React.ReactNode>;
}

const Header = ({ children }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-col w-1/4 ">
        <span className="text-4xl mx-auto font-bold font-serif ">BRAND</span>
        <div className="mx-auto text-base lg:text-xl my-auto">
          <ListMenu />
        </div>
      </div>

      <div className="flex w-1/2 px-8 border-r border-l border-sky-500 overflow-scroll h-screen">{children}</div>
      <div className="flex w-1/4 mx-auto">
        <h1>Suggestion</h1>
      </div>
    </div>
  );
};

export default Header;
