"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { profile } from "@/content/data";

const SceneV2 = dynamic(() => import("./three/SceneV2"), { ssr: false, loading: () => null });

export function HeroV2() {
  const { t, lang } = useLanguage();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Grade de fundo */}
      <div className="bg-grid absolute inset-0 -z-30 opacity-[0.18]" aria-hidden />
      {/* Cena 3D */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        <SceneV2 />
      </div>
      {/* Vinheta para legibilidade do texto à esquerda */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background-soft/60 px-4 py-1.5 font-mono text-xs text-accent-soft backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.v2.badge}
          </motion.span>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 font-mono text-sm uppercase tracking-[0.3em] text-muted"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
          >
            <span className="text-foreground">{profile.name.split(" ")[0]}</span>
            <br />
            <span className="text-aurora">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
          >
            <span className="font-medium text-foreground">{profile.role[lang]}</span> — {profile.tagline[lang]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent-soft to-[var(--accent-2)] px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
            >
              {t.hero.ctaContact}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        aria-hidden
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted"
        >
          {t.hero.scroll}
          <span className="block h-8 w-px bg-gradient-to-b from-accent to-transparent" />
        </motion.span>
      </motion.span>
    </section>
  );
}
