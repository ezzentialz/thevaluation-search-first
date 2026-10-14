'use client';

import { about, company } from '@/lib/content';
import { ui } from '@/lib/ui';
import { useI18n } from '@/context/I18nContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" aria-labelledby="about-title" className="bg-mist py-16 md:py-24">
      <div className="container-x">
        <SectionHeading id="about-title">{t(about.title)}</SectionHeading>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[3/2] overflow-hidden bg-navy-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/real/about.jpg" alt="" loading="lazy" width={1280} height={853} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal className="space-y-5 text-base leading-relaxed text-ink lg:col-span-7" delay={0.1}>
            {t(about.paragraphs).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="bg-white p-6 sm:p-8 lg:col-span-7">
            <h3 className="font-display text-xl font-semibold text-navy-800">{t(ui.aboutClients)}</h3>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {t(about.clientTypes).map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-[6px] w-[6px] flex-none bg-gold" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="bg-navy-800 p-6 text-white sm:p-8 lg:col-span-5" delay={0.1}>
            <h3 className="font-display text-xl font-semibold">{t(ui.aboutRecognition)}</h3>
            <p className="mt-4">{t(company.approvals)}</p>
            <p className="mt-3 border-t border-white/20 pt-3">{t(company.membership)}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
