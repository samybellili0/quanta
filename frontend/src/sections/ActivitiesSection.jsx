import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVITIES } from '../data/club.js';
import DynamicIcon from '../components/DynamicIcon.jsx';
import { Sparkles, Calendar } from 'lucide-react';

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>YEAR-ROUND RHYTHM</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Scientific Activities & Weekly Labs
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Throughout the academic year, Quanta members engage in hands-on workshops,
          peer learning circles, telescope observation nights, and collaborative research initiatives.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ACTIVITIES.map((act, idx) => (
          <motion.div
            key={act.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="quantum-subcard p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 group text-left flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all">
                <DynamicIcon name={act.icon} className="w-5 h-5" />
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                  {act.name}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{act.desc}</p>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Annual Program</span>
              <span className="text-cyan-400">✦ Active</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
