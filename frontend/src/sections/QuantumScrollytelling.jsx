import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ChevronRight,
  Terminal,
  Orbit,
  Cpu,
  Layers,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import {
  AtomOrbitalSvg,
  CircuitChipSvg,
  DeepSpaceTelescopeSvg,
  NeuralAiSvg,
} from '../components/OriginalIcons.jsx';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

const STAGES = [
  {
    step: '01',
    category: 'QUANTUM MECHANICS',
    title: 'Atomic & Subatomic Coherence',
    titleAr: 'الفيزياء الكمية وتماسك الذرة',
    desc: 'From wave-particle duality to quantum entanglement. Quanta members formulate mathematical models, conduct laser optics labs, and explore condensed matter states.',
    Illustration: AtomOrbitalSvg,
    formula: 'Ĥ|ψ⟩ = iℏ ∂/∂t |ψ⟩',
    metrics: [
      { label: 'Planck Constant', val: '6.626×10⁻³⁴ J·s' },
      { label: 'Superposition', val: 'Verified |0⟩+|1⟩' },
      { label: 'Optics Labs', val: 'Annual Program' },
    ],
    accent: 'from-cyan-400 via-sky-400 to-blue-600',
    glowColor: 'rgba(6,182,212,0.3)',
    borderColor: 'border-cyan-500/40',
  },
  {
    step: '02',
    category: 'CYBERSECURITY & CTF',
    title: 'Silicon Architecture & Binary Defense',
    titleAr: 'الأمن السيبراني وهندسة الرقائق',
    desc: '24 hours of non-stop algorithmic warfare at the University Central Library. Breaching realistic sandboxes across cryptography, reverse engineering, and web exploitation.',
    Illustration: CircuitChipSvg,
    formula: 'SHA-256(H || M) ⊕ ECC-521',
    metrics: [
      { label: 'Tournament Scale', val: '24h Non-stop' },
      { label: 'Challenges', val: 'Web, Reverse, Pwn' },
      { label: 'Sandbox Platform', val: 'Cloud Isolated' },
    ],
    accent: 'from-sky-400 via-cyan-400 to-indigo-500',
    glowColor: 'rgba(56,189,248,0.3)',
    borderColor: 'border-sky-500/40',
  },
  {
    step: '03',
    category: 'RADIO ASTROPHYSICS',
    title: 'Deep Space Telemetry & Field Stations',
    titleAr: 'الرصد الفلكي والفيزياء الكونية',
    desc: 'Deploying optical telescope arrays with certified solar filters in partnership with CRAAG. Tracking orbital celestial mechanics, radio amateur satellites, and solar eclipses.',
    Illustration: DeepSpaceTelescopeSvg,
    formula: 'T² = (4π² / GM) · a³',
    metrics: [
      { label: 'CRAAG Alliance', val: 'Official Partner' },
      { label: 'Expedition Site', val: 'Sidi Fredj / Algiers' },
      { label: 'Audience Scale', val: '+500 Spectators' },
    ],
    accent: 'from-emerald-400 via-teal-400 to-cyan-500',
    glowColor: 'rgba(16,185,129,0.3)',
    borderColor: 'border-emerald-500/40',
  },
  {
    step: '04',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'Cognitive Computing & Foundation Models',
    titleAr: 'الذكاء الاصطناعي والشبكات العصبية',
    desc: 'Designing transformer attention architectures, computer vision for astronomy data processing, and multi-agent autonomous engineering pipelines.',
    Illustration: NeuralAiSvg,
    formula: 'Attention(Q,K,V) = softmax(QKᵀ/√d)V',
    metrics: [
      { label: 'Track Focus', val: 'GenAI & Deep Learning' },
      { label: 'Camp Bootcamp', val: '10 Days Intensive' },
      { label: 'Prototyping', val: 'Embedded ML Models' },
    ],
    accent: 'from-purple-400 via-pink-400 to-blue-500',
    glowColor: 'rgba(168,85,247,0.3)',
    borderColor: 'border-purple-500/40',
  },
];

export default function QuantumScrollytelling() {
  const containerRef = useRef(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const { playClick, playQuantumChime } = useSoundEffects();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Track active stage as user scrolls through the container
  React.useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const idx = Math.min(
        STAGES.length - 1,
        Math.max(0, Math.floor(latest * STAGES.length))
      );
      if (idx !== activeStageIndex) {
        setActiveStageIndex(idx);
      }
    });
  }, [scrollYProgress, activeStageIndex]);

  const selectStage = (idx) => {
    playQuantumChime(659.25 + idx * 60, 0.15);
    setActiveStageIndex(idx);
  };

  const currentStage = STAGES[activeStageIndex];
  const CurrentIllustration = currentStage.Illustration;

  return (
    <section
      id="quantum-story"
      ref={containerRef}
      className="relative min-h-[140vh] sm:min-h-[220vh] py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Pinned Sticky Scrollytelling Stage */}
      <div className="sticky top-20 sm:top-24 z-20 space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/90 border border-cyan-500/35 text-cyan-300 text-xs font-mono font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>SCROLL-DRIVEN SCIENTIFIC EXPLORATION</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            The 4 Scientific Frontiers of Quanta
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Scroll down to scrub through our multidisciplinary research domains, lab benchmarks, and active engineering pipelines.
          </p>
        </div>

        {/* Scrollytelling Interactive Stage Container */}
        <div className="p-5 sm:p-10 rounded-3xl bg-slate-950/90 border border-cyan-500/35 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.15)]">
          <div className="quantum-laser-line" />

          {/* Blueprint Corner Accents */}
          <span className="absolute top-3 left-3 text-[9px] font-mono text-cyan-400/40 select-none">
            [SCROLLYTELL // STEP {currentStage.step}]
          </span>
          <span className="absolute bottom-3 right-3 text-[9px] font-mono text-cyan-400/40 select-none">
            SYS.MODE: INTERACTIVE_INERTIAL
          </span>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Step Navigation & Telemetry Scrubber */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                RESEARCH STAGES
              </span>

              <div className="space-y-2">
                {STAGES.map((stage, idx) => {
                  const isActive = activeStageIndex === idx;
                  return (
                    <button
                      key={stage.step}
                      onClick={() => selectStage(idx)}
                      className={`w-full p-3 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border ${
                        isActive
                          ? 'bg-slate-900/90 border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                          : 'bg-slate-950/40 border-white/5 hover:border-white/20 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-xl font-mono text-xs font-black flex items-center justify-center transition-colors ${
                            isActive
                              ? 'bg-cyan-500 text-slate-950'
                              : 'bg-slate-900 text-slate-400'
                          }`}
                        >
                          {stage.step}
                        </span>
                        <div>
                          <div
                            className={`font-display font-bold text-xs sm:text-sm transition-colors ${
                              isActive ? 'text-white' : 'text-slate-300'
                            }`}
                          >
                            {stage.category}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 truncate max-w-[170px]">
                            {stage.title}
                          </div>
                        </div>
                      </div>

                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Progress Scrubbing Bar */}
              <div className="pt-2 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Scroll Playhead</span>
                  <span className="text-cyan-400 font-bold">
                    Stage {activeStageIndex + 1} / 4
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-500 transition-all duration-300"
                    style={{
                      width: `${((activeStageIndex + 1) / STAGES.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Col: Holographic Transforming Display Showcase */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.step}
                  initial={{ opacity: 0, y: 15, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-white/10 relative overflow-hidden text-left space-y-6 shadow-2xl"
                >
                  {/* Atmospheric Glow */}
                  <div
                    className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none"
                    style={{ background: currentStage.glowColor }}
                  />

                  {/* Top Bar: Category & Bespoke Animated Vector Illustration */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                        {currentStage.category}
                      </span>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-white mt-2">
                        {currentStage.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400/90 font-semibold mt-0.5">
                        {currentStage.titleAr}
                      </p>
                    </div>

                    {/* Animated Original SVG Illustration */}
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center p-3 shadow-xl shrink-0"
                      style={{ boxShadow: `0 0 25px ${currentStage.glowColor}` }}
                    >
                      <CurrentIllustration size={54} animate={true} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {currentStage.desc}
                  </p>

                  {/* Mathematical / Technical Formula HUD Chip */}
                  <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
                    <span className="text-slate-400 text-[11px]">Governing Tensor / Algorithm:</span>
                    <span className="text-cyan-300 font-bold font-serif tracking-wider text-xs sm:text-sm">
                      {currentStage.formula}
                    </span>
                  </div>

                  {/* Key Benchmark Metrics */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                    {currentStage.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 rounded-xl bg-slate-900/60 border border-white/5"
                      >
                        <span className="text-[10px] font-mono text-slate-400 block truncate">
                          {m.label}
                        </span>
                        <div className="font-display font-bold text-xs sm:text-sm text-white mt-0.5 truncate">
                          {m.val}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
