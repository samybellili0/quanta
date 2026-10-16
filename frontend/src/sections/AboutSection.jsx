import React from 'react';
import { motion } from 'framer-motion';
import { STATS, DOMAINS } from '../data/club.js';
import SpotlightCard from '../components/SpotlightCard.jsx';
import {
  AtomOrbitalSvg,
  MathModelingSvg,
  NeuralAiSvg,
  DeepSpaceTelescopeSvg,
  CircuitChipSvg,
  MaterialsCrystalSvg,
} from '../components/OriginalIcons.jsx';

const DOMAIN_ICONS = {
  physics: AtomOrbitalSvg,
  math: MathModelingSvg,
  cs: NeuralAiSvg,
  astronomy: DeepSpaceTelescopeSvg,
  engineering: CircuitChipSvg,
  stem: MaterialsCrystalSvg,
};

export default function AboutSection() {
  return (
    <>
      {/* About Quanta Section */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-2xl sm:text-4xl text-white mb-3"
        >
          About Quanta
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-slate-300/85 text-sm sm:text-base max-w-[70ch] leading-relaxed mb-6 sm:mb-8"
        >
          Quanta is a student club at University of Algiers 1 bringing together students curious about physics, mathematics, computer science, astronomy, engineering, technology, artificial intelligence, electronics, scientific research and STEM education.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
          {STATS.map(([num, label], idx) => (
            <SpotlightCard
              key={label}
              delay={idx * 0.07}
              className="p-4 sm:p-6 hover:-translate-y-1"
            >
              <strong className="block font-display font-bold text-3xl sm:text-4xl text-cyan-400">
                {num}
              </strong>
              <span className="text-xs sm:text-sm text-slate-300 mt-1 block">
                {label}
              </span>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Scientific Domains Section */}
      <section id="domains" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-2xl sm:text-4xl text-white mb-6 sm:mb-8"
        >
          Scientific domains
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {DOMAINS.map(([id, title, desc], idx) => {
            const IconSvg = DOMAIN_ICONS[id] || AtomOrbitalSvg;
            return (
              <SpotlightCard
                key={title}
                as="article"
                delay={idx * 0.06}
                className="p-4 sm:p-6 hover:-translate-y-1.5 flex flex-col items-start"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-slate-900/90 border border-sky-400/25 flex items-center justify-center mb-3 group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300">
                  <IconSvg size={28} animate={true} />
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300/80 leading-snug">
                  {desc}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </section>
    </>
  );
}
