import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ChevronDown, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'About Us', 
    href: '/about',
    submenu: [
      { name: 'Who We Are', href: '/about' },
      { name: 'Our Team', href: '/team' },
    ]
  },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Handle theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/70 dark:bg-surface/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,26,56,0.05)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4 md:py-6">
        <Link to="/" className="text-2xl font-black tracking-tighter text-primary z-50 relative">
          Ice Me Inc.
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-bold tracking-tight">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || 
              (link.submenu?.some(sub => location.pathname === sub.href));
            
            if (link.submenu) {
              return (
                <div key={link.name} className="relative group py-2">
                  <button
                    className={cn(
                      "flex items-center gap-1 transition-colors pb-1 border-b-2",
                      isActive 
                        ? "text-primary border-primary" 
                        : "text-on-surface-variant border-transparent hover:text-primary"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-surface border border-outline-variant/20 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60] overflow-hidden">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className={cn(
                          "block px-6 py-3 text-sm hover:bg-surface-container-high transition-colors",
                          location.pathname === sub.href ? "text-primary font-black" : "text-on-surface-variant"
                        )}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "transition-colors pb-1 border-b-2",
                  isActive 
                    ? "text-primary border-primary" 
                    : "text-on-surface-variant border-transparent hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-surface-container-high transition-colors text-primary"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <div className="hidden md:flex gap-2">
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href="https://www.youtube.com/watch?v=gr7sfKNraQk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all">
            <Youtube className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden z-50 relative">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-surface-container-high transition-colors text-primary"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button 
            className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full h-screen bg-background flex flex-col pt-24 px-6 pb-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4 text-center flex-grow overflow-y-auto pt-4">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href || 
                  (link.submenu?.some(sub => location.pathname === sub.href));
                
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "text-3xl font-black tracking-tighter block transition-colors",
                        isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                    
                    {link.submenu && (
                      <div className="flex flex-col gap-3 mt-4 mb-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className={cn(
                              "text-lg font-bold tracking-tight transition-colors",
                              location.pathname === sub.href ? "text-primary" : "text-on-surface-variant/60"
                            )}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pb-8 px-6"
            >
              <p className="text-sm font-medium text-on-surface-variant mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/watch?v=gr7sfKNraQk" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
