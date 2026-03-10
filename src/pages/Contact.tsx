import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, HelpCircle } from 'lucide-react';

export const Contact = () => {
  const faqs = [
    { q: "How long does a wash take?", a: "Our high-speed tunnel gets you in and out in under 3 minutes, but your shine lasts for weeks!" },
    { q: "Do you offer interior cleaning?", a: "We focus on the ultimate exterior shine, but we provide insanely strong FREE vacuums and mat cleaners for you to perfect your interior." },
    { q: "What is the 100% Wash Guarantee?", a: "If you aren't satisfied with your wash, let us know immediately and we'll send you through again for FREE. No questions asked." },
    { q: "Is the Ceramic Shield worth it?", a: "Absolutely. It provides superior protection against UV rays and makes future washes even more effective." }
  ];

  return (
    <div className="pt-20 bg-black">
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Dashboard Style Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[40px] border-2 border-racing-blue/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-racing-blue/10 blur-3xl rounded-full" />

              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-racing-blue rounded-xl flex items-center justify-center shadow-lg shadow-racing-blue/20">
                  <MessageSquare className="text-white" />
                </div>
                <h3 className="font-display font-black text-3xl uppercase italic">Send a Message</h3>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/50 ml-2">Driver Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-racing-blue transition-colors" placeholder="JOHN DOE" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/50 ml-2">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-racing-blue transition-colors" placeholder="JOHN@EXAMPLE.COM" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/50 ml-2">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-racing-blue transition-colors appearance-none">
                    <option>MEMBERSHIP INQUIRY</option>
                    <option>GENERAL QUESTION</option>
                    <option>FEEDBACK</option>
                    <option>COMMUNITY SUPPORT</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/50 ml-2">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-racing-blue transition-colors" placeholder="START TYPING..."></textarea>
                </div>
                <button className="w-full bg-neon-green text-black py-5 rounded-2xl font-display font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-neon-green/20 hover:scale-[1.02] transition-transform">
                  SEND MESSAGE
                  <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Info & FAQ */}
            <div className="space-y-12">
              <div>
                <h2 className="font-display font-black text-5xl italic uppercase tracking-tighter mb-8">
                  THE <span className="text-racing-blue">PIT</span> <span className="text-neon-green">INFO</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="glass p-6 rounded-3xl flex items-start gap-4 border border-racing-blue/20">
                    <Clock className="text-racing-blue shrink-0" />
                    <div>
                      <h4 className="font-display font-black uppercase text-xs tracking-widest mb-2">Race Times</h4>
                      <p className="text-xs text-white/60 font-bold uppercase">Mon-Sat: 7:30 AM - 7:00 PM</p>
                      <p className="text-xs text-white/60 font-bold uppercase">Sun: 12:00 PM - 7:00 PM</p>
                    </div>
                  </div>
                  <div className="glass p-6 rounded-3xl flex items-start gap-4 border border-neon-green/20">
                    <MapPin className="text-neon-green shrink-0" />
                    <div>
                      <h4 className="font-display font-black uppercase text-xs tracking-widest mb-2">Track Location</h4>
                      <p className="text-xs text-white/60 font-bold uppercase">2768 Louisiana Highway 28, Pineville, Louisiana 71360</p>
                      <p className="text-[10px] text-neon-green font-black uppercase mt-1">Next to Autozone</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl uppercase italic mb-6 flex items-center gap-3">
                  <HelpCircle className="text-racing-blue" />
                  Driver FAQ
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details key={i} className={`group glass rounded-2xl overflow-hidden border ${i % 2 === 0 ? 'border-racing-blue/20' : 'border-neon-green/20'}`}>
                      <summary className={`list-none p-6 cursor-pointer flex justify-between items-center font-display font-black text-sm uppercase italic tracking-widest transition-colors ${i % 2 === 0 ? 'hover:text-racing-blue' : 'hover:text-neon-green'}`}>
                        {faq.q}
                        <span className="group-open:rotate-180 transition-transform">↓</span>
                      </summary>
                      <div className="px-6 pb-6 text-sm text-white/60 leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Live Google Map */}
              <div className="h-80 rounded-3xl overflow-hidden relative p-[4px] bg-gradient-to-r from-racing-blue via-neon-green to-racing-blue shadow-2xl">
                <div className="absolute inset-[4px] bg-deep-black rounded-[28px] overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4033.6378495346903!2d-92.4091776485384!3d31.332531590350147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86254ddd03dca943%3A0x8f2f909cabeb8e5b!2sClean%20Finish%20Car%20Wash!5e1!3m2!1sen!2sus!4v1773171155994!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
