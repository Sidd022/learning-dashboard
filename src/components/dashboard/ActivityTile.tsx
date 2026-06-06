"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { generateActivityData } from "@/lib/utils";
import { useMemo } from "react";

const LEVEL_COLORS = [
  "bg-bg-overlay",
  "bg-emerald-900/60",
  "bg-emerald-700/60",
  "bg-emerald-500/70",
  "bg-emerald-400",
];

function getLevel(count: number) {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
}

export function ActivityTile() {
  const activityData = useMemo(() => generateActivityData(), []);

  const weeks: (typeof activityData)[] = [];
  for (let i = 0; i < activityData.length; i += 7) {
    weeks.push(activityData.slice(i, i + 7));
  }

  const totalDays = activityData.filter((d) => d.count > 0).length;

  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.12, type: "spring", stiffness: 260, damping: 24 } }}
      className="relative rounded-2xl border border-border-subtle bg-bg-elevated overflow-hidden col-span-1 sm:col-span-2 lg:col-span-3 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(16,185,129,0.18)" }}
      />

      <div className="relative p-6">
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
              <Activity size={15} className="text-emerald-400" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white/90">Learning Activity</h2>
              <p className="text-xs text-white/35">{totalDays} active days this quarter</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/30">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <div key={l} className={`w-2.5 h-2.5 rounded-sm ${LEVEL_COLORS[l]}`} />
            ))}
            <span>More</span>
          </div>
        </div>

        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1 shrink-0">
              {week.map((day, di) => (
                <motion.div
                  key={day.date}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: (wi * 7 + di) * 0.0018,
                    type: "spring",
                    stiffness: 280,
                    damping: 18,
                  }}
                  title={`${day.date}: ${day.count} sessions`}
                  className={`w-2.5 h-2.5 rounded-sm ${LEVEL_COLORS[getLevel(day.count)]} cursor-pointer hover:ring-1 hover:ring-emerald-400/60 transition-shadow`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
