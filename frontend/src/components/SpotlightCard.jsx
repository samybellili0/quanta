import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function SpotlightCard({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  onClick,
  ...props
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`quantum-card rounded-lg border border-sky-400/20 hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden group ${className}`}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
