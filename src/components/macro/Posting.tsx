import AvatarBase from "../micro/AvatarBase";
import user from "@/data/user";
import { Textarea } from "../ui/textarea";

const Posting = () => {
  return (
    <div>
      <AvatarBase imageUrl={user[0].image} />
      {/* <Textarea className="rounded-2xl text-xl p-4" /> */}
    </div>
  );
};

export default Posting;
