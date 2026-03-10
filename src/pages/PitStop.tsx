import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowRight, Gauge, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const blogPosts = [
  {
    id: 1,
    title: "Inside the Tunnel: The Science of Shine",
    category: "Wash Tech",
    date: "MAR 10, 2026",
    author: "Pit Boss",
    images: ["/Blog Images/suddy BMW.png", "/Blog Images/manual tire spraying.png", "/Blog Images/soaped up exhaust pipe.png"],
    sections: [
      {
        text: "Achieving a world-class automotive finish isn't just about water and soap; it's a complex battle of chemistry, physics, and mechanical precision. At Clean Finish, we treat every vehicle that enters our tunnel like a high-performance machine ready for the winner's circle. The process begins with our signature pre-soak foam, a pH-balanced solution designed to penetrate the microscopic layer of road film that blankets your car's paint. This film, composed of organic matter, industrial fallout, and mineral deposits, requires a specific chemical trigger to release its grip without the need for aggressive friction that can cause swirl marks. As you can see on the BMW below, our rich, active foam 'lifts' these contaminants, suspending them in a protective cushion before the first micro-fiber makes contact.",
        image: "/Blog Images/suddy BMW.png"
      },
      {
        text: "One of the most critical aspects of Pineville's environment is the high concentration of iron particles and red clay dust. These abrasive elements can act like sandpaper if not handled with extreme care. Our multi-stage decontamination process includes specialized tire and wheel high-pressure systems that target the most concentrated areas of brake dust. Brake dust is essentially tiny iron filings that, when combined with heat and moisture, can chemically bond to your wheels, causing permanent etching. By utilizing targeted manual intervention and calibrated sprayers, we ensure that every crevice of your 'running gear' is neutralized. This precision ensures that the finish remains pristine and protected against the corrosive Louisiana elements.",
        image: "/Blog Images/manual tire spraying.png"
      },
      {
        text: "The science continues even as the vehicle approaches the end of the tunnel. We utilize an advanced reverse-osmosis water filtration system to ensure a spot-free rinse. Standard tap water contains minerals like calcium and magnesium which, if left to dry, form hard-water spots that are difficult to remove and can damage the paint over time. Our system strips these minerals away, leaving only pure H2O. We then apply a high-grade polymer sealant that works at the molecular level to fill any imperfections in the clear coat, creating a perfectly flat surface. This smoothness is what produces the deep, reflective gloss shown on this exhaust assembly—the final touch in our pursuit of the ultimate clean.",
        image: "/Blog Images/soaped up exhaust pipe.png"
      },
      {
        text: "Finally, our high-velocity drying system uses a combination of heated air and precision-angled nozzles to strip every drop of water from the surface before it has a chance to evaporate. This mechanical drying process is far superior to traditional hand-drying, as it eliminates the risk of cross-contamination from dirty cloths and ensures that water is cleared from hidden areas like mirrors and door handles. The result is a finish that doesn't just look good in the driveway—it's a finish that is scientifically protected and engineered to stay cleaner for longer. At Clean Finish, we don't just wash cars; we apply the science of shine to every vehicle that takes a lap in our tunnel. Experience the difference of a precision-engineered clean today."
      }
    ]
  },
  {
    id: 2,
    title: "Precision Cleaning: The Under-Body Story",
    category: "Community",
    date: "MAR 05, 2026",
    author: "Admin",
    images: ["/Blog Images/Car in the wash.png", "/Blog Images/Rotational scrubber thing.png", "/Blog Images/soaped up exhaust pipe.png"],
    sections: [
      {
        text: "Most drivers focus on what they can see—the gleaming hood, the sparkling wheels, and the clear glass. However, the real silent killer of a vehicle's longevity lies beneath the chassis, completely out of sight. Louisiana's high humidity, combined with occasional road salts and heavy red clay mud, creates a perfect environment for oxidation. If left untreated, this corrosive buildup can compromise frame components, suspension links, and braking systems. Our G-Force Underbody Flush is designed to combat this hidden threat head-on, ensuring that your vehicle is as clean underneath as it is on top.",
        image: "/Blog Images/Car in the wash.png"
      },
      {
        text: "Our underbody system doesn't rely on simple static sprayers. Instead, we utilize 360-degree high-pressure oscillators that reach into the tightest crevices of your drivetrain. These specialized nozzles are engineered to blast away hardened road grime and salt deposits that standard washes simply can't touch. We've documented the impact of regular underbody maintenance on a fleet of local service vehicles, and the results are staggering: a 40% reduction in surface rust over a 24-month period. This level of precision is achieved through our rotational cleaning modules, which you can see in action below, providing a thoroughness that manual spraying rarely matches.",
        image: "/Blog Images/Rotational scrubber thing.png"
      },
      {
        text: "One of the most vulnerable areas for corrosion is the exhaust system and surrounding components. High heat cycles combined with moisture exposure create an accelerated aging process for metal. During our precision wash cycle, we apply a pH-balanced foam that clings to these undercar components, breaking down the chemical bonds of iron particles and industrial fallout before they can take root. As shown in the detailed shot of the exhaust system below, our process ensures that even the hardest-to-reach hardware receives the attention it needs to resist the Louisiana elements.",
        image: "/Blog Images/soaped up exhaust pipe.png"
      },
      {
        text: "We believe that a professional car wash should be about more than just aesthetics; it should be an essential part of your vehicle's maintenance schedule. By targeting the underbody with the same intensity we bring to the exterior panels, we help you extend the life of your vehicle and prevent costly repairs down the road. At Clean Finish, we leverage the latest in sensor technology to detect and target the most vulnerable areas of your specific chassis type. It's this commitment to hidden quality that makes us the premier choice for drivers who truly care about the long-term health of their vehicles. Don't let your car's foundation erode—give it the protection it deserves."
      }
    ]
  },
  {
    id: 3,
    title: "Battle Against the Elements",
    category: "Maintenance",
    date: "FEB 28, 2026",
    author: "Pit Boss",
    images: ["/Blog Images/Dusty _wash me car.png", "/Blog Images/suddy BMW.png", "/Blog Images/manual tire spraying.png"],
    sections: [
      {
        text: "Pineville's unique ecosystem presents an ongoing challenge for automotive finishes. Between the thick pine pollen that blankets everything in spring and the fine red clay dust that kicks up in the dry summer months, your car's paint is under constant assault. When these organic and mineral particles are left sitting on your clear coat, they can actually etch into the surface, creating micro-abrasions. Over time, these tiny scratches dull the shine and create a 'sandpaper' texture that makes it harder for dirt to be removed. The image below shows a typical vehicle before our multi-stage decontamination process begins—a common sight in Central Louisiana.",
        image: "/Blog Images/Dusty _wash me car.png"
      },
      {
        text: "Our strategy for winning the battle against the elements involves a highly scientific approach to chemistry and friction. We begin with a pH-neutral pre-soak foam that breaks the electrostatic bond between the contaminants and your paint. This 'lifting' action is critical; it ensures that when our soft-touch micro-fiber arrays make contact with your vehicle, they are lifting the particles away rather than dragging them across the surface. This prevents the 'swirl marks' that are all too common in traditional automated systems or amateur hand washes. You can see our rich, active foam working its magic on this BMW, preparing it for a scratch-free transformation.",
        image: "/Blog Images/suddy BMW.png"
      },
      {
        text: "While our automated systems do the heavy lifting, we also recognize the importance of precision manual intervention for certain high-impact areas. Wheels and tires are often the dirtiest parts of any vehicle, collecting brake dust and road tar that require a more targeted approach. Our technicians utilize specialized high-pressure systems to decontaminate these areas, ensuring that corrosive brake dust—which is essentially iron filing—doesn't eat away at your wheel's finish. This manual tire spraying process, combined with our automated tire shine application, ensures that every inch of your 'running gear' is protected from the corrosive Louisiana road grime.",
        image: "/Blog Images/manual tire spraying.png"
      },
      {
        text: "The final step in our environmental defense strategy is the application of a temporary polymer sealant. This layer acts as a sacrificial barrier, preventing new particles of pollen or dust from bonding directly to your clear coat. It effectively 'seals' the pores of the paint, keeping the surface smooth and reflective. This makes your next wash even more effective, as the dirt will sit on top of the sealant rather than being embedded in the paint. Protecting your vehicle's value isn't a one-time event; it's a habitual commitment to excellence. At Clean Finish, we provide you with the tools and the technology to keep your asset in championship condition, no matter what the Louisiana elements throw your way."
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
