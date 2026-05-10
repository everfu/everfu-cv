"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { ResumeIcon } from "./resume-icon";
import "./floating-menu.scss";

export function FloatingMenu() {
  return (
    <motion.div
      className="floating-menu"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <ThemeToggle />
      <button
        onClick={() => window.print()}
        className="floating-menu__btn"
        title="Print CV"
        aria-label="Print CV"
      >
        <ResumeIcon icon="ri:printer-line" />
      </button>
    </motion.div>
  );
}
