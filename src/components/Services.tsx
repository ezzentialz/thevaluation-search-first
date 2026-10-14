'use client';

import { links, services } from '@/lib/content';
import { ui } from '@/lib/ui';
import { useI18n } from '@/context/I18nContext';
import Icon, { type IconName } from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Services() {
  const { t } = useI18n();

  return (
    <section id="services" aria-labelledby="services-title" className="bg-white py-16 md:py-24">
      <div className="container-x">
        <SectionHeading id="services-title">{t(services.title)}</SectionHeading>
        <p className="mb-8 max-w-3xl text-lg text-slate2">{t(services.intro)}</p>

        <Reveal>
          <h3 className="eyebrow mb-4 text-gold-dark">{t(services.scopeTitle)}</h3>
          <ul className="grid gap-px border border-[#dfe2ec] bg-[#dfe2ec] sm:grid-cols-2 lg:grid-cols-4">
            {services.scope.map((s) => (
              <li key={s.icon} className="flex items-start gap-4 bg-white p-5 transition-colors duration-200 hover:bg-mist">
                <span className="flex h-11 w-11 flex-none items-center justify-center bg-navy-800 text-white">
                  <Icon name={s.icon as IconName} className="h-6 w-6" />
                </span>
                <span className="pt-1 font-display text-lg font-semibold leading-snug text-navy-800">{t(s.title)}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <h3 className="font-display text-2xl font-semibold text-navy-800">{t(services.objectivesTitle)}</h3>
            <ol className="mt-5 divide-y divide-[#dfe2ec] border-y border-[#dfe2ec]">
              {t(services.objectives).map((o, i) => (
                <li key={o} className="flex gap-4 py-3">
                  <span className="w-7 flex-none font-display text-lg font-semibold text-gold-dark">{String(i + 1).padStart(2, '0')}</span>
                  <span>{o}</span>
                </li>
              ))}
            </ol>
            <a href={links.researchArticles} target="_blank" rel="noopener noreferrer" className="btn-outline-dark mt-8">
              {t(ui.researchArticles)} <span aria-hidden="true">→</span>
            </a>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="aspect-[3/2] overflow-hidden bg-mist lg:aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/real/workers-of-real-estate-agency-PNLKS22.jpg"
                alt=""
                loading="lazy"
                width={540}
                height={368}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
