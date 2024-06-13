import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ZodObject } from "zod";
import { usePostApi } from "./service";

const useZod = (schema: ZodObject<any>, value?: any) => {
  const zodSchema = useForm({
    resolver: zodResolver(schema),
    defaultValues: value,
  });

  return zodSchema;
};

const UseSave = async (url: string, value: any, message?: string) => {
  const { mutate, data, isSuccess, isError, error } = await usePostApi(url);
  alert(isError);
  useEffect(() => {
    if (isSuccess) toast.success(`Success ${message}`);
    if (isError) toast.error(error.response.data.message);
  }, [isSuccess, isError, error, message]);

  return mutate(value);
};

export { useZod, UseSave };
