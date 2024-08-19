import { postFormLogin } from "@/action/action";
import { Form } from "@/components/feature/Form";
import InputModel from "@/components/feature/InputModel";
import model from "@/model/register";

export function FormRegister() {
  return (
    <Form action={postFormLogin} model={model}>
      <InputModel model={model} />
    </Form>
  );
}

export default FormRegister;
