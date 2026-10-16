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
  ['join', 'Join Us'],
  ['contact', 'Contact'],
];

export default function FooterSection() {
  return (
    <footer className="border-t border-sky-400/20 bg-[#020617]/90 pt-12 pb-6 mt-10 relative z-10 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col items-start gap-2.5">
          <div className="flex items-center gap-3">
            <Logo size={44} glow={true} />
            <span className="font-display font-bold text-lg sm:text-xl tracking-wider uppercase text-white">
              Quanta THE FUTURE IS OURS
            </span>
          </div>

          <p className="text-sm text-slate-300/75 max-w-[44ch]">
            Exploring the Universe Through STEM
          </p>

          <h4 className="font-display font-bold text-base text-white mt-2">
            Stay Updated
          </h4>

          <p className="text-sm text-slate-300/75 max-w-[44ch]">
            Follow us on social media for the latest updates and events.
          </p>

          <div className="pt-1">
            <SocialIcons />
          </div>

          <p className="text-sm text-sky-200 select-all pt-1">{EMAIL}</p>
        </div>

        <nav aria-label="Quick links" className="flex flex-col items-start gap-2">
          <h4 className="font-display font-bold text-base text-white mb-1">
            Quick Links
          </h4>
          {QUICK_LINKS.map(([id, label]) =>
            id === 'join' ? (
              <Link
                key={id}
                to="/join"
                className="text-sm text-slate-200/75 hover:text-cyan-400 transition-colors"
              >
                {label}
              </Link>
            ) : (
              <a
                key={id}
                href={`/#${id}`}
                className="text-sm text-slate-200/75 hover:text-cyan-400 transition-colors"
              >
                {label}
              </a>
            )
          )}
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs sm:text-sm text-slate-400/70 mt-9 pt-5 border-t border-sky-400/15">
          © 2026 Quanta Club — Université d'Alger 1. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
