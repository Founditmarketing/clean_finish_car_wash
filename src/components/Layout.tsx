import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy, Zap, Shield, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import siteLogo from '../assets/logo.png';

export const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Wash Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Blogs', path: '/pitstop' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-full px-8 py-3 flex items-center justify-between border border-white/10 shadow-[0_0_20px_rgba(0,102,255,0.1)]">
        <Link to="/" className="flex items-center">
          <img
            src={siteLogo}
            alt="Clean Finish Car Wash Logo"
            className="h-10 md:h-12 object-contain drop-shadow-lg"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-display text-sm font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${location.pathname === link.path ? 'text-neon-green' : 'hover:text-neon-green'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neon-green text-black px-6 py-2 rounded-full font-display font-black text-xs uppercase tracking-tighter shadow-lg shadow-neon-green/40"
          >
            Join the Pit Crew
          </motion.button>
        </Link>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden border-t-4 border-transparent [border-image:linear-gradient(to_right,#0066ff,#39ff14,#0066ff)_1]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff15_1px,transparent_1px),linear-gradient(to_bottom,#39ff1415_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]">
        <motion.div
          className="w-full h-full bg-[linear-gradient(to_right,#0066ff15_1px,transparent_1px),linear-gradient(to_bottom,#39ff1415_1px,transparent_1px)] bg-[size:40px_40px]"
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-6">
          <Link to="/" className="flex items-center">
            <img
              src={siteLogo}
              alt="Clean Finish Car Wash Logo"
              className="h-12 object-contain drop-shadow-lg"
            />
          </Link>
          <p className="text-white/90 text-sm leading-relaxed font-bold">
            Providing the ultimate customer experience in Pineville, LA. We serve God by serving others with honesty and integrity.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/cleanfinishcarwashLA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-racing-blue transition-colors group">
              <Facebook size={18} className="group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-black uppercase tracking-widest text-racing-blue mb-6">Quick Laps</h4>
          <ul className="space-y-4 text-sm font-bold text-white/90">
            <li><Link to="/" className="hover:text-neon-green transition-colors">Home Base</Link></li>
            <li><Link to="/about" className="hover:text-neon-green transition-colors">About Us</Link></li>
            <li><Link to="/menu" className="hover:text-neon-green transition-colors">Wash Packages</Link></li>
            <li><Link to="/pitstop" className="hover:text-neon-green transition-colors">Blogs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-black uppercase tracking-widest text-neon-green mb-6">The Garage</h4>
          <ul className="space-y-4 text-sm font-bold text-white/90">
            <li>
              <Link to="/contact#map" className="flex items-start gap-3 hover:text-racing-blue transition-colors">
                <MapPin size={18} className="text-racing-blue shrink-0" />
                <span>2768 LA-28, Pineville, LA 71360</span>
              </Link>
            </li>
            <li>
              <a href="tel:3187040162" className="flex items-center gap-3 hover:text-neon-green transition-colors">
                <Phone size={18} className="text-neon-green shrink-0" />
                <span>(318) 704-0162</span>
              </a>
            </li>
            <li>
              <a href="mailto:cleanfinishcarwash@gmail.com" className="flex items-center gap-3 hover:text-racing-blue transition-colors">
                <Mail size={18} className="text-racing-blue shrink-0" />
                <span>cleanfinishcarwash@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-black uppercase tracking-widest text-racing-blue mb-6">Start Your Engines</h4>
          <p className="text-xs text-white/50 mb-4 uppercase tracking-wider">Get exclusive deals and racing news.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-racing-blue w-full"
            />
            <button className="btn-glint bg-racing-blue text-white px-4 py-2 rounded-lg font-display font-black text-[10px] uppercase tracking-tighter">
              REV
            </button>
          </div>
        </div>
      </div >

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-white/50 uppercase tracking-widest">
        <p>© 2026 CLEAN FINISH CAR WASH. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer >
  );
};
