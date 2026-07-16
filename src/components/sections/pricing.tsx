"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Check, LayoutDashboard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const planKeys = ["basic", "pro", "enterprise"] as const;
const recommendedPlan = "pro";

export function Pricing() {
  const t = useTranslations("pricing");
  const [annual, setAnnual] = useState(false);

  return (
    <section id="precos" className="bg-secondary/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              !annual ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {t("monthly")}
          </span>
          <Switch checked={annual} onCheckedChange={setAnnual} aria-label={t("annual")} />
          <span
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              annual ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {t("annual")}
            <span className="rounded-full bg-cta/15 px-2 py-0.5 text-xs font-semibold text-cta-hover">
              {t("annualBadge")}
            </span>
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {planKeys.map((key, i) => (
            <PlanCard key={key} planKey={key} annual={annual} delay={i * 0.08} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-dashed border-navy/20 bg-background px-6 py-6 text-center sm:flex-row sm:text-left">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy/8 text-navy">
              <LayoutDashboard className="size-5" />
            </span>
            <div>
              <p className="font-heading font-semibold text-foreground">{t("addonTitle")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t("addonNote")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PlanCard({
  planKey,
  annual,
  delay,
}: {
  planKey: (typeof planKeys)[number];
  annual: boolean;
  delay: number;
}) {
  const t = useTranslations("pricing");
  const tPlan = useTranslations(`pricing.plans.${planKey}`);
  const features = tPlan.raw("features") as string[];
  const isRecommended = planKey === recommendedPlan;

  const price = tPlan("price");
  const priceAnnual = tPlan("priceAnnual");

  const displayPrice = useMemo(() => {
    if (!annual) return price;
    return Math.round(Number(priceAnnual) / 12).toString();
  }, [annual, price, priceAnnual]);

  return (
    <Reveal delay={delay}>
      <div
        className={cn(
          "relative flex h-full flex-col rounded-3xl border p-8",
          isRecommended
            ? "border-cta bg-navy text-white shadow-xl shadow-navy/20 lg:-translate-y-3"
            : "border-border bg-background",
        )}
      >
        {isRecommended && (
          <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-cta px-4 py-1.5 text-xs font-semibold text-cta-foreground shadow-md">
            <Sparkles className="size-3.5" />
            {t("recommended")}
          </span>
        )}

        <h3
          className={cn(
            "font-heading text-xl font-bold",
            isRecommended ? "text-white" : "text-foreground",
          )}
        >
          {tPlan("name")}
        </h3>
        <p className={cn("mt-2 text-sm", isRecommended ? "text-white/70" : "text-muted-foreground")}>
          {tPlan("description")}
        </p>

        <div className="mt-6 flex items-baseline gap-1">
          <span
            className={cn(
              "font-heading text-4xl font-extrabold tabular-nums",
              isRecommended ? "text-white" : "text-foreground",
            )}
          >
            {displayPrice}€
          </span>
          <span className={cn("text-sm", isRecommended ? "text-white/60" : "text-muted-foreground")}>
            {t("perMonth")}
          </span>
        </div>
        <p className={cn("mt-1 h-4 text-xs", isRecommended ? "text-white/50" : "text-muted-foreground/80")}>
          {annual ? t("billedAnnually", { price: `${priceAnnual}€` }) : " "}
        </p>

        <ul className="mt-6 flex-1 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "flex items-start gap-2.5 text-sm",
                isRecommended ? "text-white/85" : "text-foreground/80",
              )}
            >
              <Check className={cn("mt-0.5 size-4 shrink-0", isRecommended ? "text-cta" : "text-navy")} />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          render={<Link href="#contacto" />}
          nativeButton={false}
          className={cn(
            "mt-8 w-full rounded-full",
            isRecommended
              ? "bg-cta text-cta-foreground hover:bg-cta-hover"
              : "bg-navy text-white hover:bg-navy-light",
          )}
        >
          {t("ctaPlan")}
        </Button>
      </div>
    </Reveal>
  );
}
