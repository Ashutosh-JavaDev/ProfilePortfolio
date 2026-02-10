
import React from 'react';
import { Coffee, Database, Globe, Monitor, Code2 } from 'lucide-react';
import { SKILLS } from '../constants';

const iconMap = {
  Coffee: Coffee,
  Database: Database,
  Globe: Globe,
  Monitor: Monitor
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <h2 className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em] mb-4">Core Stack</h2>
            <h3 className="text-4xl lg:text-6xl font-heading font-extrabold mb-8">Technical <br /> Expertise.</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Engineering solutions across the full stack with a specialized focus on Java enterprise systems and modern reactive frontends.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60">Java Core</div>
              </div>
              <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="text-3xl font-bold mb-1">90%</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60">Database</div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {SKILLS.map((skill) => {
              const Icon = iconMap[skill.icon as keyof typeof iconMap] || Code2;
              return (
                <div 
                  key={skill.name}
                  className="group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={32} />
                  </div>
                  
                  <h4 className="text-2xl font-heading font-bold mb-6">{skill.name}</h4>
                  
                  <div className="space-y-4">
                    {skill.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-slate-600 dark:text-slate-400 font-medium group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
