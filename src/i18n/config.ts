export const locales = ["pt-PT", "pt-BR", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-PT";

export const localeCountryCode: Record<Locale, "PT" | "BR" | "GB" | "ES"> = {
  "pt-PT": "PT",
  "pt-BR": "BR",
  en: "GB",
  es: "ES",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
