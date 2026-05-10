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

  const toggleTheme = (event: React.MouseEvent) => {
    const isAppearanceTransition =
      // @ts-expect-error experimental API
      document.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isAppearanceTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    );

    const nextTheme = isDark ? "light" : "dark";
    const transition = document.startViewTransition(() => {
      // Force synchronous DOM update for the snapshot
      document.documentElement.setAttribute("data-theme", nextTheme);
      setTheme(nextTheme); // Keep React state in sync
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: !isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: "ease-out",
          fill: "forwards",
          pseudoElement: !isDark
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button
      onClick={toggleTheme}
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
