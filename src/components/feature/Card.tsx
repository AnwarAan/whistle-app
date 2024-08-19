import { Card as CardUi, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Avatar from "./Avatar";

export interface PropsCard<N, S> {
  id?: N;
  user: S;
  imageUrl: S;
  content: S;
  imageId: N;
  userName: N;
}

export default function Card({ user, imageUrl, content, imageId, userName }: PropsCard<number, string>) {
  return (
    <CardUi className="w-max-[800px] rounded-2xl">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Avatar imageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/files/download-image/${imageId}`} />
          <Label className="text-2xl">{userName}</Label>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <Label className="text-xl">{content}</Label>
        <Image
          className="w-full rounded-2xl bg-slate-100"
          width={600}
          height={600}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/files/download-image/${imageId}`}
          alt="content"
        />
        {/* <ExtraFeature /> */}
      </CardContent>
    </CardUi>
  );
}
