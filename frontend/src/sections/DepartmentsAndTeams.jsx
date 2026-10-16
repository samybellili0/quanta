import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DEPARTMENTS, SCIENTIFIC_TEAMS } from '../data/club.js';
import DynamicIcon from '../components/DynamicIcon.jsx';
import { Layers, Sparkles, Orbit, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

export default function DepartmentsAndTeams() {
  const [activeTab, setActiveTab] = useState('departments'); // 'departments' | 'teams'
  const { playClick, playQuantumChime } = useSoundEffects();

  const handleTabSwitch = (tab) => {
    playQuantumChime(tab === 'departments' ? 659.25 : 783.99, 0.15);
    setActiveTab(tab);
  };

  return (
    <section id="departments" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>CLUB STRUCTURE & DISCIPLINES</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Executive Departments & Scientific Teams
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Quanta operates with military organizational precision: 6 executive departments governing
          operational execution, and 5 specialized research teams driving scientific inquiry.
        </p>

        {/* Tab Switcher Pills */}
        <div className="flex justify-center pt-4">
          <div className="inline-flex rounded-2xl bg-slate-950/80 p-1.5 border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => handleTabSwitch('departments')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'departments'
                  ? 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>6 Executive Departments</span>
            </button>

            <button
              onClick={() => handleTabSwitch('teams')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'teams'
                  ? 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Orbit className="w-4 h-4" />
              <span>5 Scientific Research Teams</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'departments' ? (
          <motion.div
            key="departments"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {DEPARTMENTS.map((dept, idx) => (
              <div
                key={dept.id}
                className="quantum-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 relative overflow-hidden group transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.accentColor} border ${dept.borderColor} flex items-center justify-center ${dept.textColor} shadow-md`}
                    >
                      <DynamicIcon name={dept.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-white/10 text-cyan-300 font-bold">
                      {dept.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/80 mt-0.5">{dept.nameAr}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{dept.def}</p>
                </div>

                <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    Lead: <strong className="text-white">{dept.manager}</strong>
                  </span>
                  <a
                    href="/join"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Apply</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="teams"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {SCIENTIFIC_TEAMS.map((team, idx) => (
              <div
                key={team.id}
                className="quantum-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 relative overflow-hidden group transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${team.accent} border ${team.border} flex items-center justify-center ${team.text} shadow-md`}
                    >
                      <DynamicIcon name={team.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-white/10 text-cyan-300 font-bold">
                      {team.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/80 mt-0.5">{team.nameAr}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{team.description}</p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block font-bold">
                      FLAGSHIP INITIATIVES
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {team.keyProjects.map((p) => (
                        <span
                          key={p}
                          className="px-2 py-0.5 rounded-md bg-slate-900/80 border border-white/5 text-[11px] text-slate-300 font-mono"
                        >
                          ✦ {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Supervised by Events Dept</span>
                  <a
                    href="/join"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Join Team</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
