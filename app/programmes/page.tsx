import type { Metadata } from 'next';
import Link from 'next/link';
import Programmes from '@/components/Programmes';
import Projects from '@/components/Projects';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Flagship Research Programmes — Speed Breeding & Genomics | NIGAB',
  description:
    'Overview of NIGAB research programmes: Transgenic Research & CRISPR, Green Super Rice & Speed Breeding, Animal Genomics & Vaccine Development, and Functional Genomics & Bioinformatics.',
  keywords: [
    'NIGAB research programmes',
    'Green Super Rice Pakistan',
    'CRISPR speed breeding Pakistan',
    'transgenic research PARC',
    'animal biotechnology vaccines Pakistan',
    'functional genomics bioinformatics NARC',
  ],
  alternates: {
    canonical: 'https://nigab.websitepakistan.com/programmes',
  },
  openGraph: {
    title: 'Research Programmes | NIGAB — PARC Islamabad',
    description:
      'National research initiatives in transgenic crops, Green Super Rice, genome editing, and animal genetics at NIGAB Islamabad.',
    url: 'https://nigab.websitepakistan.com/programmes',
  },
};

export default function ProgrammesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>Research Programmes</span>
          </nav>
          <h1>National Agricultural Genomics &amp; Breeding Programmes</h1>
          <p className="lead">
            NIGAB executes four strategic, multi-disciplinary research programmes designed to enhance
            crop and livestock productivity by at least 10% and deliver climate-resilient agricultural
            solutions across Pakistan.
          </p>
        </div>
      </section>

      <Programmes />
      <div id="projects">
        <Projects />
      </div>
      <CtaBand />
    </>
  );
}
