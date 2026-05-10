"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ResumeIcon } from "./resume-icon";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div style={{ width: "24px", height: "24px" }} />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="theme-toggle"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      <ResumeIcon
        icon={isDark ? "ri:sun-line" : "ri:moon-line"}
        className="theme-toggle__icon"
      />
    </button>
  );
}
