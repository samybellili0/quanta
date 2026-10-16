import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Rocket } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

export default function JoinBanner() {
  const { playQuantumChime } = useSoundEffects();

  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="quantum-card rounded-3xl p-8 sm:p-12 border border-cyan-500/40 relative overflow-hidden text-center space-y-6 shadow-[0_0_60px_rgba(6,182,212,0.2)]">
        <div className="quantum-laser-line" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>RECRUITMENT APPLICATION PORTAL • LIVE</span>
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Ready to Build the Future with Quanta?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Joining is selective. New candidates undergo a 4-month probationary journey, gain access to specialized laboratories, and contribute to national scientific initiatives.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://quanta-registrations.web.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playQuantumChime(880, 0.2)}
            className="btn-shimmer px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-sm tracking-wide shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Rocket className="w-4 h-4 stroke-[2.5]" />
            <span>Launch Official Application Form</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <Link
            to="/join"
            className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-bold transition-all"
          >
            Application Guide & Details
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Selective Evaluation</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official Certificate</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Université d'Alger 1</span>
          </span>
        </div>
      </div>
    </section>
  );
}
