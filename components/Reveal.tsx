"use client";

import { useEffect, useRef, useState } from "react";

/** Fades content in once as it enters the viewport. Content stays visible if JS or IntersectionObserver is unavailable. */
export function Reveal({ as: Tag = "div", className = "", children, ...rest }: {
  as?: "div" | "article" | "section";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduce || !("IntersectionObserver" in window)) return;
    setArmed(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const state = armed ? (shown ? " reveal is-in" : " reveal") : "";
  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={`${className}${state}`.trim()} {...rest}>
      {children}
    </Component>
  );
}
