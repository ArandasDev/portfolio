"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { profile } from "@/content/data";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "mt-3 rounded-full border border-border bg-background-soft/70 backdrop-blur-xl md:max-w-5xl"
            : "border border-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-medium">
          <span className="text-accent-soft">{"</>"}</span>
          <span className="tracking-tight">{profile.nickname}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/v2"
            className="hidden rounded-full border border-border px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-foreground sm:inline-block"
          >
            v2
          </Link>
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-px w-4 bg-foreground transition-transform ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-4 bg-foreground transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-6 mt-2 overflow-hidden rounded-2xl border border-border bg-background-soft/90 backdrop-blur-xl md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-sm text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
