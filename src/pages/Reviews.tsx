import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, Quote } from 'lucide-react';

const reviewsData = [
    {
        name: "Katara Riana Lemoine",
        text: "This is the best car wash in town hands down. The staff is super friendly and my favorite part it’s clean and the vacuums work great!",
        rating: 5
    },
    {
        name: "Connor Chambers",
        text: "Amazing, came in my company truck “INFENERGY SOLAR” had a large wooden ladder rack said it wouldn’t fit, (which I figured) but I asked to pay for the wash to get just vacs and he said “no sir I can let you right in” he didn’t have to do that, didn’t get his name but said he ran the place. Great place to come too! I recommend to everyone from all around!",
        rating: 5
    },
    {
        name: "Anthony Landry",
        text: "I bought the monthly everything package. I have gotten several compliments from people who say how clean my vehicle looks. My truck is parked outside unprotected from the elements. The complete package keeps a coat of wax on my truck protecting the original paint job of the truck. It's a 2014 so it's 9 years old and this car wash keeps it looking brand new. Customer Service is top-notch. So I definitely recommend this place for any service you may need.",
        rating: 5
    },
    {
        name: "CrowCat Review",
        text: "Best automatic carwash in town by a long shot! They offer different dollar amount tiers of wash, and I can say the ceramic finish will keep your car clean and shiny through the worst conditions. They offer membership programs by the month or wash to wash anytime you need (within business hours). Stop by and freshen up your ride.",
        rating: 5
    },
    {
        name: "jbailey1728",
        text: "This car wash has the nicest employees and owners. They are helpful too! Sara is awesome. Dana, an owner, is super nice too. She was out there working and stopped to introduce herself and offered me water. That says alot about someone. If you need a wash, go there! I’m a regular 😬",
        rating: 5
    },
    {
        name: "Dana D.",
        text: "Melissa greeted me with a friendly smile and upbeat personality. She was very informative with car wash memberships. She went above and beyond helping me with the mat machine to get my rubber floor mats cleaned. This is a great addition to having a shiny, clean car.",
        rating: 5
    },
    {
        name: "Amy M.",
        text: "Just went through for the first time and got the membership while I was there. This is definitely the best car wash in the area I’ve used - nice shine and I like that it actually cleans the wheels. And the vacuums are amazing!",
        rating: 5
    },
    {
        name: "John B.",
        text: "Great guys! Great Service! Great location! But, don’t take my word for it, go see them for yourself and check them out.",
        rating: 5
    }
];

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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviewsData.map((review, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8 rounded-3xl relative group hover:border-racing-blue/50 transition-colors"
                            >
                                <Quote size={40} className="text-racing-blue/20 absolute top-6 right-6" />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-neon-green text-neon-green" />
                                    ))}
                                </div>
                                <p className="text-white/80 leading-relaxed mb-8 italic relative z-10 text-sm">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                    <div className="w-10 h-10 rounded-full bg-racing-blue/20 flex items-center justify-center font-display font-black text-racing-blue">
                                        {review.name.charAt(0)}
                                    </div>
                                    <h4 className="font-display font-black uppercase tracking-widest text-sm text-white">
                                        {review.name}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
