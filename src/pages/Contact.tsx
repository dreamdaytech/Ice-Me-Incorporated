import { motion } from 'motion/react';
import { Send, Share2, Globe, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <section className="max-w-7xl mx-auto px-8 py-24 w-full">
        <div className="flex flex-col md:flex-row items-end gap-8 mb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary max-w-2xl leading-[0.9]">
            CHILL<br/>CONNECT.
          </h1>
          <p className="text-on-surface-variant text-lg font-medium max-w-sm mb-4">
            The Monolith of Cold Logistics in Sierra Leone. Reach out to our frozen infrastructure experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Contact Info */}
          <div className="md:col-span-5 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-bold tracking-[0.05em] uppercase text-on-secondary-container bg-secondary-container px-3 py-1 rounded-full mb-8 inline-block">
                Direct Line
              </span>
              <div className="space-y-12">
                <div>
                  <label className="text-xs font-bold tracking-[0.05em] uppercase text-outline block mb-2">Location</label>
                  <p className="text-xl font-bold text-primary">
                    14 Lumley Beach Road,<br/>Freetown, Sierra Leone<br/>
                    <span className="text-on-surface-variant font-medium text-sm">(Opposite bus station)</span>
                  </p>
                </div>
                <div>
                  <label className="text-xs font-bold tracking-[0.05em] uppercase text-outline block mb-2">Phone</label>
                  <p className="text-xl font-bold text-primary">+232 77 612 425</p>
                </div>
                <div>
                  <label className="text-xs font-bold tracking-[0.05em] uppercase text-outline block mb-2">Email</label>
                  <p className="text-xl font-bold text-primary">info@iceme.sl</p>
                </div>
              </div>
            </div>
            <div className="mt-16 flex gap-4">
              <button className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 bg-surface-container-low p-10 rounded-xl">
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold tracking-[0.05em] uppercase text-on-surface-variant ml-1">Name</label>
                  <input 
                    className="w-full bg-surface-container-high border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold tracking-[0.05em] uppercase text-on-surface-variant ml-1">Email</label>
                  <input 
                    className="w-full bg-surface-container-high border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="john@example.sl" 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold tracking-[0.05em] uppercase text-on-surface-variant ml-1">Subject</label>
                <input 
                  className="w-full bg-surface-container-high border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="Cold Chain Inquiry" 
                  type="text"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold tracking-[0.05em] uppercase text-on-surface-variant ml-1">Message</label>
                <textarea 
                  className="w-full bg-surface-container-high border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none" 
                  placeholder="Tell us about your logistics needs..." 
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary font-bold py-5 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />
                Submit Request
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="md:col-span-12 bg-surface-container-highest h-[400px] rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')" }}></div>
            <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]"></div>
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-primary">Headquarters</span>
              </div>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                Find us directly opposite the main bus station for efficient loading and coordination.
              </p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl scale-110">
                <MapPin className="w-8 h-8 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-black tracking-tighter text-primary mb-6">UNSHAKABLE RELIABILITY.</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-10">From the coast to the heart of the city, Ice Me Incorporated ensures your temperature-sensitive assets remain pristine.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-md font-bold hover:opacity-80 transition-opacity">Call Dispatch</button>
            <button className="bg-primary text-on-primary px-10 py-4 rounded-md font-bold hover:opacity-80 transition-opacity">View Fleet</button>
          </div>
        </div>
      </section>
    </div>
  );
}
