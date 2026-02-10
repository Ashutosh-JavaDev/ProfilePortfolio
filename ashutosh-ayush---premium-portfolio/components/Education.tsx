
import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em] mb-4">Journey</h2>
          <h3 className="text-4xl lg:text-6xl font-heading font-extrabold mb-6">Academic Path.</h3>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {EDUCATION.map((edu, idx) => (
            <div 
              key={edu.degree}
              className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <img 
                    src={edu.image} 
                    alt={edu.institution} 
                    className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                    <div>
                      <div className="flex items-center gap-2 text-white/80 text-sm font-bold mb-2">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                      <h4 className="text-2xl font-heading font-bold text-white">{edu.institution}</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold mb-6">
                    <GraduationCap size={16} />
                    {edu.degree}
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="text-amber-500" size={24} />
                    <span className="text-2xl font-bold font-heading">{edu.grade}</span>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    {edu.description}
                  </p>
                  <div className="h-1 w-20 bg-primary-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
