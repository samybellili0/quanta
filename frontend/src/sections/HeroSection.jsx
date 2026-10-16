import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo.jsx';
import {
  Rocket,
  ArrowRight,
  Calendar,
  Layers,
  ChevronDown,
  Sparkles,
  Compass,
} from 'lucide-react';
import { STATS } from '../data/club.js';
import {
  AtomOrbitalSvg,
  CircuitChipSvg,
  DeepSpaceTelescopeSvg,
  NeuralAiSvg,
} from '../components/OriginalIcons.jsx';
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
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 sm:pt-28 pb-10 sm:pb-16 px-3 sm:px-6 lg:px-8 text-center overflow-hidden"
    >
      {/* 3D Quantum Orbital Center Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[580px] lg:w-[820px] h-[320px] sm:h-[580px] lg:h-[820px] pointer-events-none z-0">
        <div className="absolute inset-0 rounded-full border border-cyan-500/15 orbit-ring-1" />
        <div className="absolute inset-8 rounded-full border border-blue-500/15 orbit-ring-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-88 h-48 sm:h-88 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Futuristic Floating Scientific HUD Glyphs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-25 text-cyan-300 font-mono text-xs hidden sm:block">
        <span className="absolute top-[18%] left-[8%] animate-float font-serif text-2xl text-cyan-400/80">ψ(r,t)</span>
        <span className="absolute top-[24%] right-[10%] animate-float [animation-delay:1.5s]">∇ × B = μ₀J</span>
        <span className="absolute bottom-[28%] left-[12%] animate-float [animation-delay:2.8s] font-serif text-xl">ℏω / 2</span>
        <span className="absolute bottom-[22%] right-[14%] animate-float [animation-delay:0.8s]">Ĥ|ψ⟩ = iℏ∂/∂t|ψ⟩</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-5 sm:space-y-6 animate-step-enter">
        {/* HUD Geographic & Academic Header Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-cyan-500/35 text-cyan-300 text-[10px] sm:text-[11px] font-mono font-bold tracking-wide backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-white">UNIVERSITÉ D'ALGER 1</span>
          <span className="text-cyan-400/60">•</span>
          <span className="text-cyan-300">FACULTÉ DES SCIENCES</span>
          <span className="text-cyan-400/60 hidden md:inline">•</span>
          <span className="text-slate-400 hidden md:inline">36.7538° N, 3.0588° E</span>
        </div>

        {/* Central Official Logo with Bespoke Holographic Telemetry Rings */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-pointer my-2"
          onClick={() => playQuantumChime(987.77, 0.3)}
        >
          {/* Animated Holographic Orbital Telemetry Ring SVG */}
          <div className="absolute -inset-6 pointer-events-none flex items-center justify-center">
            <svg
              className="w-36 h-36 sm:w-48 sm:h-48 animate-[spin_20s_linear_infinite]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="#06b6d4"
                strokeWidth="0.8"
                strokeDasharray="4 6 12 6"
                strokeOpacity="0.4"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#38bdf8"
                strokeWidth="0.6"
                strokeDasharray="2 4"
                strokeOpacity="0.3"
              />
              <circle cx="50" cy="4" r="1.8" fill="#38bdf8" />
              <circle cx="96" cy="50" r="1.8" fill="#06b6d4" />
              <circle cx="50" cy="96" r="1.8" fill="#38bdf8" />
              <circle cx="4" cy="50" r="1.8" fill="#06b6d4" />
            </svg>
          </div>

          {/* Atmospheric Radial Bloom Halo */}
          <div className="absolute -inset-4 bg-cyan-500/25 rounded-full blur-2xl group-hover:bg-cyan-400/40 group-hover:scale-110 transition-all duration-500" />

          {/* Central Logo from Repo */}
          <div className="relative group-hover:scale-105 transition-transform duration-300">
            <Logo className="w-20 h-20 sm:w-28 sm:h-28" glow={true} />
          </div>
        </motion.div>

        {/* Title & Scientific Tagline */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            QUANTA MULTIDISCIPLINAIRE
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.45)]">
              THE FUTURE IS OURS
            </span>
          </h1>

          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Leading scientific club at Université d'Alger 1. Fusing astrophysics, artificial intelligence, robotics, and applied physics.
          </p>

          <p className="text-xs font-mono text-cyan-400/90 tracking-widest uppercase">
            نادي كوانتا العلمي — جامعة الجزائر 1
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
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

        {/* Responsive, Sleek KPIs Bar with Bespoke Visual Glyphs */}
        <div className="w-full pt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 text-left">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
              className="p-3 sm:p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/35 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 truncate">
                  {stat.label}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-300 transition-colors" />
              </div>

              <div className="font-display font-black text-xl sm:text-2xl text-white mt-1 group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="pt-2 text-slate-500 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1 group"
        >
          <span className="text-[9px] font-mono tracking-widest uppercase group-hover:tracking-wider transition-all">
            Scroll to Explore
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
        </button>
      </div>
    </section>
  );
}
