import { cn } from "@/lib/utils";

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-heading select-none", className)}>
      <span
        className={cn(
          "flex size-8 items-center justify-center rounded-lg bg-navy text-navy-foreground text-sm font-bold",
          light && "bg-white text-navy",
        )}
      >
        S
      </span>
      <span className={cn("text-lg font-bold tracking-tight text-foreground", light && "text-white")}>
        Site<span className="text-cta">49</span>
      </span>
    </span>
  );
}
