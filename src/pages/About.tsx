import React from 'react';
import { motion } from 'motion/react';
import { Heart, Shield, Users, Star, Trophy, Zap, CheckCircle2, Droplets, Sparkles, Clock, MapPin, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="pt-20 bg-black">
      {/* Hero Lore Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 checkered-bg" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-racing-blue/20 rounded-[40px] rotate-3" />
              <div className="relative rounded-[40px] overflow-hidden border-2 border-white/10 shadow-2xl shadow-racing-blue/20">
                <img
                  src="/Images/TheCarWash.jpg"
                  alt="Clean Finish Facility"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-10 -right-10 z-20 glass p-8 rounded-3xl border border-neon-green/30 shadow-2xl">
                <div className="font-display font-black text-5xl italic text-neon-green leading-none">EST. 2018</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] mt-2 text-white/60">Pineville's Original Pit Stop</div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-racing-blue/10 border border-racing-blue/30 px-4 py-1 rounded-full">
                <Trophy className="text-racing-blue" size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-racing-blue">Our Heritage</span>
              </div>
              <h2 className="font-display font-black text-6xl md:text-8xl italic uppercase leading-none tracking-tighter">
                <span className="text-racing-blue">ABOUT</span> <br />
                <span className="text-neon-green">US</span>
              </h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed font-medium">
                <p>
                  In 2018, we looked at the car wash industry in Central Louisiana and saw a missing gear. We saw plenty of "washes," but we didn't see any "experiences." We wanted to build a place where the technology of a professional racing pit stop met the warmth of a Sunday morning church social.
                </p>
                <p>
                  Clean Finish was founded at 2768 Louisiana Highway 28 with a singular, high-octane goal: to serve God by serving our neighbors. We believe that a clean car isn't just about aesthetics—it's about pride, maintenance, and that psychological "reset" you get when your dashboard is dust-free and your paint is gleaming.
                </p>
                <p>
                  From our insanely strong vacuums to our proprietary Ceramic Layering Technology, every piece of equipment was hand-selected to ensure Pineville drivers get the absolute best finish on the leaderboard.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: <Heart className="text-racing-blue" size={40} />,
                title: "Our Mission",
                desc: "To provide the ultimate customer experience beginning with a positive attitude and ending with quality results.",
                border: "border-racing-blue/30"
              },
              {
                icon: <Shield className="text-neon-green" size={40} />,
                title: "Our Values",
                desc: "We serve God by serving others with honesty and integrity. We are consistent, reliable, and always transparent.",
                border: "border-neon-green/30"
              },
              {
                icon: <Users className="text-racing-blue" size={40} />,
                title: "Community First",
                desc: "We support our local heroes with FREE washes for marked police vehicles. Pineville is our home, and we protect it.",
                border: "border-racing-blue/30"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass p-10 rounded-[32px] space-y-6 border-t-4 ${item.border} relative group hover:bg-white/5 transition-colors`}
              >
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-display font-black text-2xl uppercase italic tracking-tighter">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-bold uppercase tracking-wide">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-32 bg-deep-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display font-black text-5xl md:text-7xl italic uppercase tracking-tighter mb-4">
              WHY TRUST THE <span className="text-racing-blue">PIT</span> <span className="text-neon-green">CREW</span>?
            </h2>
            <p className="text-white/40 font-black uppercase tracking-[0.4em] text-sm">The Clean Finish Standard of Excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <CheckCircle2 className="text-neon-green" />,
                title: "100% Guarantee",
                desc: "Not satisfied? We'll send you through again for free. No questions, no friction."
              },
              {
                icon: <Zap className="text-racing-blue" />,
                title: "Advanced Tech",
                desc: "Dual-wheel mat cleaners and ceramic tech you won't find at a standard wash."
              },
              {
                icon: <Droplets className="text-neon-green" />,
                title: "Eco-Friendly",
                desc: "We reclaim and filter our water, protecting Louisiana's natural beauty."
              },
              {
                icon: <Shield className="text-racing-blue" />,
                title: "Paint Safe",
                desc: "Our closed-cell foam brushes are gentler than a hand wash and never hold grit."
              }
            ].map((trust, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border border-white/5 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {trust.icon}
                </div>
                <h4 className="font-display font-black uppercase italic text-lg tracking-tighter">{trust.title}</h4>
                <p className="text-xs text-white/50 font-bold leading-relaxed uppercase tracking-wider">{trust.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust Bento Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass p-10 rounded-[40px] border border-racing-blue/20 flex flex-col md:flex-row gap-10 items-center">
              <div className="shrink-0 w-32 h-32 bg-racing-blue/10 rounded-full flex items-center justify-center border-4 border-racing-blue/20">
                <ThumbsUp className="text-racing-blue" size={48} />
              </div>
              <div className="space-y-4">
                <h3 className="font-display font-black text-3xl uppercase italic tracking-tighter">The Pineville Promise</h3>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  We are locally owned and operated. When you wash with us, your money stays in Pineville. We aren't a faceless national chain; we are your neighbors, and we stand behind every single wash that rolls out of our tunnel.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-neon-green font-display font-black text-[10px] uppercase tracking-widest">
                    <Star size={14} fill="currentColor" />
                    4.8/5 Rating
                  </div>
                  <div className="flex items-center gap-2 text-racing-blue font-display font-black text-[10px] uppercase tracking-widest">
                    <Users size={14} fill="currentColor" />
                    250K+ Happy Drivers
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-[40px] border border-neon-green/20 flex flex-col justify-center items-center text-center space-y-6">
              <div className="w-20 h-20 bg-neon-green/10 rounded-full flex items-center justify-center">
                <Sparkles className="text-neon-green" size={32} />
              </div>
              <h3 className="font-display font-black text-2xl uppercase italic tracking-tighter">Showroom Ready</h3>
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                We treat every truck, sedan, and SUV like it's headed for the podium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Cars Washed", value: "250K+", color: "text-racing-blue", icon: <Zap size={20} /> },
              { label: "Happy Members", value: "5,000+", color: "text-neon-green", icon: <Users size={20} /> },
              { label: "Gallons Saved", value: "1.2M", color: "text-racing-blue", icon: <Droplets size={20} /> },
              { label: "Police Washes", value: "FREE", color: "text-neon-green", icon: <Shield size={20} /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <div className={`mx-auto w-12 h-12 rounded-full bg-white/5 flex items-center justify-center ${stat.color} opacity-50`}>
                  {stat.icon}
                </div>
                <div>
                  <div className={`font-display font-black text-5xl md:text-7xl italic mb-2 ${stat.color} tracking-tighter`}>{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0 checkered-bg opacity-5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-black text-4xl md:text-6xl italic uppercase tracking-tighter mb-8">
            READY TO JOIN THE <span className="text-racing-blue">PIT</span> <span className="text-neon-green">CREW</span>?
          </h2>
          <p className="text-white/60 text-lg mb-12 font-medium">
            Experience the Clean Finish difference today. Whether it's a quick sprint or a championship shine, we're ready for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <button className="bg-racing-blue text-white px-12 py-5 rounded-2xl font-display font-black uppercase tracking-widest shadow-xl shadow-racing-blue/20 hover:scale-105 transition-transform w-full sm:w-auto">
                Find Our Track
              </button>
            </Link>
            <Link to="/menu">
              <button className="glass text-white px-12 py-5 rounded-2xl font-display font-black uppercase tracking-widest border border-neon-green/30 hover:bg-white/5 transition-colors w-full sm:w-auto">
                View Wash Menu
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
