"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { projects, social } from "@/content/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <SectionHeading kicker={t.projects.kicker} title={t.projects.heading} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
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
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
        >
          {t.projects.viewAll}
          <span aria-hidden>→</span>
        </a>
      </motion.div>
    </section>
  );
}
