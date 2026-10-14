import type { ReactNode } from 'react';

/** Serif section title with a small gold rule; `light` is for navy backgrounds. */
export default function SectionHeading({
  id,
  eyebrow,
  children,
  light = false,
}: {
  id: string;
  eyebrow?: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-8 md:mb-10">
      {eyebrow && <p className={`eyebrow mb-2 ${light ? 'text-gold' : 'text-gold-dark'}`}>{eyebrow}</p>}
      <h2 id={id} className={`font-display text-3xl font-semibold md:text-4xl ${light ? 'text-white' : 'text-navy-800'}`}>
        {children}
      </h2>
      <span aria-hidden="true" className="mt-4 block h-[3px] w-12 bg-gold" />
    </div>
  );
}
