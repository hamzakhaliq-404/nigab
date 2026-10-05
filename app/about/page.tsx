import type { Metadata } from 'next';
import Link from 'next/link';
import About from '@/components/About';
import Stats from '@/components/Stats';
import CtaBand from '@/components/CtaBand';
import { institute } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About NIGAB — Mandate, History, Governance & Affiliations',
  description:
    'Discover the National Institute for Genomics and Advanced Biotechnology (NIGAB) at NARC, Islamabad. Established in 2007 under PARC to advance plant, animal, and microbial genomics in Pakistan.',
  keywords: [
    'About NIGAB',
    'NIGAB Mandate',
    'NIGAB Islamabad history',
    'Dr. Shaukat Ali Director NIGAB',
    'PARC biotechnology institute',
    'NARC Islamabad research center',
    'agricultural genomics Pakistan',
  ],
  alternates: {
    canonical: 'https://nigab.websitepakistan.com/about',
  },
  openGraph: {
    title: 'About NIGAB — National Institute for Genomics & Advanced Biotechnology | PARC Islamabad',
    description:
      'Mandate, governance, research leadership, and institutional affiliations of NIGAB at NARC, Islamabad.',
    url: 'https://nigab.websitepakistan.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>About the Institute</span>
          </nav>
          <h1>About NIGAB — National Mandate &amp; Governance</h1>
          <p className="lead">
            Established in 2007 under the Pakistan Agricultural Research Council (PARC), NIGAB is
            Pakistan&apos;s apex national institute dedicated to cutting-edge agricultural genomics,
            CRISPR genome editing, and advanced biotechnology across plants, animals, and microbes.
          </p>
        </div>
      </section>

      <Stats />
      <div id="director">
        <About />
      </div>
      <CtaBand />
    </>
  );
}
