import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/krishisakhi.png',
    title: 'KrishiSakhi',
    description:
      'A full-stack agricultural platform with cross-platform web (Next.js) and mobile app (React Native/Expo), featuring real-time chat, AI chatbot, e-commerce marketplace, and government schemes checker.',
    technologies: ['Next.js', 'React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Cloudinary'],
    links: {
      preview: 'https://krishisakhi-alpha.vercel.app/',
      github: 'https://github.com/VPbanna123/krishisakhi',
      githubApi: 'https://api.github.com/repos/VPbanna123/krishisakhi',
    },
  },
  {
    image: '/images/chat.jpeg',
    title: 'Guardian AI: Cyberbullying Detection',
    description:
      'Privacy-first real-time cyberbullying detection system using fine-tuned RoBERTa model (90%+ F1-score). Features on-device inference, multi-threshold alert logic, parent dashboard, and real-time chat with Socket.io.',
    technologies: ['FastAPI', 'React', 'RoBERTa', 'Socket.io', 'MongoDB', 'Python'],
    links: {
      preview: '',
      github: 'https://github.com/VPbanna123/cyber-guard-chat',
      githubApi: 'https://api.github.com/repos/VPbanna123/cyber-guard-chat',
    },
  },
  {
    image: '/images/AI_lecture.png',
    title: 'AI-Lecture Generator',
    description:
      'AI-powered educational video system generating dynamic slides, Manim animations, and multi-language voice narration using Gemini AI and Sarvam AI.',
    technologies: ['FastAPI', 'React', 'Python', 'Gemini AI', 'Sarvam AI', 'Manim'],
    links: {
      preview: '',
      github: 'https://github.com/VPbanna123/ai-lecture-generator',
      githubApi: 'https://api.github.com/repos/VPbanna123/ai-lecture-generator',
    },
  },
  {
    image: '/images/docs.jpeg',
    title: 'DocuAI: Smart Medical Assistant',
    description:
      'Mobile app that records doctor-patient conversations, uses Whisper AI for transcription, OCR for medical reports, and Gemini AI for diagnosis analysis.',
    technologies: ['React Native', 'TypeScript', 'Flask', 'Whisper AI', 'Gemini API'],
    links: {
      preview: '',
      github: 'https://github.com/DataScience-ArtificialIntelligence/doctor-assistant',
      githubApi: 'https://api.github.com/repos/DataScience-ArtificialIntelligence/doctor-assistant',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Virtual Cybersecurity Intern',
    company: 'C-DAC (Centre for Development of Advanced Computing)',
    description:
      'Completed comprehensive training in network protocols, TCP packet analysis, and security fundamentals. Gained hands-on experience with Wireshark, Nmap, and Nikto for vulnerability assessment. Conducted digital forensics investigation using FTK Imager and Autopsy.',
    period: '2025',
    technologies: ['Wireshark', 'Nmap', 'Nikto', 'FTK Imager', 'Autopsy'],
  },
  {
    title: 'Quality Assurance Testing Intern',
    company: 'Galaxy.ai',
    description:
      'Conducted comprehensive testing of web and mobile applications across multiple platforms. Documented and reported software defects with detailed reproduction steps. Performed functional, UI/UX, and compatibility testing ensuring quality standards.',
    period: '2025',
    technologies: ['Software Testing', 'Bug Detection', 'QA', 'UI/UX Testing'],
  },
] as const;

export const hackathonsData = [
  {
    title: '1st Place - YUKTI Chip Design Challenge',
    event: 'GND_0 (VLSI Club), IIIT Dharwad',
    description:
      'Designed and implemented complete ASIC flow from RTL to GDSII layout using Verilog. Performed logic synthesis, floorplanning, placement, and routing with timing optimization.',
    year: '2025',
    technologies: ['Verilog', 'ASIC', 'RTL', 'VLSI'],
  },
  {
    title: '3rd Place - Vidyut Vega Hackathon',
    event: 'Real-Time Mask Detection Challenge',
    description:
      'Developed optimized deep learning model for real-time face mask detection. Achieved efficient inference on resource-constrained hardware (Raspberry Pi/FPGA).',
    year: '2025',
    technologies: ['Deep Learning', 'Computer Vision', 'Python', 'TensorFlow'],
  },
] as const;

// Skills displayed with icons in the Skills component (About section)
export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.cpp className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nodejs className="size-12" /> },
  { icon: <Icons.express className="size-12" /> },
  { icon: <Icons.mongodb className="size-12" /> },
  { icon: <Icons.postgresql className="size-12" /> },
  { icon: <Icons.redis className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
  { icon: <Icons.firebase className="size-12" /> },
  { icon: <Icons.git className="size-12" /> },
] as const;

// Full technical skills list organized by category
export const technicalSkillsData = [
  {
    category: 'Programming Languages',
    skills: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Prisma ORM', 'Redis', 'RESTful APIs', 'Socket.io', 'WebSocket'],
  },
  {
    category: 'Mobile Development',
    skills: ['React Native CLI', 'Expo', 'NativeWind'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Docker', 'Git', 'GitHub', 'Vercel', 'Netlify', 'Firebase', 'Appwrite', 'Cloudinary', 'MongoDB Atlas'],
  },
  {
    category: 'AI/ML Tools',
    skills: ['Google Gemini API', 'Sarvam AI', 'Manim', 'MoviePy', 'TensorFlow (basics)'],
  },
  {
    category: 'Authentication & Security',
    skills: ['JWT (custom implementation)', 'OAuth', 'NextAuth.js', 'Clerk', 'Resend', 'Nodemailer', 'OTP Verification'],
  },
  {
    category: 'Cybersecurity Tools',
    skills: ['Wireshark', 'Nmap', 'Nikto', 'FTK Imager', 'Autopsy'],
  },
  {
    category: 'Core Concepts & Problem Solving',
    skills: ['Data Structures & Algorithms', 'System Design', 'Microservices', 'API Design', '5-star C rating on HackerRank', 'Active on LeetCode'],
  },
  {
    category: 'Certifications',
    skills: ['HackerRank (CSS, JavaScript)', 'Lifology Global Fellow', 'C-DAC Cybersecurity Certificate'],
  },
] as const;
