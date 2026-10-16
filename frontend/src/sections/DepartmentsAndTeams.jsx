import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DEPARTMENTS, SCIENTIFIC_TEAMS } from '../data/club.js';
import DynamicIcon from '../components/DynamicIcon.jsx';
import { Layers, Orbit, ArrowUpRight } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects.js';

export default function DepartmentsAndTeams() {
  const [activeTab, setActiveTab] = useState('departments');
  const { playQuantumChime } = useSoundEffects();

  const handleTabSwitch = (tab) => {
    playQuantumChime(tab === 'departments' ? 659.25 : 783.99, 0.15);
    setActiveTab(tab);
  };

  return (
    <section id="departments" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>STRUCTURE & DISCIPLINES</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
          Departments & Scientific Teams
        </h2>

        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          6 executive operational departments and 5 specialized research teams.
        </p>

        {/* Tab Switcher Pills */}
        <div className="flex justify-center pt-2">
          <div className="inline-flex rounded-xl bg-slate-950/90 p-1 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => handleTabSwitch('departments')}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'departments'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>6 Departments</span>
            </button>

            <button
              onClick={() => handleTabSwitch('teams')}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'teams'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>5 Research Teams</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'departments' ? (
          <motion.div
            key="departments"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.id}
                className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/40 group text-left transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${dept.accentColor} border ${dept.borderColor} flex items-center justify-center ${dept.textColor}`}
                    >
                      <DynamicIcon name={dept.icon} className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      Lead: <strong className="text-white">{dept.manager}</strong>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-400/80">{dept.nameAr}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{dept.def}</p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-end text-xs">
                  <a
                    href="/join"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold text-xs"
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            {SCIENTIFIC_TEAMS.map((team) => (
              <div
                key={team.id}
                className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/40 group text-left transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${team.accent} border ${team.border} flex items-center justify-center ${team.text}`}
                    >
                      <DynamicIcon name={team.icon} className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300">
                      Research Team
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-400/80">{team.nameAr}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{team.description}</p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {team.keyProjects.map((p) => (
                      <span
                        key={p}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-[10px] font-mono text-slate-300"
                      >
                        ✦ {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-end text-xs">
                  <a
                    href="/join"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold text-xs"
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
