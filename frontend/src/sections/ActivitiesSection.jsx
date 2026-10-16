import React from 'react';
import { motion } from 'framer-motion';
import { ACTS } from '../data/club.js';
import SpotlightCard from '../components/SpotlightCard.jsx';

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display font-bold text-2xl sm:text-4xl text-white mb-2"
      >
        Activities
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.06 }}
        className="text-slate-300/85 text-sm sm:text-base mb-6 sm:mb-8"
      >
        What we do throughout the year.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {ACTS.map((act, idx) => (
          <SpotlightCard
            key={act}
            delay={idx * 0.04}
            className="p-3.5 sm:p-4 text-center hover:-translate-y-1 flex items-center justify-center"
          >
            <span className="font-medium text-xs sm:text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
              {act}
            </span>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
