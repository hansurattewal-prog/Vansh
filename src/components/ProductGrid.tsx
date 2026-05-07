import { motion } from 'motion/react';
import { ShoppingCart, Plus, Zap, Box, Settings } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Neural Processor X1",
    category: "Controllers",
    price: "$499.00",
    specs: "8-Core 4.2GHz / 16GB VRAM",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Titan Servo Motor",
    category: "Motors",
    price: "$275.00",
    specs: "150Nm Torque / IP68 Rated",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "LiDAR Ultra Scan",
    category: "Sensors",
    price: "$890.00",
    specs: "360° FOV / 100m Range",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Hex-Frame Chassis",
    category: "Frameworks",
    price: "$1,200.00",
    specs: "Carbon Fiber / Modular Rails",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=600"
  }
];

const categories = [
  { name: 'Sensors', icon: <Zap size={20} />, count: '24 Items' },
  { name: 'Motors', icon: <Settings size={20} />, count: '12 Items' },
  { name: 'Controllers', icon: <Box size={20} />, count: '08 Items' },
  { name: 'Frameworks', icon: <Plus size={20} />, count: '15 Items' },
];

const ProductGrid = () => {
  return (
    <section id="shop" className="py-24 bg-cyber-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="text-cyber-blue font-mono text-xs uppercase tracking-[0.4em] mb-3">Inventory System</div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Precision Components</h2>
          </div>
          
          <div className="flex gap-1">
            {['Sensors', 'Motors', 'Controllers', 'Frameworks'].map((name) => (
              <button 
                key={name}
                className="px-4 py-2 mono text-[10px] cyber-border panel-bg hover:text-cyber-blue transition-all"
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="panel-bg cyber-border p-4 group relative hover:border-cyber-blue/30 transition-all flex flex-col"
            >
              <div className="relative aspect-square mb-6 bg-black/40 border border-cyber-border overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-cyber-blue shadow-cyber opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-sm font-extrabold uppercase mb-2 group-hover:text-cyber-blue transition-colors">
                  {product.name}
                </h3>
                <div className="mono text-[9px] text-gray-500 mb-6 flex-grow">
                  {product.specs}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-cyber-border">
                  <span className="text-cyber-blue font-bold tracking-tight">
                    {product.price}
                  </span>
                  <button className="flex items-center gap-2 group/btn">
                    <span className="mono text-[9px] opacity-0 group-hover/btn:opacity-100 transition-opacity">Add To Core</span>
                    <div className="w-8 h-8 flex items-center justify-center bg-transparent border border-cyber-border group-hover/btn:border-cyber-blue transition-all">
                      <Plus size={14} className="group-hover/btn:text-cyber-blue" />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="btn-outline px-12 py-3 font-bold text-xs tracking-widest hover:shadow-cyber transition-all">
            Access Full Database
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
