import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  movies,
  ecomm,
  carsgame,
  threejs,
  magicedtech,
  costa,
  selectsource,
  flow,
  jobit,
  tripguide,
  ats,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Engineer (React)",
    icon: web,
  },
  {
    title: "Mobile Engineer (React Native)",
    icon: mobile,
  },
  {
    title: "Backend Engineer (Node.js)",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
   {
      title: "Senior Full Stack Engineer (MERN)",
      company_name: "MagicEdtech, Noida",
      icon: magicedtech,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Present",
      points: [
        "Spearheaded a team of 5 engineers building DataHub, an education analytics SaaS, defining MERN architecture and coding standards adopted across the organization.",
        "Designed and implemented DataHub frontend in React/Redux with Node.js/Express APIs, handling millions of records and driving 20+ dashboards for educators.",
        "Integrated LLM models via REST APIs to power a student retention predictor; results enabled proactive outreach and improved retention by 12%.",
        "Developed CheckRide Pro booking platform with role‑based access, reducing pilot certification approval time by 60% using React and MongoDB backends.",
        "Built CI/CD pipelines with GitHub Actions and Docker, slashing deployment time by 40% and eliminating manual release steps.",
        "Guaranteed 90+ Lighthouse scores through bundle optimization, code splitting, and lazy loading; ensured Core Web Vitals compliance site‑wide.",
        "Achieved 80%+ test coverage with Jest and React Testing Library; regression bugs dropped by 70% and release confidence increased.",
        "Integrated Databricks data streams into React dashboards via Express endpoints, enabling real‑time analytics for stakeholders.",
        "Delivered a high‑performance React/Next.js frontend for Al‑Jabr Laundry, boosting engagement 45% and lowering bounce rate 10%.",
      ],
    },
  {
    title: "Full Stack Developer (MERN)",
    company_name: "Costacloud (Okhla NSIC, New Delhi)",
    icon: costa,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jan 2025",
    points: [
      "Led MERN‑stack development for TeamSync, a collaboration platform with real‑time chat, WebSocket‑powered notifications, and modular file management.",
      "Implemented a paperless approval workflow using React, Node.js and MongoDB; cut approval cycle by 50% and eliminated manual processes across 4 departments.",
      "Built a Google Drive‑style data management UI with React, Redux and Express, supporting 100+ users and removing all previous paperwork.",
      "Created responsive RTI application with cross‑browser support, boosting engagement by 25% and lowering bounce rate by 15%.",
      "Set up Docker‑based development environments and standardized Git/GitHub workflows, reducing new‑hire setup time to under a day.",
      "Integrated Stripe and PayPal in a Node.js backend to handle payments, increasing transaction success by 60%.",
      "Authored scalable ETL pipeline consuming 50k+ records/day with Node.js services and MongoDB storage; maintained 99% accuracy.",
      "Maintained 100+ Jira tickets with zero critical production bugs, ensuring stable releases and rapid bug turnaround.",
    ],
   
  },
];

// --- resume-specific data; fill these values using your latest resume ---

// resume URL should point to a file placed in the public/ folder

export const summary =
  "Full Stack MERN Engineer with 4+ years of experience designing, building, and scaling production web applications. Strong track record delivering B2B SaaS, data‑heavy dashboards, and AI‑powered features using React, Node.js, TypeScript, and MongoDB. Experienced in leading small teams, establishing engineering best practices, and driving performance, reliability, and maintainability through testing, observability, and modern DevOps.";

export const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Guru Gobind Singh Indraprastha University, New Delhi",
    year: "2018 – 2022",
    details:
      "Graduated 2022; coursework included software engineering, data structures, and web development.",
  },
];

export const achievements = [
  "Young Frontend Developer of the Month (Jun–Aug 2022): Recognized for outstanding React.js and Material-UI design skills within 3 months of joining Costacloud.",
  "Launched ATS Resume Optimizer and AI Interview Coach — a production AI tool integrating Groq/Llama 3.1, helping job seekers boost ATS match rates from 30% to 80%+.",
];

const projects = [
  {
    name: "ATS Resume Optimizer & AI Interview Coach",
    description:
      "AI-powered resume and interview platform built with React, Vite, Tailwind CSS, and Groq API (Llama 3.1). Provides ATS scoring, keyword gap analysis, multi-format parsing, adaptive interview questions with real-time feedback, and DOCX export, helping users increase ATS match rates from ~30% to 80%+.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
      { name: "vite", color: "green-text-gradient" },
    ],
    image: ats,
    source_code_link: "https://github.com/rishabhkumar1211/Ai-resume",
  },
  {
    name: "Moviesverse",
    description:
      "React and Redux Toolkit SPA consuming the TMDB API (500K+ titles) for real-time movie and TV search. Uses RTK Query for normalized caching, pagination, and request deduplication, consistently achieving sub‑second search and details views.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "redux", color: "pink-text-gradient" },
      { name: "rtk-query", color: "green-text-gradient" },
    ],
    image: movies,
    source_code_link: "https://github.com/rishabhkumar1211/MOVIESVERSE",
  },
  {
    name: "FlowBoard (Jira Clone)",
    description:
      "Kanban-style project management tool with task tracking, bug management, sprint planning, and drag-and-drop boards. Built with React and Redux, enabling teams to centralize work, reduce status‑meeting overhead, and keep real‑time visibility into progress.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "drag-drop", color: "pink-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
    ],
    image: flow,
    source_code_link: "https://github.com/rishabhkumar1211/jira-clone",
  },
];

export { services, technologies, experiences, projects };
