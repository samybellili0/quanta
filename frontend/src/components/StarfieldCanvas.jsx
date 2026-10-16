import React, { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const sparks = [];
    const palette = ['#ffffff', '#bae6fd', '#38bdf8', '#60a5fa', '#818cf8'];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleClick = (e) => {
      // Spawn subtle quantum spark burst on click
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.3;
        const speed = 1.4 + Math.random() * 2.8;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2 + 1,
          alpha: 0.9,
          color: palette[Math.floor(Math.random() * palette.length)],
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    const numStars = Math.min(190, Math.floor((width * height) / 8500) + 75);

    const stars = Array.from({ length: numStars }, (_, i) => {
      const z = Math.random() * 0.8 + 0.2;
      const isNode = i < 42;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        size: isNode ? Math.random() * 1.9 + 1.1 : Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.65 + 0.25,
        vx: (Math.random() - 0.5) * 0.24 * z,
        vy: (Math.random() - 0.5) * 0.24 * z - 0.09 * z,
        twinkleSpeed: Math.random() * 0.028 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        color: palette[Math.floor(Math.random() * palette.length)],
        isNode,
      };
    });

    const shootingStar = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      length: 0,
      alpha: 0,
      active: false,
    };

    const spawnShootingStar = () => {
      shootingStar.x = Math.random() * width * 0.8 + width * 0.1;
      shootingStar.y = Math.random() * height * 0.35;
      const angle = Math.PI * 0.2 + Math.random() * 0.2;
      const speed = 9 + Math.random() * 5;
      shootingStar.vx = Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1);
      shootingStar.vy = Math.sin(angle) * speed;
      shootingStar.length = 85 + Math.random() * 55;
      shootingStar.alpha = 1;
      shootingStar.active = true;
    };

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      const parallaxX = (mouse.x - width / 2) * 0.028;
      const parallaxY = (mouse.y - height / 2) * 0.028;

      // 1. Deep Breathing Cosmic Nebulae
      const neb1X = width * 0.25 + Math.sin(time * 0.003) * 65 - parallaxX * 0.5;
      const neb1Y = height * 0.22 + Math.cos(time * 0.0025) * 45 - parallaxY * 0.5;
      const grad1 = ctx.createRadialGradient(neb1X, neb1Y, 20, neb1X, neb1Y, Math.max(width, height) * 0.46);
      grad1.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
      grad1.addColorStop(0.5, 'rgba(29, 78, 216, 0.055)');
      grad1.addColorStop(1, 'rgba(5, 8, 17, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const neb2X = width * 0.78 + Math.cos(time * 0.002) * 75 - parallaxX * 0.3;
      const neb2Y = height * 0.72 + Math.sin(time * 0.003) * 55 - parallaxY * 0.3;
      const grad2 = ctx.createRadialGradient(neb2X, neb2Y, 20, neb2X, neb2Y, Math.max(width, height) * 0.44);
      grad2.addColorStop(0, 'rgba(56, 189, 248, 0.09)');
      grad2.addColorStop(0.5, 'rgba(79, 70, 229, 0.045)');
      grad2.addColorStop(1, 'rgba(5, 8, 17, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Soft Cursor Quantum Halo
      if (mouse.active) {
        const cursorGrad = ctx.createRadialGradient(mouse.x, mouse.y, 4, mouse.x, mouse.y, 180);
        cursorGrad.addColorStop(0, 'rgba(56, 189, 248, 0.07)');
        cursorGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = cursorGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Quantum Orbital Rings in Deep Space
      ctx.save();
      ctx.translate(width / 2 - parallaxX * 0.4, height * 0.42 - parallaxY * 0.4);
      ctx.rotate(time * 0.0009);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, Math.min(width, 900) * 0.48, Math.min(height, 600) * 0.18, -0.35, 0, Math.PI * 2);
      ctx.stroke();

      ctx.rotate(-time * 0.0016);
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.04)';
      ctx.beginPath();
      ctx.ellipse(0, 0, Math.min(width, 900) * 0.38, Math.min(height, 600) * 0.26, 0.55, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 3. Stars + Quantum Constellation Connections
      const nodes = [];

      for (const star of stars) {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const sx = (star.x - parallaxX * star.z + width) % width;
        const sy = (star.y - parallaxY * star.z + height) % height;

        if (star.isNode) {
          nodes.push({ sx, sy });
        }

        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
        const currentAlpha = Math.max(0.12, Math.min(1, star.alpha + twinkle * 0.28));

        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fill();

        if (star.isNode) {
          ctx.beginPath();
          ctx.arc(sx, sy, star.size * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.13)';
          ctx.fill();
        }
      }

      // Connect nearby quantum nodes with delicate filaments
      ctx.globalAlpha = 1;
      const maxDist = 140;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        if (mouse.active) {
          const mdx = a.sx - mouse.x;
          const mdy = a.sy - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 175) {
            const lineAlpha = (1 - mDist / 175) * 0.24;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.13;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // 4. Click Quantum Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.96;
        sp.vy *= 0.96;
        sp.alpha -= 0.024;

        if (sp.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = sp.alpha;
        ctx.fillStyle = sp.color;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 5. Shooting Star / Meteor
      if (!shootingStar.active && Math.random() < 0.0045) {
        spawnShootingStar();
      }

      if (shootingStar.active) {
        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;
        shootingStar.alpha -= 0.016;

        if (
          shootingStar.alpha <= 0 ||
          shootingStar.x < 0 ||
          shootingStar.x > width ||
          shootingStar.y > height
        ) {
          shootingStar.active = false;
        } else {
          const speed = Math.sqrt(shootingStar.vx ** 2 + shootingStar.vy ** 2);
          const tailX = shootingStar.x - (shootingStar.vx / speed) * shootingStar.length;
          const tailY = shootingStar.y - (shootingStar.vy / speed) * shootingStar.length;

          const meteorGrad = ctx.createLinearGradient(shootingStar.x, shootingStar.y, tailX, tailY);
          meteorGrad.addColorStop(0, `rgba(186, 230, 253, ${shootingStar.alpha})`);
          meteorGrad.addColorStop(0.3, `rgba(56, 189, 248, ${shootingStar.alpha * 0.6})`);
          meteorGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');

          ctx.strokeStyle = meteorGrad;
          ctx.lineWidth = 1.8;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();

          ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.alpha})`;
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.1),transparent_60%)]" />
    </div>
  );
}
