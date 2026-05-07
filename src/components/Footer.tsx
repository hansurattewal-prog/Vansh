import { motion } from 'motion/react';
import { BookOpen, Github, Twitter, Linkedin, MapPin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-cyber-black border-t border-cyber-border pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 bg-cyber-blue shadow-cyber"></div>
            <span className="font-sans font-black text-lg tracking-tighter uppercase">
              Robo<span className="text-cyber-blue">Vansh</span>
            </span>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed mb-8 max-w-xs">
            Deploying industrial-grade precision through carbon-fiber frameworks and low-latency neural controllers across all sectors.
          </p>
          <div className="flex gap-3">
            {[Twitter, Github, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="w-8 h-8 cyber-border panel-bg flex items-center justify-center hover:text-cyber-blue hover:shadow-cyber transition-all">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mono font-bold text-cyber-blue mb-8">Navigation</h4>
          <ul className="space-y-4">
            {['Shop Categories', 'Build Guides', 'Hardware Docs', 'Project Gallery', 'Support Portal'].map((item) => (
              <li key={item}>
                <a href="#" className="text-xs text-gray-400 hover:text-cyber-blue transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-[1px] bg-cyber-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mono font-bold text-cyber-blue mb-8">HQ Link</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin size={16} className="text-cyber-blue shrink-0" />
              <span className="text-xs text-gray-400">NEO-TOKYO SECTOR 7 // CYBER DISTRICT 071</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={16} className="text-cyber-blue shrink-0" />
              <span className="text-xs text-gray-400">protocol@robovansh.tech</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mono font-bold text-cyber-blue mb-8">Newsletter</h4>
          <p className="text-xs text-gray-500 mb-6 italic">Secure your connection to our update nodes.</p>
          <div className="flex bg-cyber-gray border border-cyber-border p-1 focus-within:border-cyber-blue transition-all">
            <input 
              type="email" 
              placeholder="OPERATOR_EMAIL" 
              className="bg-transparent border-none focus:outline-none px-4 py-2 text-[10px] w-full mono text-white"
            />
            <button className="bg-cyber-blue text-black p-2 hover:brightness-110 transition-all shadow-cyber">
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-cyber-border flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
        <div className="mono text-[9px] text-gray-500 flex flex-wrap justify-center gap-6">
          <span>© {currentYear} NEURALCORE INDUSTRIES // ROBOVANSH</span>
          <span>TERMS // DATA_ENCRYPTION</span>
          <span>CONTACT: TECH@NEURALCORE.IO</span>
        </div>
        
        <div className="mono font-bold text-[10px]">
          Designed by <span className="text-cyber-blue hover:text-glow cursor-pointer transition-all">Vansh</span>
        </div>
      </div>
    </footer>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7"/>
  </svg>
);

export default Footer;
