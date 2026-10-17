import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import { SocialIcons } from './JoinBanner.jsx';
import { EMAIL } from '../data/club.js';

const QUICK_LINKS = [
  ['home', 'Home'],
  ['about', 'About Us'],
  ['events', 'Events'],
  ['activities', 'Activities'],
  ['team', 'The Team'],
  ['join', 'Join Quanta'],
];

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#020512] pt-16 sm:pt-20 pb-10 relative z-10 text-left scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Contact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 sm:pb-12 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400/90 block mb-2">
              Get in Touch // Scientific Partnerships
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Contact & Community
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Questions, institutional partnerships, or workshop proposals? Connect directly with the executive team.
            </p>
          </div>
          <span className="font-mono text-xs text-slate-500 shrink-0">
            EST. 2026 // UNIV ALGIERS 1
          </span>
        </div>

        {/* 3-Column Structured Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 py-12 border-b border-white/10">
          {/* Col 1 (5 cols): Identity & University Affiliation */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3.5">
              <Logo size={44} glow={true} />
              <div>
                <span className="font-display font-bold text-lg text-white tracking-wide uppercase block">
                  Quanta Club
                </span>
                <span className="font-mono text-[11px] text-cyan-400 tracking-widest block uppercase">
                  The Future Is Ours
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300/80 leading-relaxed max-w-sm mt-1">
              Student-led scientific club promoting STEM research, hands-on engineering, and public outreach across Algeria.
            </p>

            <div className="mt-2 pt-3 border-t border-white/10 flex flex-col gap-1 text-xs text-slate-400 font-mono">
              <span className="text-slate-300 font-sans font-medium text-sm">
                Faculty of Sciences
              </span>
              <span>Université d'Alger 1 (Benyoucef Benkhedda)</span>
              <span>2 Rue Didouche Mourad, Algiers 16000, Algeria</span>
            </div>
          </div>

          {/* Col 2 (4 cols): Direct Contact & Social Links */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-1.5">
                Official Inquiries
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="font-display font-semibold text-base sm:text-lg text-cyan-300 hover:text-white transition-colors inline-flex items-center gap-2 break-all group"
              >
                <span>{EMAIL}</span>
                <span className="text-sm text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>
            </div>

            <div className="w-full pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-3">
                Social Networks
              </span>
              <SocialIcons />
            </div>
          </div>

          {/* Col 3 (3 cols): Directory & Quick Navigation */}
          <div className="md:col-span-3 flex flex-col items-start gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-1">
              Navigation
            </span>
            <nav aria-label="Footer links" className="flex flex-col gap-2">
              {QUICK_LINKS.map(([id, label]) =>
                id === 'join' ? (
                  <Link
                    key={id}
                    to="/join"
                    className="text-sm text-slate-300 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{label}</span>
                    <span className="text-xs text-cyan-400">→</span>
                  </Link>
                ) : (
                  <a
                    key={id}
                    href={`/#${id}`}
                    className="text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    {label}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Quanta Scientific Club — Université d'Alger 1. All rights reserved.</p>
          <span className="text-cyan-400/80 tracking-widest">EXPLORING THE UNIVERSE THROUGH STEM</span>
        </div>
      </div>
    </footer>
  );
}
