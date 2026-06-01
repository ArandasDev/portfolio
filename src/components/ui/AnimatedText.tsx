"use client";

import { motion, type Variants } from "framer-motion";

// Mapa estático de componentes motion (evita criar componentes durante o render).
const MOTION_TAGS = {
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  div: motion.div,
} as const;

type MotionTagName = keyof typeof MOTION_TAGS;

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

interface AnimatedTextProps {
  text: string;
  as?: MotionTagName;
  className?: string;
  /** Atraso entre palavras. */
  stagger?: number;
  /** Anima ao entrar na viewport em vez de no mount. */
  whileInView?: boolean;
}

/**
 * Revela um texto palavra a palavra com leve desfoque — usado em títulos.
 */
export function AnimatedText({
  text,
  as = "span",
  className,
  stagger = 0.05,
  whileInView = false,
}: AnimatedTextProps) {
  const MotionTag = MOTION_TAGS[as];
  const words = text.split(" ");

  const animationProps = whileInView
    ? { whileInView: "visible" as const, viewport: { once: true, margin: "-10%" } }
    : { animate: "visible" as const };

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      {...animationProps}
    >
      {words.map((w, i) => (
        <motion.span key={`${w}-${i}`} variants={word} className="inline-block whitespace-pre">
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
