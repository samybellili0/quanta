// Source: Quanta Club Official Repository (https://github.com/samybellili0/quanta)

export const STATS = [
  ['+200', 'Members'],
  ['+70', 'Scientific activities'],
  ['+10', 'Major events'],
  ['∞', 'Curiosity'],
];

export const DOMAINS = [
  ['physics', 'Physics', 'Explore the laws that describe our universe.'],
  ['math', 'Mathematics', 'From abstract structures to real-world applications.'],
  ['cs', 'Computer Science', 'Programming, algorithms, AI and computational thinking.'],
  ['astronomy', 'Astronomy', 'Discover the universe beyond Earth.'],
  ['engineering', 'Engineering', 'Transform scientific ideas into practical solutions.'],
  ['stem', 'STEM', 'Interdisciplinary learning, experimentation and innovation.'],
];

export const ACTS = [
  'Scientific workshops',
  'Physics experiments',
  'Programming workshops',
  'Astronomy nights',
  'Scientific conferences',
  'Hackathons',
  'Competitions',
  'Debates',
  'Research discussions',
  'STEM outreach',
  'Student projects',
];

export const TEAM = [
  ['Ahmed Farah Abrar', 'President', ''],
  ['Akram Foudili', 'Vice President', ''],
  ['Lahmar Amira', 'Secretary General', ''],
  ['Kaouther Benkacir', 'Human Resources & Internal Development Manager', ''],
  ['Bellili Samy', 'IT Manager', ''],
  ['Dahmani Imene', 'External Relations Manager', ''],
  ['Nour El Islam Ben Kouider', 'Logistic & Finance Manager', ''],
  ['Safa Benouaret', 'Event Manager', ''],
  ['Lyna Larbi', 'Media And Marketing', ''],
];

export const DEPARTMENTS = [
  {
    id: 'events',
    name: 'Events & Scientific Activities',
    def: "Plans and runs the club's major projects and field events, and supervises the scientific teams. Led by the Event Manager with a Co-Manager.",
  },
  {
    id: 'hr',
    name: 'HR & Internal Development',
    def: 'Recruits and trains members, runs the points system, announces the Member of the Month, organizes onboarding bootcamps, academic care against burnout, and the alumni network.',
  },
  {
    id: 'external',
    name: 'External Relations & Sponsorship',
    def: 'Coordinates with other clubs, companies and institutions, secures sponsorships and internships, and respects every deadline agreed with sponsors.',
  },
  {
    id: 'media',
    name: 'Marketing & Media',
    def: 'Owns the visual identity, graphic design, photo and video production, official social accounts, science popularization and event coverage.',
  },
  {
    id: 'it',
    name: 'Technical Solutions & IT',
    def: 'Supports hackathons and technical competitions, builds and maintains the website, membership database and automation tools.',
  },
  {
    id: 'finance',
    name: 'Logistics & Finance',
    def: 'Manages budgets and invoices, books halls, keeps the numbered equipment inventory and issues temporary custody receipts.',
  },
];

export const TEAMS = [
  ['astro-physics', 'Astronomy & Physics'],
  ['math', 'Mathematics'],
  ['ai-cs', 'AI & Computer Science'],
  ['life-sciences', 'Life Sciences & Biology'],
  ['chem-materials', 'Chemistry & Materials'],
];

export const EVENTS = [
  {
    id: 'Wissam',
    title: 'Wissam Al-Alim 16th Edition: Guest of Honour',
    description:
      'Quanta Club accepted an official invitation to participate as guests of honor at the 16th national intellectual event, "Wisam Al-Alem" (Medal of the Scholar), held at the Cultural Center. The event offered a great opportunity to connect with leading researchers and scholars, highlight the club\'s efforts in spreading scientific culture among youth, and reaffirm the university mission as a beacon of cultural and intellectual enlightenment.',
    date: '2026-12-10',
    location: 'Cultural Center',
    category: 'General',
    image: '',
    featured: true,
    registrationUrl: '',
  },
  {
    id: 'astro',
    title: 'Astro x Camp Workshops',
    description:
      'Following an official invitation from the Astrotech club at the Higher National School of Computer Science (ESI), Quanta Club took part in the Astrotech Camp through an informational booth and an interactive scientific workshop. The booth featured practical applications of space science and its intersections with data science and algorithms. Club members engaged with ESI students through live demonstrations and exploratory programming discussions.',
    date: '2026-12-13',
    location: 'ESI',
    category: 'Astronomy',
    image: '/images/event-astro.jpg',
    featured: false,
    registrationUrl: '',
  },
  {
    id: 'hackathon',
    title: 'Quanta CTF Competition: Advanced Cybersecurity Challenge',
    description:
      'The club organized the university’s largest cybersecurity event, spanning two consecutive days at the Central Library (featuring 24 hours of non-stop coding). Participating teams competed to solve complex technical challenges across domains including: Web Exploitation, Reverse Engineering, Cryptography, Digital Forensics, and Binary Exploitation. The club provided high-level technical mentorship and an advanced cloud platform. The competition concluded with an award ceremony honoring and awarding prizes to top-performing teams.',
    date: '2026-02-12',
    location: 'University of Algiers 1 BUA',
    category: 'Competition',
    image: '/images/ctf.jpeg',
    featured: false,
    registrationUrl: '',
  },
  {
    id: 'iftar',
    title: 'Faculty Community Iftar & Pre-Iftar Interactive Activities',
    description:
      'During the holy month of Ramadan, Quanta Club, in coordination with the Deanship of the Faculty of Sciences and sister clubs, initiated the organization of a major community Iftar banquet. The meal was preceded by entertainment sessions and interactive trivia competitions that brought joy and delight to the attendees. Hundreds of students and professors gathered around a single table, reflecting the values of brotherhood and solidarity within the university community.',
    date: '2026-03-12',
    location: 'University of Algiers 1',
    category: 'General',
    image: '/images/iftar.jpeg',
    featured: false,
    registrationUrl: '',
  },
  {
    id: 'RTS',
    title: 'Race To Space 4',
    description:
      'The 4th edition of the "Race to Space 4" event stands out as the premier astronomy gathering in Algiers. It attracted over 150 students and researchers for an intensive, two-day scientific journey across the Ibn Baattouch Auditorium, the Letters Complex, and Auditorium A. The event featured high-level lectures by experts from the Research Center in Astronomy, Astrophysics and Geophysics (CRAAG) and the Algerian Radio Amateurs Association (ARA), alongside live telescope observation workshops and practical exhibitions on space communication.',
    date: '2026-04-21',
    time: '09:00',
    location: "Université d'Alger 1",
    category: 'Astronomy',
    image: '/images/RTS4.jpeg',
    featured: false,
    registrationUrl: '',
  },
  {
    id: 'WTP',
    title: 'Week to Peak',
    description:
      'Mid-June marked the hosting of the second edition of the flagship training event, "Week to Peak," a series of advanced training workshops covering Generative AI applications across four tracks: Day 1 (June 15): Creative Design with AI — Design and visual asset generation. Day 2 (June 17): Prompt Engineering: How to Talk to AI — Prompt engineering and smart interaction. Day 3 (June 18): AI in Research and Studies — Utilizing AI in academic research and paper analysis. Day 4 (June 20): AI in Coding: Smarter Development — Smart programming and accelerating software development.',
    date: '2026-06-15',
    location: 'University of Algiers 1',
    category: 'STEM',
    image: '/images/event-hack.jpg',
    featured: false,
    registrationUrl: '',
  },
  {
    id: 'QSSC3',
    title: 'Quanta Summer Camp 3',
    description:
      'Quanta Club concluded its event-filled academic year by organizing the third edition of the Quanta Summer Camp, serving as a unique model for experiential learning and youth innovation. Over 10 full days of comprehensive, immersive technological training, an elite group of students from science faculties and Algerian universities participated in specialized workshops and rapid prototyping labs. Together, they developed integrated engineering and software solutions to tackle real-world challenges in robotics, renewable energy, and artificial intelligence.',
    date: '2026-07-06',
    location: 'University of Algiers 1',
    category: 'STEM',
    image: '/images/qssc3.jpg',
    featured: false,
    registrationUrl: '',
  },
  {
    id: 'CRAAG',
    title: 'Solar Eclipse Observation with CRAAG at Sidi Fredj',
    description:
      'As a grand finale to its academic year activities, Quanta Club, in official partnership with the Research Center in Astronomy, Astrophysics and Geophysics (CRAAG), organized a major scientific event in Sidi Fredj to track and observe the partial solar eclipse. The event featured setting up telescopes equipped with certified safe solar filters, distributing specialized eclipse glasses to hundreds of attendees, and delivering physics explanations by CRAAG researchers alongside club members covering celestial mechanics. The event took place amid widespread media coverage and exceptional public engagement.',
    date: '2026-08-12',
    location: 'Sidi Fredj',
    category: 'Astronomy',
    image: '/images/sidifredj.jpg',
    featured: false,
    registrationUrl: '',
  },
];

export const SOCIALS = [
  ['Instagram', 'https://www.instagram.com/quanta_club/'],
  ['Facebook', 'https://www.facebook.com/quantaclubdz'],
  ['LinkedIn', 'https://www.linkedin.com/company/quantaclubdz/home/'],
];

export const EMAIL = 'quantaclubdz@gmail.com';
