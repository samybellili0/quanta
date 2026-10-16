import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

const NAV_LINKS = [
  { id: 'about', label: 'About', labelAr: 'عن النادي' },
  { id: 'departments', label: 'Departments & Teams', labelAr: 'الأقسام والفرق' },
  { id: 'events', label: 'Events', labelAr: 'الفعاليات' },
  { id: 'activities', label: 'Activities', labelAr: 'الأنشطة' },
  { id: 'team', label: 'Executive Board', labelAr: 'الهيئة التنفيذية' },
  { id: 'contact', label: 'Contact', labelAr: 'اتصل بنا' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { playClick, playQuantumChime } = useSoundEffects();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Intersection observer for section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (id) => {
    if (soundEnabled) playClick();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    if (!soundEnabled) {
      playQuantumChime(880, 0.15, 'sine');
    }
    setSoundEnabled(!soundEnabled);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-2xl bg-[#050811]/90 border-b border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          onClick={() => {
            if (soundEnabled) playClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <Logo size={42} glow={true} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-base sm:text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                QUANTA
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                SCIENTIFIC CLUB
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wide font-sans hidden sm:block">
              Université d'Alger 1 — Benyoucef Benkhedda
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-950/60 p-1 rounded-2xl border border-white/10 backdrop-blur-md">
          {NAV_LINKS.map(({ id, label }) => {
            const isActive = location.pathname === '/' && activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleLinkClick(id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all relative ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/15 shadow-[0_0_15px_rgba(6,182,212,0.25)] border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Audio Chime Mute Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Quantum sound effects on' : 'Sound muted'}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-cyan-300 transition-colors hidden sm:flex items-center justify-center"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Join Club Button */}
          <Link
            to="/join"
            onClick={() => {
              if (soundEnabled) playQuantumChime(784, 0.2);
            }}
            className="btn-shimmer px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 text-xs font-black tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Join Quanta</span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              if (soundEnabled) playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-white lg:hidden"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#050811]/98 border-b border-cyan-500/25 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-step-enter">
          <div className="grid gap-2">
            {NAV_LINKS.map(({ id, label, labelAr }) => (
              <button
                key={id}
                onClick={() => handleLinkClick(id)}
                className="w-full py-3 px-4 rounded-xl text-left text-sm font-semibold flex items-center justify-between text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 transition-all"
              >
                <span>{label}</span>
                <span className="text-xs font-mono text-cyan-400/80">{labelAr}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <Link
              to="/join"
              onClick={() => {
                if (soundEnabled) playQuantumChime(784, 0.2);
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 text-slate-950 font-black text-center text-sm shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center justify-center gap-2"
            >
              <span>Apply for Membership</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
