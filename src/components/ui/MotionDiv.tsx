"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

// re-exports so we can import motion primitives from a single place
// without scattering "use client" everywhere

export const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => <motion.div ref={ref} {...props} />
);
MotionDiv.displayName = "MotionDiv";

export const MotionArticle = forwardRef<HTMLElement, HTMLMotionProps<"article">>(
  (props, ref) => <motion.article ref={ref} {...props} />
);
MotionArticle.displayName = "MotionArticle";

export const MotionNav = forwardRef<HTMLElement, HTMLMotionProps<"nav">>(
  (props, ref) => <motion.nav ref={ref} {...props} />
);
MotionNav.displayName = "MotionNav";

export const MotionLi = forwardRef<HTMLLIElement, HTMLMotionProps<"li">>(
  (props, ref) => <motion.li ref={ref} {...props} />
);
MotionLi.displayName = "MotionLi";

export const MotionSpan = forwardRef<HTMLSpanElement, HTMLMotionProps<"span">>(
  (props, ref) => <motion.span ref={ref} {...props} />
);
MotionSpan.displayName = "MotionSpan";
