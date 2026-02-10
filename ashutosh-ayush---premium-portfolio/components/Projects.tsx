
import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em] mb-4">Portfolio</h2>
          <h3 className="text-4xl lg:text-6xl font-heading font-extrabold mb-6">Recent Work.</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A selection of projects ranging from enterprise Java architectures to modern high-performance frontend interfaces.
          </p>
        </div>

        <div className="bento-grid">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 ${project.gridSpan || ''}`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>

              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-heading font-bold text-white mb-2">{project.title}</h4>
                <p className="text-sm text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-white text-slate-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
