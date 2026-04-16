import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock, Zap, Globe, ShieldCheck, ArrowRight, Truck } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Home" 
        description="Ice Me Incorporated is Sierra Leone's premier cold chain backbone, providing industrial ice and storage solutions that power Freetown's industry and hospitality."
      />
      {/* Hero Section */}
      <section className="relative w-full min-h-[100vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          {/* Fallback background image - Mobile optimized */}
          <img
            src="/images/Industrial facility.jpg"
            alt="Industrial facility"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Video only on desktop - hidden on mobile */}
          <div className="absolute inset-0 w-full h-full pointer-events-none animate-[fadeIn_2s_ease-in] hidden sm:block">
            <iframe
              className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2"
              src="https://www.youtube.com/embed/gr7sfKNraQk?autoplay=1&mute=1&loop=1&controls=0&playlist=gr7sfKNraQk&rel=0&playsinline=1"
              title="Ice Me Facility Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ pointerEvents: 'auto' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90 sm:bg-gradient-to-r sm:from-background sm:via-background/35 sm:to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 text-center sm:text-left"
          >
            <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary mb-4 sm:mb-6 font-bold">
              Sierra Leone's Premier Cold Chain
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-md font-black text-primary mb-6 sm:mb-8 leading-tight">
              Ice Me Incorporated: The Backbone of Sierra Leone's Cold Chain.
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-on-surface-variant max-w-xl sm:max-w-2xl mb-8 sm:mb-12 leading-relaxed mx-auto sm:mx-0">
              Setting the gold standard in thermal integrity. We provide the structural ice and storage solutions that power Freetown's industry and hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
              <button className="bg-primary text-on-primary px-8 sm:px-10 py-4 rounded-md font-bold arctic-gradient shadow-lg hover:scale-105 transition-transform w-full sm:w-auto">
                Partner With Us
              </button>
              <button className="flex items-center justify-center sm:justify-start gap-2 text-primary px-8 sm:px-10 py-4 font-bold hover:opacity-70 transition-opacity w-full sm:w-auto">
                <PlayCircle className="w-6 h-6" />
                View Facility Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-surface-container-low py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 sm:mb-8 tracking-tight">Leaders in Cold Infrastructure</h2>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed mb-4 sm:mb-6">
              From the bustling harbors of Freetown to the elite hospitality sector, Ice Me Inc. has established itself as the indispensable leader in Sierra Leone's cold chain logistics.
            </p>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              We don't just supply ice; we engineer temperature-controlled environments that ensure food security, sustain livelihoods for thousands of artisanal fishers, and keep the nation's supply lines flowing.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] sm:aspect-square bg-surface-container-highest rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,26,56,0.05)]">
              <img
                className="w-full h-full object-cover"
                src="/images/Industrial facility.jpg"
                alt="Cold storage facility"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 glass-card p-4 sm:p-8 rounded-xl max-w-[140px] sm:max-w-xs shadow-xl">
              <span className="text-3xl sm:text-5xl font-black text-primary block mb-1 sm:mb-2">250MT</span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary">Cold Storage Capacity</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supply Chain Section */}
      <section className="bg-surface py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight leading-tight"
            >
              Keeping the nation's supply chain running smoothly.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl text-on-surface-variant leading-relaxed italic border-l-4 border-primary pl-4 sm:pl-8"
            >
              "From artisanal fishing boats to Freetown's top hotels, we provide the cooling foundation for Sierra Leone's commerce."
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tighter mb-3 sm:mb-4">Why Choose Us</h2>
            <p className="text-on-surface-variant text-base sm:text-lg">The Ice Me Inc. advantage in cold chain excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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

      {/* Precision Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-20"
          >
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3 sm:mb-4 block">Our Expertise</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-primary mb-4 sm:mb-6 tracking-tighter">Precision Services</h2>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">Tailored cold chain solutions engineered for Sierra Leone's unique maritime and hospitality industries.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Industrial Crushed Ice */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[400px]"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/fishing-boat.jpeg"
                alt="Fishing boat"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A38] via-[#001A38]/70 to-[#001A38]/30"></div>
              <div className="relative z-10 p-6 sm:p-10 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xl sm:text-3xl">⚓</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/80 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full backdrop-blur-sm">Fisheries</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Industrial Crushed Ice</h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">The lifeblood of our coastal economy, supporting over 500+ artisanal fishing boats with high-thermal-mass crushed ice for preservation at sea.</p>
                  <Link to="/services" className="inline-flex items-center mt-4 sm:mt-6 text-white font-bold hover:gap-4 transition-all gap-2 text-sm sm:text-base">
                    Learn More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Premium Cube Ice */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[400px]"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/Premium Cube Ice.jpg"
                alt="Premium ice cubes"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A38] via-[#001A38]/50 to-transparent"></div>
              <div className="relative z-10 p-6 sm:p-10 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xl sm:text-3xl">🧊</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/80 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full backdrop-blur-sm">Hospitality</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Premium Cube Ice</h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">Crystal-clear, perfectly-formed cubes engineered for hotels, high-end restaurants, and premium residential delivery.</p>
                </div>
              </div>
            </motion.div>

            {/* Cold Room Storage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[400px]"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/Cold Room Storage.jpg"
                alt="Cold room storage"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A38] via-[#001A38]/60 to-[#001A38]/20"></div>
              <div className="relative z-10 p-6 sm:p-10 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xl sm:text-3xl">❄️</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/80 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full backdrop-blur-sm">Storage</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Cold Room Storage</h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">250MT capacity facility with state-of-the-art redundant cooling systems for ultimate reliability and product safety.</p>
                </div>
              </div>
            </motion.div>

            {/* Refrigerated Logistics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[400px]"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/Agile Tricycles.jpg"
                alt="Logistics tricycles"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A38] via-[#001A38]/70 to-[#001A38]/30"></div>
              <div className="relative z-10 p-6 sm:p-10 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Truck className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/80 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full backdrop-blur-sm">Logistics</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Refrigerated Logistics</h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">Our dedicated fleet of specialized reefers ensures your cargo stays at peak integrity from our warehouse to your doorstep—anytime, anywhere in the Western Area.</p>
                </div>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div>
                      <span className="text-xl sm:text-2xl font-black text-white block">24/7</span>
                      <span className="text-[10px] sm:text-xs text-white/70">Delivery</span>
                    </div>
                    <div>
                      <span className="text-xl sm:text-2xl font-black text-white block">100%</span>
                      <span className="text-[10px] sm:text-xs text-white/70">Reliability</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 lg:py-32 arctic-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {[
              { num: '01', title: 'Absolute Reliability', desc: `We ensure a consistent supply of ice and cold storage because we know that our clients' livelihoods depend on us.` },
              { num: '02', title: 'Community Focus', desc: 'We are proud to support the local fishing communities around the Western Area in Freetown and are always looking to expand and grow.' },
              { num: '03', title: 'Excellence', desc: 'From our round-the-clock operations to our fleet of delivery vehicles, we strive for operational perfection.' }
            ].map((value) => (
              <motion.div 
                key={value.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 border-l-2 sm:border-l border-white/20"
              >
                <span className="text-4xl sm:text-6xl font-black opacity-20 block mb-4 sm:mb-6">{value.num}</span>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 uppercase tracking-tighter text-white">{value.title}</h4>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacting Lives Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,26,56,0.1),transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-primary mb-6 sm:mb-8 leading-tight">
              Impacting lives beyond the ice block.
            </h2>
            <p className="text-base sm:text-xl text-on-surface-variant leading-relaxed mb-10 sm:mb-16 max-w-2xl">
              We are proud to be a lifeline for the Western Area's maritime economy, currently supporting over <span className="font-bold text-primary border-b-2 sm:border-b-4 border-primary pb-1">500 fishing boats</span> through reliable supply and logistical support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-primary mb-2">500+</div>
                <p className="text-on-surface-variant text-sm sm:text-base font-medium">Fishing boats supported daily</p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-primary mb-2">250MT</div>
                <p className="text-on-surface-variant text-sm sm:text-base font-medium">Cold storage capacity</p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm sm:col-span-2 md:col-span-1">
                <div className="text-3xl sm:text-4xl font-black text-primary mb-2">24/7</div>
                <p className="text-on-surface-variant text-sm sm:text-base font-medium">Round-the-clock operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-primary mb-6 sm:mb-8 tracking-tight leading-tight">
            Need reliable ice delivery or cold storage?
          </h2>
          <p className="text-on-surface-variant text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto font-medium">
            Contact our logistics team today for industrial volume pricing or long-term storage lease options.
          </p>
          <button className="bg-primary text-on-primary px-8 sm:px-12 py-4 sm:py-5 rounded-md font-black text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl arctic-gradient w-full sm:w-auto">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
