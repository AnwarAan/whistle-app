import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: Readonly<React.ReactNode>;
}

export default function Container({ className, children, ...props }: Props) {
  return <div className={cn("px-6 w-full", className)}>{children}</div>;
}
