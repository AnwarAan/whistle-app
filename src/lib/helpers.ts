"use server";
import { cookies } from "next/headers";

const setCookie = (payload: string) => {
  console.log(payload);
  const max = 30 * 24 * 3600;
  const opt = {
    name: "token",
    value: JSON.stringify(payload),
    maxAge: max,
    httpOnly: true,
    path: "/",
    expires: new Date(Date.now() + max),
  };
  cookies().set(opt);
};

const getCookie = (name: string) => {
  const cookieStore = cookies();
  const result = cookieStore.get(name);
  console.log(result);
  if (!result) return null;
  return result;
};

export { setCookie, getCookie };
