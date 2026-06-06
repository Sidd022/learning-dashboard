"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  color?: string;
}

export function ProgressBar({ value, color = "#00D4FF" }: ProgressBarProps) {
  return (
    <div className="relative h-1.5 w-full rounded-full bg-bg-muted overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: `${value}%` }}
        transition={{
          duration: 1.0,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          background: `linear-gradient(90deg, ${color}77, ${color})`,
          boxShadow: `0 0 6px ${color}55`,
        }}
      />
    </div>
  );
}
