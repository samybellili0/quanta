import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import {
  AtomOrbitalSvg,
  CircuitChipSvg,
  SynapseNetworkSvg,
  DeepSpaceTelescopeSvg,
} from '../components/OriginalIcons.jsx';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

const PILLARS = [
  {
    id: 'science',
    code: 'PILLAR // 01',
    Illustration: AtomOrbitalSvg,
    title: 'Multidisciplinary Science',
    titleAr: 'تعددية التخصصات العلمية',
    desc: 'Fusing physics, applied mathematics, AI, and biotechnology into collaborative student research and laboratory experiments.',
    tags: ['Physics & CS Synergy', 'Genomics & AI Labs'],
    glowColor: 'from-cyan-500/25 via-blue-500/10 to-transparent',
    borderHover: 'hover:border-cyan-400/50',
    accentText: 'text-cyan-300',
    badgeBg: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-300',
    halo: 'rgba(6,182,212,0.25)',
  },
  {
    id: 'prototyping',
    code: 'PILLAR // 02',
    Illustration: CircuitChipSvg,
    title: 'Practical Prototyping',
    titleAr: 'النماذج والتطبيق العملي',
    desc: 'From 24-hour CTF cybersecurity non-stop challenges to robotics telemetry and calibrated telescope optics in the field.',
    tags: ['24h Cyber CTFs', 'Hardware & Robotics'],
    glowColor: 'from-sky-500/25 via-indigo-500/10 to-transparent',
    borderHover: 'hover:border-sky-400/50',
    accentText: 'text-sky-300',
    badgeBg: 'bg-sky-500/15 border-sky-400/30 text-sky-300',
    halo: 'rgba(56,189,248,0.25)',
  },
  {
    id: 'peer-care',
    code: 'PILLAR // 03',
    Illustration: SynapseNetworkSvg,
    title: 'Academic Peer Care',
    titleAr: 'الرعاية الأكاديمية والمساندة',
    desc: 'Peer study circles, exam prep mentorship, and student burnout-prevention support fostering intellectual resilience.',
    tags: ['1-on-1 Mentorship', 'Anti-Burnout Circles'],
    glowColor: 'from-purple-500/25 via-pink-500/10 to-transparent',
    borderHover: 'hover:border-purple-400/50',
    accentText: 'text-purple-300',
    badgeBg: 'bg-purple-500/15 border-purple-400/30 text-purple-300',
    halo: 'rgba(168,85,247,0.25)',
  },
  {
    id: 'outreach',
    code: 'PILLAR // 04',
    Illustration: DeepSpaceTelescopeSvg,
    title: 'National Impact & Outreach',
    titleAr: 'نشر الثقافة والريادة العلمية',
    desc: 'Alliances with national research institutes (CRAAG), solar eclipse public expeditions, and nationwide academic symposiums.',
    tags: ['CRAAG Alliance', 'Public Astronomy'],
    glowColor: 'from-emerald-500/25 via-teal-500/10 to-transparent',
    borderHover: 'hover:border-emerald-400/50',
    accentText: 'text-emerald-300',
    badgeBg: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300',
    halo: 'rgba(16,185,129,0.25)',
  },
];

export default function AboutSection() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const { playClick, playQuantumChime } = useSoundEffects();

  const handleMobilePillarSelect = (index) => {
    playClick();
    setActiveMobileIndex(index);
  };

  const handleNextMobile = () => {
    playClick();
    setActiveMobileIndex((prev) => (prev + 1) % PILLARS.length);
  };

  const handlePrevMobile = () => {
    playClick();
    setActiveMobileIndex((prev) => (prev - 1 + PILLARS.length) % PILLARS.length);
  };

  const currentPillar = PILLARS[activeMobileIndex];
  const CurrentMobileIllustration = currentPillar.Illustration;

  return (
    <section id="about" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Subtle Background Blueprint Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]">
        <div className="w-full h-full border border-cyan-500/10 grid grid-cols-6 grid-rows-4" />
      </div>

      <div className="relative z-10 text-center space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>ORIGINAL SCIENTIFIC FOUNDATION</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Where Scientific Curiosity Meets Innovation
        </h2>

        <p className="text-slate-400 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
          Founded at the Faculty of Sciences (Université d'Alger 1). Exploring fundamental physics, mathematics, AI, and aerospace engineering.
        </p>
      </div>

      {/* Cyber Technical Overview Blueprint Banner */}
      <div className="relative z-10 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950/90 via-[#060c18]/90 to-slate-950/90 border border-cyan-500/30 overflow-hidden mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        <div className="quantum-laser-line" />

        {/* Corner Blueprint Markers */}
        <span className="absolute top-2 left-2 text-[9px] font-mono text-cyan-400/40 select-none">┌ [SYS:FS_ALGER_1]</span>
        <span className="absolute bottom-2 right-2 text-[9px] font-mono text-cyan-400/40 select-none">[SEC:CONFIDENTIAL_NEUTRAL] ┘</span>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                CAMPUS ALGER CENTRE
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                2 Rue Didouche Mourad • Est. 2026
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
              Quanta bridges computing with astrophysics, biology with electronics, and mathematics with cryptography. We operate with strict neutrality: zero political affiliation, documented task cards, and certified recognition for every active contributor.
            </p>
          </div>

          {/* Key Attributes Badges */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs text-slate-300 shrink-0">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-medium text-white">100% Independent</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-medium text-white">Certified Members</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-medium text-white">Hands-on Labs</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-medium text-white">4-Month Probation</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE SMART PRESENTATION: Interactive Pillar Carousel   */}
      {/* Prevents cramped box stacks & makes phone experience pro */}
      {/* ========================================================= */}
      <div className="sm:hidden relative z-10 space-y-4">
        {/* Mobile Pillar Selector Tabs */}
        <div className="flex items-center justify-between gap-1 p-1 bg-slate-950/90 rounded-2xl border border-white/10">
          {PILLARS.map((p, idx) => {
            const isSelected = activeMobileIndex === idx;
            return (
              <button
                key={p.id}
                onClick={() => handleMobilePillarSelect(idx)}
                className={`flex-1 py-2 px-1 rounded-xl text-[11px] font-mono font-bold transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                0{idx + 1}
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card (Spacious, Beautiful Animated Showcase) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className={`p-6 rounded-3xl bg-slate-950/90 border border-white/15 relative overflow-hidden text-left shadow-2xl space-y-4`}
          >
            {/* Top Atmospheric Glow Backdrop */}
            <div
              className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${currentPillar.glowColor} rounded-full blur-3xl pointer-events-none`}
            />

            {/* Header: Code & Illustration */}
            <div className="flex items-center justify-between">
              <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold border ${currentPillar.badgeBg}`}>
                {currentPillar.code}
              </span>

              {/* Big Bespoke SVG Illustration */}
              <div
                className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center p-2.5 shadow-lg"
                style={{ boxShadow: `0 0 20px ${currentPillar.halo}` }}
              >
                <CurrentMobileIllustration size={44} animate={true} />
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-1">
              <h3 className="font-display font-black text-xl text-white">
                {currentPillar.title}
              </h3>
              <p className={`text-xs font-mono font-bold ${currentPillar.accentText}`}>
                {currentPillar.titleAr}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentPillar.desc}
            </p>

            {/* Key Deliverables Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {currentPillar.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-[10px] font-mono text-slate-300"
                >
                  ✦ {tag}
                </span>
              ))}
            </div>

            {/* Bottom Nav Arrows */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">
                Pillar {activeMobileIndex + 1} of {PILLARS.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevMobile}
                  className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white"
                  aria-label="Previous Pillar"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextMobile}
                  className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white"
                  aria-label="Next Pillar"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP / TABLET PANORAMIC 4-PILLAR SCIENTIFIC GRID       */}
      {/* Bespoke Original SVGs, Glowing Holographic Depth           */}
      {/* ========================================================= */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {PILLARS.map((p, idx) => {
          const PillarIllustration = p.Illustration;

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`p-6 rounded-3xl bg-slate-950/80 border border-white/10 ${p.borderHover} relative overflow-hidden group text-left transition-all duration-300 flex flex-col justify-between shadow-xl`}
            >
              {/* Radial Energy Bloom Backdrop */}
              <div
                className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${p.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Blueprint Corner Accents */}
              <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-white/20 select-none group-hover:text-cyan-400 transition-colors">
                +
              </span>
              <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-white/20 select-none group-hover:text-cyan-400 transition-colors">
                +
              </span>

              <div className="space-y-4">
                {/* Header: Code & Bespoke Original Animated SVG */}
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${p.badgeBg}`}>
                    {p.code}
                  </span>

                  {/* Original Scientific SVG */}
                  <div
                    className="w-13 h-13 p-2 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ boxShadow: `0 0 16px ${p.halo}` }}
                  >
                    <PillarIllustration size={42} animate={true} />
                  </div>
                </div>

                {/* Title & Arabic */}
                <div>
                  <h3 className="font-display font-black text-base text-white group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className={`text-[11px] font-mono font-semibold mt-0.5 ${p.accentText}`}>
                    {p.titleAr}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {p.desc}
                </p>

                {/* Deliverables Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-900/90 border border-white/5 text-[10px] font-mono text-slate-300"
                    >
                      ✦ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Active Bottom Pulse */}
              <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="group-hover:text-white transition-colors">Lab Verified</span>
                <span className={`${p.accentText} flex items-center gap-1`}>
                  <span>Active</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
