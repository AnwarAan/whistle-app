"use client";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Form } from "../ui/form";
import { Textarea } from "../ui/textarea";

interface PropsInput {
  form: any;
  name: string;
  placeHolder?: string;
  className?: string;
}

interface PropsInputFile {
  form: any;
  name: string;
  placeHolder?: string;
  className?: string;
  isFile?: boolean;
  hiddenFileInput: React.RefObject<HTMLInputElement>;
  handleChange: (value: any) => void;
}

interface PropsInputBase {
  children: Readonly<React.ReactNode>;
  form: any;
  onSubmit: Function;
}

const FormInput = ({ form, name, placeHolder = "" }: PropsInput) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input placeholder={placeHolder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const FormInputPassword = ({ form, name, placeHolder = "" }: PropsInput) => {
  const [show, setShow] = useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <FormItem className="flex relative">
              <Input type={`${show ? "text" : "password"}`} id={name} placeholder={placeHolder} {...field} />
              <FormLabel className="absolute right-2" onClick={() => setShow(!show)}>
                {show ? <Visibility /> : <VisibilityOff />}
              </FormLabel>
            </FormItem>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const FormInputText = ({ form, name, placeHolder = "", className = "" }: PropsInput) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea className={className} placeholder={placeHolder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const FormInputFile = ({ form, name, hiddenFileInput, handleChange }: PropsInputFile) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              ref={hiddenFileInput}
              className="hidden"
              type="file"
              id="file"
              onChange={(value) => handleChange(value)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const FormBase = ({ children, form, onSubmit }: PropsInputBase) => {
  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {children}
        </form>
      </Form>
    </div>
  );
};

export { FormBase, FormInput, FormInputPassword, FormInputText, FormInputFile };
export default FormBase;
