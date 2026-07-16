"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-dark via-navy to-navy-light">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(60%_50%_at_50%_0%,white,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 size-96 rounded-full bg-cta/30 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-navy-light/40 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-28 lg:pt-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
            <Sparkles className="size-3.5 text-cta" />
            {t("badge")}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            {t("titlePrefix")}{" "}
            <span className="relative inline-block whitespace-nowrap text-cta">
              {t("titleHighlight")}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/70">
            {t("subtitle")}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              render={<Link href="#contacto" />}
              nativeButton={false}
              className="h-12 gap-2 rounded-full bg-cta px-7 text-base font-semibold text-cta-foreground shadow-lg shadow-cta/30 hover:bg-cta-hover"
            >
              {t("ctaPrimary")}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="#precos" />}
              nativeButton={false}
              className="h-12 rounded-full border-white/20 bg-white/5 px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              {t("ctaSecondary")}
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Users className="size-4 text-cta" />
              {t("trust.sites")}
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Star className="size-4 fill-cta text-cta" />
              {t("trust.rating")}
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <ShieldCheck className="size-4 text-cta" />
              {t("trust.noLockIn")}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const t = useTranslations("hero.mockup");
  const bars = [38, 62, 45, 80, 58, 72, 90];

  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/40"
      >
        <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-destructive/50" />
            <span className="size-2.5 rounded-full bg-amber-400/60" />
            <span className="size-2.5 rounded-full bg-emerald-400/60" />
          </div>
          <div className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
            {t("browserLabel")}
          </div>
        </div>

        <div className="space-y-5 p-5">
          <div className="grid grid-cols-3 gap-3">
            <KpiCard label={t("kpi1Label")} value={t("kpi1Value")} />
            <KpiCard label={t("kpi2Label")} value={t("kpi2Value")} accent />
            <KpiCard label={t("kpi3Label")} value={t("kpi3Value")} />
          </div>

          <div className="rounded-xl border border-border p-4">
            <p className="text-xs font-medium text-muted-foreground">{t("chartLabel")}</p>
            <div className="mt-4 flex h-28 items-end gap-2">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.07, ease: "easeOut" }}
                  className={cnBar(i === bars.length - 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -right-6 -top-6 hidden items-center gap-2 rounded-2xl bg-white p-3 shadow-xl sm:flex"
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Star className="size-4 fill-current" />
        </span>
        <div className="pr-1">
          <p className="text-sm font-bold leading-none text-foreground">4.9/5</p>
          <p className="text-[11px] text-muted-foreground">clientes</p>
        </div>
      </motion.div>
    </div>
  );
}

function cnBar(isLast: boolean) {
  return [
    "flex-1 rounded-t-md",
    isLast ? "bg-cta" : "bg-navy/15",
  ].join(" ");
}

function KpiCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg border border-border p-3">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p
        className={
          "mt-1 text-sm font-bold " + (accent ? "text-cta-hover" : "text-foreground")
        }
      >
        {value}
      </p>
    </div>
  );
}
