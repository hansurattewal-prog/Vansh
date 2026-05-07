import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-gradient-to-t from-black/80 to-transparent">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(45deg,#00D1FF 1px,transparent 1px),linear-gradient(-45deg,#00D1FF 1px,transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mono text-cyber-blue mb-4">Advanced Robotics Division</div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
              Engineered<br />
              For The <span className="text-cyber-blue text-glow">Future</span>
            </h1>
            
            <p className="text-gray-400 max-w-md text-base md:text-lg mb-8 leading-relaxed font-medium">
              Deploying industrial-grade precision through carbon-fiber frameworks and low-latency neural controllers.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <button className="px-8 py-3 bg-cyber-blue text-black font-extrabold uppercase text-xs tracking-widest shadow-cyber hover:brightness-110 transition-all">
                View Core Catalogue
              </button>
              <div className="flex items-center gap-4">
                <div className="mono text-[9px] text-gray-500">COORD: 34.0522° N, 118.2437° W</div>
                <div className="w-16 h-[1px] bg-gray-800"></div>
              </div>
            </div>
          </motion.div>

          {/* Featured Unit Sidebar Style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block cyber-border panel-bg p-6 relative"
          >
            <div className="flex justify-between items-center border-b border-cyber-border pb-3 mb-6">
              <span className="mono text-[10px] font-bold">Primary Core Unit</span>
              <span className="text-cyber-blue text-[10px] mono">Operational</span>
            </div>
            
            <div className="aspect-square bg-black/40 border border-cyber-border p-4 mb-6 group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Main Unit"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-cyber-border pb-2">
                <div>
                  <div className="text-[10px] text-gray-500 mono">Model</div>
                  <div className="text-xs font-bold uppercase">AX-105 Torque Motor</div>
                </div>
                <span className="text-cyber-blue font-bold">$249.00</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[9px] text-gray-500 mono">Throughput</div>
                  <div className="text-[10px] font-bold">4.5Nm / 48VDC</div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-500 mono">Enclosure</div>
                  <div className="text-[10px] font-bold">IP67 Rated</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-blue shadow-cyber"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
