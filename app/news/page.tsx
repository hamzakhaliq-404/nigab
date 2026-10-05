import type { Metadata } from 'next';
import Link from 'next/link';
import News from '@/components/News';
import Gallery from '@/components/Gallery';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Newsroom, Press Releases & Event Announcements | NIGAB',
  description:
    'Latest official announcements, bilateral partnerships, conferences, scientific breakthroughs, and institutional visits at NIGAB (PARC, Islamabad).',
  keywords: [
    'NIGAB news',
    'NIGAB announcements',
    'NIGAB events Islamabad',
    'PARC agricultural biotechnology news',
    'NIGAB press releases',
  ],
  alternates: {
    canonical: 'https://nigab.websitepakistan.com/news',
  },
  openGraph: {
    title: 'Newsroom & Institutional Updates | NIGAB — PARC Islamabad',
    description:
      'Official announcements, conference notices, and research milestones from the National Institute for Genomics and Advanced Biotechnology.',
    url: 'https://nigab.websitepakistan.com/news',
  },
};

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>Institutional Newsroom</span>
          </nav>
          <h1>Newsroom, Media &amp; Institutional Announcements</h1>
          <p className="lead">
            Stay updated with recent research milestones, bilateral scientific collaborations,
            technology transfers to farming communities, and public events organized at NIGAB.
          </p>
        </div>
      </section>

      <News />
      <Gallery />
      <CtaBand />
    </>
  );
}
