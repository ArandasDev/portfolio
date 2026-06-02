"use client";

import { useRef, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { profile } from "@/content/data";

/**
 * Crachá de ID pendurado. Design minimalista: card branco (foto + identidade)
 * com o card preto da empresa "leega" atrás.
 *
 * Interação:
 *  - Arrastar = segura e balança o crachá (pêndulo, com momento ao soltar).
 *  - Clicar  = revela melhor o card da empresa atrás (fan-out).
 */
export function IdBadge() {
  const { t, lang } = useLanguage();
  const reduce = useReducedMotion();

  const pivotRef = useRef<HTMLDivElement>(null);
  const rotate = useMotionValue(0);
  const [revealed, setRevealed] = useState(false);
  const [grabbing, setGrabbing] = useState(false);

  const drag = useRef({ active: false, offset: 0, lastT: 0, vel: 0, startX: 0, startY: 0 });

  // Ângulo (em graus) da linha pivô→ponteiro, medido a partir da vertical.
  function pointerAngle(clientX: number, clientY: number) {
    const el = pivotRef.current;
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    const px = r.left + r.width / 2;
    const py = r.top;
    return (Math.atan2(clientX - px, clientY - py) * 180) / Math.PI;
  }

  function onPointerDown(e: React.PointerEvent) {
    e.currentTarget.setPointerCapture(e.pointerId);
    const a = pointerAngle(e.clientX, e.clientY);
    drag.current = {
      active: true,
      offset: rotate.get() - a,
      lastT: performance.now(),
      vel: 0,
      startX: e.clientX,
      startY: e.clientY,
    };
    setGrabbing(true);
  }

  function onPointerMove(e: React.PointerEvent) {
    const d = drag.current;
    if (!d.active) return;
    const a = pointerAngle(e.clientX, e.clientY);
    const target = Math.max(-78, Math.min(78, a + d.offset));
    const now = performance.now();
    const dt = now - d.lastT;
    if (dt > 0) d.vel = ((target - rotate.get()) / dt) * 1000; // graus/seg
    d.lastT = now;
    rotate.set(target);
  }

  function onPointerUp(e: React.PointerEvent) {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    setGrabbing(false);

    const dist = Math.hypot(e.clientX - d.startX, e.clientY - d.startY);
    // Movimento pequeno = clique → alterna a revelação da empresa.
    if (dist < 6) setRevealed((v) => !v);

    if (reduce) {
      animate(rotate, 0, { duration: 0.25 });
    } else {
      animate(rotate, 0, { type: "spring", stiffness: dist < 6 ? 120 : 45, damping: 6, velocity: d.vel });
    }
  }

  return (
    <div className="flex flex-col items-center [perspective:1200px]">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: -28 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
      >
        {/* Wrapper estável usado como referência do pivô (transform do filho não afeta seu box). */}
        <div ref={pivotRef}>
          <motion.div
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{ rotate, transformOrigin: "top center", touchAction: "none" }}
            className={`flex select-none flex-col items-center ${grabbing ? "cursor-grabbing" : "cursor-grab"}`}
          >
            {/* Cordão (lanyard) preto com a marca leega */}
            <div className="relative flex h-24 w-10 flex-col items-center justify-evenly overflow-hidden rounded-b-[2px] bg-neutral-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
              {[0, 1, 2].map((i) => (
                <span key={i} className="font-mono text-[9px] font-bold lowercase tracking-tight text-white/85">
                  lee<span className="text-[var(--accent-soft)]">g</span>a
                </span>
              ))}
            </div>

            {/* Presilha metálica */}
            <Clip />

            {/* Cards (empresa atrás + identidade na frente) */}
            <div className="relative -mt-2">
              <motion.div
                initial={false}
                animate={revealed ? { x: -60, y: -2, rotate: -15 } : { x: -16, y: -10, rotate: -7 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="absolute left-0 top-0 z-0 flex h-full w-56 flex-col rounded-2xl bg-neutral-950 p-4 shadow-2xl ring-1 ring-white/10"
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-4 w-4 rounded-[4px] bg-gradient-to-br from-[var(--accent-soft)] to-[var(--accent-2)]" />
                  <span className="font-mono text-sm font-bold lowercase tracking-tight text-white">
                    lee<span className="text-[var(--accent-soft)]">g</span>a
                  </span>
                </div>
                <span className="mt-auto font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Identity
                </span>
              </motion.div>

              {/* Card branco de identidade */}
              <div className="relative z-10 w-56 rounded-2xl bg-neutral-100 p-2.5 shadow-2xl ring-1 ring-black/5">
                <span className="absolute left-1/2 top-1 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/15" />
                <div className="relative mt-1 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.avatar}
                    alt={`${profile.name} — ${profile.role[lang]}`}
                    width={224}
                    height={280}
                    loading="lazy"
                    draggable={false}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="absolute inset-x-2 bottom-2 rounded-lg bg-white/95 px-3 py-2 shadow-sm backdrop-blur">
                    <p className="text-sm font-semibold leading-tight text-neutral-900">{profile.name}</p>
                    <p className="text-[11px] text-neutral-500">{profile.role[lang]}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1.5 pb-0.5 pt-2 font-mono text-[9px] font-medium uppercase tracking-wider text-neutral-400">
                  <span>{profile.nickname}</span>
                  <span>ID · {profile.handle.replace("@", "")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <p className="mt-6 max-w-[15rem] text-center font-mono text-[11px] leading-relaxed text-muted">
        {t.v3.dragHint}
      </p>
    </div>
  );
}

/** Presilha metálica (crimp + argola). */
function Clip() {
  return (
    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" aria-hidden className="drop-shadow-md">
      <defs>
        <linearGradient id="clip-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1f5f9" />
          <stop offset="0.45" stopColor="#94a3b8" />
          <stop offset="1" stopColor="#475569" />
        </linearGradient>
      </defs>
      <rect x="6" y="0" width="18" height="11" rx="2" fill="url(#clip-metal)" />
      <rect x="12" y="9" width="6" height="6" fill="url(#clip-metal)" />
      <circle cx="15" cy="24" r="6.5" stroke="url(#clip-metal)" strokeWidth="3" fill="none" />
    </svg>
  );
}
