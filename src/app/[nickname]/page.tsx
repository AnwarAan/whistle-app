import { getData } from "@/action/action";
import UserDetail from "@/components/feature/UserDetail";

export default async function ExploreDetail({ params }: { params: { nickname: string } }) {
  const url = `/user/nickname/${params.nickname}`;
  const data = await getData(url);
  return (
    <>
      <UserDetail data={data} />
    </>
  );
}
