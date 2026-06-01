"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { profile } from "@/content/data";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-muted sm:flex-row sm:text-left">
        <p>
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p className="font-mono text-xs">{t.footer.built}</p>
      </div>
    </footer>
  );
}
