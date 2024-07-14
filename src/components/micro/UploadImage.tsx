"use client";
import { uploadImageSchema } from "@/lib/schema";
import React, { useEffect, useRef, useState } from "react";
import { useZod } from "@/lib/CustomHook";
import { usePostApi } from "@/lib/service";
import { Button } from "../ui/button";
import { AddAPhoto } from "@mui/icons-material";
import FormBase, { FormInputFile } from "./FormBase";
import Image from "next/image";
import DialogBase from "./DialogBase";
import { Input } from "../ui/input";

const UploadImage = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const previewImage = useRef<HTMLInputElement>(null);
  const refSubmit = useRef<HTMLButtonElement>(null);
  const [file, setFile] = useState("");

  const handleClick = () => {
    if (hiddenFileInput.current) hiddenFileInput.current.click();
  };

  const handleSubmit = () => {
    if (refSubmit.current) refSubmit.current.click();
  };

  const defaultValues = { file: {} };
  const formUpload = useZod(uploadImageSchema, defaultValues);
  const res = usePostApi("/use/upload-image");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFile = files as FileList;
    formUpload.setValue("file", selectedFile[0]);
    setFile(URL.createObjectURL(selectedFile[0]));
  };

  useEffect(() => {
    if (file.length > 0) previewImage.current?.click();
  }, [file]);

  const onSubmit = () => {
    alert("this");
  };

  const handleReset = () => {
    setFile("");
    formUpload.reset();
  };

  return (
    <>
      <FormBase form={formUpload} onSubmit={onSubmit} url="">
        <FormInputFile form={formUpload} name="file" hiddenFileInput={hiddenFileInput} handleChange={handleChange} />
        <Button className="rounded-full" onClick={() => handleClick()}>
          <AddAPhoto fontSize="small" />
        </Button>
        <Button className="hidden" ref={refSubmit}></Button>
      </FormBase>
      <DialogBase
        onClick={() => handleReset}
        childrenTrigger={<Input className="hidden" ref={previewImage} />}
        childrenContent={
          <div>
            <Image src={file} width={800} height={800} alt="" />
            <Button onClick={() => handleSubmit()}>Submit</Button>
          </div>
        }
      ></DialogBase>
    </>
  );
};

export default UploadImage;
