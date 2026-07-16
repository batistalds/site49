import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  light,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        {eyebrow && (
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase",
              light
                ? "border-white/20 bg-white/10 text-cta"
                : "border-cta/20 bg-cta/10 text-cta-hover",
            )}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={cn(
            "mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl",
            light ? "text-white" : "text-foreground",
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-4 text-lg text-pretty",
              light ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {subtitle}
          </p>
        )}
      </Reveal>
    </div>
  );
}
