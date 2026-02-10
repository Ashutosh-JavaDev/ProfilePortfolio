// Fixed error: Removed invalid type reference directive for react
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { CERTIFICATES, BLOG_POSTS } from './constants';
import { ExternalLink, Eye, Clock } from 'lucide-react';

const ArrowRight = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />

        <Skills />

        {/* Certificates Section */}
        <section id="certificates" className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em] mb-4">
                Credentials
              </h2>
              <h3 className="text-4xl lg:text-6xl font-heading font-extrabold mb-6">Expert Accreditations.</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.title}
                  className="group p-2 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="relative h-60 overflow-hidden rounded-[2rem] mb-6">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold font-heading mb-1">{cert.title}</h4>
                        <div className="text-primary-600 dark:text-primary-400 text-sm font-bold uppercase tracking-wider">
                          {cert.issuer}
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-bold">
                        {cert.date}
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {cert.description}
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-primary-600 transition-colors group/link"
                    >
                      Verify Credential{' '}
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Projects />

        <Education />

        {/* Blog/Reasoning Section */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em] mb-4">
                  Insights
                </h2>
                <h3 className="text-4xl lg:text-6xl font-heading font-extrabold mb-4">Architectural Logic.</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  Deep dives into engineering choices and philosophical approaches to modern development.
                </p>
              </div>
              <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all">
                Read Journal
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.title}
                  className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 text-xs font-bold">
                      <Clock size={14} /> {post.readTime}
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-xs font-bold">
                      <Eye size={14} /> {post.views}
                    </div>
                  </div>
                  <h4 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary-500 transition-colors cursor-pointer">
                    {post.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">{post.excerpt}</p>
                  <a
                    href={post.link}
                    className="flex items-center gap-2 font-bold text-sm hover:translate-x-1 transition-transform"
                  >
                    Explore Article <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              AA
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">AshutoshAyush</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Portfolio — Built with precision using React, TypeScript & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;