import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { DOMAINS } from '../data/club.js';
import {
  AtomOrbitalSvg,
  MathModelingSvg,
  NeuralAiSvg,
  DeepSpaceTelescopeSvg,
  CircuitChipSvg,
  DnaGenomicsSvg,
} from '../components/OriginalIcons.jsx';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

// Aligned 1:1 with DOMAINS in club.js:
// 0: Physics, 1: Mathematics, 2: Computer Science, 3: Astronomy, 4: Engineering, 5: STEM
const DOMAIN_META = [
  {
    Svg: AtomOrbitalSvg,
    formula: 'iħ ∂ψ/∂t = Ĥψ',
    spectrum: 'from-cyan-400/25 via-sky-500/10 to-transparent',
  },
  {
    Svg: MathModelingSvg,
    formula: '∮ E · dA = Q / ε₀',
    spectrum: 'from-emerald-400/25 via-teal-500/10 to-transparent',
  },
  {
    Svg: NeuralAiSvg,
    formula: 'σ(W·x + b) → ∇L',
    spectrum: 'from-blue-400/25 via-indigo-500/10 to-transparent',
  },
  {
    Svg: DeepSpaceTelescopeSvg,
    formula: 'R_μν − ½Rg_μν = 8πG T_μν',
    spectrum: 'from-sky-400/25 via-cyan-500/10 to-transparent',
  },
  {
    Svg: CircuitChipSvg,
    formula: 'V(t) = L (dI/dt)',
    spectrum: 'from-teal-400/25 via-emerald-500/10 to-transparent',
  },
  {
    Svg: DnaGenomicsSvg,
    formula: 'ΔG = ΔH − TΔS',
    spectrum: 'from-indigo-400/25 via-violet-500/10 to-transparent',
  },
];

const MANIFESTO_TEXT =
  'Quanta is a multidisciplinary scientific club at the Faculty of Sciences — University of Algiers 1. Founded by passionate students, it brings together young minds across physics, mathematics, computer science, chemistry, biology, electronics, and astronomy to learn, build, and innovate together.';

const HIGHLIGHT_WORDS = new Set([
  'Quanta',
  'multidisciplinary',
  'scientific',
  'physics,',
  'mathematics,',
  'computer',
  'science,',
  'chemistry,',
  'biology,',
  'electronics,',
  'astronomy',
  'innovate',
]);

function ScrollWord({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const isHighlight = HIGHLIGHT_WORDS.has(word);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.3em] transition-colors duration-150 ${
        isHighlight ? 'text-cyan-300 font-semibold' : 'text-white'
      }`}
    >
      {word}
    </motion.span>
  );
}

export default function AboutSection() {
  const manifestoRef = useRef(null);
  const domainsRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const { playHoverTick } = useSoundEffects();

  // Scroll-synchronized word illumination
  const { scrollYProgress: manifestoProgress } = useScroll({
    target: manifestoRef,
    offset: ['start 85%', 'end 40%'],
  });

  // Scroll-synchronized domain progression across the 6 disciplines
  const { scrollYProgress: domainsProgress } = useScroll({
    target: domainsRef,
    offset: ['start 65%', 'end 35%'],
  });

  useMotionValueEvent(domainsProgress, 'change', (v) => {
    const idx = Math.min(
      DOMAINS.length - 1,
      Math.max(0, Math.floor(v * DOMAINS.length))
    );
    if (idx !== activeIdx) {
      setActiveIdx(idx);
    }
  });

  const waveRotate = useTransform(manifestoProgress, [0, 1], [0, 180]);
  const words = MANIFESTO_TEXT.split(' ');

  const activeMeta = DOMAIN_META[activeIdx] || DOMAIN_META[0];
  const ActiveSvg = activeMeta.Svg;
  const [activeId, activeTitle] = DOMAINS[activeIdx] || DOMAINS[0];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* PART 1: Scroll-Illuminated Editorial Manifesto */}
      <div
        ref={manifestoRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pb-16 sm:pb-24 border-b border-white/10"
      >
        <div className="lg:col-span-4 flex flex-col items-start gap-4">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            About Quanta
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-transparent" />

          {/* Scroll-Reactive Quantum Phase Geometry */}
          <div className="relative mt-1 flex items-center gap-4">
            <motion.svg
              style={{ rotate: waveRotate }}
              className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400/80 shrink-0"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="4 6"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="16"
                transform="rotate(30 50 50)"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="16"
                transform="rotate(-30 50 50)"
                stroke="#818cf8"
                strokeWidth="1.4"
              />
              <circle cx="50" cy="50" r="4.5" fill="#38bdf8" />
            </motion.svg>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[230px]">
              Faculty of Sciences — University of Algiers 1 (Benyoucef Benkhedda)
            </p>
          </div>
        </div>

        {/* Scroll-Lit Word-by-Word Typography */}
        <div className="lg:col-span-8">
          <p className="font-display text-lg sm:text-3xl lg:text-[2.1rem] leading-[1.45] tracking-tight">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <ScrollWord
                  key={i}
                  word={word}
                  progress={manifestoProgress}
                  range={[start, end]}
                />
              );
            })}
          </p>
        </div>
      </div>

      {/* PART 2: Scientific Domains — Scroll-Synchronized Split-Stage & Kinetic Hairline Index */}
      <div ref={domainsRef} className="pt-16 sm:pt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Scientific domains
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Six interconnected disciplines driving student research, workshops, and prototypes.
            </p>
          </div>
          <div className="font-mono text-xs sm:text-sm text-cyan-400/90 tracking-widest">
            {activeMeta.formula}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 7 Columns: Zero-Box Architectural Hairline Rows */}
          <div className="lg:col-span-7 border-t border-white/10">
            {DOMAINS.map(([id, title, desc], idx) => {
              const isActive = activeIdx === idx;
              const meta = DOMAIN_META[idx] || DOMAIN_META[0];
              const RowSvg = meta.Svg;

              return (
                <div
                  key={id}
                  onMouseEnter={() => {
                    if (activeIdx !== idx) {
                      setActiveIdx(idx);
                      playHoverTick();
                    }
                  }}
                  onClick={() => {
                    setActiveIdx(idx);
                    playHoverTick();
                  }}
                  className={`group cursor-pointer py-5 sm:py-6 border-b border-white/10 transition-colors hairline-sweep ${
                    isActive ? 'is-active' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-3.5 sm:gap-6 min-w-0">
                      <span
                        className={`font-display font-bold text-lg sm:text-2xl transition-all duration-300 shrink-0 ${
                          isActive
                            ? 'text-cyan-400 translate-x-1'
                            : 'text-slate-600 group-hover:text-slate-400'
                        }`}
                      >
                        0{idx + 1}
                      </span>

                      <h3
                        className={`font-display font-bold text-lg sm:text-2xl lg:text-3xl transition-all duration-300 truncate ${
                          isActive
                            ? 'text-white translate-x-1'
                            : 'text-slate-300/80 group-hover:text-white'
                        }`}
                      >
                        {title}
                      </h3>
                    </div>

                    {/* High-Precision Custom Vector Icon */}
                    <div
                      className={`transition-all duration-500 shrink-0 ${
                        isActive
                          ? 'scale-110 opacity-100'
                          : 'scale-90 opacity-60 group-hover:opacity-95'
                      }`}
                    >
                      <RowSvg size={38} animate={isActive} />
                    </div>
                  </div>

                  {/* Smoothly Expanding Description */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2.5 pl-8 sm:pl-12 pr-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-xl">
                            {desc}
                          </p>
                          <span className="lg:hidden font-mono text-[11px] text-cyan-400/90">
                            {meta.formula}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right 5 Columns: Sticky Interactive Holographic Observatory Stage (PC) */}
          <div className="hidden lg:flex lg:col-span-5 sticky top-28 flex-col items-center justify-center py-6 relative">
            <div
              className={`absolute inset-0 rounded-full bg-gradient-radial ${activeMeta.spectrum} blur-3xl opacity-60 pointer-events-none transition-all duration-700`}
            />

            <div className="relative w-[330px] h-[330px] flex items-center justify-center">
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
                viewBox="0 0 340 340"
                fill="none"
              >
                <circle
                  cx="170"
                  cy="170"
                  r="160"
                  stroke="rgba(56,189,248,0.22)"
                  strokeWidth="1.2"
                  strokeDasharray="3 9"
                />
                <circle
                  cx="170"
                  cy="170"
                  r="132"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
                <line x1="170" y1="2" x2="170" y2="18" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="170" y1="322" x2="170" y2="338" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="2" y1="170" x2="18" y2="170" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="322" y1="170" x2="338" y2="170" stroke="#38bdf8" strokeWidth="1.5" />
              </svg>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.82, rotate: -10, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.86, rotate: 10, filter: 'blur(5px)' }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex flex-col items-center text-center px-6"
                >
                  <ActiveSvg size={140} animate={true} />
                  <div className="mt-5 font-mono text-xs text-cyan-300 tracking-widest">
                    {activeMeta.formula}
                  </div>
                  <div className="mt-1 font-display font-bold text-lg text-white">
                    {activeTitle}
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
