"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  action: (form: FormData) =>
    | {
        error: void;
      }
    | undefined;
};

export async function ClientAction({ action }: Props) {
  const router = useRouter();
  const clientACtion = async (formData: FormData) => {
    const res = action(formData);
    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Success");
      setTimeout(() => {
        router.push("/home");
      }, 500);
    }
  };

  return clientACtion;
}
