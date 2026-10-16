import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SOCIALS, EMAIL } from '../data/club.js';
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
      className="w-5 h-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M24 12.07C24 5.45 18.63.07 12 .07S0 5.45 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.39H7.08v-3.46h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.52c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.46h-2.8v8.39C19.61 23.03 24 18.06 24 12.07z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

export function SocialIcons() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {SOCIALS.map(([label, url]) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="group inline-flex items-center gap-2 py-1 text-slate-300 hover:text-cyan-300 transition-colors hairline-sweep"
        >
          <span className="text-cyan-400 transition-transform duration-300 group-hover:scale-110">
            {SOCIAL_ICONS[label]}
          </span>
          <span className="text-xs sm:text-sm font-medium">{label}</span>
          <span className="text-xs text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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
    <>
      {/* Join Quanta — Open Gravitational Portal Horizon */}
      <section
        id="join"
        className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden"
      >
        <div className="relative border-y border-white/10 py-12 sm:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10">
          {/* Background Orbital Wave Geometry */}
          <svg
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] opacity-25 pointer-events-none select-none"
            viewBox="0 0 380 380"
            fill="none"
          >
            <circle
              cx="190"
              cy="190"
              r="175"
              stroke="#38bdf8"
              strokeWidth="1"
              strokeDasharray="6 8"
              className="animate-spin-slow"
              style={{ transformOrigin: '190px 190px' }}
            />
            <circle
              cx="190"
              cy="190"
              r="130"
              stroke="#818cf8"
              strokeWidth="1"
              strokeDasharray="14 10"
              className="animate-spin-slow-reverse"
              style={{ transformOrigin: '190px 190px' }}
            />
            <ellipse
              cx="190"
              cy="190"
              rx="170"
              ry="60"
              transform="rotate(-28 190 190)"
              stroke="#38bdf8"
              strokeWidth="1.2"
            />
          </svg>

          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.06]">
              Join Quanta
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-300/85 text-sm sm:text-lg leading-relaxed max-w-xl">
              Membership starts with a 4-month probation. Discover our departments, then apply.
            </p>
          </div>

          {/* Interactive Orbital Portal Trigger */}
          <Link
            to="/join"
            onClick={() => playQuantumChime(784, 0.2)}
            className="group relative z-10 inline-flex items-center gap-4 sm:gap-5 shrink-0"
          >
            <span className="font-display font-bold text-base sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
              Start your application
            </span>
            <span className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-cyan-400/60 group-hover:border-cyan-300 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(56,189,248,0.45)]">
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow text-cyan-400/40"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                />
              </svg>
              <span className="text-lg sm:text-xl text-cyan-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          </Link>
        </div>
      </section>

      {/* Contact — Open Architectural Hairline Grid */}
      <section id="contact" className="pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight"
            >
              Contact
            </motion.h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Questions, partnerships or ideas? Get in touch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="py-5 sm:py-6 md:pr-8 flex flex-col justify-between gap-2 hairline-sweep">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
              University
            </span>
            <p className="font-display font-semibold text-base sm:text-lg text-white">
              University of Algiers 1, Algiers
            </p>
          </div>

          <div className="py-5 sm:py-6 md:px-8 flex flex-col justify-between gap-2 hairline-sweep">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Email
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="font-display font-semibold text-base sm:text-lg text-cyan-300 hover:text-white select-all transition-colors inline-flex items-center gap-2 break-all"
            >
              <span>{EMAIL}</span>
              <span className="text-sm shrink-0">↗</span>
            </a>
          </div>

          <div className="py-5 sm:py-6 md:pl-8 flex flex-col justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Social Networks
            </span>
            <SocialIcons />
          </div>
        </div>
      </section>
    </>
  );
}
