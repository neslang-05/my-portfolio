// Site data - completely synchronized with Resume & GitHub Profile (@neslang-05)

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  isPrivate?: boolean;
  category: 'web' | 'iot' | 'ai' | 'data' | 'tools' | 'academic' | 'other';
  updatedAt?: string;
  stars?: number;
  language?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  gpa?: string;
  description?: string;
}

export interface Achievement {
  id: string;
  role: string;
  organization: string;
  period: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  published: boolean;
}

export interface GitHubStats {
  totalRepos: number;
  publicRepos: number;
  privateRepos: number;
  topLanguages: { name: string; count: number }[];
}

export interface SiteData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    summary?: string;
    website?: string;
    avatar?: string;
    resumeUrl?: string;
  };
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter?: string;
  };
  githubStats: GitHubStats;
  skills: Skill[];
  education: Education[];
  experience: Experience[];
  achievements: Achievement[];
  projects: Project[];
  blogPosts: BlogPost[];
}

export const defaultSiteData: SiteData = {
  personal: {
    name: 'NILAMBAR ELANGBAM',
    title: 'Aspiring DevOps Engineer & B.Tech CSE Graduate',
    email: 'neslang.in@gmail.com',
    phone: '+91 9366462995',
    location: 'Imphal, Manipur, India',
    website: 'https://nilambar.vercel.app',
    bio: `Aspiring DevOps Engineer and B.Tech CSE graduate with hands-on experience in CI/CD pipelines, Docker, Linux, Azure, and GitHub Actions. Experienced in containerizing applications, automating development workflows, deploying cloud applications and troubleshooting cloud, Linux, application and systems integration issues.

My engineering work spans end-to-end University Admission Platforms for Manipur Technical University (2,000+ candidates), AgriVerify Dockerized FastAPI microservices on Azure Container Apps, real-time ALPR systems on Raspberry Pi 4 with Google Cloud Vision API, and ESP32 telemetry systems.

I maintain a repository of over 118 projects spanning cloud infrastructure, IoT edge computing, and full-stack web platforms.`,
    summary: `Aspiring DevOps Engineer and B.Tech CSE graduate with hands-on experience in CI/CD pipelines, Docker, Linux, Azure, and GitHub Actions. Experienced in containerizing applications, automating development workflows, deploying cloud applications and troubleshooting cloud, Linux, application and systems integration issues.`,
    resumeUrl: '/resume.pdf',
  },
  social: {
    github: 'https://github.com/neslang-05',
    linkedin: 'https://www.linkedin.com/in/neslang',
    instagram: 'https://www.instagram.com/nilambar_e/',
  },
  githubStats: {
    totalRepos: 118,
    publicRepos: 73,
    privateRepos: 45,
    topLanguages: [
      { name: 'TypeScript', count: 34 },
      { name: 'JavaScript', count: 15 },
      { name: 'Python', count: 12 },
      { name: 'Jupyter Notebook', count: 10 },
      { name: 'TeX / LaTeX', count: 6 },
      { name: 'C / C++', count: 6 },
      { name: 'C#', count: 2 },
    ],
  },
  skills: [
    {
      category: 'DevOps & CI/CD',
      items: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD Pipelines', 'Docker', 'Linux', 'Fedora System Admin'],
    },
    {
      category: 'Cloud Platforms',
      items: ['Microsoft Azure', 'Azure Container Apps', 'Google Cloud Platform', 'Firebase', 'Cloudflare', 'Vercel'],
    },
    {
      category: 'Programming Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C++', 'C#', 'TeX'],
    },
    {
      category: 'Development & Data',
      items: ['Next.js', 'React', 'Node.js', 'FastAPI', 'REST APIs', 'PostgreSQL', 'Supabase', 'WebSockets', 'OpenCV'],
    },
    {
      category: 'Systems & Hardware',
      items: ['Raspberry Pi 4', 'ESP32', 'Google Cloud Vision API', 'LoRa', 'Agile', 'SDLC'],
    },
  ],
  education: [
    {
      id: '1',
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Manipur Technical University (MTU)',
      location: 'Imphal, Manipur',
      year: '2022 – 2026',
      gpa: '9.21 / 10',
      description: 'GPA: 9.21/10. Focus on DevOps, Cloud Infrastructure, IoT, and Software Engineering.',
    },
    {
      id: '2',
      degree: 'Class XII (Higher Secondary)',
      institution: 'Herbert School Changangei',
      location: 'Imphal, Manipur',
      year: '2020 – 2022',
    },
    {
      id: '3',
      degree: 'Class X (Secondary)',
      institution: 'Don Bosco High School',
      location: 'Imphal, Manipur',
      year: '2009 – 2020',
    },
  ],
  experience: [
    {
      id: '1',
      title: 'Full Stack Trainee Engineer',
      company: 'Manipur Technical University',
      location: 'Imphal, Manipur',
      startDate: 'Jan 2026',
      endDate: 'Jun 2026',
      description: [
        'Developed and deployed an end-to-end admission platform supporting B.Tech, M.Tech, M.Sc. and MBA application workflows using Next.js, Firebase, Cloudflare, Vercel and Google Cloud services.',
        'Automated applicant communication and document workflows through cloud-based email, SMS notifications and admit-card generation while supporting production deployment and troubleshooting.',
      ],
      technologies: ['Next.js', 'Firebase', 'Cloudflare', 'Vercel', 'Google Cloud', 'TypeScript'],
    },
    {
      id: '2',
      title: 'Data Science & Analytics Intern',
      company: 'Zidio Development',
      location: 'Remote',
      startDate: 'Jul 2025',
      endDate: 'Oct 2025',
      description: [
        'Developed automated Python data pipelines using SQL, Git-based code versioning and Cloudflare Workers to support repeatable data-processing workflows.',
      ],
      technologies: ['Python', 'SQL', 'Git', 'Cloudflare Workers', 'Data Pipelines'],
    },
    {
      id: '3',
      title: 'Data Science Intern',
      company: 'Edunet Foundation',
      location: 'Remote',
      startDate: 'Feb 2025',
      endDate: 'Mar 2025',
      description: [
        'Developed Python ETL pipelines for structured datasets, automating extraction, transformation, validation and repeatable analytical workflows.',
      ],
      technologies: ['Python', 'ETL Pipelines', 'SQL', 'Data Analytics'],
    },
    {
      id: '4',
      title: 'IoT Intern',
      company: 'CubeTen Technologies',
      location: 'Imphal, Manipur',
      startDate: 'Jul 2024',
      endDate: 'Aug 2024',
      description: [
        'Engineered a real-time ALPR system using Raspberry Pi 4, Linux, OpenCV and Google Cloud Vision API, with a Node.js backend for persistent vehicle logging and monitoring.',
        'Troubleshot Linux, hardware, networking, computer-vision and cloud API integration issues across an edge-to-cloud application environment.',
      ],
      technologies: ['Raspberry Pi 4', 'Linux', 'OpenCV', 'Google Cloud Vision API', 'Node.js', 'Python'],
    },
  ],
  achievements: [
    {
      id: '1',
      role: 'General Secretary',
      organization: 'Programming & Robotics Club, Manipur Technical University',
      period: '2025 – 2026',
      description: 'Led technical workshops, hackathons, and robotics initiatives across the university campus.',
    },
    {
      id: '2',
      role: 'Event Coordinator',
      organization: 'Fenomenon 2026 (University Technical and Cultural Festival)',
      period: '2026',
      description: 'Coordinated multi-department technical competitions, coding challenges, and festival logistics.',
    },
    {
      id: '3',
      role: '1st Position - Creative Robo Design Competition',
      organization: 'INNOTECH FEST 2025, Dept. of Science & Technology, Govt. of Manipur',
      period: '2025',
      description: 'Awarded first place for innovative robotics hardware design and autonomous control system.',
    },
  ],
  projects: [
    {
        "id": "1303785948",
        "slug": "btechmtuadm",
        "title": "MTU Admission Management Platform",
        "description": "Architected and deployed a digital management platform supporting 2,000+ candidates, with RBAC, automated PDF generation, payment integration and cloud deployment workflows.",
        "technologies": [
            "Next.js",
            "TypeScript",
            "Firebase",
            "Cloudflare",
            "Vercel",
            "PostgreSQL"
        ],
        "github": "https://github.com/neslang-05/btechmtuadm",
        "featured": true,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2026-07-29",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1228591653",
        "slug": "agriverify-v2",
        "title": "AgriVerify \u2013 Fake Seed Detection & Feedback Platform",
        "description": "Containerized a FastAPI inference service with Docker and deployed it on Azure Container Apps, integrating PostgreSQL, Supabase and Auth.js across the cloud application architecture.",
        "technologies": [
            "FastAPI",
            "Docker",
            "Azure Container Apps",
            "PostgreSQL",
            "Supabase",
            "Auth.js"
        ],
        "github": "https://github.com/neslang-05/agriverify-v2",
        "featured": true,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2026-07-28",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1298264392",
        "slug": "invoicing-sc",
        "title": "Invoicing SC",
        "description": "Smart invoicing and automated billing management application with real-time PDF generation and ledger tracking.",
        "technologies": [
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "PDFkit"
        ],
        "github": "https://github.com/neslang-05/invoicing-sc",
        "featured": true,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-07-13",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1090452378",
        "slug": "cattlehealth",
        "title": "Environmental & Device Monitoring System",
        "description": "Developed a real-time telemetry monitoring system using ESP32, WebSockets, React and troubleshot hardware/software integration issues to maintain stable environmental and device monitoring.",
        "technologies": [
            "ESP32",
            "WebSockets",
            "React",
            "Real-Time Telemetry",
            "C++"
        ],
        "github": "https://github.com/neslang-05/cattlehealth",
        "featured": true,
        "isPrivate": false,
        "category": "iot",
        "updatedAt": "2026-07-03",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "1258931568",
        "slug": "ai-based-trip-planner-with-application",
        "title": "AI Trip Planner & Itinerary Engine",
        "description": "Smart travel planner leveraging AI algorithms for personalized route optimization, budget allocation, and activity scheduling.",
        "technologies": [
            "Python",
            "AI Algorithms",
            "TeX",
            "Web Services"
        ],
        "github": "https://github.com/neslang-05/AI-Based-Trip-Planner-with-Application",
        "featured": true,
        "isPrivate": false,
        "category": "ai",
        "updatedAt": "2026-06-06",
        "stars": 0,
        "language": "TeX"
    },
    {
        "id": "1240477366",
        "slug": "ai-based-paddy-seed-quality-assessment-and-farmer-feedback-system",
        "title": "AI Paddy Seed Quality Assessment",
        "description": "Computer vision and machine learning model system for seed quality grading, disease detection, and instant farmer feedback.",
        "technologies": [
            "Python",
            "Computer Vision",
            "Machine Learning",
            "TeX"
        ],
        "github": "https://github.com/neslang-05/AI-Based-Paddy-Seed-Quality-Assessment-And-Farmer-Feedback-System",
        "featured": true,
        "isPrivate": true,
        "category": "ai",
        "updatedAt": "2026-06-01",
        "stars": 0,
        "language": "TeX"
    },
    {
        "id": "1237390014",
        "slug": "venture-ai",
        "title": "Venture AI",
        "description": "AI-powered pitch deck analyzer and startup market validation platform providing automated growth metrics.",
        "technologies": [
            "TypeScript",
            "Next.js",
            "OpenAI API",
            "Tailwind CSS"
        ],
        "github": "https://github.com/neslang-05/venture-ai",
        "featured": true,
        "isPrivate": false,
        "category": "ai",
        "updatedAt": "2026-05-13",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "961238461",
        "slug": "fenomenon2025",
        "title": "Fenomenon '25 Tech Fest Portal",
        "description": "Official web portal for FENOMENON '25 tech & cultural fest, handling event registrations, workshop schedules, and live competitions.",
        "technologies": [
            "JavaScript",
            "React",
            "Node.js",
            "CSS3"
        ],
        "github": "https://github.com/Rickyth36/fenomenon2025",
        "featured": true,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2026-04-20",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "1134755150",
        "slug": "ai-grievance-intelligence",
        "title": "AI Grievance Intelligence",
        "description": "Intelligent civic grievance classification, sentiment analysis, and priority routing system using natural language processing.",
        "technologies": [
            "TypeScript",
            "Next.js",
            "NLP",
            "AI Models"
        ],
        "github": "https://github.com/neslang-05/AI-Grievance-Intelligence",
        "featured": true,
        "isPrivate": false,
        "category": "ai",
        "updatedAt": "2026-01-16",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1106672752",
        "slug": "weather-station-distributed-lora",
        "title": "Distributed LoRa Weather Station",
        "description": "Long-range distributed weather monitoring station transmitting environmental metrics over LoRa to a central dashboard.",
        "technologies": [
            "JavaScript",
            "LoRa",
            "ESP32",
            "Node.js",
            "Sensors"
        ],
        "github": "https://github.com/neslang-05/Weather-Station-Distributed-LoRa",
        "featured": true,
        "isPrivate": false,
        "category": "iot",
        "updatedAt": "2025-12-20",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "941120692",
        "slug": "zenith",
        "title": "Zenith Result Management",
        "description": "Comprehensive academic result management and marksheet generation system for educational institutions.",
        "technologies": [
            "TypeScript",
            "Next.js",
            "React",
            "Prisma",
            "PostgreSQL"
        ],
        "github": "https://github.com/neslang-05/zenith",
        "featured": true,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2025-10-12",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "843993685",
        "slug": "alpr-using-goggle-cloud-vision-api-on-raspberry-pi-4-with-a-web-dashboard",
        "title": "ALPR System (Raspberry Pi 4)",
        "description": "Automatic License Plate Recognition system using Raspberry Pi 4, Google Cloud Vision API, and live web dashboard monitoring.",
        "technologies": [
            "Python",
            "Raspberry Pi",
            "Google Cloud Vision",
            "Flask",
            "OpenCV"
        ],
        "github": "https://github.com/neslang-05/ALPR-using-Goggle-Cloud-Vision-API-on-Raspberry-Pi-4-with-a-web-dashboard",
        "featured": true,
        "isPrivate": false,
        "category": "iot",
        "updatedAt": "2025-08-27",
        "stars": 2,
        "language": "Python"
    },
    {
        "id": "911620597",
        "slug": "skillswap",
        "title": "SkillSwap Peer Barter Platform",
        "description": "Peer-to-peer student skill barter platform facilitating knowledge exchange, messaging, and rating systems.",
        "technologies": [
            "TypeScript",
            "Next.js",
            "React",
            "MongoDB"
        ],
        "github": "https://github.com/neslang-05/skillswap",
        "featured": true,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2025-07-14",
        "stars": 1,
        "language": "TypeScript"
    },
    {
        "id": "1316537031",
        "slug": "email-workflow",
        "title": "Email Workflow Automation",
        "description": "Automated drip email campaign and workflow notification orchestrator built for high-throughput messaging.",
        "technologies": [
            "TypeScript",
            "Node.js",
            "Async Queues",
            "REST API"
        ],
        "github": "https://github.com/neslang-05/email-workflow",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-07-29",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1298428716",
        "slug": "cdnpersonal",
        "title": "Cdnpersonal",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/cdnpersonal",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2026-07-12",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1264172504",
        "slug": "mtupgadm",
        "title": "MTU PG Admission System",
        "description": "Integrated postgraduate admissions platform for engineering and management programs at Manipur Technical University.",
        "technologies": [
            "TypeScript",
            "Next.js",
            "React",
            "PostgreSQL"
        ],
        "github": "https://github.com/neslang-05/mtupgadm",
        "featured": false,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2026-07-04",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1284274515",
        "slug": "singjameicyberdb-sync-node",
        "title": "Singjamei Cyber DB Sync Node",
        "description": "Distributed database sync engine and network node manager for real-time cyber station status monitoring.",
        "technologies": [
            "TypeScript",
            "Node.js",
            "WebSockets",
            "Database Sync"
        ],
        "github": "https://github.com/neslang-05/SingjameiCyberDB_Sync_Node",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-06-29",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1259299519",
        "slug": "mtechmtuadm",
        "title": "MTU M.Tech Admission Portal",
        "description": "Postgraduate M.Tech application processing, candidate screening, and merit list system for MTU.",
        "technologies": [
            "TypeScript",
            "Next.js",
            "React",
            "Node.js"
        ],
        "github": "https://github.com/neslang-05/mtechmtuadm",
        "featured": false,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2026-06-17",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1271320352",
        "slug": "singjamei-cyber",
        "title": "Singjamei Cyber Portal",
        "description": "Web administration portal for network monitoring, terminal session tracking, and user activity logs.",
        "technologies": [
            "TypeScript",
            "React",
            "Node.js"
        ],
        "github": "https://github.com/neslang-05/singjamei-cyber",
        "featured": false,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2026-06-16",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1262116195",
        "slug": "school-websit",
        "title": "School Websit",
        "description": "Open-source JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/Khundrakpam-Churchil/school_websit",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2026-06-13",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "1262691750",
        "slug": "mbamtuadm",
        "title": "MTU MBA Admission Portal",
        "description": "Management school admission portal handling candidate applications, document verification, and seat allocation.",
        "technologies": [
            "TypeScript",
            "Next.js",
            "React",
            "Tailwind CSS"
        ],
        "github": "https://github.com/neslang-05/mbamtuadm",
        "featured": false,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2026-06-12",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1263605829",
        "slug": "website4321",
        "title": "Website4321",
        "description": "Open-source JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/Khundrakpam-Churchil/Website4321",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2026-06-09",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "1262751088",
        "slug": "churhill-school-project",
        "title": "Churhill School Project",
        "description": "Open-source JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/neslang-05/churhill-school-project",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2026-06-08",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "1261248405",
        "slug": "b-tech-cse-mtu-thesis-template-latex-overleaf-2026",
        "title": "MTU CSE Thesis LaTeX Template (2026)",
        "description": "Standardized B.Tech Computer Science thesis and report LaTeX template for Manipur Technical University students.",
        "technologies": [
            "TeX",
            "LaTeX",
            "Overleaf"
        ],
        "github": "https://github.com/neslang-05/B.Tech-CSE-MTU-Thesis-Template-Latex-Overleaf-2026-",
        "featured": false,
        "isPrivate": false,
        "category": "academic",
        "updatedAt": "2026-06-06",
        "stars": 0,
        "language": "TeX"
    },
    {
        "id": "1241181695",
        "slug": "documentation",
        "title": "Documentation",
        "description": "Private TeX repository created by @neslang-05.",
        "technologies": [
            "TeX"
        ],
        "github": "https://github.com/neslang-05/Documentation",
        "featured": false,
        "isPrivate": true,
        "category": "academic",
        "updatedAt": "2026-05-27",
        "stars": 0,
        "language": "TeX"
    },
    {
        "id": "1245962085",
        "slug": "manet-simulator",
        "title": "MANET Simulator",
        "description": "Mobile Ad-Hoc Network (MANET) protocol simulation tool for packet routing, node mobility, and network drop analysis.",
        "technologies": [
            "Python",
            "Networking",
            "NetworkX",
            "SimPy"
        ],
        "github": "https://github.com/neslang-05/manet-simulator",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2026-05-23",
        "stars": 1,
        "language": "Python"
    },
    {
        "id": "1185535531",
        "slug": "model-api-endpoint-synergy",
        "title": "Model Api Endpoint Synergy",
        "description": "Open-source Jupyter Notebook repository created by @neslang-05.",
        "technologies": [
            "Jupyter Notebook"
        ],
        "github": "https://github.com/neslang-05/model-api-endpoint-synergy",
        "featured": false,
        "isPrivate": false,
        "category": "academic",
        "updatedAt": "2026-05-14",
        "stars": 0,
        "language": "Jupyter Notebook"
    },
    {
        "id": "1159433451",
        "slug": "fakeseeddetection",
        "title": "Fakeseeddetection",
        "description": "Private C# repository created by @neslang-05.",
        "technologies": [
            "C#"
        ],
        "github": "https://github.com/neslang-05/FakeSeedDetection",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-05-14",
        "stars": 1,
        "language": "C#"
    },
    {
        "id": "1221533838",
        "slug": "mtu-admission-v2",
        "title": "Mtu Admission V2",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/mtu-admission-v2",
        "featured": false,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2026-05-12",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1231698698",
        "slug": "admission-portal-mtu",
        "title": "Admission Portal Mtu",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/admission-portal-mtu",
        "featured": false,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2026-05-09",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1229012189",
        "slug": "agriverify02",
        "title": "Agriverify02",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/agriverify02",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2026-05-05",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1228588482",
        "slug": "agriverify",
        "title": "AgriVerify",
        "description": "Enterprise agricultural verification and tracking system core database and workflow engine.",
        "technologies": [
            "TypeScript",
            "Node.js",
            "Database",
            "REST API"
        ],
        "github": "https://github.com/neslang-05/agriverify",
        "featured": false,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2026-05-04",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1224267933",
        "slug": "neslangpns",
        "title": "Neslangpns",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/neslangpns",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2026-04-29",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1213378390",
        "slug": "mtu-admission-portal",
        "title": "Mtu Admission Portal",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/mtu-admission-portal",
        "featured": false,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2026-04-24",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1213587787",
        "slug": "admission-portal",
        "title": "Admission Portal",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/Joymangolch/Admission-Portal",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2026-04-18",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1136401283",
        "slug": "cycle-rally-2026",
        "title": "Cycle Rally 2026",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/cycle-rally-2026",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-04-15",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1196374498",
        "slug": "synergy-api-endpoint",
        "title": "Synergy Api Endpoint",
        "description": "Open-source C# repository created by @neslang-05.",
        "technologies": [
            "C#"
        ],
        "github": "https://github.com/neslang-05/synergy-api-endpoint",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2026-03-30",
        "stars": 0,
        "language": "C#"
    },
    {
        "id": "1195262523",
        "slug": "resnet-model",
        "title": "Resnet Model",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/resnet-model",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2026-03-29",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1195063621",
        "slug": "vikas",
        "title": "Vikas",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/vikas",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2026-03-29",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1157966890",
        "slug": "portal",
        "title": "Portal",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/portal",
        "featured": false,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2026-03-28",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1181475767",
        "slug": "seedclassification",
        "title": "Seedclassification",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/SeedClassification",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2026-03-14",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1163237034",
        "slug": "fenomenon2026",
        "title": "Fenomenon2026",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/fenomenon2026",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-03-12",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1171551878",
        "slug": "docker-build",
        "title": "Docker Build",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/docker_build",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-03-03",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1170044442",
        "slug": "v3",
        "title": "V3",
        "description": "Private JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/neslang-05/v3",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-03-01",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "1130537680",
        "slug": "fake-seed-detection",
        "title": "Fake Seed Detection",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/fake-seed-detection",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-02-18",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1156452970",
        "slug": "attendize",
        "title": "Attendize",
        "description": "Attendize is an open-source ticket selling and event management platform built on Laravel.",
        "technologies": [
            "PHP"
        ],
        "github": "https://github.com/neslang-05/Attendize",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2026-02-17",
        "stars": 0,
        "language": "PHP"
    },
    {
        "id": "1156496712",
        "slug": "manage",
        "title": "Manage",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/manage",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2026-02-12",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1124619260",
        "slug": "document-archive",
        "title": "Document Archive System",
        "description": "Digital archive and search portal for institutional document indexing and categorized retrieval.",
        "technologies": [
            "TypeScript",
            "Next.js",
            "Tailwind CSS"
        ],
        "github": "https://github.com/neslang-05/Document-Archive",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2026-02-08",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1141110091",
        "slug": "smart-hotel-management-systems",
        "title": "Smart Hotel Management Systems",
        "description": "Multiple systems for smart hotel management",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/smart-hotel-management-systems",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-02-07",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1150711372",
        "slug": "maned-lab",
        "title": "Maned Lab",
        "description": "Open-source TeX repository created by @neslang-05.",
        "technologies": [
            "TeX"
        ],
        "github": "https://github.com/neslang-05/MANED-LAB",
        "featured": false,
        "isPrivate": false,
        "category": "academic",
        "updatedAt": "2026-02-06",
        "stars": 0,
        "language": "TeX"
    },
    {
        "id": "1149395583",
        "slug": "doc-scanner-web-based",
        "title": "Doc Scanner Web Based",
        "description": "Open-source Python repository created by @neslang-05.",
        "technologies": [
            "Python"
        ],
        "github": "https://github.com/neslang-05/doc-scanner-web-based",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2026-02-04",
        "stars": 0,
        "language": "Python"
    },
    {
        "id": "1146751504",
        "slug": "prcmtu",
        "title": "Prcmtu",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/prcmtu",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-01-31",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1033398426",
        "slug": "prc-hub",
        "title": "Prc Hub",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/prc-hub",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-01-30",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1137556958",
        "slug": "hi-events-v-3-4",
        "title": "Hi.Events V.3.4",
        "description": "Open-source event management and ticket selling platform \u2014 perfect for concerts, conferences, and everything in between \ud83c\udf9f\ufe0f  If you find this project helpful, please consider giving us a star \u2b50\ufe0f ",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/Hi.Events-v.3.4",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2026-01-19",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1130511736",
        "slug": "custom-pdf-compressor",
        "title": "Custom Pdf Compressor",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/custom-pdf-compressor",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2026-01-17",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1129583576",
        "slug": "nsui-manipur-frontend-portal",
        "title": "Nsui Manipur Frontend Portal",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/nsui-manipur-frontend-portal",
        "featured": false,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2026-01-07",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1128739354",
        "slug": "data-collection",
        "title": "Data Collection",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/Data-Collection",
        "featured": false,
        "isPrivate": false,
        "category": "data",
        "updatedAt": "2026-01-06",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "921546135",
        "slug": "my-portfolio",
        "title": "My Portfolio",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/my-portfolio",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2026-01-03",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1123628195",
        "slug": "plms",
        "title": "Plms",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/plms",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2025-12-27",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1120268119",
        "slug": "envapp",
        "title": "Envapp",
        "description": "Open-source JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/neslang-05/EnvApp",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2025-12-20",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "1052765917",
        "slug": "b-tech-7th-sem",
        "title": "B.Tech 7Th Sem",
        "description": "Private C repository created by @neslang-05.",
        "technologies": [
            "C"
        ],
        "github": "https://github.com/neslang-05/B.Tech-7th-Sem",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2025-12-19",
        "stars": 0,
        "language": "C"
    },
    {
        "id": "1117997350",
        "slug": "fenomenon2025-clone",
        "title": "Fenomenon2025 Clone",
        "description": "FENOMENON \u201925 is a tech and cultural festival that combines innovation, creativity, and competition. The event features workshops, exhibitions, live performances, and multi-discipline competitions, providing participants with opportunities to learn, showcase their skills, and engage with new technologies. Attendees can register to participate.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/fenomenon2025_clone",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2025-12-17",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1114946774",
        "slug": "homelab",
        "title": "Homelab",
        "description": "Open-source HTML repository created by @neslang-05.",
        "technologies": [
            "HTML"
        ],
        "github": "https://github.com/neslang-05/HomeLAB",
        "featured": false,
        "isPrivate": false,
        "category": "ai",
        "updatedAt": "2025-12-12",
        "stars": 0,
        "language": "HTML"
    },
    {
        "id": "1109675949",
        "slug": "latex-convertor",
        "title": "LaTeX Converter GUI",
        "description": "Desktop and web conversion utility transforming Word documents, Markdown, and text into formatted LaTeX.",
        "technologies": [
            "Python",
            "Streamlit",
            "LaTeX"
        ],
        "github": "https://github.com/neslang-05/LaTeX-Convertor-",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2025-12-04",
        "stars": 0,
        "language": "Python"
    },
    {
        "id": "1105148353",
        "slug": "weatherstationdashboard",
        "title": "Weatherstationdashboard",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/Weatherstationdashboard",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2025-11-27",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1098132944",
        "slug": "fixture-generate",
        "title": "Fixture Generate",
        "description": "nmm",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/Fixture_generate",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2025-11-17",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1098131798",
        "slug": "fixture-generator",
        "title": "Fixture Generator",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/Fixture-generator",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2025-11-17",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1056216484",
        "slug": "devaibot",
        "title": "Devaibot",
        "description": "Open-source CSS repository created by @neslang-05.",
        "technologies": [
            "CSS"
        ],
        "github": "https://github.com/Anupam1707/DevAIBot",
        "featured": false,
        "isPrivate": false,
        "category": "ai",
        "updatedAt": "2025-10-06",
        "stars": 0,
        "language": "CSS"
    },
    {
        "id": "1068628319",
        "slug": "intelligent-image-cropper-tool",
        "title": "Intelligent Image Cropper Tool",
        "description": "Private JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/neslang-05/intelligent_image_cropper_tool",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2025-10-02",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "1029079721",
        "slug": "official-club-docs",
        "title": "Official Club Docs",
        "description": "Private HTML repository created by @neslang-05.",
        "technologies": [
            "HTML"
        ],
        "github": "https://github.com/neslang-05/official_club_docs",
        "featured": false,
        "isPrivate": true,
        "category": "ai",
        "updatedAt": "2025-10-02",
        "stars": 0,
        "language": "HTML"
    },
    {
        "id": "1048937200",
        "slug": "financialfrauddetection",
        "title": "Financialfrauddetection",
        "description": "Open-source Jupyter Notebook repository created by @neslang-05.",
        "technologies": [
            "Jupyter Notebook"
        ],
        "github": "https://github.com/Anupam1707/FinancialFraudDetection",
        "featured": false,
        "isPrivate": false,
        "category": "data",
        "updatedAt": "2025-09-30",
        "stars": 0,
        "language": "Jupyter Notebook"
    },
    {
        "id": "1013587837",
        "slug": "data-analysis",
        "title": "Data Analysis",
        "description": "Time series of stock market",
        "technologies": [
            "Jupyter Notebook"
        ],
        "github": "https://github.com/Shabar-Shariff/Data-Analysis",
        "featured": false,
        "isPrivate": false,
        "category": "data",
        "updatedAt": "2025-09-30",
        "stars": 0,
        "language": "Jupyter Notebook"
    },
    {
        "id": "1050500350",
        "slug": "financialfrauddetection-t1",
        "title": "Financialfrauddetection T1",
        "description": "Private Jupyter Notebook repository created by @neslang-05.",
        "technologies": [
            "Jupyter Notebook"
        ],
        "github": "https://github.com/neslang-05/FinancialFraudDetection-t1",
        "featured": false,
        "isPrivate": true,
        "category": "data",
        "updatedAt": "2025-09-30",
        "stars": 0,
        "language": "Jupyter Notebook"
    },
    {
        "id": "1027827788",
        "slug": "stock-market-forcasting",
        "title": "Stock Market Forcasting",
        "description": "Time series of stock market",
        "technologies": [
            "Jupyter Notebook"
        ],
        "github": "https://github.com/neslang-05/Stock-Market-Forcasting",
        "featured": false,
        "isPrivate": true,
        "category": "data",
        "updatedAt": "2025-09-30",
        "stars": 0,
        "language": "Jupyter Notebook"
    },
    {
        "id": "1023677494",
        "slug": "timeseriesforecastinganalysis",
        "title": "Timeseriesforecastinganalysis",
        "description": "Time series of stock market",
        "technologies": [
            "Jupyter Notebook"
        ],
        "github": "https://github.com/neslang-05/TimeSeriesForecastingAnalysis",
        "featured": false,
        "isPrivate": true,
        "category": "data",
        "updatedAt": "2025-09-30",
        "stars": 0,
        "language": "Jupyter Notebook"
    },
    {
        "id": "1066201772",
        "slug": "dynamic-ai-chatbot",
        "title": "Dynamic Ai Chatbot",
        "description": "Open-source Python repository created by @neslang-05.",
        "technologies": [
            "Python"
        ],
        "github": "https://github.com/neslang-05/dynamic_ai_chatbot",
        "featured": false,
        "isPrivate": false,
        "category": "ai",
        "updatedAt": "2025-09-30",
        "stars": 0,
        "language": "Python"
    },
    {
        "id": "1063791856",
        "slug": "companion-robot",
        "title": "Companion Robot",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/companion-robot",
        "featured": false,
        "isPrivate": true,
        "category": "ai",
        "updatedAt": "2025-09-25",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1061185846",
        "slug": "ai-companion-robot",
        "title": "Ai Companion Robot",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/ai-companion-robot",
        "featured": false,
        "isPrivate": false,
        "category": "ai",
        "updatedAt": "2025-09-21",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1046060584",
        "slug": "real-time-fraud-monitoring",
        "title": "Real Time Fraud Monitoring ",
        "description": "Private Jupyter Notebook repository created by @neslang-05.",
        "technologies": [
            "Jupyter Notebook"
        ],
        "github": "https://github.com/neslang-05/Real-Time-Fraud-Monitoring-",
        "featured": false,
        "isPrivate": true,
        "category": "data",
        "updatedAt": "2025-09-04",
        "stars": 0,
        "language": "Jupyter Notebook"
    },
    {
        "id": "1046892961",
        "slug": "document-scanner",
        "title": "Document Scanner",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/document-scanner",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2025-08-29",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1041434372",
        "slug": "financial-fraud-detection",
        "title": "Financial Fraud Detection",
        "description": "Private Python repository created by @neslang-05.",
        "technologies": [
            "Python"
        ],
        "github": "https://github.com/neslang-05/financial-fraud-detection",
        "featured": false,
        "isPrivate": true,
        "category": "data",
        "updatedAt": "2025-08-27",
        "stars": 0,
        "language": "Python"
    },
    {
        "id": "838652516",
        "slug": "raspberry-pi-detect-license-plate",
        "title": "Raspberry Pi Detect License Plate",
        "description": "Open-source Python repository created by @neslang-05.",
        "technologies": [
            "Python"
        ],
        "github": "https://github.com/neslang-05/Raspberry-pi-detect-license-plate",
        "featured": false,
        "isPrivate": false,
        "category": "iot",
        "updatedAt": "2025-08-27",
        "stars": 1,
        "language": "Python"
    },
    {
        "id": "1040272757",
        "slug": "cdn2public",
        "title": "Cdn2Public",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/p-r-club/cdn2public",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2025-08-18",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "1019272053",
        "slug": "stock-market-forcasting-and-analysis",
        "title": "Stock Market Forecasting & Analysis",
        "description": "Time-series financial forecasting model evaluating equity trends using LSTM and regression models.",
        "technologies": [
            "Python",
            "Jupyter Notebook",
            "Pandas",
            "Matplotlib"
        ],
        "github": "https://github.com/neslang-05/Stock_Market_Forcasting_and_Analysis",
        "featured": false,
        "isPrivate": false,
        "category": "data",
        "updatedAt": "2025-07-28",
        "stars": 0,
        "language": "Jupyter Notebook"
    },
    {
        "id": "932626378",
        "slug": "6th-sem",
        "title": "6Th Sem",
        "description": "Private TeX repository created by @neslang-05.",
        "technologies": [
            "TeX"
        ],
        "github": "https://github.com/neslang-05/6th_sem",
        "featured": false,
        "isPrivate": true,
        "category": "academic",
        "updatedAt": "2025-07-03",
        "stars": 0,
        "language": "TeX"
    },
    {
        "id": "996874646",
        "slug": "test",
        "title": "Test",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/test",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2025-06-05",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "938135901",
        "slug": "aqi-prediction-aicte",
        "title": "AQI Prediction (AICTE Project)",
        "description": "Air Quality Index forecasting and environmental impact assessment using machine learning models.",
        "technologies": [
            "Python",
            "Jupyter Notebook",
            "Pandas",
            "scikit-learn"
        ],
        "github": "https://github.com/neslang-05/AQI_Prediction_AICTE",
        "featured": false,
        "isPrivate": false,
        "category": "data",
        "updatedAt": "2025-06-01",
        "stars": 0,
        "language": "Jupyter Notebook"
    },
    {
        "id": "991504383",
        "slug": "llhanba-hand",
        "title": "Llhanba Hand",
        "description": "Open-source Python repository created by @neslang-05.",
        "technologies": [
            "Python"
        ],
        "github": "https://github.com/neslang-05/llhanba_hand",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2025-05-27",
        "stars": 0,
        "language": "Python"
    },
    {
        "id": "954804032",
        "slug": "data-science-aqi-prediction-cs3639",
        "title": "Data Science Aqi Prediction Cs3639",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/data-science_AQI_Prediction_CS3639",
        "featured": false,
        "isPrivate": false,
        "category": "data",
        "updatedAt": "2025-03-25",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "937583498",
        "slug": "sgpacalc",
        "title": "Sgpacalc",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/sgpaCalc",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2025-02-23",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "933234529",
        "slug": "image-bg-remove-gui-py",
        "title": "Image Bg Remove Gui.Py",
        "description": "Open-source Python repository created by @neslang-05.",
        "technologies": [
            "Python"
        ],
        "github": "https://github.com/neslang-05/image-bg-remove-gui.py",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2025-02-15",
        "stars": 0,
        "language": "Python"
    },
    {
        "id": "930944164",
        "slug": "auto-crop-gui",
        "title": "Auto Crop Gui",
        "description": "Open-source Python repository created by @neslang-05.",
        "technologies": [
            "Python"
        ],
        "github": "https://github.com/neslang-05/auto-crop-gui",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2025-02-11",
        "stars": 0,
        "language": "Python"
    },
    {
        "id": "929274612",
        "slug": "artifact",
        "title": "Artifact",
        "description": "Open-source JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/neslang-05/artifact",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2025-02-08",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "921994521",
        "slug": "gate-notes",
        "title": "Gate Notes",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/gate-notes",
        "featured": false,
        "isPrivate": false,
        "category": "academic",
        "updatedAt": "2025-01-25",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "901210193",
        "slug": "skillswaptestv1",
        "title": "Skillswaptestv1",
        "description": "Private TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/SkillSwapTestV1",
        "featured": false,
        "isPrivate": true,
        "category": "web",
        "updatedAt": "2025-01-22",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "884271146",
        "slug": "dbms-lab",
        "title": "Dbms Lab",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/DBMS_LAB",
        "featured": false,
        "isPrivate": false,
        "category": "academic",
        "updatedAt": "2024-12-17",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "866327133",
        "slug": "cloudkeepers",
        "title": "Cloudkeepers",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/CloudKeepers",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2024-11-05",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "882237390",
        "slug": "tic-tac-toe-game-clt",
        "title": "Tic Tac Toe Game  Clt",
        "description": "Open-source C repository created by @neslang-05.",
        "technologies": [
            "C"
        ],
        "github": "https://github.com/neslang-05/Tic-Tac-Toe-Game-_CLT",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2024-11-02",
        "stars": 0,
        "language": "C"
    },
    {
        "id": "858523542",
        "slug": "base-station-dashboard",
        "title": "Base Station Dashboard",
        "description": "Open-source JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/Joymangolch/Base_Station_Dashboard",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2024-09-17",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "850154740",
        "slug": "ecom-website",
        "title": "Ecom Website",
        "description": "Open-source JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/neslang-05/ecom-website",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2024-08-31",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "849347911",
        "slug": "ultrasonic",
        "title": "Ultrasonic",
        "description": "Open-source C++ repository created by @neslang-05.",
        "technologies": [
            "C++"
        ],
        "github": "https://github.com/neslang-05/ultrasonic",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2024-08-29",
        "stars": 0,
        "language": "C++"
    },
    {
        "id": "848083861",
        "slug": "sgpa-calc",
        "title": "Sgpa Calc",
        "description": "Open-source HTML repository created by @neslang-05.",
        "technologies": [
            "HTML"
        ],
        "github": "https://github.com/neslang-05/SGPA-calc",
        "featured": false,
        "isPrivate": false,
        "category": "ai",
        "updatedAt": "2024-08-27",
        "stars": 0,
        "language": "HTML"
    },
    {
        "id": "846116059",
        "slug": "mediapipe-applications",
        "title": "Mediapipe Applications",
        "description": "Open-source Python repository created by @neslang-05.",
        "technologies": [
            "Python"
        ],
        "github": "https://github.com/neslang-05/MediaPipe-Applications",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2024-08-23",
        "stars": 0,
        "language": "Python"
    },
    {
        "id": "839740756",
        "slug": "num-plate-ocr-frontend",
        "title": "Num Plate Ocr Frontend",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/Num-plate-ocr-frontend",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2024-08-08",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "838335864",
        "slug": "licence-plate-detection-using-yolo-v8-raspberry-pi",
        "title": "Licence Plate Detection Using Yolo V8 Raspberry Pi",
        "description": "This repository provides a comprehensive toolkit for training a License Plate Detection model using YOLOv8",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/Licence-Plate-Detection-using-YOLO-V8-Raspberry-Pi",
        "featured": false,
        "isPrivate": false,
        "category": "iot",
        "updatedAt": "2024-08-05",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "837009415",
        "slug": "py-num-plate-detection",
        "title": "Py Num Plate Detection",
        "description": "Open-source Jupyter Notebook repository created by @neslang-05.",
        "technologies": [
            "Jupyter Notebook"
        ],
        "github": "https://github.com/neslang-05/py-num-plate-detection",
        "featured": false,
        "isPrivate": false,
        "category": "academic",
        "updatedAt": "2024-08-05",
        "stars": 0,
        "language": "Jupyter Notebook"
    },
    {
        "id": "831944790",
        "slug": "myportfolio",
        "title": "Myportfolio",
        "description": "Open-source CSS repository created by @neslang-05.",
        "technologies": [
            "CSS"
        ],
        "github": "https://github.com/neslang-05/myPortfolio",
        "featured": false,
        "isPrivate": false,
        "category": "web",
        "updatedAt": "2024-08-04",
        "stars": 0,
        "language": "CSS"
    },
    {
        "id": "837973457",
        "slug": "js-practice",
        "title": "Js Practice",
        "description": "Open-source JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/neslang-05/js_practice",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2024-08-04",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "837971266",
        "slug": "mtu-web-store",
        "title": "Mtu Web Store",
        "description": "Open-source HTML repository created by @neslang-05.",
        "technologies": [
            "HTML"
        ],
        "github": "https://github.com/neslang-05/mtu-web-store",
        "featured": false,
        "isPrivate": false,
        "category": "ai",
        "updatedAt": "2024-08-04",
        "stars": 0,
        "language": "HTML"
    },
    {
        "id": "837315070",
        "slug": "scrcpy-nilang",
        "title": "Scrcpy Nilang",
        "description": "Display and control your Android device",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/scrcpy-nilang",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2024-08-02",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "837143158",
        "slug": "pynum",
        "title": "Pynum",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/pyNum",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2024-08-02",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "836139028",
        "slug": "object-model",
        "title": "Object Model",
        "description": "Open-source Python repository created by @neslang-05.",
        "technologies": [
            "Python"
        ],
        "github": "https://github.com/neslang-05/object_model",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2024-07-31",
        "stars": 0,
        "language": "Python"
    },
    {
        "id": "835181962",
        "slug": "iot",
        "title": "Iot",
        "description": "Open-source TypeScript repository created by @neslang-05.",
        "technologies": [
            "TypeScript"
        ],
        "github": "https://github.com/neslang-05/IoT",
        "featured": false,
        "isPrivate": false,
        "category": "iot",
        "updatedAt": "2024-07-29",
        "stars": 0,
        "language": "TypeScript"
    },
    {
        "id": "834346763",
        "slug": "code-space",
        "title": "Code Space",
        "description": "Private C++ repository created by @neslang-05.",
        "technologies": [
            "C++"
        ],
        "github": "https://github.com/neslang-05/code_space",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2024-07-27",
        "stars": 0,
        "language": "C++"
    },
    {
        "id": "831933302",
        "slug": "dev-space",
        "title": "Dev Space",
        "description": "Private C repository created by @neslang-05.",
        "technologies": [
            "C"
        ],
        "github": "https://github.com/neslang-05/dev-space",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2024-07-27",
        "stars": 0,
        "language": "C"
    },
    {
        "id": "832180264",
        "slug": "student-management",
        "title": "Student Management",
        "description": "Open-source C++ repository created by @neslang-05.",
        "technologies": [
            "C++"
        ],
        "github": "https://github.com/neslang-05/student_Management",
        "featured": false,
        "isPrivate": false,
        "category": "tools",
        "updatedAt": "2024-07-22",
        "stars": 0,
        "language": "C++"
    },
    {
        "id": "831948168",
        "slug": "familytreeproject",
        "title": "Familytreeproject",
        "description": "Private JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/neslang-05/familyTreeProject",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2024-07-22",
        "stars": 0,
        "language": "JavaScript"
    },
    {
        "id": "831944020",
        "slug": "codespace",
        "title": "Codespace",
        "description": "Private JavaScript repository created by @neslang-05.",
        "technologies": [
            "JavaScript"
        ],
        "github": "https://github.com/neslang-05/codeSpace",
        "featured": false,
        "isPrivate": true,
        "category": "tools",
        "updatedAt": "2024-07-22",
        "stars": 0,
        "language": "JavaScript"
    }
],
  blogPosts: [],
};

export function getSiteData(): SiteData {
  return defaultSiteData;
}
