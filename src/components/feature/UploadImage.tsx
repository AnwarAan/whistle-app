"use client";
import { Dialog } from "@/components/feature/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { useEffect, useRef, useState } from "react";
import { AddAPhoto } from "@mui/icons-material";
import Image from "next/image";
import { DialogClose } from "../ui/dialog";

const model = [{ name: "file", title: "Upload Image" }];

export default function UploadImage() {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const refSubmit = useRef<HTMLButtonElement>(null);
  const [preview, setPreview] = useState("");
  const handleClick = () => {
    if (hiddenFileInput.current) hiddenFileInput.current.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFile = files as FileList;
    // formUpload.setValue("file", selectedFile[0]);
    setPreview(URL.createObjectURL(selectedFile[0]));
  };

  return (
    <>
      <Dialog
        childrenTrigger={"Upload Image"}
        childrenContent={
          <>
            {/* <form action={upload}> */}
            <Input className="hidden" name="image" type="file" ref={hiddenFileInput} onChange={handleChange} />
            <Button className="rounded-full" onClick={() => handleClick()}>
              <span className="flex space-x-2">
                <p>Upload</p>
                <AddAPhoto fontSize="small" />
              </span>
            </Button>
            {preview && <Image width={600} height={600} alt="img" src={preview} />}
            {/* <Button type="submit">Submit</Button> */}
            <DialogClose>Submit</DialogClose>
            {/* </form> */}
          </>
        }
      ></Dialog>
    </>
  );
}
