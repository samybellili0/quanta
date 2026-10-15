import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postApplication } from '../services/api.js';
import { DEPARTMENTS, RULES } from '../data/club.js';
import { SECTIONS } from '../data/applyForm.js';

const label = (f) => (<>{f.en}{f.req ? ' *' : ''}<span className="ar" dir="rtl">{f.ar}</span></>);

export default function JoinPage() {
  const [step, setStep] = useState(0);
  const [v, setV] = useState({});
  const [errs, setErrs] = useState({});
  const [state, setState] = useState('idle');
  const [msg, setMsg] = useState('');

  const set = (k, val) => setV((p) => ({ ...p, [k]: val }));
  const sec = SECTIONS[step];
  const last = step === SECTIONS.length - 1;
  const toForm = () => document.getElementById('apply')?.scrollIntoView();

  const missing = () => {
    const e = {};
    sec.fields.forEach((f) => {
      if (!f.req) return;
      if (f.t === 'check' ? v[f.k] !== true : !String(v[f.k] || '').trim()) e[f.k] = 'This field is required.';
    });
    if (v.dept1 && v.dept1 === v.dept2) e.dept2 = 'Choose a different second department.';
    if (last && String(v.signature || '').trim().toLowerCase() !== String(v.fullName || '').trim().toLowerCase()) e.signature = 'Type your full name exactly as entered in section 1.';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = missing();
    setErrs(e);
    if (Object.keys(e).length) return;
    if (!last) { setStep(step + 1); toForm(); return; }
    setState('sending'); setMsg('');
    try { await postApplication(v); setState('ok'); window.scrollTo(0, 0); }
    catch (err) {
      const er = err.errors || {};
      setErrs(er); setState('error');
      const i = SECTIONS.findIndex((s) => s.fields.some((f) => er[f.k]));
      if (i >= 0) setStep(i);
      setMsg(err.errors ? err.message : 'Unable to send your application. Check your connection and try again.');
    }
  };

  if (state === 'ok') return (
    <section className="section page"><div className="wrap"><div className="card" role="status">
      <h2>Registration successful.</h2>
      <p>Welcome to Quanta Multidisciplinaire. Our HR department will review your application and contact you about the next assessment step.</p>
      <Link className="btn" to="/">Back to home</Link>
    </div></div></section>
  );

  return (
    <section className="section page"><div className="wrap">
      <h1 className="h1s">Join Quanta</h1>
      <p className="intro">Joining is selective. Read the rules and the departments first, then complete the application. New members start as trainees for 4 months before they can become Official Members.</p>

      <h2>Rules and conditions</h2>
      <div className="grid three">{RULES.map(([t, d]) => <article key={t} className="card"><h3>{t}</h3><p>{d}</p></article>)}</div>

      <h2 className="gap">Our six departments</h2>
      <div className="grid three">{DEPARTMENTS.map((d) => <article key={d.id} className="card"><h3>{d.name}</h3><p>{d.def}</p></article>)}</div>

      <h2 id="apply" className="gap">Application</h2>
      <ol className="steps" aria-label="Progress">
        {SECTIONS.map((s, i) => (
          <li key={s.title} aria-current={i === step ? 'step' : undefined} className={i < step ? 'done' : ''}>{i + 1}. {s.title}</li>
        ))}
      </ol>

      <form className="card" onSubmit={submit} noValidate>
        {sec.fields.map((f) => (
          <div className="field" key={f.k}>
            {f.t === 'check' ? (
              <label className="check">
                <input type="checkbox" checked={v[f.k] === true} onChange={(e) => set(f.k, e.target.checked)} />
                <span>{label(f)}</span>
              </label>
            ) : (
              <>
                <label htmlFor={f.k}>{label(f)}</label>
                {f.hint && <p className="muted">{f.hint}</p>}
                {f.t === 'text' && <input id={f.k} type={f.type || 'text'} value={v[f.k] || ''} onChange={(e) => set(f.k, e.target.value)} aria-invalid={!!errs[f.k]} />}
                {f.t === 'long' && <textarea id={f.k} rows={5} value={v[f.k] || ''} onChange={(e) => set(f.k, e.target.value)} aria-invalid={!!errs[f.k]} />}
                {(f.t === 'select' || f.t === 'level') && (
                  <select id={f.k} value={v[f.k] || ''} onChange={(e) => set(f.k, e.target.value)} aria-invalid={!!errs[f.k]}>
                    <option value="">{f.t === 'level' ? 'Select level (optional)' : 'Choose...'}</option>
                    {f.opts.map(([val, text]) => <option key={val} value={val}>{text}</option>)}
                  </select>
                )}
                {f.t === 'choice' && (
                  <div className="opts">
                    {f.opts.map(([val, text]) => (
                      <label className="check" key={val}>
                        <input type="radio" name={f.k} checked={v[f.k] === val} onChange={() => set(f.k, val)} />
                        <span>{text}</span>
                      </label>
                    ))}
                    {v[f.k] === 'D' && <textarea rows={3} placeholder="Describe your action" value={v[`${f.k}_custom`] || ''} onChange={(e) => set(`${f.k}_custom`, e.target.value)} />}
                  </div>
                )}
                {(f.k === 'dept1' || f.k === 'dept2') && (() => {
                  const d = DEPARTMENTS.find((x) => x.id === v[f.k]);
                  return d ? <p className="dept-note"><b>{d.name}.</b> {d.def}</p> : null;
                })()}
              </>
            )}
            {errs[f.k] && <p className="err" role="alert">{errs[f.k]}</p>}
          </div>
        ))}

        {msg && <p role="alert" className="err">{msg}</p>}
        <div className="nav-btns">
          {step > 0 && <button type="button" className="btn ghost" onClick={() => { setErrs({}); setStep(step - 1); toForm(); }}>Back</button>}
          <button className="btn" disabled={state === 'sending'}>
            {!last ? 'Next' : state === 'sending' ? 'Sending...' : 'Submit application'}
          </button>
        </div>
      </form>
    </div></section>
  );
}
