import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '../components/Logo.jsx';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

export default function HeroSection() {
  const heroRef = useRef(null);
  const { playClick, playQuantumChime } = useSoundEffects();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const orbitScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[92vh] grid place-items-center text-center px-4 pt-20 pb-12 overflow-hidden"
    >
      {/* Original Animated Quantum Orbits SVG with Scroll Parallax */}
      <motion.svg
        style={{ rotate: orbitRotate, scale: orbitScale }}
        className="absolute w-[min(880px,125vw)] pointer-events-none select-none z-0"
        viewBox="0 0 800 800"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="heroCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(56,189,248,0.16)" />
            <stop offset="60%" stopColor="rgba(29,78,216,0.05)" />
            <stop offset="100%" stopColor="rgba(5,8,17,0)" />
          </radialGradient>
        </defs>
        <circle cx="400" cy="400" r="320" fill="url(#heroCoreGlow)" />
        <g fill="none" stroke="rgba(56,189,248,0.2)">
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
            rx="300"
            ry="90"
            transform="rotate(35 400 400)"
            strokeWidth="1.2"
          />
          <circle
            cx="400"
            cy="400"
            r="200"
            strokeDasharray="2 8"
            strokeWidth="1.2"
            className="animate-spin-slow"
            style={{ transformOrigin: '400px 400px' }}
          />
        </g>
        <g
          fill="rgba(224,242,254,0.35)"
          fontFamily="serif"
          fontSize="26"
          className="animate-pulse"
        >
          <text x="90" y="200">ψ</text>
          <text x="660" y="260">∇²</text>
          <text x="140" y="640">ħ</text>
          <text x="620" y="620">∫</text>
        </g>
      </motion.svg>

      {/* Hero Foreground Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-4xl mx-auto grid gap-4 justify-items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => playQuantumChime(987.77, 0.25)}
          className="cursor-pointer relative group"
        >
          <div className="absolute -inset-3 rounded-full bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/35 transition-all duration-500" />
          <Logo size={110} glow={true} className="relative group-hover:scale-105 transition-transform duration-300" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, filter: 'blur(12px)', y: 14 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-[clamp(2.2rem,6.8vw,4.8rem)] leading-[1.06] tracking-[0.04em] text-white drop-shadow-[0_0_28px_rgba(56,189,248,0.45)]"
        >
          QUANTA
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-cyan-400">
            THE FUTURE IS OURS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-cyan-400 font-medium"
        >
          Scientific Club — University of Algiers 1
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-sm sm:text-base text-slate-300/85 max-w-xl"
        >
          Exploring science. Connecting minds. Building the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-3 justify-center mt-2"
        >
          <a
            href="/#events"
            onClick={() => playClick()}
            className="btn-shimmer px-6 py-2.5 rounded-lg bg-[#1d4ed8] hover:bg-blue-600 text-white border border-cyan-400 font-semibold text-sm sm:text-base transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(56,189,248,0.5)]"
          >
            Explore Our Events
          </a>
          <Link
            to="/join"
            onClick={() => playQuantumChime(784, 0.18)}
            className="px-6 py-2.5 rounded-lg bg-transparent hover:bg-cyan-400/10 text-cyan-400 border border-cyan-400 font-semibold text-sm sm:text-base transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(56,189,248,0.35)]"
          >
            Join Quanta
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
