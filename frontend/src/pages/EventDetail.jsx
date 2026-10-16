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
    <section className="min-h-[80vh] pt-24 pb-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <Link
        to="/#events"
        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 mb-6 font-medium transition-colors"
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
        <article className="quantum-card rounded-lg border border-sky-400/25 overflow-hidden text-left">
          <div className="h-64 sm:h-80 w-full overflow-hidden">
            <EventImage src={e.image} alt={e.title} category={e.category} />
          </div>

          <div className="p-6 sm:p-8 space-y-4">
            <span className="inline-block px-3 py-0.5 rounded-md border border-cyan-400 text-cyan-300 text-xs font-medium">
              {e.category}
            </span>

            <h1 className="font-display font-bold text-2xl sm:text-3xl text-white">
              {e.title}
            </h1>

            <p className="text-sm text-slate-400">
              {fmtDate(e.date)} {e.time ? `· ${e.time}` : ''} · {e.location}
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {e.description}
            </p>

            {e.registrationUrl && (
              <div className="pt-2">
                <a
                  href={e.registrationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-6 py-2.5 rounded-lg bg-[#1d4ed8] hover:bg-blue-600 text-white border border-cyan-400 font-semibold text-sm transition-all"
                >
                  Register
                </a>
              </div>
            )}
          </div>
        </article>
      )}
    </section>
  );
}
