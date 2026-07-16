import { PT, BR, GB, ES } from "country-flag-icons/react/3x2";
import { localeCountryCode, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const flagComponents = { PT, BR, GB, ES };

export function FlagIcon({ locale, className }: { locale: Locale; className?: string }) {
  const code = localeCountryCode[locale];
  const Flag = flagComponents[code];
  return (
    <Flag
      className={cn("h-3 w-4 shrink-0 rounded-[2px] object-cover ring-1 ring-black/10", className)}
      aria-hidden
    />
  );
}
