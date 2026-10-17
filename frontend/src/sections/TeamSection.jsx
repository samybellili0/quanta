import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { TEAM } from '../data/club.js';
import {
  AtomOrbitalSvg,
  SynapseNetworkSvg,
  MathModelingSvg,
  CircuitChipSvg,
  DeepSpaceTelescopeSvg,
  MaterialsCrystalSvg,
  HolographicMediaSvg,
} from '../components/OriginalIcons.jsx';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

// Matched 1:1 to TEAM roles in club.js:
// 0: President, 1: Vice President, 2: Secretary General, 3: HR Manager,
// 4: IT Manager, 5: External Relations, 6: Event Manager, 7: Media & Marketing
const ROLE_SVGS = [
  AtomOrbitalSvg,
  SynapseNetworkSvg,
  MathModelingSvg,
  SynapseNetworkSvg,
  CircuitChipSvg,
  DeepSpaceTelescopeSvg,
  AtomOrbitalSvg,
  HolographicMediaSvg,
];

export default function TeamSection() {
  const listRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const { playHoverTick } = useSoundEffects();

  // Synchronize active member spotlight with vertical scroll
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 70%', 'end 30%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      TEAM.length - 1,
      Math.max(0, Math.floor(v * TEAM.length))
    );
    if (idx !== activeIdx) {
      setActiveIdx(idx);
    }
  });

  return (
    <section
      id="team"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-12">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            The team
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Executive board leading Quanta at the Faculty of Sciences.
          </p>
        </div>
        <span className="font-mono text-xs text-cyan-400/90 tracking-widest">
          0{activeIdx + 1} / 0{TEAM.length} EXECUTIVE ROLES
        </span>
      </div>

      {/* Zero-Box Scroll-Synchronized Architectural Roster (100% Responsive on Mobile & PC) */}
      <div ref={listRef} className="border-t border-white/10">
        {TEAM.map(([name, role], idx) => {
          const isActive = activeIdx === idx;
          const RoleSvg = ROLE_SVGS[idx % ROLE_SVGS.length];
          const num = String(idx + 1).padStart(2, '0');

          return (
            <div
              key={`${name}-${idx}`}
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
              className={`group relative cursor-pointer py-4 sm:py-5 px-2 sm:px-4 border-b border-white/10 hairline-sweep transition-colors duration-300 ${
                isActive
                  ? 'is-active bg-gradient-to-r from-cyan-400/[0.07] via-transparent to-transparent'
                  : 'hover:bg-white/[0.02]'
              }`}
            >
              <div className="flex items-center justify-between gap-3 sm:gap-6">
                {/* Left + Center: Index + Full Name & Responsive Role */}
                <div className="flex items-start sm:items-baseline gap-3.5 sm:gap-7 min-w-0 flex-1">
                  <span
                    className={`font-display font-bold text-xl sm:text-2xl transition-all duration-300 shrink-0 mt-0.5 sm:mt-0 ${
                      isActive ? 'text-stroke-active' : 'text-stroke-white'
                    }`}
                  >
                    {num}
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 min-w-0 flex-1">
                    <h3
                      className={`font-display font-bold text-base sm:text-2xl lg:text-3xl transition-all duration-300 ${
                        isActive
                          ? 'text-white sm:translate-x-1.5'
                          : 'text-slate-300/85 group-hover:text-white'
                      }`}
                    >
                      {name}
                    </h3>

                    <span
                      className={`text-xs sm:text-base font-medium sm:text-right transition-colors duration-300 ${
                        isActive
                          ? 'text-cyan-300'
                          : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {role}
                    </span>
                  </div>
                </div>

                {/* Right: Bespoke Department Vector Emblem with Aperture Frame */}
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-transparent border border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.25)] scale-105'
                      : 'bg-white/[0.03] border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-500/5 group-hover:scale-105'
                  }`}
                >
                  <RoleSvg size={24} animate={isActive} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
