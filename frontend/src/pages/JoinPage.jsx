import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DEPARTMENTS } from '../data/club.js';
import {
  AtomOrbitalSvg,
  CircuitChipSvg,
  SynapseNetworkSvg,
  DeepSpaceTelescopeSvg,
  MaterialsCrystalSvg,
  HolographicMediaSvg,
} from '../components/OriginalIcons.jsx';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

const FORM_URL = 'https://quanta-registrations.web.app/';
const DEPT_SVGS = [
  AtomOrbitalSvg,
  SynapseNetworkSvg,
  DeepSpaceTelescopeSvg,
  HolographicMediaSvg,
  CircuitChipSvg,
];

export default function JoinPage() {
  const { playQuantumChime, playHoverTick } = useSoundEffects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-[85vh] pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-left">
      <div className="border-b border-white/10 pb-10 mb-14">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight mb-4"
        >
          Join Quanta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-slate-300/85 text-base sm:text-lg max-w-2xl leading-relaxed"
        >
          Joining is selective. Discover our departments first, then complete the application. New members start as trainees for 4 months before they can become Official Members.
        </motion.p>
      </div>

      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
          Our departments
        </h2>
        <span className="font-mono text-xs text-cyan-400/80 tracking-widest">
          0{DEPARTMENTS.length} DEPARTMENTS
        </span>
      </div>

      {/* Zero-Box Architectural Department Ledger */}
      <div className="border-t border-white/10 mb-16">
        {DEPARTMENTS.map((d, idx) => {
          const DeptSvg = DEPT_SVGS[idx % DEPT_SVGS.length];
          const num = String(idx + 1).padStart(2, '0');

          return (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onMouseEnter={() => playHoverTick()}
              className="group py-7 sm:py-8 border-b border-white/10 hairline-sweep grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start lg:items-center"
            >
              <div className="lg:col-span-5 flex items-center gap-4 sm:gap-6">
                <span className="font-display font-bold text-2xl sm:text-3xl text-stroke-cyan group-hover:text-stroke-active transition-all">
                  {num}
                </span>
                <div className="transition-transform duration-500 group-hover:scale-110">
                  <DeptSvg size={36} animate={true} />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {d.name}
                </h3>
              </div>

              <p className="lg:col-span-7 text-sm sm:text-base text-slate-300/85 leading-relaxed">
                {d.def}
              </p>
            </motion.article>
          );
        })}
      </div>

      {/* Open Application Horizon */}
      <div className="border-y border-white/10 py-12 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
            Application
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Ready to apply? The application takes about 15 minutes.
          </p>
        </div>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playQuantumChime(880, 0.2)}
          className="btn-shimmer inline-flex items-center gap-3 px-7 py-3.5 rounded-md bg-[#1d4ed8] hover:bg-blue-600 text-white border border-cyan-400 font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(56,189,248,0.5)]"
        >
          <span>Open the application form</span>
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}
