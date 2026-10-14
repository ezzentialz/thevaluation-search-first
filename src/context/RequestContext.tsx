'use client';

import React, { createContext, useContext, useState } from 'react';
import type { RequestTab } from '@/lib/request';

interface Ctx {
  tab: RequestTab;
  setTab: (t: RequestTab) => void;
}

const RequestContext = createContext<Ctx | undefined>(undefined);

/** Shares the Buy / Sell / Rent tab between the hero quick form and the full form. */
export function RequestProvider({ children }: { children: React.ReactNode }) {
  const [tab, setTab] = useState<RequestTab>('buy');
  return <RequestContext.Provider value={{ tab, setTab }}>{children}</RequestContext.Provider>;
}

export function useRequestTab() {
  const ctx = useContext(RequestContext);
  if (!ctx) throw new Error('useRequestTab must be used within a RequestProvider');
  return ctx;
}
