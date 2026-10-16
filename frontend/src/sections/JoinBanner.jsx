import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard.jsx';
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
    <div className="flex items-center gap-3">
      {SOCIALS.map(([label, url]) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="w-10 h-10 rounded-md border border-sky-400/25 hover:border-cyan-400 text-cyan-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_16px_rgba(56,189,248,0.4)]"
        >
          {SOCIAL_ICONS[label]}
        </a>
      ))}
    </div>
  );
}

export default function JoinBanner() {
  const { playQuantumChime } = useSoundEffects();

  return (
    <>
      {/* Join Quanta CTA Section */}
      <section id="join" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <SpotlightCard className="p-6 sm:p-8 flex flex-col items-start text-left gap-3">
          <div className="quantum-laser-line" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Join Quanta
          </h2>
          <p className="text-slate-300/85 text-sm sm:text-base max-w-[68ch] leading-relaxed">
            Membership starts with a 4-month probation. Discover our six departments, then apply.
          </p>
          <Link
            to="/join"
            onClick={() => playQuantumChime(784, 0.2)}
            className="btn-shimmer mt-1 px-6 py-2.5 rounded-lg bg-[#1d4ed8] hover:bg-blue-600 text-white border border-cyan-400 font-semibold text-sm sm:text-base transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(56,189,248,0.5)]"
          >
            Start your application
          </Link>
        </SpotlightCard>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-2xl sm:text-4xl text-white mb-2"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="text-slate-300/85 text-sm sm:text-base mb-6"
        >
          Questions, partnerships or ideas? Get in touch.
        </motion.p>

        <SpotlightCard className="p-5 sm:p-7 flex flex-col items-start text-left gap-3">
          <p className="text-sm sm:text-base text-slate-200">
            <strong className="text-white font-semibold mr-2">University</strong>
            University of Algiers 1, Algiers
          </p>
          <p className="text-sm sm:text-base text-slate-200">
            <strong className="text-white font-semibold mr-2">Email</strong>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sky-200 hover:text-cyan-400 select-all transition-colors"
            >
              {EMAIL}
            </a>
          </p>
          <div className="pt-1">
            <SocialIcons />
          </div>
        </SpotlightCard>
      </section>
    </>
  );
}
