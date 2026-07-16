"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const gradients = [
  "from-navy via-navy-light to-cta/40",
  "from-cta/70 via-navy-light to-navy",
  "from-navy-dark via-navy to-cta/30",
  "from-navy-light via-navy to-navy-dark",
  "from-cta/50 via-navy to-navy-dark",
  "from-navy via-navy-dark to-cta/20",
];

export function Portfolio() {
  const t = useTranslations("portfolio");
  const items = t.raw("items") as { title: string; category: string }[];

  return (
    <section id="portfolio" className="bg-secondary/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-shadow hover:shadow-lg">
                <div
                  className={cn(
                    "relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br p-6",
                    gradients[i % gradients.length],
                  )}
                >
                  <div className="w-full max-w-[85%] overflow-hidden rounded-lg bg-white/95 shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-1 border-b border-border/60 px-2.5 py-1.5">
                      <span className="size-1.5 rounded-full bg-destructive/40" />
                      <span className="size-1.5 rounded-full bg-amber-400/50" />
                      <span className="size-1.5 rounded-full bg-emerald-400/50" />
                    </div>
                    <div className="space-y-1.5 p-3">
                      <div className="h-2 w-2/3 rounded-full bg-navy/15" />
                      <div className="h-1.5 w-full rounded-full bg-navy/8" />
                      <div className="h-1.5 w-5/6 rounded-full bg-navy/8" />
                      <div className="mt-2 h-10 w-full rounded-md bg-navy/8" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-cta-hover">
                      {item.category}
                    </p>
                    <h3 className="mt-1 font-heading font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors group-hover:bg-cta group-hover:text-cta-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
