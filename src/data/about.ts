import {
  faCode,
  faShoppingCart,
  faUsers,
  faGraduationCap,
  faMobile,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import {type IconDefinition} from '@fortawesome/free-solid-svg-icons';

export type AboutData = {
  constellations: ConstellationLink[];
  planets: PlanetData[];
  sun: SunData;
  tagline: string;
};

export type ConstellationLink = {
  from: string;
  to: string;
};

export type PlanetData = {
  color: string;
  colorToken: string;
  description: string;
  glowColor: string;
  highlights: string[];
  icon: IconDefinition;
  id: string;
  label: string;
  orbitDuration: number;
  orbitRadius: number;
  size: number;
  startAngle: number;
};

export type Position = {x: number; y: number};

export type SunData = {
  bio: string;
  colorToken: string;
  glowColor: string;
  label: string;
  size: number;
};

const planetColor = (token: string) => `var(--${token})`;
const glowColor = (token: string, alpha: number) =>
  `color-mix(in oklch, var(--${token}) ${Math.round(alpha * 100)}%, transparent)`;

export const ABOUT_DATA: AboutData = {
  constellations: [
    {from: 'frontend', to: 'fresh-cart'},
    {from: 'fresh-cart', to: 'social-app'},
    {from: 'education', to: 'frontend'},
    {from: 'frontend', to: 'ui-components'},
    {from: 'ui-components', to: 'fresh-cart'},
  ],
  planets: [
    {
      color: planetColor('brand'),
      colorToken: 'brand',
      description:
        '1 year of hands-on experience building production React and Next.js applications. Focused on clean component architecture, TypeScript, and modern tooling.',
      glowColor: glowColor('brand', 0.3),
      highlights: [
        'React & Next.js',
        'TypeScript',
        'Redux Toolkit',
        'TanStack Query',
      ],
      icon: faCode,
      id: 'frontend',
      label: 'Frontend Engineering',
      orbitDuration: 90,
      orbitRadius: 0.38,
      size: 52,
      startAngle: 0.3,
    },
    {
      color: planetColor('brand-accent'),
      colorToken: 'brand-accent',
      description:
        'Built a full e-commerce platform with 60+ products, cart management, checkout flow, and secure JWT authentication — deployed on Vercel.',
      glowColor: glowColor('brand-accent', 0.3),
      highlights: [
        '60+ products',
        '60+ reusable components',
        '40+ API endpoints',
        'Deployed on Vercel',
      ],
      icon: faShoppingCart,
      id: 'fresh-cart',
      label: 'Fresh Cart',
      orbitDuration: 75,
      orbitRadius: 0.52,
      size: 48,
      startAngle: 1.2,
    },
    {
      color: planetColor('info'),
      colorToken: 'info',
      description:
        'Built a social feed app with post creation, likes, comments, and a follow/unfollow system — focusing on reusable component architecture and global state management.',
      glowColor: glowColor('info', 0.3),
      highlights: [
        'Post creation & feed',
        'Likes & comments',
        'Follow/unfollow system',
        'Redux Toolkit state',
      ],
      icon: faUsers,
      id: 'social-app',
      label: 'Social App',
      orbitDuration: 80,
      orbitRadius: 0.48,
      size: 46,
      startAngle: 4.4,
    },
    {
      color: planetColor('warning'),
      colorToken: 'warning',
      description:
        'Building reusable UI components with Tailwind CSS and shadcn/ui — focused on consistency, accessibility, and clean design across all projects.',
      glowColor: glowColor('warning', 0.3),
      highlights: [
        'shadcn/ui',
        'Tailwind CSS',
        'Accessible components',
        'Reusable architecture',
      ],
      icon: faLayerGroup,
      id: 'ui-components',
      label: 'UI Components',
      orbitDuration: 55,
      orbitRadius: 0.62,
      size: 44,
      startAngle: 2.5,
    },
    {
      color: planetColor('success'),
      colorToken: 'success',
      description:
        'BS in Computer Science from October 6 University with a GPA of 3.1, complemented by an intensive Frontend Development Track at Route Academy.',
      glowColor: glowColor('success', 0.3),
      highlights: [
        'O6U — BS Computer Science',
        'GPA: 3.1 / 4.0',
        'Route Academy',
        'Frontend Dev Track',
      ],
      icon: faGraduationCap,
      id: 'education',
      label: 'Education',
      orbitDuration: 100,
      orbitRadius: 0.72,
      size: 42,
      startAngle: 3.8,
    },
    {
      color: planetColor('brand-warm'),
      colorToken: 'brand-warm',
      description:
        'Building responsive, mobile-first interfaces is a core focus — every project is tested across screen sizes with Tailwind CSS utilities and flexible layouts.',
      glowColor: glowColor('brand-warm', 0.3),
      highlights: [
        'Mobile-first design',
        'Tailwind CSS utilities',
        'Flexible layouts',
        'Cross-device testing',
      ],
      icon: faMobile,
      id: 'responsive',
      label: 'Responsive Design',
      orbitDuration: 110,
      orbitRadius: 0.88,
      size: 40,
      startAngle: 5.0,
    },
  ],
  sun: {
    bio: "I'm Abdelrahman — a frontend developer from Cairo passionate about building fast, clean, and responsive web applications. I focus on React and Next.js, care about component architecture and reusable UI, and love turning designs into pixel-perfect interfaces. When I'm not coding, I'm learning something new or working on my next side project.",
    colorToken: 'brand',
    glowColor: glowColor('brand', 0.4),
    label: 'Abdelrahman Rabi3',
    size: 80,
  },
  tagline: 'From learning the basics to shipping full products.',
};