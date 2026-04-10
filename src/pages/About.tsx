import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 z-10"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-6 block">Established 2021</span>
            <h1 className="text-display-md text-primary mb-8">
              Preserving <br/><span className="text-on-primary-container">the Core.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              From a singular vision in Freetown to Sierra Leone's premier cold chain management enterprise. We don't just move goods; we sustain life.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial facility" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="text-sm font-bold text-primary italic">"Our mission is simple: To be the backbone of Sierra Leone’s cold chain industry."</p>
              <p className="mt-4 text-xs tracking-widest uppercase font-bold text-on-surface-variant">— Marie Garber, Founder</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-black tracking-tighter text-primary sticky top-32">The History of Ice Me</h2>
            </div>
            <div className="md:w-2/3 space-y-12">
              {[
                { year: '2021', title: 'The Genesis', text: 'In 2021, Marie Garber recognized a critical gap in Sierra Leone\'s infrastructure. While demand for fresh perishables was rising, the "cold link" remained fragile. Ice Me Incorporated was born from a single warehouse and a vision to provide temperature-controlled reliability to every corner of Freetown.' },
                { year: '2022', title: 'Scaling Logistics', text: 'We expanded beyond simple storage into active logistics. By integrating state-of-the-art monitoring systems, we ensured that every shipment maintained its integrity from the port to the plate.' },
                { year: 'Today', title: 'A National Enterprise', text: 'Now, Ice Me stands as a multi-hub enterprise. We are no longer just a supplier; we are the strategic partner for healthcare, agriculture, and hospitality sectors across the nation.' }
              ].map((item) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl font-black text-outline-variant/30">{item.year}</span>
                    <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Bento Grid */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-[#030515] rounded-xl p-12 text-white flex flex-col justify-between arctic-gradient overflow-hidden relative">
              <div className="z-10">
                <div className="text-4xl mb-6 opacity-80">👁️</div>
                <h3 className="text-4xl font-bold mb-6 text-white">Our Vision</h3>
                <p className="text-2xl font-light leading-snug max-w-xl text-white/90">
                  To revolutionize the standard of cold-chain logistics in West Africa, fostering a future where food security and pharmaceutical safety are never compromised by temperature.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-[300px]">❄️</div>
            </div>

            <div className="md:col-span-4 bg-[#cce9f5] rounded-xl p-12 text-[#001a38]">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-[#001a38]">The Mission</h3>
              <p className="text-lg leading-relaxed text-[#001a38]/80 font-medium">
                Serving as the backbone of Sierra Leone's industry through absolute structural reliability and premium technological integration.
              </p>
            </div>

            {[
              { icon: '✅', title: 'Integrity', desc: 'Unwavering commitment to temperature standards and product safety.' },
              { icon: '👥', title: 'Community', desc: 'Empowering local producers by connecting them to wider markets.' },
              { icon: '⚙️', title: 'Innovation', desc: 'Leveraging the latest in industrial cooling and IoT tracking.' }
            ].map((val) => (
              <div key={val.title} className="md:col-span-4 bg-surface-container-highest rounded-xl p-8 flex flex-col">
                <div className="text-primary mb-4 text-2xl">{val.icon}</div>
                <h4 className="font-bold text-primary mb-2">{val.title}</h4>
                <p className="text-sm text-on-surface-variant">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-4">Core Values</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              The principles that navigate our operations across the Sierra Leonean coast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Reliability', 
                icon: <ShieldCheck className="w-6 h-6 text-white" />, 
                desc: 'Our infrastructure is designed for 24/7 uptime. We understand that in the cold chain, time is the only variable that matters.' 
              },
              { 
                title: 'Community Focus', 
                icon: <Users className="w-6 h-6 text-white" />, 
                desc: 'We grow when our partners grow. Supporting local fishing communities is integrated into our business model.' 
              },
              { 
                title: 'Excellence', 
                icon: <Star className="w-6 h-6 text-white" />, 
                desc: 'From the purity of our ice to the efficiency of our logistics, we accept nothing less than industry-leading standards.' 
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-container-low p-10 rounded-xl flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-[#030515] rounded-lg flex items-center justify-center mb-8">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Spotlight */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full aspect-square bg-surface-container-highest rounded-full absolute -top-12 -left-12 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              alt="Marie Garber" 
              className="w-full h-auto rounded-xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="space-y-8">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">FOUNDER & CEO</span>
            <h2 className="text-5xl font-black tracking-tighter text-primary">Marie Garber</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Since founding Ice Me Inc. in 2021, Marie Garber has focused on a singular vision: redefining the cold chain landscape in West Africa through absolute structural reliability.
            </p>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              With a background in heavy-duty logistics and thermal engineering, Marie leads the company with an "Arctic Monolith" philosophy—ensuring that every link in the supply chain is as unbreakable as a solid block of ice.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-black text-primary">50+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-outline">Active Fleet</p>
              </div>
              <div>
                <p className="text-4xl font-black text-primary">99.9%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-outline">Uptime reliability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">Our People</span>
              <h2 className="text-5xl font-black tracking-tighter text-primary">Leadership & Operations</h2>
            </div>
            <Link to="/team" className="group flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-sm">
              View Full Team
              <div className="w-10 h-[2px] bg-primary group-hover:w-16 transition-all"></div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alusine Bangura', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
              { name: 'Sahr Mattia', role: 'Logistics Coordinator', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
              { name: 'Fatmata Koroma', role: 'Finance Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
              { name: 'Ibrahim Sesay', role: 'Fleet Manager', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' }
            ].map((member) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-surface-container-high relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-surface-container-high relative overflow-hidden">
        {/* Wave Pattern Decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50 Q 50 0, 100 50 T 200 50 T 300 50 T 400 50" stroke="currentColor" strokeWidth="20" fill="none" className="text-primary" />
            <path d="M0 100 Q 50 50, 100 100 T 200 100 T 300 100 T 400 100" stroke="currentColor" strokeWidth="20" fill="none" className="text-primary" />
            <path d="M0 150 Q 50 100, 100 150 T 200 150 T 300 150 T 400 150" stroke="currentColor" strokeWidth="20" fill="none" className="text-primary" />
            <path d="M0 200 Q 50 150, 100 200 T 200 200 T 300 200 T 400 200" stroke="currentColor" strokeWidth="20" fill="none" className="text-primary" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-primary mb-8 leading-tight">
              Impacting lives beyond the ice block.
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-16 max-w-2xl">
              We are proud to be a lifeline for the Western Area's maritime economy, currently supporting over <span className="font-bold text-primary border-b-4 border-primary pb-1">500 fishing boats</span> through reliable supply and logistical support.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              <div>
                <p className="text-5xl font-black text-primary mb-2 tracking-tighter">500+</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">Boats Supported</p>
              </div>
              <div>
                <p className="text-5xl font-black text-primary mb-2 tracking-tighter">15+</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">Coastal Hubs</p>
              </div>
              <div>
                <p className="text-5xl font-black text-primary mb-2 tracking-tighter">100%</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">Local Sourcing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
