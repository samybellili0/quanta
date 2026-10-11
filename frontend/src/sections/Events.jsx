import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getEvents } from '../services/api.js';
import useFetch from '../hooks/useFetch.js';
import { useRef } from 'react';

export const fmtDate = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export function EventImage({ src, alt = '' }) {
  return <div className="eimg"><img src={src} alt={alt} loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>;
}

export default function Events() {
  const { data, loading, error } = useFetch(getEvents);
  const row = useRef(null);
  const go = (d) => row.current.scrollBy({ left: d * 340, behavior: 'smooth' });
  return (
    <section id="events" className="section"><div className="wrap">
      <h2>Major events</h2>
      {loading && <p role="status">Loading events...</p>}
      {error && <p role="alert">Unable to load events.<br />Please try again later.</p>}
      <div className="hscroll" ref={row} tabIndex={0} aria-label="Events">
        {data?.map((e, i) => (
          <motion.article key={e.id} className="card hover event" initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
            <EventImage src={e.image} alt={e.title} />
            <div className="ebody">
              <span className="chip">{e.category}</span>
              <h3>{e.title}</h3>
              <p className="muted">{fmtDate(e.date)}<br />{e.location}</p>
              <p>{e.description}</p>
              <Link className="btn ghost" to={`/events/${e.id}`}>Learn More</Link>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="arrows">
        <button className="btn ghost" aria-label="Previous events" onClick={() => go(-1)}>‹</button>
        <button className="btn ghost" aria-label="Next events" onClick={() => go(1)}>›</button>
      </div>
    </div></section>
  );
}