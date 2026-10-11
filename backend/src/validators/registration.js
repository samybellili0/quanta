const RULES = {
  fullName: { max: 100, min: 2, req: true },
  email: { max: 120, req: true, re: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: 'Enter a valid email address.' },
  phone: { max: 20, req: true, re: /^\+?[0-9 ()-]{8,20}$/, msg: 'Enter a valid phone number.' },
  university: { max: 120, req: true },
  fieldOfStudy: { max: 100, req: true },
  year: { max: 30, req: true },
  interests: { max: 300, req: true },
  motivation: { max: 1000, min: 10, req: true },
  github: { max: 200 },
  linkedin: { max: 200 },
};
// Strip control chars/angle brackets and neutralise spreadsheet formula injection.
const clean = (v) => v.replace(/[\u0000-\u001f\u007f<>]/g, ' ').trim().replace(/^[=+\-@]/, "'$&");

export function validateRegistration(body = {}) {
  const errors = {}, out = {};
  for (const [k, r] of Object.entries(RULES)) {
    const raw = typeof body[k] === 'string' ? body[k].trim() : '';
    out[k] = '';
    if (!raw) { if (r.req) errors[k] = 'This field is required.'; continue; }
    if (raw.length > r.max) errors[k] = `Maximum ${r.max} characters.`;
    else if (r.min && raw.length < r.min) errors[k] = `Minimum ${r.min} characters.`;
    else if (r.re && !r.re.test(raw)) errors[k] = r.msg;
    out[k] = clean(raw);
  }
  return Object.keys(errors).length ? { errors } : { clean: out };
}
