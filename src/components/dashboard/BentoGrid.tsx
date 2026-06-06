"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 24 },
  },
};

interface BentoGridProps {
  children: React.ReactNode;
}

export function BentoGrid({ children }: BentoGridProps) {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-4 gap-3"
    >
      {childArray.map((child, i) => (
        <motion.div key={i} variants={item} style={{ display: "contents" }}>
          {child}
        </motion.div>
      ))}
    </motion.section>
  );
}
