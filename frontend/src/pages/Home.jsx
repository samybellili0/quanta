import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, About, Domains, Activities, Team, Contact } from '../sections/Static.jsx';
import Events from '../sections/Events.jsx';
import Join from '../sections/Join.jsx';

export default function Home() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    const id = hash.slice(1) || (pathname === '/events' ? 'events' : '');
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50); else scrollTo(0, 0);
  }, [hash, pathname]);
  return <><Hero /><About /><Domains /><Events /><Activities /><Team /><Join /><Contact /></>;
}
