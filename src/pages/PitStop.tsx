import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowRight, Gauge, Filter } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    title: "How Ceramic Coating Changes the Game",
    category: "Wash Tech",
    date: "MAR 10, 2026",
    author: "Pit Boss",
    images: [
      "/Blog Images/suddy BMW.png",
      "/Blog Images/soaped up exhaust pipe.png",
      "/Blog Images/manual tire spraying.png"
    ]
  },
  {
    id: 2,
    title: "Precision Cleaning: The Under-Body Story",
    category: "Community",
    date: "MAR 05, 2026",
    author: "Admin",
    images: [
      "/Blog Images/Car in the wash.png",
      "/Blog Images/Auto Carwash.png",
      "/Blog Images/Rotational scrubber thing.png"
    ]
  },
  {
    id: 3,
    title: "Battle Against the Elements",
    category: "Maintenance",
    date: "FEB 28, 2026",
    author: "Pit Boss",
    images: [
      "/Blog Images/Dusty _wash me car.png",
      "/Blog Images/Auto Carwash (2).png",
      "/Blog Images/nascar.png"
    ]
  }
];

export const BlogCard = ({ post }: any) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    let interval: any;
    if (isHovered && post.images.length > 1) {
      interval = setInterval(() => {
        setActiveImageIndex((prev) => (prev + 1) % post.images.length);
      }, 1500);
    } else if (!isHovered) {
      setActiveImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, post.images.length]);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass rounded-[32px] overflow-hidden border border-white/10 group h-full flex flex-col"
    >
      <div className="relative h-72 overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImageIndex}
            src={post.images[activeImageIndex]}
            alt={post.title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-6 left-6 bg-racing-blue text-white px-4 py-1 rounded-full font-display font-black text-[10px] uppercase tracking-widest z-10">
          {post.category}
        </div>

        {/* Gallery Indicators */}
        {post.images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {post.images.map((_: any, i: number) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${i === activeImageIndex ? 'w-6 bg-neon-green' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
        <div className="space-y-4">
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
        </div>

        <button className="flex items-center gap-2 font-display font-black text-[10px] uppercase tracking-[0.3em] text-neon-green group-hover:gap-4 transition-all mt-6">
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
          <div className="relative rounded-[40px] overflow-hidden mb-20 aspect-[21/9] flex items-end p-12 group cursor-pointer border border-white/5 shadow-2xl">
            <img
              src="/Blog Images/nascar.png"
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
