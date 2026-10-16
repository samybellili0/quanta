import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo.jsx';
import {
  Rocket,
  ArrowRight,
  Calendar,
  Layers,
  ChevronDown,
} from 'lucide-react';
import { STATS } from '../data/club.js';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

export default function HeroSection() {
  const { playClick, playQuantumChime } = useSoundEffects();

  const scrollToSection = (id) => {
    playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 sm:pt-28 pb-10 sm:pb-14 px-3 sm:px-6 lg:px-8 text-center overflow-hidden"
    >
      {/* 3D Quantum Orbital Center Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[580px] lg:w-[780px] h-[300px] sm:h-[580px] lg:h-[780px] pointer-events-none z-0">
        <div className="absolute inset-0 rounded-full border border-cyan-500/15 orbit-ring-1" />
        <div className="absolute inset-6 rounded-full border border-blue-500/15 orbit-ring-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Floating Scientific Glyphs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-25 text-cyan-300 font-mono text-xs hidden sm:block">
        <span className="absolute top-[20%] left-[10%] animate-float font-serif text-xl">ψ</span>
        <span className="absolute top-[26%] right-[12%] animate-float [animation-delay:1.5s]">∇²φ = 0</span>
        <span className="absolute bottom-[30%] left-[14%] animate-float [animation-delay:2.8s] font-serif text-lg">ℏ</span>
        <span className="absolute bottom-[24%] right-[16%] animate-float [animation-delay:0.8s]">Ĥ|ψ⟩ = E|ψ⟩</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-5 sm:space-y-6 animate-step-enter">
        {/* Academic Affiliation Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-bold tracking-wide backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>UNIVERSITÉ D'ALGER 1 • FACULTÉ DES SCIENCES</span>
        </div>

        {/* Central Official Logo (Pure Floating Radial Glow, No Clunky Box) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group cursor-pointer my-1"
          onClick={() => playQuantumChime(987.77, 0.25)}
        >
          <div className="absolute -inset-4 bg-cyan-500/25 rounded-full blur-2xl group-hover:bg-cyan-400/40 transition-all duration-500" />
          <div className="relative">
            <Logo className="w-20 h-20 sm:w-28 sm:h-28" glow={true} />
          </div>
        </motion.div>

        {/* Title & Tagline (Concise & Punchy) */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            QUANTA MULTIDISCIPLINAIRE
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
              THE FUTURE IS OURS
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Scientific student club at Université d'Alger 1. Exploring physics, mathematics, AI, and aerospace engineering.
          </p>

          <p className="text-xs font-mono text-cyan-400/90 tracking-widest uppercase">
            نادي كوانتا العلمي — جامعة الجزائر 1
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <a
            href="/join"
            onClick={() => playQuantumChime(784, 0.2)}
            className="btn-shimmer px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Rocket className="w-4 h-4 stroke-[2.5]" />
            <span>Join Quanta Club</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <button
            onClick={() => scrollToSection('events')}
            className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 text-slate-200 hover:text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>Explore Events</span>
          </button>

          <button
            onClick={() => scrollToSection('departments')}
            className="px-4 py-3 rounded-xl bg-transparent hover:bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-300 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4" />
            <span>Departments</span>
          </button>
        </div>

        {/* Compact, Solid KPIs Bar */}
        <div className="w-full pt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 text-left">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-3 rounded-xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/30 transition-colors"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block truncate">
                {stat.label}
              </span>
              <div className="font-display font-black text-xl sm:text-2xl text-white mt-0.5">
                {stat.value}
              </div>
              <p className="text-[10px] text-slate-400 truncate">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="pt-2 text-slate-500 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1"
        >
          <span className="text-[9px] font-mono tracking-widest uppercase">Explore</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
        </button>
      </div>
    </section>
  );
}
