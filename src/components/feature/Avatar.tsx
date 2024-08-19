import { Avatar as AvatarUi, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Props {
  className?: string;
  imageUrl: string;
}
const Avatar = ({ className, imageUrl }: Props) => {
  return (
    <div>
      <AvatarUi className={className}>
        <AvatarFallback>MC</AvatarFallback>
        <AvatarImage src={imageUrl} />
      </AvatarUi>
    </div>
  );
};

export default Avatar;
