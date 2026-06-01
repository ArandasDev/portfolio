"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { ui, type Lang, type UiStrings } from "./translations";

const STORAGE_KEY = "portfolio-lang";

/* --- Store de idioma persistido em localStorage (lido via useSyncExternalStore) --- */

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function readLang(): Lang {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "pt" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "pt";
}

function writeLang(lang: Lang) {
  window.localStorage.setItem(STORAGE_KEY, lang);
  emit();
}

interface LanguageContextValue {
  lang: Lang;
  t: UiStrings;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // No servidor (e na primeira hidratação) usamos "pt"; o cliente reconcilia com o valor salvo.
  const lang = useSyncExternalStore(subscribe, readLang, () => "pt" as Lang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => writeLang(next), []);
  const toggle = useCallback(() => writeLang(readLang() === "pt" ? "en" : "pt"), []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: ui[lang], setLang, toggle }),
    [lang, setLang, toggle],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
