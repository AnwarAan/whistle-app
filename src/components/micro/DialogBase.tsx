import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const DialogBase = ({
  childrenTrigger,
  childrenContent,
  title,
  description = "",
  onClick,
}: {
  childrenTrigger: Readonly<React.ReactNode>;
  childrenContent: Readonly<React.ReactNode>;
  childrenClose?: Readonly<React.ReactNode>;
  title?: string;
  description?: string;
  onClick?: () => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{childrenTrigger}</DialogTrigger>
      <DialogContent onClick={onClick}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {childrenContent}
      </DialogContent>
    </Dialog>
  );
};

export default DialogBase;
