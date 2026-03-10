import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Zap, Shield, Trophy, Star, CheckCircle2, Droplets, Wind, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems, GalleryItem } from './Gallery';
import { blogPosts, BlogCard } from './PitStop';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-32">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
        <img
          src="/Images/PickYourCarWash.jpg.webp"
          alt="Clean Finish Car Wash"
          className="w-full h-full object-cover opacity-40 scale-110"
          referrerPolicy="no-referrer"
        />
        {/* Animated Suds/Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/20 rounded-full blur-xl"
              initial={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                x: Math.random() * 100 + '%',
                y: '110%'
              }}
              animate={{
                y: '-20%',
                x: (Math.random() * 100) + (Math.sin(i) * 10) + '%'
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 max-w-[90vw] mx-auto px-6 text-center overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-visible"
        >
          <div className="inline-flex items-center gap-2 bg-racing-blue/10 border border-racing-blue/30 px-4 py-1 rounded-full mb-8">
            <Trophy className="text-racing-blue" size={16} />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-racing-blue">Pineville's #1 Pit Stop</span>
          </div>

          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.8] mb-12 overflow-visible">
            <span className="italic inline-block">ULTIMATE</span> <br />
            <span className="italic inline-block text-transparent bg-clip-text bg-gradient-to-r from-racing-blue via-white to-neon-green pb-4 tracking-normal">
              CLEAN FINISH
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-medium mb-12 leading-relaxed">
            Experience the high-octane shine with our Ceramic Layering Technology and 100% Wash Guarantee.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                className="bg-racing-blue text-white px-10 py-5 rounded-xl font-display font-black uppercase tracking-widest flex items-center gap-3 group shadow-lg shadow-racing-blue/20"
              >
                Start Your Engines
                <Zap size={20} />
              </motion.button>
            </Link>
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="glass text-white px-10 py-5 rounded-xl font-display font-black uppercase tracking-widest border border-neon-green/30"
              >
                View Wash Menu
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const MiniGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display font-black text-4xl md:text-6xl italic uppercase tracking-tighter">
              THE <span className="text-neon-green">GALLERY</span>
            </h2>
            <p className="text-white/50 font-bold uppercase tracking-widest mt-2">A quick look at our winners.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
        >
          {galleryItems.map(item => (
            <div key={item.id} className="min-w-[300px] md:min-w-[400px] snap-start">
              <GalleryItem item={item} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 font-display font-black text-xs uppercase tracking-[0.3em] text-neon-green hover:gap-4 transition-all">
            View Full Showroom <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const MiniPitStop = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 checkered-bg opacity-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display font-black text-4xl md:text-6xl italic uppercase tracking-tighter">
              THE <span className="text-racing-blue">PIT</span> STOP
            </h2>
            <p className="text-white/50 font-bold uppercase tracking-widest mt-2">Latest laps from the blog.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
        >
          {blogPosts.map(post => (
            <div key={post.id} className="min-w-[320px] md:min-w-[450px] snap-start">
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/pitstop" className="inline-flex items-center gap-2 font-display font-black text-xs uppercase tracking-[0.3em] text-racing-blue hover:gap-4 transition-all">
            Read All Laps <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const WashProducts = () => {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Ceramic Shine",
      image: "/Products/Ceramic Shine.png",
      longDesc: "Ceramic Shine creates a chemical bond with your clear coat, providing 30 days of extreme hydrophobic protection and a high-gloss brilliance that lasts. It repels water, dust, and UV rays, ensuring your car stays cleaner for longer between washes."
    },
    {
      id: 2,
      name: "Extreme Gloss Lava",
      image: "/Products/Extreme Gloss Lava Polish.png",
      longDesc: "This premium lava-infused polish penetrates deep into the clear coat layers to nourish the paint and provide a warm, rich glow. It's the ultimate treatment for restoring the showroom-quality depth and vibrant color to any vehicle finish."
    },
    {
      id: 3,
      name: "Ceramic Gloss",
      image: "/Products/Geramic Gloss.png",
      longDesc: "Ceramic Gloss is our specialized hybrid treatment that combines the ease of a spray polish with the durability of a ceramic coating. It delivers an immediate 'pop' in shine while building a resilient layer of protection against environmental contaminants."
    },
    {
      id: 4,
      name: "Quartz Power",
      image: "/Products/Quartz.png",
      longDesc: "Infused with silica quartz, this sealant hardens into a durable, glass-like shell over your vehicle. It's designed for drivers who want the highest level of resistance against light surface scratches and the most intense water-beading performance available today."
    }
  ];

  const activeProduct = products.find(p => p.id === hoveredId);

  return (
    <section className="py-24 bg-black overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-display font-black text-4xl md:text-6xl italic uppercase tracking-tighter text-white">
            WASH <span className="text-racing-blue">PRODUCTS</span>
          </h2>
          <p className="text-white/50 font-bold uppercase tracking-widest mt-2">Precision chemicals for a podium finish.</p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Base Row: Icons when nothing is hovered */}
          {!hoveredId && (
            <div className="w-full flex justify-between items-center px-4">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  layoutId={`product-icon-${product.id}`}
                  onMouseEnter={() => setHoveredId(product.id)}
                  className="relative w-48 h-64 md:w-64 md:h-80 cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={product.image}
                    className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    alt={product.name}
                  />
                </motion.div>
              ))}
            </div>
          )}

          {/* Expansion Card Overlay */}
          <AnimatePresence>
            {hoveredId && activeProduct && (
              <motion.div
                layoutId="expansion-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-neutral-900 z-50 rounded-[4rem] border-2 border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex items-center overflow-hidden"
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Left Side: Product Icon (Centered) */}
                <div className="w-[40%] h-full flex items-center justify-center border-r border-white/5 bg-black/20">
                  <motion.div
                    layoutId={`product-icon-${activeProduct.id}`}
                    className="w-72 h-96 md:w-96 md:h-[450px]"
                  >
                    <img
                      src={activeProduct.image}
                      className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,102,255,0.2)]"
                      alt={activeProduct.name}
                    />
                  </motion.div>
                </div>

                {/* Right Side: Content */}
                <div className="flex-1 p-12 md:p-20 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-racing-blue mb-4 block">Advanced Formula</span>
                    <h3 className="font-display font-black text-5xl md:text-7xl uppercase italic text-white leading-[0.9] mb-8">
                      {activeProduct.name.split(' ').map((word, i) => (
                        <span key={i} className={i === 1 ? 'text-racing-blue block' : 'block'}>{word}</span>
                      ))}
                    </h3>

                    <p className="text-xl text-white/50 leading-relaxed font-medium mb-12 max-w-xl">
                      {activeProduct.longDesc}
                    </p>

                    <div className="flex flex-wrap gap-8">
                      <div className="flex flex-col gap-3">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Durability Rating</p>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map(i => <div key={i} className={`h-1.5 w-12 rounded-full ${i <= 4 ? 'bg-racing-blue' : 'bg-white/10'}`} />)}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Surface Tension</p>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1.5 w-12 rounded-full bg-neon-green" />)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Status indicator */}
                <div className="absolute top-12 right-12 flex items-center gap-4">
                  <div className="px-4 py-2 bg-racing-blue/10 border border-racing-blue/20 rounded-full">
                    <span className="text-[10px] font-black uppercase tracking-widest text-racing-blue">Active Formula</span>
                  </div>
                  <button
                    onClick={() => setHoveredId(null)}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <div className="w-4 h-0.5 bg-white rotate-45 absolute" />
                    <div className="w-4 h-0.5 bg-white -rotate-45 absolute" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <main>
      <Hero />
      <WashProducts />
      <MiniGallery />
      <MiniPitStop />
      <CeramicShield />
    </main>
  );
};

export const WashMenu = () => {
  const packages = [
    {
      name: "The Sprint",
      price: "$6",
      features: ["Basic Wash", "Power Dry", "Free Vacuums"],
      color: "white"
    },
    {
      name: "The Grand Prix",
      price: "$10",
      features: ["Tire Shine", "Undercarriage Flush", "Triple Foam", "Free Vacuums"],
      color: "racing-blue"
    },
    {
      name: "The Championship",
      price: "$15",
      features: ["Ceramic Shield", "Rain Repellent", "Wheel Brightener", "Mat Cleaners", "Free Vacuums"],
      color: "neon-green",
      featured: true
    }
  ];

  return (
    <div className="pt-20 bg-black">
      <section id="menu" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 checkered-bg opacity-5" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display font-black text-5xl md:text-7xl italic uppercase tracking-tighter mb-4">
              THE <span className="text-racing-blue">LEADER</span><span className="text-neon-green">BOARD</span>
            </h2>
            <p className="text-white/50 font-bold uppercase tracking-widest">Pick your pace. Win the race.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -20 }}
                className={`relative p-10 rounded-3xl border-2 transition-all duration-500 ${pkg.featured
                  ? 'bg-racing-blue/5 border-racing-blue shadow-[0_0_50px_rgba(0,102,255,0.1)]'
                  : 'bg-white/5 border-white/10 hover:border-neon-green'
                  }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-racing-blue text-white px-6 py-1 rounded-full font-display font-black text-[10px] uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                <h3 className="font-display font-black text-3xl uppercase italic mb-2">{pkg.name}</h3>
                <div className="text-5xl font-display font-black text-white mb-8">{pkg.price}</div>

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-white/70">
                      <CheckCircle2 size={16} className={pkg.featured ? 'text-racing-blue' : 'text-neon-green'} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-display font-black uppercase tracking-widest transition-all ${pkg.featured
                  ? 'bg-racing-blue text-white shadow-lg shadow-racing-blue/40'
                  : 'glass text-white hover:bg-white/20 border border-racing-blue/20'
                  }`}>
                  Select Package
                </button>
              </motion.div>
            ))}
          </div>

          <WashProducts />

          <div className="mt-20 glass p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-[0_0_30px_rgba(57,255,20,0.05)]">
            <div>
              <h4 className="font-display font-black text-2xl uppercase italic mb-2">Unlimited Memberships</h4>
              <p className="text-white/50 text-sm">Join the Pit Crew and wash all month long starting at <span className="text-white font-bold">$13.99/mo</span>.</p>
            </div>
            <button className="bg-neon-green text-black px-10 py-4 rounded-xl font-display font-black uppercase tracking-widest shadow-lg shadow-neon-green/20">
              Join Pit Crew
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const CeramicShield = () => {
  return (
    <section className="py-32 bg-deep-black relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-racing-blue/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-neon-green/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-racing-blue mb-6">
            <Shield size={32} className="fill-current" />
            <span className="font-display font-black uppercase tracking-[0.4em] text-sm">Ceramic Layering Tech</span>
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl italic uppercase leading-none mb-8">
            THE <span className="text-racing-blue">CERAMIC</span> <br />
            <span className="text-neon-green">SHIELD</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Our state-of-the-art ceramic layering technology creates a microscopic bond with your vehicle's paint, providing an impenetrable barrier against UV rays, dirt, and Louisiana's toughest grime.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Droplets className="text-racing-blue" />, title: "Hydrophobic", desc: "Water beads off instantly" },
              { icon: <Sparkles className="text-neon-green" />, title: "Deep Gloss", desc: "Showroom mirror finish" },
              { icon: <Wind className="text-racing-blue" />, title: "UV Protection", desc: "Prevents paint fading" },
              { icon: <Shield className="text-neon-green" />, title: "Hardness", desc: "Resists minor scratches" }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div>{item.icon}</div>
                <h4 className="font-display font-black uppercase text-xs tracking-widest">{item.title}</h4>
                <p className="text-[10px] text-white/40 font-bold uppercase">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            animate={{
              rotate: [0, 5, 0, -5, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img
              src="/Images/Clean Finish.jpg"
              alt="Shiny Car"
              className="rounded-3xl shadow-2xl shadow-racing-blue/20 border-2 border-racing-blue"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-racing-blue/20 to-neon-green/20 rounded-3xl" />
          </motion.div>
          {/* Glowing Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full blur-xl animate-pulse" />
        </div>
      </div>
    </section>
  );
};
