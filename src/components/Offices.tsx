'use client';

import { useEffect, useRef, useState } from 'react';
import { branches, contact, type Branch } from '@/lib/content';
import { ui } from '@/lib/ui';
import { useI18n } from '@/context/I18nContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const digits = (s: string) => s.replace(/\D/g, '');

function Phones({ branch }: { branch: Branch }) {
  // The head office number is a switchboard range ("0-2717-0801-8"), so it uses the dialable number from contact.
  const list = branch.phones.split(',').map((p) => p.trim());
  return (
    <>
      {list.map((p, i) => (
        <span key={p}>
          {i > 0 && ', '}
          <a href={branch.id === 'hq' ? contact.telHref : `tel:${digits(p)}`} className="hover:text-royal hover:underline">{p}</a>
        </span>
      ))}
    </>
  );
}

function Mobiles({ value }: { value: string }) {
  return (
    <>
      {value.split(',').map((p, i) => (
        <span key={p}>
          {i > 0 && ', '}
          <a href={`tel:${digits(p)}`} className="hover:text-royal hover:underline">{p.trim()}</a>
        </span>
      ))}
    </>
  );
}

function OfficeCard({ branch, onMap, featured }: { branch: Branch; onMap: (b: Branch) => void; featured?: boolean }) {
  const { t } = useI18n();
  return (
    <article className={`flex h-full flex-col border border-[#dfe2ec] bg-white p-6 ${featured ? 'border-l-[4px] border-l-gold sm:p-8' : ''}`}>
      <h3 className={`font-display font-semibold text-navy-800 ${featured ? 'text-2xl' : 'text-xl'}`}>{t(branch.name)}</h3>
      <p className="mt-3 text-slate2">{t(branch.address)}</p>
      <dl className="mt-4 space-y-1 text-[0.9375rem]">
        <div className="flex gap-2">
          <dt className="w-14 flex-none font-semibold text-ink">{t(ui.offices.tel)}</dt>
          <dd><Phones branch={branch} /></dd>
        </div>
        {branch.mobile && (
          <div className="flex gap-2">
            <dt className="w-14 flex-none font-semibold text-ink">{t(ui.offices.mobile)}</dt>
            <dd><Mobiles value={branch.mobile} /></dd>
          </div>
        )}
        <div className="flex gap-2">
          <dt className="w-14 flex-none font-semibold text-ink">{t(ui.contact.email)}</dt>
          <dd className="min-w-0 break-words"><a href={`mailto:${branch.email}`} className="hover:text-royal hover:underline">{branch.email}</a></dd>
        </div>
      </dl>
      {branch.map && (
        <button
          type="button"
          onClick={() => onMap(branch)}
          className="mt-5 inline-flex min-h-[44px] items-center self-start border-b-2 border-gold text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-royal"
        >
          {t(ui.offices.viewMap)}
        </button>
      )}
    </article>
  );
}

function MapDialog({ branch, onClose }: { branch: Branch | null; onClose: () => void }) {
  const { t } = useI18n();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (branch && !dlg.open) dlg.showModal();
    if (!branch && dlg.open) dlg.close();
  }, [branch]);

  return (
    <dialog
      ref={ref}
      aria-label={branch ? `${t(ui.offices.mapOf)} ${t(branch.name)}` : undefined}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto w-[min(94vw,920px)] max-w-none bg-white p-0"
    >
      {branch?.map && (
        <div className="p-4 sm:p-6">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="font-display text-lg font-semibold text-navy-800">{t(branch.name)}</p>
            <button type="button" onClick={onClose} className="btn-outline-dark !min-h-[44px] !px-4">{t(ui.offices.close)}</button>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={branch.map} alt={`${t(ui.offices.mapOf)} ${t(branch.name)}`} className="mx-auto max-h-[72vh] w-auto max-w-full object-contain" />
        </div>
      )}
    </dialog>
  );
}

export default function Offices() {
  const { t } = useI18n();
  const [mapBranch, setMapBranch] = useState<Branch | null>(null);
  const [head, ...regional] = branches;

  return (
    <section id="offices" aria-labelledby="offices-title" className="bg-white py-16 md:py-24">
      <div className="container-x">
        <SectionHeading id="offices-title">{t(ui.officesTitle)}</SectionHeading>
        <Reveal>
          <OfficeCard branch={head} onMap={setMapBranch} featured />
        </Reveal>
        <Reveal>
          <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {regional.map((b) => (
              <li key={b.id}>
                <OfficeCard branch={b} onMap={setMapBranch} />
              </li>
            ))}
          </ul>
        </Reveal>
        <MapDialog branch={mapBranch} onClose={() => setMapBranch(null)} />
      </div>
    </section>
  );
}
