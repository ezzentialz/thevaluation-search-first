'use client';

import { careers } from '@/lib/content';
import { ui } from '@/lib/ui';
import { useI18n } from '@/context/I18nContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Careers() {
  const { t } = useI18n();

  return (
    <section id="careers" aria-labelledby="careers-title" className="bg-mist py-16 md:py-24">
      <div className="container-x">
        <SectionHeading id="careers-title">{t(careers.title)}</SectionHeading>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <h3 className="eyebrow mb-4 text-gold-dark">{t(careers.subtitle)}</h3>
            <ul className="divide-y divide-[#dfe2ec] border-y border-[#dfe2ec] bg-white">
              {careers.positions.map((p) => (
                <li key={p.title.en} className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="font-display text-lg font-semibold leading-snug text-navy-800">{t(p.title)}</span>
                  <span className="flex-none whitespace-nowrap text-sm text-slate2">
                    {p.openings} {t(ui.careers.openings)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="bg-navy-800 p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-semibold">{t(ui.careers.howTo)}</h3>
              <p className="mt-3">{t(careers.howToApply)}</p>
              <ul className="mt-4 space-y-1 text-[0.9375rem] text-white/90">
                <li>
                  <a href={`mailto:${careers.email}`} className="underline underline-offset-4 hover:text-gold">{careers.email}</a>
                </li>
                <li>{t(ui.careers.tel)} {careers.tel}</li>
                <li>{t(ui.careers.fax)} {careers.fax}</li>
              </ul>
              <a href={careers.applicationFormUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full sm:w-auto">
                {t(ui.careers.download)}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
