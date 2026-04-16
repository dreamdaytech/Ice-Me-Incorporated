import { motion } from 'motion/react';
import { ShieldCheck, Zap, Globe, Cpu, Clock, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Services" 
        description="Explore Ice Me Inc.'s services, including industrial crushed ice for fisheries, premium cube ice for hospitality, and 250MT cold storage solutions."
      />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/images/Our Expertise.jpg"
            alt="Ice textures"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <span className="text-[#001A38] font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4 block">Our Expertise</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-md font-black text-[#001A38] tracking-tighter max-w-3xl leading-tight">
            Pioneering the Cold Chain.
          </h1>
          <p className="mt-6 sm:mt-8 text-[#43474F] text-base sm:text-lg md:text-xl max-w-xl font-medium leading-relaxed">
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
                src="/images/fishing-boat.jpeg"
                alt="Fishing boat"
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
            <h2 className="text-4xl font-black text-primary tracking-tight mb-6">Industrial Crushed Ice Production</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              We produce high-quality crushed ice specifically designed for preserving fresh catch. Supplying over 500 artisanal fishing boats across the Western Area, our ice ensures that fish reach the shore in peak condition, reducing spoilage and maximizing profits for fishermen.
            </p>
            <ul className="space-y-4">
              {['Bulk delivery directly to port-side vessels', 'Specially formulated for slow-melt endurance'].map((li) => (
                <li key={li} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
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
              Tailored for the hospitality industry, our premium cube ice is perfect for hotels, restaurants, pubs, and households. It offers a clean, slow-melting solution ideal for beverages and food presentation, ensuring that Freetown's hospitality sector never runs out of stock.
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
                src="/images/Premium Cube Ice.jpg"
                alt="Luxury cocktail"
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
              <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-8">Cold Room Storage (250 Metric Tonnes Capacity)</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md">
                Our facility features two distinct cold rooms with a combined capacity of 250 metric tonnes. Designed for frozen fish storage and distribution, these modern rooms provide a safe haven for smoked fish and other essential food products, enabling exporters and vendors to store goods securely without fear of power outages or spoilage.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck className="w-8 h-8" />, title: '24/7 Monitoring', desc: 'Real-time temperature tracking and redundancy systems.' },
                  { icon: <Cpu className="w-8 h-8" />, title: 'High Capacity', desc: 'Managed 250MT storage with palletized accessibility.' }
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
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
                src="/images/Cold Room Storage.jpg"
                alt="Warehouse"
              />
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold mb-6">
            🚚 LOGISTICS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight mb-8">Refrigerated Logistics & Distribution</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-16">
            We operate a dedicated fleet of 3 delivery trucks and 3 frozen tricycles, allowing us to handle bulk distribution and navigate the streets of Freetown with ease. Whether delivering hundreds of bags of ice to the shoreline or restocking a hotel downtown, our logistics team ensures timely delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-2xl bg-surface-container-highest">
              <div className="aspect-video">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/Primary Fleet.jpg"
                  alt="Primary fleet"
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
                  src="/images/Agile Tricycles.jpg"
                  alt="Agile tricycles"
                />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-bold text-primary mb-2">Agile Tricycles</h3>
                <p className="text-on-surface-variant">Custom-built cold-box tricycles for rapid urban delivery and navigating tight community markets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-surface-container-lowest rounded-3xl border border-outline-variant/20">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-4">Why Choose Us</h2>
              <p className="text-on-surface-variant text-lg">The Ice Me Inc. advantage in cold chain excellence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  icon: <Clock className="w-8 h-8 text-primary" />,
                  title: "24/7 Operations",
                  desc: "Our facility never sleeps, ensuring ice is available when the tide turns or the party starts. We operate around the clock to meet your urgent needs."
                },
                {
                  icon: <Zap className="w-8 h-8 text-primary" />,
                  title: "N+1 Redundancy",
                  desc: "Multiple cooling systems and industrial-grade backup power ensure your goods stay frozen, even during national grid outages."
                },
                {
                  icon: <Globe className="w-8 h-8 text-primary" />,
                  title: "Local Expertise",
                  desc: "Deeply rooted in Sierra Leone, we understand the unique logistical challenges of Freetown's maritime and urban landscapes."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                  title: "Certified Purity",
                  desc: "Every block and cube is produced using triple-filtered water, meeting international food safety standards for your peace of mind."
                }
              ].map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
