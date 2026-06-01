"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { profile, social } from "@/content/data";

/**
 * Crachá de identificação pendurado por um cordão (lanyard) com a marca "leega".
 * Anima como um pêndulo: entra balançando e oscila suavemente; ao passar o mouse,
 * recebe um leve empurrão. Respeita prefers-reduced-motion.
 */
export function IdBadge() {
  const { lang } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <div className="flex justify-center [perspective:1200px]">
      {/* Pivô + entrada em pêndulo (oscila até assentar) */}
      <motion.div
        className="flex flex-col items-center [transform-origin:top_center]"
        initial={reduce ? false : { opacity: 0, y: -48, rotate: -12 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ type: "spring", stiffness: 55, damping: 7, mass: 1.1 }}
      >
        {/* Balanço contínuo + empurrão no hover */}
        <motion.div
          className="flex flex-col items-center [transform-origin:top_center]"
          animate={reduce ? undefined : { rotate: [1.8, -1.8, 1.8] }}
          transition={reduce ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={reduce ? undefined : { rotate: [0, 7, -5, 3, -1.8], transition: { duration: 1 } }}
        >
          {/* Cordão (lanyard) com a marca leega */}
          <div className="relative flex h-28 w-11 flex-col items-center justify-evenly overflow-hidden rounded-b-[3px] bg-gradient-to-b from-[#1e3a8a] via-[#1d4ed8] to-[#2563eb] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
            {/* costura lateral */}
            <span className="absolute inset-y-0 left-1 w-px bg-white/10" />
            <span className="absolute inset-y-0 right-1 w-px bg-white/10" />
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="text-[10px] font-extrabold lowercase tracking-tight text-white/85 [text-shadow:0_1px_1px_rgba(0,0,0,0.25)]"
              >
                lee<span className="text-[var(--accent-soft)]">g</span>a
              </span>
            ))}
          </div>

          {/* Presilha metálica (swivel + mosquetão) */}
          <Clasp />

          {/* Crachá */}
          <div className="relative -mt-3 w-[256px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#0ea5e9] shadow-2xl ring-1 ring-white/15">
            {/* brilho diagonal (plástico) */}
            <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
            {/* highlight radial suave */}
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,rgba(255,255,255,0.18),transparent_55%)]" />

            {/* furo / slot reforçado */}
            <span className="absolute left-1/2 top-2.5 h-2 w-12 -translate-x-1/2 rounded-full bg-black/30 shadow-[inset_0_1px_1px_rgba(0,0,0,0.4)] ring-1 ring-white/20" />

            <div className="relative px-6 pb-6 pt-8">
              {/* logo / monograma */}
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/15 font-mono text-xs font-bold text-white ring-1 ring-white/25">
                  {"</>"}
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  {profile.nickname}
                </span>
              </div>

              {/* foto */}
              <div className="mx-auto aspect-square w-36 overflow-hidden rounded-xl bg-white/90 p-1 shadow-lg ring-1 ring-white/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.avatar}
                  alt={`${profile.name} — ${profile.role[lang]}`}
                  width={144}
                  height={144}
                  loading="lazy"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>

              {/* identidade */}
              <div className="mt-5 text-center">
                <p className="text-lg font-semibold leading-tight text-white">{profile.name}</p>
                <p className="mt-0.5 text-sm font-medium text-sky-100/90">{profile.role[lang]}</p>
              </div>

              {/* contato */}
              <div className="mt-4 space-y-1 border-t border-white/15 pt-3 text-center font-mono text-[11px] text-sky-100/80">
                <p className="truncate">{social.email}</p>
                <p>{profile.handle}</p>
              </div>
            </div>

            {/* faixa inferior */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[var(--accent-soft)] via-white/70 to-[var(--accent-2)]" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/** Presilha metálica (swivel + mosquetão estilizado). */
function Clasp() {
  return (
    <svg width="40" height="58" viewBox="0 0 40 58" fill="none" aria-hidden className="drop-shadow-md">
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1f5f9" />
          <stop offset="0.45" stopColor="#94a3b8" />
          <stop offset="1" stopColor="#475569" />
        </linearGradient>
      </defs>
      {/* barril do swivel */}
      <rect x="14" y="0" width="12" height="14" rx="3" fill="url(#metal)" />
      {/* rebite */}
      <circle cx="20" cy="18" r="4.5" fill="url(#metal)" />
      {/* corpo do mosquetão (anel aberto) */}
      <path
        d="M20 22c-7 0-12 5-12 13s5 13 12 13 12-5 12-13"
        stroke="url(#metal)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* gatilho */}
      <rect x="26" y="34" width="4" height="14" rx="2" fill="url(#metal)" />
    </svg>
  );
}
