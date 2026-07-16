"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  Globe,
  LayoutDashboard,
  Plug,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Services() {
  const t = useTranslations("services");
  const sitesFeatures = t.raw("sites.features") as string[];
  const dashboardFeatures = t.raw("dashboards.features") as string[];

  return (
    <section id="servicos" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Sites — main service */}
          <Reveal className="lg:col-span-3">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-cta/25 blur-[90px]"
              />
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-cta/15 px-3 py-1 text-xs font-semibold text-cta">
                <Globe className="size-3.5" />
                {t("sites.badge")}
              </span>

              <h3 className="mt-5 font-heading text-2xl font-bold text-white sm:text-3xl">
                {t("sites.title")}
              </h3>
              <p className="mt-3 max-w-md text-white/70">{t("sites.description")}</p>

              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {sitesFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-cta" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                render={<Link href="#precos" />}
                nativeButton={false}
                className="mt-10 w-fit gap-2 rounded-full bg-cta px-6 text-cta-foreground hover:bg-cta-hover"
              >
                {t("sites.cta")}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>

          {/* Dashboards — add-on */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-dashed border-navy/15 bg-secondary/40 p-8 sm:p-10">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-navy/8 px-3 py-1 text-xs font-semibold text-navy">
                <Plug className="size-3.5" />
                {t("dashboards.badge")}
              </span>

              <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
                {t("dashboards.title")}
              </h3>
              <p className="mt-3 text-muted-foreground">{t("dashboards.description")}</p>

              <ul className="mt-6 space-y-3">
                {dashboardFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-navy" />
                    {feature}
                  </li>
                ))}
              </ul>

              <MiniDashboardPreview />

              <p className="mt-6 text-xs text-muted-foreground">{t("dashboards.note")}</p>

              <Button
                variant="outline"
                render={<Link href="#contacto" />}
                nativeButton={false}
                className="mt-6 w-fit gap-2 rounded-full border-navy/20"
              >
                {t("dashboards.cta")}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MiniDashboardPreview() {
  const t = useTranslations("services.dashboards");
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-6 overflow-hidden rounded-xl border border-border bg-white p-4 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <LayoutDashboard className="size-3.5" />
          {t("previewLabel")}
        </div>
        <TrendingUp className="size-3.5 text-emerald-500" />
      </div>
      <div className="mt-3 flex h-14 items-end gap-1.5">
        {[30, 55, 40, 70, 50, 85, 65].map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className="flex-1 rounded-sm bg-navy/15 [&:last-child]:bg-cta"
          />
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <BarChart3 className="size-3.5" />
        <span>{t("previewGrowth")}</span>
      </div>
    </motion.div>
  );
}
