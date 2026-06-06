"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { Course } from "@/types";

const COURSE_COLORS = [
  "#00D4FF",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#F43F5E",
];

const COURSE_GRADIENTS = [
  "from-cyan-500/10 to-cyan-500/0",
  "from-violet-500/10 to-violet-500/0",
  "from-emerald-500/10 to-emerald-500/0",
  "from-amber-500/10 to-amber-500/0",
  "from-rose-500/10 to-rose-500/0",
];

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const color = COURSE_COLORS[index % COURSE_COLORS.length];
  const gradient = COURSE_GRADIENTS[index % COURSE_GRADIENTS.length];
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // slightly softer tilt than the default
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), {
    stiffness: 240,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 240,
    damping: 22,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.025 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative rounded-2xl border border-border-subtle bg-bg-elevated overflow-hidden cursor-pointer group min-h-[180px]"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} />

      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1px ${color}44`,
          transition: "opacity 0.3s ease",
        }}
      />

      <div className="relative p-5 flex flex-col gap-4 h-full">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}
        >
          <DynamicIcon name={course.icon_name} size={18} style={{ color }} />
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white/90 leading-tight">
            {course.title}
          </h3>
          <p className="text-xs text-white/35 mt-1">Active course</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/40 font-medium">Progress</span>
            <span className="text-xs font-bold" style={{ color }}>
              {course.progress}%
            </span>
          </div>
          <ProgressBar value={course.progress} color={color} />
        </div>
      </div>
    </motion.article>
  );
}
