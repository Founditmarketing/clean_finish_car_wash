import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';

export const Reviews = () => {
    return (
        <div className="pt-20 bg-deep-black min-h-screen">
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 checkered-bg opacity-5 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h1 className="font-display font-black text-5xl md:text-7xl italic uppercase tracking-tighter mb-4">
                            CUSTOMER <span className="text-racing-blue">REVIEWS</span>
                        </h1>
                        <p className="text-white/40 font-black uppercase tracking-[0.4em] text-sm">
                            What the Pineville community is saying
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center py-20 space-y-6 opacity-60">
                        <MessageSquare size={48} className="text-racing-blue" />
                        <h3 className="font-display font-black text-2xl uppercase italic tracking-widest text-white">Reviews Coming Soon</h3>
                        <p className="text-white/50 text-center max-w-md font-medium">We are compiling the latest feedback from our pit crew. Check back shortly for real customer experiences.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
