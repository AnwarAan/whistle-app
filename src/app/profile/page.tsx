import { getData } from "@/action/action";
import PostList from "../home/PostList";

export default async function Profile() {
  const url = `/post`;
  const data = await getData(url);
  return (
    <>
      <PostList data={data} />
    </>
  );
}
