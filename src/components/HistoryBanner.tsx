"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Faixa flutuante exibida nas versões antigas (histórico), com link para a
 * versão atual (raiz). Fica no rodapé para não conflitar com a navbar fixa.
 */
export function HistoryBanner({ version }: { version: string }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4"
    >
      <div className="flex items-center gap-3 rounded-full border border-border bg-background-soft/90 px-4 py-2 text-xs shadow-lg backdrop-blur-xl">
        <span className="flex items-center gap-2 text-muted">
          <span className="rounded-full bg-foreground/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider">
            {version}
          </span>
          {t.history.label}
        </span>
        <span className="h-3 w-px bg-border" />
        <Link href="/" className="font-medium text-accent-soft transition-colors hover:text-foreground">
          {t.history.current} →
        </Link>
      </div>
    </motion.div>
  );
}
