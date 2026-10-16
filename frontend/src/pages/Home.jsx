import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../sections/HeroSection.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import DepartmentsAndTeams from '../sections/DepartmentsAndTeams.jsx';
import EventsSection from '../sections/EventsSection.jsx';
import ActivitiesSection from '../sections/ActivitiesSection.jsx';
import TeamSection from '../sections/TeamSection.jsx';
import JoinBanner from '../sections/JoinBanner.jsx';

export default function Home() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const id = hash.slice(1) || (pathname === '/events' ? 'events' : '');
    if (id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <DepartmentsAndTeams />
      <EventsSection />
      <ActivitiesSection />
      <TeamSection />
      <JoinBanner />
    </>
  );
}
