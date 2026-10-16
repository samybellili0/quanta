import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import Logo from '../components/Logo.jsx';
import { STATS } from '../data/club.js';
import {
  SynapseNetworkSvg,
  CircuitChipSvg,
  DeepSpaceTelescopeSvg,
  AtomOrbitalSvg,
} from '../components/OriginalIcons.jsx';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

const STAT_SVGS = [
  SynapseNetworkSvg,
  CircuitChipSvg,
  DeepSpaceTelescopeSvg,
  AtomOrbitalSvg,
];

export default function HeroSection() {
  const heroRef = useRef(null);
  const { playClick, playQuantumChime } = useSoundEffects();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 65]);
  const orbitScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.88], [1, 0]);

  // Interactive cursor / touch field displacement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 22 });

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 32;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 32;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 pt-20 sm:pt-24 pb-0 overflow-hidden"
    >
      {/* Interactive Quantum Astrolabe & Wavefunction SVG */}
      <motion.svg
        style={{
          rotate: orbitRotate,
          scale: orbitScale,
          x: smoothX,
          y: smoothY,
        }}
        className="absolute inset-0 m-auto w-[min(920px,135vw)] h-[min(920px,135vw)] pointer-events-none select-none z-0"
        viewBox="0 0 800 800"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="heroCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(56,189,248,0.18)" />
            <stop offset="55%" stopColor="rgba(29,78,216,0.06)" />
            <stop offset="100%" stopColor="rgba(5,8,17,0)" />
          </radialGradient>
          <linearGradient id="waveLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(56,189,248,0)" />
            <stop offset="35%" stopColor="rgba(56,189,248,0.45)" />
            <stop offset="65%" stopColor="rgba(129,140,248,0.45)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0)" />
          </linearGradient>
        </defs>

        <circle cx="400" cy="400" r="340" fill="url(#heroCoreGlow)" />

        {/* Continuous Harmonic Wavefunction across the Observatory */}
        <path
          d="M 20 400 Q 115 310, 210 400 T 400 400 T 590 400 T 780 400"
          fill="none"
          stroke="url(#waveLineGrad)"
          strokeWidth="1.5"
          className="animate-wave-dash"
        />
        <path
          d="M 20 400 Q 115 490, 210 400 T 400 400 T 590 400 T 780 400"
          fill="none"
          stroke="url(#waveLineGrad)"
          strokeWidth="1"
          strokeOpacity="0.5"
        />

        {/* Multi-Axis Quantum Elliptical Orbits */}
        <g fill="none" stroke="rgba(56,189,248,0.22)">
          <ellipse
            cx="400"
            cy="400"
            rx="380"
            ry="130"
            transform="rotate(-25 400 400)"
            strokeWidth="1.2"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="320"
            ry="105"
            transform="rotate(35 400 400)"
            strokeWidth="1.2"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="260"
            ry="80"
            transform="rotate(82 400 400)"
            strokeWidth="0.9"
            strokeDasharray="6 6"
          />
          <circle
            cx="400"
            cy="400"
            r="210"
            strokeDasharray="2 10"
            strokeWidth="1.4"
            className="animate-spin-slow"
            style={{ transformOrigin: '400px 400px' }}
          />
          <circle
            cx="400"
            cy="400"
            r="145"
            strokeDasharray="18 12"
            strokeWidth="1"
            stroke="rgba(129,140,248,0.28)"
            className="animate-spin-slow-reverse"
            style={{ transformOrigin: '400px 400px' }}
          />
        </g>

        {/* Orbiting Quantum Nodes */}
        <g className="animate-spin-slow" style={{ transformOrigin: '400px 400px' }}>
          <circle cx="610" cy="400" r="4" fill="#38bdf8" />
          <circle cx="610" cy="400" r="10" fill="none" stroke="#38bdf8" strokeOpacity="0.4" />
          <circle cx="190" cy="400" r="3.5" fill="#818cf8" />
        </g>

        {/* Floating Mathematical Operators */}
        <g
          fill="rgba(224,242,254,0.38)"
          fontFamily="serif"
          fontSize="26"
          className="animate-pulse"
        >
          <text x="90" y="200">ψ</text>
          <text x="665" y="250">∇²</text>
          <text x="135" y="635">ħ</text>
          <text x="625" y="615">∫</text>
        </g>
      </motion.svg>

      {/* Center Foreground Stage */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl w-full mx-auto my-auto py-8 sm:py-12 flex flex-col items-center text-center"
      >
        {/* Interactive Club Emblem with Orbital Halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => playQuantumChime(987.77, 0.25)}
          className="cursor-pointer relative group mb-5 sm:mb-6"
        >
          <div className="absolute -inset-5 rounded-full bg-cyan-400/20 blur-2xl group-hover:bg-cyan-400/40 transition-all duration-500" />
          <svg
            className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] animate-spin-slow pointer-events-none"
            viewBox="0 0 140 140"
          >
            <circle
              cx="70"
              cy="70"
              r="66"
              fill="none"
              stroke="rgba(56,189,248,0.45)"
              strokeWidth="1.2"
              strokeDasharray="8 14"
            />
            <circle cx="70" cy="4" r="3" fill="#38bdf8" />
            <circle cx="70" cy="136" r="2.5" fill="#818cf8" />
          </svg>
          <Logo
            size={104}
            glow={true}
            className="relative group-hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Kinetic Display Title */}
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(14px)', y: 18 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-[clamp(2.15rem,7.2vw,5.4rem)] leading-[1.04] tracking-[0.03em] text-white"
        >
          <span className="inline-block drop-shadow-[0_0_32px_rgba(56,189,248,0.4)]">
            QUANTA
          </span>
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-cyan-400">
            THE FUTURE IS OURS
          </span>
        </motion.h1>

        {/* Subtitle with Architectural Flanking Lines */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 sm:mt-5 flex items-center gap-2.5 sm:gap-4"
        >
          <span className="h-[1px] w-6 sm:w-14 bg-gradient-to-r from-transparent to-cyan-400/70 shrink-0" />
          <p className="text-sm sm:text-xl text-cyan-400 font-medium tracking-wide">
            Scientific Club — University of Algiers 1
          </p>
          <span className="h-[1px] w-6 sm:w-14 bg-gradient-to-l from-transparent to-cyan-400/70 shrink-0" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-2.5 text-xs sm:text-base text-slate-300/85 max-w-lg px-2"
        >
          Exploring science. Connecting minds. Building the future.
        </motion.p>

        {/* Interactive Magnetic Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-7 flex flex-wrap items-center gap-4 sm:gap-5 justify-center"
        >
          <a
            href="/#events"
            onClick={() => playClick()}
            className="btn-shimmer group relative inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-[#1d4ed8] hover:bg-blue-600 text-white border border-cyan-400/80 font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(56,189,248,0.55)]"
          >
            <span>Explore Our Events</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <Link
            to="/join"
            onClick={() => playQuantumChime(784, 0.18)}
            className="group relative inline-flex items-center gap-2 py-2.5 px-2 text-cyan-300 hover:text-white font-semibold text-sm sm:text-base transition-colors hairline-sweep"
          >
            <span>Join Quanta</span>
            <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Open Architectural Telemetry Ribbon — Geometrically Exact Responsive Hairlines */}
      <div className="relative z-10 w-full max-w-6xl mx-auto border-t border-b border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map(([val, label], idx) => {
            const StatSvg = STAT_SVGS[idx % STAT_SVGS.length];
            const borderClasses = [
              idx < 2 ? 'border-b lg:border-b-0 border-white/10' : '',
              idx % 2 === 1 ? 'border-l border-white/10' : '',
              idx === 2 ? 'lg:border-l lg:border-white/10' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className={`group relative py-4 sm:py-5 px-3.5 sm:px-6 flex items-center justify-between gap-2 hairline-sweep ${borderClasses}`}
              >
                <div className="min-w-0">
                  <div className="font-display font-bold text-2xl sm:text-4xl text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {val}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5 truncate">
                    {label}
                  </div>
                </div>

                <div className="opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <StatSvg size={32} animate={true} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
