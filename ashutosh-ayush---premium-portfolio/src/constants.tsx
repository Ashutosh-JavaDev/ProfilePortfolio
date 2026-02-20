// Fixed error: Removed invalid type reference directive for react
import { Project, Skill, Certificate, Education, BlogPost } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'notes',
    title: 'Notes Application',
    description: 'A sophisticated productivity tool for seamless daily task management and note-taking with local persistence.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/Notes.html',
    gridSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'tictactoe',
    title: 'Tic Tac Toe Pro',
    description: 'Modern redesign of the classic game with high-fidelity UI and minimax-ready logic.',
    tags: ['Modern CSS', 'ES6+', 'Game Logic'],
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/game.html',
    gridSpan: 'md:col-span-2'
  },
  {
    id: 'swimming',
    title: 'Aquatic Center Web Portal',
    description: 'A responsive high-conversion landing page for leisure facilities with focus on UX/UI.',
    tags: ['UI/UX', 'Mobile First', 'Flexbox'],
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/SwimmingPool.html',
    gridSpan: 'md:col-span-1'
  },
  {
    id: 'pizza',
    title: 'Pizza Mania',
    description: 'Full-service digital ordering system focused on Tailwind CSS optimization and performance.',
    tags: ['Tailwind', 'Responsive', 'Dynamic UI'],
    image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://github.com/Ashutosh-JavaDev/PizzaMania/tree/main/Project/src',
    gridSpan: 'md:col-span-1'
  },
  {
    id: 'techhack',
    title: 'Tech Hack Community',
    description: 'Dynamic platform for sharing developer shortcuts and architectural patterns.',
    tags: ['Architecture', 'Tech News', 'Community'],
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/tech.html',
    gridSpan: 'md:col-span-2'
  },
  {
    id: 'webbrilliant',
    title: 'Web Brilliant',
    description: 'Enterprise-grade publicly hosted web portal featuring SEO optimization and fast delivery.',
    tags: ['SEO', 'Performance', 'Enterprise'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://www.webbilliant.in/',
    gridSpan: 'md:col-span-2'
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
    link: 'Projects/ReasonforJava.html',
    views: '2.1K'
  },
  {
    title: 'Mastering Data Structures & Algorithms',
    excerpt: 'DSA is not just about solving problems; it is about solving them in the most logical, resource-efficient way possible.',
    category: 'Computer Science',
    readTime: '7 min',
    link: 'Projects/ChooseDSA.html',
    views: '1.9K'
  }
];