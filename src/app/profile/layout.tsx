import AvatarBase from "@/components/micro/AvatarBase";
import UploadImage from "@/components/micro/UploadImage";
import { CalendarMonth } from "@mui/icons-material";
import user from "@/data/user";
import moment from "moment";
import { Label } from "@/components/ui/label";
import DialogBase from "@/components/micro/DialogBase";
import Image from "next/image";
import ProfileMenu from "@/components/listing/ProfileMenu";
import { Separator } from "@/components/ui/separator";

interface Props {
  children: Readonly<React.ReactNode>;
}

const Profile = ({ children }: Props) => {
  const { name, username, image, created_at } = user[0];
  moment.locale();
  return (
    <div className="w-full space-y-4">
      <DialogBase
        childrenTrigger={<AvatarBase className="w-32 h-32" imageUrl={image} />}
        childrenContent={
          <Image
            className="rounded-full w-[400px] h-[400px] mx-auto"
            src={
              "data:image/png;base64,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"
            }
            alt="profilaae"
            width={400}
            height={400}
          />
        }
      ></DialogBase>

      <UploadImage />
      <div className="flex flex-col">
        <div className="flex flex-col space-y-2 text-slate-500">
          <Label className="text-2xl text-white">{name}</Label>
          <Label className="font-light">@{username}</Label>
          <div className="flex items-center space-x-2">
            <CalendarMonth fontSize="small" />
            <Label className="font-light">Joined {moment(created_at).format("ll")}</Label>
          </div>
          <div className="flex space-x-4">
            <div className="space-x-1">
              <Label className="text-white">{100}</Label>
              <Label className="font-light"> Following</Label>
            </div>
            <div className="space-x-1">
              <Label className="text-white">{100}</Label>
              <Label className="font-light">Followers</Label>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <ProfileMenu />
        <Separator className="dark:bg-sky-500 bg-sky-500 w-full" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Profile;
