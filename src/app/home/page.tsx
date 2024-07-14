// "use client";
import Post from "@/components/macro/Post";
import post from "@/data/post";
import Posting from "@/components/macro/Posting";
import FormBase, { FormInputText } from "@/components/micro/FormBase";
import { useZod } from "@/lib/CustomHook";
import { postingSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";

const Home = async () => {
  // const defaultLogin = { email: "", password: "" };
  // const form = useZod(postingSchema, defaultLogin);

  return (
    <div>
      {/* <FormBase form={form} url="">
        <Posting />
        <FormInputText className="rounded-2xl text-xl p-4" form={form} name="content" />
        <Button className="rounded-full">Post</Button>
      </FormBase> */}
      <Post data={post} />
      <Toaster />
    </div>
  );
};

export default Home;
