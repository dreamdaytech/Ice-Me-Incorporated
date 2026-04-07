import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Team() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-8 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-bold tracking-[0.2em] uppercase text-primary"
            >
              THE ARCTIC MONOLITH
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9]"
            >
              The Faces of the <br/>Cold Chain
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-on-surface-variant max-w-2xl mt-4 leading-relaxed"
            >
              Behind every shipment is a team dedicated to the precision of temperature. We are the architects of the Sierra Leonean logistics infrastructure.
            </motion.p>
          </div>
        </div>
        {/* Decorative Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-container/20 rounded-full blur-[120px]"></div>
      </section>

      {/* CEO Spotlight Section */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,26,56,0.05)]">
                <img 
                  alt="Marie Garber" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT-hd5xHNwsD-8k1wWKo0Pmai-Q8_c6URrQhnJW6GxKODFa-3FGoQe93c_yHN63ZfISiJOh5ePODEE0g9qfWnm4kUT4ab-3Tq1WloouiCVT7nbx-Kng2e6W34YXE-QrmJj7HfI5dhzGbrb8b3eedqGt2PzVZy_jvvrCZsdVgQDoe3cL3Az8bkASBr7IAdv9zBlFxErNvcEivWm8rR2-wu-bYuAfrngbI-zKkjpqu93DX8k74KxX31f_etTyDk6EHhm-8Di-84n0r9c"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-on-primary p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
                <span className="block text-3xl font-black italic leading-tight">"Precision is our only currency."</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold tracking-widest text-primary uppercase">FOUNDER & CEO</span>
                <h2 className="text-5xl font-black text-primary tracking-tight">Marie Garber</h2>
              </div>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Since founding Ice Me Inc. in 2021, Marie Garber has focused on a singular vision: redefining the cold chain landscape in West Africa through absolute structural reliability.
                </p>
                <p>
                  With a background in heavy-duty logistics and thermal engineering, Marie leads the company with an "Arctic Monolith" philosophy—ensuring that every link in the supply chain is as unbreakable as a solid block of ice. Her leadership has transformed Ice Me from a local startup into a regional powerhouse.
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-4 bg-secondary-container px-6 py-3 rounded-full text-on-secondary-container font-bold text-sm">
                    <ShieldCheck className="w-5 h-5" />
                    CHAMPIONING THERMAL EXCELLENCE SINCE 2021
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-primary tracking-tight mb-4">Leadership & Operations</h2>
              <p className="text-on-surface-variant">Our departments are led by specialists who understand that in the cold chain, there is no margin for error.</p>
            </div>
            <div className="flex gap-4">
              <div className="h-1 w-24 bg-primary"></div>
              <div className="h-1 w-12 bg-outline-variant"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'MANAGEMENT',
                role: 'Operations Manager',
                desc: 'Overseeing the daily synchronization of our fleet and facility operations.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASyyJko6IujiuRi3w4c6ku955lI8DhGRAM0yhwJ-lJSPRtxwRuFBfq8Zmw_6vdPfeCHAykn2e0_83HvxJpOw9WirhkXE7LHXqZ5nVatYmHT3uMdssgK2AnnoMqmAUEGQwP_U7T1g168kF36mRBi5NFc17Y4zd_K0Uu_LsgnYbFVYFiNY9Q_GskiDTaCEQhZrkhem1tLHQMxFU7h0_3H44DU8mhjPS3pzXsclVkmLii5OLUaPtGdFlgtcszLRH1p2DK0qFdecHiczRr'
              },
              {
                category: 'DISTRIBUTION',
                role: 'Logistics Lead',
                desc: 'Mastering the complex routes and timing of our refrigerated transport network.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9QoOlA47cw1xmGBzr0MZcRcs2KenhJm2r0QzgqI-zCGNywqKNT1r0UaVtYWBI7ZkYxpy0HQLaJB_Q4MiDdvDHv-hTc3GHrhldAI1GC-AlNSeilg4gSg7vQhlqmwfmWEDyxL9CLvTNSWSNA6z-6YtwvN9vFCIYW24k1jaFyERXe64sg-awOjcMukXi0pFTyKOsMYVdqHPCd9w1m7eN3pRoq1DCEfDw0u9sDPDnu_E2hafEaM54Pkc_mQNTRYfYu1cksNvyY_3vv5Va'
              },
              {
                category: 'INFRASTRUCTURE',
                role: 'Facility Supervisor',
                desc: 'Ensuring our cold storage environments maintain perfect equilibrium 24/7.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1hiKsrYQPBrUi26_DPGYFTI1VLuxP6DdGVhbZeXtWNAC8VVQNlx3_C5P3G1lr9HEpxB2ef6Kxw2fYaI-miXpTlqjJms4wWk9BdmkFLqiyEtxUJUT2rqVwVLzbEQwhOzq1vU2XGH5Mq2dIHV64F3nFm4ATgQkIspWN0RvmheKntZmSX6nn0Jss4keynNc8M8Ycfu_qEUep1hEzsARp9RZKzzridsbZuOo6HKwGpCWEjLdhEtO1GJv7qqnDDsRgsDzvJq6oOzl4afWc'
              }
            ].map((member, idx) => (
              <motion.div 
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-surface-container-lowest rounded-xl p-8 hover:bg-primary transition-all duration-500 shadow-[0_4px_20px_rgba(0,26,56,0.02)] border border-outline-variant/10"
              >
                <div className="w-full aspect-square bg-surface-container mb-8 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img 
                    src={member.img} 
                    alt={member.role} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase group-hover:text-primary-container mb-2 block transition-colors">
                  {member.category}
                </span>
                <h3 className="text-2xl font-black text-primary group-hover:text-white mb-1 transition-colors">
                  {member.role}
                </h3>
                <p className="text-on-surface-variant group-hover:text-white/70 text-sm transition-colors">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Ready to join the <br/>monolith?</h2>
          <p className="text-on-primary-container text-lg md:text-xl max-w-2xl leading-relaxed">
            We are always looking for precision-driven individuals to join our expanding cold chain network. Start your journey with Ice Me Incorporated today.
          </p>
          <button className="mt-4 bg-white text-primary px-10 py-5 rounded-md font-black text-lg tracking-tight hover:bg-secondary-container transition-colors">
            Join Our Team
          </button>
        </div>
      </section>
    </div>
  );
}
