import React from 'react';
import { motion } from 'framer-motion';
import { RULES } from '../data/club.js';
import { ShieldCheck, BookOpen, Scale, AlertCircle } from 'lucide-react';

export default function InternalLawSection() {
  return (
    <section id="rules" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
          <Scale className="w-3.5 h-3.5 text-cyan-400" />
          <span>GOVERNANCE & INTEGRITY</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Quanta Internal Law 2026–2027
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          High academic standards and disciplined execution. Read our official internal statutes
          and membership principles before applying.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {RULES.map((rule, idx) => (
          <motion.div
            key={rule.art}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="quantum-subcard p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 text-left flex flex-col justify-between group transition-all"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                  {rule.art}
                </span>
                <ShieldCheck className="w-4 h-4 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                  {rule.title}
                </h4>
                <p className="text-[11px] font-mono text-cyan-400/80">{rule.titleAr}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{rule.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-2xl bg-slate-950/60 border border-white/10 text-center text-xs text-slate-400 max-w-2xl mx-auto">
        <p>
          <strong className="text-white">Notice (Art. 8):</strong> Ignorance of the Internal Law is never an excuse. All accepted candidates sign the written Pledge of Compliance during the onboarding bootcamp.
        </p>
      </div>
    </section>
  );
}
