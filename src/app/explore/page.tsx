import { getData } from "@/action/action";
import UserExplore from "./User";

export default async function Explore() {
  const url = `/user`;
  const data = await getData(url);
  return (
    <>
      <UserExplore data={data} />
    </>
  );
}
