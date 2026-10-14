'use client';

import { branches, company, services } from '@/lib/content';
import { ui } from '@/lib/ui';
import { useI18n } from '@/context/I18nContext';

export default function TrustStrip() {
  const { t } = useI18n();
  const items = [
    { value: t(company.founded), label: t(ui.trust.established) },
    { value: String(branches.length), label: t(ui.trust.offices) },
    { value: String(services.scope.length), label: t(ui.trust.services) },
    { value: t(ui.trust.approvedShort), label: t(company.approvals) },
  ];

  return (
    <section aria-label={t(company.name)} className="border-b border-[#dfe2ec] bg-white">
      <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`py-7 pr-4 sm:py-9 ${i % 2 === 1 ? 'pl-4 sm:pl-6' : ''} ${i > 0 ? 'lg:border-l lg:border-[#dfe2ec] lg:pl-8' : ''} ${
              i % 2 === 1 ? 'border-l border-[#dfe2ec]' : ''
            } ${i > 1 ? 'border-t border-[#dfe2ec] lg:border-t-0' : ''}`}
          >
            <dd className="font-display text-4xl font-semibold text-navy-800 md:text-5xl">{item.value}</dd>
            <dt className="mt-2 text-sm leading-snug text-slate2">{item.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
