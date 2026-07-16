"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { NextIntlClientProvider } from "next-intl";
import { defaultLocale, isLocale, type Locale } from "./config";

import ptPT from "./messages/pt-PT.json";
import ptBR from "./messages/pt-BR.json";
import en from "./messages/en.json";
import es from "./messages/es.json";

const messagesByLocale: Record<Locale, Record<string, unknown>> = {
  "pt-PT": ptPT,
  "pt-BR": ptBR,
  en,
  es,
};

const STORAGE_KEY = "site49-locale";

type Listener = () => void;

const listeners = new Set<Listener>();
let currentLocale: Locale = defaultLocale;

if (typeof window !== "undefined") {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && isLocale(stored)) {
    currentLocale = stored;
  }
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Locale {
  return currentLocale;
}

function getServerSnapshot(): Locale {
  return defaultLocale;
}

function setStoreLocale(next: Locale) {
  if (next === currentLocale) return;
  currentLocale = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleSwitcherContext = createContext<LocaleContextValue | null>(null);

export function useLocaleSwitcher() {
  const ctx = useContext(LocaleSwitcherContext);
  if (!ctx) {
    throw new Error("useLocaleSwitcher must be used within LocaleProvider");
  }
  return ctx;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setStoreLocale(next);
  }, []);

  return (
    <LocaleSwitcherContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messagesByLocale[locale]}
        timeZone="Europe/Lisbon"
      >
        {children}
      </NextIntlClientProvider>
    </LocaleSwitcherContext.Provider>
  );
}
