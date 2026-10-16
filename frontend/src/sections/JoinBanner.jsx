import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Rocket } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

export default function JoinBanner() {
  const { playQuantumChime } = useSoundEffects();

  return (
    <section id="join" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-950/90 via-cyan-950/40 to-slate-950/90 border border-cyan-500/35 relative overflow-hidden text-center space-y-5 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
        <div className="quantum-laser-line" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>RECRUITMENT PORTAL • LIVE</span>
        </div>

        <div className="space-y-2 max-w-xl mx-auto">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            Ready to Build the Future with Quanta?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Hands-on labs, 24h hackathons, stargazing field trips, and a vibrant community of passionate scientists.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <a
            href="https://quanta-registrations.web.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playQuantumChime(880, 0.2)}
            className="btn-shimmer px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Rocket className="w-4 h-4 stroke-[2.5]" />
            <span>Launch Application Form</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <Link
            to="/join"
            className="px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-bold transition-all"
          >
            Application Guide
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-[11px] sm:text-xs text-slate-400 font-mono">
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
