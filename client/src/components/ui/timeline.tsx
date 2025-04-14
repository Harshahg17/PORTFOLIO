import { cn } from "@/lib/utils";

interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
  isLast?: boolean;
}

export function TimelineItem({ children, className, isLast = false }: TimelineItemProps) {
  return (
    <div className={cn("timeline-item relative pl-10 pb-12", className)}>
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary z-10"></div>
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-slate-300 dark:bg-slate-700" />
      )}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        {children}
      </div>
    </div>
  );
}

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
}
