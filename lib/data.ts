export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  category: 'client' | 'personal';
  featured: boolean;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'tools' | 'other';
  level: number; // 1-5 skill level
}

export const projects: Project[] = [
  {
    id: 'norncoinai',
    title: 'NornCoin AI',
    description: 'A meme coin website with dashboard functionality, featuring real-time data visualization and interactive elements.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://www.norncoinai.com/',
    category: 'client',
    featured: true,
  },
  {
    id: 'octopusdigitals',
    title: 'Octopus Digitals',
    description: 'A digital agency website showcasing services, portfolio, and company information with a modern, responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://www.octopusdigitals.net/',
    category: 'client',
    featured: true,
  },
  {
    id: 'pong-game',
    title: 'Transcendence – PONG GAME',
    description: 'Developed the backend of a real-time multiplayer game platform using Django and Python. Implemented user authentication (OAuth2) and integrated secure session management. Designed and managed a PostgreSQL database using Django ORM for persistent user and game data.',
    technologies: ['Django', 'Python', 'OAuth2', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'personal',
    featured: true,
  },
  {
    id: 'inception',
    title: 'Inception',
    description: 'Built a full LEMP stack environment (Linux, NGINX, MariaDB, PHP) using Docker and Docker Compose. Automated the deployment of multiple containers including WordPress, phpMyAdmin, and a custom NGINX web server. Ensured services run in isolated environments using volume and network management features of Docker.',
    technologies: ['Docker', 'Docker Compose', 'NGINX', 'MariaDB', 'PHP', 'WordPress'],
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'personal',
    featured: true,
  },
  {
    id: 'web-server',
    title: 'Web Server',
    description: 'Built a simple web server using C/C++. Handled multiple client requests simultaneously using networking and I/O techniques.',
    technologies: ['C/C++', 'Networking', 'I/O'],
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'personal',
    featured: true,
  }
];

export const experiences: Experience[] = [
  {
    title: 'Back End Intern',
    company: 'GoQuant',
    duration: '02/2025 - 04/2025',
    location: 'Remote - usa',
    description: [
      'Optimized back-end systems for faster order execution, real-time market data integration, and reliable trading strategy support.',
      'Documented back-end architecture to ensure scalability, maintainability, and smooth team collaboration.',
      'Developed high-performance trading algorithms in C++ and validated system interactions with FastAPI integration tests.'
    ]
  }
];

export const education: Education[] = [
  {
    degree: 'Computer Science',
    institution: '1337 Coding School',
    duration: '2022 - 2024',
    location: 'Tetouan, Morocco'
  },
  {
    degree: "Bachelor's degree - human resources management",
    institution: 'Fsjes el jadida',
    duration: '10/2018 - 07/2019',
    location: 'El Jadida, Morocco'
  },
  {
    degree: "Technical associate's degree",
    institution: 'Superior School of Technology',
    duration: '07/2016 - 07/2018',
    location: 'Meknes, Morocco'
  }
];

export const skills: Skill[] = [
  { name: 'C/C++', category: 'backend', level: 4 },
  { name: 'Django', category: 'backend', level: 4 },
  { name: 'FastAPI', category: 'backend', level: 4 },
  { name: 'CSS', category: 'frontend', level: 4 },
  { name: 'GSAP', category: 'frontend', level: 4 },
  { name: 'Next.js', category: 'frontend', level: 4 },
  { name: 'Tailwind', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 4 },
  { name: 'GitHub', category: 'tools', level: 5 },
  { name: 'JavaScript', category: 'frontend', level: 5 }
];

export const aboutMe = {
  name: 'SALAH EDDINE BELLAFROUH',
  title: 'Full Stack Developer',
  email: 'sbellafrouh@gmail.com',
  phone: '+212648299213',
  location: 'El Hajeb',
  summary: 'Passionate full stack developer with expertise in Next.js, C++, and FastAPI, focused on building high-performance, scalable applications. Combines strong technical skills with a user-centered approach and a collaborative mindset to deliver innovative software solutions.',
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Proficient' },
    { name: 'French', level: 'Advanced' }
  ]
};