// ── Types ──

export type CaseStudySection = {
  body: string;
  title: string;
};

export type CaseStudyHighlight = {
  label: string;
  value: string;
};

export type CaseStudyContent = {
  highlights: CaseStudyHighlight[];
  projectId: string;
  sections: CaseStudySection[];
};

// ── Case Study Content ──

export const CASE_STUDY_CONTENT: CaseStudyContent[] = [
  {
    highlights: [
      { label: 'Products', value: '60+' },
      { label: 'Reusable Components', value: '60+' },
      { label: 'API Endpoints', value: '40+' },
      { label: 'Deployed On', value: 'Vercel' },
    ],
    projectId: 'design-system-architecture',
    sections: [
      {
        body: 'Building a full e-commerce app requires more than just listing products. The challenge was handling complex state across cart, authentication, and checkout — while keeping the UI responsive, fast, and consistent across all screen sizes.',
        title: 'The Challenge',
      },
      {
        body: 'I built Fresh Cart with React and Next.js, using Redux Toolkit for global state management across cart and user sessions. Forms and validation were handled with React Hook Form and Zod for secure authentication flows. The UI was built entirely with Tailwind CSS and shadcn/ui for a clean, consistent component system. All data fetching was managed with Axios and TanStack Query.',
        title: 'The Approach',
      },
      {
        body: 'The result is a fully functional e-commerce platform with 60+ products, a complete cart and checkout flow, and secure JWT-based authentication — deployed on Vercel with consistent performance and a fully responsive UI across all devices.',
        title: 'The Outcome',
      },
    ],
  },
  {
    highlights: [
      { label: 'Core Features', value: '4+' },
      { label: 'Reusable Components', value: '20+' },
      { label: 'State Managed With', value: 'Redux' },
      { label: 'Deployed On', value: 'Vercel' },
    ],
    projectId: 'visual-testing-strategy',
    sections: [
      {
        body: 'Building a social feed app means managing dynamic, real-time-like interactions — posts, likes, comments, and user connections — in a way that feels smooth and responsive without overcomplicating the state management.',
        title: 'The Challenge',
      },
      {
        body: 'I built the app with React and Redux Toolkit, keeping the component architecture reusable and modular. The feed supports post creation, likes, comments, and a follow/unfollow system for user-to-user connections. Tailwind CSS was used throughout for a consistent and responsive UI.',
        title: 'The Approach',
      },
      {
        body: 'The outcome is a clean, functional social feed app with smooth user interactions and a reusable component structure — demonstrating practical experience with global state management and dynamic UI in a real-world scenario.',
        title: 'The Outcome',
      },
    ],
  },
  {
    highlights: [
      { label: 'Framework', value: 'React 19' },
      { label: 'Styling', value: 'Tailwind v4' },
      { label: 'AI-Assisted', value: '100%' },
      { label: 'Lighthouse', value: '87+ (0ms TBT)' },
    ],
    projectId: 'portfolio',
    sections: [
      {
        body: 'Most portfolio sites are static showcases. I wanted mine to reflect how I actually work - with modern tools, attention to craft, and a bit of personality. It needed to demonstrate technical depth (React 19, Tailwind CSS v4, TypeScript) while being genuinely fun to explore.',
        title: 'The Challenge',
      },
      {
        body: 'Built entirely with AI-assisted development using Claude as a pair programming partner. Every component follows shadcn/ui patterns with full accessibility. A gamification system tracks exploration progress with hidden achievements and easter eggs. The component playground embeds live Storybook stories. The entire codebase prioritizes semantic HTML, keyboard navigation, and screen reader support.',
        title: 'The Approach',
      },
      {
        body: 'A portfolio that practices what it preaches - accessible, performant, and delightful. Lighthouse scores 87+ with 0ms Total Blocking Time despite client-side rendering, Framer Motion animations, and an embedded solar system. The gamification system encourages exploration beyond the usual resume-and-projects format. The AI-assisted workflow demonstrates a forward-thinking approach to engineering that I champion in my day job.',
        title: 'The Outcome',
      },
    ],
  },
];
