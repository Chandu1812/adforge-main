import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Showcase } from './pages/Showcase';
import { About } from './pages/About';
import { Waitlist } from './pages/Waitlist';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-white text-neutral-900">
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#0B1220',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              borderRadius: '12px',
              padding: '16px',
            },
          }}
        />

        <Navbar scrolled={scrolled} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/about" element={<About />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;