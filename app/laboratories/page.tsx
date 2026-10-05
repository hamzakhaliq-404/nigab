import type { Metadata } from 'next';
import Link from 'next/link';
import Laboratories from '@/components/Laboratories';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: '28 State-of-the-Art Research Laboratories | NIGAB Islamabad',
  description:
    'Directory of 28 cutting-edge plant, animal, and microbial biotechnology laboratories at NIGAB (NARC Islamabad). Includes CRISPR lab, GMO testing reference lab, and animal genomics.',
  keywords: [
    'NIGAB laboratories',
    'NIGAB 28 labs',
    'biotechnology laboratories Islamabad',
    'CRISPR laboratory Pakistan',
    'GMO testing reference lab Pakistan',
    'bioinformatics lab NARC',
    'plant tissue culture laboratory Islamabad',
    'animal genomics laboratory PARC',
  ],
  alternates: {
    canonical: 'https://nigab.websitepakistan.com/laboratories',
  },
  openGraph: {
    title: '28 Research Laboratories | NIGAB — PARC Islamabad',
    description:
      'Explore 28 specialized research laboratories in plant genomics, animal biotechnology, bioinformatics, and diagnostic testing at NIGAB.',
    url: 'https://nigab.websitepakistan.com/laboratories',
  },
};

export default function LaboratoriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>Research Infrastructure</span>
          </nav>
          <h1>28 State-of-the-Art Research Laboratories</h1>
          <p className="lead">
            NIGAB operates a national complex of 28 specialized laboratories, glasshouses, and
            containment facilities at the National Agricultural Research Centre (NARC), Islamabad.
            Search or filter below to inspect individual mandates, activities, and research leads.
          </p>
        </div>
      </section>

      <Laboratories />
      <CtaBand />
    </>
  );
}
