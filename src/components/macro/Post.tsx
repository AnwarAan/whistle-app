import * as React from "react";
import { CardPost, PropsCard } from "../micro/CardBase";

interface PropsData {
  data: PropsCard[];
}
const Post = ({ data }: PropsData) => {
  return (
    <div className="space-y-16">
      {data.map(({ user, user_image, post, post_image }, i) => (
        <CardPost key={i} user={user} user_image={user_image} post={post} post_image={post_image} />
      ))}
    </div>
  );
};

export default Post;
