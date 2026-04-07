import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-outline-variant/15 bg-background">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="text-lg font-bold text-primary">Ice Me Inc.</div>
          <div className="text-sm tracking-wide uppercase text-on-surface-variant">
            © 2024 Ice Me Incorporated. Freetown, Sierra Leone. info@iceme.sl | +232 00 000 000
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm tracking-wide uppercase font-bold">
          <Link to="/team" className="text-on-surface-variant hover:text-primary transition-colors">Our Team</Link>
          <Link to="/privacy" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/logistics" className="text-on-surface-variant hover:text-primary transition-colors">Cold Chain Logistics</Link>
        </div>
      </div>
    </footer>
  );
}
