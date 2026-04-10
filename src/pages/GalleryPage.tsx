import { motion } from 'motion/react';
import Gallery from '../components/Gallery';
import SEO from '../components/SEO';

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <SEO 
        title="Gallery" 
        description="Explore the visual archive of Ice Me Inc.'s industrial operations, state-of-the-art facilities, and community impact in Sierra Leone."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-8 overflow-hidden bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-bold tracking-[0.2em] uppercase text-primary"
            >
              THE ARCTIC ARCHIVE
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9]"
            >
              Visualizing the <br/>Cold Chain
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-on-surface-variant max-w-2xl mt-4 leading-relaxed"
            >
              A window into the precision, scale, and impact of Sierra Leone's premier cold chain infrastructure.
            </motion.p>
          </div>
        </div>
        {/* Decorative Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      </section>

      <Gallery />

      {/* Impact Stats Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <span className="text-6xl font-black block mb-4">250MT</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">Storage Capacity</span>
            </div>
            <div className="text-center">
              <span className="text-6xl font-black block mb-4">500+</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">Boats Supported</span>
            </div>
            <div className="text-center">
              <span className="text-6xl font-black block mb-4">24/7</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tight">
            Witness the Monolith in Action.
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto font-medium">
            Our facilities are open for industrial tours and logistics consultations.
          </p>
          <button className="bg-primary text-on-primary px-12 py-5 rounded-md font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl arctic-gradient">
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
}
