'use client';

import { executives } from '@/lib/content';
import { ui } from '@/lib/ui';
import { useI18n } from '@/context/I18nContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Executives() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="exec-title" className="bg-white py-16 md:py-24">
      <div className="container-x">
        <SectionHeading id="exec-title">{t(ui.executives)}</SectionHeading>
        <Reveal>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {executives.map((e) => (
              <li key={e.name.en} className="border-t-[3px] border-gold bg-mist p-6">
                <p className="font-display text-xl font-semibold text-navy-800">{t(e.name)}</p>
                <p className="mt-2 text-slate2">{t(e.role)}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
