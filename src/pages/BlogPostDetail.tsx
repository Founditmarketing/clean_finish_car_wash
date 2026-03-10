import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from './PitStop';

export const BlogPostDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === Number(id));

    if (!post) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
                <h2 className="font-display font-black text-4xl uppercase italic mb-8">Article Not Found</h2>
                <Link to="/pitstop" className="bg-racing-blue text-white px-8 py-4 rounded-xl font-display font-black uppercase tracking-widest flex items-center gap-3">
                    <ArrowLeft size={20} />
                    Back to Pit Stop
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-deep-black min-h-screen pb-32 pt-20">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src={post.images[0]}
                        className="w-full h-full object-cover opacity-60"
                        alt={post.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent" />
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10 w-full mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <Link to="/pitstop" className="glass p-2 rounded-full hover:bg-white/10 transition-colors">
                                <ArrowLeft size={18} />
                            </Link>
                            <div className="bg-racing-blue text-white px-4 py-1 rounded-full font-display font-black text-[10px] uppercase tracking-widest">
                                {post.category}
                            </div>
                            <div className="text-white/50 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                <Clock size={14} className="text-neon-green" />
                                5 MIN READ
                            </div>
                        </div>

                        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl italic uppercase tracking-tighter leading-[0.85] text-white">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-8 pt-4 border-t border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full glass flex items-center justify-center p-0.5">
                                    <div className="w-full h-full rounded-full bg-racing-blue/20 flex items-center justify-center">
                                        <User size={16} className="text-racing-blue" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Written By</p>
                                    <p className="text-sm font-bold text-white">{post.author}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                                    <Calendar size={16} className="text-neon-green" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Posted On</p>
                                    <p className="text-sm font-bold text-white">{post.date}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 mt-20">
                <div className="lg:col-span-8 space-y-12">
                    {/* Main Content */}
                    <div className="space-y-16">
                        {post.sections.map((section: any, i: number) => (
                            <div key={i} className="space-y-8">
                                <p className="text-xl text-white/70 leading-relaxed">
                                    {section.text}
                                </p>
                                {section.image && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
                                    >
                                        <img src={section.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Scene ${i}`} />
                                        <div className="absolute inset-0 bg-racing-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Share2 className="text-white" size={32} />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Social Footer */}
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Fuel The Conversation</span>
                            <div className="flex gap-2">
                                {['Facebook', 'Copy Link'].map(platform => (
                                    <button key={platform} className="px-4 py-2 glass rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white/10">
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button className="flex items-center gap-3 text-neon-green font-display font-black uppercase tracking-[0.2em] text-sm group">
                            Next Article <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-12">
                    {/* Newsletter / Pit Crew Card */}
                    <div className="glass p-10 rounded-[32px] border border-racing-blue/20 relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-racing-blue/10 blur-[50px] rounded-full" />
                        <div className="relative z-10 space-y-6">
                            <h4 className="font-display font-black text-2xl uppercase italic leading-none">Join The <br /><span className="text-racing-blue">Pit Crew</span></h4>
                            <p className="text-white/50 text-sm font-medium">Get the latest performance tips and exclusive member offers delivered to your inbox.</p>
                            <div className="space-y-3">
                                <input type="email" placeholder="YOUR EMAIL" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-racing-blue transition-colors" />
                                <button className="w-full bg-racing-blue text-white py-4 rounded-xl font-display font-black uppercase tracking-widest shadow-lg shadow-racing-blue/20">Sign Me Up</button>
                            </div>
                        </div>
                    </div>

                    {/* Recent Articles */}
                    <div className="space-y-8">
                        <h4 className="font-display font-black text-xl uppercase italic tracking-tighter">Recommended <span className="text-neon-green">Laps</span></h4>
                        <div className="space-y-6">
                            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(p => (
                                <Link key={p.id} to={`/pitstop/${p.id}`} className="group flex gap-4">
                                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                                        <img src={p.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={p.title} />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-racing-blue">{p.category}</span>
                                        <h5 className="font-display font-black text-sm uppercase italic leading-tight group-hover:text-neon-green transition-colors">{p.title}</h5>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    );
};
