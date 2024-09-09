import Card, { PropsCard } from "@/components/feature/Card";

import * as React from "react";

interface PropsData {
  data: PropsCard<number, string>[];
}

const PostList = ({ data }: PropsData) => {
  return (
    <div className="space-y-16">
      {data.map(({ id, user, content, imageUrl, imageId, userName, userImageId }, i) => (
        <Card key={id} user={user} content={content} imageUrl={imageUrl} imageId={imageId} userName={userName} userImageId={userImageId} />
      ))}
    </div>
  );
};

export default PostList;
