import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo.jsx';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

const LINKS = [
  ['home', 'Home'],
  ['about', 'About'],
  ['events', 'Events'],
  ['activities', 'Activities'],
  ['join', 'Join Us'],
  ['contact', 'Contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState('home');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { playClick, playQuantumChime } = useSoundEffects();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    LINKS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, [location.pathname]);

  const handleNavClick = (id) => {
    if (soundEnabled) playClick();
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'backdrop-blur-xl bg-[#03060f]/90 border-b border-white/10 py-3'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="/#home"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-white font-display font-bold text-lg tracking-wider"
        >
          <Logo size={40} glow={true} />
          <span>QUANTA</span>
        </a>

        {/* Desktop Nav — Zero-Box Sliding Hairline Indicator */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-6">
          {LINKS.map(([id, label]) => {
            const isCurrent =
              location.pathname === '/join' ? id === 'join' : active === id;
            const href = id === 'join' ? '/join' : `/#${id}`;

            const content = (
              <>
                <span>{label}</span>
                {isCurrent && (
                  <motion.span
                    layoutId="nav-hairline"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-cyan-400 shadow-[0_0_10px_#38bdf8]"
                  />
                )}
              </>
            );

            return id === 'join' ? (
              <Link
                key={id}
                to="/join"
                onClick={() => {
                  if (soundEnabled) playQuantumChime(784, 0.15);
                  setOpen(false);
                }}
                aria-current={isCurrent ? 'true' : undefined}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isCurrent ? 'text-cyan-300' : 'text-slate-300/80 hover:text-white'
                }`}
              >
                {content}
              </Link>
            ) : (
              <a
                key={id}
                href={href}
                onClick={() => handleNavClick(id)}
                aria-current={isCurrent ? 'true' : undefined}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isCurrent ? 'text-cyan-300' : 'text-slate-300/80 hover:text-white'
                }`}
              >
                {content}
              </a>
            );
          })}

          <button
            onClick={() => {
              if (!soundEnabled) playQuantumChime(880, 0.12);
              setSoundEnabled(!soundEnabled);
            }}
            title={soundEnabled ? 'Sound on' : 'Sound muted'}
            className="ml-2 p-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>
        </nav>

        {/* Mobile Burger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => {
            if (soundEnabled) playClick();
            setOpen(!open);
          }}
          className="md:hidden p-2 text-white hover:text-cyan-300 transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu — Clean Architectural Rows */}
      {open && (
        <nav
          aria-label="Mobile Main"
          className="md:hidden bg-[#03060f]/98 border-b border-white/10 px-6 py-4 flex flex-col divide-y divide-white/10 animate-step-enter"
        >
          {LINKS.map(([id, label], idx) => {
            const href = id === 'join' ? '/join' : `/#${id}`;
            const num = String(idx + 1).padStart(2, '0');
            return id === 'join' ? (
              <Link
                key={id}
                to="/join"
                onClick={() => handleNavClick(id)}
                className="py-3.5 flex items-center justify-between text-base font-display font-semibold text-white hover:text-cyan-300 transition-colors"
              >
                <span>{label}</span>
                <span className="font-mono text-xs text-cyan-400/70">/{num}</span>
              </Link>
            ) : (
              <a
                key={id}
                href={href}
                onClick={() => handleNavClick(id)}
                className="py-3.5 flex items-center justify-between text-base font-display font-semibold text-white hover:text-cyan-300 transition-colors"
              >
                <span>{label}</span>
                <span className="font-mono text-xs text-cyan-400/70">/{num}</span>
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
