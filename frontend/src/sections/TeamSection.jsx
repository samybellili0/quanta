import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../data/club.js';
import SpotlightCard from '../components/SpotlightCard.jsx';

export default function TeamSection() {
  return (
    <section id="team" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display font-bold text-2xl sm:text-4xl text-white mb-6 sm:mb-8"
      >
        The team
      </motion.h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {TEAM.map(([name, role, photo], idx) => {
          const initials = name
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('');

          return (
            <SpotlightCard
              key={role}
              as="article"
              delay={idx * 0.05}
              className="p-4 sm:p-6 hover:-translate-y-1.5 flex flex-col items-start text-left"
            >
              {photo ? (
                <img
                  src={photo}
                  alt={name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-cyan-400 mb-3"
                />
              ) : (
                <div
                  role="img"
                  aria-label={`Photo of ${name}`}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#0a1228] border border-cyan-400/70 flex items-center justify-center font-display font-bold text-sm sm:text-base text-cyan-200 mb-3 group-hover:scale-105 transition-transform"
                >
                  {initials}
                </div>
              )}

              <h3 className="font-display font-bold text-sm sm:text-lg text-white leading-snug mb-1 group-hover:text-cyan-300 transition-colors">
                {name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300/80 leading-snug">
                {role}
              </p>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
