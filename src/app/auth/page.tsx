import { Dialog } from "@/components/feature/Dialog";
import { Label } from "@/components/ui/label";
import icons from "../../../public/assets/icon";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import { ModeToggle } from "@/components/feature/ModeToggle";

export default async function Auth() {
  return (
    <div className="flex h-screen">
      <div className="flex items-center place-content-center w-full justify-around">
        <Label className="text-8xl font-bold">BRAND</Label>
        <div className="flex flex-col space-y-2">
          <ModeToggle />
          <Dialog
            className="dark:bg-white dark:hover:bg-slate-900 dark:text-black dark:hover:text-white"
            childrenTrigger={"Login With Google"}
            icon={icons.google}
            childrenContent={<FormLogin />}
          ></Dialog>
          <Dialog childrenTrigger={"Login"} childrenContent={<FormLogin />}></Dialog>
          <Dialog childrenTrigger={"Register"} childrenContent={<FormRegister />}></Dialog>
        </div>
      </div>
    </div>
  );
}
