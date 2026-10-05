import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '@/components/Contact';
import { institute } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact NIGAB — Campus Address, Phone & Directory | PARC Islamabad',
  description:
    'Official contact details, visitor directions to NARC Park Road Chak Shahzad Islamabad, telephone numbers, institutional email, and inquiry form for NIGAB.',
  keywords: [
    'Contact NIGAB',
    'NIGAB address Islamabad',
    'NIGAB phone number NARC',
    'NIGAB email',
    'NIGAB location Park Road Chak Shahzad',
    'PARC Islamabad contact',
  ],
  alternates: {
    canonical: 'https://nigab.websitepakistan.com/contact',
  },
  openGraph: {
    title: 'Contact & Location Directory | NIGAB — PARC Islamabad',
    description:
      'Official campus location at National Agricultural Research Centre (NARC), telephone extensions, and online inquiry form.',
    url: 'https://nigab.websitepakistan.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>Contact &amp; Location</span>
          </nav>
          <h1>Contact the Institute &amp; Campus Location</h1>
          <p className="lead">
            Located inside the National Agricultural Research Centre (NARC) on Park Road, Chak
            Shahzad, Islamabad. Reach out to our administrative office, laboratory directors, or
            commercial service coordinators.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
