import { CalendarMonthOutlined } from "@mui/icons-material";
import Container from "../ui/container";
import Avatar from "./Avatar";
import { Label } from "../ui/label";
import moment from "moment";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { actionFollow, postFormData, uploadFile } from "@/action/action";
import UploadImage from "./UploadImage";
import { Button } from "../ui/button";

interface Props {
  data: { id: number; name: string; imageId: string };
}

export default function UserDetail({ data }: Props) {
  const date = moment(new Date("2000-01-01")).format("ll");
  return (
    <div className="w-full">
      <Container>
        <div>
          <div className="flex items-end justify-between">
            <UploadImage imageUrl={data.imageId} />
            <form action={actionFollow}>
              <Input className="hidden" name="id" value={data.id} />
              <Button>Follow</Button>
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
              <p className="font-light">{1000}</p>
              <p className="dark:text-slate-400 font-light">Following</p>
            </div>
            <div className="flex space-x-2 items-center">
              <p className="font-light">{1000}</p>
              <p className="dark:text-slate-400 font-light">Followers</p>
            </div>
          </div>
        </div>
      </Container>
      <Separator />
    </div>
  );
}
