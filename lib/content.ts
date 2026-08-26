/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Structured Institutional Content, Datasets & Navigation Models
 * ============================================================================
 */

/* ------------------------------------------------------------------ */
/* Institute                                                          */
/* ------------------------------------------------------------------ */

export const institute = {
  shortName: 'NIGAB',
  name: 'National Institute for Genomics & Advanced Biotechnology',
  nameFull: 'National Institute for Genomics and Advanced Biotechnology',
  parent: 'Pakistan Agricultural Research Council',
  parentShort: 'PARC',
  parentUrdu: 'پاکستان زرعی تحقیقاتی کونسل',
  ministry: 'Ministry of National Food Security & Research',
  campus: 'National Agricultural Research Centre (NARC)',
  established: 2007,
  director: 'Dr. Shaukat Ali',
  directorTitle: 'Director, NIGAB · Principal Scientific Officer',
  address: {
    line1: 'National Agricultural Research Centre (NARC)',
    line2: 'Park Road, Chak Shahzad',
    city: 'Islamabad',
    postcode: '45500',
    country: 'Pakistan',
  },
  phones: ['+92 51 9073 3812', '+92 51 9073 3814'],
  fax: '+92 51 9255 205',
  email: 'info@nigab.parc.gov.pk',
  emailNote: 'Placeholder address — replace with the official institutional mailbox',
  officeHours: 'Monday – Friday, 09:00 – 17:00 (PKT)',
  coordinates: '33.6714° N, 73.1310° E',
  social: {
    facebook: 'https://www.facebook.com/NIGABOFFICIAL/',
    twitter: 'https://twitter.com/NIGABOFFICIAL',
    linkedin: 'https://www.linkedin.com/company/nigabofficial',
  },
  parcUrl: 'http://www.parc.gov.pk/index.php/en/',
} as const;

/* ------------------------------------------------------------------ */
/* Director's message                                                 */
/* ------------------------------------------------------------------ */

export const aboutIntro = [
  'The National Institute for Genomics and Advanced Biotechnology (NIGAB) is an exclusive national institute dedicated to undertaking agricultural research in all three domains of life — **plants, animals and microbes**. It is a complex of biotechnology with 28 state-of-the-art laboratories, each designated for a specified area, along with glasshouses and containment facilities.',
  'Since its inception in 2007, NIGAB has been recognised nationally and internationally for quality research in agricultural biotechnology. Its research programmes primarily focus on enhancing plant and animal productivity by at least 10% and developing value-added bio-products for national food security — contributing directly to Pakistan’s sustainable development goals and rural economy.',
];

export const aboutMore = [
  'Through traditional genetic engineering, NIGAB has developed GMOs of wheat, groundnut, potato and tomato against disease, drought and salinity, which await regulatory approval for commercial use at farm level. The institute has also exploited marker-assisted selection for the development of new crop varieties with rust, salinity and drought tolerance.',
  'NIGAB has embarked on new breeding technologies including speed cloning, speed breeding, genomic selection and genome editing using CRISPR-Cas9, dCas9 and Cpf1 approaches. Next-generation sequencing data obtained through genome re-sequencing and transcriptome (RNA-seq) sequencing is analysed for varietal and hybrid identification, SNP marker development and gene discovery. **Thirty novel genes** related to desirable plant traits have been isolated and are being genome-edited.',
  'NIGAB is a credible reference laboratory for biotechnology and molecular diagnostic testing of GMOs, identification of unknown olive varieties, and detection of adulteration in exportable commodities for quality assurance. Its tissue culture section has replaced infected banana with virus-free banana across Sindh province, with four new varieties currently in the pipeline.',
  'In the livestock sector, NIGAB is actively involved in developing vaccines for disease prevention and epidemic control, and in selecting superior animal breeds using NGS data for improved milk and meat productivity. Development of indigenous probiotic feed additives to improve dairy buffalo productivity in a cost-effective manner is also a priority research area.',
];

/* ------------------------------------------------------------------ */
/* Key figures                                                        */
/* ------------------------------------------------------------------ */

export type Stat = { value: number; suffix?: string; label: string; plain?: boolean };

export const stats: Stat[] = [
  { value: 28, label: 'State-of-the-art\nLaboratories' },
  { value: 4, label: 'Research\nProgrammes' },
  { value: 30, suffix: '+', label: 'Novel Genes\nIsolated' },
  { value: 27, label: 'PhD & M.Phil\nScholars' },
  { value: 500, suffix: '+', label: 'Research\nPublications' },
  { value: 2007, plain: true, label: 'Year\nEstablished' },
];

/* ------------------------------------------------------------------ */
/* Hero slides                                                        */
/* ------------------------------------------------------------------ */

export type Slide = {
  label: string;
  tag: string;
  title: string;
  highlight: string;
  titleAfter?: string;
  text: string;
  image: string;
  alt: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export const slides: Slide[] = [
  {
    label: 'Mandate',
    tag: 'National Mandate · Established 2007',
    title: "Advancing Pakistan's agriculture through ",
    highlight: 'genomics',
    titleAfter: ' and advanced biotechnology',
    text: "NIGAB is Pakistan's exclusive national institute undertaking agricultural research across all three domains of life — plants, animals and microbes — from a complex of 28 state-of-the-art laboratories, glasshouses and containment facilities at NARC, Islamabad.",
    image: '/img/hero-mandate.jpg',
    alt: 'A ripe wheat field stretching to the horizon under an open sky',
    primary: { label: 'Explore Research Programmes', href: '#programmes' },
    secondary: { label: 'Commercial Services', href: '#services' },
  },
  {
    label: 'Green Super Rice',
    tag: 'Green Super Rice Programme',
    title: '552 advanced rice lines under ',
    highlight: 'national evaluation',
    text: 'The GSR laboratory is developing elite, early-maturing long-grain lines with a yield potential above 8–10 tonnes per hectare, introgressing Green Super Rice traits into local Basmati and coarse rice through genome-based breeding by design.',
    image: '/img/hero-rice.jpg',
    alt: 'A green rice field under an open sky',
    primary: { label: 'Visit the GSR Laboratory', href: '#laboratories' },
    secondary: { label: 'Project Portfolio', href: '#projects' },
  },
  {
    label: 'Genome Editing',
    tag: 'New Breeding Technologies',
    title: 'Genome editing with ',
    highlight: 'CRISPR-Cas9',
    titleAfter: ', dCas9 and Cpf1',
    text: 'Thirty novel genes linked to desirable agronomic traits have been isolated at NIGAB and are being genome-edited in plants, supported by next-generation sequencing, genome re-sequencing and RNA-seq analysis for varietal identification, SNP development and gene discovery.',
    image: '/img/hero-genomics.jpg',
    alt: 'Illustration of DNA double helices',
    primary: { label: 'Functional Genomics', href: '#programmes' },
    secondary: { label: 'Read Publications', href: '#publications' },
  },
  {
    label: 'Seed Systems',
    tag: 'Technology Transfer',
    title: '50,000 disease-free potato tubers for ',
    highlight: 'Gilgit-Baltistan',
    text: "Nucleus potato tubers raised through tissue culture at NIGAB were handed over to Gilgit-Baltistan officials, strengthening Pakistan's certified seed potato chain and reducing dependence on imported planting material.",
    image: '/img/hero-potato.jpg',
    alt: 'Freshly lifted potato tubers on dark field soil',
    primary: { label: 'Our Products', href: '#products' },
    secondary: { label: 'Newsroom', href: '#news' },
  },
  {
    label: 'Livestock',
    tag: 'Animal Biotechnology',
    title: 'Vaccines, diagnostics and ',
    highlight: 'indigenous probiotics',
    titleAfter: ' for livestock',
    text: 'NIGAB develops vaccines for disease prevention and epidemic control, selects superior animal breeds using NGS data for improved milk and meat productivity, and produces cost-effective indigenous probiotic feed additives for dairy buffalo.',
    image: '/img/hero-livestock.jpg',
    alt: 'Cattle in a pasture on a livestock farm',
    primary: { label: 'Animal Biotechnology Labs', href: '#laboratories' },
    secondary: { label: 'Diagnostic Facilities', href: '#services' },
  },
];

/* ------------------------------------------------------------------ */
/* News ticker                                                        */
/* ------------------------------------------------------------------ */

export const tickerItems = [
  { kicker: 'Announcement', text: '3rd International Conference on Biosafety, Agriculture and Biotechnology hosted at NIGAB' },
  { kicker: 'Visit', text: 'National Assembly Standing Committee visits NIGAB laboratories' },
  { kicker: 'Collaboration', text: 'Chinese delegation visits NIGAB under the Sino-Pak breeding initiative' },
  { kicker: 'Technology', text: '50,000 disease-free potato tuber seeds handed over to Gilgit-Baltistan' },
];

/* ------------------------------------------------------------------ */
/* Research programmes                                                */
/* ------------------------------------------------------------------ */

export type Programme = {
  index: string;
  cluster: string;
  title: string;
  leader: string;
  leaderRole: string;
  points: string[];
  email: string;
  phone: string;
  image: string;
  alt: string;
};

export const programmes: Programme[] = [
  {
    index: 'Programme 01',
    cluster: 'Plant Biotechnology',
    title: 'Transgenic Research Programme',
    leader: 'Dr. Shaukat Ali',
    leaderRole: 'PSO',
    points: [
      'Development of genetically modified crops for economically important traits',
      'Molecular, biochemical and morphological evaluation of transgenic crops',
      'Molecular-based diagnostic testing of genetically modified products',
      'Biosafety studies for GM crops addressing health and environmental concerns',
    ],
    email: 'transgenic@nigab.parc.gov.pk',
    phone: '+92 51 9073 3805',
    image: '/img/programme-transgenic.webp',
    alt: 'Transgenic Research Programme laboratory',
  },
  {
    index: 'Programme 02',
    cluster: 'Plant Biotechnology',
    title: 'Functional Genomics & Bioinformatics',
    leader: 'Dr. Muhammad Ramzan Khan',
    leaderRole: 'PSO',
    points: [
      'Genome informatics of plants for expression variation using NGS applications — WGS, RNA-seq and ChIP-seq',
      'Isolation, cloning and functional characterisation of economically important genes',
      'Generation of gRNA and CRISPR/Cas9 expression cassettes for genome editing',
      'T7 endonuclease assays for validation of genome-edited lines',
    ],
    email: 'genomics@nigab.parc.gov.pk',
    phone: '+92 51 9073 3808',
    image: '/img/programme-genomics.webp',
    alt: 'Functional Genomics & Bioinformatics laboratory',
  },
  {
    index: 'Programme 03',
    cluster: 'Plant Biotechnology',
    title: 'Marker Assisted Breeding (MAB)',
    leader: 'Dr. Armghan Shahzad',
    leaderRole: 'PSO',
    points: [
      'Molecular dissection and association mapping of economically important traits in wheat and other crops',
      'Marker-assisted selection for rust, karnal bunt, salinity and drought tolerance',
      'Genetic diversity and phytochemical analysis of indigenous crop accessions',
      'DNA fingerprinting for varietal identification and export quality assurance',
    ],
    email: 'breeding@nigab.parc.gov.pk',
    phone: '+92 51 9073 3806',
    image: '/img/programme-mab.webp',
    alt: 'Marker Assisted Breeding laboratory',
  },
  {
    index: 'Programme 04',
    cluster: 'Plant Biotechnology',
    title: 'Plant Tissue Culture Programme',
    leader: 'Dr. Aish Muhammad',
    leaderRole: 'PSO',
    points: [
      'Micropropagation and disease-free plantlet production of banana',
      'Virus-free seed potato production through meristem and shoot-tip culture',
      'Mass-scale production of true-to-type planting material for dissemination',
      'National and international coordination and capacity building in tissue culture',
    ],
    email: 'tissueculture@nigab.parc.gov.pk',
    phone: '+92 51 9073 3807',
    image: '/img/programme-tissue-culture.webp',
    alt: 'Plant Tissue Culture Programme laboratory',
  },
];

/* ------------------------------------------------------------------ */
/* Laboratories                                                       */
/* ------------------------------------------------------------------ */

export type Lab = {
  name: string;
  cluster: 'plant' | 'animal';
  clusterLabel: string;
  icon: string;
  activities: string[];
  email?: string;
  phone?: string;
  image?: string;
};

export const labs: Lab[] = [
  {
    name: 'Marker Assisted Breeding Lab',
    cluster: 'plant',
    clusterLabel: 'Plant Biotechnology',
    icon: 'seedling',
    image: '/img/lab-marker-assisted.webp',
    activities: [
      'Marker-assisted selection for new wheat varieties — rust, karnal bunt, salinity and drought tolerance',
      'Genetic diversity and phytochemical analysis of indigenous accessions',
      'Identification of unknown olive varieties and adulteration in exportable commodities',
    ],
    email: 'breeding@nigab.parc.gov.pk',
    phone: '+92 51 9073 3827/8',
  },
  {
    name: 'Gene Transformation Lab',
    cluster: 'plant',
    clusterLabel: 'Plant Biotechnology',
    icon: 'dna',
    image: '/img/lab-gene-transformation.webp',
    activities: [
      'Optimisation of regeneration and transformation protocols for maize, wheat, potato, tomato, sugarcane, banana and groundnut',
      'Development of genetically modified crops for economically important traits',
      'Agrobacterium-mediated transformation for biotic and abiotic stress resistance',
    ],
    email: 'transgenic@nigab.parc.gov.pk',
    phone: '+92 51 9073 3815/6',
  },
  {
    name: 'Gene Cloning Lab',
    cluster: 'plant',
    clusterLabel: 'Plant Biotechnology',
    icon: 'flask',
    image: '/img/lab-gene-cloning.webp',
    activities: [
      'Isolation of agriculturally important genes for stress tolerance and quality traits',
      'Structural characterisation of newly isolated genes using bioinformatics tools',
      'Functional characterisation of novel genes in model plants',
    ],
    email: 'genecloning@nigab.parc.gov.pk',
    phone: '+92 51 9073 3819',
  },
  {
    name: 'Green Super Rice (GSR) Lab',
    cluster: 'plant',
    clusterLabel: 'Plant Biotechnology',
    icon: 'leaf',
    image: '/img/lab-green-super-rice.webp',
    activities: [
      'Phenotypic evaluation of 552 GSR advanced lines for yield and yield-related traits',
      'Development of 8–10 elite early-maturing long-grain lines yielding 8–10 t/ha',
      'Introgression of GSR traits into local Basmati and coarse rice',
      'Genotyping of yield and quality traits through GWAS and RNA-seq approaches',
    ],
    email: 'gsr@nigab.parc.gov.pk',
    phone: '+92 51 9073 3843',
  },
  {
    name: 'SINO-PAK Lab',
    cluster: 'plant',
    clusterLabel: 'Plant Biotechnology',
    icon: 'globe',
    image: '/img/lab-sino-pak.webp',
    activities: [
      'Whole genome sequencing of local sugarcane varieties',
      'Next-generation sequencing system operations',
    ],
    email: 'sinopak@nigab.parc.gov.pk',
    phone: '+92 51 9073 3812',
  },
  {
    name: 'Tissue Culture Lab',
    cluster: 'plant',
    clusterLabel: 'Plant Biotechnology',
    icon: 'seedling',
    image: '/img/lab-tissue-culture.webp',
    activities: [
      'Mass-scale production of true-to-type, disease-free plants of vegetatively propagated crops',
      'Provision of initial explants for genetic transformation',
      'National and international coordination and manpower capacity building',
    ],
    email: 'tissueculture@nigab.parc.gov.pk',
    phone: '+92 51 9073 3822',
  },
  {
    name: 'Genome Editing Lab',
    cluster: 'plant',
    clusterLabel: 'Plant Biotechnology',
    icon: 'dna',
    image: '/img/lab-genome-editing-v2.webp',
    activities: [
      'Genome editing using CRISPR-Cas9, dCas9 and Cpf1 approaches for plant productivity',
      'Analysis of NGS data from genome re-sequencing and RNA-seq for SNP development and gene discovery',
      'Deployment of novel isolated genes for genome editing in plants',
    ],
    email: 'genomeediting@nigab.parc.gov.pk',
    phone: '+92 51 9073 3808',
  },
  {
    name: 'Bioinformatics Lab',
    cluster: 'plant',
    clusterLabel: 'Bioinformatics',
    icon: 'cpu',
    image: '/img/lab-bioinformatics.webp',
    activities: [
      'Comparative analysis, multiple alignment and phylogenetic analysis of sequences',
      'Post-sequencing data analysis and gene association studies',
      'In-silico drug design and systems biology of co-regulated processes using R',
    ],
    email: 'bioinformatics@nigab.parc.gov.pk',
    phone: '+92 51 9073 3812',
  },
  {
    name: 'GMO Testing Lab',
    cluster: 'plant',
    clusterLabel: 'National Reference Laboratory',
    icon: 'shield',
    image: '/img/lab-gmo-testing.webp',
    activities: [
      'Molecular and biochemical evaluation of genetically modified products',
      'Tested more than 500 NCVT cotton entries from the National Cotton System',
      'Routine testing of samples from agencies at approximately 100 samples per annum',
      'Pre-assessment stage completed for ISO 17025 accreditation',
    ],
    email: 'gmotesting@nigab.parc.gov.pk',
    phone: '+92 51 9073 3821',
  },
  {
    name: 'General Lab',
    cluster: 'plant',
    clusterLabel: 'Plant Biotechnology',
    icon: 'flask',
    image: '/img/lab-general.webp',
    activities: [
      'Shared bench facility supporting sample preparation and routine molecular work across programmes',
    ],
  },
  {
    name: 'DNA Analyzer Lab',
    cluster: 'plant',
    clusterLabel: 'Plant Biotechnology',
    icon: 'cpu',
    image: '/img/lab-dna-analyzer.webp',
    activities: [
      'Capillary sequencing and fragment analysis supporting genotyping and marker validation',
    ],
  },
  {
    name: 'Inoculation Lab & Growth Room',
    cluster: 'plant',
    clusterLabel: 'Plant Biotechnology',
    icon: 'seedling',
    image: '/img/lab-inoculation.webp',
    activities: [
      'Aseptic inoculation and controlled-environment growth facility for in-vitro cultures and transformed lines',
    ],
  },
  {
    name: 'Animal Genomics Lab',
    cluster: 'animal',
    clusterLabel: 'Animal Biotechnology',
    icon: 'cow',
    image: '/img/lab-animal-genomics.webp',
    activities: [
      'Genetic improvement of livestock breeds using advanced molecular techniques',
      'DNA fingerprinting of milk-related genes through genomic tools',
      'Molecular diagnostics and therapeutics',
    ],
    email: 'animalgenomics@nigab.parc.gov.pk',
    phone: '+92 51 9073 3842',
  },
  {
    name: 'Cell Culture Lab',
    cluster: 'animal',
    clusterLabel: 'Animal Biotechnology',
    icon: 'microscope',
    image: '/img/lab-cell-culture.webp',
    activities: [
      'Standardisation of LAMP-PCR for rapid detection of Foot and Mouth Disease in cattle',
      'Development of monoclonal antibodies against Peste des Petits Ruminants (PPR)',
      'Identification of antibiotic resistance genes in E. coli from meat samples',
      'Maintenance of cell lines and a virus bank of local poultry viral isolates',
    ],
    email: 'cellculture@nigab.parc.gov.pk',
    phone: '+92 51 9073 3837',
  },
  {
    name: 'Animal Probiotics Lab',
    cluster: 'animal',
    clusterLabel: 'Animal Biotechnology',
    icon: 'microbe',
    image: '/img/lab-animal-probiotics.webp',
    activities: [
      'Identification of economically beneficial indigenous microorganisms via 16S rRNA sequencing',
      'Physiological and biochemical characterisation of bacteria using API kits',
      'Establishment of the NIGAB Microbial Culture Collection of Pakistan (NMCCP)',
      'Depository function for microorganisms involved in patent procedures',
    ],
    email: 'probiotics@nigab.parc.gov.pk',
    phone: '+92 51 9073 3833',
  },
  {
    name: 'Health Biotechnology Lab',
    cluster: 'animal',
    clusterLabel: 'Animal Biotechnology',
    icon: 'shield',
    image: '/img/lab-health-biotech-v2.webp',
    activities: [
      'Veterinary sciences and animal biotechnology',
      'Molecular epidemiology and diagnostics of animal diseases',
      'Vaccine production',
    ],
    email: 'healthbiotech@nigab.parc.gov.pk',
    phone: '+92 51 9073 3833',
  },
  {
    name: 'Animal Containment Facility',
    cluster: 'animal',
    clusterLabel: 'Animal Biotechnology',
    icon: 'building',
    image: '/img/lab-animal-containment.webp',
    activities: [
      'Biological evaluation of pathogens and virus growth',
      'Raising hyper-immune serum and antigens',
      'Animal vaccine trials and biosafety studies',
    ],
    email: 'containment@nigab.parc.gov.pk',
    phone: '+92 51 9073 3827',
  },
];

/* ------------------------------------------------------------------ */
/* Services, facilities & products                                    */
/* ------------------------------------------------------------------ */

export const commercialServices = [
  'Testing of GMOs for trade commodities',
  'DNA fingerprinting for variety identification (olive plants)',
  'Sex determination in papaya and date palm through DNA markers',
  'Next-generation sequencing, bioinformatics and high-throughput data analysis',
  'DNA bar-coding of varieties for Plant Breeder Rights registration',
  'Bt gene authentication and expression quantification in cotton',
  'Basmati and non-Basmati rice adulteration testing',
];

export const researchFacilities = [
  'DNA diagnostics for FMDV and PPRV',
  'Genetic testing of dairy milk protein',
  'Bio-safety risk assessment for GMOs',
  'Bio-safety cabinet II (BSL-II) facility',
  'Animal containment facility',
  'Cell culture room',
  'DNA extraction and quantification',
];

export type Product = {
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  badges: { label: string; tone: 'plant' | 'gold' | 'animal' | 'review' }[];
};

export const products: Product[] = [
  {
    tag: 'Banana · Tissue Culture',
    title: 'High-Yielding Banana Plants',
    description: 'Virus-free banana plantlets developed through meristem culture, replacing infected stock in Sindh province.',
    image: '/img/product-banana.jpg',
    alt: 'A developing banana bunch on the plant',
    badges: [
      { label: 'NIGAB-1', tone: 'plant' },
      { label: 'NIGAB-2', tone: 'plant' },
      { label: 'NIGAB-3', tone: 'plant' },
      { label: 'NIGAB-4', tone: 'plant' },
    ],
  },
  {
    tag: 'Potato · Nucleus Seed',
    title: 'Disease-Free Potato Seed',
    description: 'Nucleus tubers of the Kuroda variety produced through tissue culture and multiplied under screen-house conditions.',
    image: '/img/product-potato.jpg',
    alt: 'Freshly harvested seed potatoes held in two hands',
    badges: [{ label: 'Kuroda variety', tone: 'gold' }],
  },
  {
    tag: 'Reference Testing',
    title: 'National GMO Reference Testing',
    description: 'Molecular and biochemical evaluation of genetically modified products for regulatory and trade purposes.',
    image: '/img/product-gmo-testing.jpg',
    alt: 'Laboratory staff pipetting samples into test tubes',
    badges: [{ label: 'ISO 17025 in progress', tone: 'review' }],
  },
  {
    tag: 'Microbial Collection',
    title: 'NIGAB Microbial Culture Collection',
    description: 'A long-term national preservation facility (NMCCP) acting as a depository for patent-related microorganisms.',
    image: '/img/product-microbial.jpg',
    alt: 'Labelled petri dishes with cultured microbial colonies',
    badges: [{ label: 'NMCCP', tone: 'animal' }],
  },
];

/* ------------------------------------------------------------------ */
/* Projects & patents                                                 */
/* ------------------------------------------------------------------ */

export type Project = { title: string; funding: string; tone: 'plant' | 'gold' | 'animal' | 'review' };

export const ongoingProjects: Project[] = [
  { title: 'High-throughput DNA sequencing based identification of sugarcane varieties/hybrids and unveiling of ancestry relationships in local cultivars', funding: 'PSDP', tone: 'gold' },
  { title: 'Green Super Rice in Pakistan', funding: 'PSDP', tone: 'gold' },
  { title: 'Sino-Pak Agricultural Breeding Innovations Project for Rapid Productivity Enhancement', funding: 'PSDP', tone: 'gold' },
  { title: 'Yield enhancement of wheat through improved grain number and spikelet architecture using translational genomics and genome editing approaches', funding: 'ALP', tone: 'plant' },
  { title: 'Comparative genomics of wheat and desiccation-tolerant Oropetium grass for root architecture variations, and CRISPR-Cas9/dCas9-mediated genome editing of root growth genes in wheat', funding: 'ALP', tone: 'plant' },
  { title: 'Development of double haploid system in wheat', funding: 'ALP', tone: 'plant' },
  { title: 'Development of monoclonal antibodies against PPR virus in sheep and goats', funding: 'ALP', tone: 'plant' },
  { title: 'Development of bio-fortified tomato with precursor of vitamin A', funding: 'ALP', tone: 'plant' },
  { title: 'Commercialisation of potato tissue culture technology in Pakistan', funding: 'PSDP', tone: 'gold' },
];

export const completedProjects: Project[] = [
  { title: 'National Institute for Genomics and Advanced Biotechnology (establishment)', funding: 'PSDP', tone: 'gold' },
  { title: 'Genomic studies for stress tolerance in wheat and rice', funding: 'RADP', tone: 'animal' },
  { title: 'Development of Bt transgenic and coloured cotton in Pakistan, in collaboration with Pak-China', funding: 'RADP', tone: 'animal' },
  { title: 'Molecular marker based identification of halal and non-halal meat type', funding: 'PSF', tone: 'review' },
  { title: 'Genetic transformation of chickpea for herbicide resistance', funding: 'ALP', tone: 'plant' },
];

export type Patent = { title: string; filed: string; application: string; type: string; status: string };

export const patents: Patent[] = [
  { title: 'Transgenic tomato with improved cold tolerance', filed: '18 Jan 2021', application: '68/2021', type: 'Complete', status: 'In review' },
  { title: 'Transgenic maize with improved salt tolerance', filed: '18 Jan 2021', application: '67/2021', type: 'Complete', status: 'In review' },
  { title: 'A DNA-based method for identification of olive cultivars', filed: '24 Dec 2020', application: '888/2020', type: 'Complete', status: 'In review' },
];

/* ------------------------------------------------------------------ */
/* Publications                                                       */
/* ------------------------------------------------------------------ */

export type Publication = { year: string; title: string; meta: string; journal: string };

export const publications: Publication[] = [
  {
    year: '2021',
    title: 'Influence of humic acid and phosphorus doses on flowering attributes of tuberose under lath house conditions.',
    meta: 'Ghani A., Jan I., Nadeem S., Abbas Z., et al. — ',
    journal: 'Bioscience Research 18(3): 2501–2507.',
  },
  {
    year: '2020',
    title: 'Drought stress tolerance in transgenic wheat conferred by expression of a dehydration-responsive element-binding 1A gene.',
    meta: 'Mehmood K., Arshad M., Ali G.M., Shah S.H., Zia M.A., Qureshi A.A. — ',
    journal: 'Applied Ecology and Environmental Research 18(2): 1999–2024.',
  },
  {
    year: '2020',
    title: 'Estimation of morphological and molecular diversity of seventy-two advanced Pakistani cotton genotypes using simple sequence repeats.',
    meta: 'Shoukat S., Anwar M., Ali S., Begum S., Aqeel M., Zia M.A., Shah S.H., Ali G.M. — ',
    journal: 'Applied Ecology and Environmental Research 18(2): 2043–2056.',
  },
  {
    year: '2020',
    title: 'Functional characterization of Mitogen-Activated Protein Kinase Kinase (MAPKK) gene in halophytic Salicornia europaea against salt stress.',
    meta: 'Rehman N., Khan M.R., Abbas Z., Rafique R.S., Zaynab M., Qasim M., Noor S., Inam S., Ali G.M. — ',
    journal: 'Environmental and Experimental Botany 171.',
  },
  {
    year: '2019',
    title: 'Evolution of Deeper Rooting 1-like homoeologs in wheat entails the C-terminus mutations as well as gain and loss of auxin response elements.',
    meta: 'Ashraf A., Rehman O.U., Muzammil S., Leon J., Naz A.A., Rasool F., Ali G.M., Zafar Y., Khan M.R. — ',
    journal: 'PLoS ONE 14(4): e0214145.',
  },
  {
    year: '2017',
    title: 'What are farmers really planting? Measuring the presence and effectiveness of Bt cotton in Pakistan.',
    meta: 'Spielman D.J., Zaidi F., Zambrano P., Khan A.A., Ali S., Cheema H.M.N., Nazli H., Khan R.S.A., Iqbal A., Zia M.A., Ali G.M. — ',
    journal: 'PLoS ONE 12(5): e0176592.',
  },
];

/* ------------------------------------------------------------------ */
/* Academics                                                          */
/* ------------------------------------------------------------------ */

export const phdScholars = [
  'Aisha Zeb', 'Sahir Hameed Khattak', 'Sania Begum', 'Fatma Rasool',
  'Mudassar Mushtaq', 'Amna Abdul Raheem', 'Alia Iram', 'Syed Zhaeer ud din',
  'Almas Ashraf', 'Muhammad Yasin', 'Nazeer Ahmad', 'Nouman Rashid Siddiqui',
];

export const mphilScholars = [
  'Ali Asrar', 'Affaq Aslam', 'Hamid Akbar', 'Muhammad Umer bin Muhammad',
  'Sehrish Bashir', 'Muhammad Ammar Amanat', 'Hassaan Ahmad', 'Fabia Fakhar Zaman',
  'Hina Abbas', 'Malik Attiq-ur-Rehman', 'Hira Hameed', 'Muhammad Arif Khan',
  'Sana Abid', 'Arosa Khezar', 'Sarmad Kausar',
];

export const affiliations = [
  { seal: 'QAU', name: 'Quaid-i-Azam University, Islamabad', role: 'Degree-awarding partner', url: 'https://www.qau.edu.pk' },
  { seal: 'UAP', name: 'The University of Agriculture, Peshawar', role: 'Degree-awarding partner', url: 'https://www.aup.edu.pk/' },
];

export const trainingPoints = [
  'Hands-on training workshops in plant tissue culture and molecular biology',
  'National capacity building for NARS scientists and technicians',
  'Internship programme for undergraduate and graduate students',
  'Supervised research placements across 17 laboratories',
];

/* ------------------------------------------------------------------ */
/* News                                                               */
/* ------------------------------------------------------------------ */

export type NewsItem = {
  category: string;
  kicker: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
};

export const news: NewsItem[] = [
  {
    category: 'Conference',
    kicker: 'Institutional',
    title: '3rd International Conference on Biosafety, Agriculture and Biotechnology',
    excerpt: 'NIGAB hosted the third edition of the international conference, convening researchers and regulators on biosafety and agricultural biotechnology.',
    image: '/img/news-conference.jpg',
    alt: 'Conference participants gathered outside the NIGAB building',
  },
  {
    category: 'Official Visit',
    kicker: 'Governance',
    title: 'Standing Committee visits NIGAB laboratories',
    excerpt: "Members of the Standing Committee toured the institute's laboratory complex and were briefed on its national research mandate.",
    image: '/img/news-committee-visit.jpg',
    alt: 'Visiting officials being received at the NIGAB facility',
  },
  {
    category: 'Collaboration',
    kicker: 'International',
    title: 'Chinese delegation visits NIGAB',
    excerpt: 'A visiting Chinese delegation reviewed progress under the Sino-Pak Agricultural Breeding Innovations Project for rapid productivity enhancement.',
    image: '/img/news-delegation.jpg',
    alt: 'Visitors being shown laboratory work at NIGAB',
  },
  {
    category: 'Technology Transfer',
    kicker: 'Seed Systems',
    title: '50,000 potato tuber seeds handed to Gilgit-Baltistan',
    excerpt: 'Nucleus tubers raised through tissue culture were handed over to Gilgit-Baltistan officials to strengthen certified seed supply.',
    image: '/img/news-tissue-culture.jpg',
    alt: 'Researchers working in the tissue culture laboratory at NIGAB',
  },
  {
    category: 'Event',
    kicker: 'Campus',
    title: 'Spring Planting Day celebrated at NIGAB',
    excerpt: "Scientists and staff participated actively in the institute's spring plantation drive across the NARC campus.",
    image: '/img/news-plantation.jpg',
    alt: 'Staff planting a sapling during the spring plantation drive',
  },
  {
    category: 'Field Inspection',
    kicker: 'Quality Assurance',
    title: 'Director FSCRD inspects tissue-cultured potato crop',
    excerpt: 'The Director of the Federal Seed Certification and Registration Department inspected tissue-culture-raised potato crop at NIGAB.',
    image: '/img/news-field-inspection.jpg',
    alt: 'Officials inspecting a field planting at NIGAB',
  },
];

/* ------------------------------------------------------------------ */
/* Gallery                                                            */
/* ------------------------------------------------------------------ */

export type GalleryImage = { src: string; caption: string; alt: string };

export const gallery: GalleryImage[] = [
  { src: '/img/lab-cell-culture.jpg', caption: 'Cell Culture Laboratory', alt: 'Researcher working at a biosafety cabinet in the cell culture laboratory' },
  { src: '/img/lab-molecular.jpg', caption: 'Molecular Biology Laboratory', alt: 'Laboratory bench and reagent shelving at NIGAB' },
  { src: '/img/lab-probiotics.jpg', caption: 'Animal Probiotics Laboratory', alt: 'Researcher working at a laminar flow cabinet in the animal probiotics laboratory' },
  { src: '/img/visit-delegation.jpg', caption: 'Institutional visit', alt: 'A visiting delegation touring the NIGAB facility' },
  { src: '/img/event-plantation.jpg', caption: 'Spring Planting Day', alt: 'Staff planting a sapling during the spring plantation drive' },
  { src: '/img/nigab-building.jpg', caption: 'NIGAB, NARC Islamabad', alt: 'The NIGAB building facade at the National Agricultural Research Centre' },
  { src: '/img/lab-bioinformatics.jpg', caption: 'Bioinformatics Laboratory', alt: 'Computer workstations in the bioinformatics laboratory' },
  { src: '/img/staff-group.jpg', caption: 'Institute staff and scholars', alt: 'Group photograph of NIGAB staff and research scholars outside the institute' },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                         */
/* ------------------------------------------------------------------ */

export type MegaLink = { title: string; sub: string; href: string; icon: string };
export type NavItem = {
  label: string;
  href?: string;
  wide?: boolean;
  columns?: string[];
  links?: MegaLink[];
  foot?: { note: string; label: string; href: string };
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'About',
    links: [
      { title: 'The Institute', sub: 'Mandate, history & overview', href: '#about', icon: 'building' },
      { title: "Director's Message", sub: 'Dr. Shaukat Ali, Director', href: '#about', icon: 'users' },
      { title: 'NIGAB at a Glance', sub: 'Key figures & milestones', href: '#stats', icon: 'award' },
      { title: 'Affiliations', sub: 'Academic & national partners', href: '#affiliations', icon: 'globe' },
    ],
  },
  {
    label: 'Research',
    wide: true,
    columns: ['Plant Biotechnology', 'Animal Biotechnology'],
    links: [
      { title: 'Transgenic Research', sub: 'Genetic engineering & biosafety', href: '#programmes', icon: 'dna' },
      { title: 'Animal Genomics', sub: 'Livestock breed improvement', href: '#laboratories', icon: 'cow' },
      { title: 'Functional Genomics & Bioinformatics', sub: 'NGS, RNA-seq & gene discovery', href: '#programmes', icon: 'cpu' },
      { title: 'Health Biotechnology', sub: 'Diagnostics & vaccine development', href: '#laboratories', icon: 'microbe' },
      { title: 'Marker Assisted Breeding', sub: 'Trait mapping & varietal development', href: '#programmes', icon: 'seedling' },
      { title: 'Animal Probiotics', sub: 'Indigenous feed additives', href: '#laboratories', icon: 'flask' },
      { title: 'Plant Tissue Culture', sub: 'Micropropagation & clean seed', href: '#programmes', icon: 'leaf' },
      { title: 'Research Projects', sub: 'On-going & completed portfolio', href: '#projects', icon: 'briefcase' },
    ],
    foot: { note: 'Four research programmes · 28 laboratories', label: 'All programmes', href: '#programmes' },
  },
  {
    label: 'Laboratories',
    links: [
      { title: 'All Laboratories', sub: 'Plant & animal biotechnology labs', href: '#laboratories', icon: 'microscope' },
      { title: 'Research Facilities', sub: 'BSL-II, containment & NGS', href: '#services', icon: 'shield' },
      { title: 'Commercial Services', sub: 'Testing, fingerprinting & analysis', href: '#services', icon: 'file' },
      { title: 'Products', sub: 'Banana & potato planting material', href: '#products', icon: 'seedling' },
    ],
  },
  {
    label: 'People',
    links: [
      { title: 'Director', sub: 'Dr. Shaukat Ali', href: '#about', icon: 'users' },
      { title: 'Programme Leaders', sub: 'Principal Scientific Officers', href: '#programmes', icon: 'microscope' },
      { title: 'Research Scholars', sub: 'PhD & M.Phil candidates', href: '#academics', icon: 'cap' },
      { title: 'Staff Directory', sub: 'Contact by laboratory', href: '#contact', icon: 'phone' },
    ],
  },
  { label: 'Academics', href: '#academics' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Media', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const quickAccess = [
  { icon: 'dna', title: 'Research Programmes', text: 'Four national programmes spanning transgenics, genomics, breeding and tissue culture.', cta: 'Explore', href: '#programmes' },
  { icon: 'microscope', title: 'Laboratories', text: 'State-of-the-art plant and animal biotechnology laboratories with dedicated mandates.', cta: 'View labs', href: '#laboratories' },
  { icon: 'shield', title: 'Commercial Services', text: 'GMO testing, DNA fingerprinting, NGS and quality assurance for trade commodities.', cta: 'Request service', href: '#services' },
  { icon: 'cap', title: 'Academics & Training', text: 'PhD and M.Phil research, internships and national capacity-building workshops.', cta: 'Study at NIGAB', href: '#academics' },
];

export const searchTargets = [
  { label: 'Research Programmes', href: '#programmes' },
  { label: 'Laboratories', href: '#laboratories' },
  { label: 'Commercial Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Patents', href: '#patents' },
  { label: 'Publications', href: '#publications' },
  { label: 'Academics', href: '#academics' },
  { label: 'Contact', href: '#contact' },
];

export const enquiryTypes = [
  'Commercial testing service',
  'Research collaboration',
  'Admissions — PhD / M.Phil',
  'Internship programme',
  'Training workshop',
  'Media & press',
  'General enquiry',
];
