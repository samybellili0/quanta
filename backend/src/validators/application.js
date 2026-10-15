const DEPTS = ['events', 'hr', 'external', 'media', 'it', 'finance'];
const TEAMS = ['physics-astronomy', 'math', 'cs-ai', 'life-sciences', 'health', 'chem-materials'];
const LEVELS = ['none', 'beginner', 'intermediate', 'advanced'];
const TOOLS = ['adobe', 'figma', 'canva', 'model3d', 'video', 'afterEffects', 'capcut', 'audio', 'photo', 'programming', 'web', 'mobile', 'osGit', 'dbSec', 'aiMl', 'latex', 'refs', 'dataAnalysis', 'simulation', 'astronomy', 'lab', 'tasks', 'spreadsheets', 'cloud', 'speaking', 'correspondence', 'translation', 'negotiation', 'avEquipment'];
const DECLS = ['declPolitics', 'declProbation', 'declConduct'];

// [min, max, required]
const TEXT = {
  fullName: [2, 100, 1], birth: [3, 150, 1], residence: [3, 150, 1], institution: [2, 150, 1],
  faculty: [2, 150, 1], field: [2, 150, 1], specialty: [0, 150, 0],
  phone: [8, 20, 1], telegram: [2, 60, 1], facebook: [5, 200, 1], whatsapp: [0, 20, 0],
  email: [5, 120, 1], links: [0, 400, 0],
  q1Project: [80, 1200, 1], valueExpectation: [80, 1200, 1], signature: [2, 100, 1],
};
const ENUMS = {
  level: ['L1', 'L2', 'L3', 'M1', 'M2', 'PhD'],
  dept1: DEPTS, dept2: DEPTS, team: TEAMS,
  scenario1: ['A', 'B', 'C', 'D'], scenario2: ['A', 'B', 'C', 'D'], scenario3: ['A', 'B', 'C', 'D'],
  unglamorous: ['A', 'B', 'C'], weeklyHours: ['4-6', '7-10', '12+'],
};
const OPTIONAL = new Set(['team']);

// Sheet column order (A..BF = 58 columns)
export const COLS = ['timestamp', 'fullName', 'birth', 'residence', 'institution', 'faculty', 'field', 'level', 'specialty',
  'phone', 'telegram', 'facebook', 'whatsapp', 'email', 'links', 'dept1', 'dept2', 'team', 'q1Project',
  ...TOOLS, 'scenario1', 'scenario2', 'scenario3', 'valueExpectation', 'unglamorous', 'weeklyHours', ...DECLS, 'signature'];

const clean = (v) => v.replace(/[\u0000-\u001f\u007f<>]/g, ' ').trim().replace(/^[=+\-@]/, "'$&");
const str = (v) => (typeof v === 'string' ? v.trim() : '');
const norm = (s) => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();

export function validateApplication(b = {}) {
  const errors = {}, out = {};
  for (const [k, [min, max, req]] of Object.entries(TEXT)) {
    const raw = str(b[k]); out[k] = '';
    if (!raw) { if (req) errors[k] = 'This field is required.'; continue; }
    if (raw.length > max) errors[k] = `Maximum ${max} characters.`;
    else if (raw.length < min) errors[k] = `Write at least ${min} characters.`;
    out[k] = clean(raw);
  }
  if (out.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(out.email)) errors.email = 'Enter a valid email address.';
  for (const k of ['phone', 'whatsapp']) if (out[k] && !/^\+?[0-9 ()-]{8,20}$/.test(out[k])) errors[k] = 'Enter a valid phone number.';

  for (const [k, list] of Object.entries(ENUMS)) {
    out[k] = str(b[k]);
    if (!out[k] && OPTIONAL.has(k)) continue;
    if (!list.includes(out[k])) { errors[k] = 'Choose one of the options.'; continue; }
    if (out[k] === 'D') {
      const custom = clean(str(b[`${k}_custom`])).slice(0, 500);
      if (custom.length < 10) errors[k] = 'Describe your action (at least 10 characters).';
      else out[k] = `D: ${custom}`;
    }
  }
  if (out.dept1 && out.dept1 === out.dept2) errors.dept2 = 'Choose a different second department.';

  for (const k of TOOLS) {
    out[k] = str(b[k]) || 'none';
    if (!LEVELS.includes(out[k])) errors[k] = 'Choose one of the options.';
  }
  for (const k of DECLS) {
    if (b[k] !== true) errors[k] = 'You must accept this declaration.';
    out[k] = b[k] === true ? 'Accepted' : '';
  }
  if (norm(b.signature) !== norm(b.fullName)) errors.signature = 'Type your full name exactly as entered in section 1.';
  return Object.keys(errors).length ? { errors } : { clean: out };
}
