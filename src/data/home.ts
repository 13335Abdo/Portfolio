import {CASE_STUDIES, type Project} from '@/data/projects';

// ── Types ──

export type CareerStop = {
  company: string;
  role: string;
  year: string;
};

export type FeaturedProjectStat = {
  label: string;
  value: string;
};

export type ImpactMetric = {
  description: string;
  label: string;
  value: string;
};

// ── Featured Projects ──

export const FEATURED_PROJECTS: Project[] = CASE_STUDIES;

export const FEATURED_PROJECT_STATS: FeaturedProjectStat[] = [
  {label: 'Reusable components', value: '60+'},
  {label: 'API endpoints', value: '40+'},
];

// ── Impact Metrics ──

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    description: 'ProductCard, CartItem, Navbar, and more — built for reuse across the app',
    label: 'Reusable components',
    value: '60+',
  },
  {
    description: 'REST API integration via Axios covering products, auth, cart, and orders',
    label: 'API endpoints',
    value: '40+',
  },
  {
    description: 'Mobile-first UI built entirely with Tailwind CSS and shadcn/ui',
    label: 'Responsive',
    value: '100%',
  },
  {
    description: 'Production deployment with live URL and consistent performance',
    label: 'Deployed',
    value: 'Vercel',
  },
];

// ── Career Journey ──

export const CAREER_JOURNEY: CareerStop[] = [
  {company: 'ezCater', role: 'Senior Software Engineer', year: '2022'},
  {company: 'MITRE Corporation', role: 'UI Designer & Developer', year: '2014'},
  {company: 'Brandeis University', role: 'Web Developer', year: '2013'},
  {company: 'NASA JPL', role: 'Research Intern', year: '2012'},
];

// ── Animation Order ──
// Sequential stagger indices for home page bento grid cards.
// Order matches visual layout top-to-bottom, left-to-right.

export const ANIMATION_ORDER = {
  careerJourney: 5,
  easterEggTracker: 7,
  featuredProject: 2,
  gitHubShowcase: 6,
  hero: 0,
  impactMetrics: 3,
  project: 4,
} as const;
