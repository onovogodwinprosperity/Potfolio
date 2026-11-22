/**
 * Single source of truth for every fact on this portfolio.
 * All components import from here — no hard-coded facts elsewhere.
 *
 * Every fact below is verified (CV, GitHub profile, LinkedIn, live sites).
 * Never add invented metrics, endorsements, clients or employers here.
 */

export const profile = {
  name: 'Onovo Godwin Prosperity',
  firstName: 'Godwin',
  initials: 'OGP',
  role: 'Frontend Engineer',
  roleLine: 'Frontend Engineer · React / Next.js / TypeScript',
  tagline:
    'I ship production React and Next.js interfaces that make money — design-system components, mobile-first layouts, App Router SSR/ISR, TypeScript-strict UI, and high-stakes checkout flows.',
  location: 'Lagos / Enugu, Nigeria',
  workStyle: 'Remote · Hybrid · On-site (UK / Germany / US)',
  availability: 'Open to Frontend roles — UK · Germany · US · Remote',
  email: 'prosperitychibest1@gmail.com',
  phoneDisplay: '+234 707 290 4118',
  phoneHref: 'tel:+2347072904118',
  cvPath: '/Onovo_Godwin_Prosperity_CV.pdf',
  portrait: '/images/godwin.webp',
  portraitAlt: 'Onovo Godwin Prosperity — Frontend Engineer, photographed in a tech office at night',
  summary:
    'Frontend Engineer who ships production React and Next.js interfaces — design-system components, mobile-first layouts, App Router SSR/ISR, TypeScript-strict UI, and high-stakes checkout flows. Conversion-focused across e-commerce, fundraising, marketplaces and news. Founder of Cavalcade Tech Ltd, ethical hacker and cybersecurity educator, and mentor to 50+ engineers.',
} as const;

export const socials = {
  github: 'https://github.com/onovogodwinprosperity',
  githubHandle: 'onovogodwinprosperity',
  linkedin: 'https://www.linkedin.com/in/onovogodwinprosperity',
  twitter: 'https://x.com/godwin_onovo',
  twitterHandle: '@godwin_onovo',
  blog: 'https://Chibestcomputerworld.com',
  blogLabel: 'Chibestcomputerworld.com',
  productSite: 'https://speedreporters.com',
} as const;

export const stats = [
  { value: '60+', label: 'GitHub repositories' },
  { value: '45', label: 'Public repos' },
  { value: '6', label: 'Certifications (2026)' },
  { value: '50+', label: 'Engineers mentored' },
] as const;

export type ProjectLink =
  | { kind: 'live'; url: string; label: string }
  | { kind: 'repo'; url: string; label: string }
  | { kind: 'private'; label: string };

export interface Project {
  name: string;
  tagline: string;
  problem: string;
  built: string;
  outcome: string;
  stack: string[];
  links: ProjectLink[];
  flagship?: boolean;
  accent: 'crimson' | 'blue' | 'violet' | 'emerald' | 'amber';
}

export const projects: Project[] = [
  {
    name: 'SpeedReporters',
    tagline: 'Full-stack, domain-driven news platform',
    problem:
      'Readers expect breaking news instantly, and publishers need subscriptions that actually convert — most news sites deliver neither.',
    built:
      'A full-stack news platform with breaking-news desks, investigative desks, live blogs, reader engagement and tiered subscriptions, with passwordless email OTP sign-in. Built with a domain-driven design across 30+ tables.',
    outcome:
      'Live in production on Google Cloud Run, serving real readers with SSR/ISR pages and a subscription flow built to convert.',
    stack: ['Next.js 16', 'TypeScript', 'Supabase', 'Drizzle', 'Upstash Redis', 'tRPC', 'Tailwind', 'shadcn/ui', 'Docker', 'Cloud Run'],
    links: [
      { kind: 'live', url: 'https://speedreporters.com', label: 'Visit live site' },
      { kind: 'private', label: 'Private codebase — walkthrough on request' },
    ],
    flagship: true,
    accent: 'crimson',
  },
  {
    name: 'SomaFC',
    tagline: 'Football club platform — registration, ratings, community',
    problem:
      'A football club was tracking players, coach ratings and content across spreadsheets and chat threads — nothing in one place.',
    built:
      'Player registration for youth and adult squads, weekly coach performance ratings with Recharts trend charts, and a blog with moderated comments — on a modular domain-driven architecture.',
    outcome:
      'One platform for the whole club: registrations, performance trends and community content, secured with Auth.js v5.',
    stack: ['Next.js 16', 'TypeScript (strict)', 'Drizzle', 'PostgreSQL', 'Upstash Redis', 'Auth.js v5', 'Recharts', 'Docker'],
    links: [{ kind: 'private', label: 'Private codebase — walkthrough on request' }],
    accent: 'emerald',
  },
  {
    name: 'Cavalcade Tech Ltd Platform',
    tagline: 'Company platform — commerce, academy, AI support',
    problem:
      'A tech company needed one platform for marketing, selling, teaching and supporting customers — not five disconnected tools.',
    built:
      'Marketing site, commerce marketplace (order merch and hardware, book services), Cavalcade Academy, blog/newsroom, newsletter, OTP security, and an action-capable AI customer-care agent — with role-based access control throughout.',
    outcome:
      'A single product surface for the whole business, from first visit to purchase, learning and support.',
    stack: ['Next.js 16', 'TypeScript', 'Drizzle', 'RBAC', 'OTP auth', 'AI agent', 'Docker', 'Cloud Run'],
    links: [{ kind: 'private', label: 'Private codebase — walkthrough on request' }],
    accent: 'blue',
  },
  {
    name: 'YADI — Youths Awakening & Development Initiative',
    tagline: 'Mobile-first NGO platform for all 36 Nigerian states + FCT',
    problem:
      'An Enugu-based NGO needed to reach young people across all of Nigeria with skills, sponsorship and empowerment programmes — on phones, not desktops.',
    built:
      'Mobile-first platform with Skill Acquisition, Sponsorship and Empowerment engines, a blog, and "YADI Guide" — an AI assistant powered by Claude — plus multi-gateway donations.',
    outcome:
      'A nationwide platform that meets young Nigerians where they are: on mobile, in every state.',
    stack: ['Next.js 16', 'React 19', 'Tailwind v4', 'Supabase', 'Paystack', 'Flutterwave', 'Stripe', 'Claude AI', 'Docker', 'Cloud Run'],
    links: [{ kind: 'private', label: 'Private codebase — walkthrough on request' }],
    accent: 'violet',
  },
  {
    name: 'Advanced Blog + GraphCMS',
    tagline: 'Headless CMS blog with full markdown articles',
    problem:
      'Content teams need a fast blog they can update without touching code — and readers need pages that load instantly.',
    built:
      'Headless CMS blog with featured and recent posts, categories, full markdown articles, author pages and comments, powered by GraphQL.',
    outcome:
      'Live demo on Vercel — editors publish in the CMS, readers get a fast, clean reading experience.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'GraphQL CMS', 'Markdown'],
    links: [
      { kind: 'live', url: 'https://nextjs-plum-five-51.vercel.app/', label: 'Live demo' },
      { kind: 'repo', url: 'https://github.com/onovogodwinprosperity/Advance-Blog-App-with-NextJS--React--TailwinCSS-and-GraphqlCMS', label: 'GitHub repo' },
    ],
    accent: 'amber',
  },
  {
    name: 'Dev Community App',
    tagline: 'Community UI on a Radix / shadcn design system',
    problem:
      'Community products live or die on their interface — inconsistent components and slow renders push people away.',
    built:
      'A developer community UI built on a Radix/shadcn design system with React Compiler optimisation, theming and linted, strict TypeScript.',
    outcome:
      'A consistent, themeable, fast community interface — a showcase of design-system discipline.',
    stack: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind v4', 'Radix UI', 'shadcn/ui'],
    links: [
      { kind: 'repo', url: 'https://github.com/onovogodwinprosperity/Dev-community', label: 'GitHub repo' },
    ],
    accent: 'blue',
  },
  {
    name: 'TechWithGodwin',
    tagline: 'Tech brand & education site — most-starred repo (15★)',
    problem:
      'People learning tech need clear, practical guidance from someone who actually builds — not theory from a textbook.',
    built:
      'His tech education brand site — the home of his teaching, content and community for people learning to build with modern web tech.',
    outcome:
      'His most-starred public repository (15 stars) — the brand behind his teaching and content.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { kind: 'repo', url: 'https://github.com/onovogodwinprosperity/techwithgodwin', label: 'GitHub repo · 15★' },
    ],
    accent: 'crimson',
  },
  {
    name: 'React Authentication',
    tagline: 'Complete reference for React auth & authorisation',
    problem:
      'Authentication is where most React tutorials stop short — and where real apps get breached.',
    built:
      'A complete guide and reference implementation covering React authentication and authorisation, from an ethical hacker who teaches security.',
    outcome:
      'A practical, security-minded reference other developers learn from.',
    stack: ['React', 'Vite', 'CSS'],
    links: [
      { kind: 'repo', url: 'https://github.com/onovogodwinprosperity/react-authentication', label: 'GitHub repo' },
    ],
    accent: 'emerald',
  },
];

export interface ExperienceRole {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export const experience: ExperienceRole[] = [
  {
    role: 'Founder & Lead Frontend Engineer',
    company: 'Cavalcade Tech Ltd',
    period: '2023 — Present',
    location: 'Nigeria · Remote',
    summary:
      'Leads product engineering for client web apps across fintech, e-commerce and education — from architecture to shipped interface.',
    highlights: [
      'Architected CareRaise (Next.js App Router, TypeScript, Auth.js Google/GitHub OAuth, Stripe + PayPal checkout UX)',
      'Marketplace storefronts with Paystack payment UX',
      'Reusable UI foundations with Tailwind and Radix/shadcn',
      'Mentors developers across client projects',
    ],
  },
  {
    role: 'Software Engineer & Technical Mentor',
    company: 'Sharashel Tech Ltd',
    period: 'Apr 2021 — Present',
    location: 'Nigeria · Remote',
    summary:
      'React frontends for e-commerce and a high-throughput news product — measured wins on speed, conversion and team velocity.',
    highlights: [
      'Page-load speed improved ~40%; engagement +~30%',
      'Checkout conversion +~25% after a mobile-first redesign',
      'UML-documented component architecture cut onboarding ~50%',
      'Mentored 50+ junior engineers (95%+ on-time delivery)',
      'GitHub Actions + Docker CI/CD cut release time ~60%',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Larisoft Tech Ltd',
    period: 'Apr 2018 — May 2019',
    location: 'Nigeria',
    summary:
      'Where it started — client pages in HTML, CSS and JavaScript, and first production REST API integrations.',
    highlights: [
      'Built client pages with HTML, CSS and JavaScript',
      'Integrated REST APIs into production pages',
    ],
  },
];

export const education = {
  degree: 'B.Ed, Computer Education',
  school: 'Enugu State University of Science and Technology (ESUT)',
  period: '2019 — 2022',
  languages: ['English (Fluent)', 'Pidgin English (Fluent)'],
} as const;

export interface SkillGroup {
  title: string;
  description: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Working' }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'The core craft — interfaces people enjoy using and businesses make money from.',
    skills: [
      { name: 'TypeScript (strict)', level: 'Expert' },
      { name: 'React 19 / React Compiler', level: 'Expert' },
      { name: 'Next.js 16 — App Router, SSR/ISR, RSC', level: 'Expert' },
      { name: 'JavaScript ES6+', level: 'Expert' },
      { name: 'HTML5 / CSS3', level: 'Expert' },
      { name: 'Tailwind CSS v4', level: 'Expert' },
      { name: 'Radix UI / shadcn/ui / CVA', level: 'Advanced' },
      { name: 'Design systems', level: 'Advanced' },
      { name: 'Figma-to-code', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend & Data',
    description: 'Enough backend to ship full products, not just screens.',
    skills: [
      { name: 'Node.js / Express', level: 'Advanced' },
      { name: 'REST / GraphQL / tRPC', level: 'Advanced' },
      { name: 'Supabase / PostgreSQL', level: 'Advanced' },
      { name: 'Drizzle ORM', level: 'Advanced' },
      { name: 'Upstash Redis', level: 'Working' },
      { name: 'MongoDB', level: 'Working' },
      { name: 'Zod validation', level: 'Advanced' },
    ],
  },
  {
    title: 'DevOps & Quality',
    description: 'Shipping safely, quickly, and measurably.',
    skills: [
      { name: 'Git / GitHub Actions / CI/CD', level: 'Advanced' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'Vercel / Netlify / Cloud Run', level: 'Advanced' },
      { name: 'Jest / Vitest / React Testing Library', level: 'Advanced' },
      { name: 'Playwright', level: 'Working' },
      { name: 'axe-core accessibility', level: 'Working' },
    ],
  },
  {
    title: 'Payments & Product',
    description: 'Where interfaces meet revenue — checkout UX that converts.',
    skills: [
      { name: 'Stripe checkout UX', level: 'Advanced' },
      { name: 'Paystack checkout UX', level: 'Advanced' },
      { name: 'PayPal checkout UX', level: 'Advanced' },
      { name: 'Flutterwave checkout UX', level: 'Working' },
      { name: 'Auth.js v5 / OAuth / OTP auth', level: 'Advanced' },
      { name: 'Cybersecurity awareness', level: 'Advanced' },
    ],
  },
];

export const certifications = [
  { name: 'Learning Kubernetes', issuer: 'LinkedIn Learning', year: '2026' },
  { name: 'GitHub Actions for CI/CD', issuer: 'LinkedIn Learning', year: '2026' },
  { name: 'Learning NGINX', issuer: 'LinkedIn Learning', year: '2026' },
  { name: 'DevOps Foundations: Lean and Agile', issuer: 'LinkedIn Learning', year: '2026' },
  { name: 'Using Git with Visual Studio Code', issuer: 'LinkedIn Learning', year: '2026' },
  { name: 'Practical GitHub Project Management and Collaboration', issuer: 'LinkedIn Learning', year: '2026' },
] as const;

export const services = [
  {
    title: 'Frontend engineering for teams',
    description:
      'React and Next.js development for product teams — design systems, performance budgets, accessible components, and interfaces your users actually enjoy.',
    points: ['React 19 / Next.js 16, TypeScript-strict', 'Design systems (Tailwind, Radix/shadcn)', 'Performance: faster loads, higher engagement'],
    icon: 'code',
  },
  {
    title: 'Products for clients',
    description:
      'End-to-end web products that sell, convert and engage — from first sketch to production deploy on Cloud Run or Vercel.',
    points: ['E-commerce & checkout flows that convert', 'News & content platforms with subscriptions', 'Marketplaces with local payment UX (Paystack, Flutterwave)'],
    icon: 'rocket',
  },
  {
    title: 'Mentorship & training',
    description:
      'Practical, project-first teaching — students build real things from day one. 50+ engineers mentored, plus the Web Development Masterclass for Enugu youths.',
    points: ['React curricula & one-on-one mentoring', 'Web Development Masterclass (HTML, CSS, JS)', 'Students build their first website in class, same day'],
    icon: 'mentor',
  },
] as const;

export const about = {
  heading: 'From ethical hacking to interfaces that sell',
  paragraphs: [
    'I started out as an ethical hacker — learning how systems break, and how to protect them. That security-first mindset still shapes every interface I build: authentication done properly, checkout flows people can trust, and code that holds up under real traffic.',
    'Today I lead frontend engineering at Cavalcade Tech Ltd, the company I founded, and build React frontends at Sharashel Tech Ltd — e-commerce, fundraising, marketplaces and news. My work is measured in outcomes: faster pages, higher conversions, and teams that ship quicker because the component architecture is documented and the UI foundations are solid.',
    'I also teach. Through the Web Development Masterclass, Enugu youths learn HTML, CSS and JavaScript — and build their first website in class on the same day. And through my cybersecurity content, I help everyday people stay safe online, starting with the basics like free Wi-Fi safety.',
  ],
  facts: [
    { label: 'Based in', value: 'Lagos / Enugu, Nigeria' },
    { label: 'Works', value: 'Remote · Hybrid · On-site (UK / DE / US)' },
    { label: 'Education', value: 'B.Ed Computer Education, ESUT (2019–2022)' },
    { label: 'Languages', value: 'English · Pidgin English (both fluent)' },
    { label: 'Founder', value: 'Cavalcade Tech Ltd' },
    { label: 'Also', value: 'Ethical hacker · Cybersecurity educator' },
  ],
} as const;

/** GitHub Explorer config */
export const githubApiUrl =
  'https://api.github.com/users/onovogodwinprosperity/repos?per_page=100&sort=updated';

/**
 * Curated snapshot used when the live GitHub API is unavailable
 * (rate limit, offline, blocked). Descriptions, languages and star counts
 * verified against the live API, Nov 2026.
 */
export interface FallbackRepo {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  updated: string;
  url: string;
}

export const fallbackRepos: FallbackRepo[] = [
  { name: 'techwithgodwin', description: 'Tech brand & education site — most-starred public repo', language: 'HTML', stars: 15, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/techwithgodwin' },
  { name: 'Advance-Blog-App-with-NextJS--React--TailwinCSS-and-GraphqlCMS', description: 'The best React and Next Blog Application', language: 'JavaScript', stars: 2, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/Advance-Blog-App-with-NextJS--React--TailwinCSS-and-GraphqlCMS' },
  { name: 'Dev-community', description: 'Developer community UI — Radix/shadcn design system, React 19, Tailwind v4', language: 'TypeScript', stars: 1, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/Dev-community' },
  { name: 'react-authentication', description: 'Everything about React Authentication and Authorisation', language: 'CSS', stars: 1, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/react-authentication' },
  { name: 'javascript-algorithms', description: 'Algorithms and data structures implemented in JavaScript with explanations and links', language: 'JavaScript', stars: 4, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/javascript-algorithms' },
  { name: 'blogCli', description: 'Blog CLI tool', language: 'JavaScript', stars: 4, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/blogCli' },
  { name: 'evoting2', description: 'E-voting application', language: 'HTML', stars: 4, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/evoting2' },
  { name: 'Movie-App-with-React.js', description: 'Movie discovery app built with React.js', language: null, stars: 2, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/Movie-App-with-React.js' },
  { name: 'WEATHER_API', description: 'Weather API project', language: 'TypeScript', stars: 1, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/WEATHER_API' },
  { name: 'careraise-backend-main', description: 'Backend for the CareRaise fundraising platform', language: null, stars: 1, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/careraise-backend-main' },
  { name: 'ecommerceApp', description: 'My new Earpod Shopping mall', language: null, stars: 2, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/ecommerceApp' },
  { name: 'Netflix-Homepage-Clone--Pure-HTML-CSS-and-Little-Javascript-Advance-Project', description: 'Netflix homepage clone — pure HTML, CSS and a little JavaScript', language: 'JavaScript', stars: 2, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/Netflix-Homepage-Clone--Pure-HTML-CSS-and-Little-Javascript-Advance-Project' },
  { name: 'Quiz-App', description: 'Interactive quiz application', language: 'HTML', stars: 1, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/Quiz-App' },
  { name: 'Amazon-clone', description: 'Amazon storefront clone', language: 'HTML', stars: 1, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/Amazon-clone' },
  { name: 'iphone-calculator-clone', description: 'iPhone calculator clone', language: 'HTML', stars: 1, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/iphone-calculator-clone' },
  { name: 'maths-cs-ai-compendium', description: 'Become a cracked AI/ML Research Engineer', language: null, stars: 2, updated: '2026-11', url: 'https://github.com/onovogodwinprosperity/maths-cs-ai-compendium' },
];
