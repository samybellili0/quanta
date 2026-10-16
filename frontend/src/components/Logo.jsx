import React, { useState } from 'react';

export default function Logo({ size, className = '', glow = true }) {
  const [imgError, setImgError] = useState(false);
  const sizeStyle = size ? { width: size, height: size } : {};

  if (imgError) {
    return (
      <div
        style={sizeStyle}
        className={`relative flex items-center justify-center shrink-0 ${!size && !className.includes('w-') ? 'w-12 h-12' : ''} ${className}`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full ${glow ? 'drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]' : ''}`}
          role="img"
          aria-label="Quanta Logo"
        >
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
          <circle cx="50" cy="50" r="10" fill="#38bdf8" />
          <circle cx="50" cy="50" r="5" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  return (
    <div
      style={sizeStyle}
      className={`relative flex items-center justify-center shrink-0 ${!size && !className.includes('w-') ? 'w-12 h-12' : ''} ${className}`}
    >
      <img
        src="/logo/quanta-logo.webp"
        alt="Quanta Multidisciplinaire"
        className={`w-full h-full object-contain ${
          glow ? 'drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]' : ''
        }`}
        onError={() => setImgError(true)}
      />
    </div>
  );
}
