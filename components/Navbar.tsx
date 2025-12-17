import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNavigation('/')}
        >
          <div className="bg-neutral-900 p-1.5 rounded-lg transition-transform group-hover:scale-105 group-hover:rotate-3">
            <Zap className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-neutral-900">
            AdForge
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavigation('/features')} className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors">
            Features
          </button>
          <button onClick={() => handleNavigation('/showcase')} className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors">
            Showcase
          </button>
          <button onClick={() => handleNavigation('/about')} className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors">
            About
          </button>
          <button
            onClick={() => handleNavigation('/waitlist')}
            className="bg-neutral-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-neutral-900/20"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-neutral-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          <button onClick={() => handleNavigation('/features')} className="text-left text-neutral-700 font-medium py-3 border-b border-gray-50">
            Features
          </button>
          <button onClick={() => handleNavigation('/showcase')} className="text-left text-neutral-700 font-medium py-3 border-b border-gray-50">
            Showcase
          </button>
          <button onClick={() => handleNavigation('/about')} className="text-left text-neutral-700 font-medium py-3 border-b border-gray-50">
            About
          </button>
          <button
            onClick={() => handleNavigation('/waitlist')}
            className="bg-primary text-white px-6 py-4 rounded-xl text-center font-semibold mt-2 shadow-xl shadow-primary/30"
          >
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  );
};