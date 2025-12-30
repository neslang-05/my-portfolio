// Site data - all content for the portfolio
// This can be updated via admin dashboard

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
  category: 'web' | 'iot' | 'ai' | 'data' | 'tools' | 'other';
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
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SiteData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    avatar?: string;
    resumeUrl?: string;
  };
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter?: string;
  };
  skills: Skill[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
}

// Default site data based on resume
export const defaultSiteData: SiteData = {
  personal: {
    name: 'Nilambar Elangbam',
    title: 'Computer Science Engineering Student',
    email: 'neslang.in@gmail.com',
    phone: '+91 9366462995',
    location: 'Imphal, Manipur, India',
    bio: `I'm a developer passionate about creating impactful solutions that seamlessly integrate robust engineering with thoughtful design. My expertise lies at the intersection of IoT, cloud computing, and web development, where I enjoy turning innovative ideas into practical applications.

Currently, I'm a third-year Computer Science and Engineering student at Manipur Technical University, focusing on building IoT-powered systems and web platforms. I've worked on projects like automatic license plate recognition using Raspberry Pi and Google Cloud, and I'm currently developing a skill barter platform for students.

In the past, I've delved into architecture design using SketchUp, explored automation, and worked on research projects involving database optimization and statistical analysis. My curiosity has led me to blend creative pursuits like drawing and exploring maps with my technical expertise.

When I'm not coding, you'll find me sketching, walking long trails, or planning new adventures—like my upcoming solo trip across Southeast Asia. I'm eager to learn, grow, and build solutions that make a difference.`,
  },
  social: {
    github: 'https://github.com/neslang-05',
    linkedin: 'https://www.linkedin.com/in/nilambar-elangbam-524617247/',
    instagram: 'https://www.instagram.com/nilambar_e/',
  },
  skills: [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C', 'SQL'],
    },
    {
      category: 'Web Development',
      items: ['React', 'Next.js', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      category: 'IoT & Hardware',
      items: ['Raspberry Pi', 'Arduino', 'ESP32', 'LoRa', 'Sensors'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['Google Cloud', 'Firebase', 'Vercel', 'Git', 'Docker'],
    },
    {
      category: 'Data & AI',
      items: ['Machine Learning', 'Data Analysis', 'Jupyter', 'Pandas'],
    },
    {
      category: 'Tools & Design',
      items: ['VS Code', 'SketchUp', 'Figma', 'LaTeX'],
    },
  ],
  education: [
    {
      id: '1',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Manipur Technical University',
      location: 'Imphal, Manipur',
      year: 'Expected May 2026',
      description: 'Focus on IoT, Cloud Computing, and Web Development',
    },
    {
      id: '2',
      degree: '12th Standard (Higher Secondary)',
      institution: 'Herbert School',
      location: 'Changangei, Manipur',
      year: '2022',
    },
    {
      id: '3',
      degree: '10th Standard (Secondary)',
      institution: 'Don Bosco School',
      location: 'Imphal, Manipur',
      year: '2020',
    },
  ],
  experience: [
    {
      id: '1',
      title: 'IoT Developer Intern',
      company: 'Research Project',
      location: 'Manipur Technical University',
      startDate: 'Jun 2024',
      endDate: 'Present',
      description: [
        'Developed an Automatic License Plate Recognition (ALPR) system using Raspberry Pi and Google Cloud Vision API',
        'Built a web dashboard for real-time license plate monitoring and data management',
        'Implemented cloud-based image processing pipeline for vehicle identification',
      ],
      technologies: ['Python', 'Raspberry Pi', 'Google Cloud', 'Flask'],
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      location: 'Remote',
      startDate: 'Jan 2024',
      endDate: 'Present',
      description: [
        'Built Skill Barter platform connecting students for skill exchange',
        'Developed Zenith - a web-based result management system for educational institutions',
        'Created various web applications using React, Next.js, and TypeScript',
      ],
      technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'MongoDB'],
    },
  ],
  projects: [
    {
      id: '1',
      title: 'ALPR System',
      description: 'Automatic License Plate Recognition using Raspberry Pi 4 with Google Cloud Vision API integration and a web dashboard for monitoring.',
      technologies: ['Python', 'Raspberry Pi', 'Google Cloud', 'Flask', 'OpenCV'],
      github: 'https://github.com/neslang-05/ALPR-using-Goggle-Cloud-Vision-API-on-Raspberry-Pi-4-with-a-web-dashboard',
      featured: true,
      category: 'iot',
    },
    {
      id: '2',
      title: 'Zenith',
      description: 'A comprehensive web-based result management system for educational institutions with student and admin dashboards.',
      technologies: ['TypeScript', 'Next.js', 'React', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/neslang-05/zenith',
      featured: true,
      category: 'web',
    },
    {
      id: '3',
      title: 'SkillSwap',
      description: 'A peer-to-peer skill barter platform connecting students to exchange knowledge and learn from each other.',
      technologies: ['TypeScript', 'Next.js', 'React', 'MongoDB'],
      github: 'https://github.com/neslang-05/skillswap',
      featured: true,
      category: 'web',
    },
    {
      id: '4',
      title: 'Weather Station (LoRa)',
      description: 'Distributed weather monitoring system using LoRa wireless technology for long-range data transmission.',
      technologies: ['JavaScript', 'LoRa', 'ESP32', 'Node.js'],
      github: 'https://github.com/neslang-05/Weather-Station-Distributed-LoRa',
      featured: true,
      category: 'iot',
    },
    {
      id: '5',
      title: 'EnvApp',
      description: 'Environmental monitoring application for tracking and analyzing environmental data.',
      technologies: ['JavaScript', 'React', 'Node.js'],
      github: 'https://github.com/neslang-05/EnvApp',
      featured: false,
      category: 'web',
    },
    {
      id: '6',
      title: 'CattleHealth',
      description: 'IoT-based cattle health monitoring system using sensors for early disease detection.',
      technologies: ['C++', 'Arduino', 'Sensors'],
      github: 'https://github.com/neslang-05/cattlehealth',
      featured: true,
      category: 'iot',
    },
    {
      id: '7',
      title: 'LaTeX Converter',
      description: 'Python tool that converts various document formats (DOCX, PDF, Markdown) into LaTeX format with a Streamlit web interface.',
      technologies: ['Python', 'Streamlit', 'LaTeX'],
      github: 'https://github.com/neslang-05/LaTeX-Convertor-',
      featured: false,
      category: 'tools',
    },
    {
      id: '8',
      title: 'Dynamic AI Chatbot',
      description: 'An intelligent chatbot built with Python capable of dynamic conversations.',
      technologies: ['Python', 'NLP', 'Machine Learning'],
      github: 'https://github.com/neslang-05/dynamic_ai_chatbot',
      featured: false,
      category: 'ai',
    },
    {
      id: '9',
      title: 'Stock Market Forecasting',
      description: 'Stock market prediction and analysis using machine learning techniques.',
      technologies: ['Python', 'Jupyter', 'Pandas', 'scikit-learn'],
      github: 'https://github.com/neslang-05/Stock_Market_Forcasting_and_Analysis',
      featured: false,
      category: 'data',
    },
    {
      id: '10',
      title: 'AQI Prediction',
      description: 'Air Quality Index prediction using data science and machine learning models.',
      technologies: ['Python', 'Jupyter', 'Data Science'],
      github: 'https://github.com/neslang-05/AQI_Prediction_AICTE',
      featured: false,
      category: 'data',
    },
    {
      id: '11',
      title: 'Document Archive',
      description: 'Document management and archival system for organizing digital documents.',
      technologies: ['TypeScript', 'Next.js'],
      github: 'https://github.com/neslang-05/Document-Archive',
      featured: false,
      category: 'web',
    },
    {
      id: '12',
      title: 'PLMS',
      description: 'Project and Learning Management System for educational purposes.',
      technologies: ['TypeScript', 'Next.js'],
      github: 'https://github.com/neslang-05/plms',
      featured: false,
      category: 'web',
    },
    {
      id: '13',
      title: 'HomeLAB',
      description: 'Home laboratory setup documentation and automation scripts.',
      technologies: ['HTML', 'Docker', 'Linux'],
      github: 'https://github.com/neslang-05/HomeLAB',
      featured: false,
      category: 'tools',
    },
    {
      id: '14',
      title: 'SGPA Calculator',
      description: 'A utility tool for calculating Semester Grade Point Average.',
      technologies: ['TypeScript', 'React'],
      github: 'https://github.com/neslang-05/sgpaCalc',
      featured: false,
      category: 'tools',
    },
    {
      id: '15',
      title: 'Image Background Remover',
      description: 'Python GUI application for removing backgrounds from images.',
      technologies: ['Python', 'OpenCV', 'Tkinter'],
      github: 'https://github.com/neslang-05/image-bg-remove-gui.py',
      featured: false,
      category: 'tools',
    },
  ],
};

export function getSiteData(): SiteData {
  // In a real app, this would fetch from Firestore
  // For now, return default data
  return defaultSiteData;
}
