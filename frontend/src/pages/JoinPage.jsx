import { DEPARTMENTS, RULES } from '../data/club.js';

const FORM_URL = 'https://quanta-registrations.web.app/';

export default function JoinPage() {
  return (
    <section className="section page"><div className="wrap">
      <h1 className="h1s">Join Quanta</h1>
      <p className="intro">Joining is selective. Read the rules and the departments first, then complete the application. New members start as trainees for 4 months before they can become Official Members.</p>

      <h2>Rules and conditions</h2>
      <div className="grid three">{RULES.map(([t, d]) => <article key={t} className="card"><h3>{t}</h3><p>{d}</p></article>)}</div>

      <h2 className="gap">Our six departments</h2>
      <div className="grid three">{DEPARTMENTS.map((d) => <article key={d.id} className="card"><h3>{d.name}</h3><p>{d.def}</p></article>)}</div>

      <h2 className="gap">Application</h2>
      <div className="card">
        <p>Ready to apply? The application takes about 15 minutes. Read the rules above first.</p>
        <a className="btn" href={FORM_URL} target="_blank" rel="noopener noreferrer">Open the application form</a>
      </div>
    </div></section>
  );
}
