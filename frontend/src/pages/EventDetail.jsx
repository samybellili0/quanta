import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getEvent } from '../services/api.js';
import useFetch from '../hooks/useFetch.js';
import { EventImage, fmtDate } from '../sections/EventsSection.jsx';
import { ArrowLeft } from 'lucide-react';

export default function EventDetail() {
  const { id } = useParams();
  const { data: e, loading, error } = useFetch(() => getEvent(id), [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section className="min-h-[80vh] pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <Link
        to="/#events"
        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-white mb-8 font-medium transition-colors hairline-sweep pb-1"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to events</span>
      </Link>

      {loading && (
        <p role="status" className="text-slate-400">
          Loading event...
        </p>
      )}
      {error && (
        <p role="alert" className="text-red-400">
          Unable to load this event. Please try again later.
        </p>
      )}

      {e && (
        <article className="text-left border-t border-white/15 pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              {e.category}
            </span>
            <p className="text-xs sm:text-sm font-mono text-slate-400">
              {fmtDate(e.date)} {e.time ? `· ${e.time}` : ''} · {e.location}
            </p>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-8">
            {e.title}
          </h1>

          <div className="h-64 sm:h-96 w-full overflow-hidden mb-8">
            <EventImage src={e.image} alt={e.title} category={e.category} />
          </div>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed border-b border-white/10 pb-8">
            {e.description}
          </p>

          {e.registrationUrl && (
            <div className="pt-6">
              <a
                href={e.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#1d4ed8] hover:bg-blue-600 text-white border border-cyan-400 font-semibold text-sm transition-all"
              >
                <span>Register</span>
                <span>↗</span>
              </a>
            </div>
          )}
        </article>
      )}
    </section>
  );
}
