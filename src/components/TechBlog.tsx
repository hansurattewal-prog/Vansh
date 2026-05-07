import { motion } from 'motion/react';
import { Cpu, Terminal, FileCode, Wrench } from 'lucide-react';

const TechBlog = () => {
  const posts = [
    {
      title: "Optimizing Servo Latency in High-Speed Assemblies",
      category: "Build Guide",
      icon: <Wrench size={24} />,
      readTime: "8 min read"
    },
    {
      title: "Communicating with Neural Processors via API v2.1",
      category: "Documentation",
      icon: <FileCode size={24} />,
      readTime: "12 min read"
    },
    {
      title: "Thermal Management in Compact Robotic Frameworks",
      category: "Engineering",
      icon: <Cpu size={24} />,
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-cyber-gray/20 relative border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="text-cyber-blue mono mb-4 leading-none">Knowledge Base // Archives</div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Build Guides & Docs</h2>
          </div>
          <div className="h-[1px] flex-grow mx-8 bg-cyber-border hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 cyber-border">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 hover:bg-white/[0.02] transition-all group cursor-pointer relative ${
                idx !== posts.length - 1 ? 'md:border-r border-cyber-border border-b md:border-b-0' : 'border-b md:border-b-0'
              }`}
            >
              <div className="text-[10px] text-cyber-blue mono mb-2">Manual 0{idx + 1}</div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4 group-hover:text-cyber-blue transition-all leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-8">
                Detailed analysis and optimization protocols for advanced {post.category.toLowerCase()} integration.
              </p>
              
              <div className="flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest mono">
                <span>{post.readTime}</span>
                <span className="group-hover:text-cyber-blue group-hover:translate-x-1 transition-all">Protocol Enforced →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechBlog;
