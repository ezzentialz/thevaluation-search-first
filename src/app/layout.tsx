import type { Metadata } from 'next';
import { I18nProvider } from '@/context/I18nContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Valuation & Consultants | บริษัท เดอะแวลูเอชั่น แอนด์ คอนซัลแทนท์ส จำกัด',
  description:
    'บริษัทประเมินมูลค่าทรัพย์สินของคนไทย ก่อตั้งปี 2535 / Thai-owned property valuation company, established 1992.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
