import { cn } from "@/lib/utils";
import { LucideProps, icons } from "lucide-react";

interface TIcon extends LucideProps {
  className?: string
}

const Icon = ({ name, color, size = 20, className }: TIcon) => {
  const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon className={cn("transition", className)} color={color} size={size} />;
};

export default Icon;