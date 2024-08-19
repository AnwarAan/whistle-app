import { postFormLogin } from "@/action/action";
import { Form } from "@/components/feature/Form";
import InputModel from "@/components/feature/InputModel";
import model from "@/model/login";

export function FormLogin() {
  return (
    <Form action={postFormLogin} model={model} to="/home">
      <InputModel model={model} />
    </Form>
  );
}

export default FormLogin;
