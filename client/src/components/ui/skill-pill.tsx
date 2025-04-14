import { cn } from "@/lib/utils";

interface SkillPillProps {
  children: React.ReactNode;
  className?: string;
}

export default function SkillPill({ children, className }: SkillPillProps) {
  return (
    <span className={cn(
      "px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary-700 dark:text-primary-300 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md",
      className
    )}>
      {children}
    </span>
  );
}
