"use client";

import { useEffect } from "react";

function getPrintDensity(height: number) {
  if (height > 1160) return "tightest";
  if (height > 1040) return "tight";
  if (height < 900) return "loose";
  return "normal";
}

export function PrintDensity() {
  useEffect(() => {
    const root = document.documentElement;
    const article = document.querySelector<HTMLElement>(".resume-article");

    if (!article) return;

    let frame = 0;

    const updateDensity = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.dataset.printDensity = getPrintDensity(article.offsetHeight);
      });
    };

    updateDensity();

    const resizeObserver = new ResizeObserver(updateDensity);
    resizeObserver.observe(article);

    window.addEventListener("resize", updateDensity);
    window.addEventListener("beforeprint", updateDensity);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDensity);
      window.removeEventListener("beforeprint", updateDensity);
      delete root.dataset.printDensity;
    };
  }, []);

  return null;
}
