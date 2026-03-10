import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Droplets, Zap, Search } from 'lucide-react';

export const galleryItems = [
  {
    id: 1,
    dirty: "https://images.unsplash.com/photo-1507136566006-bb71ef586eaa?auto=format&fit=crop&q=80&w=800",
    clean: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
    title: "The Deep Clean",
    category: "Tunnel"
  },
  {
    id: 2,
    dirty: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800",
    clean: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800",
    title: "Ceramic Glow",
    category: "Finish"
  },
  {
    id: 3,
    dirty: "https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800",
    clean: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=800",
    title: "High-Tech Bays",
    category: "Equipment"
  },
  {
    id: 4,
    dirty: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    clean: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    title: "Showroom Ready",
    category: "Finish"
  },
  {
    id: 5,
    dirty: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
    clean: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800",
    title: "Wheel Brightener",
    category: "Detail"
  },
  {
    id: 6,
    dirty: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800",
    clean: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    title: "The Final Lap",
    category: "Tunnel"
  }
];

export const GalleryItem = ({ item }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative group overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={item.dirty} 
        alt="Dirty Car"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: isHovered ? 0 : 1 }}
        referrerPolicy="no-referrer"
      />
      <img 
        src={item.clean} 
        alt="Clean Car"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: isHovered ? 1 : 0 }}
        referrerPolicy="no-referrer"
      />
      
      {/* Wipe Effect Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8"
      >
        <div className="flex items-center gap-2 text-neon-green mb-2">
          <Sparkles size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">{item.category}</span>
        </div>
        <h4 className="font-display font-black text-2xl italic uppercase tracking-tighter text-white">{item.title}</h4>
      </motion.div>

      {/* Wipe Line Animation */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ left: '-150%', skewX: -25 }}
            animate={{ left: '250%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-y-0 w-24 bg-white pointer-events-none z-30 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Tunnel', 'Finish', 'Equipment', 'Detail'];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-20 bg-deep-black">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <h2 className="font-display font-black text-5xl md:text-7xl italic uppercase tracking-tighter mb-4">
                THE <span className="text-neon-green">SHOWROOM</span>
              </h2>
              <p className="text-white/50 font-bold uppercase tracking-widest">Hover to see the magic happen.</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full font-display font-black text-[10px] uppercase tracking-widest transition-all ${
                    filter === cat ? 'bg-neon-green text-black' : 'glass text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map(item => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
