import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home, WashMenu } from './pages/Home';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { PitStop } from './pages/PitStop';
import { BlogPostDetail } from './pages/BlogPostDetail';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen font-sans selection:bg-neon-blue selection:text-black">
        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<WashMenu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pitstop" element={<PitStop />} />
            <Route path="/pitstop/:id" element={<BlogPostDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
