import {SITE_CONFIG} from '@/data/siteConfig';

export type ContactLink = {
  label: string;
  src: string;
};

export type PdfMeta = {
  author: string;
  fileName: string;
  title: string;
};

export const CONTACT_LINKS: ContactLink[] = [
  {label: SITE_CONFIG.email, src: `mailto:${SITE_CONFIG.email}`},
  {label: SITE_CONFIG.baseUrl, src: SITE_CONFIG.baseUrl},
  {label: 'github.com/13335Abdo', src: SITE_CONFIG.githubUrl},
  {label: 'linkedin.com/in/abdelrahmanmrabie', src: SITE_CONFIG.linkedinUrl},
  {
    label: 'medium.com/@abdelrahmanrabi3',
    src: 'https://medium.com/@abdelrahmanrabi3',
  },
];

export const PDF_META: PdfMeta = {
  author: 'Abdelrahman Rabi3',
  fileName: 'Abdelrahman-Rabi3-Resume.pdf',
  title: 'Abdelrahman Rabi3 - Resume',
};

export const TLDR_ITEMS: string[] = [
  'React, TypeScript, Tailwind CSS, Storybook, Chromatic, Design Systems, Visual Testing',
  '12+ years shipping production React UIs - since before hooks were a thing',
  'Built a component library from solo proof-of-concept to company-wide adoption across 5 apps',
  "36k+ Chromatic builds - 740+ components under visual testing - I break things visually so users don't have to",
  'Former NASA JPL researcher (the gravity maps were cool, the Matlab less so)',
  'This PDF was rendered with React + @react-pdf/renderer, because of course it was',
];
