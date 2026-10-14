import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';

const LINKS = [['home', 'Home'], ['about', 'About'], ['events', 'Events'], ['activities', 'Activities'], ['join', 'Join Us'], ['contact', 'Contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false), [solid, setSolid] = useState(false), [active, setActive] = useState('home');
  useEffect(() => {
    const onScroll = () => setSolid(scrollY > 40);
    onScroll(); addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    LINKS.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => { removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);
  return (
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <a className="brand" href="/#home"><Logo size={44} /><span></span></a>
      <button className={`burger ${open ? 'x' : ''}`} aria-label="Toggle menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}><i /><i /><i /></button>
      <nav id="menu" aria-label="Main" className={open ? 'open' : ''}>
        {LINKS.map(([id, label]) => (
        <a key={id} href={id === 'join' ? '/join' : `/#${id}`} aria-current={(location.pathname === '/join' ? id === 'join' : active === id) ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>        ))}
      </nav>
    </header>
  );
}
