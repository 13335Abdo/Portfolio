export type ResumeLink = {
  label: string;
  url: string;
};

export type ResumeExperience = {
  company: string;
  description: string;
  endDate: string;
  highlights: string[];
  id: string;
  links?: ResumeLink[];
  reality?: string;
  role: string;
  startDate: string;
  techStack: string[];
};

export type ResumeEducation = {
  degree: string;
  endYear: number;
  gpa?: number;
  honors?: string;
  id: string;
  reality?: string;
  school: string;
  startYear: number;
};

export type SkillCategory = {
  highlighted?: string[];
  name: string;
  skills: string[];
};

export type ResumeData = {
  education: ResumeEducation[];
  experience: ResumeExperience[];
  skills: SkillCategory[];
  summary: string;
};

export const RESUME: ResumeData = {
  education: [
  {
    degree: 'BS, Computer Science',
    endYear: 2025,
    gpa: 3.1,
    id: 'o6u',
    reality:
      'Started with algorithms and data structures, ended up falling in love with frontend. Turns out making things look good and work fast is way more fun than sorting arrays.',
    school: 'October 6 University (O6U)',
    startYear: 2021,
  },
  {
    degree: 'Frontend Development Track',
    endYear: 2026,
    id: 'route',
    reality:
      'Intensive frontend track where I went from knowing React to building full e-commerce apps with Next.js, TypeScript, and Redux Toolkit. Shipped more code than sleep.',
    school: 'Route Academy',
    startYear: 2025,
  },
],
  experience: [
    {
      company: 'ezCater',
      description:
        'Building and maintaining a design system from scratch using Tailwind CSS and shadcn/ui principles. Driving company-wide Storybook and Chromatic adoption for visual testing. Primary vendor contact for Chromatic, featured in their published case study.',
      endDate: 'Present',
      highlights: [
        'Built component library from solo proof-of-concept to company-wide adoption across 5 apps',
        'Authored 18+ atomic components and 150+ Storybook stories',
        'Drove shift from Jest to Storybook/Chromatic visual testing (36k+ builds, 740+ components)',
        'Built 7+ migration codemods for library transition',
        'Shipped new checkout workflow, app bar, and payment system on a product team',
        'Championed AI-assisted development through tech talks, documentation, and published blogs',
      ],
      links: [{ label: 'Medium Blog', url: 'https://medium.com/@noranda' }],
      id: 'ezcater',
      reality:
        'Started a one-woman revolution against CSS-in-JS. Built a design system so good that the team they disbanded to stop me from building it got rebuilt to help me finish it. Also may have attended more Chromatic webinars than anyone outside of Chromatic.',
      role: 'Senior Software Engineer',
      startDate: 'Jan 2022',
      techStack: ['Chromatic', 'Next.js', 'React', 'Storybook', 'Tailwind CSS', 'TypeScript'],
    },
    {
      company: 'The MITRE Corporation',
      description:
        'Lead Designer on the MITRE Moonshot research initiative and Design Implementation Lead on Clinical Decision Support. Mentored junior developers, presented at national conferences, and led UX focus groups with patients and clinicians.',
      endDate: 'Jan 2022',
      highlights: [
        'Lead Designer on MITRE Moonshot research initiative',
        'Design Implementation Lead on Clinical Decision Support project',
        'Led UX focus groups with patients and clinicians',
        'Implemented codebase-wide refactoring for improved maintainability',
      ],
      id: 'mitre',
      reality:
        'Spent 8 years making healthcare software look like it was made this decade. Turns out clinicians have strong opinions about dropdown menus. Presented at national conferences where I pretended the demo was supposed to do that.',
      role: 'UI Designer & Developer, Senior',
      startDate: '2014',
      techStack: ['CSS', 'HTML', 'JavaScript', 'Material UI', 'Next.js', 'React'],
    },
    {
      company: 'Brandeis University',
      description:
        'Developed and maintained university division websites. Managed Cascade Server web content management system and supported the myBrandeis campus portal.',
      endDate: '2014',
      highlights: [
        'Developed university division websites',
        'Managed Cascade Server CMS',
        'Supported myBrandeis campus portal',
      ],
      id: 'brandeis-work',
      reality:
        "My first real dev job. Spent a year learning that 'managing a CMS' is a euphemism for 'fighting a CMS.' The portal only crashed on the important days.",
      role: 'Web Developer',
      startDate: '2013',
      techStack: ['CSS', 'HTML', 'JavaScript'],
    },
    {
      company: 'NASA Jet Propulsion Laboratory',
      description:
        'Developed Matlab programs converting spherical harmonic coefficients into topography and gravity analysis maps for Venus volcano research.',
      endDate: '2012',
      highlights: [
        'Built Matlab program for spherical harmonic coefficient conversion',
        'Generated topography and gravity maps for Venus volcano research',
      ],
      id: 'nasa-jpl',
      reality:
        "Yes, I worked at NASA. No, I didn't go to space. I wrote Matlab code to analyze Venus volcanoes, which is basically the same thing if you squint hard enough.",
      role: 'Research Intern',
      startDate: '2012',
      techStack: ['Matlab'],
    },
  ],
  skills: [
    {
      highlighted: ['React', 'TypeScript'],
      name: 'Core',
      skills: ['JavaScript', 'Next.js', 'React', 'TypeScript'],
    },
    {
      highlighted: ['Tailwind CSS'],
      name: 'Design & Styling',
      skills: ['CSS', 'Figma', 'Material UI', 'Tailwind CSS'],
    },
    {
      highlighted: ['Claude Code'],
      name: 'Testing & Tools',
      skills: [
        'Chromatic',
        'Claude Code',
        'Copilot',
        'Cursor',
        'Git',
      ],
    },
    {
      highlighted: ['Component Architecture', 'Design Systems'],
      name: 'Practices',
      skills: [
        'Accessibility',
        'Component Architecture',
        'Design Systems',
        'Responsive Design',
        'REST API Integration',
      ],
    },
  ],
  summary:
    'Front-end developer with 1 year of hands-on experience building responsive web applications. I focus on clean component architecture, reusable UI, and delivering fast, accessible interfaces with React and Next.js.',
};
