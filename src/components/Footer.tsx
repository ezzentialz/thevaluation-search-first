'use client';

import { company, contact, links, relatedLinks } from '@/lib/content';
import { ui } from '@/lib/ui';
import { useI18n } from '@/context/I18nContext';
import Brand from './Brand';

const QUICK = [
  { href: '#about', label: ui.nav.about },
  { href: '#services', label: ui.nav.services },
  { href: '#apply', label: ui.nav.apply },
  { href: '#offices', label: ui.nav.offices },
  { href: '#careers', label: ui.nav.careers },
  { href: '#contact', label: ui.nav.contact },
];

const linkCls = 'inline-flex min-h-[32px] items-center text-white/80 underline-offset-4 transition-colors duration-200 hover:text-gold hover:underline';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-navy-950 text-sm text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Brand />
          <p className="mt-5 text-white/80">{t(company.name)}</p>
          <address className="mt-4 space-y-1 not-italic text-white/80">
            <p>{t(contact.address)}</p>
            <p><a href={contact.telHref} className={linkCls}>{contact.tel}</a></p>
            <p><a href={`mailto:${contact.email}`} className={linkCls}>{contact.email}</a></p>
          </address>
        </div>
        <nav aria-label={t(ui.footer.links)} className="lg:col-span-2">
          <h2 className="eyebrow mb-3 text-gold">{t(ui.footer.links)}</h2>
          <ul>
            {QUICK.map((q) => (
              <li key={q.href}><a href={q.href} className={linkCls}>{t(q.label)}</a></li>
            ))}
            <li><a href={links.researchArticles} target="_blank" rel="noopener noreferrer" className={linkCls}>{t(ui.researchArticles)}</a></li>
          </ul>
        </nav>
        <div className="md:col-span-2 lg:col-span-6">
          <h2 className="eyebrow mb-3 text-gold">{t(ui.footer.related)}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {relatedLinks.map((g) => (
              <div key={g.group.en}>
                <h3 className="mb-1 font-semibold text-white">{t(g.group)}</h3>
                <ul>
                  {g.items.map((i) => (
                    <li key={i.url}><a href={i.url} target="_blank" rel="noopener noreferrer" className={linkCls}>{i.name}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x flex flex-col gap-2 py-5 text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {t(company.name)} {t(ui.footer.rights)}</p>
          <a href={links.privacyPolicyTh} target="_blank" rel="noopener noreferrer" className={linkCls}>{t(ui.footer.privacy)}</a>
        </div>
      </div>
    </footer>
  );
}
