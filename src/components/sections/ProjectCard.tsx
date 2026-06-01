"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Project } from "@/content/data";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, lang } = useLanguage();

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background-soft/50 p-7 transition-colors hover:border-accent/40"
    >
      {/* brilho de canto no hover */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="font-mono text-xl font-medium tracking-tight text-foreground">
          {project.title}
        </h3>
        {project.badge && (
          <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted">
            {project.badge[lang]}
          </span>
        )}
      </div>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">{project.description[lang]}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-foreground/5 px-2.5 py-1 font-mono text-[11px] text-foreground/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-soft">
        {t.projects.viewProject}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </span>
    </motion.a>
  );
}
