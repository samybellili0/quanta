import React from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  Cpu,
  GraduationCap,
  Globe2,
  Sparkles,
  CheckCircle2,
  Shield,
  Lightbulb,
} from 'lucide-react';

const PILLARS = [
  {
    icon: Atom,
    title: 'Multidisciplinary Scientific Depth',
    titleAr: 'تعددية التخصصات والعمق الأكاديمي',
    desc: 'Unifying physics, mathematics, computer science, astronomy, chemistry, and life sciences under one collaborative umbrella to solve multi-faceted scientific puzzles.',
    badge: 'Core Identity',
    accent: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/30',
    text: 'text-cyan-300',
  },
  {
    icon: Cpu,
    title: 'Practical Prototyping & Labs',
    titleAr: 'النماذج التطبيقية والابتكار العملي',
    desc: 'Moving beyond textbooks into 24-hour CTF cybersecurity battles, robotics prototypes, artificial intelligence pipelines, and telescope observation expeditions.',
    badge: 'Hands-On',
    accent: 'from-sky-500/20 to-indigo-500/20',
    border: 'border-sky-500/30',
    text: 'text-sky-300',
  },
  {
    icon: GraduationCap,
    title: 'Academic Care & Anti-Burnout',
    titleAr: 'الرعاية الأكاديمية ومكافحة الإرهاق',
    desc: 'Ensuring student well-being through peer tutoring, senior mentorship, comprehensive exam prep circles, and psychological support during rigorous exam seasons.',
    badge: 'Human Factor',
    accent: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
    text: 'text-purple-300',
  },
  {
    icon: Globe2,
    title: 'Public Outreach & Alliances',
    titleAr: 'نشر الثقافة العلمية والشراكات الوطنية',
    desc: 'Official alliances with research centers like CRAAG, participating in national intellectual forums like Wissam Al-Alim, and organizing public astronomical field events.',
    badge: 'Impact',
    accent: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    text: 'text-emerald-300',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>ABOUT QUANTA CLUB</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Where Quantum Curiosity Meets Real-World Impact
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Founded at the Faculty of Sciences of Université d'Alger 1, Quanta brings together
          future scientists, software engineers, physicists, and thinkers to redefine university student life.
        </p>
      </div>

      {/* Narrative Card with Laser Sweep Line */}
      <div className="quantum-card rounded-3xl p-6 sm:p-10 border border-cyan-500/25 relative overflow-hidden mb-12 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
        <div className="quantum-laser-line" />

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              THE PHILOSOPHY OF QUANTA
            </span>
            <h3 className="font-display font-black text-xl sm:text-3xl text-white">
              From Fundamental Physics to Next-Generation Technologies
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In physics, a <strong>Quantum</strong> represents the minimum indivisible amount of physical entity involved in an interaction. We believe that each student represents an indivisible unit of curiosity. When energized in an organized, collaborative field, this collective intellect creates unstoppable momentum.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Unlike traditional academic clubs that isolate students in their respective disciplines, Quanta bridges computer science algorithms with astrophysics equations, and connects biotechnology with electronic sensor fabrication.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero Political / Union Affiliation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Certified Membership Credentials</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Official Task Card Workflow</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hands-on Rapid Prototyping</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-slate-400">INSTITUTIONAL PASSPORT</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 font-bold">
                  2026 / 2027
                </span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <p>
                  <strong className="text-white">University:</strong> Université d'Alger 1 — Benyoucef Benkhedda
                </p>
                <p>
                  <strong className="text-white">Faculty:</strong> Faculté des Sciences (Algiers Centre)
                </p>
                <p>
                  <strong className="text-white">Headquarters:</strong> Science Campus, Didouche Mourad
                </p>
                <p>
                  <strong className="text-white">Governing Law:</strong> Quanta Internal Law 2026-2027
                </p>
                <p>
                  <strong className="text-white">Membership Status:</strong> 4-Month Trainee ➔ Confirmed Member
                </p>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-200">
                "The future belongs to those who observe the universe with scientific precision and act with decisive courage."
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PILLARS.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`quantum-subcard p-6 rounded-2xl border ${p.border} relative group text-left flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.accent} border ${p.border} flex items-center justify-center ${p.text}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-900 border border-white/10 text-slate-400">
                    {p.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-[11px] font-mono text-cyan-400/80">{p.titleAr}</p>
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
