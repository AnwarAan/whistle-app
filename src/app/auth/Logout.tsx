import { logout } from "@/action/action";
import { Button } from "@/components/ui/button";

export default function Logout() {
  return (
    <form action={logout}>
      <Button>Logout</Button>
    </form>
  );
}
