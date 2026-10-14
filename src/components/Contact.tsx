'use client';

import { contact } from '@/lib/content';
import { ui } from '@/lib/ui';
import { useI18n } from '@/context/I18nContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { t } = useI18n();
  const rows: Array<{ label: string; value: React.ReactNode }> = [
    { label: t(ui.contact.address), value: t(contact.address) },
    { label: t(ui.contact.tel), value: <a href={contact.telHref} className="hover:text-royal hover:underline">{contact.tel}</a> },
    {
      label: t(ui.contact.mobile),
      value: contact.mobiles.map((m, i) => (
        <span key={m}>
          {i > 0 && ', '}
          <a href={`tel:${m.replace(/\D/g, '')}`} className="hover:text-royal hover:underline">{m}</a>
        </span>
      )),
    },
    { label: t(ui.contact.fax), value: contact.fax },
    { label: t(ui.contact.email), value: <a href={`mailto:${contact.email}`} className="hover:text-royal hover:underline">{contact.email}</a> },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-16 md:py-24">
      <div className="container-x">
        <SectionHeading id="contact-title">{t(contact.title)}</SectionHeading>
        <Reveal>
          <dl className="grid gap-x-10 gap-y-5 border-t border-[#dfe2ec] pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {rows.map((r) => (
              <div key={r.label}>
                <dt className="eyebrow text-gold-dark">{r.label}</dt>
                <dd className="mt-1 text-lg text-ink">{r.value}</dd>
              </div>
            ))}
          </dl>
          <a href={`mailto:${contact.email}`} className="btn-primary mt-8">{t(ui.contact.sendEmail)}</a>
        </Reveal>
      </div>
    </section>
  );
}
