'use client';

import { buySellRent } from '@/lib/content';
import { useI18n } from '@/context/I18nContext';
import { useRequestTab } from '@/context/RequestContext';
import type { RequestTab } from '@/lib/request';

const ORDER: RequestTab[] = ['buy', 'rent', 'sell'];

/** Buy / Rent / Sell switch with an underlined active tab; state is shared via RequestContext. */
export default function RequestTabs({ tone }: { tone: 'dark' | 'light' }) {
  const { t } = useI18n();
  const { tab, setTab } = useRequestTab();
  const dark = tone === 'dark';

  return (
    <div role="group" aria-label={t(buySellRent.title)} className={`flex gap-6 border-b ${dark ? 'border-white/20' : 'border-[#d5d8e4]'}`}>
      {ORDER.map((key) => {
        const active = tab === key;
        return (
          <button
            key={key}
            type="button"
            aria-pressed={active}
            onClick={() => setTab(key)}
            className={`eyebrow -mb-px min-h-[44px] border-b-[3px] px-1 transition-colors duration-200 ${
              active
                ? 'border-gold ' + (dark ? 'text-white' : 'text-navy-800')
                : 'border-transparent ' + (dark ? 'text-white/70 hover:text-white' : 'text-slate2 hover:text-navy-800')
            }`}
          >
            {t(buySellRent.tabs[key])}
          </button>
        );
      })}
    </div>
  );
}
