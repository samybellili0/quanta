// Source: Quanta Internal Law 2026-2027 (English summary). Keep ids in sync with backend/src/validators/registration.js
export const DEPARTMENTS = [
  { id: 'events', name: 'Events & Scientific Activities', def: 'Plans and runs the club\'s major projects and field events, and supervises the scientific teams. Led by the Event Manager with a Co-Manager. (Art. 20)' },
  { id: 'hr', name: 'HR & Internal Development', def: 'Recruits and trains members, runs the points system, announces the Member of the Month, organizes onboarding bootcamps, academic care against burnout, and the alumni network. (Art. 21)' },
  { id: 'external', name: 'External Relations & Sponsorship', def: 'Coordinates with other clubs, companies and institutions, secures sponsorships and internships, and respects every deadline agreed with sponsors. (Art. 22)' },
  { id: 'media', name: 'Marketing & Media', def: 'Owns the visual identity, graphic design, photo and video production, official social accounts, science popularization and event coverage. (Art. 23)' },
  { id: 'it', name: 'Technical Solutions & IT', def: 'Supports hackathons and technical competitions, builds and maintains the website, membership database and automation tools. (Art. 24)' },
  { id: 'finance', name: 'Logistics & Finance', def: 'Manages budgets and invoices, books halls, keeps the numbered equipment inventory and issues temporary custody receipts. (Art. 25)' },
];
export const TEAMS = [
  ['astro-physics', 'Astronomy & Physics'], ['math', 'Mathematics'], ['ai-cs', 'AI & Computer Science'],
  ['life-sciences', 'Life Sciences & Biology'], ['chem-materials', 'Chemistry & Materials'],
];
export const RULES = [
  ['Probation', 'Every new member spends 4 full months as a trainee member (Art. 5.1).'],
  ['Confirmation', 'To become an Official Member: attend at least 75% of your department\'s activities and workshops, deliver tasks on time, and receive a positive, justified evaluation (Art. 5.2).'],
  ['Certificate', 'Members who are confirmed receive a signed, stamped Official Membership Certificate (Art. 5.3).'],
  ['No politics or unions', 'Party, political or union activity is forbidden in the club. Members of student organizations cannot join. Proven affiliation ends membership immediately (Art. 7).'],
  ['Confidentiality', 'Internal deliberations stay confidential, and nothing is published before official approval (Art. 6.3).'],
  ['Meetings', 'A general meeting every month; meetings last at most 60 minutes and follow a written agenda (Art. 14-15).'],
  ['Written tasks only', 'Tasks come from an official task card published at least 5 days before an event. Failing a signed task is a disciplinary matter (Art. 19).'],
  ['Conduct', 'Respect for everyone. Harassment, bullying, discrimination and insults are serious faults. Sanctions range from a warning to expulsion, with the right of defense (Art. 27-32).'],
  ['Headquarters', 'No smoking or vaping, no card or video games, no overnight stays, no private lessons or commercial activity, and no equipment taken without a signed receipt (Art. 29).'],
  ['Ignorance is no excuse', 'You sign the Pledge of Compliance; not knowing the law never excuses a breach (Art. 8).'],
];
export const PLEDGES = [
  'I have read the Quanta Internal Law and the rules above, and I understand them.',
  'I accept the 4-month probation: 75% attendance, deadlines met, and a positive evaluation (Art. 5).',
  'I am not a member of any political party, union or student organization, and I will not carry out such activity in the club (Art. 7).',
  'I will keep internal deliberations and unpublished documents confidential (Art. 6.3).',
  'I will follow the code of conduct and the headquarters rules, and I accept the disciplinary scale (Art. 27-32).',
  'I will only work from official written task cards, and I will not use ignorance of the law as an excuse (Art. 8, 19).',
  'Everything in this application is true and written by me.',
];
