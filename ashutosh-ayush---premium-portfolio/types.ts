
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  gridSpan?: string; // Tailwind span class
}

export interface Skill {
  name: string;
  icon: string;
  category: 'core' | 'database' | 'web' | 'desktop';
  items: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description: string;
  image: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  link: string;
  views: string;
}
