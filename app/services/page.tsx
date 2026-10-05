import type { Metadata } from 'next';
import Link from 'next/link';
import Services from '@/components/Services';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Commercial Testing & Reference Diagnostic Services | NIGAB',
  description:
    'National GMO reference testing, varietal DNA fingerprinting, date palm sex determination, virus-free potato nucleus seed, and high-throughput diagnostic services at NIGAB (PARC, Islamabad).',
  keywords: [
    'GMO testing Pakistan',
    'GMO reference testing laboratory Islamabad',
    'DNA fingerprinting crop varieties',
    'plant breeders rights barcoding Pakistan',
    'virus free banana plantlets',
    'certified seed potato tubers Islamabad',
    'date palm sex determination testing',
    'NIGAB commercial diagnostic services',
  ],
  alternates: {
    canonical: 'https://nigab.websitepakistan.com/services',
  },
  openGraph: {
    title: 'Commercial Testing & Reference Diagnostic Services | NIGAB Islamabad',
    description:
      'Accredited testing services for agricultural exporters, seed corporations, commercial farms, and regulatory authorities.',
    url: 'https://nigab.websitepakistan.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>Diagnostic Services &amp; Products</span>
          </nav>
          <h1>Commercial Testing &amp; National Reference Services</h1>
          <p className="lead">
            NIGAB operates accredited reference laboratories offering certified diagnostic and
            biotechnological services for commercial agribusinesses, seed breeders, commodity
            exporters, and regulatory bodies across Pakistan.
          </p>
        </div>
      </section>

      <Services />
      <CtaBand />
    </>
  );
}
