'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Bi, Locale } from '@/lib/content';

interface Ctx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Pick the string for the current language: t(company.name) */
  t: <T>(v: Bi<T>) => T;
}

const I18nContext = createContext<Ctx | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Start with Thai on both server and first client render to avoid a hydration mismatch.
  const [locale, setLocaleState] = useState<Locale>('th');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('locale');
      if (saved === 'th' || saved === 'en') setLocaleState(saved);
      else if (!navigator.language.startsWith('th')) setLocaleState('en');
    } catch {
      /* storage unavailable: keep default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem('locale', l);
    } catch {
      /* ignore */
    }
  };

  const t = <T,>(v: Bi<T>): T => v[locale];

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider');
  return ctx;
}
