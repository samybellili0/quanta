import { Link, useParams } from 'react-router-dom';
import { getEvent } from '../services/api.js';
import useFetch from '../hooks/useFetch.js';
import { EventImage, fmtDate } from '../sections/Events.jsx';

export default function EventDetail() {
  const { id } = useParams();
  const { data: e, loading, error } = useFetch(() => getEvent(id), [id]);
  return (
    <section className="section page"><div className="wrap">
      <Link to="/events">Back to events</Link>
      {loading && <p role="status">Loading event...</p>}
      {error && <p role="alert">Unable to load this event. Please try again later.</p>}
      {e && (
        <article className="card">
          <EventImage src={e.image} alt={e.title} />
          <div className="ebody">
            <span className="chip">{e.category}</span>
            <h1 className="h1s">{e.title}</h1>
            <p className="muted">{fmtDate(e.date)} · {e.time} · {e.location}</p>
            <p>{e.description}</p>
            {e.registrationUrl && <a className="btn" href={e.registrationUrl} target="_blank" rel="noreferrer">Register</a>}
          </div>
        </article>
      )}
    </div></section>
  );
}
