import { getData } from "@/action/action";
import PostList from "./PostList";
import Posting from "./Posting";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Authentication } from "@/components/feature/Authentication";

export default async function Home() {
  const user = await Authentication();
  const url = `/post`;
  const data = await getData(url);

  return (<div className="flex flex-col w-full">
    <Container>
      <Posting imageId={user.imageId} />
    </Container>
    <Separator />
    <Container>
      <PostList data={data} />
    </Container>
  </div>
  );
}
