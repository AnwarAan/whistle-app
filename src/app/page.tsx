import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const cookie = cookies().get("whistle_token")?.value;

  if (!cookie) redirect("/auth");
  else redirect("/home");
}
