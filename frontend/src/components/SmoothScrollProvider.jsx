import React, { useEffect, useState, createContext, useContext } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScrollProvider({ children }) {
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.11,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    setLenisInstance(lenis);

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Synchronize anchor clicks with Lenis smooth scroll
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href*="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;
      const targetId = href.slice(hashIndex + 1);
      const targetEl = document.getElementById(targetId);
      if (targetEl && window.location.pathname === '/') {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -64, duration: 1.05 });
        window.history.pushState(null, '', `/#${targetId}`);
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}
