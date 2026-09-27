"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const main = document.getElementById("main-content");
    if (main) {
      main.tabIndex = -1;
      main.focus({ preventScroll: true });
    }
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
      className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-white bg-brand-300 text-brand-950 shadow-lg shadow-brand-950/20 hover:bg-brand-400"
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  );
}
