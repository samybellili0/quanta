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
        <div className="cta"><a className="btn" href="/#events">Explore Our Events</a><a className="btn ghost" href="/#join">Join Quanta</a></div>
      </div>
    </section>
  );
}

// PLACEHOLDER values: replace with real figures.
const STATS = [['+100', 'Members'], ['+70', 'Scientific activities'], ['+10', 'Major events'], ['∞', 'Curiosity']];
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
const TEAM = ['President', 'Vice President', 'Secretary General', 'HR Manager', 'Logistic', 'Relex', 'IT Manager', 'Event Manager', 'Media And Marketing'];
export function Team() {
  return (
    <Section id="team" title="The team">
      <div className="grid three">{TEAM.map((p) => <motion.article key={p} className="card hover" {...rise}><div className="avatar" role="img" aria-label="Photo placeholder" /><h3>Name (placeholder)</h3><p>{p}</p></motion.article>)}</div>
    </Section>
  );
}

// Only add links that really exist: ['Instagram', 'https://...']
const SOCIALS = [];
const EMAIL = '';
export function Contact() {
  return (
    <Section id="contact" title="Contact" intro="Questions, partnerships or ideas? Get in touch.">
      <div className="card contact">
        <p><b>University</b> University of algiers 1, Algiers</p>
        {EMAIL && <p><b>Email</b> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>}
        {SOCIALS.length ? <p className="social">{SOCIALS.map(([l, u]) => <a key={l} href={u} target="_blank" rel="noreferrer">{l}</a>)}</p> : <p className="muted">Email and social links appear here once set in Static.jsx.</p>}
        {EMAIL && <a className="btn" href={`mailto:${EMAIL}`}>Contact us</a>}
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="footer"><div className="wrap fgrid">
      <div><div className="brand"><Logo size={36} /><span>Quanta Multidisciplinaire</span></div><p>Scientific student club exploring physics, mathematics, computing and astronomy.</p></div>
      <nav aria-label="Footer">{[['home', 'Home'], ['about', 'About'], ['events', 'Events'], ['activities', 'Activities'], ['join', 'Join Us'], ['contact', 'Contact']].map(([i, l]) => <a key={i} href={`/#${i}`}>{l}</a>)}</nav>
      <div><p>Université d'Alger 1</p></div>
    </div><p className="copy">© 2026 Quanta Multidisciplinaire — Université d'Alger 1</p></footer>
  );
}
