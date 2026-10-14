const DEPTS = ['events', 'hr', 'external', 'media', 'it', 'finance'];
const TEAMS = ['astro-physics', 'math', 'ai-cs', 'life-sciences', 'chem-materials'];
const PLEDGE_COUNT = 7; // keep in sync with PLEDGES in frontend/src/data/club.js

const TEXT = {
  fullName: { min: 2, max: 100, req: 1 },
  email: { max: 120, req: 1, re: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: 'Enter a valid email address.' },
  phone: { max: 20, req: 1, re: /^\+?[0-9 ()-]{8,20}$/, msg: 'Enter a valid phone number.' },
  university: { max: 120, req: 1 }, fieldOfStudy: { max: 100, req: 1 }, year: { max: 30, req: 1 },
  github: { max: 200 }, linkedin: { max: 200 }, facebook: { max: 200, req: 1},
  skills: { min: 2, max: 300, req: 1 }, interests: { min: 5, max: 300, req: 1 },
  experience: { min: 20, max: 800, req: 1 }, motivation: { min: 100, max: 1200, req: 1 },
  whyDept: { min: 60, max: 800, req: 1 }, scenarioDeadline: { min: 60, max: 800, req: 1 },
  scenarioExams: { min: 60, max: 800, req: 1 }, eventIdea: { min: 60, max: 1000, req: 1 },
};
const ENUMS = { firstDept: DEPTS, secondDept: DEPTS, availability: ['2-4', '5-8', '9+'], orgMember: ['no', 'yes'] };

// Strip control chars/angle brackets and neutralise spreadsheet formula injection.
const clean = (v) => v.replace(/[\u0000-\u001f\u007f<>]/g, ' ').trim().replace(/^[=+\-@]/, "'$&");
const norm = (s) => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
const str = (v) => (typeof v === 'string' ? v.trim() : '');

export function validateRegistration(body = {}) {
  const errors = {}, out = {};
  for (const [k, r] of Object.entries(TEXT)) {
    const raw = str(body[k]); out[k] = '';
    if (!raw) { if (r.req) errors[k] = 'This field is required.'; continue; }
    if (raw.length > r.max) errors[k] = `Maximum ${r.max} characters.`;
    else if (r.min && raw.length < r.min) errors[k] = `Write at least ${r.min} characters.`;
    else if (r.re && !r.re.test(raw)) errors[k] = r.msg;
    out[k] = clean(raw);
  }
  for (const [k, list] of Object.entries(ENUMS)) {
    out[k] = str(body[k]);
    if (!list.includes(out[k])) errors[k] = 'Choose one of the options.';
  }
  out.team = str(body.team);
  if (out.team && !TEAMS.includes(out.team)) errors.team = 'Choose one of the options.';
  if (out.orgMember === 'yes') errors.orgMember = 'Members of political parties, unions or student organizations cannot join (Art. 7).';
  if (out.firstDept && out.firstDept === out.secondDept) errors.secondDept = 'Choose a different second department.';
  if (!Array.isArray(body.pledges) || body.pledges.length !== PLEDGE_COUNT || !body.pledges.every((p) => p === true)) errors.pledges = 'You must accept every commitment.';
  out.signature = clean(str(body.signature));
  if (norm(body.signature) !== norm(body.fullName)) errors.signature = 'Type your full name exactly as entered in step 1.';
  return Object.keys(errors).length ? { errors } : { clean: out };
}
