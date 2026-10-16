import React, { useState } from 'react';

export default function Logo({ size = 48, className = '', glow = true }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`relative flex items-center justify-center ${className}`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full ${glow ? 'drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]' : ''}`}
          role="img"
          aria-label="Quanta Logo"
        >
          {/* Orbital rings */}
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="18"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            transform="rotate(-30 50 50)"
            strokeDasharray="4 2"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="18"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
            transform="rotate(30 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="18"
            fill="none"
            stroke="#818cf8"
            strokeWidth="1.5"
            transform="rotate(90 50 50)"
          />
          {/* Quantum nucleus */}
          <circle cx="50" cy="50" r="10" fill="#38bdf8" />
          <circle cx="50" cy="50" r="5" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center shrink-0 ${className}`}
    >
      <img
        src="/logo/quanta-logo.png"
        alt="Quanta Multidisciplinaire — Scientific Club"
        className={`w-full h-full object-contain ${
          glow ? 'drop-shadow-[0_0_18px_rgba(6,182,212,0.5)]' : ''
        }`}
        onError={() => setImgError(true)}
      />
    </div>
  );
}
