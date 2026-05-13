import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Variants } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Zap, Star } from 'lucide-react';
import { PROJECTS } from '../constants';

const CATEGORIES = ['All', 'Web App', 'Enterprise', 'Community', 'Game'];

const statusColors: Record<string, string> = {
  Live: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'Open Source': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'In Progress': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Completed: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const featured = PROJECTS.filter(p => p.featured);

  return (
    <section id="projects" className="py-28 bg-slate-100 dark:bg-slate-900/50 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          className="max-w-3xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-bold text-violet-600 dark:text-violet-400 uppercase tracking-[0.2em]">
              Portfolio
            </span>
            <span className="h-px w-12 bg-violet-500/40 block"></span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              {PROJECTS.length} Projects
            </span>
          </div>
          <h3 className="text-4xl lg:text-6xl font-heading font-extrabold mb-6 bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Recent Work.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A curated selection of projects — from enterprise Java architectures to modern high-performance frontend interfaces.
          </p>
        </motion.div>

        {/* Featured Strip */}
        <motion.div
          className="flex flex-wrap items-center gap-2 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 uppercase tracking-widest mr-2">
            <Star size={13} fill="currentColor" /> Featured
          </div>
          {featured.map(p => (
            <span
              key={p.id}
              className="text-xs px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium"
            >
              {p.title}
            </span>
          ))}
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 rounded-full bg-violet-600 -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                className="group relative flex flex-col bg-white dark:bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-violet-400/50 dark:hover:border-violet-500/50 transition-colors duration-500 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/20">
                      {project.category}
                    </span>
                    {project.status && (
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-md ${statusColors[project.status] || ''}`}>
                        {project.status === 'Live' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />}
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Featured star */}
                  {project.featured && (
                    <div className="absolute bottom-4 right-4">
                      <div className="w-8 h-8 rounded-full bg-amber-400/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                        <Star size={14} className="text-amber-900" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h4 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:border-violet-400 dark:hover:border-violet-500 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5 group/btn"
                      >
                        <Zap size={14} className="group-hover/btn:rotate-12 transition-transform" />
                        Live Demo
                        <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <a
                        href={project.github || project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 dark:bg-white hover:bg-slate-700 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 group/btn"
                      >
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        View Project
                      </a>
                    )}
                    <a
                      href={project.github || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
                      title="View on GitHub"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Hover glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://github.com/Ashutosh-JavaDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-500 text-slate-700 dark:text-slate-200 font-bold transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1 group"
          >
            <Github size={20} />
            View All on GitHub
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
