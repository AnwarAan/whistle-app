import { listMenu } from "../listing/ListMenu";
import Link from "next/link";

const ListMenu = () => {
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
    </div>
  );
};

export default ListMenu;
