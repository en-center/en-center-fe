"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "li" | "figure";
  variant?: "fade" | "fade-up" | "scale";
  delay?: number;
  hover?: boolean;
  className?: string;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/** Visible without JavaScript. Reveals once per mount; keyboard focus skips motion. */
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "fade-up",
  delay,
  hover = false,
  className = "",
  ...attributes
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "pending" | "visible">("idle");
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    setState("pending");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );
    const onPreferenceChange = () => {
      if (preference.matches) {
        setState("idle");
        observer.disconnect();
      }
    };
    observer.observe(element);
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, []);
  return (
    <Tag
      {...attributes}
      ref={(element: HTMLElement | null) => {
        ref.current = element;
      }}
      data-reveal={variant}
      data-reveal-state={state}
      onFocusCapture={() => setState("idle")}
      className={`reveal ${hover ? "motion-hover" : ""} ${className}`}
      style={
        delay === undefined
          ? undefined
          : ({
              "--reveal-delay": `${Math.min(300, Math.max(0, delay))}ms`,
            } as CSSProperties)
      }
    >
      {children}
    </Tag>
  );
}
