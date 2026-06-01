"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { about } from "@/content/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <div className="glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-72" />
      <SectionHeading kicker={t.about.kicker} title={t.about.heading} />

      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-6 md:col-span-3">
          {about.paragraphs[lang].map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-lg leading-relaxed text-muted"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="md:col-span-2">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent-soft"
          >
            {t.about.skills}
          </motion.h3>
          <div className="flex flex-wrap gap-2.5">
            {about.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="rounded-full border border-border bg-background-soft/60 px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-accent/50 hover:text-accent-soft"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
