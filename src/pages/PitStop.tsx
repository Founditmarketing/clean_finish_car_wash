import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Gauge, Filter } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    title: "How Ceramic Coating Changes the Game",
    category: "Wash Tech",
    date: "MAR 10, 2026",
    author: "Pit Boss",
    image: "/Images/Clean_lambo.jpg"
  },
  {
    id: 2,
    title: "Supporting Pineville's Finest",
    category: "Community",
    date: "MAR 05, 2026",
    author: "Admin",
    image: "/Images/employeeIthink-7.jpg"
  },
  {
    id: 3,
    title: "Spring Maintenance: Beat the Pollen",
    category: "Maintenance",
    date: "FEB 28, 2026",
    author: "Pit Boss",
    image: "/Images/Hoses.jpg.webp"
  },
  {
    id: 4,
    title: "The Science of High-Pressure Water",
    category: "Wash Tech",
    date: "FEB 20, 2026",
    author: "Tech Team",
    image: "/Images/unnamed-9.jpg"
  }
];

export const BlogCard = ({ post }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass rounded-[32px] overflow-hidden border border-white/10 group h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6 bg-racing-blue text-white px-4 py-1 rounded-full font-display font-black text-[10px] uppercase tracking-widest">
          {post.category}
        </div>

        {/* Speedometer Hover Effect */}
        <div className={`absolute bottom-6 right-6 w-16 h-16 glass rounded-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="relative w-10 h-10 border-2 border-neon-green rounded-full border-b-transparent">
            <motion.div
              className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-neon-green origin-bottom -translate-x-1/2 -translate-y-full"
              initial={{ rotate: -120 }}
              animate={isHovered ? { rotate: 120 } : { rotate: -120 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      <div className="p-8 space-y-4">
        <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/40">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-racing-blue" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <User size={14} className="text-neon-green" />
            {post.author}
          </div>
        </div>

        <h3 className="font-display font-black text-2xl uppercase italic tracking-tighter leading-tight group-hover:text-racing-blue transition-colors">
          {post.title}
        </h3>

        <button className="flex items-center gap-2 font-display font-black text-[10px] uppercase tracking-[0.3em] text-neon-green group-hover:gap-4 transition-all">
          Read Full Lap <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};

export const PitStop = () => {
  const categories = ["All", "Maintenance", "Community", "Wash Tech"];

  return (
    <div className="pt-20 bg-deep-black">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 checkered-bg opacity-10" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Hero */}
          <div className="relative rounded-[40px] overflow-hidden mb-20 aspect-[21/9] flex items-end p-12 group cursor-pointer">
            <img
              src="/Images/The_washing_place_at_night.jpg.webp"
              alt="Featured Post"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-racing-blue text-white px-4 py-1 rounded-full font-display font-black text-[10px] uppercase tracking-widest">
                  FEATURED LAP
                </div>
                <div className="text-white/50 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Gauge size={14} className="text-neon-green" />
                  5 MIN READ
                </div>
              </div>
              <h2 className="font-display font-black text-4xl md:text-6xl italic uppercase tracking-tighter leading-none">
                THE FUTURE OF <br />
                <span className="text-racing-blue">WATER</span> <span className="text-neon-green">RECLAMATION</span>
              </h2>
              <p className="text-white/70 text-lg">How Clean Finish is leading the way in eco-friendly washing in Pineville.</p>
              <button className="bg-white text-black px-10 py-4 rounded-xl font-display font-black uppercase tracking-widest flex items-center gap-3 border border-racing-blue/30">
                Read Article <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div>
              <h2 className="font-display font-black text-5xl italic uppercase tracking-tighter mb-4">
                THE <span className="text-racing-blue">PIT</span> <span className="text-neon-green">STOP</span>
              </h2>
              <p className="text-white/50 font-bold uppercase tracking-widest">Latest news from the garage.</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-6 py-2 rounded-full font-display font-black text-[10px] uppercase tracking-widest transition-all ${cat === 'All'
                    ? 'bg-racing-blue text-white'
                    : i % 2 === 0
                      ? 'glass text-white hover:bg-neon-green/10 border border-neon-green/20'
                      : 'glass text-white hover:bg-racing-blue/10 border border-racing-blue/20'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}

            {/* Empty Card Template for Future Posts */}
            <div className="glass rounded-[32px] border border-dashed border-white/20 flex flex-col items-center justify-center p-12 text-center space-y-4 opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
                <ArrowRight className="text-white/20" size={32} />
              </div>
              <h4 className="font-display font-black text-xl uppercase italic">Next Lap Coming Soon</h4>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Stay tuned for more high-octane content.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
