import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowRight, Gauge, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const blogPosts = [
  {
    id: 1,
    title: "How Ceramic Coating Changes the Game",
    category: "Wash Tech",
    date: "MAR 10, 2026",
    author: "Pit Boss",
    images: ["/Blog Images/suddy BMW.png", "/Blog Images/manual tire spraying.png", "/Blog Images/soaped up exhaust pipe.png"],
    sections: [
      {
        text: "Ceramic coating isn't just a wax; it's a chemical evolution for your vehicle's surface. Unlike traditional polymers, our Nano-Ceramic technology creates a permanent or semi-permanent bond with the clear coat, forming an impenetrable barrier against environmental contaminants.",
        image: "/Blog Images/manual tire spraying.png"
      },
      {
        text: "From UV protection to extreme hydrophobicity, the benefits are immediate. Water beads off at angles as low as 10 degrees, taking dirt and road grime with it. This 'self-cleaning' property means your car stays cleaner for significantly longer between professional washes.",
        image: "/Blog Images/soaped up exhaust pipe.png"
      },
      {
        text: "In this detailed look, we explore the molecular structure of our Formula-X coating and why Pineville's climate makes it an essential investment for any luxury or performance vehicle."
      }
    ]
  },
  {
    id: 2,
    title: "Precision Cleaning: The Under-Body Story",
    category: "Community",
    date: "MAR 05, 2026",
    author: "Admin",
    images: ["/Blog Images/Car in the wash.png", "/Blog Images/Auto Carwash.png", "/Blog Images/Rotational scrubber thing.png"],
    sections: [
      {
        text: "Most drivers focus on what they can see, but the real silent killer of a vehicle's longevity lies beneath. Louisiana's humidity and occasional road salts can lead to rapid oxidation on frame components and suspension links.",
        image: "/Blog Images/Auto Carwash.png"
      },
      {
        text: "Our G-Force Underbody Flush isn't a standard spray. Using 360-degree high-pressure oscillators, we reach into the tightest crevices of your drivetrain to blast away corrosive buildup that standard washes miss.",
        image: "/Blog Images/Rotational scrubber thing.png"
      },
      {
        text: "We've documented the impact of regular underbody maintenance on a fleet of local service vehicles, showing a 40% reduction in surface rust over a 24-month period. Learn how our precision sensors detect and target the most vulnerable areas of your specific chassis type."
      }
    ]
  },
  {
    id: 3,
    title: "Battle Against the Elements",
    category: "Maintenance",
    date: "FEB 28, 2026",
    author: "Pit Boss",
    images: ["/Blog Images/Dusty _wash me car.png", "/Blog Images/Auto Carwash (2).png", "/Blog Images/nascar.png"],
    sections: [
      {
        text: "Pineville's pine pollen and red clay dust pose a unique challenge to automotive finishes. When left sitting, these organic and mineral particles can etch into the clear coat, creating micro-abrasions that dull the shine over time.",
        image: "/Blog Images/Auto Carwash (2).png"
      },
      {
        text: "Our seasonal strategy involves a multi-stage decontamination process. First, a pH-neutral pre-soak breaks the bond of stickier resins. Then, our soft-touch micro-fiber arrays gently lift the particles without creating 'swirl marks' common in many automated systems.",
        image: "/Blog Images/nascar.png"
      },
      {
        text: "Finally, we apply a temporary sealant that prevents new particles from bonding to the surface. It's about more than just looking good for a day; it's about protecting the value of your asset against the relentless Louisiana elements."
      }
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
    <Link to={`/pitstop/${post.id}`}>
      <motion.div
        whileHover={{ y: -10 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="glass rounded-[32px] overflow-hidden border border-white/10 group h-full flex flex-col cursor-pointer"
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

          <div className="flex items-center gap-2 font-display font-black text-[10px] uppercase tracking-[0.3em] text-neon-green group-hover:gap-4 transition-all mt-6">
            Read Full Lap <ArrowRight size={14} />
          </div>
        </div>
      </motion.div>
    </Link>
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
          <Link to={`/pitstop/${blogPosts[0].id}`}>
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
                <div className="bg-white text-black px-10 py-4 rounded-xl font-display font-black uppercase tracking-widest inline-flex items-center gap-3 border border-racing-blue/30">
                  Read Article <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-6">
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
