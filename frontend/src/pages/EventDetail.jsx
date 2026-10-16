import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getEvent } from '../services/api.js';
import {
  Calendar,
  MapPin,
  Clock,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Sparkles,
  Rocket,
  ExternalLink,
} from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { playClick, playQuantumChime } = useSoundEffects();

  useEffect(() => {
    window.scrollTo(0, 0);
    let mounted = true;
    getEvent(id).then((data) => {
      if (mounted) {
        setEvent(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 pt-24 text-slate-400">
        <Sparkles className="w-8 h-8 text-cyan-400 animate-spin" />
        <p className="font-mono text-xs uppercase tracking-widest">
          Decrypting Event Dossier...
        </p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 pt-24 text-center px-4">
        <h2 className="font-display font-black text-2xl text-white">Event Not Found</h2>
        <p className="text-sm text-slate-400">
          The requested event record does not exist or has been archived.
        </p>
        <Link
          to="/#events"
          className="px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-bold text-cyan-300"
        >
          Return to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 text-left">
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/#events"
          onClick={() => playClick()}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO MAJOR EVENTS</span>
        </Link>

        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
          {event.category}
        </span>
      </div>

      {/* Main Dossier Card */}
      <article className="quantum-card rounded-3xl overflow-hidden border border-cyan-500/30 relative">
        <div className="quantum-laser-line" />

        {/* Hero Photo Banner */}
        {event.image && (
          <div className="relative h-72 sm:h-96 w-full bg-slate-950 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1830] via-transparent to-black/30" />
          </div>
        )}

        <div className="p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
              EVENT DOSSIER • {event.id.toUpperCase()}
            </span>
            <h1 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
              {event.title}
            </h1>
            {event.titleAr && (
              <p className="text-sm sm:text-base font-mono text-cyan-400/90">{event.titleAr}</p>
            )}
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">
                DATE
              </span>
              <p className="font-bold text-white flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{event.date}</span>
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">
                TIMING
              </span>
              <p className="font-bold text-white flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{event.time || 'Completed'}</span>
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-1 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">
                VENUE
              </span>
              <p className="font-bold text-white truncate flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{event.location}</span>
              </p>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/10 pt-6">
            <h3 className="font-display font-black text-lg text-white">Event Summary & Impact</h3>
            <p>{event.description}</p>
          </div>

          {/* Highlights */}
          {event.highlights && (
            <div className="space-y-3 pt-2">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Key Accomplishments & Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {event.highlights.map((h) => (
                  <div
                    key={h}
                    className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-xs text-slate-300 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Call to Action */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/#events"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-bold text-slate-300 hover:text-white"
            >
              Browse Other Events
            </Link>

            <a
              href="https://quanta-registrations.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-1.5"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>Join Quanta Club</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
