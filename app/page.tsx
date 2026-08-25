/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Main Portal Homepage View & Section Assembler
 * ============================================================================
 */

import About from '@/components/About';
import Academics from '@/components/Academics';
import Contact from '@/components/Contact';
import CtaBand from '@/components/CtaBand';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Laboratories from '@/components/Laboratories';
import News from '@/components/News';
import Programmes from '@/components/Programmes';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import QuickAccess from '@/components/QuickAccess';
import Services from '@/components/Services';
import Stats from '@/components/Stats';

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Stats />
      <About />
      <Programmes />
      <Laboratories />
      <Services />
      <Projects />
      <Publications />
      <Academics />
      <News />
      <Gallery />
      <CtaBand />
      <Contact />
    </>
  );
}
