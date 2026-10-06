"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

const answers = {
  summary: {
    label: "Summarise this page",
    answer: (
      <>
        <p>This article explains how ocean currents move heat around the planet.</p>
        <ul>
          <li>Currents carry warm water from the tropics to the poles.</li>
          <li>The Atlantic loop is slowing as the ocean warms.</li>
          <li>Coastal weather is the first thing to shift.</li>
        </ul>
      </>
    ),
  },
  compare: {
    label: "Compare my open tabs",
    answer: (
      <>
        <p>You have two flights to Lisbon open.</p>
        <ul>
          <li>Morning flight: €142, one stop, lands at 14:10.</li>
          <li>Direct flight: €168, lands at 11:25.</li>
        </ul>
        <p style={{ marginTop: 8 }}>The direct flight costs €26 more and saves you three hours.</p>
      </>
    ),
  },
  draft: {
    label: "Draft a reply",
    answer: (
      <>
        <p>Here is a short reply to Sam:</p>
        <p style={{ marginTop: 8 }}>&ldquo;Thanks for the update. Thursday works for me. Could you send the agenda beforehand so I can prepare?&rdquo;</p>
      </>
    ),
  },
  find: {
    label: "Find the best price",
    answer: (
      <>
        <p>I checked the three shops you have open.</p>
        <ul>
          <li>Shop A: €89, free delivery.</li>
          <li>Shop B: €84, €6 delivery.</li>
          <li>Shop C: €92, free returns.</li>
        </ul>
        <p style={{ marginTop: 8 }}>Shop A is the cheapest once delivery is included.</p>
      </>
    ),
  },
} as const;

type Key = keyof typeof answers;

export function ZarahDemo() {
  const [active, setActive] = useState<Key | null>(null);
  const [typing, setTyping] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const ask = (key: Key) => {
    clearTimeout(timer.current);
    setActive(key);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return setTyping(false);
    setTyping(true);
    timer.current = setTimeout(() => setTyping(false), 900);
  };

  return (
    <div className="demo" aria-label="Zarah demo">
      <div className="demo-head">
        <span className="avatar" style={{ width: 44, height: 44 }}><Icon name="spark" /></span>
        <div>
          <strong>Zarah</strong>
          <span>Try asking</span>
        </div>
      </div>
      <div className="chat" aria-live="polite">
        {active ? (
          <>
            <div className="bubble user">{answers[active].label}</div>
            <div className="bubble zarah">
              {typing ? (
                <span className="typing" aria-label="Zarah is typing"><i /><i /><i /></span>
              ) : (
                answers[active].answer
              )}
            </div>
          </>
        ) : (
          <div className="bubble zarah">Hi, I am Zarah. Pick a question and I will show you what I can do.</div>
        )}
      </div>
      <div className="chips" role="group" aria-label="Example questions">
        {(Object.keys(answers) as Key[]).map((key) => (
          <button key={key} type="button" className="chip" aria-pressed={active === key} onClick={() => ask(key)}>
            {answers[key].label}
          </button>
        ))}
      </div>
    </div>
  );
}
