"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { WhatsappIcon } from "@/components/icons/social";
import { FORMSUBMIT_ENDPOINT, getWhatsappLink } from "@/lib/constants";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");
  const whatsappLink = getWhatsappLink(t("info.whatsappMessage"));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "Novo pedido de orçamento — Site49",
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-navy py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} light />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              {status === "success" ? (
                <div className="flex min-h-80 flex-col items-center justify-center gap-4 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="size-7" />
                  </span>
                  <p className="max-w-xs text-base font-medium text-foreground">
                    {t("form.success")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("form.name")}</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder={t("form.namePlaceholder")}
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("form.email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t("form.emailPlaceholder")}
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("form.phone")}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={t("form.phonePlaceholder")}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder={t("form.messagePlaceholder")}
                      className="min-h-32"
                    />
                  </div>

                  {status === "error" && (
                    <p className="flex items-center gap-2 text-sm font-medium text-destructive">
                      <AlertCircle className="size-4 shrink-0" />
                      {t("form.error")}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "sending"}
                    className="w-full gap-2 rounded-full bg-cta text-base font-semibold text-cta-foreground hover:bg-cta-hover"
                  >
                    {status === "sending" ? t("form.sending") : t("form.submit")}
                    <Send className="size-4" />
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="font-heading text-xl font-bold text-white">{t("info.title")}</h3>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cta transition-colors group-hover:bg-cta group-hover:text-cta-foreground">
                  <WhatsappIcon className="size-5" />
                </span>
                <span className="font-medium text-white/85 underline decoration-white/30 underline-offset-4 group-hover:text-white group-hover:decoration-cta">
                  {t("info.whatsappCta")}
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cta">
                  <Clock className="size-5" />
                </span>
                <span className="text-white/85">{t("info.hours")}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
