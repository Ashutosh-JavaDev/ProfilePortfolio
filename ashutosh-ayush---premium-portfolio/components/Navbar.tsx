
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="container mx-auto px-6">
        <div className={`mx-auto max-w-5xl rounded-full transition-all duration-300 px-6 py-2 flex items-center justify-between ${
          isScrolled 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border border-slate-200/50 dark:border-slate-800/50' 
            : 'bg-transparent'
        }`}>
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
              AA
            </div>
            <span className="hidden sm:block font-heading font-bold text-xl tracking-tight">Ashutosh</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-primary-500 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a 
              href="#contact" 
              className="hidden md:block px-5 py-2 bg-primary-600 text-white text-sm font-semibold rounded-full hover:bg-primary-700 transition-all hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-slate-950 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-heading font-bold hover:text-primary-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setIsOpen(false)}
            className="mt-8 p-4 bg-primary-600 text-white rounded-full"
          >
            <X size={32} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
