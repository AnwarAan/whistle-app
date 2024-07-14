"use client";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Label } from "../ui/label";
import Image from "next/image";
import AvatarBase from "../micro/AvatarBase";
import {
  FavoriteBorder,
  CommentOutlined,
  Visibility,
  Replay,
  BookmarkAddOutlined,
  IosShare,
} from "@mui/icons-material";
import FormBase from "./FormBase";
import { useZod } from "@/lib/CustomHook";
import { fetureSchema } from "@/lib/schema";
import { Button } from "../ui/button";

export interface PropsCard {
  user: string;
  user_image: string;
  post: string;
  post_image: string;
}

const ExtraFeature = () => {
  const form = useZod(fetureSchema);

  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="cursor-pointer space-x-1">
          <CommentOutlined fontSize="small" />
          <Label className="text-xs font-light">100</Label>
        </div>
        <div className="cursor-pointer space-x-1">
          <FormBase form={form} url="/like">
            <button type="submit">
              <FavoriteBorder fontSize="small" />
              <Label className="text-xs font-light">100</Label>
            </button>
          </FormBase>
        </div>
        <div className="cursor-pointer space-x-1">
          <Visibility fontSize="small" />
          <Label className="text-xs font-light">100</Label>
        </div>
        <div className="cursor-pointer space-x-1">
          <BookmarkAddOutlined fontSize="small" />
          <Label className="text-xs font-light">100</Label>
        </div>
        <div className="cursor-pointer space-x-1">
          <IosShare fontSize="small" />
          <Label className="text-xs font-light">100</Label>
        </div>
      </div>
    </div>
  );
};

const CardPost = ({ user, user_image, post, post_image }: PropsCard) => {
  return (
    <div className="flex flex-col space-y-4">
      <Card className="w-max-[600px] rounded-2xl">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AvatarBase imageUrl={user_image} />
            <Label className="text-2xl">{user}</Label>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <Label className="text-xl">{post}</Label>
          <Image className="w-full rounded-2xl" width={400} height={400} src={post_image} alt="content" />
          <ExtraFeature />
        </CardContent>
      </Card>
    </div>
  );
};

export { CardPost, ExtraFeature };
