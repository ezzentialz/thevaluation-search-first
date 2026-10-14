'use client';

import { RequestProvider } from '@/context/RequestContext';
import { useI18n } from '@/context/I18nContext';
import { ui } from '@/lib/ui';
import About from '@/components/About';
import BuySellRentForm from '@/components/BuySellRentForm';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Executives from '@/components/Executives';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Offices from '@/components/Offices';
import PropertyTypes from '@/components/PropertyTypes';
import Services from '@/components/Services';
import TrustStrip from '@/components/TrustStrip';

export default function Page() {
  const { t } = useI18n();

  return (
    <RequestProvider>
      <a
        href="#main"
        className="sr-only z-50 bg-white px-4 py-3 font-semibold text-navy-800 focus:not-sr-only focus:fixed focus:left-2 focus:top-2"
      >
        {t(ui.skip)}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <PropertyTypes />
        <Services />
        <About />
        <Executives />
        <BuySellRentForm />
        <Offices />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </RequestProvider>
  );
}
