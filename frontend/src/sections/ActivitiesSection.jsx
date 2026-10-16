import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVITIES } from '../data/club.js';
import DynamicIcon from '../components/DynamicIcon.jsx';
import { Sparkles, Calendar } from 'lucide-react';

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>YEAR-ROUND RHYTHM</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
          Scientific Activities & Labs
        </h2>

        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Weekly hands-on workshops, study circles, telescope nights, and applied experiments.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {ACTIVITIES.map((act, idx) => (
          <motion.div
            key={act.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04, duration: 0.35 }}
            className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/40 group text-left flex flex-col justify-between transition-all duration-200"
          >
            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-2xl bg-slate-900/90 border border-cyan-500/25 text-cyan-300 flex items-center justify-center p-1.5 shadow-[0_0_12px_rgba(6,182,212,0.15)] group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                <DynamicIcon name={act.icon} className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {act.name}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-snug line-clamp-2">
                  {act.desc}
                </p>
              </div>
            </div>

            <div className="pt-2.5 mt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
              <span className="truncate">Active Lab</span>
              <span className="text-cyan-400 shrink-0">✦ Active</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
