"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

interface SectionHeadingProps {
  kicker: string;
  title: string;
}

/**
 * Cabeçalho padrão de seção: um "kicker" pequeno em destaque + título grande animado.
 */
export function SectionHeading({ kicker, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.p
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-soft"
      >
        <span className="h-px w-8 bg-accent/60" />
        {kicker}
      </motion.p>
      <AnimatedText
        as="h2"
        text={title}
        whileInView
        className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
      />
    </div>
  );
}
