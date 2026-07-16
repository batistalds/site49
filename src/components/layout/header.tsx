"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";

const navItems = [
  { key: "home", href: "#top" },
  { key: "services", href: "#servicos" },
  { key: "pricing", href: "#precos" },
  { key: "portfolio", href: "#portfolio" },
  { key: "contact", href: "#contacto" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
          : "border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            render={<Link href="#contacto" />}
            nativeButton={false}
            className="hidden bg-cta text-cta-foreground hover:bg-cta-hover sm:inline-flex"
          >
            {t("cta")}
          </Button>

          <Sheet>
            <SheetTrigger
              render={<Button variant="outline" size="icon" className="lg:hidden" />}
              aria-label="Menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1 px-4">
                {navItems.map((item) => (
                  <SheetClose
                    key={item.key}
                    render={<Link href={item.href} />}
                    nativeButton={false}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {t(item.key)}
                  </SheetClose>
                ))}
                <SheetClose
                  nativeButton={false}
                  render={
                    <Button
                      className="mt-4 bg-cta text-cta-foreground hover:bg-cta-hover"
                      render={<Link href="#contacto" />}
                      nativeButton={false}
                    />
                  }
                >
                  {t("cta")}
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
