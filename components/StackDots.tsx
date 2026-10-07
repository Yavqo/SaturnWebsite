"use client";

import { useEffect, useState } from "react";

/** Progress dots for the stacked hero panels. Visible only while the stack is on screen. */
export function StackDots({ count }: { count: number }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const update = () => {
      const stack = document.querySelector<HTMLElement>(".stack");
      if (!stack) return;
      const rect = stack.getBoundingClientRect();
      const vh = window.innerHeight;
      setVisible(rect.top <= vh * 0.5 && rect.bottom > vh * 0.6);
      setActive(Math.min(count - 1, Math.max(0, Math.round(-rect.top / vh))));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [count]);

  const go = (i: number) => {
    const stack = document.querySelector<HTMLElement>(".stack");
    if (!stack) return;
    window.scrollTo({ top: stack.offsetTop + i * window.innerHeight, behavior: "smooth" });
  };

  return (
    <nav className={`stack-dots${visible ? " is-visible" : ""}`} aria-label="Intro panels">
      {Array.from({ length: count }, (_, i) => (
        <button key={i} type="button" aria-label={`Go to panel ${i + 1}`} aria-current={active === i} className={active === i ? "is-active" : ""} onClick={() => go(i)} />
      ))}
    </nav>
  );
}
