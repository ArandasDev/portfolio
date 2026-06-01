"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { projects, social } from "@/content/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsV2() {
  const { t, lang } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-40">
      <SectionHeading kicker={t.v2.selected} title={t.projects.heading} />

      <div className="border-b border-border">
        {projects.map((project, i) => (
          <motion.a
            key={project.slug}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group grid grid-cols-1 items-start gap-x-6 gap-y-4 border-t border-border px-2 py-8 transition-colors hover:bg-background-soft/40 md:grid-cols-12 md:py-10"
          >
            <span className="font-mono text-sm text-accent md:col-span-1">0{i + 1}</span>

            <div className="md:col-span-8">
              <h3 className="flex flex-wrap items-center gap-3 font-mono text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-aurora md:text-3xl">
                {project.title}
                {project.badge && (
                  <span className="rounded-full border border-border px-2.5 py-1 font-sans text-[10px] uppercase tracking-wider text-muted">
                    {project.badge[lang]}
                  </span>
                )}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                {project.description[lang]}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-foreground/5 px-2.5 py-1 font-mono text-[11px] text-foreground/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <span className="flex items-center gap-2 text-sm font-medium text-accent-soft md:col-span-3 md:justify-end">
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
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <a
          href={social.githubRepos}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
        >
          {t.projects.viewAll}
          <span aria-hidden>→</span>
        </a>
      </motion.div>
    </section>
  );
}
