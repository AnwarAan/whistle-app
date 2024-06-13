import Login from "@/components/macro/Login";
import Register from "@/components/macro/Register";
import ButtonBase from "@/components/micro/ButtonBase";
import DialogBase from "@/components/micro/DialogBase";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import icons from "../../../public/assets/icon";
import Image from "next/image";

const Authentication = () => {
  return (
    <div className="flex h-screen">
      <div className="w-3/5 flex items-center place-content-center">
        <Label className="text-8xl">BRAND</Label>
      </div>
      <div className="w-[320px] items-center flex flex-col place-content-center">
        <ButtonBase
          name="Sign up with Google"
          icon={<Image src={icons.google} alt="icon" width={20} height={20} />}
        ></ButtonBase>
        <div className="flex items-center w-full">
          <Separator className="w-[120px] dark:bg-slate-700" />
          <span className="mx-auto">or</span>
          <Separator className="w-[120px] dark:bg-slate-700" />
        </div>
        <div className="space-y-4">
          <DialogBase
            childrenTrigger={<ButtonBase name="Sign in" color="primary" />}
            childrenContent={<Login />}
            title="Create Your Account"
          ></DialogBase>
          <p className="text-xs">
            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
          </p>
          <DialogBase
            childrenTrigger={<ButtonBase name="Create account" color="dark" />}
            childrenContent={<Register />}
            title="Create Your Account"
          ></DialogBase>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
