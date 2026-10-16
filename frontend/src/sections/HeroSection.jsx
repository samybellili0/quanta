import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo.jsx';
import {
  Sparkles,
  Rocket,
  ArrowRight,
  Orbit,
  Atom,
  ChevronDown,
  Users,
  Calendar,
  Layers,
  Cpu,
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
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
    >
      {/* 3D Quantum Orbital Center Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[620px] lg:w-[840px] h-[340px] sm:h-[620px] lg:h-[840px] pointer-events-none z-0">
        {/* Outer Orbit 1 */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/15 orbit-ring-1" />
        {/* Outer Orbit 2 */}
        <div className="absolute inset-8 rounded-full border border-blue-500/15 orbit-ring-2" />
        {/* Center Glow Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Floating Scientific Glyphs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30 text-cyan-300 font-mono text-sm hidden md:block">
        <span className="absolute top-[22%] left-[12%] animate-float font-serif text-2xl">
          ψ
        </span>
        <span className="absolute top-[28%] right-[15%] animate-float [animation-delay:1.5s] text-lg">
          ∇²φ = 0
        </span>
        <span className="absolute bottom-[35%] left-[18%] animate-float [animation-delay:2.8s] text-xl font-serif">
          ℏ
        </span>
        <span className="absolute bottom-[28%] right-[20%] animate-float [animation-delay:0.8s] text-base">
          Ĥ|ψ⟩ = E|ψ⟩
        </span>
        <span className="absolute top-[48%] left-[6%] animate-float [animation-delay:3.2s] text-lg font-serif">
          ∮ B·dl = μ₀I
        </span>
        <span className="absolute top-[42%] right-[8%] animate-float [animation-delay:2.1s] text-lg">
          E² = p²c² + m₀²c⁴
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center space-y-6 sm:space-y-8 animate-step-enter">
        {/* Academic Affiliation Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.18)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>UNIVERSITÉ D'ALGER 1 • FACULTÉ DES SCIENCES</span>
        </div>

        {/* Central Quantum Logo with Pulsing Halo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative group cursor-pointer"
          onClick={() => playQuantumChime(987.77, 0.25)}
        >
          <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/35 transition-all duration-500" />
          <div className="relative p-2 rounded-3xl bg-slate-950/40 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_35px_rgba(6,182,212,0.3)]">
            <Logo size={105} glow={true} />
          </div>
        </motion.div>

        {/* Title & Tagline */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-white leading-[1.08]">
            QUANTA MULTIDISCIPLINAIRE
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              THE FUTURE IS OURS
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Exploring the Universe through STEM. Connecting ambitious scientific minds,
            fostering advanced research, and engineering tangible breakthroughs.
          </p>

          <p className="text-xs sm:text-sm font-mono text-cyan-400/90 tracking-widest uppercase">
            نادي كوانتا العلمي — جامعة الجزائر 1 بن يوسف بن خدة
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <a
            href="/join"
            onClick={() => playQuantumChime(784, 0.2)}
            className="btn-shimmer px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-sm tracking-wide shadow-[0_0_30px_rgba(6,182,212,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5"
          >
            <Rocket className="w-4 h-4 stroke-[2.5]" />
            <span>Join Quanta Club</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <button
            onClick={() => scrollToSection('events')}
            className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400/60 text-slate-200 hover:text-white font-bold text-sm transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.1)] flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>Explore Major Events</span>
          </button>

          <button
            onClick={() => scrollToSection('departments')}
            className="px-5 py-3.5 rounded-2xl bg-transparent hover:bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-300 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4" />
            <span>Departments & Teams</span>
          </button>
        </div>

        {/* Live KPIs Grid */}
        <div className="w-full pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 text-left">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="quantum-subcard p-4 rounded-2xl border border-white/10 hover:border-cyan-500/40 relative overflow-hidden group cursor-default"
            >
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-cyan-300 transition-colors">
                  {stat.label}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <p className="text-[11px] text-slate-400 truncate mt-0.5">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="pt-6 text-slate-500 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1 group"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </button>
      </div>
    </section>
  );
}
