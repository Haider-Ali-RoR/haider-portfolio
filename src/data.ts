/**
 * Single source of truth for all portfolio content.
 * Everything is derived from Haider Ali's CV — edit here to update the site.
 */

export const profile = {
  name: "Haider Ali",
  title: "Senior Full Stack Engineer",
  subtitle: "MERN / Node.js · Ruby on Rails",
  location: "Faisalabad, Pakistan",
  mapUrl: "https://maps.app.goo.gl/m4BfNWqwFSTFPADa7",
  email: "haideralifsd786@gmail.com",
  phone: "+92 322 6676878",
  yearsOfExperience: "7+",
  photo: "/profile.jpg",
  resumeUrl: "/Haider_Ali_786_Resume.pdf",
  summary:
    "Senior full-stack engineer with over 7 years of experience building production SaaS platforms. Deep Node.js / MERN focus (Express, NestJS, Next.js, React, MongoDB, Supabase, PostgreSQL) with a strong Ruby on Rails background. Track record across multi-tenant SaaS, AI-integrated apps (OpenAI GPT-4.1, Whisper), real-time systems (Socket.io, BullMQ), and e-commerce integrations (Shopify, Stripe, Amazon).",
  socials: {
    github: "https://github.com/Haider-Ali-RoR",
    linkedin: "https://www.linkedin.com/in/haider-ali-a8180a141",
  },
} as const;

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "Ruby on Rails", "REST APIs", "GraphQL"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "RxJS",
      "TailwindCSS",
      "MUI",
      "Shadcn / Radix UI",
      "Framer Motion",
      "Socket.io",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Redis", "Prisma", "Mongoose"],
  },
  {
    label: "Cloud / DevOps",
    items: ["AWS (S3, EC2)", "Google Cloud Platform", "Vercel", "CI/CD"],
  },
  {
    label: "Integrations",
    items: [
      "Stripe",
      "OpenAI GPT-4.1",
      "Whisper",
      "Shopify (App Bridge, GraphQL)",
      "Twilio",
      "Pipedrive",
      "BullMQ",
      "SendGrid",
    ],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub", "GitLab", "Jira"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  url?: string;
};

export const experiences: Experience[] = [
  {
    company: "DevHouse",
    role: "Senior Full Stack Engineer (Node.js / MERN & Ruby on Rails)",
    period: "Apr 2021 — Present",
    location: "Faisalabad",
    url: "https://devhouse.co/",
  },
  {
    company: "TRACE 3D",
    role: "Senior Frontend Engineer",
    period: "Apr 2025 — Apr 2026",
    location: "Remote",
    url: "https://studio.trace3d.app/",
  },
  {
    company: "Groove Packer",
    role: "Senior Ruby on Rails Developer",
    period: "Aug 2024 — Present",
    location: "Remote",
    url: "https://groovepacker.com/",
  },
  {
    company: "Equipe Technique (ETQ)",
    role: "Senior Ruby on Rails Developer",
    period: "Aug 2022 — Aug 2024",
    location: "Remote",
    url: "https://www.linkedin.com/company/equipe-technique",
  },
];

export type ProjectApp = {
  name: string;
  description: string;
  url: string;
};

export type Project = {
  name: string;
  tagline: string;
  role: string;
  description: string;
  tech: string[];
  url?: string;
  // Featured projects span the full grid width (their own row).
  featured?: boolean;
  // Some projects are an umbrella over several deployed apps. When present,
  // the card becomes expandable to reveal each sub-app with its own link.
  apps?: ProjectApp[];
  // When set, the project's live site is no longer available. Clicking the
  // card link opens an explanatory modal with the archive link instead.
  archived?: {
    reason: string;
    archiveUrl: string;
  };
};

export const projects: Project[] = [
  {
    name: "GroovePacker",
    tagline: "Multi-Tenant Fulfillment SaaS",
    role: "Senior Backend Developer",
    featured: true,
    description:
      "An enterprise multi-tenant fulfillment SaaS spanning three deployed apps. I built core APIs aggregating orders from 9+ sales channels, the multi-tenant architecture (Apartment), a background job pipeline for order imports and inventory sync, a rules-microservice bridge to a Go service, and hardened OAuth (Doorkeeper) with Stripe tenant billing.",
    tech: ["Ruby on Rails", "MySQL", "Redis", "Go", "Shopify GraphQL", "Amazon MWS", "Stripe", "React 18"],
    url: "https://groovepacker.com/",
    apps: [
      {
        name: "GroovePacker Legacy",
        description:
          "The original Rails backend platform powering order aggregation, inventory sync, and multi-tenant billing.",
        url: "https://asad.groovepacker.com/",
      },
      {
        name: "GroovePacker-X",
        description:
          "A React frontend for barcode scanning and shipping-label workflows, running on the Legacy backend.",
        url: "https://app.groovepacker.com/",
      },
      {
        name: "GroovePacker-Lite (Pick Bot — Barcode Buddy)",
        description:
          "A standalone Shopify embedded app (separate Rails + React) for barcode scanning, live on the Shopify App Store.",
        url: "https://apps.shopify.com/groovepacker-lite",
      },
    ],
  },
  {
    name: "TRACE",
    tagline: "Browser-Based 3D AR/XR Authoring",
    role: "Senior Frontend Engineer",
    description:
      "The React-based studio interface for a browser-native 3D AR/XR content creation platform. Integrated the Babylon.js 3D viewer, implemented complex Zustand state management, and built composable behavior editing systems for animations, materials, and interactions.",
    tech: ["React 18", "TypeScript", "Vite", "Babylon.js", "Zustand", "Stripe", "HeroUI", "TailwindCSS"],
    url: "https://studio.trace3d.app/",
  },
  {
    name: "VetPA",
    tagline: "AI-Powered Veterinary SaaS",
    role: "Full-Stack Developer",
    description:
      "An AI-powered veterinary clinic management platform with clinical journaling, patient records, subscriptions, and automated workflows. Integrated GPT-4.1 for journal auto-fill, audio transcription via Whisper, and patient profile extraction with bilingual support (English/Danish). Built Stripe billing, role-based multi-tenant architecture, JWT auth, and an auto-saving clinical dashboard.",
    tech: ["Node.js", "Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma", "OpenAI GPT-4.1", "Stripe"],
    url: "https://vetpa.ai/",
  },
  {
    name: "Cuentto",
    tagline: "Wellness Writing Platform",
    role: "Full-Stack Developer",
    description:
      "A wellness-focused writing platform combining mindfulness meditation, expressive writing, and mood-aware content sharing with real-time notifications. Built the Socket.io live notification system, the feed algorithm, the multi-step writing experience, and the mindfulness meditation page with music integration.",
    tech: ["Node.js", "PostgreSQL", "Prisma", "Next.js", "React 19", "Socket.io", "Tailwind CSS 4", "Framer Motion"],
    url: "https://cuentto.com/",
  },
  {
    name: "Real Intent",
    tagline: "Lead Generation SaaS",
    role: "Frontend Developer",
    description:
      "A lead generation and growth-marketing automation platform for real estate agents. Developed the zipcode availability checker for exclusive territory assignment, integrated Pipedrive CRM for lead capture, and built marketing landing pages with multi-channel campaign onboarding.",
    tech: ["Next.js 15", "React 19", "TypeScript", "TanStack Query", "Pipedrive API", "Material-UI", "Framer Motion"],
    url: "https://www.realintent.co/",
  },
  {
    name: "Becomy",
    tagline: "Multi-Tenant E-Commerce SaaS",
    role: "Senior Software Engineer",
    description:
      "A low-cost Shopify alternative with multi-tenant subdomain-based storefronts and full e-commerce flows — products, variants, inventory, orders, and checkout. Integrated Stripe and the AvoHQ admin panel.",
    tech: ["Ruby on Rails", "React", "AvoHQ", "Stripe", "Devise", "TailwindCSS"],
    archived: {
      reason:
        "Becomy's live site is no longer available — the product has been archived and its domain is no longer maintained. You can still explore a preserved snapshot of the original site through the Internet Archive's Wayback Machine.",
      archiveUrl: "https://web.archive.org/web/20250715023018/https://becomy.com/",
    },
  },
];

export const education = {
  school: "National University of Computer & Emerging Sciences (FAST-NUCES)",
  degree: "Bachelor of Science in Computer Science",
  period: "2014 — 2018",
  url: "https://cfd.nu.edu.pk/",
};

export const languages = [
  "English (B2 — Upper Intermediate)",
  "Urdu (Native)",
  "Punjabi (Native)",
  "Hindi (Professional)",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
