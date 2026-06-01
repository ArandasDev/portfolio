"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LANGS } from "@/i18n/translations";

/**
 * Alternador PT/EN com pill animada deslizando sob o idioma ativo.
 */
export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.a11y.toggleLang}
      className="relative flex items-center rounded-full border border-border bg-background-soft/70 p-0.5 backdrop-blur"
    >
      {LANGS.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className="relative z-10 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider transition-colors"
            style={{ color: active ? "var(--background)" : "var(--muted)" }}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {code}
          </button>
        );
      })}
    </div>
  );
}
