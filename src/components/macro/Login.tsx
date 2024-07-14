"use client";
import { FormInput, FormInputPassword, FormLogin } from "../micro/FormBase";
import { useZod } from "@/lib/CustomHook";
import { loginSchema } from "@/lib/schema";
import { Button } from "../ui/button";
const Login = () => {
  const defaultLogin = { email: "", password: "" };
  const form = useZod(loginSchema, defaultLogin);

  return (
    <FormLogin form={form} url="/auth/login">
      <FormInput form={form} name="email" placeHolder="Email" />
      <FormInputPassword form={form} name="password" placeHolder="Password" />
      <Button type="submit" className="flex mx-auto">
        Sign in
      </Button>
    </FormLogin>
  );
};

export default Login;
