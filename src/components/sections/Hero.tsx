"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { profile } from "@/content/data";

// Cena 3D só no cliente.
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Cena 3D de fundo */}
      <div className="absolute inset-0 -z-10">
        <HeroScene />
      </div>

      {/* Vinheta para legibilidade do texto */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5 font-mono text-sm uppercase tracking-[0.3em] text-accent-soft"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted sm:text-xl"
        >
          <span className="font-medium text-foreground">{profile.role[lang]}</span>
          {" — "}
          {profile.tagline[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent-soft px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#about"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em]"
        >
          {t.hero.scroll}
          <span className="block h-8 w-px bg-gradient-to-b from-accent-soft to-transparent" />
        </motion.span>
      </motion.a>
    </section>
  );
}
