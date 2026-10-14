'use client';

import { useEffect, useState } from 'react';
import { contact } from '@/lib/content';
import { ui } from '@/lib/ui';
import { useI18n } from '@/context/I18nContext';
import Brand from './Brand';

const NAV = [
  { href: '#about', label: ui.nav.about },
  { href: '#services', label: ui.nav.services },
  { href: '#apply', label: ui.nav.apply },
  { href: '#offices', label: ui.nav.offices },
  { href: '#careers', label: ui.nav.careers },
  { href: '#contact', label: ui.nav.contact },
];

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-navy-950 text-[0.8125rem] text-white/85">
        <div className="container-x flex min-h-[40px] items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a href={contact.telHref} className="flex min-h-[40px] items-center hover:text-white">
              {contact.tel}
            </a>
            <a href={`mailto:${contact.email}`} className="hidden min-h-[40px] items-center hover:text-white sm:flex">
              {contact.email}
            </a>
          </div>
          <div role="group" aria-label={t(ui.language)} className="flex items-center">
            {(['th', 'en'] as const).map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span aria-hidden="true" className="text-white/30">|</span>}
                <button
                  type="button"
                  onClick={() => setLocale(l)}
                  aria-pressed={locale === l}
                  className={`min-h-[40px] min-w-[44px] px-2 font-semibold transition-colors duration-200 ${
                    locale === l ? 'text-gold' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-white/15 bg-navy-800">
        <div className="container-x flex h-[68px] items-center justify-between gap-4">
          <a href="#top" aria-label={t(ui.home)} className="min-w-0">
            <Brand />
          </a>
          <nav aria-label={t(ui.mainNav)} className="hidden items-center gap-1 xl:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="eyebrow flex min-h-[44px] items-center whitespace-nowrap px-3 text-white/90 transition-colors duration-200 hover:text-gold"
              >
                {t(n.label)}
              </a>
            ))}
            <a href="#contact" className="btn btn-outline-light eyebrow ml-3 whitespace-nowrap !px-5">
              {t(ui.nav.contactCta)}
            </a>
          </nav>
          <button
            type="button"
            className="flex h-11 w-11 flex-none items-center justify-center border border-white/40 text-white xl:hidden"
            aria-label={t(open ? ui.menuClose : ui.menuOpen)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M4 4l14 14M18 4L4 18" /> : <path d="M3 6h16M3 11h16M3 16h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <nav id="mobile-menu" aria-label={t(ui.mainNav)} className="border-t border-white/15 bg-navy-800 xl:hidden">
            <ul className="container-x py-2">
              {NAV.map((n) => (
                <li key={n.href} className="border-b border-white/10 last:border-0">
                  <a href={n.href} onClick={() => setOpen(false)} className="eyebrow flex min-h-[48px] items-center text-white">
                    {t(n.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
