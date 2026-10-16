import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EVENTS } from '../data/club.js';
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
} from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

const CATEGORIES = ['All', 'Astronomy', 'Competition', 'STEM', 'Community'];

export default function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalEvent, setActiveModalEvent] = useState(null);
  const { playClick, playQuantumChime } = useSoundEffects();

  const filteredEvents =
    selectedCategory === 'All'
      ? EVENTS
      : EVENTS.filter((e) => e.category === selectedCategory);

  const openEventModal = (event) => {
    playQuantumChime(783.99, 0.2);
    setActiveModalEvent(event);
  };

  const closeEventModal = () => {
    playClick();
    setActiveModalEvent(null);
  };

  return (
    <section id="events" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
          <span>MAJOR EVENTS</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
          Pioneering Scientific Milestones
        </h2>

        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          From 24-hour CTF cybersecurity challenges to national astronomy camps at Sidi Fredj.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 pt-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setSelectedCategory(cat);
              }}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-950/80 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat === 'All' ? 'All Events' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid (Compact, Solid) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((evt, idx) => (
          <motion.div
            key={evt.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.35 }}
            className="rounded-2xl overflow-hidden bg-slate-950/70 border border-white/10 hover:border-cyan-500/40 group flex flex-col justify-between transition-all duration-200"
          >
            <div>
              <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                {evt.image ? (
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 to-cyan-950 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-cyan-400/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-950/90 border border-cyan-400/30 text-cyan-300">
                    {evt.category}
                  </span>
                </div>

                <div className="absolute bottom-2 left-2.5 right-2.5 text-[11px] text-slate-300 flex items-center justify-between font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{evt.date}</span>
                  </span>
                  <span className="flex items-center gap-1 truncate max-w-[140px]">
                    <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-2 text-left">
                <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {evt.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {evt.description}
                </p>
              </div>
            </div>

            <div className="p-4 pt-0">
              <button
                onClick={() => openEventModal(evt)}
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/40 text-xs font-bold text-slate-200 hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Event Dossier</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Event Dossier Modal */}
      <AnimatePresence>
        {activeModalEvent && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="quantum-card max-w-xl w-full rounded-2xl border border-cyan-500/40 relative overflow-hidden my-6 text-left shadow-2xl"
            >
              <button
                onClick={closeEventModal}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-slate-950/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {activeModalEvent.image && (
                <div className="relative h-48 sm:h-56 w-full bg-slate-950">
                  <img
                    src={activeModalEvent.image}
                    alt={activeModalEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1830] via-transparent to-black/30" />
                </div>
              )}

              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300">
                    {activeModalEvent.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {activeModalEvent.date} • {activeModalEvent.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-white">
                    {activeModalEvent.title}
                  </h3>
                  {activeModalEvent.titleAr && (
                    <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                      {activeModalEvent.titleAr}
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalEvent.description}
                </p>

                {activeModalEvent.highlights && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeModalEvent.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-white/5 text-[11px] text-slate-300 font-mono"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-end gap-2 border-t border-white/10">
                  <button
                    onClick={closeEventModal}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 hover:text-white"
                  >
                    Close
                  </button>
                  <a
                    href="/join"
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold"
                  >
                    Join Quanta
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
