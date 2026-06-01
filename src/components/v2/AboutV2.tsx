"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { about } from "@/content/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const MiniScene = dynamic(() => import("./three/MiniScene"), { ssr: false, loading: () => null });

export function AboutV2() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-40">
      <div className="glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-72" aria-hidden />
      <SectionHeading kicker={t.about.kicker} title={t.about.heading} />

      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="space-y-6 md:col-span-7">
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

          <div className="flex flex-wrap gap-2.5 pt-2">
            {about.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="rounded-full border border-border bg-background-soft/60 px-4 py-2 font-mono text-sm text-foreground/90 transition-colors hover:border-accent/50 hover:text-accent-soft"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-64 overflow-hidden rounded-3xl border border-border bg-background-soft/40 md:col-span-5 md:h-auto"
        >
          <MiniScene />
        </motion.div>
      </div>

      <div className="mt-20 md:mt-28">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-accent-soft"
        >
          {t.v2.focusKicker}
        </motion.h3>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {t.v2.focus.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 transition-colors hover:bg-background-soft/60"
            >
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <h4 className="mt-4 text-lg font-medium text-foreground">{f.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
