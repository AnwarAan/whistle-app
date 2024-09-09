'use client'
import { posting } from "@/action/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { AddPhotoAlternateOutlined } from '@mui/icons-material'
import { Textarea } from "@/components/ui/textarea";
import Avatar from "@/components/feature/Avatar";

export default function Posting({ imageId }: { imageId: string }) {
  const refInput = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (refInput.current) refInput.current.click();
    e.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFile = files as FileList;
    setPreview(URL.createObjectURL(selectedFile[0]));
  };
  return (
    <>

      <form action={posting}>
        <Input className="hidden" name="file" type="file" ref={refInput} onChange={handleChange} />
        <div className="flex">
          <Avatar
            className="h-20 w-20"
            imageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/files/download-image/${imageId}`}
          />
          <Textarea></Textarea>

        </div>
        <div className="flex w-full justify-content-center space-y-2">
          <div className="dark:bg-[#1DA1F2] rounded-full w-10 h-10 items-center flex" onClick={handleClick} >
            <AddPhotoAlternateOutlined className="cursor-pointer mx-auto" />
          </div>
          <div>
            <Button className="h-6">
              Post
            </Button>
          </div>
        </div>
      </form>
      {/* <Form action={postMultipartFormData} model={model}>
        <InputModel model={model} />
      </Form> */}
    </>
  );
}
