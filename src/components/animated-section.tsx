"use client";

import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";

type AnimatedSectionProps = HTMLAttributes<HTMLElement> & {
  delay?: number;
};

export function AnimatedSection({ children, delay = 0, className = "" }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.section>
  );
}
