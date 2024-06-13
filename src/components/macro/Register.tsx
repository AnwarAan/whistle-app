"use client";
import FormBase, { FormInput, FormInputPassword } from "../micro/FormBase";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/lib/schema";
import { UseSave, useZod } from "@/lib/CustomHook";

const Register = () => {
  const defaultRegister = { username: "", email: "", password: "" };
  type FormType = typeof defaultRegister;
  const form = useZod(registerSchema, defaultRegister);

  const onSubmit = (value: FormType) => {
    console.log(value);
  };

  return (
    <FormBase form={form} onSubmit={onSubmit}>
      <FormInput form={form} name="username" placeHolder="Username" />
      <FormInput form={form} name="email" placeHolder="Email" />
      <FormInputPassword form={form} name="password" placeHolder="Password" />
      <Button className="flex mx-auto" type="submit">
        Sign up
      </Button>
    </FormBase>
  );
};

export default Register;
