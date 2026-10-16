import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import { ACTS } from '../data/club.js';
import {
  CircuitChipSvg,
  AtomOrbitalSvg,
  NeuralAiSvg,
  DeepSpaceTelescopeSvg,
  SynapseNetworkSvg,
  CyberShieldSvg,
  MathModelingSvg,
  MaterialsCrystalSvg,
  DnaGenomicsSvg,
  HolographicMediaSvg,
} from '../components/OriginalIcons.jsx';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

const ACT_SVGS = [
  CircuitChipSvg,
  AtomOrbitalSvg,
  NeuralAiSvg,
  DeepSpaceTelescopeSvg,
  SynapseNetworkSvg,
  CyberShieldSvg,
  MathModelingSvg,
  MaterialsCrystalSvg,
  DnaGenomicsSvg,
  HolographicMediaSvg,
  AtomOrbitalSvg,
];

export default function ActivitiesSection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const { playHoverTick } = useSoundEffects();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Synchronize active activity spotlight as user scrolls through the ledger
  const { scrollYProgress: gridProgress } = useScroll({
    target: gridRef,
    offset: ['start 70%', 'end 30%'],
  });

  useMotionValueEvent(gridProgress, 'change', (v) => {
    const idx = Math.min(
      ACTS.length - 1,
      Math.max(0, Math.floor(v * ACTS.length))
    );
    if (idx !== activeIdx) {
      setActiveIdx(idx);
    }
  });

  // Scroll-linked opposing kinetic ticker streams
  const tickerXLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-26%']);
  const tickerXRight = useTransform(scrollYProgress, [0, 1], ['-20%', '5%']);

  return (
    <section
      id="activities"
      ref={sectionRef}
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      {/* Scroll-Driven Kinetic Typography Ribbon */}
      <div className="border-y border-white/10 py-3 sm:py-3.5 mb-14 sm:mb-20 overflow-hidden select-none pointer-events-none">
        <motion.div
          style={{ x: tickerXLeft }}
          className="flex items-center gap-6 sm:gap-8 whitespace-nowrap w-max"
        >
          {[...ACTS, ...ACTS].map((title, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-8">
              <span
                className={`font-display font-bold text-lg sm:text-3xl uppercase tracking-wider ${
                  i % 2 === 0 ? 'text-white/85' : 'text-stroke-cyan'
                }`}
              >
                {title}
              </span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-spin-slow shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Activities
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Hands-on scientific practice, peer learning, and academic outreach throughout the year.
            </p>
          </div>
          <span className="font-mono text-xs text-cyan-400/90 tracking-widest">
            {String(activeIdx + 1).padStart(2, '0')} / {ACTS.length} FORMATS
          </span>
        </div>

        {/* Zero-Box Architectural 2-Column Ledger */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/10"
        >
          {ACTS.map((title, idx) => {
            const IconSvg = ACT_SVGS[idx % ACT_SVGS.length];
            const num = String(idx + 1).padStart(2, '0');
            const isRightCol = idx % 2 === 1;
            const isActive = activeIdx === idx;

            return (
              <div
                key={title}
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
                className={`group cursor-pointer relative py-4 sm:py-6 px-2 sm:px-4 border-b border-white/10 hairline-sweep flex items-center justify-between gap-3 transition-colors duration-300 ${
                  isRightCol
                    ? 'lg:pl-10 lg:border-l lg:border-l-white/10'
                    : 'lg:pr-10'
                } ${
                  isActive
                    ? 'is-active bg-gradient-to-r from-cyan-400/[0.06] via-transparent to-transparent'
                    : 'hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                  <span
                    className={`font-mono text-xs sm:text-sm transition-colors shrink-0 ${
                      isActive
                        ? 'text-cyan-300 font-semibold'
                        : 'text-slate-500 group-hover:text-cyan-400'
                    }`}
                  >
                    /{num}
                  </span>
                  <div
                    className={`shrink-0 transition-transform duration-500 ${
                      isActive
                        ? 'scale-110 -rotate-3'
                        : 'scale-95 opacity-75 group-hover:opacity-100 group-hover:scale-110'
                    }`}
                  >
                    <IconSvg size={36} animate={isActive} />
                  </div>
                  <h3
                    className={`font-display font-bold text-base sm:text-2xl transition-all duration-300 ${
                      isActive
                        ? 'text-cyan-300 translate-x-1'
                        : 'text-white group-hover:text-cyan-300 group-hover:translate-x-1'
                    }`}
                  >
                    {title}
                  </h3>
                </div>

                <span
                  className={`transition-all duration-300 text-sm shrink-0 ${
                    isActive
                      ? 'text-cyan-400 translate-x-1'
                      : 'text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1'
                  }`}
                >
                  →
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Counter-Moving Subtle Formula Stream */}
      <div className="mt-14 sm:mt-16 overflow-hidden select-none pointer-events-none opacity-35">
        <motion.div
          style={{ x: tickerXRight }}
          className="flex items-center gap-12 whitespace-nowrap w-max font-mono text-xs text-cyan-300/70 tracking-[0.25em]"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>
              WORKSHOPS // EXPERIMENTS // ASTRONOMY NIGHTS // HACKATHONS // CONFERENCES // OUTREACH
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
