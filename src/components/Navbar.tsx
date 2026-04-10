import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Team', href: '/team' },
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
            const isActive = location.pathname === link.href;
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

        <button className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-md font-bold hover:opacity-80 transition-opacity">
          Get a Quote
        </button>

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
            <div className="flex flex-col space-y-6 text-center flex-grow">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
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
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pb-8"
            >
              <button className="w-full bg-primary text-on-primary px-6 py-4 rounded-xl font-bold text-lg hover:opacity-80 transition-opacity">
                Get a Quote
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
