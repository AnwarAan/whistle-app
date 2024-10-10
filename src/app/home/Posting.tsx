'use client'
import { posting } from "@/action/action";
import { Form } from "@/components/feature/Form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AddPhotoAlternateOutlined, InsertEmoticonOutlined } from '@mui/icons-material';
import { useRef, useState } from "react";
import model from "@/model/posting";
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


  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleEmojiClick = (emoji: any) => {
    setSelectedEmoji(emoji);
  };
  return (
    <>
      <Form model={model} action={posting} >
        <Input className="hidden" name="file" type="file" ref={refInput} onChange={handleChange} />
        <div className="flex">
          <Avatar
            className="h-16 w-16"
            imageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/files/download-image/${imageId}`}
          />
          <Textarea name="content" />
        </div>
        <div className="flex w-full justify-content-between space-y-2 items-center">
          <span onClick={handleClick} >
            <AddPhotoAlternateOutlined className="cursor-pointer mx-auto dark:text-[#1DA1F2] text-[#1DA1F2]" fontSize="small" />
          </span>
          <span onClick={handleEmojiClick}>
            <InsertEmoticonOutlined className="cursor-pointer mx-auto dark:text-[#1DA1F2] text-[#1DA1F2]" fontSize="small" />
          </span>
          <div>
          </div>
        </div>
        <Button className="h-8">
          Post
        </Button>
      </Form>
    </>
  );
}
