import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/club.js';
import { Users, Shield, Sparkles } from 'lucide-react';

export default function TeamSection() {
  return (
    <section id="team" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
          <Users className="w-3.5 h-3.5 text-cyan-400" />
          <span>EXECUTIVE LEADERSHIP</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
          Executive Board 2026–2027
        </h2>

        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Student leaders driving Quanta's vision, operations, research teams, and external alliances.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {TEAM_MEMBERS.map((member, idx) => {
          const initials = member.name
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('');

          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.35 }}
              className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/40 relative overflow-hidden group text-left transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* Cyber Avatar Frame */}
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-slate-900 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-display font-black text-base shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:scale-105 transition-transform">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <span>{initials}</span>
                    )}
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#050811]" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors truncate">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 font-semibold truncate">
                      {member.role}
                    </p>
                    <p className="text-[10px] font-mono text-slate-400/80 truncate">{member.roleAr}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">{member.bio}</p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="truncate">{member.department}</span>
                <span className="text-cyan-400 shrink-0">✦ Board</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
