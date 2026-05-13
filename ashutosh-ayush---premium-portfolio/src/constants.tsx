// Fixed error: Removed invalid type reference directive for react
import { Project, Skill, Certificate, Education, BlogPost } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'cyclecare',
    title: 'Cycle Care',
    description: 'A smart menstrual health tracking app helping users monitor periods, ovulation, symptoms, mood, and overall wellness — all in one elegant, user-friendly interface.',
    tags: ['ReactJS', 'HTML5', 'CSS3'],
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://cyclecare-beta.vercel.app/',
    liveLink: 'https://cyclecare-beta.vercel.app/',
    github: 'https://github.com/Ashutosh-JavaDev',
    category: 'Web App',
    featured: true,
    status: 'Live'
  },
  {
    id: 'tiffin',
    title: 'Tiffin Service',
    description: 'A full-featured food delivery and tiffin subscription platform with seamless menu browsing, order management, and responsive UI designed for home-cooked meal services.',
    tags: ['ReactJS', 'Tailwind', 'Node.js'],
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://tiffin-service-olive.vercel.app/',
    liveLink: 'https://tiffin-service-olive.vercel.app/',
    github: 'https://github.com/Ashutosh-JavaDev',
    category: 'Web App',
    featured: true,
    status: 'Live'
  },
  {
    id: 'pizza',
    title: 'Pizza Mania',
    description: 'Full-service digital ordering system with a dynamic menu, cart, and checkout flow — focused on Tailwind CSS optimization and peak performance.',
    tags: ['Tailwind', 'Responsive', 'Dynamic UI'],
    image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://github.com/Ashutosh-JavaDev/PizzaMania/tree/main/Project/src',
    github: 'https://github.com/Ashutosh-JavaDev/PizzaMania/tree/main/Project/src',
    category: 'Web App',
    status: 'Open Source'
  },
  {
    id: 'webbrilliant',
    title: 'Web Brilliant',
    description: 'Enterprise-grade publicly hosted web portal featuring advanced SEO optimization, blazing fast delivery, and a professional business presence.',
    tags: ['SEO', 'Performance', 'Enterprise'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://www.webbilliant.in/',
    liveLink: 'https://www.webbilliant.in/',
    github: 'https://github.com/Ashutosh-JavaDev',
    category: 'Enterprise',
    featured: true,
    status: 'Live'
  },
  {
    id: 'techhack',
    title: 'Tech Hack Community',
    description: 'A dynamic developer community platform for sharing coding shortcuts, architectural patterns, and engineering insights with a modern content-driven experience.',
    tags: ['Architecture', 'Tech News', 'Community'],
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/tech.html',
    github: 'https://github.com/Ashutosh-JavaDev',
    category: 'Community',
    status: 'In Progress'
  },
  {
    id: 'tictactoe',
    title: 'Tic Tac Toe Pro',
    description: 'A premium redesign of the classic game with high-fidelity UI, smooth animations, and minimax-ready AI logic for an unbeatable opponent experience.',
    tags: ['Modern CSS', 'ES6+', 'Game Logic'],
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/game.html',
    github: 'https://github.com/Ashutosh-JavaDev',
    category: 'Game',
    status: 'Completed'
  }
];

export const SKILLS: Skill[] = [
  {
    name: 'Core Java Architecture',
    category: 'core',
    icon: 'Coffee',
    items: ['Java Fundamentals', 'OOP Principles', 'Collections Framework', 'Multithreading', 'SpringBoot']
  },
  {
    name: 'Data Integrity',
    category: 'database',
    icon: 'Database',
    items: ['MySQL Design', 'SQL Optimization', 'Joins & Views', 'ER Modeling', 'Performance Tuning']
  },
  {
    name: 'Web Engineering',
    category: 'web',
    icon: 'Globe',
    items: ['HTML5/CSS3', 'React Ecosystem', 'Modern JavaScript', 'Responsive Design', 'RESTful APIs']
  },
  {
    name: 'System Software',
    category: 'desktop',
    icon: 'Monitor',
    items: ['Java Swing', 'GUI Development', 'Event Handling', 'Desktop Architecture', 'Local Persistence']
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    title: 'Software Engineer',
    issuer: 'J.P. Morgan Chase & Co.',
    date: '2025',
    description: 'Developed and enhanced the Midas Core System. Implemented real-time transaction handling using Kafka and Spring Boot.',
    image: 'https://images.pexels.com/photos/8830672/pexels-photo-8830672.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: 'https://www.linkedin.com/posts/ashutosh-ayush-128ba8283_jpmorgan-internship-activity-7390131339661930496-aNsa'
  },
  {
    title: 'Cybersecurity Analyst',
    issuer: 'Tata Consultancy Services',
    date: '2025',
    description: 'Comprehensive, hands-on internship focused on modern cybersecurity principles and backend security protocols.',
    image: 'https://images.pexels.com/photos/4977450/pexels-photo-4977450.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: 'https://www.linkedin.com/posts/ashutosh-ayush-128ba8283_certificate-of-completion-activity-7353112732717469696-vqFg'
  },
  {
    title: 'Java Developer Intern',
    issuer: 'Elite Tech Intern',
    date: '2025',
    description: 'Software development focus on building, testing, and deploying robust Java-based enterprise applications.',
    image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: 'https://drive.google.com/file/d/1ZHOE5lunAAYa1ylm_ZM4WuFNp-FCo5Zt/view'
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'LNCT – Lakshmi Narain College of Technology',
    period: '2024 – 2026',
    grade: 'CGPA: 7.8',
    description: 'Advanced computer science specialization in software engineering and cloud systems.',
    image: 'https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1024x456.jpg'
  },
  {
    degree: 'Bachelor of Science in IT',
    institution: 'Marwari College',
    period: '2021 – 2024',
    grade: '72%',
    description: 'Foundational degree in programming, database management, and operating systems.',
    image: 'https://www.marwaricollegebhagalpur.ac.in/images/slides-img/slides-img11.jpg'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Why I choose Java as my first Programming Language?',
    excerpt: 'Java stands out as a programming language that combines simplicity, versatility, and reliability. It became my cornerstone in development.',
    category: 'Architecture',
    readTime: '5 min',
    link: '/ReasonforJava.html',
    views: '2.1K'
  },
  {
    title: 'Mastering Data Structures & Algorithms',
    excerpt: 'DSA is not just about solving problems; it is about solving them in the most logical, resource-efficient way possible.',
    category: 'Computer Science',
    readTime: '7 min',
    link: '/ChooseDSA.html',
    views: '1.9K'
  }
];