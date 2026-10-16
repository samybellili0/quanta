import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp, Compass, Sparkles } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

const SECTORS = [
  { id: 'home', label: 'SEC 01 // HORIZON' },
  { id: 'about', label: 'SEC 02 // PILLARS' },
  { id: 'quantum-story', label: 'SEC 03 // SCROLLYTELL' },
  { id: 'departments', label: 'SEC 04 // MATRIX' },
  { id: 'events', label: 'SEC 05 // CHRONICLES' },
  { id: 'activities', label: 'SEC 06 // LABS' },
  { id: 'team', label: 'SEC 07 // COMMAND' },
  { id: 'join', label: 'SEC 08 // PORTAL' },
];

export default function ScrollProgressHud() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [currentSector, setCurrentSector] = useState(SECTORS[0].label);
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(false);
  const { playClick, playQuantumChime } = useSoundEffects();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const p = Math.round(latest * 100);
      setPercent(p);
      setVisible(latest > 0.04);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = SECTORS.find((s) => s.id === entry.target.id);
            if (found) setCurrentSector(found.label);
          }
        });
      },
      { rootMargin: '-35% 0px -45% 0px' }
    );

    SECTORS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      unsubscribe();
      observer.disconnect();
    };
  }, [scrollYProgress]);

  const scrollToTop = () => {
    playQuantumChime(987.77, 0.2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Edge Quantum Laser Progress Line */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-slate-950/60 pointer-events-none">
        <motion.div
          style={{ scaleX }}
          className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-500 origin-left shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        />
      </div>

      {/* Floating Cyber HUD Pill */}
      {visible && (
        <motion.aside
          aria-label="Quantum Navigation Telemetry"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-40 flex items-center gap-1.5 p-1 rounded-2xl bg-slate-950/90 border border-cyan-500/35 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.2)] text-[11px] font-mono text-cyan-300"
        >
          {/* Active Sector Radar Indicator */}
          <div className="px-2.5 py-1 rounded-xl bg-cyan-950/80 border border-cyan-400/25 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-white tracking-wider truncate max-w-[130px] sm:max-w-none">
              {currentSector}
            </span>
          </div>

          {/* Depth Percentage Gauge */}
          <div className="px-2 py-1 text-slate-300 font-bold hidden sm:block">
            {percent}%
          </div>

          {/* Quick Quantum Booster Back to Top Button */}
          <button
            onClick={scrollToTop}
            title="Warp to Top"
            className="p-1.5 rounded-xl bg-slate-900/90 hover:bg-cyan-500 hover:text-slate-950 border border-white/10 text-cyan-300 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </motion.aside>
      )}
    </>
  );
}
