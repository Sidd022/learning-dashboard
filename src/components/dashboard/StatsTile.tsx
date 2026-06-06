"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

// rough minutes per day this week
const weekData = [40, 65, 30, 80, 55, 90, 72];
const days = ["M", "T", "W", "T", "F", "S", "S"];

export function StatsTile() {
  const max = Math.max(...weekData);

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2, type: "spring", stiffness: 260, damping: 24 } }}
      className="relative rounded-2xl border border-border-subtle bg-bg-elevated overflow-hidden col-span-1 lg:col-span-1 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.2)" }}
      />

      <div className="relative p-5">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center">
            <TrendingUp size={15} className="text-violet-400" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white/90">Weekly Focus</h2>
            <p className="text-xs text-white/35">Minutes per day</p>
          </div>
        </div>

        <div className="flex items-end gap-1.5 h-24">
          {weekData.map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 0.3 + i * 0.055,
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                }}
                style={{
                  originY: 1,
                  height: `${(val / max) * 100}%`,
                  background:
                    i === weekData.length - 1
                      ? "rgba(139,92,246,0.9)"
                      : i >= weekData.length - 3
                      ? "rgba(139,92,246,0.5)"
                      : "rgba(139,92,246,0.18)",
                }}
                className="w-full rounded-t-sm"
              />
              <span className="text-[10px] text-white/30">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
