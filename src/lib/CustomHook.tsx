import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodObject } from "zod";

const useZod = (schema: ZodObject<any>, value?: any) => {
  const zodSchema = useForm({
    resolver: zodResolver(schema),
    defaultValues: value,
  });

  return zodSchema;
};

export { useZod };
