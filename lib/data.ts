export const profile = {
  name: "Masum Reza",
  initials: "MR",
  role: "Full-Stack Software Developer",
  email: "masumre1010@gmail.com",
  phone: "+91 98001 41571",
  phoneHref: "tel:+919800141571",
  github: "https://github.com/masum011",
  linkedin: "https://www.linkedin.com/in/masum-reza/",
  resume: "https://drive.google.com/file/d/1AND1cu-pKXWZ5Nfwj-4ftOTWVBoo986a/view?usp=sharing",
  site: "https://masumrezadev.netlify.app",
};

export const stats = [
  { value: "2+ yr", label: "Professional experience" },
  { value: "3", label: "Live websites shipped" },
  { value: "4", label: "Role-based dashboards built" },
  { value: "Offline", label: "Service Workers & IndexedDB" },
];

export const techStrip = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "Supabase",
  "TanStack Query",
  "Node.js",
];

export const aboutParagraphs = [
  "I'm a full-stack developer with a B.Tech in Computer Science & Engineering. I build React and Next.js interfaces, work with backend services and APIs, and have shipped a FinTech platform, a Supabase-backed business site and a brand website.",
  "I care about the details that make an app feel solid: memoization, lazy loading and code splitting, plus IndexedDB, Web Workers and Service Workers when data gets heavy or the connection drops. I'm comfortable in monorepo and micro-frontend setups, and with integrating AI agents into web apps.",
  "I also look after the launch side: VPS deployment, domain setup, hosting and on-page SEO.",
];

export const services = [
  {
    title: "Full-stack web development",
    text: "Responsive web apps with React and Next.js, connected to backend services, APIs and data stores.",
  },
  {
    title: "Dashboards & admin panels",
    text: "Role-based dashboards with JWT authentication, protected routes, data tables, filters, bulk actions and charts.",
  },
  {
    title: "Performance & offline",
    text: "Faster renders and lighter bundles, with Service Workers, IndexedDB and Web Workers for caching and heavy data.",
  },
  {
    title: "Backend, APIs & launch",
    text: "Supabase, REST APIs and JWT authentication, plus VPS deployment, domain setup, hosting and SEO.",
  },
];

export type Project = {
  kind: string;
  name: string;
  description: string;
  roles?: string[];
  extra?: string;
  stack: string;
  href: string;
  domain: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    kind: "FinTech platform",
    name: "YenoPay",
    description:
      "I developed the whole frontend of this FinTech platform, covering AEPS, BBPS, money transfer, payment gateway and white-label services, from the public website to the internal dashboards.",
    roles: ["Super Admin", "Distributor", "Retailer", "Employee"],
    extra:
      "Four role-based dashboards, interactive dashboard previews, an API playground and smooth animations, tuned for performance.",
    stack: "React.js · Vite · Tailwind CSS · GSAP · Framer Motion",
    href: "https://yenopay.com",
    domain: "yenopay.com",
    image: "/images/yenopay.jpg",
    alt: "YenoPay website home page",
  },
  {
    kind: "Business website · In progress",
    name: "Jeevan Amruttam Chai",
    description:
      "A responsive website for a chai brand, with a scalable frontend architecture and professional UI/UX, built on Next.js with Supabase for the database and backend functionality.",
    stack: "Next.js · React.js · Supabase · Tailwind CSS",
    href: "https://jeevanamrittam.com",
    domain: "jeevanamrittam.com",
    image: "/images/jeevan.jpg",
    alt: "Jeevan Amruttam Chai website home page",
  },
  {
    kind: "Brand website",
    name: "Apna Tea",
    description:
      "A professional website for a tea brand, focused on brand identity, product presentation and responsive layouts, built from reusable components for a smooth experience on desktop and mobile.",
    stack: "React.js · Vite · Tailwind CSS",
    href: "https://apnatea.com",
    domain: "apnatea.com",
    image: "/images/apnatea.jpg",
    alt: "Apna Tea website home page",
  },
];

export const skills = [
  {
    group: "Frontend",
    items:
      "HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js (App Router, SSR/SSG), Tailwind CSS",
  },
  {
    group: "State & data",
    items:
      "Redux Toolkit, Context API, TanStack Query, Zustand, React Router, Axios, React Hook Form, Zod",
  },
  {
    group: "Performance & browser",
    items:
      "React Compiler, code splitting, IndexedDB, Web Workers, Service Workers, BroadcastChannel",
  },
  {
    group: "Backend & APIs",
    items: "Node.js, Supabase, REST APIs, GraphQL, WebSockets, Webhooks, JWT authentication",
  },
  {
    group: "Deployment & architecture",
    items: "VPS deployment, domain setup, web hosting, SEO, monorepo architecture, micro-frontends",
  },
  {
    group: "Tools",
    items: "Git, GitHub, VS Code, Postman, Figma, Jira",
  },
];

export const experience = [
  {
    period: "2024 – Present",
    place: "Remote",
    title: "Freelance Full-Stack Developer",
    org: "Self-employed",
    text: "JWT authentication with auto-refresh and RBAC, admin dashboards with filtering, sorting, pagination and bulk actions, and offline support with Service Workers, IndexedDB and BroadcastChannel. Also domain setup, hosting and VPS deployment for client websites, with on-page SEO.",
  },
  {
    period: "Jan 2023 – Nov 2023",
    place: "Gurugram, India",
    title: "React.js Developer",
    org: "Antino Labs Pvt Ltd",
    text: "Built dashboard UIs with reusable components and protected routes in monolithic and micro-frontend architectures. Managed state with Redux Toolkit and optimized large lists and tables with memoization, lazy loading and windowing.",
  },
  {
    period: "Jul 2020 – Jun 2023",
    place: "Kolkata, India",
    title: "B.Tech, Computer Science & Engineering",
    org: "Brainware University, West Bengal",
  },
  {
    period: "Jun 2017 – Jun 2020",
    place: "Murshidabad, India",
    title: "Diploma, Computer Science & Technology",
    org: "Nibedita Institute of Technology",
  },
];
