import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import UploadImage from "./UploadImage";

type Props<S, N> = {
  model: { structure: { name: S; title: S; type: S; display?: N }[] };
};
export default function InputModel({ model }: Props<string, number>) {
  return (
    <>
      {model.structure.map(({ name, title, display = 1, type }, i) => {
        switch (type) {
          case "text":
            return <Input className={`${display ? "" : "hidden"}`} key={i} name={name} placeholder={title} />;
          case "text-area":
            return <Textarea className={`${display ? "" : "hidden"}`} key={i} name={name} placeholder={title} />;
          case "file":
            return (
              <Input type={type} className={`${display ? "" : "hidden"}`} key={i} name={name} placeholder={title} />
            );

          // return <UploadImage key={i} />;
        }
      })}
    </>
  );
}
