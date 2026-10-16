import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
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
import { useLenis } from '../components/SmoothScrollProvider.jsx';

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
    <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-sm bg-gradient-to-br from-[#0c1938] via-[#070f24] to-[#040711] flex items-center justify-center">
      {/* Subtle Architectural Corner Reticles */}
      <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-400/60 pointer-events-none z-10" />
      <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400/60 pointer-events-none z-10" />
      <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-400/60 pointer-events-none z-10" />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-400/60 pointer-events-none z-10" />

      {!failed && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 opacity-90 group-hover:scale-110 transition-transform duration-500">
          <FallbackSvg size={64} animate={true} />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#050811] to-transparent pointer-events-none" />
    </div>
  );
}

function EventSlide({ e, idx, isActive }) {
  const num = String(idx + 1).padStart(2, '0');

  return (
    <article
      className={`group relative flex flex-col w-[285px] sm:w-[340px] shrink-0 pt-6 border-t border-white/15 hairline-sweep ${
        isActive ? 'is-active' : ''
      }`}
    >
      {/* Glowing Timeline Node on the Continuous Horizontal Axis */}
      <span
        className={`absolute -top-[5px] left-0 w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
          isActive
            ? 'bg-cyan-400 border-white scale-125 shadow-[0_0_12px_#38bdf8]'
            : 'bg-slate-900 border-cyan-400/60 group-hover:bg-cyan-400 group-hover:scale-125'
        }`}
      />

      {/* Top Meta Row: Hollow Index Number + Category & Date */}
      <div className="flex items-baseline justify-between gap-2 mb-3">
        <span
          className={`font-display font-bold text-3xl sm:text-4xl transition-all duration-300 leading-none ${
            isActive
              ? 'text-stroke-active'
              : 'text-stroke-cyan group-hover:text-stroke-active'
          }`}
        >
          {num}
        </span>
        <div className="text-right min-w-0">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block">
            {e.category}
          </span>
          <p className="text-[11px] text-slate-400 mt-0.5 truncate">
            {fmtDate(e.date)} · {e.location}
          </p>
        </div>
      </div>

      {/* Frameless Visual Stage */}
      <Link to={`/events/${e.id}`} className="block overflow-hidden">
        <EventImage src={e.image} alt={e.title} category={e.category} />
      </Link>

      {/* Open Editorial Typography */}
      <div className="pt-4 flex-1 flex flex-col items-start text-left">
        <Link to={`/events/${e.id}`} className="w-full">
          <h3
            className={`font-display font-bold text-base sm:text-xl transition-colors line-clamp-1 leading-snug ${
              isActive ? 'text-cyan-300' : 'text-white group-hover:text-cyan-300'
            }`}
          >
            {e.title}
          </h3>
        </Link>

        <p className="mt-1.5 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {e.description}
        </p>

        <Link
          to={`/events/${e.id}`}
          className="mt-auto inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 group-hover:text-white transition-colors"
        >
          <span>Learn More</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-cyan-400">
            ↗
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function EventsSection() {
  const { data, loading, error } = useFetch(getEvents);
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const mobileRowRef = useRef(null);

  const [maxScroll, setMaxScroll] = useState(1400);
  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileProgress, setMobileProgress] = useState(0);

  const { playClick } = useSoundEffects();
  const lenis = useLenis();

  const totalEvents = data?.length || 8;

  // Measure exact pixel travel distance so horizontal scroll starts at card 01 and stops cleanly at card 08
  useEffect(() => {
    const updateBounds = () => {
      if (trackRef.current && viewportRef.current) {
        const scrollW = trackRef.current.scrollWidth;
        const clientW = viewportRef.current.clientWidth;
        setMaxScroll(Math.max(0, scrollW - clientW + 48));
      }
    };

    updateBounds();
    const ro = new ResizeObserver(updateBounds);
    if (trackRef.current) ro.observe(trackRef.current);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener('resize', updateBounds);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateBounds);
    };
  }, [data]);

  // 1:1 Direct Vertical-to-Horizontal Scroll Mapping (Lenis already smooths window.scrollY!)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      totalEvents - 1,
      Math.max(0, Math.round(v * (totalEvents - 1)))
    );
    if (idx !== activeIdx) {
      setActiveIdx(idx);
    }
  });

  const scrollDesktopByStep = (dir) => {
    playClick();
    if (!sectionRef.current) return;
    const stepPx = (sectionRef.current.offsetHeight - window.innerHeight) / Math.max(1, totalEvents - 1);
    const targetY = window.scrollY + dir * stepPx;
    if (lenis) {
      lenis.scrollTo(targetY, { duration: 0.75 });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  const scrollMobileByStep = (dir) => {
    playClick();
    if (mobileRowRef.current) {
      mobileRowRef.current.scrollBy({
        left: dir * 305,
        behavior: 'smooth',
      });
    }
  };

  const handleMobileScroll = (e) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;
    const ratio = Math.min(1, Math.max(0, el.scrollLeft / max));
    setMobileProgress(ratio);
    const idx = Math.min(
      totalEvents - 1,
      Math.max(0, Math.round(ratio * (totalEvents - 1)))
    );
    if (idx !== activeIdx) setActiveIdx(idx);
  };

  return (
    <section id="events" ref={sectionRef} className="relative lg:h-[260vh]">
      {/* Desktop Sticky Horizontal Scroll-Driven Exhibition Reel */}
      <div className="hidden lg:flex sticky top-16 h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden py-8">
        <div className="max-w-6xl w-full mx-auto px-6 mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Major events
            </h2>
            <p className="text-sm text-slate-400 mt-1.5">
              Scroll vertically or use the arrows to traverse our horizontal timeline.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-cyan-400 tracking-widest">
              0{activeIdx + 1} / 0{totalEvents}
            </span>

            {/* Synchronized Hairline Progress Track */}
            <div className="w-36 h-[2px] bg-white/10 overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-cyan-400 origin-left"
              />
            </div>

            <button
              aria-label="Previous events"
              onClick={() => scrollDesktopByStep(-1)}
              className="w-9 h-9 rounded-sm border border-white/15 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next events"
              onClick={() => scrollDesktopByStep(1)}
              className="w-9 h-9 rounded-sm border border-white/15 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-colors"
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

        <div
          ref={viewportRef}
          className="w-full overflow-hidden pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
        >
          <motion.div
            ref={trackRef}
            style={{ x: xTranslate }}
            className="flex gap-8 pr-16 py-2 w-max will-change-transform"
          >
            {data?.map((e, idx) => (
              <EventSlide
                key={e.id}
                e={e}
                idx={idx}
                isActive={activeIdx === idx}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile & Tablet Synchronized Horizontal Touch Timeline */}
      <div className="lg:hidden py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-3 mb-4">
          <div>
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Major events
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Swipe horizontally or tap arrows to explore
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-xs text-cyan-400">
              0{activeIdx + 1}/0{totalEvents}
            </span>
            <button
              aria-label="Previous events"
              onClick={() => scrollMobileByStep(-1)}
              className="w-8 h-8 rounded-sm border border-white/15 text-cyan-300 flex items-center justify-center active:bg-cyan-400/20"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next events"
              onClick={() => scrollMobileByStep(1)}
              className="w-8 h-8 rounded-sm border border-white/15 text-cyan-300 flex items-center justify-center active:bg-cyan-400/20"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Synchronized Progress Hairline */}
        <div className="w-full h-[1.5px] bg-white/10 mb-6 overflow-hidden">
          <div
            style={{ transform: `scaleX(${Math.max(0.12, mobileProgress)})` }}
            className="h-full bg-cyan-400 origin-left transition-transform duration-150"
          />
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
          onScroll={handleMobileScroll}
          tabIndex={0}
          aria-label="Events"
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          {data?.map((e, idx) => (
            <div key={e.id} className="snap-start shrink-0">
              <EventSlide e={e} idx={idx} isActive={activeIdx === idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
