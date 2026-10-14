import type { ReactElement } from 'react';

export type IconName = 'building' | 'cog' | 'chart' | 'search' | 'handshake' | 'briefcase' | 'shield' | 'file' | 'factory' | 'bolt' | 'transport' | 'crane';

const PATHS: Record<IconName, ReactElement> = {
  building: <path d="M4 21V4h10v17M14 9h6v12M8 8h2M8 12h2M8 16h2M2 21h20" />,
  cog: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
    </>
  ),
  chart: <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.5-4.5" />
    </>
  ),
  handshake: <path d="M3 12l4-4 4 2 3-2 4 3 3-1M7 8l-3 4 6 6 2-2M11 10l5 5-3 3" />,
  briefcase: <path d="M3 8h18v12H3zM8 8V5h8v3M3 13h18" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4" />,
  file: <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7" />,
  factory: <path d="M3 21V10l6 4v-4l6 4V6h3v15zM8 17h2M13 17h2" />,
  bolt: <path d="M13 2L5 13h6l-1 9 8-11h-6z" />,
  transport: <path d="M2 14l9-2 5-8h2l-2 8 5 1v2l-6-.5-2 5h-2l.5-5L2 16z" />,
  crane: <path d="M4 21h16M7 21V8l10-5M7 8l-3 3M17 3v8M17 11v3M15 14h4" />,
};

export default function Icon({ name, className = 'h-6 w-6' }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
