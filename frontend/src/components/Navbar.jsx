import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
          ? 'backdrop-blur-xl bg-[#03060f]/90 border-b border-sky-400/20 py-3 shadow-lg'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="/#home"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-white font-display font-bold text-lg tracking-wide"
        >
          <Logo size={42} glow={true} />
          <span>QUANTA</span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-1.5">
          {LINKS.map(([id, label]) => {
            const isCurrent =
              location.pathname === '/join' ? id === 'join' : active === id;
            const href = id === 'join' ? '/join' : `/#${id}`;

            return id === 'join' ? (
              <Link
                key={id}
                to="/join"
                onClick={() => {
                  if (soundEnabled) playQuantumChime(784, 0.15);
                  setOpen(false);
                }}
                aria-current={isCurrent ? 'true' : undefined}
                className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-all ${
                  isCurrent
                    ? 'text-cyan-300 bg-cyan-500/15 shadow-[inset_0_-2px_0_0_#38bdf8]'
                    : 'text-slate-200/80 hover:text-cyan-300 hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ) : (
              <a
                key={id}
                href={href}
                onClick={() => handleNavClick(id)}
                aria-current={isCurrent ? 'true' : undefined}
                className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-all ${
                  isCurrent
                    ? 'text-cyan-300 bg-cyan-500/15 shadow-[inset_0_-2px_0_0_#38bdf8]'
                    : 'text-slate-200/80 hover:text-cyan-300 hover:bg-white/5'
                }`}
              >
                {label}
              </a>
            );
          })}

          <button
            onClick={() => {
              if (!soundEnabled) playQuantumChime(880, 0.12);
              setSoundEnabled(!soundEnabled);
            }}
            title={soundEnabled ? 'Sound on' : 'Sound muted'}
            className="ml-2 p-2 rounded-md border border-sky-400/20 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
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
          className="md:hidden p-2 rounded-md border border-sky-400/25 text-white hover:border-cyan-400 transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          aria-label="Mobile Main"
          className="md:hidden bg-[#03060f]/98 border-b border-sky-400/20 px-4 py-3 flex flex-col gap-1 animate-step-enter"
        >
          {LINKS.map(([id, label]) => {
            const href = id === 'join' ? '/join' : `/#${id}`;
            return id === 'join' ? (
              <Link
                key={id}
                to="/join"
                onClick={() => handleNavClick(id)}
                className="py-2.5 px-3 rounded-md text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
              >
                {label}
              </Link>
            ) : (
              <a
                key={id}
                href={href}
                onClick={() => handleNavClick(id)}
                className="py-2.5 px-3 rounded-md text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
              >
                {label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
