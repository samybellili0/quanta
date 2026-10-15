const LV = [['none', 'None / not used'], ['beginner', 'Beginner'], ['intermediate', 'Intermediate'], ['advanced', 'Advanced']];
const DEPTS = [['events', 'Events & Scientific Activities'], ['hr', 'Human Resources & Development'], ['external', 'External Relations & Sponsorship'], ['media', 'Media & Digital Marketing'], ['it', 'Information Technology & Digitalization'], ['finance', 'Finance, Logistics & Equipment']];
const TEAMS = [['physics-astronomy', 'Physics & Astronomy'], ['math', 'Mathematics & Modeling'], ['cs-ai', 'Computer Science & AI'], ['life-sciences', 'Natural & Life Sciences'], ['health', 'Health Sciences'], ['chem-materials', 'Chemistry & Materials Science']];
const LEVEL = [['L1', 'Bachelor 1 (L1) - Common core'], ['L2', 'Bachelor 2 (L2)'], ['L3', 'Bachelor 3 (L3)'], ['M1', 'Master 1 (M1)'], ['M2', 'Master 2 (M2)'], ['PhD', 'Postgraduate / PhD / Medical residency']];
const T = (k, en, ar) => ({ k, en, ar, t: 'level', opts: LV });
const C = (k, en, ar, hint, opts) => ({ k, en, ar, hint, t: 'choice', opts, req: 1 });
const X = (k, en, ar, extra = {}) => ({ k, en, ar, t: 'text', ...extra });
const L = (k, en, ar, hint, extra = {}) => ({ k, en, ar, hint, t: 'long', ...extra });
const D = (k, en, ar) => ({ k, en, ar, t: 'check', req: 1 });

export const SECTIONS = [
  { title: 'Personal & academic identification', fields: [
    X('fullName', 'Full Name', 'الاسم واللقب', { req: 1 }),
    X('birth', 'Date and Place of Birth', 'تاريخ ومكان الازدياد', { req: 1 }),
    X('residence', 'Current Residence & State (mention campus dorm if any)', 'مكان الإقامة والولاية', { req: 1 }),
    X('institution', 'Academic Institution', 'المؤسسة الجامعية', { req: 1 }),
    X('faculty', 'Faculty / Institute / Department', 'الكلية أو المعهد والقسم', { req: 1 }),
    X('field', 'Field of Study & Specialty', 'الشعبة والتخصص الأكاديمي', { req: 1 }),
    { k: 'level', en: 'Academic Level (2026/2027)', ar: 'الطور والسنة الجامعية', t: 'select', opts: LEVEL, req: 1 },
    X('specialty', 'Specialty Detail (L2 and above)', 'تفاصيل التخصص'),
    X('phone', 'Primary Mobile Phone', 'رقم الهاتف المحمول الأساسي', { req: 1, type: 'tel' }),
    X('telegram', 'Telegram Username', 'حساب تلغرام', { req: 1 }),
    X('facebook', 'Facebook / Messenger Link', 'رابط فيسبوك ومسنجر', { req: 1, type: 'url' }),
    X('whatsapp', 'WhatsApp Number (if different)', 'رقم الواتساب', { type: 'tel' }),
    X('email', 'Primary Email Address', 'البريد الإلكتروني', { req: 1, type: 'email' }),
    X('links', 'Portfolio & Professional Links (LinkedIn, GitHub, Behance...)', 'روابط الأعمال والشبكات المهنية'),
  ] },
  { title: 'Departments & scientific team', fields: [
    { k: 'dept1', en: 'First Choice Department', ar: 'الرغبة الأولى - القسم التنفيذي', t: 'select', opts: DEPTS, req: 1 },
    { k: 'dept2', en: 'Second Choice Department', ar: 'الرغبة الثانية - القسم التنفيذي', t: 'select', opts: DEPTS, req: 1 },
    { k: 'team', en: 'Scientific Team Preference (optional)', ar: 'الفريق العلمي التخصصي', t: 'select', opts: TEAMS },
  ] },
  { title: 'Practical skills & tools', fields: [
    L('q1Project', 'Q1: Self-Execution & Curiosity', 'إجابة سؤال الإنجاز والشغف التطبيقي',
      'Track A: describe a real project you carried out in the past 12 months, the biggest obstacle and how you solved it. Track B (no project yet): what topic made you learn on your own, or what problem did you try to solve creatively? (4-6 lines, min. 80 characters)', { req: 1 }),
    T('adobe', 'Adobe Suite (Photoshop, Illustrator, InDesign)', 'مستوى أدوات أدوبي'),
    T('figma', 'Figma / Adobe XD', 'مستوى تصميم الواجهات'),
    T('canva', 'Canva Pro', 'مستوى كانفا'),
    T('model3d', '3D Modeling (Blender, Cinema 4D, 3ds Max)', 'مستوى التصميم ثلاثي الأبعاد'),
    T('video', 'Video Editing (Premiere Pro, DaVinci Resolve)', 'مستوى المونتاج'),
    T('afterEffects', 'After Effects (motion graphics)', 'مستوى الموشن جرافيك'),
    T('capcut', 'CapCut Pro (short videos)', 'مستوى الفيديوهات القصيرة'),
    T('audio', 'Audio Engineering (Audacity, Audition)', 'مستوى هندسة الصوت'),
    T('photo', 'Photography', 'مستوى التصوير'),
    T('programming', 'Programming (Python, C/C++, Java)', 'مستوى لغات البرمجة'),
    T('web', 'Web Development', 'مستوى تطوير الويب'),
    T('mobile', 'Mobile App Development (Flutter, React Native)', 'مستوى تطبيقات الهاتف'),
    T('osGit', 'Linux, Bash, Git & GitHub', 'مستوى لينكس وغيت هاب'),
    T('dbSec', 'Databases, Cloud & Security', 'مستوى قواعد البيانات والأمن'),
    T('aiMl', 'AI & Machine Learning', 'مستوى الذكاء الاصطناعي'),
    T('latex', 'Academic Writing (LaTeX, Overleaf)', 'مستوى التحرير الأكاديمي'),
    T('refs', 'Reference Management (Zotero, Mendeley)', 'مستوى إدارة المراجع'),
    T('dataAnalysis', 'Scientific Data Analysis (OriginLab, GraphPad)', 'مستوى تحليل البيانات العلمي'),
    T('simulation', 'Scientific Simulation (MATLAB, Mathematica, ChemDraw)', 'مستوى برامج المحاكاة العلمية'),
    T('astronomy', 'Astronomy Software (Stellarium)', 'مستوى برمجيات الفلك'),
    T('lab', 'Laboratory Techniques', 'مستوى التقنيات المخبرية'),
    T('tasks', 'Task Management (Notion, Trello, Jira)', 'مستوى إدارة المهام'),
    T('spreadsheets', 'Advanced Spreadsheets (Excel / Sheets)', 'مستوى جداول البيانات'),
    T('cloud', 'Cloud Workspace (Google Workspace, Microsoft 365)', 'مستوى أدوات العمل السحابي'),
    T('speaking', 'Public Speaking & Moderation', 'مستوى الإلقاء والتقديم'),
    T('correspondence', 'Formal Correspondence (Arabic & French)', 'مستوى المراسلات الرسمية'),
    T('translation', 'Scientific Translation (English)', 'مستوى الترجمة العلمية'),
    T('negotiation', 'Negotiation & Sponsorship', 'مستوى التفاوض والرعاية'),
    T('avEquipment', 'Audio/Visual Equipment (sound, lights, projectors)', 'مستوى إدارة عتاد الصوت والإضاءة'),
  ] },
  { title: 'Situational judgment', fields: [
    C('scenario1', 'Scenario 1: Last-Minute Crisis', 'استجابة سيناريو أزمة اللحظة الأخيرة',
      'It is 10:30 PM the night before a major event. The printed badges were not delivered and your department head is unreachable. What do you do?',
      [['A', 'Wait until morning to speak with the club president.'], ['B', 'Contact the deputy manager and logistics head, find an emergency print service, and update the emergency group.'], ['C', 'Ask in the general members group if someone has a home printer.'], ['D', 'Other (describe)']]),
    C('scenario2', 'Scenario 2: Severe Feedback', 'استجابة سيناريو النقد والقسوة',
      'You spent 15 hours on a deliverable. Your team lead says it does not meet Quanta standards and asks you to redo 60% within 24 hours.',
      [['A', 'Feel discouraged and ask to be removed from the task.'], ['B', 'Debate in front of the team that starting over wastes time.'], ['C', 'Accept the feedback, ask for a 5-minute debrief, and revise on time.'], ['D', 'Other (describe)']]),
    C('scenario3', 'Scenario 3: Academic Conflict', 'استجابة سيناريو التعارض الأكاديمي',
      'You committed to staff a Thursday workshop. On Tuesday a professor schedules an exam at the same time.',
      [['A', 'Skip the exam and staff the workshop.'], ['B', 'Skip the club activity without notice.'], ['C', 'Notify your lead and deputy in writing 48h ahead and hand over tasks to a peer.'], ['D', 'Other (describe)']]),
  ] },
  { title: 'Fit & time commitment', fields: [
    L('valueExpectation', 'Q1: What do you expect from Quanta, and what will you contribute weekly?', 'صفقة العطاء المتبادل', 'Minimum 80 characters.', { req: 1 }),
    C('unglamorous', 'Q2: Unglamorous tasks (chairs, cleaning, carrying equipment)', 'موقف المهام غير البراقة', '80% of volunteer work is manual. How do you view these tasks?',
      [['A', 'They should go to new recruits or cleaning staff.'], ['B', 'I take part willingly; serving the team is part of leadership.'], ['C', 'Only if the president and department heads do it too.']]),
    C('weeklyHours', 'Weekly Time Budget', 'الميزانية الزمنية الأسبوعية', 'Realistic hours without hurting your studies, sleep or well-being.',
      [['4-6', '4 to 6 hours per week'], ['7-10', '7 to 10 hours per week'], ['12+', 'More than 12 hours per week (subject to HR verification)']]),
  ] },
  { title: 'Declarations & signature', fields: [
    D('declPolitics', 'Political & union neutrality (Art. 7): I do not belong to any political or student union organization and I will keep the club scientific and neutral.', 'إقرار الحياد السياسي والنقابي'),
    D('declProbation', 'Probation (Art. 4 & 5): I accept a 4-month probation; permanent membership needs at least 75% attendance and timely task completion.', 'إقرار فترة التأهيل'),
    D('declConduct', 'Code of conduct (Art. 28 & 29): I will respect the code of conduct and refrain from smoking or inappropriate behavior in club facilities and events.', 'إقرار الانضباط'),
    X('signature', 'Applicant Signature: type your full name exactly as in section 1', 'توقيع المترشح', { req: 1 }),
  ] },
];
