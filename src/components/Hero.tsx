'use client';

import { useEffect, useState } from 'react';
import { buySellRent, company } from '@/lib/content';
import { openMailto } from '@/lib/request';
import { ui } from '@/lib/ui';
import { useI18n } from '@/context/I18nContext';
import { useRequestTab } from '@/context/RequestContext';
import RequestTabs from './RequestTabs';

const POSTER = '/images/hero-slide.jpg';

/** The Bangkok video only loads on wide screens and when the visitor has not asked for reduced motion. */
function useHeroVideo() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const q = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');
    const update = () => setShow(q.matches);
    update();
    q.addEventListener('change', update);
    return () => q.removeEventListener('change', update);
  }, []);
  return show;
}

function QuickForm() {
  const { t } = useI18n();
  const { tab } = useRequestTab();
  const [values, setValues] = useState({ name: '', phone: '', type: '', province: '' });
  const [status, setStatus] = useState<'idle' | 'error' | 'sent'>('idle');
  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.name.trim() || !values.phone.trim()) {
      setStatus('error');
      return;
    }
    const typeLabel = ui.form.types.find((x) => x.key === values.type)?.label;
    openMailto(`${t(ui.form.mailSubject)}: ${t(buySellRent.tabs[tab])}`, [
      [t(buySellRent.title), t(buySellRent.tabs[tab])],
      [t(ui.form.fullName), values.name],
      [t(ui.form.phone), values.phone],
      [t(ui.form.propertyType), typeLabel ? t(typeLabel) : ''],
      [t(ui.form.province), values.province],
    ]);
    setStatus('sent');
  };

  return (
    <form onSubmit={submit} noValidate className="mt-5">
      <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="sr-only">{t(ui.form.fullName)} *</label>
          <input id="q-name" className="field-dark" placeholder={`${t(ui.form.fullName)} *`} autoComplete="name" required aria-required="true" value={values.name} onChange={set('name')} />
        </div>
        <div>
          <label htmlFor="q-phone" className="sr-only">{t(ui.form.phone)} *</label>
          <input id="q-phone" type="tel" className="field-dark" placeholder={`${t(ui.form.phone)} *`} autoComplete="tel" required aria-required="true" value={values.phone} onChange={set('phone')} />
        </div>
        <div>
          <label htmlFor="q-type" className="sr-only">{t(ui.form.propertyType)}</label>
          <select id="q-type" className="field-dark" value={values.type} onChange={set('type')}>
            <option value="" className="text-ink">{t(ui.form.propertyType)}</option>
            {ui.form.types.map((x) => (
              <option key={x.key} value={x.key} className="text-ink">{t(x.label)}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="q-province" className="sr-only">{t(ui.form.province)}</label>
          <input id="q-province" className="field-dark" placeholder={t(ui.form.province)} value={values.province} onChange={set('province')} />
        </div>
      </div>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">{t(ui.hero.submit)}</button>
      <p role="status" className={`mt-3 text-sm ${status === 'error' ? 'text-[#ffb4b4]' : 'text-white/85'}`}>
        {status === 'error' && t(ui.form.errorRequired)}
        {status === 'sent' && t(ui.form.sent)}
      </p>
    </form>
  );
}

export default function Hero() {
  const { t } = useI18n();
  const showVideo = useHeroVideo();

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-navy-800 text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={POSTER} alt="" className="absolute inset-0 h-full w-full object-cover" />
      {showVideo && (
        <video className="absolute inset-0 h-full w-full object-cover" poster={POSTER} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}>
          <source src="/videos/hero-bangkok.mp4" type="video/mp4" />
        </video>
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/90 to-navy-800/80" />

      <div className="container-x relative grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-20">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-4 text-gold">{t(company.name)}</p>
          <h1 id="hero-title" className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-[3.5rem]">
            {t(company.slogan)}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="btn-outline-light">{t(ui.hero.explore)}</a>
            <a href="#contact" className="btn-outline-light">{t(ui.nav.contactCta)}</a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="border border-white/20 bg-navy-900/85 p-5 sm:p-7">
            <p className="sr-only">{t(ui.hero.panelLabel)}</p>
            <RequestTabs tone="dark" />
            <QuickForm />
          </div>
          <a href="#apply" className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-gold underline-offset-4 hover:underline">
            {t(ui.hero.fullForm)} <span aria-hidden="true">&nbsp;→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
