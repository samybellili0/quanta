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
  ExternalLink,
  Tag,
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
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
          <span>MAJOR CLUB EVENTS</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Pioneering Scientific Milestones
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          From 24-hour non-stop cybersecurity CTFs to national astronomical observatories at Sidi Fredj,
          discover our flagship annual initiatives.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat === 'All' ? 'All Events' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((evt, idx) => (
          <motion.div
            key={evt.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.45 }}
            className="quantum-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 group flex flex-col justify-between transition-all duration-300"
          >
            {/* Event Photo Header */}
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
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
                    <Sparkles className="w-8 h-8 text-cyan-400/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d1c] via-[#080d1c]/40 to-transparent" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 text-cyan-300">
                    {evt.category}
                  </span>
                  {evt.featured && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-amber-500/20 border border-amber-400/40 text-amber-300">
                      ★ FEATURED
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 flex items-center justify-between font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{evt.date}</span>
                  </span>
                  <span className="flex items-center gap-1 truncate max-w-[160px]">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </span>
                </div>
              </div>

              {/* Event Body */}
              <div className="p-6 space-y-3 text-left">
                <h3 className="font-display font-black text-lg text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {evt.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80">{evt.titleAr}</p>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {evt.description}
                </p>

                {evt.highlights && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {evt.highlights.slice(0, 3).map((h) => (
                      <span
                        key={h}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-white/5 text-[10px] font-mono text-slate-300"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Card Footer Button */}
            <div className="p-6 pt-0">
              <button
                onClick={() => openEventModal(evt)}
                className="w-full py-2.5 rounded-xl bg-slate-900/90 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/40 text-xs font-bold text-slate-200 hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Read Event Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Event Dossier Modal */}
      <AnimatePresence>
        {activeModalEvent && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.24 }}
              className="quantum-card max-w-2xl w-full rounded-3xl border border-cyan-500/40 relative overflow-hidden my-8 text-left shadow-[0_0_50px_rgba(6,182,212,0.25)]"
            >
              <div className="quantum-laser-line" />

              <button
                onClick={closeEventModal}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Image */}
              {activeModalEvent.image && (
                <div className="relative h-64 sm:h-72 w-full bg-slate-950">
                  <img
                    src={activeModalEvent.image}
                    alt={activeModalEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1830] via-transparent to-black/40" />
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                    {activeModalEvent.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeModalEvent.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                    {activeModalEvent.title}
                  </h3>
                  <p className="text-sm font-mono text-cyan-400/90 mt-1">
                    {activeModalEvent.titleAr}
                  </p>
                </div>

                {/* Event Metadata Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">DATE</span>
                    <p className="font-bold text-white flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{activeModalEvent.date}</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">TIME</span>
                    <p className="font-bold text-white flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{activeModalEvent.time || 'Scheduled'}</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-1 col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">LOCATION</span>
                    <p className="font-bold text-white truncate flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{activeModalEvent.location}</span>
                    </p>
                  </div>
                </div>

                {/* Full Description */}
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                  <p>{activeModalEvent.description}</p>
                </div>

                {/* Highlights */}
                {activeModalEvent.highlights && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                      KEY DELIVERABLES & HIGHLIGHTS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeModalEvent.highlights.map((h) => (
                        <div
                          key={h}
                          className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-end gap-3 border-t border-white/10">
                  <button
                    onClick={closeEventModal}
                    className="px-5 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 hover:text-white"
                  >
                    Close Dossier
                  </button>
                  <a
                    href="/join"
                    className="btn-shimmer px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  >
                    Join Quanta for Next Events
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
