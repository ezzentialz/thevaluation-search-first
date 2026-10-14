import { contact } from './content';

export type RequestTab = 'buy' | 'sell' | 'rent';

/** Opens the visitor's mail client with the collected fields in the body (there is no backend). */
export function openMailto(subject: string, rows: Array<[string, string]>) {
  const body = rows
    .filter(([, value]) => value.trim() !== '')
    .map(([label, value]) => `${label}: ${value.trim()}`)
    .join('\n');
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
