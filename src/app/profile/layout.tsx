import Avatar from "@/components/feature/Avatar";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { getData } from "@/action/action";
import { Label } from "@/components/ui/label";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { Separator } from "@/components/ui/separator";
import ProfileMenu from "@/components/menu/ProfileMenu";
import Container from "@/components/ui/container";
import moment from "moment";
import { Authentication } from "@/components/feature/Authentication";

interface Props {
  children: Readonly<React.ReactNode>;
}

export default async function ProfileLayout({ children }: Props) {
  const data = await Authentication();
  const date = moment(new Date("2000-01-01")).format("ll");
  return (
    <div className="flex flex-col w-full">
      <Container>
        <div>
          <Avatar
            className="h-40 w-40"
            imageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/files/download-image/${data.imageId}`}
          />
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
      <ProfileMenu />

      <Separator />
      <Container>
        <div>{children}</div>
      </Container>
    </div>
  );
}
