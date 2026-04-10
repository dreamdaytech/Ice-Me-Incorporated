import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, Map as MapIcon } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-surface">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Ice Me Inc. for reliable ice delivery, cold storage inquiries, or logistics partnerships in Sierra Leone."
      />
      {/* Contact Header */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-[0.05em] uppercase text-on-surface-variant mb-4 block">Connect with our cold chain</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary leading-[0.9]">
              CHILL<br/>CONNECT.
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-on-surface-variant text-lg leading-relaxed">
              The Monolith of Cold Logistics in Sierra Leone. Reach out to our frozen infrastructure experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Information & Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Information Cards */}
            <div className="bg-surface-container-low p-8 space-y-8 rounded-xl">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center text-on-primary shrink-0 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-1">Email</p>
                    <p className="text-xl font-bold text-primary">info@iceme.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center text-on-primary shrink-0 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-1">Telephone</p>
                    <p className="text-xl font-bold text-primary">+23277612425</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center text-on-primary shrink-0 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-1">Address</p>
                    <p className="text-lg font-bold text-primary leading-tight">14 Lumley Beach Road, Freetown, Sierra Leone</p>
                    <p className="text-sm text-on-surface-variant mt-1 font-medium">(Opposite bus station)</p>
                  </div>
                </div>
              </div>
              
              {/* Operating Hours */}
              <div className="pt-8 border-t border-outline-variant/30">
                <div className="flex items-center gap-3 text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <h3 className="font-bold text-lg">Operating Hours</h3>
                </div>
                <p className="mt-2 text-on-surface-variant font-medium">Round-the-clock operations for consistent ice supply, every day of the year.</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative group overflow-hidden bg-surface-container-highest aspect-video rounded-xl flex items-center justify-center">
              <img 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 transition-transform duration-700 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
                alt="Freetown Map"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 text-center p-6 bg-white/80 backdrop-blur-md shadow-xl border border-white/20 rounded-lg">
                <MapIcon className="w-10 h-10 text-primary mx-auto mb-2" />
                <p className="font-bold text-primary">14 Lumley Beach Road</p>
                <a className="text-xs uppercase tracking-widest font-bold text-primary mt-2 block hover:underline" href="#">Open in Google Maps</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#030515] p-8 md:p-12 text-white rounded-xl">
              <h2 className="text-3xl font-bold mb-8 tracking-tight text-white">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-70">Name</label>
                    <input 
                      className="w-full bg-white/5 border-0 border-b-2 border-white/10 focus:border-white focus:ring-0 text-white py-4 px-0 transition-colors placeholder:text-white/20 outline-none" 
                      placeholder="Your Full Name" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-70">Email Address</label>
                    <input 
                      className="w-full bg-white/5 border-0 border-b-2 border-white/10 focus:border-white focus:ring-0 text-white py-4 px-0 transition-colors placeholder:text-white/20 outline-none" 
                      placeholder="email@example.com" 
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-70">Subject</label>
                  <input 
                    className="w-full bg-white/5 border-0 border-b-2 border-white/10 focus:border-white focus:ring-0 text-white py-4 px-0 transition-colors placeholder:text-white/20 outline-none" 
                    placeholder="Inquiry Type" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-70">Message</label>
                  <textarea 
                    className="w-full bg-white/5 border-0 border-b-2 border-white/10 focus:border-white focus:ring-0 text-white py-4 px-0 transition-colors placeholder:text-white/20 outline-none resize-none" 
                    placeholder="How can we help your business stay cool?" 
                    rows={5}
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button className="w-full md:w-auto px-10 py-5 bg-white text-[#001a38] font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-3 group rounded-md">
                    Send Message
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>

            {/* Visual Accent Card */}
            <div className="mt-8 relative overflow-hidden bg-surface-container h-48 md:h-64 rounded-xl">
              <img 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-20" 
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1000" 
                alt="Ice blocks"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <p className="text-primary text-2xl md:text-3xl font-bold text-center italic tracking-tight opacity-80">
                  "Sierra Leone's most reliable cold chain."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unshakable Reliability Section */}
      <section className="bg-surface-container-low py-24 w-full">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-6 uppercase">
            UNSHAKABLE RELIABILITY.
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10 font-medium">
            From the coast to the heart of the city, Ice Me Incorporated ensures your temperature-sensitive assets remain pristine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#cce9f5] text-primary px-10 py-4 rounded-md font-bold hover:opacity-80 transition-opacity">
              Call Dispatch
            </button>
            <button className="bg-primary text-white px-10 py-4 rounded-md font-bold hover:opacity-80 transition-opacity">
              View Fleet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
