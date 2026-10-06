import Image from "next/image";

export type IconName =
  | "saturn" | "spark" | "arrow" | "menu" | "close" | "lock" | "doc" | "tabs"
  | "download" | "import" | "globe" | "laptop" | "grid" | "terminal";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <symbol id="i-saturn" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="7" fill="currentColor" />
          <ellipse cx="16" cy="16" rx="14" ry="5" transform="rotate(-24 16 16)" fill="none" stroke="currentColor" strokeWidth="2" />
        </symbol>
        <symbol id="i-spark" viewBox="0 0 24 24">
          <path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7Z" fill="currentColor" />
          <path d="M19 15.5c.25 1.7.8 2.25 2.5 2.5-1.7.25-2.25.8-2.5 2.5-.25-1.7-.8-2.25-2.5-2.5 1.7-.25 2.25-.8 2.5-2.5Z" fill="currentColor" />
        </symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8.5 12h7m-3-3 3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" {...stroke} /></symbol>
        <symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" {...stroke} /></symbol>
        <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5" {...stroke} /><path d="m16 16 4 4" {...stroke} /></symbol>
        <symbol id="i-lock" viewBox="0 0 24 24">
          <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" {...stroke} />
          <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" {...stroke} />
        </symbol>
        <symbol id="i-doc" viewBox="0 0 24 24">
          <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5Z" {...stroke} />
          <path d="M14 3.5V8h4M9 12.5h6M9 16h6" {...stroke} />
        </symbol>
        <symbol id="i-tabs" viewBox="0 0 24 24">
          <rect x="3.5" y="6.5" width="17" height="13" rx="2.5" {...stroke} />
          <path d="M3.5 10.5h17M9 6.5v4" {...stroke} />
        </symbol>
        <symbol id="i-download" viewBox="0 0 24 24"><path d="M12 4v11m-4.5-4.5L12 15l4.5-4.5M5 19.5h14" {...stroke} /></symbol>
        <symbol id="i-import" viewBox="0 0 24 24"><path d="M4 12h12m-4-4 4 4-4 4M20 5v14" {...stroke} /></symbol>
        <symbol id="i-globe" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8.5" {...stroke} />
          <path d="M3.5 12h17M12 3.5c2.5 2.4 3.6 5.2 3.6 8.5s-1.1 6.1-3.6 8.5c-2.5-2.4-3.6-5.2-3.6-8.5S9.5 5.9 12 3.5Z" {...stroke} />
        </symbol>
        <symbol id="i-laptop" viewBox="0 0 40 40">
          <rect x="7" y="9" width="26" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M3 31.5h34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </symbol>
        <symbol id="i-grid" viewBox="0 0 40 40">
          {[[6, 6], [21.5, 6], [6, 21.5], [21.5, 21.5]].map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="12.5" height="12.5" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          ))}
        </symbol>
        <symbol id="i-terminal" viewBox="0 0 40 40">
          <rect x="5" y="7" width="30" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 16l6 5-6 5M22 27h7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
      </defs>
    </svg>
  );
}

/** Saturn logo. Pass `size` for the height in px; width follows the artwork's aspect ratio. */
export function Logo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/brand/saturn-logo.png"
      alt=""
      width={Math.round(size * (640 / 387))}
      height={size}
      priority
      style={{ height: size, width: "auto" }}
    />
  );
}
