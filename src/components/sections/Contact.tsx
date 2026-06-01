"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { social } from "@/content/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconClass = "h-5 w-5";

const channels = [
  {
    label: "Email",
    value: social.email,
    href: `mailto:${social.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={iconClass} aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "@ArandasDev",
    href: social.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "in/arandasdev",
    href: social.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36"
    >
      <div className="glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-72" />
      <SectionHeading kicker={t.contact.kicker} title={t.contact.heading} />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-xl text-lg text-muted"
      >
        {t.contact.subtitle}
      </motion.p>

      <div className="grid gap-4 sm:grid-cols-3">
        {channels.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-background-soft/50 p-6 transition-colors hover:border-accent/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-accent-soft transition-colors group-hover:border-accent/50">
              {c.icon}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-foreground">{c.label}</span>
              <span className="block truncate text-sm text-muted">{c.value}</span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
