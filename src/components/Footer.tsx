import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Footer() {
  const location = useLocation();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#001A38] text-[#f9f9f9] flex flex-col p-12 md:p-16 w-full border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
        {/* Brand Section */}
        <div>
          <span className="text-2xl font-black text-[#f9f9f9] mb-6 block tracking-tighter">ICE ME</span>
          <p className="text-slate-300 text-base leading-relaxed max-w-xs opacity-80">
            Pioneering the industrial ice and cold storage landscape in Freetown. Purity, reliability, and speed at the core of our operations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8 text-white/40">Quick Links</h4>
          <ul className="space-y-5">
            {quickLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className={cn(
                      "text-base transition-colors hover:text-white font-medium",
                      isActive ? "text-white underline underline-offset-8 decoration-2" : "text-slate-300"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8 text-white/40">Contact</h4>
          <div className="space-y-3 text-slate-300 text-base">
            <p className="font-medium">14 Lumley Beach Road</p>
            <p className="font-medium">Freetown, Sierra Leone</p>
            <p className="pt-4 font-black text-xl text-white tracking-tight">+232 76 612425</p>
            <p className="text-sm opacity-50 font-medium">info@icemesl.com</p>
          </div>
        </div>

        {/* Connect Section */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8 text-white/40">Connect</h4>
          <div className="flex gap-4 flex-wrap">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all border border-white/10">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all border border-white/10">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all border border-white/10">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all border border-white/10">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/watch?v=gr7sfKNraQk" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all border border-white/10">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto w-full">
        <span className="text-slate-500 text-sm tracking-wide font-medium">
          © 2024 Ice Me Incorporated. All rights reserved.
        </span>
        <div className="flex gap-8">
          <span className="text-white/30 text-xs uppercase tracking-[0.3em] font-black">
            Cold Chain Excellence
          </span>
        </div>
      </div>
    </footer>
  );
}
