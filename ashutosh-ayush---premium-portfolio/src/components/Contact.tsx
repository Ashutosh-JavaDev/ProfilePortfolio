
import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-5/12">
            <h2 className="text-sm font-bold text-primary-400 uppercase tracking-[0.2em] mb-4">Inquiry</h2>
            <h3 className="text-4xl lg:text-7xl font-heading font-extrabold mb-10 leading-tight">Start a <br /> Conversation.</h3>
            
            <div className="space-y-10 mb-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-400 border border-white/10 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Office</h4>
                  <p className="text-slate-400">Siddharth Enclave Raj Homes, Ayodhya Baypass, Bhopal</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-400 border border-white/10 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <a href="mailto:mrsahayy297@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">mrsahayy297@gmail.com</a>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-400 border border-white/10 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone</h4>
                  <a href="tel:+917070987772" className="text-slate-400">+91-7070987772</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-primary-600 hover:text-white transition-all hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="p-10 lg:p-14 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10">
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Your Message</label>
                <textarea 
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-3xl focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                  placeholder="Hello, I would like to discuss a project..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-primary-600 text-white rounded-3xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-700 transition-all hover:shadow-2xl hover:shadow-primary-500/25 active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
