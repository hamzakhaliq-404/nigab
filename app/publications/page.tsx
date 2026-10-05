import type { Metadata } from 'next';
import Link from 'next/link';
import Publications from '@/components/Publications';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Peer-Reviewed Scientific Publications & Patents | NIGAB Islamabad',
  description:
    'Comprehensive repository of 500+ international impact factor research articles and patented biotechnology innovations produced by NIGAB scientists under PARC.',
  keywords: [
    'NIGAB research publications',
    'NIGAB scientific papers',
    'agricultural genomics research articles Pakistan',
    'biotechnology patents Pakistan',
    'NIGAB library NARC',
  ],
  alternates: {
    canonical: 'https://nigab.websitepakistan.com/publications',
  },
  openGraph: {
    title: 'Scientific Publications & Patent Portfolio | NIGAB Islamabad',
    description:
      'Search and review peer-reviewed scientific contributions in plant genomics, animal genetics, and agricultural biotechnology by NIGAB researchers.',
    url: 'https://nigab.websitepakistan.com/publications',
  },
};

export default function PublicationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>Scientific Library</span>
          </nav>
          <h1>Scientific Publications &amp; Intellectual Property</h1>
          <p className="lead">
            NIGAB scientists have authored over 500 research papers in leading peer-reviewed
            international journals with cumulative impact factor exceeding 800, alongside filing
            patents on novel transgenic vectors, tissue culture protocols, and animal diagnostic assays.
          </p>
        </div>
      </section>

      <Publications />
      <CtaBand />
    </>
  );
}
