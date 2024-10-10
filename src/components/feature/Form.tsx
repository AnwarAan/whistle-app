"use client";
import { Button } from "@/components/ui/button";
import { ModelFormData } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { toast } from "sonner";

interface Props<S, T> {
  children?: Readonly<React.ReactNode>;
  action: (
    formData: FormData,
    model: { structure: T; url: S }
  ) => Promise<
    | {
      error: void;
    }
    | undefined
  >;
  model: { structure: T; url: S };
  to?: S;
  defautBtn?: boolean
}

export function Form({ children, action, model, to, defautBtn = false }: Props<string, ModelFormData[]>) {
  const router = useRouter();
  const clientACtion = async (formData: FormData) => {
    const res = await action(formData, model);
    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Success");
      if (to) {
        setTimeout(() => {
          router.push(to);
        }, 500);
      }
    }
  };
  return (
    <div className="w-full">
      <form action={clientACtion} className="space-y-8 flex flex-col">
        {children}
        {defautBtn && <Button type="submit">Submit</Button>}
      </form>
    </div>
  );
}
