import React from 'react';
import Logo from '../components/Logo.jsx';
import { Mail, MapPin, Globe, Sparkles, ArrowUpRight, ExternalLink } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    handle: '@quanta_club',
    url: 'https://www.instagram.com/quanta_club/',
    color: 'hover:text-pink-400',
  },
  {
    name: 'Facebook',
    handle: 'Quanta Club',
    url: 'https://www.facebook.com/quantaclubdz',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Facebook Community',
    handle: 'Recruitment Group',
    url: 'https://web.facebook.com/share/g/1F6eDv7wxy/',
    color: 'hover:text-cyan-400',
  },
  {
    name: 'LinkedIn',
    handle: 'Quanta Scientific Club',
    url: 'https://www.linkedin.com/company/quantaclubdz/home/',
    color: 'hover:text-sky-400',
  },
];

export default function FooterSection() {
  return (
    <footer id="contact" className="border-t border-cyan-500/20 bg-[#03060d] pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <Logo size={50} glow={true} />
              <div>
                <span className="font-display font-black text-xl text-white tracking-wider block">
                  QUANTA MULTIDISCIPLINAIRE
                </span>
                <span className="text-xs font-mono text-cyan-400 block">
                  Université d'Alger 1 — Benyoucef Benkhedda
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Scientific club at the Faculty of Sciences, bringing together passionate students in physics, mathematics, AI, astronomy, chemistry, and engineering.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Faculté des Sciences, 2 Rue Didouche Mourad, Alger Centre</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href="mailto:quantaclubdz@gmail.com"
                  className="text-cyan-400 hover:underline font-mono"
                >
                  quantaclubdz@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="/#about" className="hover:text-cyan-300 transition-colors">
                  About Quanta & Pillars
                </a>
              </li>
              <li>
                <a href="/#departments" className="hover:text-cyan-300 transition-colors">
                  6 Departments & 5 Teams
                </a>
              </li>
              <li>
                <a href="/#events" className="hover:text-cyan-300 transition-colors">
                  Major Events (CTF, RTS4, Camps)
                </a>
              </li>
              <li>
                <a href="/#activities" className="hover:text-cyan-300 transition-colors">
                  Annual Scientific Labs
                </a>
              </li>
              <li>
                <a href="/#team" className="hover:text-cyan-300 transition-colors">
                  Executive Board 2026–2027
                </a>
              </li>
            </ul>
          </div>

          {/* Official Social Networks */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block">
              OFFICIAL CHANNELS
            </span>
            <div className="grid gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 text-xs text-slate-300 flex items-center justify-between transition-all ${s.color}`}
                >
                  <span>{s.name}</span>
                  <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1">
                    {s.handle}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Anti-Scraping Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Quanta Multidisciplinaire — Université d'Alger 1. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-cyan-400/80">THE FUTURE IS OURS</span>
            <span>•</span>
            <a
              href="https://quanta-registrations.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>Recruitment Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
