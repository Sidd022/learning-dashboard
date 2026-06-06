"use client";

import { motion } from "framer-motion";
import { Flame, Trophy, Clock, Zap } from "lucide-react";
import { getGreeting } from "@/lib/utils";

const stats = [
  { icon: Flame, label: "Day Streak", value: "14", color: "#F59E0B" },
  { icon: Trophy, label: "XP Points", value: "2,840", color: "#8B5CF6" },
  { icon: Clock, label: "Hours Today", value: "3.2h", color: "#10B981" },
];

export function HeroTile() {
  const greeting = getGreeting();

  return (
    <motion.article
      whileHover={{ scale: 1.005 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.05, type: "spring", stiffness: 260, damping: 24 } }}
      className="relative rounded-2xl border border-border-subtle bg-bg-elevated overflow-hidden col-span-1 sm:col-span-2 lg:col-span-4 group min-h-[200px]"
    >
      {/* background glows */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-violet-500/8 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 pointer-events-none" />

      {/* subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(0,212,255,0.15)" }}
      />

      <div className="relative p-7 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Zap size={13} className="text-cyan-400" />
            <span className="text-xs text-white/40 font-medium tracking-widest uppercase">
              {greeting}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Alex
            </span>
          </h1>
          <p className="text-sm text-white/40 mt-2">
            You&apos;re on a roll — keep the momentum going today.
          </p>
        </div>

        <div className="flex gap-3 mt-6 flex-wrap">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 260, damping: 22 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border-subtle bg-bg-muted/50"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${stat.color}18` }}
              >
                <stat.icon size={15} style={{ color: stat.color }} />
              </div>
              <div>
                <p className="text-base font-bold text-white leading-none">{stat.value}</p>
                <p className="text-xs text-white/35 mt-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
