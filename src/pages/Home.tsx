import { motion } from 'motion/react';
import { PlayCircle, Clock, Zap, Globe, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000" 
            alt="Industrial ice facility"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-6 font-bold">
              Sierra Leone’s Premier Cold Chain
            </span>
            <h1 className="text-display-md text-primary mb-8">
              Ice Me Incorporated: The Backbone of Sierra Leone’s Cold Chain.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
              Setting the gold standard in thermal integrity. We provide the structural ice and storage solutions that power Freetown's industry and hospitality.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-md font-bold arctic-gradient shadow-lg hover:scale-105 transition-transform">
                Partner With Us
              </button>
              <button className="flex items-center gap-2 text-primary px-10 py-4 font-bold hover:opacity-70 transition-opacity">
                <PlayCircle className="w-6 h-6" />
                View Facility Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-8 tracking-tight">Leaders in Cold Infrastructure</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              From the bustling harbors of Freetown to the elite hospitality sector, Ice Me Inc. has established itself as the indispensable leader in Sierra Leone's cold chain logistics.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We don't just supply ice; we engineer temperature-controlled environments that ensure food security, sustain livelihoods for thousands of artisanal fishers, and keep the nation's supply lines flowing.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,26,56,0.05)]">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                alt="Cold storage facility"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-xl max-w-xs shadow-xl">
              <span className="text-5xl font-black text-primary block mb-2">250MT</span>
              <span className="text-sm font-bold uppercase tracking-widest text-secondary">Cold Storage Capacity</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supply Chain Section */}
      <section className="bg-surface py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-primary tracking-tight leading-tight"
            >
              Keeping the nation's supply chain running smoothly.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-on-surface-variant leading-relaxed italic border-l-4 border-primary pl-8"
            >
              "From artisanal fishing boats to Freetown's top hotels, we provide the cooling foundation for Sierra Leone's commerce."
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-4">Why Choose Us</h2>
            <p className="text-on-surface-variant text-lg">The Ice Me Inc. advantage in cold chain excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "24/7 Operations",
                desc: "Our facility never sleeps, ensuring ice is available when the tide turns."
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "N+1 Redundancy",
                desc: "Multiple cooling systems and backup power ensure your goods stay frozen."
              },
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "Local Expertise",
                desc: "Deeply rooted in Sierra Leone, we understand the unique logistical challenges."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "Certified Purity",
                desc: "Produced using triple-filtered water, meeting international food safety standards."
              }
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Precision Services Bento Grid */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black text-primary mb-4 tracking-tighter">Precision Services</h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
              <div className="flex justify-between items-start">
                <div className="text-4xl text-primary group-hover:text-white">⚓</div>
                <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Fisheries Support</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary group-hover:text-white mb-4">Industrial Crushed Ice</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 max-w-md">The lifeblood of our coastal economy, supporting over 500+ artisanal fishing boats with high-thermal-mass crushed ice for preservation at sea.</p>
              </div>
            </div>

            <div className="md:col-span-5 relative overflow-hidden rounded-xl bg-surface-container-highest">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800" 
                alt="Premium ice cubes"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Cube Ice</h3>
                <p className="text-white/80 text-sm">Engineered for hotels, high-end restaurants, and premium residential delivery.</p>
              </div>
            </div>

            <div className="md:col-span-5 bg-surface-container-low p-10 rounded-xl border border-outline-variant/10">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 text-white text-2xl">❄️</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Cold Room Storage</h3>
              <p className="text-on-surface-variant mb-6">Massive 250MT capacity controlled by state-of-the-art redundant cooling systems for ultimate reliability.</p>
              <button className="inline-flex items-center text-primary font-bold hover:underline">
                Manage Inventory <span className="ml-2">→</span>
              </button>
            </div>

            <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-xl flex items-center gap-8 shadow-sm">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-4">Refrigerated Logistics</h3>
                <p className="text-on-surface-variant">Our dedicated fleet of specialized reefers ensures your cargo stays at peak integrity from our warehouse to your doorstep.</p>
              </div>
              <div className="hidden sm:block w-48 h-48 bg-background rounded-full overflow-hidden flex-shrink-0">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=500" 
                  alt="Logistics truck"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 arctic-gradient text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {[
              { num: '01', title: 'Absolute Reliability', desc: 'Our infrastructure is designed with N+1 redundancy. When we promise cold, we deliver cold, regardless of external conditions.' },
              { num: '02', title: 'Community Focus', desc: 'Rooted in Sierra Leone, we empower local fisheries and businesses by stabilizing the food chain and preventing waste.' },
              { num: '03', title: 'Excellence', desc: 'From molecular purity in our ice cubes to precision tracking in our fleet, excellence is our only baseline.' }
            ].map((value) => (
              <motion.div 
                key={value.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 border-l border-white/20"
              >
                <span className="text-6xl font-black opacity-20 block mb-6">{value.num}</span>
                <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter text-white">{value.title}</h4>
                <p className="text-white/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tight">
            Need reliable ice delivery or cold storage?
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto font-medium">
            Contact our logistics team today for industrial volume pricing or long-term storage lease options.
          </p>
          <button className="bg-primary text-on-primary px-12 py-5 rounded-md font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl arctic-gradient">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
