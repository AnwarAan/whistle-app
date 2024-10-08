"use client";
import { posting } from "@/action/action";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Form } from "./Form";
import model from "@/model/upload_image";

export default function UploadImage({ imageUrl }: { imageUrl: string }) {
  const refInput = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (refInput.current) refInput.current.click();
    e.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFile = files as FileList;
    setPreview(URL.createObjectURL(selectedFile[0]));
  };

  return (
    <Form model={model} action={posting}>
      <Input className="hidden" name="file" type="file" ref={refInput} onChange={handleChange} />
      <div className="text-center w-40 space-y-2">
        <Avatar className="h-40 w-40 hover:dark:opacity-80" onClick={handleClick}>
          <AvatarFallback>W</AvatarFallback>
          <AvatarImage
            className="hover:dark:opacity-80 z-10"
            src={preview === "" ? `${process.env.NEXT_PUBLIC_BASE_URL}/files/download-image/${imageUrl}` : preview}
          />
        </Avatar>
        <Button className="h-6" disabled={preview === ""}>
          Upload
        </Button>
      </div>
    </Form>
  );
}
