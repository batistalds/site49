"use client";

import { useTranslations } from "next-intl";
import { MessageSquare, Palette, Rocket, LifeBuoy } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

const icons = [MessageSquare, Palette, Rocket, LifeBuoy];

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-border lg:left-0 lg:top-8 lg:h-px lg:w-full"
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={step.title} delay={i * 0.1}>
                  <div className="relative flex gap-5 lg:flex-col lg:gap-0">
                    <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-2xl border-4 border-background bg-navy text-white shadow-md">
                      <Icon className="size-6" />
                      <span className="absolute -right-1.5 -top-1.5 flex size-6 items-center justify-center rounded-full bg-cta text-[11px] font-bold text-cta-foreground">
                        {i + 1}
                      </span>
                    </div>
                    <div className="lg:mt-6">
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
