import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Props {
  className?: string;
  imageUrl: string;
}
const AvatarBase = ({ className, imageUrl }: Props) => {
  return (
    <div>
      <Avatar className={className}>
        <AvatarFallback>MC</AvatarFallback>
        <AvatarImage src={imageUrl} />
      </Avatar>
    </div>
  );
};

export default AvatarBase;
