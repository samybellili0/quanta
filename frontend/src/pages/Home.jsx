import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, About, Domains, Activities, Team, Contact } from '../sections/Static.jsx';
import Events from '../sections/Events.jsx';
import { Link } from 'react-router-dom';

function JoinCta() {
  return (
    <section id="join" className="section"><div className="wrap"><div className="card cta-card">
      <h2>Join Quanta</h2>
      <p className="intro">Membership starts with a 4-month probation. Read our rules, discover the six departments, then apply.</p>
      <Link className="btn" to="/join">Start your application</Link>
    </div></div></section>
  );
}
export default function Home() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    const id = hash.slice(1) || (pathname === '/events' ? 'events' : '');
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50); else scrollTo(0, 0);
  }, [hash, pathname]);
  return <><Hero /><About /><Domains /><Events /><Activities /><Team /><JoinCta /><Contact /></>;
}
