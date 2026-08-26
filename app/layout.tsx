/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Root Application Layout, Global Fonts & Metadata Setup
 * ============================================================================
 */

import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, Inter, Noto_Nastaliq_Urdu, Source_Serif_4 } from 'next/font/google';
import SiteChrome from '@/components/SiteChrome';
import { IconSprite } from '@/components/Icons';
import { institute } from '@/lib/content';
import './globals.css';

/* --------------------------------------------------------------------
   Typography — self-hosted at build time by next/font, exposed to the
   stylesheet as CSS custom properties.
   -------------------------------------------------------------------- */

const serif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--f-serif',
});

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--f-sans',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--f-mono',
});

const urdu = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--f-urdu',
});

/* -------------------------------------------------------------------- */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://nigab.websitepakistan.com');

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'NIGAB — National Institute for Genomics & Advanced Biotechnology | PARC, Islamabad',
    template: '%s | NIGAB',
  },
  description:
    "NIGAB is Pakistan's national institute for agricultural genomics and advanced biotechnology — 28 state-of-the-art laboratories at NARC, Islamabad, working across plants, animals and microbes under the Pakistan Agricultural Research Council.",
  keywords: [
    'NIGAB', 'PARC', 'NARC', 'genomics Pakistan', 'agricultural biotechnology',
    'CRISPR', 'genome editing', 'GMO testing', 'marker assisted breeding',
    'tissue culture', 'animal biotechnology', 'Islamabad',
  ],
  creator: 'Website Pakistan (https://websitepakistan.com)',
  publisher: 'Website Pakistan',
  authors: [
    { name: institute.nameFull, url: 'https://nigab.parc.gov.pk' },
    { name: 'Website Pakistan', url: 'https://websitepakistan.com' },
  ],
  generator: 'Website Pakistan Web Framework',
  other: {
    'developer': 'Website Pakistan',
    'developer-url': 'https://websitepakistan.com',
    'copyright': '© 2026 Website Pakistan. All Rights Reserved.',
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: `NIGAB — ${institute.name}`,
    title: 'NIGAB — National Institute for Genomics & Advanced Biotechnology | PARC Islamabad',
    description:
      "Pakistan's apex national institute for agricultural genomics, CRISPR genome editing, GMO reference testing, and advanced biotechnology under the Pakistan Agricultural Research Council.",
    url: '/',
    locale: 'en_PK',
    images: [
      {
        url: `${SITE_URL}/img/og-image.png`,
        secureUrl: `${SITE_URL}/img/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'NIGAB — National Institute for Genomics & Advanced Biotechnology | PARC Islamabad',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIGAB — National Institute for Genomics & Advanced Biotechnology',
    description:
      "Pakistan's apex national platform for agricultural genomics, CRISPR genome editing, GMO testing, and biotechnology research at NARC, Islamabad.",
    site: '@NIGABOFFICIAL',
    creator: '@NIGABOFFICIAL',
    images: [`${SITE_URL}/img/og-image.png`],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#015B11' },
    { media: '(prefers-color-scheme: dark)', color: '#041C08' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ResearchOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: institute.nameFull,
      alternateName: [institute.shortName, 'NIGAB Islamabad'],
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/img/nigab-logo.png`,
        width: 512,
        height: 556,
      },
      image: `${SITE_URL}/img/nigab-building.jpg`,
      description:
        "Pakistan's apex national research institute for agricultural genomics, CRISPR genome editing, GMO reference testing and advanced biotechnology under the Pakistan Agricultural Research Council.",
      foundingDate: String(institute.established),
      parentOrganization: {
        '@type': 'GovernmentOrganization',
        name: institute.parent,
        alternateName: institute.parentShort,
        url: institute.parcUrl,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'National Agricultural Research Centre, Park Road, Chak Shahzad',
        addressLocality: institute.address.city,
        postalCode: institute.address.postcode,
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '33.6714',
        longitude: '73.1310',
      },
      telephone: '+92-51-9073-3812',
      faxNumber: institute.fax,
      email: institute.email,
      sameAs: [institute.social.facebook, institute.social.twitter, institute.social.linkedin],
    },
    // 1. GovernmentService Schemas
    {
      '@type': 'GovernmentService',
      '@id': `${SITE_URL}/#service-gmo-testing`,
      name: 'National GMO Molecular Reference Testing & Quality Assurance',
      serviceType: 'Biotechnology & GMO Regulatory Diagnostic Testing',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'Pakistan' },
      description:
        'Official reference laboratory testing of Genetically Modified Organisms (GMOs) for commercial trade commodities, Bt gene authentication, and seed export quality assurance.',
      category: 'Agricultural Biotechnology Testing',
      serviceAudience: {
        '@type': 'Audience',
        audienceType: 'Exporters, Seed Corporations, Farmers & Regulatory Authorities',
      },
    },
    {
      '@type': 'GovernmentService',
      '@id': `${SITE_URL}/#service-dna-fingerprinting`,
      name: 'Crop Varietal DNA Fingerprinting & Bar-coding',
      serviceType: 'Genomics Identification & Plant Breeders Rights Verification',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'Pakistan' },
      description:
        'High-throughput DNA fingerprinting for olive cultivars, sex determination in date palm/papaya, Basmati rice purity verification, and Plant Breeder Rights registration.',
      category: 'Genomics & Diagnostic Services',
    },
    {
      '@type': 'GovernmentService',
      '@id': `${SITE_URL}/#service-tissue-culture`,
      name: 'Virus-Free Plant Tissue Culture & Nucleus Seed Production',
      serviceType: 'Micropropagation & Agricultural Supply',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'Pakistan' },
      description:
        'Commercial-scale micropropagation of virus-free banana plantlets (NIGAB-1 to 4) and Kuroda disease-free nucleus seed potato tubers to enhance national crop yield.',
      category: 'Plant Biotechnology Services',
    },
    // 2. EducationalOccupationalProgram Schemas
    {
      '@type': 'EducationalOccupationalProgram',
      '@id': `${SITE_URL}/#program-postgraduate-research`,
      name: 'Postgraduate Agricultural Biotechnology Research Fellowship',
      programType: 'PhD & M.Phil Research Degree Program',
      provider: { '@id': `${SITE_URL}/#organization` },
      description:
        'Supervised research training for PhD and M.Phil scholars across 28 specialized genomics and biotechnology laboratories in academic affiliation with Quaid-i-Azam University and University of Agriculture Peshawar.',
      educationalCredentialAwarded: 'M.Phil / PhD Degree in Agricultural Biotechnology',
      timeToComplete: 'P2Y',
      occupationalCategory: 'Agricultural Scientist, Biotechnologist, Genomics Researcher',
    },
    {
      '@type': 'EducationalOccupationalProgram',
      '@id': `${SITE_URL}/#program-internships`,
      name: 'National Biotechnology Hands-on Training & Internship Programme',
      programType: 'Internship & Capacity Building Workshop',
      provider: { '@id': `${SITE_URL}/#organization` },
      description:
        'Practical hands-on training workshops in plant tissue culture, molecular diagnostics, CRISPR genome editing, and bioinformatics for university students and NARS scientists.',
      educationalCredentialAwarded: 'Certificate of Hands-on Biotechnology Training',
    },
    // 3. ScholarlyArticle Schemas
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#publications`,
      name: 'NIGAB Key Scientific Publications',
      description: 'Peer-reviewed research articles published in international impact factor journals by NIGAB scientists.',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'ScholarlyArticle',
            headline: 'Influence of humic acid and phosphorus doses on flowering attributes of tuberose under lath house conditions',
            name: 'Influence of humic acid and phosphorus doses on flowering attributes of tuberose under lath house conditions',
            datePublished: '2021',
            isPartOf: {
              '@type': 'Periodical',
              name: 'Bioscience Research',
            },
            publisher: { '@id': `${SITE_URL}/#organization` },
            author: [{ '@type': 'Person', name: 'Ghani A.' }, { '@type': 'Person', name: 'Jan I.' }, { '@type': 'Person', name: 'Nadeem S.' }, { '@type': 'Person', name: 'Abbas Z.' }],
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'ScholarlyArticle',
            headline: 'Drought stress tolerance in transgenic wheat conferred by expression of a dehydration-responsive element-binding 1A gene',
            name: 'Drought stress tolerance in transgenic wheat conferred by expression of a dehydration-responsive element-binding 1A gene',
            datePublished: '2020',
            isPartOf: {
              '@type': 'Periodical',
              name: 'Applied Ecology and Environmental Research',
            },
            publisher: { '@id': `${SITE_URL}/#organization` },
            author: [{ '@type': 'Person', name: 'Mehmood K.' }, { '@type': 'Person', name: 'Arshad M.' }, { '@type': 'Person', name: 'Ali G.M.' }, { '@type': 'Person', name: 'Shah S.H.' }],
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'ScholarlyArticle',
            headline: 'Estimation of morphological and molecular diversity of seventy-two advanced Pakistani cotton genotypes using simple sequence repeats',
            name: 'Estimation of morphological and molecular diversity of seventy-two advanced Pakistani cotton genotypes using simple sequence repeats',
            datePublished: '2020',
            isPartOf: {
              '@type': 'Periodical',
              name: 'Applied Ecology and Environmental Research',
            },
            publisher: { '@id': `${SITE_URL}/#organization` },
            author: [{ '@type': 'Person', name: 'Shoukat S.' }, { '@type': 'Person', name: 'Anwar M.' }, { '@type': 'Person', name: 'Ali S.' }, { '@type': 'Person', name: 'Ali G.M.' }],
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'ScholarlyArticle',
            headline: 'Functional characterization of Mitogen-Activated Protein Kinase Kinase (MAPKK) gene in halophytic Salicornia europaea against salt stress',
            name: 'Functional characterization of Mitogen-Activated Protein Kinase Kinase (MAPKK) gene in halophytic Salicornia europaea against salt stress',
            datePublished: '2020',
            isPartOf: {
              '@type': 'Periodical',
              name: 'Environmental and Experimental Botany',
            },
            publisher: { '@id': `${SITE_URL}/#organization` },
            author: [{ '@type': 'Person', name: 'Rehman N.' }, { '@type': 'Person', name: 'Khan M.R.' }, { '@type': 'Person', name: 'Abbas Z.' }, { '@type': 'Person', name: 'Ali G.M.' }],
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'ScholarlyArticle',
            headline: 'Evolution of Deeper Rooting 1-like homoeologs in wheat entails the C-terminus mutations as well as gain and loss of auxin response elements',
            name: 'Evolution of Deeper Rooting 1-like homoeologs in wheat entails the C-terminus mutations as well as gain and loss of auxin response elements',
            datePublished: '2019',
            isPartOf: {
              '@type': 'Periodical',
              name: 'PLoS ONE',
            },
            publisher: { '@id': `${SITE_URL}/#organization` },
            author: [{ '@type': 'Person', name: 'Ashraf A.' }, { '@type': 'Person', name: 'Rehman O.U.' }, { '@type': 'Person', name: 'Ali G.M.' }, { '@type': 'Person', name: 'Khan M.R.' }],
          },
        },
        {
          '@type': 'ListItem',
          position: 6,
          item: {
            '@type': 'ScholarlyArticle',
            headline: 'What are farmers really planting? Measuring the presence and effectiveness of Bt cotton in Pakistan',
            name: 'What are farmers really planting? Measuring the presence and effectiveness of Bt cotton in Pakistan',
            datePublished: '2017',
            isPartOf: {
              '@type': 'Periodical',
              name: 'PLoS ONE',
            },
            publisher: { '@id': `${SITE_URL}/#organization` },
            author: [{ '@type': 'Person', name: 'Spielman D.J.' }, { '@type': 'Person', name: 'Zaidi F.' }, { '@type': 'Person', name: 'Ali G.M.' }],
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${serif.variable} ${sans.variable} ${mono.variable} ${urdu.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <IconSprite />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
