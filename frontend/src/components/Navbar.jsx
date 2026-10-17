import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
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
      { rootMargin: '-35% 0px -45% 0px' }
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

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'backdrop-blur-xl bg-[#03060f]/92 border-b border-white/10 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Head Brand Logo */}
        <a
          href="/#home"
          onClick={handleNavClick}
          className="flex items-center group py-0.5 focus:outline-none"
          aria-label="Quanta Multidisciplinaire Home"
        >
          <img
            src="/logo/quanta-brand-head.png"
            alt="University of Algiers | Quanta"
            className="h-9 sm:h-11 w-auto max-w-[210px] sm:max-w-[260px] object-contain brightness-110 contrast-110 drop-shadow-[0_0_16px_rgba(56,189,248,0.3)] transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav — Zero-Box Sliding Hairline Indicator */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-7">
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
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_12px_#38bdf8]"
                  />
                )}
              </>
            );

            return id === 'join' ? (
              <Link
                key={id}
                to="/join"
                onClick={handleNavClick}
                aria-current={isCurrent ? 'true' : undefined}
                className={`relative py-1 text-sm font-medium tracking-wide transition-colors ${
                  isCurrent ? 'text-cyan-300 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {content}
              </Link>
            ) : (
              <a
                key={id}
                href={href}
                onClick={handleNavClick}
                aria-current={isCurrent ? 'true' : undefined}
                className={`relative py-1 text-sm font-medium tracking-wide transition-colors ${
                  isCurrent ? 'text-cyan-300 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {content}
              </a>
            );
          })}
        </nav>

        {/* Mobile Burger Toggle (Minimum 44x44px for WCAG AAA tap target) */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden w-11 h-11 flex items-center justify-center text-slate-200 hover:text-cyan-300 transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu — Clean Architectural Rows */}
      {open && (
        <nav
          aria-label="Mobile Main"
          className="md:hidden bg-[#03060f]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-4 flex flex-col divide-y divide-white/10 animate-step-enter"
        >
          {LINKS.map(([id, label], idx) => {
            const href = id === 'join' ? '/join' : `/#${id}`;
            const num = String(idx + 1).padStart(2, '0');
            return id === 'join' ? (
              <Link
                key={id}
                to="/join"
                onClick={handleNavClick}
                className="py-3.5 flex items-center justify-between text-base font-display font-semibold text-white hover:text-cyan-300 transition-colors"
              >
                <span>{label}</span>
                <span className="font-mono text-xs text-cyan-400/80">/{num}</span>
              </Link>
            ) : (
              <a
                key={id}
                href={href}
                onClick={handleNavClick}
                className="py-3.5 flex items-center justify-between text-base font-display font-semibold text-white hover:text-cyan-300 transition-colors"
              >
                <span>{label}</span>
                <span className="font-mono text-xs text-cyan-400/80">/{num}</span>
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
