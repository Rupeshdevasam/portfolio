export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [];

// Project visual placeholders (logo / spotlight / texture) reuse the existing
// template assets so the 3D demo screen, glow, and logo card still render.
// Swap these per-project once real screenshots/recordings are available.
export const myProjects = [
  {
    title: 'Federated Learning with CNN, Mobile Health Dataset',
    desc: 'Privacy-preserving federated learning framework that trains a CNN across virtual clients without centralizing raw patient data. Built end-to-end with preprocessing, evaluation, and Federated Averaging-based global aggregation.',
    subdesc:
      'Implemented in Python with PyTorch and PySyft. Each client trains locally on a partition of the Mobile Health dataset, and only model updates are shared with the aggregator.',
    href: 'https://github.com/Rupeshdevasam',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/react.svg' },
      { id: 2, name: 'PyTorch', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'PySyft', path: '/assets/typescript.png' },
      { id: 4, name: 'CNN', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Twitter Real-Time Tweet Streamer',
    desc: 'Real-time tweet streaming app built on the MERN stack with WebSockets. Captures live tweets by keyword or hashtag through the Twitter API v2 and pushes them to an interactive React dashboard at sub-second latency.',
    subdesc:
      'Node and Express handle the streaming connection and fan-out, while MongoDB stores recent tweets for replay. The React client subscribes over WebSockets and renders an updating feed.',
    href: 'https://github.com/Rupeshdevasam/twitter-realtime-tweet-streamer',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Node.js', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'MongoDB', path: '/assets/typescript.png' },
      { id: 4, name: 'WebSockets', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'RegenEx, Full-Stack Web Application',
    desc: 'Full-stack web application with a React frontend and a Node.js backend, deployed end-to-end on Vercel. Built and shipped as two coordinated services that share a common API contract.',
    subdesc:
      'Frontend is a React single-page app; the backend exposes a REST API in Node.js / Express. Both repositories are public on GitHub and run live on Vercel.',
    href: 'https://regen-ex.vercel.app',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Node.js', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'Express', path: '/assets/typescript.png' },
      { id: 4, name: 'Vercel', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'JSON Formatter',
    desc: 'Browser-based tool that auto-formats and minifies JSON as you type. Built as a zero-dependency client-side utility, deployed on Vercel.',
    subdesc:
      'Single-page React app. Parses input on every keystroke, pretty-prints with configurable indentation, and supports one-click minify and copy. No data leaves the browser.',
    href: 'https://json-formatter-kappa.vercel.app',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'JavaScript', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'Vite', path: '/assets/typescript.png' },
      { id: 4, name: 'Vercel', path: '/assets/framer.png' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 0,
    name: 'Centennial Technologies',
    pos: 'AI Full-Stack Engineer',
    duration: 'Feb 2026 – Present',
    title:
      'Architected an enterprise GenAI platform powering CHAAP (FDA regulatory automation) and BIS (Budget Intelligence Suite) on Azure AI Agents, Prompt Flow, and Azure OpenAI, processing 15,000+ documents per month with a 72% reduction in manual review time and sub-3s analysis latency. Built FastAPI and Flask services with async processing, Redis caching, and multi-tenant isolation across PostgreSQL, CosmosDB, and Redis, hitting 180ms p95 API latency for 2,500+ concurrent users. Orchestrated 120+ n8n automation workflows across upstream data sources, AI services, and downstream business systems, cutting manual ops by 65% and saving 40+ engineering hours per week. Led frontend modernization with React, Next.js, and TypeScript on Azure Web Apps via CI/CD, dropping page load times by 38% and deploys from 45 minutes to 8 with zero-downtime releases.',
    icon: '/assets/centennial-tech.png',
    animation: 'victory',
    technologies: [
      'Azure AI Agents',
      'Azure Prompt Flow',
      'Azure OpenAI',
      'FastAPI',
      'Flask',
      'React',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'CosmosDB',
      'Redis',
      'n8n',
    ],
    customClass: 'bg-white rounded-2xl p-2 w-full h-full',
  },
  {
    id: 1,
    name: 'CloudLeap Technologies',
    pos: 'Full-Stack Developer Intern',
    duration: 'Sep 2025 – Dec 2025',
    title:
      'Built immersive 3D web applications with React and Three.js, delivering browser-native interactive visualizations and gamified experiences that supported 8,000+ active users at 60 FPS on standard hardware. Developed Flask REST APIs and drove frontend performance work via lazy loading, memoization, and code splitting, reducing time-to-interactive by 42% and bundle size by 35%. Contributed to sprint planning, code reviews, and full-stack integration.',
    icon: '/assets/cloudleap.png',
    animation: 'clapping',
    technologies: ['React', 'Three.js', 'Flask', 'Python', 'REST APIs', 'JavaScript'],
  },
  {
    id: 2,
    name: 'Centennial Technologies',
    pos: 'Software Development Engineer Intern',
    duration: 'Jun 2025 – Aug 2025',
    title:
      'Spearheaded development of CHAAP, an FDA regulatory support application, from the ground up using React with TypeScript, Python Flask, and Azure AI Services. Partnered with PMs on system architecture and CI/CD, cutting release cycle time by 30%. Awarded "Sprint Champion" for consistently delivering high-impact features and driving smooth full-stack integration under tight deadlines.',
    icon: '/assets/centennial-tech.png',
    animation: 'victory',
    technologies: ['React (TypeScript)', 'Flask', 'Python', 'Azure AI', 'Azure Web Apps', 'Tailwind CSS', 'CosmosDB'],
    customClass: 'bg-white rounded-2xl p-2 w-full h-full',
  },
  {
    id: 3,
    name: 'SurveyMonkey',
    pos: 'Software Engineer II',
    duration: 'Mar 2024 – Jun 2024',
    title:
      'Developed full-stack features for high-traffic survey applications using React, FastAPI, and Python, supporting 100K+ monthly active users with improved performance and scalability. Built reusable React component libraries integrated with FastAPI backends, cutting development time by 30%. Optimized REST APIs through query optimization and caching, reducing response times by 25%.',
    icon: '/assets/SurveyMonkey.svg',
    animation: 'victory',
    technologies: ['React', 'FastAPI', 'Python', 'JavaScript', 'REST APIs', 'Figma'],
  },
  {
    id: 4,
    name: 'ValueLabs',
    pos: 'Full-Stack Developer',
    duration: 'Aug 2019 – Feb 2024',
    title:
      'Developed and maintained scalable enterprise web applications for Fortune 500 clients using React, Vue.js, Node.js, and Express. Integrated SQL and MongoDB with indexing and connection pooling, improving data processing speed by 25%. Designed and improved RESTful APIs in Node and Express, reducing response times by 30% through query optimization. Recognized with the Star Award for technical contributions and mentoring junior developers.',
    icon: '/assets/valuelabs.png',
    animation: 'salute',
    technologies: ['React', 'Vue.js', 'Node.js', 'Express', 'SQL', 'MongoDB', 'JavaScript', 'REST APIs'],
  },
];

export const skillGroups = [
  {
    id: 1,
    title: 'Languages',
    items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'Java', 'C++', 'C', 'SQL', 'Shell Scripting'],
  },
  {
    id: 2,
    title: 'Cloud',
    items: [
      'Azure (AI Agents, Prompt Flow, OpenAI, Web Apps, CosmosDB)',
      'AWS (Lambda, S3, EC2, RDS, DynamoDB)',
    ],
  },
  {
    id: 3,
    title: 'Frameworks & Libraries',
    items: [
      'FastAPI',
      'Flask',
      'Node.js',
      'Express.js',
      'React.js',
      'Next.js',
      'Vue.js',
      'Three.js',
      'Tailwind CSS',
      'GraphQL',
      'WebSockets',
    ],
  },
  {
    id: 4,
    title: 'Databases',
    items: ['PostgreSQL', 'CosmosDB', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB'],
  },
  {
    id: 5,
    title: 'DevOps',
    items: ['Docker', 'CI/CD', 'Git', 'GitHub Actions', 'Azure DevOps', 'RESTful API design', 'Microservices'],
  },
  {
    id: 6,
    title: 'AI / ML',
    items: [
      'Azure AI Agents',
      'Azure Prompt Flow',
      'Azure OpenAI',
      'Semantic Kernel',
      'LangChain',
      'MCP (Model Context Protocol)',
      'RAG',
      'Prompt Engineering',
      'LLM Fine-tuning',
      'n8n Workflows',
      'NLP',
      'Computer Vision',
      'PyTorch',
      'TensorFlow',
      'PySyft',
      'Federated Learning',
      'CNNs',
    ],
  },
  {
    id: 7,
    title: 'Tools',
    items: ['Postman', 'Figma', 'Jira', 'Confluence', 'Agile / Scrum', 'TDD', 'Code Reviews', 'System Design'],
  },
];

export const education = [
  {
    id: 1,
    degree: 'M.S. Computer Science',
    school: 'University of Maryland, Baltimore County (UMBC)',
    location: 'USA',
    duration: 'May 2026',
  },
  {
    id: 2,
    degree: 'B.S. Computer Science',
    school: 'JNTU Kakinada (AITAM)',
    location: 'India',
    duration: 'Sep 2020',
  },
];

export const socialMedia = [
  {
    id: 1,
    name: 'Github',
    src: '/assets/github.svg',
    href: 'https://github.com/Rupeshdevasam',
  },
  {
    id: 2,
    name: 'LinkedIn',
    src: '/assets/linkedin.png',
    href: 'https://www.linkedin.com/in/rupeshdevasam/',
  },
  {
    id: 3,
    name: 'Instagram',
    src: '/assets/instagram.svg',
    href: 'https://www.instagram.com/rupeshdevasam/',
  },
];
