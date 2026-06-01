import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { profile } from "@/content/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} — ${profile.role.en}`;
const description = profile.tagline.en;

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: profile.name }],
  keywords: [
    profile.name,
    profile.nickname,
    "Software Engineer",
    "Engenheiro de Software",
    "Portfolio",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    siteName: `${profile.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
