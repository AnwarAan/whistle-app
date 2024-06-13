"use client";
import FormBase, { FormInput, FormInputPassword } from "../micro/FormBase";
import { UseSave, useZod } from "@/lib/CustomHook";
import { loginSchema } from "@/lib/schema";
import { Button } from "../ui/button";
import { usePostApi } from "@/lib/service";

const Login = () => {
  const defaultLogin = { email: "", password: "" };
  type FormType = typeof defaultLogin;
  const form = useZod(loginSchema, defaultLogin);

  const onSubmit = (value: FormType) => {
    console.log(value);
  };

  return (
    <FormBase form={form} onSubmit={onSubmit}>
      <FormInput form={form} name="email" placeHolder="Email" />
      <FormInputPassword form={form} name="password" placeHolder="Password" />
      <Button type="submit" className="flex mx-auto">
        Sign in
      </Button>
    </FormBase>
  );
};

export default Login;
