import { CalendarMonthOutlined } from "@mui/icons-material";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { actionFollow, getData, postFormData, uploadFile } from "@/action/action";
import { Button } from "../ui/button";
import UploadImage from "./UploadImage";
import Container from "../ui/container";
import Avatar from "./Avatar";
import moment from "moment";

interface Props {
  data: { id: number; name: string; imageId: string, follower: number, followed: number };
}

export default async function UserDetail({ data }: Props) {
  const date = moment(new Date("2000-01-01")).format("ll");
  const url = `/user-follower/current-follow/${data.id}`
  const currentFollow = await getData(url)

  return (
    <div className="w-full">
      <Container>
        <div>
          <div className="flex items-end justify-between">
            <Avatar
              className="h-40 w-40"
              imageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/files/download-image/${data.imageId}`}
            />
            <form action={actionFollow}>
              <Input className="hidden" name="id" value={data.id} />
              <Button>{currentFollow ? 'Unfollow' : 'Follow'}</Button>
            </form>
          </div>
          <p className="text-2xl">{data.name}</p>
          <p className="dark:text-slate-400 font-light">@{data.name}</p>
          <div className="flex dark:text-slate-400 items-center space-x-2">
            <CalendarMonthOutlined sx={{ fontSize: 20 }} />
            <Label className="dark:text-slate-400 font-light">{date}</Label>
          </div>
          <div className="flex space-x-4">
            <div className="flex space-x-2 items-center">
              <p className="font-light">{data.followed}</p>
              <p className="dark:text-slate-400 font-light">Following</p>
            </div>
            <div className="flex space-x-2 items-center">
              <p className="font-light">{data.follower}</p>
              <p className="dark:text-slate-400 font-light">Followers</p>
            </div>
          </div>
        </div>
      </Container>
      <Separator />
    </div>
  );
}
