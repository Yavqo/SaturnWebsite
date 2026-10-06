"use client";

import Link from "next/link";
import { useState } from "react";

type State = "idle" | "loading" | "done" | "error";

/** Subscribe button stays disabled until the email is valid. Posts to /api/subscribe, which sends the confirmation email. */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!valid || state === "loading") return;
    const company = new FormData(e.currentTarget).get("company");
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong. Please try again.");
      setState("done");
      setEmail("");
      setValid(false);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setState("error");
    }
  }

  return (
    <div className="news">
      <p>Get news about Saturn and new things Zarah can do.</p>
      <form noValidate onSubmit={submit}>
        <div className="field">
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" "
            autoComplete="email"
            required
            value={email}
            aria-describedby="news-status"
            onChange={(e) => {
              setEmail(e.target.value);
              setValid(e.target.checkValidity());
              if (state !== "loading") setState("idle");
            }}
          />
          <label htmlFor="email">Email address</label>
        </div>
        {/* Honeypot for bots; hidden from people and assistive tech. */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
        <button className="btn btn-primary" type="submit" disabled={!valid || state === "loading"}>
          {state === "loading" ? "Sending" : "Subscribe"}
        </button>
      </form>
      <p className="legal">We will only email you about Saturn. Read our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
      <div id="news-status" role="status">
        {state === "done" && <p className="ok">Thanks. Check your inbox for a confirmation email.</p>}
        {state === "error" && <p className="ok" style={{ color: "var(--y-negative)" }}>{message}</p>}
      </div>
    </div>
  );
}
