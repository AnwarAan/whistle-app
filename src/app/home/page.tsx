import Post from "@/components/macro/Post";
import post from "@/data/post";

const Home = () => {
  return (
    <div>
      <Post data={post} />
    </div>
  );
};

export default Home;
