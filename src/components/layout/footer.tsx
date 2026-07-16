"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/social";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  const quickLinks = [
    { key: "home", href: "#top" },
    { key: "services", href: "#servicos" },
    { key: "pricing", href: "#precos" },
    { key: "portfolio", href: "#portfolio" },
    { key: "contact", href: "#contacto" },
  ] as const;

  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              {t("description")}
            </p>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy-foreground">
              {t("quickLinksTitle")}
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-cta"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy-foreground">{t("legalTitle")}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-navy-foreground/70 transition-colors hover:text-cta"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-navy-foreground/70 transition-colors hover:text-cta"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-navy-foreground/70 transition-colors hover:text-cta"
                >
                  {t("cookies")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy-foreground">{t("socialTitle")}</h3>
            <div className="mt-4 flex gap-3">
              <Link
                href="#"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-navy-foreground transition-colors hover:bg-cta hover:text-cta-foreground"
              >
                <InstagramIcon className="size-4" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-navy-foreground transition-colors hover:bg-cta hover:text-cta-foreground"
              >
                <LinkedinIcon className="size-4" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-navy-foreground transition-colors hover:bg-cta hover:text-cta-foreground"
              >
                <FacebookIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-navy-foreground/60">
          {t("rights", { year })}
        </div>
      </div>
    </footer>
  );
}
