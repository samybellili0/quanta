import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DEPARTMENTS } from '../data/club.js';
import SpotlightCard from '../components/SpotlightCard.jsx';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

const FORM_URL = 'https://quanta-registrations.web.app/';

export default function JoinPage() {
  const { playQuantumChime } = useSoundEffects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-[80vh] pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto text-left">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display font-bold text-3xl sm:text-4xl text-white mb-3"
      >
        Join Quanta
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="text-slate-300/85 text-sm sm:text-base max-w-[70ch] leading-relaxed mb-10"
      >
        Joining is selective. Discover our six departments first, then complete the application. New members start as trainees for 4 months before they can become Official Members.
      </motion.p>

      <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-5">
        Our six departments
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
        {DEPARTMENTS.map((d, idx) => (
          <SpotlightCard
            key={d.id}
            as="article"
            delay={idx * 0.06}
            className="p-5 sm:p-6 hover:-translate-y-1 flex flex-col items-start"
          >
            <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {d.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed">
              {d.def}
            </p>
          </SpotlightCard>
        ))}
      </div>

      <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
        Application
      </h2>

      <SpotlightCard className="p-6 sm:p-8 flex flex-col items-start gap-4">
        <p className="text-sm sm:text-base text-slate-200">
          Ready to apply? The application takes about 15 minutes.
        </p>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playQuantumChime(880, 0.2)}
          className="btn-shimmer px-6 py-2.5 rounded-lg bg-[#1d4ed8] hover:bg-blue-600 text-white border border-cyan-400 font-semibold text-sm sm:text-base transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(56,189,248,0.5)]"
        >
          Open the application form
        </a>
      </SpotlightCard>
    </section>
  );
}
