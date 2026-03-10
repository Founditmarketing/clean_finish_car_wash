import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Droplets, Zap, Search } from 'lucide-react';

export const galleryItems = [
  { id: 1, image: "/Images/TheCarWash.jpg", title: "The Ultimate Facility", category: "Facility" },
  { id: 2, image: "/Images/Clean_lambo.jpg", title: "Ceramic Shine", category: "Finish" },
  { id: 3, image: "/Images/TruckInTheWash.jpg", title: "Heavy Duty Rinse", category: "Tunnel" },
  { id: 4, image: "/Images/WetTruck.jpg", title: "Deep Gloss Finish", category: "Finish" },
  { id: 5, image: "/Images/inside_the_scrubbers.jpg", title: "Precision Cleaning", category: "Tunnel" },
  { id: 6, image: "/Images/The_washing_place_at_night.jpg.webp", title: "Midnight Polish", category: "Facility" },
  { id: 11, image: "/Images/Photo Feb 05, 9 13 06 AM.jpg", title: "Morning Prep", category: "Facility" },
  { id: 12, image: "/Images/PickYourCarWash.jpg.webp", title: "The Choice Is Yours", category: "Facility" },
  { id: 13, image: "/Images/unnamed-9.jpg", title: "Gleaming Results", category: "Finish" },
  { id: 14, image: "/Images/CeramicGlossRedesign.png", title: "Ceramic Protection", category: "Finish" },
  { id: 15, image: "/Images/Hoses.jpg.webp", title: "High Pressure Systems", category: "Equipment" },
  { id: 21, image: "/Images/TheCarWash.jpg", title: "Pineville's Pride", category: "Facility" },
  { id: 22, image: "/Images/Clean_lambo.jpg", title: "Elite Shield", category: "Finish" },
  { id: 23, image: "/Images/TruckInTheWash.jpg", title: "Mega Clean", category: "Tunnel" }
];

export const GalleryItem = ({ item }: any) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.02 }}
      className="btn-glint relative group overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-xl shadow-black/20"
    >
      <motion.img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />

      {/* Light Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-racing-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Wipe Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8"
      >
        <div className="flex items-center gap-2 text-neon-green mb-2">
          <Sparkles size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">{item.category}</span>
        </div>
        <h4 className="font-display font-black text-2xl italic uppercase tracking-tighter text-white">{item.title}</h4>
      </motion.div>
    </motion.div>
  );
};

export const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Tunnel', 'Finish', 'Equipment', 'Facility'];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-20 bg-deep-black">
      <section className="py-20 md:py-32">
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
                  className={`px-6 py-2 rounded-full font-display font-black text-[10px] uppercase tracking-widest transition-all ${filter === cat ? 'bg-neon-green text-black' : 'glass text-white hover:bg-white/10'
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
