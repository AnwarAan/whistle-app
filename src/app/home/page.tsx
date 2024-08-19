import { getData } from "@/action/action";
import PostList from "./PostList";
import Posting from "./Posting";
import Container from "@/components/ui/container";

export default async function Home() {
  const url = `/post`;
  const data = await getData(url);
  return (
    <Container>
      <div className="flex flex-col">
        <Posting />
        <PostList data={data} />
      </div>
    </Container>
  );
}
