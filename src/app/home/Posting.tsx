import { postMultipartFormData } from "@/action/action";
import { Form } from "@/components/feature/Form";
import InputModel from "@/components/feature/InputModel";
import model from "@/model/posting";

export default function Posting() {
  return (
    <>
      <Form action={postMultipartFormData} model={model}>
        <InputModel model={model} />
      </Form>
    </>
  );
}
