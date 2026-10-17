import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SOCIALS } from '../data/club.js';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

export const SOCIAL_ICONS = {
  Instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M24 12.07C24 5.45 18.63.07 12 .07S0 5.45 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.39H7.08v-3.46h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.52c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.46h-2.8v8.39C19.61 23.03 24 18.06 24 12.07z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

export function SocialIcons() {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {SOCIALS.map(([label, url]) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="group inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 transition-all duration-300"
        >
          <span className="text-cyan-400 transition-transform duration-300 group-hover:scale-110">
            {SOCIAL_ICONS[label]}
          </span>
          <span className="text-xs sm:text-sm font-medium">{label}</span>
          <span className="text-xs text-cyan-400/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}

export default function JoinBanner() {
  const { playQuantumChime } = useSoundEffects();

  return (
    <section
      id="join"
      className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background Orbital Field */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end -mr-20 opacity-20">
        <svg className="w-[500px] h-[500px]" viewBox="0 0 500 500" fill="none">
          <circle
            cx="250"
            cy="250"
            r="230"
            stroke="#38bdf8"
            strokeWidth="1"
            strokeDasharray="8 12"
            className="animate-spin-slow"
            style={{ transformOrigin: '250px 250px' }}
          />
          <circle
            cx="250"
            cy="250"
            r="160"
            stroke="#818cf8"
            strokeWidth="1"
            strokeDasharray="14 10"
            className="animate-spin-slow-reverse"
            style={{ transformOrigin: '250px 250px' }}
          />
          <ellipse
            cx="250"
            cy="250"
            rx="210"
            ry="75"
            transform="rotate(-28 250 250)"
            stroke="#38bdf8"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="relative z-10 border-y border-white/10 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols): Vision & 3-Stage Fellowship Trajectory */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs tracking-wider w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>RECRUITMENT ACTIVE // COHORT 2026</span>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300">Quanta</span>
              </h2>
              <p className="mt-4 text-slate-300/85 text-base sm:text-lg leading-relaxed max-w-xl">
                Be part of Algeria's leading university STEM community. Build real hardware and software projects, organize national congresses, and collaborate with passionate peers across mathematics, physics, and computer science.
              </p>
            </div>

            {/* 3-Step Candidate Progression Trajectory */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10">
              <div className="flex flex-col gap-1.5 pt-3">
                <span className="font-mono text-xs text-cyan-400/80">01 // SELECT</span>
                <span className="font-display font-semibold text-sm sm:text-base text-white">5 Divisions</span>
                <p className="text-xs text-slate-400 leading-snug">
                  Choose your specialty: Science, Dev, Media, Events or Logistics.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 pt-3 sm:border-l sm:border-white/10 sm:pl-4">
                <span className="font-mono text-xs text-cyan-400/80">02 // PROBATION</span>
                <span className="font-display font-semibold text-sm sm:text-base text-white">4-Month Track</span>
                <p className="text-xs text-slate-400 leading-snug">
                  Hands-on project mentorship and trial workshops.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 pt-3 sm:border-l sm:border-white/10 sm:pl-4">
                <span className="font-mono text-xs text-cyan-400/80">03 // INDUCTION</span>
                <span className="font-display font-semibold text-sm sm:text-base text-white">Full Fellow</span>
                <p className="text-xs text-slate-400 leading-snug">
                  Official club credential, leadership & voting privileges.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): High-Impact Action Cockpit Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0c1836]/90 via-[#070f24]/90 to-[#030614]/95 border border-cyan-400/30 shadow-[0_0_40px_rgba(56,189,248,0.12)] backdrop-blur-md flex flex-col gap-6">
              {/* Subtle Corner Reticles */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400/50" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400/50" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-400/50" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-400/50" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-300/80">
                  Admissions Portal
                </span>
                <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  OPEN
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Ready to Shape the Future?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300/75 leading-relaxed">
                  Open to all registered university students in Algeria. No previous club experience required.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-1">
                <Link
                  to="/join"
                  onClick={() => playQuantumChime(880, 0.2)}
                  className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-display font-bold text-base shadow-[0_0_24px_rgba(56,189,248,0.45)] hover:shadow-[0_0_36px_rgba(56,189,248,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span>Start Your Application</span>
                  <span className="text-lg">→</span>
                </Link>

                <Link
                  to="/join#departments"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm text-slate-300 hover:text-cyan-300 hover:bg-white/[0.03] border border-transparent hover:border-white/10 transition-all text-center"
                >
                  <span>Explore 5 Departments & Roles</span>
                  <span className="text-cyan-400">↘</span>
                </Link>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>BATCH // 2026</span>
                <span>ALGIERS 1 FACULTY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
