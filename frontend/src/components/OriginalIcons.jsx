import React from 'react';

// ==========================================
// QUANTA BESPOKE ORIGINAL SCIENTIFIC ICONS
// Custom crafted vector graphics with quantum glow
// ==========================================

export function AtomOrbitalSvg({ size = 32, className = '', animate = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Quantum Orbital Atom"
    >
      <defs>
        <radialGradient id="atomCoreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
        </radialGradient>
        <linearGradient id="orbitalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="orbitalGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
        </linearGradient>
        <filter id="atomGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Orbit Ellipse 1 (Rotated 30 deg) */}
      <ellipse
        cx="32"
        cy="32"
        rx="26"
        ry="10"
        transform="rotate(-30 32 32)"
        stroke="url(#orbitalGrad1)"
        strokeWidth="1.8"
        strokeDasharray={animate ? '5 2.5' : 'none'}
        className={animate ? 'animate-[spin_12s_linear_infinite]' : ''}
        style={{ transformOrigin: '32px 32px' }}
      />

      {/* Orbit Ellipse 2 (Rotated 90 deg) */}
      <ellipse
        cx="32"
        cy="32"
        rx="26"
        ry="10"
        transform="rotate(90 32 32)"
        stroke="url(#orbitalGrad2)"
        strokeWidth="1.8"
        className={animate ? 'animate-[spin_16s_linear_infinite_reverse]' : ''}
        style={{ transformOrigin: '32px 32px' }}
      />

      {/* Orbit Ellipse 3 (Rotated 30 deg opposite) */}
      <ellipse
        cx="32"
        cy="32"
        rx="26"
        ry="10"
        transform="rotate(30 32 32)"
        stroke="url(#orbitalGrad1)"
        strokeWidth="1.8"
        strokeDasharray="4 3"
      />

      {/* Ambient Nucleus Glow Halo */}
      <circle cx="32" cy="32" r="10" fill="#06b6d4" fillOpacity="0.25" filter="url(#atomGlow)" />

      {/* Pulsing Quantum Core Nucleus */}
      <circle
        cx="32"
        cy="32"
        r="6.5"
        fill="url(#atomCoreGrad)"
        stroke="#e0f2fe"
        strokeWidth="1.2"
        className={animate ? 'animate-pulse' : ''}
      />

      {/* High-energy central proton spark */}
      <circle cx="30" cy="30" r="2" fill="#ffffff" />

      {/* Orbiting Quantum Particles (Electrons) */}
      <circle cx="10" cy="20" r="2.2" fill="#38bdf8" filter="url(#atomGlow)" />
      <circle cx="53" cy="42" r="2.2" fill="#818cf8" filter="url(#atomGlow)" />
      <circle cx="32" cy="7" r="1.8" fill="#a5f3fc" />
    </svg>
  );
}

export function CircuitChipSvg({ size = 32, className = '', animate = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Cyber Circuit & Prototyping Microchip"
    >
      <defs>
        <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Circuit Traces */}
      <path
        d="M8 20H18L24 26"
        stroke="url(#traceGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8" cy="20" r="2" fill="#38bdf8" />

      <path
        d="M8 44H18L24 38"
        stroke="url(#traceGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8" cy="44" r="2" fill="#38bdf8" />

      <path
        d="M56 20H46L40 26"
        stroke="url(#traceGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="56" cy="20" r="2" fill="#38bdf8" />

      <path
        d="M56 44H46L40 38"
        stroke="url(#traceGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="56" cy="44" r="2" fill="#38bdf8" />

      <path
        d="M32 8V18"
        stroke="url(#traceGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="32" cy="8" r="2" fill="#38bdf8" />

      <path
        d="M32 56V46"
        stroke="url(#traceGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="32" cy="56" r="2" fill="#38bdf8" />

      {/* Main Silicon Chip Die */}
      <rect
        x="20"
        y="20"
        width="24"
        height="24"
        rx="5"
        fill="url(#chipGrad)"
        stroke="#38bdf8"
        strokeWidth="1.8"
        filter="url(#circuitGlow)"
      />

      {/* Internal Logic Matrix Grid */}
      <rect
        x="25"
        y="25"
        width="14"
        height="14"
        rx="2"
        fill="#0369a1"
        fillOpacity="0.4"
        stroke="#7dd3fc"
        strokeWidth="1"
        strokeDasharray="2 1"
      />

      {/* Central Core Glow Spark */}
      <circle
        cx="32"
        cy="32"
        r="3"
        fill="#ffffff"
        className={animate ? 'animate-ping' : ''}
        style={{ animationDuration: '3s' }}
      />
      <circle cx="32" cy="32" r="2" fill="#38bdf8" />

      {/* Pin Indicators */}
      <line x1="26" y1="18" x2="26" y2="20" stroke="#7dd3fc" strokeWidth="1.5" />
      <line x1="38" y1="18" x2="38" y2="20" stroke="#7dd3fc" strokeWidth="1.5" />
      <line x1="26" y1="44" x2="26" y2="46" stroke="#7dd3fc" strokeWidth="1.5" />
      <line x1="38" y1="44" x2="38" y2="46" stroke="#7dd3fc" strokeWidth="1.5" />
    </svg>
  );
}

export function SynapseNetworkSvg({ size = 32, className = '', animate = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Synaptic Mentorship & Academic Peer Care Network"
    >
      <defs>
        <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="100%" stopColor="#a855f7" />
        </radialGradient>
        <filter id="synapseGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Concentric Care Resonance Wave Rings */}
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke="#c084fc"
        strokeWidth="1.2"
        strokeOpacity="0.3"
        strokeDasharray="4 3"
        className={animate ? 'animate-[spin_24s_linear_infinite]' : ''}
        style={{ transformOrigin: '32px 32px' }}
      />
      <circle
        cx="32"
        cy="32"
        r="17"
        stroke="#e879f9"
        strokeWidth="1.4"
        strokeOpacity="0.45"
      />

      {/* Synaptic Link Bridges */}
      <line x1="32" y1="32" x2="16" y2="20" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="32" y1="32" x2="48" y2="18" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="32" y1="32" x2="20" y2="48" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="32" y1="32" x2="46" y2="46" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="16" y1="20" x2="48" y2="18" stroke="#e879f9" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
      <line x1="20" y1="48" x2="46" y2="46" stroke="#e879f9" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />

      {/* Peripheral Academic Nodes */}
      <circle cx="16" cy="20" r="4.5" fill="#a855f7" stroke="#f5d0fe" strokeWidth="1.2" filter="url(#synapseGlow)" />
      <circle cx="16" cy="20" r="1.5" fill="#ffffff" />

      <circle cx="48" cy="18" r="4" fill="#a855f7" stroke="#f5d0fe" strokeWidth="1.2" filter="url(#synapseGlow)" />
      <circle cx="48" cy="18" r="1.5" fill="#ffffff" />

      <circle cx="20" cy="48" r="4" fill="#a855f7" stroke="#f5d0fe" strokeWidth="1.2" filter="url(#synapseGlow)" />
      <circle cx="20" cy="48" r="1.5" fill="#ffffff" />

      <circle cx="46" cy="46" r="4.5" fill="#a855f7" stroke="#f5d0fe" strokeWidth="1.2" filter="url(#synapseGlow)" />
      <circle cx="46" cy="46" r="1.5" fill="#ffffff" />

      {/* Central Heart of Mentorship Node */}
      <circle cx="32" cy="32" r="8" fill="url(#nodeGrad)" stroke="#ffffff" strokeWidth="1.6" filter="url(#synapseGlow)" />
      <polygon
        points="32,27 34,31 38,32 34,35 32,39 30,35 26,32 30,31"
        fill="#ffffff"
        className={animate ? 'animate-pulse' : ''}
      />
    </svg>
  );
}

export function DeepSpaceTelescopeSvg({ size = 32, className = '', animate = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Deep Space Astronomy Observatory Dish & Outreach"
    >
      <defs>
        <linearGradient id="dishGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <filter id="telescopeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outward Concentric Signal Wavefronts */}
      <path
        d="M38 12C44 14 50 20 52 26"
        stroke="#34d399"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
      <path
        d="M44 8C52 11 58 18 60 26"
        stroke="#6ee7b7"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.7"
        className={animate ? 'animate-pulse' : ''}
      />
      <path
        d="M50 4C60 8 64 16 64 24"
        stroke="#a7f3d0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />

      {/* Target Reticle Orbit in Deep Space */}
      <circle cx="50" cy="14" r="5" stroke="#34d399" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="50" cy="14" r="1.5" fill="#ffffff" />

      {/* Parabolic Antenna Dish Arc */}
      <path
        d="M14 42C12 30 22 18 36 16C40 28 32 40 20 44"
        fill="url(#dishGrad)"
        fillOpacity="0.25"
        stroke="#10b981"
        strokeWidth="2.2"
        strokeLinecap="round"
        filter="url(#telescopeGlow)"
      />

      {/* Sub-reflector Feed Arm */}
      <line x1="28" y1="28" x2="42" y2="18" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
      <circle cx="42" cy="18" r="3" fill="#34d399" stroke="#ffffff" strokeWidth="1" />

      {/* Sturdy Pedestal Stand Base */}
      <line x1="20" y1="44" x2="16" y2="56" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="28" y1="42" x2="34" y2="56" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="12" y1="56" x2="38" y2="56" stroke="#10b981" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function NeuralAiSvg({ size = 32, className = '', animate = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Neural Network and AI Engine"
    >
      <defs>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Synaptic Weights */}
      <line x1="14" y1="18" x2="32" y2="14" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="14" y1="18" x2="32" y2="32" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="14" y1="32" x2="32" y2="14" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="14" y1="32" x2="32" y2="32" stroke="#38bdf8" strokeWidth="1.4" strokeOpacity="0.8" />
      <line x1="14" y1="32" x2="32" y2="50" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="14" y1="46" x2="32" y2="32" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="14" y1="46" x2="32" y2="50" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.6" />

      <line x1="32" y1="14" x2="50" y2="24" stroke="#38bdf8" strokeWidth="1.4" strokeOpacity="0.8" />
      <line x1="32" y1="32" x2="50" y2="24" stroke="#38bdf8" strokeWidth="1.4" strokeOpacity="0.8" />
      <line x1="32" y1="32" x2="50" y2="40" stroke="#38bdf8" strokeWidth="1.4" strokeOpacity="0.8" />
      <line x1="32" y1="50" x2="50" y2="40" stroke="#38bdf8" strokeWidth="1.4" strokeOpacity="0.8" />

      {/* Layer 1 Nodes */}
      <circle cx="14" cy="18" r="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.4" />
      <circle cx="14" cy="32" r="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.4" />
      <circle cx="14" cy="46" r="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.4" />

      {/* Hidden Layer Nodes */}
      <circle cx="32" cy="14" r="5" fill="#0369a1" stroke="#7dd3fc" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="6" fill="#0284c7" stroke="#ffffff" strokeWidth="1.8" className={animate ? 'animate-pulse' : ''} />
      <circle cx="32" cy="50" r="5" fill="#0369a1" stroke="#7dd3fc" strokeWidth="1.6" />

      {/* Output Layer Nodes */}
      <circle cx="50" cy="24" r="4.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.6" />
      <circle cx="50" cy="40" r="4.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.6" />
    </svg>
  );
}

export function MathModelingSvg({ size = 32, className = '', animate = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Mathematical Wave and Modeling Equations"
    >
      <defs>
        <linearGradient id="mathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Coordinate Grid Box */}
      <path d="M10 52H54" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 10V54" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 52L52 14" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />

      {/* Harmonic Wave Function */}
      <path
        d="M14 36C22 18 26 50 36 32C44 16 48 44 54 26"
        stroke="url(#mathGrad)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Golden Ratio Spiral Curve */}
      <path
        d="M32 32C32 26 38 26 38 32C38 40 28 40 28 32C28 20 44 20 44 32C44 48 20 48 20 32"
        stroke="#34d399"
        strokeWidth="1.2"
        strokeDasharray="2 2"
        strokeOpacity="0.7"
      />

      {/* Golden Ratio Key Nodes */}
      <circle cx="36" cy="32" r="2.5" fill="#ffffff" />
      <circle cx="26" cy="38" r="2" fill="#38bdf8" />
      <circle cx="44" cy="24" r="2" fill="#34d399" />
    </svg>
  );
}

export function DnaGenomicsSvg({ size = 32, className = '', animate = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Biotechnology DNA Double Helix"
    >
      {/* Base Pair Rungs */}
      <line x1="20" y1="16" x2="44" y2="16" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="24" y1="24" x2="40" y2="24" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="30" y1="32" x2="34" y2="32" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="40" x2="40" y2="40" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="20" y1="48" x2="44" y2="48" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" />

      {/* Strand Alpha */}
      <path
        d="M20 12C20 22 44 26 44 36C44 46 20 50 20 60"
        stroke="#4ade80"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Strand Beta */}
      <path
        d="M44 12C44 22 20 26 20 36C20 46 44 50 44 60"
        stroke="#2dd4bf"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Molecular Phosphate Spheres */}
      <circle cx="20" cy="16" r="3" fill="#22c55e" stroke="#ffffff" strokeWidth="1" />
      <circle cx="44" cy="16" r="3" fill="#2dd4bf" stroke="#ffffff" strokeWidth="1" />
      <circle cx="44" cy="36" r="3" fill="#22c55e" stroke="#ffffff" strokeWidth="1" />
      <circle cx="20" cy="36" r="3" fill="#2dd4bf" stroke="#ffffff" strokeWidth="1" />
      <circle cx="20" cy="48" r="3" fill="#22c55e" stroke="#ffffff" strokeWidth="1" />
      <circle cx="44" cy="48" r="3" fill="#2dd4bf" stroke="#ffffff" strokeWidth="1" />
    </svg>
  );
}

export function MaterialsCrystalSvg({ size = 32, className = '', animate = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Materials Science Crystal Honeycomb Lattice"
    >
      <polygon
        points="32,8 50,18 50,40 32,50 14,40 14,18"
        stroke="#f59e0b"
        strokeWidth="2"
        fill="#f59e0b"
        fillOpacity="0.1"
      />
      <polygon
        points="32,18 42,24 42,36 32,42 22,36 22,24"
        stroke="#fbbf24"
        strokeWidth="1.6"
        fill="#fbbf24"
        fillOpacity="0.15"
      />
      <line x1="32" y1="8" x2="32" y2="18" stroke="#f59e0b" strokeWidth="1.6" />
      <line x1="50" y1="18" x2="42" y2="24" stroke="#f59e0b" strokeWidth="1.6" />
      <line x1="50" y1="40" x2="42" y2="36" stroke="#f59e0b" strokeWidth="1.6" />
      <line x1="32" y1="50" x2="32" y2="42" stroke="#f59e0b" strokeWidth="1.6" />
      <line x1="14" y1="40" x2="22" y2="36" stroke="#f59e0b" strokeWidth="1.6" />
      <line x1="14" y1="18" x2="22" y2="24" stroke="#f59e0b" strokeWidth="1.6" />

      {/* Atomic Nuclei at Vertices */}
      <circle cx="32" cy="8" r="2.5" fill="#ffffff" />
      <circle cx="50" cy="18" r="2.5" fill="#fde68a" />
      <circle cx="50" cy="40" r="2.5" fill="#fde68a" />
      <circle cx="32" cy="50" r="2.5" fill="#ffffff" />
      <circle cx="14" cy="40" r="2.5" fill="#fde68a" />
      <circle cx="14" cy="18" r="2.5" fill="#fde68a" />
      <circle cx="32" cy="30" r="3.5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.2" />
    </svg>
  );
}

export function CyberShieldSvg({ size = 32, className = '', animate = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Cybersecurity CTF Shield"
    >
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
      </defs>

      <path
        d="M32 8L50 16V32C50 44 42 52 32 58C22 52 14 44 14 32V16L32 8Z"
        fill="url(#shieldGrad)"
        fillOpacity="0.4"
        stroke="#38bdf8"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      <path
        d="M32 16L44 22V32C44 40 39 46 32 50C25 46 20 40 20 32V22L32 16Z"
        stroke="#7dd3fc"
        strokeWidth="1.2"
        strokeDasharray="3 2"
      />

      {/* Central Terminal Key / Hash Lock */}
      <rect x="27" y="29" width="10" height="9" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.4" />
      <path d="M29 29V25C29 23.3 30.3 22 32 22C33.7 22 35 23.3 35 25V29" stroke="#38bdf8" strokeWidth="1.6" />
      <circle cx="32" cy="33" r="1.5" fill="#ffffff" />
    </svg>
  );
}

export function HolographicMediaSvg({ size = 32, className = '', animate = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Media & Visual Production Aperture"
    >
      <circle cx="32" cy="32" r="22" stroke="#f43f5e" strokeWidth="2" strokeDasharray="6 3" />
      <circle cx="32" cy="32" r="15" stroke="#fb7185" strokeWidth="1.5" />
      {/* Aperture Blades */}
      <line x1="32" y1="17" x2="42" y2="24" stroke="#f43f5e" strokeWidth="1.8" />
      <line x1="42" y1="24" x2="44" y2="36" stroke="#f43f5e" strokeWidth="1.8" />
      <line x1="44" y1="36" x2="36" y2="45" stroke="#f43f5e" strokeWidth="1.8" />
      <line x1="36" y1="45" x2="24" y2="42" stroke="#f43f5e" strokeWidth="1.8" />
      <line x1="24" y1="42" x2="20" y2="30" stroke="#f43f5e" strokeWidth="1.8" />
      <line x1="20" y1="30" x2="32" y2="17" stroke="#f43f5e" strokeWidth="1.8" />
      <circle cx="32" cy="32" r="5" fill="#f43f5e" />
      <circle cx="30" cy="30" r="1.5" fill="#ffffff" />
    </svg>
  );
}
