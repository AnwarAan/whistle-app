import { getData } from "@/action/action";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export async function Authentication() {
  const token = cookies().get("whistle_token")?.value;
  let userData;
  if (token) {
    userData = jwtDecode(token);
    userData = userData.sub;
  }
  const url = `/user/email/${userData}`;
  const data = await getData(url);
  return data;
}
