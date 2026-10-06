"use client";

import { useState } from "react";

export function UnsubscribeForm({ token, masked }: { token: string; masked: string }) {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit() {
    setState("loading");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="prose" role="status">
        <p>You have been unsubscribed. We will not email <strong>{masked}</strong> again.</p>
      </div>
    );
  }

  return (
    <div className="prose">
      <p>Stop Saturn news emails to <strong>{masked}</strong>?</p>
      <div className="btn-row" style={{ marginTop: 24 }}>
        <button type="button" className="btn btn-primary" onClick={submit} disabled={state === "loading"}>
          {state === "loading" ? "Unsubscribing" : "Unsubscribe"}
        </button>
      </div>
      {state === "error" && <p role="alert" style={{ marginTop: 16, color: "var(--y-negative)" }}>Something went wrong. Please try again.</p>}
    </div>
  );
}
