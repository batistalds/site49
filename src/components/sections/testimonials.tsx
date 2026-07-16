"use client";

import { useTranslations } from "next-intl";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 2) * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} className="size-4 fill-cta text-cta" />
                    ))}
                  </div>
                  <Quote className="size-8 text-navy/10" />
                </div>

                <p className="mt-5 flex-1 text-pretty leading-relaxed text-foreground/85">
                  “{item.text}”
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                    {initials(item.name)}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
