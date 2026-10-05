import type { Metadata } from 'next';
import Link from 'next/link';
import Academics from '@/components/Academics';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Academic Fellowships & Hands-on Training Workshops | NIGAB',
  description:
    'PhD and M.Phil supervised research training and national hands-on biotechnology workshops at NIGAB (NARC Islamabad). Affiliated with Quaid-i-Azam University and UAP.',
  keywords: [
    'NIGAB internships',
    'biotechnology internship Islamabad',
    'PhD biotechnology fellowship Pakistan',
    'MPhil agricultural genomics training',
    'tissue culture training workshop Islamabad',
    'CRISPR training Pakistan',
    'NIGAB scholars NARC',
  ],
  alternates: {
    canonical: 'https://nigab.websitepakistan.com/academics',
  },
  openGraph: {
    title: 'Academic Research & Training Programmes | NIGAB — PARC Islamabad',
    description:
      'Cultivating national scientific leadership through postgraduate degree fellowships and practical hands-on workshops in genomics and biotechnology.',
    url: 'https://nigab.websitepakistan.com/academics',
  },
};

export default function AcademicsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>Academic Fellowships</span>
          </nav>
          <h1>Academic Programmes &amp; Biotechnology Capacity Building</h1>
          <p className="lead">
            In formal academic partnership with Quaid-i-Azam University (QAU) and the University of
            Agriculture Peshawar (UAP), NIGAB provides research facilities and expert mentorship
            for doctoral and post-graduate scholars, as well as national hands-on training workshops.
          </p>
        </div>
      </section>

      <Academics />
      <CtaBand />
    </>
  );
}
