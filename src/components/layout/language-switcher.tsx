"use client";

import { useTranslations } from "next-intl";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales } from "@/i18n/config";
import { useLocaleSwitcher } from "@/i18n/locale-provider";
import { FlagIcon } from "@/components/layout/flag-icon";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocaleSwitcher();
  const t = useTranslations("languages");
  const tNav = useTranslations("nav");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={tNav("languageLabel")}
        className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      >
        <FlagIcon locale={locale} />
        <span className="hidden sm:inline">{locale}</span>
        <ChevronDown className="size-3.5 text-muted-foreground" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-56">
        <div className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-muted-foreground">
          <Globe className="size-3.5" aria-hidden />
          {tNav("languageLabel")}
        </div>
        {locales.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLocale(code)}
            className={cn(
              "flex cursor-pointer items-center gap-3 py-2.5",
              code === locale && "bg-secondary",
            )}
          >
            <FlagIcon locale={code} className="h-4 w-5" />
            <span className="flex flex-1 flex-col">
              <span className="text-sm font-medium text-foreground">{t(code)}</span>
              <span className="text-xs text-muted-foreground">{code}</span>
            </span>
            {code === locale && <Check className="size-4 text-cta" aria-hidden />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
