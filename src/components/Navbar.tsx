import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Cpu, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-cyber-gray/90 backdrop-blur-md border-cyber-border py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-6 group cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-cyber-blue shadow-cyber"></div>
            <span className="font-sans font-black text-xl tracking-tighter uppercase">
              Robo<span className="text-cyber-blue">Vansh</span>
            </span>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] mono">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white/60 hover:text-cyber-blue transition-all hover:text-glow"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:block mono text-[10px] text-gray-500">Status: //System_Online</div>
          <button className="flex items-center gap-2 bg-transparent border border-cyber-blue text-cyber-blue px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-cyber-blue/10 transition-all shadow-cyber">
            <ShoppingCart size={14} />
            <span>Store</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-gray border-b border-cyber-blue/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="font-mono text-lg uppercase tracking-wider text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full flex items-center justify-between bg-cyber-blue text-cyber-black px-6 py-4 font-bold uppercase tracking-tighter skew-x-[-4deg]">
                <span className="skew-x-[4deg]">Checkout</span>
                <ChevronRight className="skew-x-[4deg]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
