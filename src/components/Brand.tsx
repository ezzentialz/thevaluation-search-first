import { company } from '@/lib/content';

/** Emblem on a white tile plus a typeset wordmark; the coloured wide logo is never placed on navy. */
export default function Brand({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="flex h-11 w-11 flex-none items-center justify-center bg-white p-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/real/LogoToWeb-rgb-1.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
      </span>
      <span className="font-display text-[0.8125rem] font-semibold uppercase leading-tight tracking-[0.12em] text-white sm:text-sm">
        {company.shortName.en}
      </span>
    </span>
  );
}
