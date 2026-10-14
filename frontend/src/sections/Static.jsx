import { motion } from 'framer-motion';
import Logo from '../components/Logo.jsx';

const rise = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6 } };
const Section = ({ id, title, intro, children }) => (
  <section id={id} className="section"><div className="wrap">
    <motion.h2 {...rise}>{title}</motion.h2>
    {intro && <p className="intro">{intro}</p>}
    {children}
  </div></section>
);

export function Hero() {
  return (
    <section id="home" className="hero">
      <svg className="orbits" viewBox="0 0 800 800" aria-hidden="true"><g fill="none" stroke="rgba(56,189,248,.18)"><ellipse cx="400" cy="400" rx="380" ry="130" transform="rotate(-25 400 400)"/><ellipse cx="400" cy="400" rx="300" ry="90" transform="rotate(35 400 400)"/><circle cx="400" cy="400" r="200" strokeDasharray="2 8"/></g><g fill="rgba(224,242,254,.35)" fontFamily="serif" fontSize="26"><text x="90" y="200">ψ</text><text x="660" y="260">∇²</text><text x="140" y="640">ħ</text><text x="620" y="620">∫</text></g></svg>
      <div className="wrap hero-in">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}><Logo size={110} /></motion.div>
        <motion.h1 initial={{ opacity: 0, filter: 'blur(12px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 1.1 }}>QUANTA<br />THE FUTURE IS OURS</motion.h1>
        <p className="sub">Scientific Club — University of Algiers 1</p>
        <p className="tag">Exploring science. Connecting minds. Building the future.</p>
        <div className="cta"><a className="btn" href="/#events">Explore Our Events</a><a className="btn ghost" href="/join">Join Quanta</a></div>
      </div>
    </section>
  );
}

// PLACEHOLDER values: replace with real figures.
const STATS = [['+200', 'Members'], ['+70', 'Scientific activities'], ['+10', 'Major events'], ['∞', 'Curiosity']];
export function About() {
  return (
    <Section id="about" title="About Quanta" intro="Quanta is a student club at University of Algiers 1 bringing together students curious about physics, mathematics, computer science, astronomy, engineering, technology, artificial intelligence, electronics, scientific research and STEM education.">
      <div className="grid stats">{STATS.map(([n, l]) => <motion.div key={l} className="card" {...rise}><strong>{n}</strong><span>{l}</span></motion.div>)}</div>
    </Section>
  );
}

const DOMAINS = [['⚛', 'Physics', 'Explore the laws that describe our universe.'], ['∑', 'Mathematics', 'From abstract structures to real-world applications.'], ['</>', 'Computer Science', 'Programming, algorithms, AI and computational thinking.'], ['☄', 'Astronomy', 'Discover the universe beyond Earth.'], ['⚙', 'Engineering', 'Transform scientific ideas into practical solutions.'], ['⌬', 'STEM', 'Interdisciplinary learning, experimentation and innovation.']];
export function Domains() {
  return (
    <Section id="domains" title="Scientific domains">
      <div className="grid three">{DOMAINS.map(([i, t, d]) => <motion.article key={t} className="card hover" {...rise}><span className="ico" aria-hidden="true">{i}</span><h3>{t}</h3><p>{d}</p></motion.article>)}</div>
    </Section>
  );
}

const ACTS = ['Scientific workshops', 'Physics experiments', 'Programming workshops', 'Astronomy nights', 'Scientific conferences', 'Hackathons', 'Competitions', 'Debates', 'Research discussions', 'STEM outreach', 'Student projects'];
export function Activities() {
  return <Section id="activities" title="Activities" intro="What we do throughout the year."><div className="grid four">{ACTS.map((a) => <motion.div key={a} className="card hover small" {...rise}>{a}</motion.div>)}</div></Section>;
}

// PLACEHOLDERS: replace with real members. Photos go in frontend/public/images/.
// [name, role, photo (optional, file in frontend/public/images/)]
const TEAM = [
  ['Ahmed Farah Abrar', 'President'],
  ['Akram Foudili', 'Vice President'],
  ['Lahmar Amira', 'Secretary General'],
  ['Kaouther Benkacir', 'Human Resources & Internal Development Manager'],
  ['Bellili Samy', 'IT Manager'],
  ['Dahmani Imene', 'External Relations Manager'],
  ['Nour El Islam Ben Kouider', 'Logistic & Finance Manager'],
  ['Safa Benouaret', 'Event Manager'],
  ['Lyna Larbi', 'Media And Marketing'],
];
export function Team() {
  return (
    <Section id="team" title="The team">
      <div className="grid three">
        {TEAM.map(([name, role, photo]) => (
          <motion.article key={role} className="card hover" {...rise}>
            {photo
              ? <img className="avatar" src={photo} alt={name} />
              : <div className="avatar" role="img" aria-label={`Photo of ${name}`} />}
            <h3>{name}</h3>
            <p>{role}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

// Only add links that really exist: ['Instagram', 'https://...']
const ICONS = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.45 18.63.07 12 .07S0 5.45 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.39H7.08v-3.46h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.52c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.46h-2.8v8.39C19.61 23.03 24 18.06 24 12.07z" /></svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
  ),
};
const SOCIALS = [
  ['Instagram', 'https://www.instagram.com/quanta_club/'],
  ['Facebook', 'https://www.facebook.com/quantaclubdz'],
  ['LinkedIn', 'https://www.linkedin.com/company/quantaclubdz/home/']
];
const EMAIL = 'quantaclubdz@gmail.com';

function SocialIcons() {
  return (
    <div className="social">
      {SOCIALS.map(([label, url]) => (
        <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label} className="icon-link">{ICONS[label]}</a>
      ))}
    </div>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact" intro="Questions, partnerships or ideas? Get in touch.">
      <div className="card contact">
        <p><b>University</b> University of Algiers 1, Algiers</p>
        <p><b>Email</b> <span className="email">{EMAIL}</span></p>
        <SocialIcons />
      </div>
    </Section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap fgrid">
        <div className="fcol">
          <div className="fbrand">
            <span className="flogo"><Logo size={44} /></span>
            <span className="fname">Quanta THE FUTURE IS OURS</span>
          </div>
          <p className="muted">Exploring the Universe Through STEM</p>
          <h4>Stay Updated</h4>
          <p className="muted">Follow us on social media for the latest updates and events.</p>
          <SocialIcons />
          <p className="email">{EMAIL}</p>
        </div>
        <nav className="fcol" aria-label="Quick links">
          <h4>Quick Links</h4>
          {[['home', 'Home'], ['about', 'About Us'], ['events', 'Events'], ['activities', 'Activities'], ['join', 'Join Us'], ['contact', 'Contact']].map(([i, l]) => (
            <a key={i} href={i === 'join' ? '/join' : `/#${i}`}>{l}</a>
          ))}
        </nav>
      </div>
      <div className="wrap">
        <p className="copy">© 2026 Quanta Club — Université d'Alger 1. All rights reserved.</p>
      </div>
    </footer>
  );
}
