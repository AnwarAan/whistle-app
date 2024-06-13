import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AvatarBase = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div>
      <Avatar>
        <AvatarFallback>MC</AvatarFallback>
        <AvatarImage src={imageUrl} />
      </Avatar>
    </div>
  );
};

export default AvatarBase;
