"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { social } from "@/content/data";

const socials = [
  { label: "GitHub", href: social.github, value: "@ArandasDev" },
  { label: "LinkedIn", href: social.linkedin, value: "in/arandasdev" },
];

export function ContactV2() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 text-center md:py-40"
    >
      <div className="glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-72" aria-hidden />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-accent-soft"
      >
        {t.contact.kicker}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-aurora mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl"
      >
        {t.contact.heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-6 max-w-xl text-lg text-muted"
      >
        {t.contact.subtitle}
      </motion.p>

      <motion.a
        href={`mailto:${social.email}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group mt-12 inline-flex items-center gap-3 text-2xl font-medium tracking-tight text-foreground transition-colors hover:text-accent-soft sm:text-4xl"
      >
        {social.email}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </motion.a>

      <div className="mt-14 flex items-center justify-center gap-8">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            className="font-mono text-sm text-muted transition-colors hover:text-foreground"
          >
            <span className="text-accent/70">↗</span> {s.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
