import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faRocket, faShapes, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons';

import eurekaTrackerImg from '@/assets/projects/freshcart.png';
import mandragoraManiaImg from '@/assets/projects/Dashboard.png';
import xivCompleteImg from '@/assets/projects/socialappscreen.png';

export type Project = {
  company?: string;
  coverImage?: string;
  description: string;
  icon?: IconDefinition;
  id: string;
  links?: ProjectLink[];
  role: string;
  slug: string;
  tags: string[];
  techStack: string[];
  title: string;
  type: 'case-study' | 'side-project';
  year?: number | string;
};

export type ProjectLink = {
  label: string;
  url: string;
};

export const PROJECTS: Project[] = [
  // ── Case Studies ──
  {
    company: 'Fresh Cart',
    description:
      'Full e-commerce experience with 60+ products, cart management, checkout flow, and secure user authentication — built with React, Next.js, and TypeScript.',
    icon: faShoppingCart,
    id: 'design-system-architecture',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/13335Abdo/FreshCart',
      },
    ],
    role: 'Frontend Developer',
    slug: 'fresh-cart',
    tags: ['e-commerce', 'react', 'next.js'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'shadcn/ui'],
    title: 'E-Commerce Platform',
    type: 'case-study',
    year: '2025',
  },
  {
    company: 'Social App',
    description:
      'Social feed app with post creation, likes, comments, and a follow/unfollow system — built with a reusable component architecture and global state management.',
    icon: faUsers,
    id: 'visual-testing-strategy',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/13335Abdo/social-app',
      },
    ],
    role: 'Frontend Developer',
    slug: 'social-app',
    tags: ['social', 'react', 'redux'],
    techStack: ['React', 'Redux Toolkit', 'Tailwind CSS'],
    title: 'Social App',
    type: 'case-study',
    year: '2025',
  },
  {
    description:
      'A portfolio built with React 19, Tailwind CSS v4, and AI-assisted development. Features a gamification system, easter eggs, and meticulous accessibility.',
    icon: faRocket,
    id: 'portfolio',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/13335Abdo/Portfolio',
      },
    ],
    role: 'Designer & Developer',
    slug: 'portfolio',
    tags: ['engineering', 'design', 'open-source'],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'Framer Motion'],
    title: 'This Portfolio',
    type: 'case-study',
    year: '2026-present',
  },





  // ── Side Projects ──
  {
    coverImage: eurekaTrackerImg,
    description:
      'Full e-commerce experience with 60+ products, cart management, checkout flow, and secure user authentication — built with React, Next.js, and TypeScript.',
    id: 'eureka-tracker',
    links: [{ label: 'Live Site', url: 'https://fresh-cart-teal-zeta.vercel.app/' }],
    role: 'Frontend Developer',
    slug: 'fresh-cart',
    tags: ['e-commerce', 'react', 'next.js'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'shadcn/ui'],
    title: 'Fresh Cart',
    type: 'side-project',
  },
  {
    coverImage: xivCompleteImg,
    description:
      'Social feed app with post creation, likes, comments, and a follow/unfollow system for user-to-user connections — built with a reusable component architecture.',
    id: 'xiv-complete',
    links: [{ label: 'Live Site', url: 'https://social-app-two-beta.vercel.app/' }],
    role: 'Frontend Developer',
    slug: 'social-app',
    tags: ['social', 'react', 'redux'],
    techStack: ['React', 'Redux Toolkit', 'Tailwind CSS'],
    title: 'Social App',
    type: 'side-project',
  },
  {
    coverImage: mandragoraManiaImg,
    description:
      'A weather dashboard built with Vanilla JS that displays real-time weather data including temperature, humidity, and forecasts for any city.',
    id: 'Dashboard',
    links: [{ label: 'Live Site', url: 'https://city-specs-route.vercel.app/' }],
    role: 'Frontend Developer',
    slug: 'weather-dashboard',
    tags: ['dashboard', 'weather', 'vanilla-js'],
    techStack: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    title: 'Weather Dashboard',
    type: 'side-project',
  },
];

export const CASE_STUDIES = PROJECTS.filter((p) => p.type === 'case-study');
export const SIDE_PROJECTS = PROJECTS.filter((p) => p.type === 'side-project');
