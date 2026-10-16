import React, { useId } from 'react';

// ============================================================================
// QUANTA BESPOKE SCIENTIFIC & ARCHITECTURAL VECTOR INSTRUMENTS
// High-precision, collision-free (useId) luminous SVGs crafted for PC & Mobile
// ============================================================================

export function AtomOrbitalSvg({ size = 40, className = '', animate = true }) {
  const uid = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${className}`}
      role="img"
      aria-label="Quantum Physics Orbital"
    >
      <defs>
        <radialGradient id={`${uid}-core`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-ring1`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id={`${uid}-ring2`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="50%" stopColor="#818cf8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      {/* Outer Reference Horizon */}
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="rgba(56,189,248,0.2)"
        strokeWidth="1"
        strokeDasharray="2 5"
      />

      {/* Elliptical Quantum Orbit 1 */}
      <g transform="rotate(-30 32 32)">
        <ellipse
          cx="32"
          cy="32"
          rx="27"
          ry="10.5"
          stroke={`url(#${uid}-ring1)`}
          strokeWidth="1.75"
        />
        <circle
          cx="59"
          cy="32"
          r="2.6"
          fill="#e0f2fe"
          className={animate ? 'animate-pulse' : ''}
        />
        <circle cx="59" cy="32" r="5" fill="#38bdf8" fillOpacity="0.35" />
      </g>

      {/* Elliptical Quantum Orbit 2 */}
      <g transform="rotate(30 32 32)">
        <ellipse
          cx="32"
          cy="32"
          rx="27"
          ry="10.5"
          stroke={`url(#${uid}-ring2)`}
          strokeWidth="1.75"
        />
        <circle cx="5" cy="32" r="2.6" fill="#a5b4fc" />
        <circle cx="5" cy="32" r="5" fill="#818cf8" fillOpacity="0.35" />
      </g>

      {/* Elliptical Quantum Orbit 3 (Vertical Spin Axis) */}
      <g transform="rotate(90 32 32)">
        <ellipse
          cx="32"
          cy="32"
          rx="27"
          ry="9.5"
          stroke={`url(#${uid}-ring1)`}
          strokeWidth="1.4"
          strokeDasharray="4 3"
        />
        <circle cx="32" cy="22.5" r="2.2" fill="#38bdf8" />
      </g>

      {/* Radiant Quantum Nucleus */}
      <circle cx="32" cy="32" r="11" fill={`url(#${uid}-core)`} />
      <circle
        cx="32"
        cy="32"
        r="4.2"
        fill="#ffffff"
        stroke="#38bdf8"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MathModelingSvg({ size = 40, className = '', animate = true }) {
  const uid = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${className}`}
      role="img"
      aria-label="Mathematical Manifold & Harmonic Geometry"
    >
      <defs>
        <linearGradient id={`${uid}-math`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>

      {/* Precision Coordinate Axes */}
      <line x1="8" y1="32" x2="56" y2="32" stroke="rgba(148,163,184,0.28)" strokeWidth="1" />
      <line x1="32" y1="8" x2="32" y2="56" stroke="rgba(148,163,184,0.28)" strokeWidth="1" />

      {/* Outer Sacred Geometry Octagon / Circle */}
      <circle
        cx="32"
        cy="32"
        r="25"
        stroke="rgba(52,211,153,0.3)"
        strokeWidth="1.2"
        strokeDasharray="3 4"
        className={animate ? 'animate-spin-slow' : ''}
        style={{ transformOrigin: '32px 32px' }}
      />

      {/* Parametric Lissajous / Harmonic Wave Curve */}
      <path
        d="M10 32 C 16 10, 26 10, 32 32 C 38 54, 48 54, 54 32"
        stroke={`url(#${uid}-math)`}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10 32 C 16 54, 26 54, 32 32 C 38 10, 48 10, 54 32"
        stroke="#38bdf8"
        strokeWidth="1.5"
        strokeOpacity="0.55"
        strokeDasharray="3 3"
        strokeLinecap="round"
      />

      {/* Inscribed Geometric Rhombus */}
      <polygon
        points="32,11 53,32 32,53 11,32"
        stroke="#34d399"
        strokeWidth="1.3"
        strokeOpacity="0.65"
        fill="rgba(16,185,129,0.06)"
      />

      {/* Critical Inflection Nodes */}
      <circle cx="32" cy="32" r="3.2" fill="#ffffff" stroke="#34d399" strokeWidth="1.5" />
      <circle cx="21" cy="19" r="2.5" fill="#6ee7b7" />
      <circle cx="43" cy="45" r="2.5" fill="#38bdf8" />
      <circle cx="32" cy="11" r="2" fill="#ffffff" />
      <circle cx="32" cy="53" r="2" fill="#ffffff" />
    </svg>
  );
}

export function NeuralAiSvg({ size = 40, className = '', animate = true }) {
  const uid = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${className}`}
      role="img"
      aria-label="Computer Science, Algorithms & Neural AI"
    >
      <defs>
        <linearGradient id={`${uid}-synapse`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>

      {/* Outer Tensor Brackets */}
      <path
        d="M14 10 H8 V54 H14"
        stroke="rgba(56,189,248,0.45)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 10 H56 V54 H50"
        stroke="rgba(129,140,248,0.45)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Weighted Synaptic Connections */}
      <g stroke={`url(#${uid}-synapse)`} strokeWidth="1.4" strokeOpacity="0.75">
        <line x1="17" y1="18" x2="32" y2="14" />
        <line x1="17" y1="18" x2="32" y2="32" />
        <line x1="17" y1="32" x2="32" y2="14" />
        <line x1="17" y1="32" x2="32" y2="32" strokeWidth="2" />
        <line x1="17" y1="32" x2="32" y2="50" />
        <line x1="17" y1="46" x2="32" y2="32" />
        <line x1="17" y1="46" x2="32" y2="50" />

        <line x1="32" y1="14" x2="47" y2="23" />
        <line x1="32" y1="32" x2="47" y2="23" strokeWidth="2" />
        <line x1="32" y1="32" x2="47" y2="41" strokeWidth="2" />
        <line x1="32" y1="50" x2="47" y2="41" />
      </g>

      {/* Input Layer Nodes */}
      <circle cx="17" cy="18" r="3.2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />
      <circle cx="17" cy="32" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.2" />
      <circle cx="17" cy="46" r="3.2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />

      {/* Hidden Attention Layer Nodes */}
      <circle cx="32" cy="14" r="3.8" fill="#0f172a" stroke="#7dd3fc" strokeWidth="1.8" />
      <circle
        cx="32"
        cy="32"
        r="5.2"
        fill="#38bdf8"
        stroke="#ffffff"
        strokeWidth="1.8"
        className={animate ? 'animate-pulse' : ''}
      />
      <circle cx="32" cy="50" r="3.8" fill="#0f172a" stroke="#7dd3fc" strokeWidth="1.8" />

      {/* Output Layer Nodes */}
      <circle cx="47" cy="23" r="4" fill="#818cf8" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="47" cy="41" r="4" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
    </svg>
  );
}

export function DeepSpaceTelescopeSvg({ size = 40, className = '', animate = true }) {
  const uid = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${className}`}
      role="img"
      aria-label="Astronomy & Deep Space Observatory"
    >
      <defs>
        <linearGradient id={`${uid}-cosmos`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>

      {/* Outer Celestial Meridian Ring */}
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="rgba(56,189,248,0.22)"
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />

      {/* Tilted Planetary Ring System */}
      <ellipse
        cx="32"
        cy="32"
        rx="28"
        ry="9"
        transform="rotate(-24 32 32)"
        stroke={`url(#${uid}-cosmos)`}
        strokeWidth="2"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="22"
        ry="6.5"
        transform="rotate(-24 32 32)"
        stroke="rgba(125,211,252,0.45)"
        strokeWidth="1"
      />

      {/* Central Celestial Body / Exoplanet */}
      <circle
        cx="32"
        cy="32"
        r="11"
        fill="#0c1938"
        stroke="#38bdf8"
        strokeWidth="1.8"
      />
      {/* Illuminated Crescent Highlight */}
      <path
        d="M28 22 A 10 10 0 0 1 41 36"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Relativistic Pulsar Polar Jets */}
      <line
        x1="20"
        y1="8"
        x2="26"
        y2="20"
        stroke="#7dd3fc"
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />
      <line
        x1="38"
        y1="44"
        x2="44"
        y2="56"
        stroke="#7dd3fc"
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />

      {/* Orbiting Satellite / Moon + Four-Point Star */}
      <circle cx="56" cy="21" r="2.6" fill="#ffffff" />
      <path
        d="M14 12 L15.2 15.8 L19 17 L15.2 18.2 L14 22 L12.8 18.2 L9 17 L12.8 15.8 Z"
        fill="#38bdf8"
        className={animate ? 'animate-pulse' : ''}
      />
    </svg>
  );
}

export function CircuitChipSvg({ size = 40, className = '', animate = true }) {
  const uid = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${className}`}
      role="img"
      aria-label="Engineering, Robotics & Embedded Hardware"
    >
      <defs>
        <linearGradient id={`${uid}-pcb`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>

      {/* Precision PCB Bus Traces */}
      <g stroke={`url(#${uid}-pcb)`} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22 H16 L21 27" />
        <path d="M8 42 H16 L21 37" />
        <path d="M56 22 H48 L43 27" />
        <path d="M56 42 H48 L43 37" />
        <path d="M22 8 V16 L27 21" />
        <path d="M42 8 V16 L37 21" />
        <path d="M22 56 V48 L27 43" />
        <path d="M42 56 V48 L37 43" />
      </g>

      {/* Solder Pad Terminals */}
      <circle cx="8" cy="22" r="2.2" fill="#38bdf8" />
      <circle cx="8" cy="42" r="2.2" fill="#34d399" />
      <circle cx="56" cy="22" r="2.2" fill="#38bdf8" />
      <circle cx="56" cy="42" r="2.2" fill="#34d399" />
      <circle cx="22" cy="8" r="2.2" fill="#38bdf8" />
      <circle cx="42" cy="8" r="2.2" fill="#34d399" />
      <circle cx="22" cy="56" r="2.2" fill="#38bdf8" />
      <circle cx="42" cy="56" r="2.2" fill="#34d399" />

      {/* Central Silicon Microprocessor Package */}
      <rect
        x="19"
        y="19"
        width="26"
        height="26"
        rx="4"
        fill="#0a162e"
        stroke="#38bdf8"
        strokeWidth="1.8"
      />

      {/* Inner Architecture Core */}
      <rect
        x="24.5"
        y="24.5"
        width="15"
        height="15"
        rx="2"
        stroke="#7dd3fc"
        strokeWidth="1.2"
        fill="rgba(56,189,248,0.12)"
      />
      <circle
        cx="32"
        cy="32"
        r="3"
        fill="#ffffff"
        className={animate ? 'animate-pulse' : ''}
      />
    </svg>
  );
}

export function DnaGenomicsSvg({ size = 40, className = '', animate = true }) {
  const uid = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${className}`}
      role="img"
      aria-label="Interdisciplinary STEM & Molecular Lattice"
    >
      <defs>
        <linearGradient id={`${uid}-stem`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>

      {/* Outer Hexagonal Molecular Cage */}
      <polygon
        points="32,6 54,19 54,45 32,58 10,45 10,19"
        stroke={`url(#${uid}-stem)`}
        strokeWidth="1.8"
        fill="rgba(45,212,191,0.06)"
      />

      {/* Internal Crystalline Bonds */}
      <line x1="32" y1="6" x2="32" y2="58" stroke="rgba(56,189,248,0.35)" strokeWidth="1.2" />
      <line x1="10" y1="19" x2="54" y2="45" stroke="rgba(56,189,248,0.35)" strokeWidth="1.2" />
      <line x1="54" y1="19" x2="10" y2="45" stroke="rgba(56,189,248,0.35)" strokeWidth="1.2" />

      {/* Inner Benzene / Graphene Resonance Ring */}
      <circle
        cx="32"
        cy="32"
        r="11"
        stroke="#7dd3fc"
        strokeWidth="1.6"
        strokeDasharray="4 2.5"
        className={animate ? 'animate-spin-slow' : ''}
        style={{ transformOrigin: '32px 32px' }}
      />

      {/* Atomic Vertex Spheres */}
      <circle cx="32" cy="6" r="2.8" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
      <circle cx="54" cy="19" r="2.8" fill="#2dd4bf" stroke="#ffffff" strokeWidth="1" />
      <circle cx="54" cy="45" r="2.8" fill="#818cf8" stroke="#ffffff" strokeWidth="1" />
      <circle cx="32" cy="58" r="2.8" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
      <circle cx="10" cy="45" r="2.8" fill="#2dd4bf" stroke="#ffffff" strokeWidth="1" />
      <circle cx="10" cy="19" r="2.8" fill="#818cf8" stroke="#ffffff" strokeWidth="1" />

      {/* Central Core */}
      <circle cx="32" cy="32" r="4" fill="#ffffff" />
    </svg>
  );
}

export function SynapseNetworkSvg({ size = 40, className = '', animate = true }) {
  const uid = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${className}`}
      role="img"
      aria-label="Community Network, Leadership & Synergy"
    >
      <defs>
        <linearGradient id={`${uid}-net`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>

      {/* Outer Orbital Ring */}
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke="rgba(192,132,252,0.35)"
        strokeWidth="1.3"
        strokeDasharray="5 4"
        className={animate ? 'animate-spin-slow' : ''}
        style={{ transformOrigin: '32px 32px' }}
      />

      {/* Constellation Mesh Bridges */}
      <g stroke={`url(#${uid}-net)`} strokeWidth="1.6" strokeLinecap="round">
        <line x1="32" y1="32" x2="16" y2="18" />
        <line x1="32" y1="32" x2="48" y2="18" />
        <line x1="32" y1="32" x2="16" y2="46" />
        <line x1="32" y1="32" x2="48" y2="46" />
        <line x1="16" y1="18" x2="48" y2="18" strokeOpacity="0.45" />
        <line x1="16" y1="46" x2="48" y2="46" strokeOpacity="0.45" />
      </g>

      {/* Satellite Nodes */}
      <circle cx="16" cy="18" r="3.6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />
      <circle cx="48" cy="18" r="3.6" fill="#0f172a" stroke="#c084fc" strokeWidth="1.8" />
      <circle cx="16" cy="46" r="3.6" fill="#0f172a" stroke="#c084fc" strokeWidth="1.8" />
      <circle cx="48" cy="46" r="3.6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />

      {/* Central Star Hub */}
      <circle cx="32" cy="32" r="6.5" fill="#0c1938" stroke="#ffffff" strokeWidth="1.8" />
      <circle cx="32" cy="32" r="2.8" fill="#38bdf8" />
    </svg>
  );
}

export function MaterialsCrystalSvg({ size = 40, className = '', animate = true }) {
  const uid = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${className}`}
      role="img"
      aria-label="Precision Architecture & Logistics"
    >
      <defs>
        <linearGradient id={`${uid}-crys`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>

      {/* Isometric 3D Cube / Crystal */}
      <polygon
        points="32,8 54,20 54,44 32,56 10,44 10,20"
        stroke={`url(#${uid}-crys)`}
        strokeWidth="1.8"
        fill="rgba(56,189,248,0.06)"
      />
      <polyline
        points="10,20 32,32 54,20"
        stroke="#7dd3fc"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <line x1="32" y1="32" x2="32" y2="56" stroke="#7dd3fc" strokeWidth="1.6" />

      {/* Inner Floating Octahedron Core */}
      <polygon
        points="32,18 44,32 32,46 20,32"
        stroke="#fbbf24"
        strokeWidth="1.3"
        strokeDasharray="3 2"
        fill="rgba(251,191,36,0.1)"
      />

      <circle
        cx="32"
        cy="32"
        r="3.2"
        fill="#ffffff"
        stroke="#38bdf8"
        strokeWidth="1.5"
        className={animate ? 'animate-pulse' : ''}
      />
    </svg>
  );
}

export function CyberShieldSvg({ size = 40, className = '', animate = true }) {
  const uid = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${className}`}
      role="img"
      aria-label="Cybersecurity, Hackathons & CTF"
    >
      <defs>
        <linearGradient id={`${uid}-shield`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      <path
        d="M32 7 L52 15 V31 C52 44 43 52 32 58 C21 52 12 44 12 31 V15 L32 7 Z"
        fill="rgba(14,25,52,0.7)"
        stroke={`url(#${uid}-shield)`}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32 14 L46 20 V31 C46 40 40 46 32 51 C24 46 18 40 18 31 V20 L32 14 Z"
        stroke="rgba(125,211,252,0.45)"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />

      {/* Central Cryptographic Keyhole / Node */}
      <circle
        cx="32"
        cy="29"
        r="4.5"
        stroke="#ffffff"
        strokeWidth="1.8"
        fill="#38bdf8"
        className={animate ? 'animate-pulse' : ''}
      />
      <path
        d="M32 33.5 V42"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HolographicMediaSvg({ size = 40, className = '', animate = true }) {
  const uid = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${className}`}
      role="img"
      aria-label="Visual Media, Optics & Outreach"
    >
      <defs>
        <linearGradient id={`${uid}-lens`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
      </defs>

      {/* Outer Optical Ring */}
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke={`url(#${uid}-lens)`}
        strokeWidth="1.8"
      />
      <circle
        cx="32"
        cy="32"
        r="18"
        stroke="rgba(125,211,252,0.45)"
        strokeWidth="1.2"
        strokeDasharray="6 3"
        className={animate ? 'animate-spin-slow' : ''}
        style={{ transformOrigin: '32px 32px' }}
      />

      {/* Precision Optical Aperture Blades */}
      <g stroke="#7dd3fc" strokeWidth="1.4" strokeOpacity="0.75">
        <line x1="32" y1="14" x2="43" y2="23" />
        <line x1="47" y1="23" x2="43" y2="37" />
        <line x1="47" y1="41" x2="32" y2="46" />
        <line x1="32" y1="50" x2="21" y2="41" />
        <line x1="17" y1="41" x2="21" y2="27" />
        <line x1="17" y1="23" x2="32" y2="18" />
      </g>

      {/* Focal Point */}
      <circle cx="32" cy="32" r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="1.5" fill="#ffffff" />
    </svg>
  );
}
