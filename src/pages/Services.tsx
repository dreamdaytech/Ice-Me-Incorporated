import { motion } from 'motion/react';

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-40">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000" 
            alt="Ice textures"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 py-24 w-full">
          <span className="text-secondary-container font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Expertise</span>
          <h1 className="text-display-md text-white tracking-tighter max-w-3xl">
            Pioneering the Cold Chain.
          </h1>
          <p className="mt-8 text-on-primary-container text-lg md:text-xl max-w-xl font-medium leading-relaxed">
            From the deep-sea fishing fleets to the finest hospitality venues, we deliver structural reliability through the power of ice.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-32 space-y-32">
        {/* Industrial Crushed Ice */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 relative group"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low">
              <img 
                className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=1000" 
                alt="Fishing boat"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 glass-card rounded-xl shadow-xl hidden md:block max-w-xs">
              <p className="text-primary font-bold text-lg italic">"Powering the livelihood of the Western Area fishing community."</p>
            </div>
          </motion.div>
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold mb-6">
              ⚓ INDUSTRIAL
            </div>
            <h2 className="text-4xl font-black text-primary tracking-tight mb-6">Industrial Crushed Ice</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Engineered for longevity. Our crushed ice is the lifeline for Sierra Leone's artisanal and industrial fishing sectors. Designed to maintain internal temperatures for extended voyages, ensuring the catch arrives at market in peak condition.
            </p>
            <ul className="space-y-4">
              {['Bulk delivery directly to port-side vessels', 'Specially formulated for slow-melt endurance'].map((li) => (
                <li key={li} className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-on-surface font-medium">{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Premium Cube Ice */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold mb-6">
              🍴 HOSPITALITY
            </div>
            <h2 className="text-4xl font-black text-primary tracking-tight mb-6">Premium Cube Ice</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Crystal clear, food-grade ice for the hospitality sector. We supply Freetown's leading hotels, restaurants, and bars with ice that doesn't just cool—it complements the premium experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-6 rounded-xl">
                <div className="text-primary mb-3">💧</div>
                <h4 className="font-bold text-primary">Purified</h4>
                <p className="text-sm text-on-surface-variant">Triple-filtered reverse osmosis process.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl">
                <div className="text-primary mb-3">🧊</div>
                <h4 className="font-bold text-primary">Crystal Clear</h4>
                <p className="text-sm text-on-surface-variant">Precision molded for aesthetic perfection.</p>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 order-1 md:order-2"
          >
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-surface-container-low">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury cocktail"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </section>

        {/* Cold Storage */}
        <section className="bg-surface-container-low rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-full text-xs font-bold mb-6">
                ❄️ FACILITY
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-8">250MT Cold Storage</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md">
                Our state-of-the-art facility provides an unwavering environment for perishable goods. From pharmaceuticals to fresh produce, we offer secure, temperature-controlled sanctuary.
              </p>
              <div className="space-y-6">
                {[
                  { icon: '🛡️', title: '24/7 Monitoring', desc: 'Real-time temperature tracking and redundancy systems.' },
                  { icon: '📦', title: 'High Capacity', desc: 'Managed 250MT storage with palletized accessibility.' }
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shrink-0 text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[400px]">
              <img 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl" 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
                alt="Warehouse"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold mb-6">
            🚚 LOGISTICS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight mb-8">Seamless Cold-Chain Logistics</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-16">
            Our specialized fleet ensures the "Last Mile" is as cold as the first. Utilizing a hybrid fleet of heavy-duty trucks and agile tricycles, we navigate Freetown's complex geography without breaking the thermal seal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-2xl bg-surface-container-highest">
              <div className="aspect-video">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800" 
                  alt="Primary fleet"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-bold text-primary mb-2">Primary Fleet</h3>
                <p className="text-on-surface-variant">High-capacity refrigerated trucks for large-scale industrial and retail distribution across the Western Area.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-surface-container-highest">
              <div className="aspect-video">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800" 
                  alt="Agile tricycles"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-bold text-primary mb-2">Agile Tricycles</h3>
                <p className="text-on-surface-variant">Custom-built cold-box tricycles for rapid urban delivery and navigating tight community markets.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
