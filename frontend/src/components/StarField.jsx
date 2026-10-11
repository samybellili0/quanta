import { useEffect, useRef } from 'react';

export default function StarField() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d');
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w, h, stars = [], shots = [], raf, last = 0;
    const mobile = () => innerWidth < 768;
    const resize = () => {
      w = c.width = innerWidth; h = c.height = innerHeight;
      stars = Array.from({ length: mobile() ? 70 : 180 }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.3 + 0.2, a: Math.random() * 6, d: Math.random() * 0.02 + 0.003, v: Math.random() * 0.06 + 0.01 }));
    };
    const spawn = () => shots.push({ x: Math.random() * w * 0.8, y: Math.random() * h * 0.4, vx: 7 + Math.random() * 4, vy: 4 + Math.random() * 3, life: 1 });
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        if (!still) { s.a += s.d; s.x += s.v; if (s.x > w) s.x = 0; }
        ctx.fillStyle = `rgba(224,242,254,${0.35 + 0.65 * Math.abs(Math.sin(s.a))})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.3); ctx.fill();
      }
      if (still) return;
      if (t - last > (mobile() ? 6000 : 3500) * (0.5 + Math.random())) { spawn(); last = t; }
      shots = shots.filter((s) => s.life > 0);
      for (const s of shots) {
        const ex = s.x - s.vx * 14, ey = s.y - s.vy * 14;
        const g = ctx.createLinearGradient(s.x, s.y, ex, ey);
        g.addColorStop(0, `rgba(224,242,254,${s.life})`); g.addColorStop(1, 'rgba(56,189,248,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 1.5; ctx.shadowColor = '#38BDF8'; ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(ex, ey); ctx.stroke(); ctx.shadowBlur = 0;
        s.x += s.vx; s.y += s.vy; s.life -= 0.012;
      }
      raf = requestAnimationFrame(draw);
    };
    resize(); addEventListener('resize', resize); raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="starfield" aria-hidden="true" />;
}
