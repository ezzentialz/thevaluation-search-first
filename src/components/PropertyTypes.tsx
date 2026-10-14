'use client';

import { services } from '@/lib/content';
import { useI18n } from '@/context/I18nContext';
import Icon, { type IconName } from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

/** One entry per item in services.types, in the same order. */
const TILES: Array<{ photo?: string; icon: IconName; tint: string }> = [
  { photo: '/images/real/slide3-1920-768.jpg', icon: 'building', tint: '' },
  { photo: '/images/real/office-building.jpg', icon: 'building', tint: '' },
  { photo: '/images/real/city.jpg', icon: 'building', tint: '' },
  // The five industrial categories have no suitable photo in the company's own library, so these
  // are AI-generated illustrative images (public/images/real/gen-*.jpg). Replace with real photos when available.
  { photo: '/images/real/gen-factory.jpg', icon: 'factory', tint: '' },
  { photo: '/images/real/gen-machinery.jpg', icon: 'cog', tint: '' },
  { photo: '/images/real/gen-power.jpg', icon: 'bolt', tint: '' },
  { photo: '/images/real/gen-transport.jpg', icon: 'transport', tint: '' },
  { photo: '/images/real/gen-heavy.jpg', icon: 'crane', tint: '' },
];

export default function PropertyTypes() {
  const { t } = useI18n();
  const labels = t(services.types);

  return (
    <section aria-labelledby="types-title" className="bg-mist py-16 md:py-20">
      <div className="container-x">
        <SectionHeading id="types-title">{t(services.typesTitle)}</SectionHeading>
        <Reveal>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {labels.map((label, i) => {
            const tile = TILES[i];
            return (
              <li key={label} className="group relative aspect-[4/5] overflow-hidden bg-navy-800 sm:aspect-[4/3] lg:aspect-[4/5]">
                {tile.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={tile.photo}
                    alt=""
                    loading="lazy"
                    width={640}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${tile.tint}`}>
                    <Icon name={tile.icon} className="absolute right-4 top-4 h-14 w-14 text-white/30 sm:h-16 sm:w-16" />
                  </div>
                )}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-4 font-display text-base font-semibold leading-snug text-white sm:p-5 sm:text-lg">
                  {label}
                </p>
              </li>
            );
          })}
        </ul>
        </Reveal>
      </div>
    </section>
  );
}
