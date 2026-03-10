import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy, Zap, Shield, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

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
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-racing-blue rounded-lg flex items-center justify-center rotate-3 shadow-lg shadow-racing-blue/20">
            <Zap className="text-white fill-current" size={24} />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter italic">
            CLEAN<span className="text-neon-green">FINISH</span>
          </span>
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
    <footer className="relative bg-deep-black pt-20 pb-10 overflow-hidden border-t-4 border-transparent bg-gradient-to-r from-racing-blue via-neon-green to-racing-blue [border-image:linear-gradient(to_right,#0066ff,#39ff14,#0066ff)_1]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <Zap className="text-racing-blue fill-current" size={24} />
            <span className="font-display font-bold text-2xl tracking-tighter italic">
              CLEAN<span className="text-neon-green">FINISH</span>
            </span>
          </Link>
          <p className="text-white/80 text-sm leading-relaxed font-medium">
            Providing the ultimate customer experience in Pineville, LA. We serve God by serving others with honesty and integrity.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/cleanfinishcarwashLA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-racing-blue transition-colors group">
              <Facebook size={18} className="group-hover:text-white transition-colors" />
            </a>
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
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-neon-green shrink-0" />
              <span>(318) 704-0162</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-racing-blue shrink-0" />
              <span>cleanfinishcarwash@gmail.com</span>
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
            <button className="bg-racing-blue text-white px-4 py-2 rounded-lg font-display font-black text-[10px] uppercase tracking-tighter">
              REV
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">
        <p>© 2026 CLEAN FINISH CAR WASH. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
