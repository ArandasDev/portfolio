"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { profile } from "@/content/data";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function NavbarV2() {
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
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-accent">{profile.nickname}</span>
          <span className="text-muted">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-mono text-sm text-muted transition-colors hover:text-foreground"
              >
                <span className="text-accent/70">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 font-mono text-xs sm:flex">
            <Link href="/" className="rounded-full border border-accent/40 px-2.5 py-1 text-accent-soft transition-colors hover:border-accent/60">
              atual
            </Link>
            <Link href="/v1" className="rounded-full border border-border px-2.5 py-1 text-muted transition-colors hover:border-accent/50 hover:text-foreground">
              v1
            </Link>
          </div>
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-px w-4 bg-foreground transition-transform ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-foreground transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 font-mono text-sm text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  <span className="text-accent/70">0{i + 1}.</span> {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
