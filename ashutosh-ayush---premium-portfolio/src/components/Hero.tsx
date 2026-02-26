
import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200/20 dark:border-slate-800/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-200/20 dark:border-slate-800/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-6 border border-emerald-500/20">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6 leading-[1.1]">
              Refining Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-violet-500">
                Architectures.
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Radhe Radhe! 👋 I'm <span className="font-bold text-slate-900 dark:text-white">Ashutosh Ayush</span>, 
              a FullStack Architect crafting high-performance Java applications and immersive web experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects" 
                className="group px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-700 transition-all hover:shadow-2xl hover:shadow-primary-500/25 hover:-translate-y-1"
              >
                View Work 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:mrsahayy297@gmail.com" 
                className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-1"
              >
                Let's Talk
                <Mail size={20} />
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold">2.7K+</div>
                <div className="text-xs uppercase tracking-widest font-semibold">Visits</div>
              </div>
              <div className="w-px h-8 bg-slate-300 dark:bg-slate-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">4+</div>
                <div className="text-xs uppercase tracking-widest font-semibold">Core Stacks</div>
              </div>
              <div className="w-px h-8 bg-slate-300 dark:bg-slate-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-xs uppercase tracking-widest font-semibold">Certifications</div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-violet-600 rounded-[2rem] rotate-6 scale-95 opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-violet-600 rounded-[2rem] -rotate-6 transition-transform group-hover:rotate-0"></div>
              <div className="absolute inset-2 bg-white dark:bg-slate-900 rounded-[1.8rem] overflow-hidden">
                <img 
                  src="/CourtPant.jpg" 
                  alt="Ashutosh Ayush" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl">
                    <a href="/AshutoshBackendResume.pdf"><Download size={24} /></a>
                    
                  </div>
                  <div className="pr-4">
                    <div className="text-xs font-bold uppercase opacity-50 tracking-wider">Resume</div>
                    <div className="text-sm font-bold"><a href="/AshutoshBackendResume.pdf">CV.pdf</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
