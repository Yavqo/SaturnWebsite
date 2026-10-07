"use client";

import { useEffect, useRef } from "react";

const SRC = "https://5ohxxy1roe.ucarecd.net/ab2139fa-38a6-4c00-b578-d95171a7b13f/sautnrvideobg.mp4";

/** Full-bleed background video: muted, looped, inline. Stays paused for people who prefer reduced motion. */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => (reduce.matches ? video.pause() : void video.play().catch(() => {}));
    sync();
    reduce.addEventListener("change", sync);
    return () => reduce.removeEventListener("change", sync);
  }, []);

  return (
    <div className="panel-bg" aria-hidden="true">
      <video ref={ref} src={SRC} autoPlay muted loop playsInline preload="auto" tabIndex={-1} />
      <div className="panel-shade" />
    </div>
  );
}
