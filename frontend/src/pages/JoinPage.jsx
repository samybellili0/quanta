import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postRegistration } from '../services/api.js';
import { DEPARTMENTS, TEAMS, RULES, PLEDGES } from '../data/club.js';

const deptOpts = DEPARTMENTS.map((d) => [d.id, d.name]);
// [name, label, type, required, min, options]
const STEPS = [
  ['About you', [
    ['fullName', 'Full name', 'text', 1], ['email', 'Email', 'email', 1], ['phone', 'Phone number', 'tel', 1],
    ['university', 'Faculty / Department', 'text', 1], ['fieldOfStudy', 'Field of study', 'text', 1], ['year', 'Year of study', 'text', 1],
    ['github', 'GitHub (optional)', 'url', 0], ['linkedin', 'LinkedIn (optional)', 'url', 0],
    ['facebook', 'Facebook link', 'url', 1],
    ['orgMember', 'Are you a member of a political party, union or another student organization?', 'select', 1, 0, [['no', 'No'], ['yes', 'Yes']]],
  ]],
  ['Departments & skills', [
    ['firstDept', 'First-choice department', 'select', 1, 0, deptOpts], ['secondDept', 'Second-choice department', 'select', 1, 0, deptOpts],
    ['team', 'Scientific team (optional, mainly for Events)', 'select', 0, 0, TEAMS],
    ['availability', 'Hours per week you can give the club', 'select', 1, 0, [['2-4', '2 to 4 hours'], ['5-8', '5 to 8 hours'], ['9+', '9 hours or more']]],
    ['skills', 'Your skills and tools', 'text', 1, 2], ['interests', 'Scientific interests', 'text', 1, 5],
    ['experience', 'Past projects, clubs or competitions (what you did and what you delivered)', 'textarea', 1, 20],
  ]],
  ['Your answers', [
    ['motivation', 'Why do you want to join Quanta? (min. 100 characters)', 'textarea', 1, 100],
    ['whyDept', 'Why your first-choice department, and what will you bring to it?', 'textarea', 1, 60],
    ['scenarioDeadline', 'You signed a task due Friday and you cannot finish it. What do you do, and when?', 'textarea', 1, 60],
    ['scenarioExams', 'Exams are coming and the club needs you the same week. How do you handle it?', 'textarea', 1, 60],
    ['eventIdea', 'Propose one science event for Quanta: goal, audience, format and what you would need.', 'textarea', 1, 60],
  ]],
];
const PLEDGE_STEP = STEPS.length;
const empty = { ...Object.fromEntries(STEPS.flatMap(([, f]) => f.map((x) => [x[0], '']))), pledges: PLEDGES.map(() => false), signature: '' };
const stepOf = (k) => (k === 'pledges' || k === 'signature' ? PLEDGE_STEP : STEPS.findIndex(([, f]) => f.some((x) => x[0] === k)));

export default function JoinPage() {
  const [v, setV] = useState(empty), [errs, setErrs] = useState({}), [step, setStep] = useState(0), [state, setState] = useState('idle'), [msg, setMsg] = useState('');
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const fields = step < PLEDGE_STEP ? STEPS[step][1] : [];

  const check = () => {
    const e = {};
    if (step < PLEDGE_STEP) fields.forEach(([k, , , req, min = 0]) => {
      const s = v[k].trim();
      if (req && !s) e[k] = 'This field is required.'; else if (s && s.length < min) e[k] = `Write at least ${min} characters.`;
    });
    else {
      if (!v.pledges.every(Boolean)) e.pledges = 'You must accept every commitment.';
      if (!v.signature.trim()) e.signature = 'Type your full name to sign.';
    }
    if (v.orgMember === 'yes') e.orgMember = 'Members of political parties, unions or student organizations cannot join (Art. 7).';
    if (v.firstDept && v.firstDept === v.secondDept) e.secondDept = 'Choose a different second department.';
    setErrs(e); return !Object.keys(e).length;
  };
  const submit = async (ev) => {
    ev.preventDefault();
    if (!check()) return;
    if (step < PLEDGE_STEP) { setStep(step + 1); scrollTo(0, document.getElementById('apply').offsetTop - 80); return; }
    setState('sending'); setMsg('');
    try { await postRegistration(v); setState('ok'); }
    catch (err) {
      setState('error'); setErrs(err.errors || {});
      const first = Object.keys(err.errors || {})[0];
      if (first) setStep(stepOf(first));
      setMsg(err.errors ? err.message : 'Unable to send your application. Check your connection and try again.');
    }
  };
  const Err = ({ k }) => (errs[k] ? <small id={`${k}-e`} className="err">{errs[k]}</small> : null);

  if (state === 'ok') return <section className="section page"><div className="wrap"><div className="card" role="status"><h2>Registration successful.</h2><p>Welcome to Quanta Multidisciplinaire. Our HR department will review your application and contact you about the next assessment step.</p><Link className="btn" to="/">Back to home</Link></div></div></section>;

  return (
    <section className="section page"><div className="wrap">
      <h1 className="h1s">Join Quanta</h1>
      <p className="intro">Joining is selective. Read the rules and the departments first, then complete the application. New members start as trainees for 4 months before they can become Official Members.</p>

      <h2>Rules and conditions</h2>
      <div className="grid three">{RULES.map(([t, d]) => <article key={t} className="card"><h3>{t}</h3><p>{d}</p></article>)}</div>

      <h2 className="gap">Our six departments</h2>
      <div className="grid three">{DEPARTMENTS.map((d) => <article key={d.id} className="card"><h3>{d.name}</h3><p>{d.def}</p></article>)}</div>

      <h2 id="apply" className="gap">Application</h2>
      <ol className="steps" aria-label="Progress">{[...STEPS.map((s) => s[0]), 'Rules & pledge'].map((n, i) => <li key={n} aria-current={i === step ? 'step' : undefined} className={i < step ? 'done' : ''}>{n}</li>)}</ol>

      <form className="card form" onSubmit={submit} noValidate>
        {fields.map(([k, label, type, req, , opts]) => (
          <label key={k} className={type === 'textarea' || type === 'select' && k === 'orgMember' ? 'full' : ''}>{label}
            {type === 'textarea' ? <textarea rows="4" value={v[k]} onChange={set(k)} required={!!req} aria-invalid={!!errs[k]} />
              : type === 'select' ? <select value={v[k]} onChange={set(k)} aria-invalid={!!errs[k]}><option value="">Select...</option>{opts.map(([id, n]) => <option key={id} value={id}>{n}</option>)}</select>
              : <input type={type} value={v[k]} onChange={set(k)} required={!!req} aria-invalid={!!errs[k]} aria-describedby={errs[k] ? `${k}-e` : undefined} />}
            <Err k={k} />
          </label>
        ))}
        {step === 1 && [v.firstDept, v.secondDept].filter(Boolean).map((id, i) => {
          const d = DEPARTMENTS.find((x) => x.id === id);
          return d && <p key={i} className="full dept-note"><b>{i ? 'Second choice' : 'First choice'}: {d.name}.</b> {d.def}</p>;
        })}
        {step === PLEDGE_STEP && <>
          <fieldset className="full checks"><legend>Pledge of Compliance (Art. 8)</legend>
            {PLEDGES.map((p, i) => <label key={i} className="check"><input type="checkbox" checked={v.pledges[i]} onChange={() => setV({ ...v, pledges: v.pledges.map((x, j) => (j === i ? !x : x)) })} /> <span>{p}</span></label>)}
            <Err k="pledges" />
          </fieldset>
          <label className="full">Electronic signature: type your full name exactly as entered in step 1
            <input value={v.signature} onChange={set('signature')} aria-invalid={!!errs.signature} /><Err k="signature" />
          </label>
        </>}
        {msg && <p role="alert" className="err full">{msg}</p>}
        <div className="full nav-btns">
          {step > 0 && <button type="button" className="btn ghost" onClick={() => { setErrs({}); setStep(step - 1); }}>Back</button>}
          <button className="btn" disabled={state === 'sending'}>{step < PLEDGE_STEP ? 'Next' : state === 'sending' ? 'Sending...' : 'Submit application'}</button>
        </div>
      </form>
    </div></section>
  );
}
