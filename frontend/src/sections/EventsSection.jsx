import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { getEvents } from '../services/api.js';
import useFetch from '../hooks/useFetch.js';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  AtomOrbitalSvg,
  DeepSpaceTelescopeSvg,
  CyberShieldSvg,
  NeuralAiSvg,
} from '../components/OriginalIcons.jsx';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

export const fmtDate = (d) =>
  new Date(d).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export function EventImage({ src, alt = '', category = '' }) {
  const [failed, setFailed] = useState(!src);

  const cat = (category || '').toLowerCase();
  const FallbackSvg = cat.includes('astro')
    ? DeepSpaceTelescopeSvg
    : cat.includes('comp')
    ? CyberShieldSvg
    : cat.includes('stem')
    ? NeuralAiSvg
    : AtomOrbitalSvg;

  return (
    <div className="h-36 sm:h-40 w-full overflow-hidden bg-gradient-to-br from-[#0c1938] via-[#070f24] to-[#03060f] relative flex items-center justify-center border-b border-sky-400/15">
      {!failed && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 opacity-80 group-hover:scale-110 transition-transform duration-500">
          <FallbackSvg size={50} animate={true} />
        </div>
      )}
    </div>
  );
}

function EventCard({ e }) {
  const cardRef = useRef(null);

  const handleMouseMove = (ev) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${ev.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${ev.clientY - rect.top}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="quantum-card rounded-lg border border-sky-400/20 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden flex flex-col w-[290px] sm:w-[325px] shrink-0 group hover:-translate-y-1.5"
    >
      <EventImage src={e.image} alt={e.title} category={e.category} />

      <div className="p-4 flex-1 flex flex-col items-start text-left gap-1.5">
        <span className="px-2.5 py-0.5 rounded-md border border-cyan-400/50 text-cyan-300 text-xs font-medium">
          {e.category}
        </span>

        <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors line-clamp-1 leading-snug">
          {e.title}
        </h3>

        <p className="text-xs text-slate-400 leading-relaxed">
          {fmtDate(e.date)} · {e.location}
        </p>

        <p className="text-xs text-slate-300/85 line-clamp-2 leading-relaxed mb-2">
          {e.description}
        </p>

        <Link
          to={`/events/${e.id}`}
          className="mt-auto px-3.5 py-1.5 rounded-md bg-transparent hover:bg-cyan-400/15 text-cyan-400 border border-cyan-400/60 hover:border-cyan-400 text-xs font-semibold transition-all"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}

export default function EventsSection() {
  const { data, loading, error } = useFetch(getEvents);
  const sectionRef = useRef(null);
  const mobileRowRef = useRef(null);
  const { playClick } = useSoundEffects();

  // Vertical-to-Horizontal Scroll Mapping for Desktop
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const xTranslate = useTransform(smoothProgress, [0, 1], ['0%', '-62%']);

  const scrollDesktopByStep = (dir) => {
    playClick();
    window.scrollBy({
      top: dir * window.innerHeight * 0.38,
      behavior: 'smooth',
    });
  };

  const scrollMobileByStep = (dir) => {
    playClick();
    if (mobileRowRef.current) {
      mobileRowRef.current.scrollBy({
        left: dir * 320,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="events" ref={sectionRef} className="relative lg:h-[240vh]">
      {/* Desktop Sticky Horizontal Scroll-Driven Viewport */}
      <div className="hidden lg:flex sticky top-16 h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden py-10">
        <div className="max-w-6xl w-full mx-auto px-6 mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Major events
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Scroll down or use the arrows to explore our events horizontally.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Horizontal Scroll Progress Bar */}
            <div className="w-32 h-1.5 bg-slate-900 rounded-sm overflow-hidden border border-sky-400/20">
              <motion.div
                style={{ scaleX: smoothProgress }}
                className="h-full bg-cyan-400 origin-left"
              />
            </div>

            <button
              aria-label="Previous events"
              onClick={() => scrollDesktopByStep(-1)}
              className="w-9 h-9 rounded-md border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/15 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next events"
              onClick={() => scrollDesktopByStep(1)}
              className="w-9 h-9 rounded-md border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/15 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {loading && (
          <p role="status" className="max-w-6xl mx-auto px-6 text-slate-400">
            Loading events...
          </p>
        )}
        {error && (
          <p role="alert" className="max-w-6xl mx-auto px-6 text-red-400">
            Unable to load events. Please try again later.
          </p>
        )}

        <div className="w-full overflow-hidden pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          <motion.div
            style={{ x: xTranslate }}
            className="flex gap-5 pr-24 py-3 w-max"
          >
            {data?.map((e) => (
              <EventCard key={e.id} e={e} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile & Tablet Horizontal Touch Scroll Gallery */}
      <div className="lg:hidden py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Major events
          </h2>
          <div className="flex gap-2">
            <button
              aria-label="Previous events"
              onClick={() => scrollMobileByStep(-1)}
              className="w-8 h-8 rounded-md border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/15 flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next events"
              onClick={() => scrollMobileByStep(1)}
              className="w-8 h-8 rounded-md border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/15 flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {loading && (
          <p role="status" className="text-slate-400 text-sm">
            Loading events...
          </p>
        )}
        {error && (
          <p role="alert" className="text-red-400 text-sm">
            Unable to load events. Please try again later.
          </p>
        )}

        <div
          ref={mobileRowRef}
          tabIndex={0}
          aria-label="Events"
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          {data?.map((e) => (
            <div key={e.id} className="snap-start shrink-0">
              <EventCard e={e} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
