import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DEPARTMENTS, SCIENTIFIC_TEAMS } from '../data/club.js';
import DynamicIcon from '../components/DynamicIcon.jsx';
import {
  Rocket,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ChevronDown,
  Layers,
  ExternalLink,
} from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

const FORM_URL = 'https://quanta-registrations.web.app';

const FAQS = [
  {
    q: 'How competitive is the selection process?',
    a: 'Admission is based on curiosity, problem-solving capability, team synergy, and demonstrated consistency rather than just grades. We evaluate situational answers and personal projects closely.',
  },
  {
    q: 'Do I need prior technical experience to join?',
    a: 'No prior expert knowledge is mandatory for L1/L2 recruits. What matters most is intellectual curiosity, proactive self-learning, and readiness to attend hands-on workshops.',
  },
  {
    q: 'What does the 4-month probation entail?',
    a: 'New recruits spend 4 full months as Trainee Members. Confirmation to Official Member requires at least 75% attendance at department workshops, timely completion of assigned task cards, and a favorable review by department managers.',
  },
  {
    q: 'Can students from other faculties or universities apply?',
    a: 'While our headquarters and primary hub is at the Faculty of Sciences (Université d\'Alger 1), students from allied institutions who can attend regular in-person workshops are eligible to submit their application.',
  },
];

export default function JoinPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const { playClick, playQuantumChime } = useSoundEffects();

  const toggleFaq = (idx) => {
    playClick();
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 text-left">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
          <Rocket className="w-3.5 h-3.5 text-cyan-400" />
          <span>OFFICIAL RECRUITMENT CAMPAIGN 2026–2027</span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          Join Quanta Multidisciplinaire
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Membership is selective. Review the 6 executive departments, the 5 scientific teams,
          and the 3-step admission process below before launching the application assessment.
        </p>

        {/* Primary Launch CTA */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playQuantumChime(880, 0.2)}
            className="btn-shimmer px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-sm tracking-wide shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5"
          >
            <Rocket className="w-4 h-4 stroke-[2.5]" />
            <span>Launch Official Recruitment Form</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>

      {/* 3-Step Selection Protocol */}
      <div className="quantum-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 relative overflow-hidden">
        <div className="quantum-laser-line" />

        <div className="space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block">
            THE 3-STEP ADMISSION PROCESS
          </span>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-black flex items-center justify-center text-xs">
                01
              </span>
              <h3 className="font-display font-black text-base text-white">
                Online Assessment
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete the comprehensive application form, covering personal background, skill matrix, situational dilemmas, and department choices.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-sky-500/20 text-sky-300 font-mono font-black flex items-center justify-center text-xs">
                02
              </span>
              <h3 className="font-display font-black text-base text-white">
                Individual Interview
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Shortlisted applicants are invited to a 15-minute face-to-face or digital interview with department leads and the Executive Board.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-purple-500/20 text-purple-300 font-mono font-black flex items-center justify-center text-xs">
                03
              </span>
              <h3 className="font-display font-black text-base text-white">
                4-Month Probation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Admitted recruits join as Trainees for 4 months. Fulfill 75% attendance and task deliveries to receive the Official Membership Certificate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Overview */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            CHOOSE YOUR FIRST & SECOND PREFERENCE
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
            The 6 Executive Departments
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              className="quantum-subcard p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                    <DynamicIcon name={dept.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    Lead: {dept.manager}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/80">{dept.nameAr}</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{dept.def}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* FAQ Accordion */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            GOT QUESTIONS?
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={faq.q}
              className="quantum-card rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm text-white hover:text-cyan-300 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sticky Action Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900/80 to-blue-950/60 border border-cyan-500/40 text-center space-y-4">
        <h3 className="font-display font-black text-xl sm:text-2xl text-white">
          Begin Your Application Now
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          The recruitment form takes approximately 10 to 15 minutes. Ensure you have your academic details and personal reflections ready.
        </p>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)]"
        >
          <span>Open Application Form</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
