import React from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  Cpu,
  GraduationCap,
  Globe2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const PILLARS = [
  {
    icon: Atom,
    title: 'Multidisciplinary Science',
    titleAr: 'تعددية التخصصات',
    desc: 'Connecting physics, mathematics, AI, and biotechnology into collaborative student projects.',
    accent: 'from-cyan-500/15 to-blue-500/15',
    border: 'border-cyan-500/30',
    text: 'text-cyan-300',
  },
  {
    icon: Cpu,
    title: 'Practical Prototyping',
    titleAr: 'النماذج والتطبيق',
    desc: '24-hour CTF cybersecurity challenges, robotics prototypes, and telescope field observations.',
    accent: 'from-sky-500/15 to-indigo-500/15',
    border: 'border-sky-500/30',
    text: 'text-sky-300',
  },
  {
    icon: GraduationCap,
    title: 'Academic Peer Care',
    titleAr: 'الرعاية الأكاديمية',
    desc: 'Peer study circles, exam prep mentorship, and student burnout-prevention support.',
    accent: 'from-purple-500/15 to-pink-500/15',
    border: 'border-purple-500/30',
    text: 'text-purple-300',
  },
  {
    icon: Globe2,
    title: 'National Impact & Outreach',
    titleAr: 'نشر الثقافة العلمية',
    desc: 'Alliances with research centers (CRAAG), national scholar symposiums, and public astronomy days.',
    accent: 'from-emerald-500/15 to-teal-500/15',
    border: 'border-emerald-500/30',
    text: 'text-emerald-300',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-2 mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>ABOUT QUANTA</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
          Where Scientific Curiosity Meets Real-World Impact
        </h2>

        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Founded at the Faculty of Sciences (Université d'Alger 1), Quanta brings together passionate students to turn academic theory into hands-on innovation.
        </p>
      </div>

      {/* Solid Flat Overview Banner (No nested box-in-box) */}
      <div className="p-5 sm:p-8 rounded-2xl bg-slate-950/80 border border-cyan-500/25 relative overflow-hidden mb-8 shadow-xl">
        <div className="quantum-laser-line" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              FACULTÉ DES SCIENCES • ALGER CENTRE
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              We bridge computer science with astrophysics, biology with electronics, and mathematics with cryptography. We operate with strict neutrality: no political or union affiliation, structured written tasks, and certified recognition for active members.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 shrink-0">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Independent & Neutral</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Certified Membership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Hands-on Labs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>4-Month Probation</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid (Compact, Solid, No Bulky Boxes) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {PILLARS.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.35 }}
              className={`p-4 sm:p-5 rounded-2xl bg-slate-950/70 border ${p.border} hover:border-cyan-400/60 text-left transition-all duration-200 flex flex-col justify-between`}
            >
              <div className="space-y-2.5">
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.accent} border ${p.border} flex items-center justify-center ${p.text}`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-white">{p.title}</h4>
                  <p className="text-[10px] font-mono text-cyan-400/80">{p.titleAr}</p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
