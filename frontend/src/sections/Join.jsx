import { useState } from 'react';
import { postRegistration } from '../services/api.js';

const FIELDS = [
  ['fullName', 'Full name', 'text', true], ['email', 'Email', 'email', true], ['phone', 'Phone number', 'tel', true],
  ['university', 'University / Faculty', 'text', true], ['fieldOfStudy', 'Field of study', 'text', true], ['year', 'Year of study', 'text', true],
  ['interests', 'Scientific interests', 'text', true], ['github', 'GitHub (optional)', 'url', false], ['linkedin', 'LinkedIn (optional)', 'url', false],
];
const empty = Object.fromEntries([...FIELDS.map((f) => [f[0], '']), ['motivation', '']]);

export default function Join() {
  const [v, setV] = useState(empty), [errs, setErrs] = useState({}), [state, setState] = useState('idle'), [msg, setMsg] = useState('');
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault(); setState('sending'); setErrs({}); setMsg('');
    try { await postRegistration(v); setState('ok'); setV(empty); }
    catch (err) { setState('error'); setErrs(err.errors || {}); setMsg(err.errors ? err.message : 'Unable to send your registration. Check your connection and try again.'); }
  };
  if (state === 'ok') return <section id="join" className="section"><div className="wrap"><div className="card" role="status"><h2>Registration successful.</h2><p>Welcome to Quanta Multidisciplinaire.</p></div></div></section>;
  return (
    <section id="join" className="section"><div className="wrap">
      <h2>Join Quanta</h2>
      <form className="card form" onSubmit={submit} noValidate>
        {FIELDS.map(([k, label, type, req]) => (
          <label key={k}>{label}
            <input type={type} value={v[k]} onChange={set(k)} required={req} aria-invalid={!!errs[k]} aria-describedby={errs[k] ? `${k}-e` : undefined} />
            {errs[k] && <small id={`${k}-e`} className="err">{errs[k]}</small>}
          </label>
        ))}
        <label className="full">Why do you want to join Quanta?
          <textarea rows="4" value={v.motivation} onChange={set('motivation')} required aria-invalid={!!errs.motivation} />
          {errs.motivation && <small className="err">{errs.motivation}</small>}
        </label>
        {msg && <p role="alert" className="err full">{msg}</p>}
        <button className="btn full" disabled={state === 'sending'}>{state === 'sending' ? 'Sending...' : 'Join Quanta'}</button>
      </form>
    </div></section>
  );
}
