import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodNumber, ZodRawShape, ZodString } from "zod";
import z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ZodType = ZodString | ZodNumber;
type ZodOption = "string" | "number" | "email" | "password";

const zodType = (zod: ZodOption, min: number = 3, max: number = 50) => {
  switch (zod) {
    case "string":
      return zodMessage(z.string(), min, max);
    case "number":
      return zodMessage(z.number(), min, max);
    case "email":
      return zodMessage(z.string().email(`Email Doesn't Valid`), min, max);
    case "password":
      return zodMessage(z.string(), 6, 16);
  }
};

const zodMessage = (zod: ZodType, min: number = 3, max: number = 50) => {
  return zod.min(min, { message: `Minimum Character is ${min}` }).max(max, { message: `Maximum Character is ${max}` });
};

const zodObject = (body: ZodRawShape) => {
  return z.object(body);
};

export { zodObject, zodType };
