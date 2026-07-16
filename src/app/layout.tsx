import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/i18n/locale-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Site49 — Sites profissionais a partir de 49€/mês",
  description:
    "A Site49 cria e gere o seu site profissional por uma mensalidade simples, a partir de 49€/mês. Sem grandes investimentos iniciais, sem complicações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${inter.variable} ${sora.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
