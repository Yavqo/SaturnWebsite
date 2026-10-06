"use client";

import { useState } from "react";

const topics = ["Help with Saturn", "Help with Zarah", "Privacy and my data", "Feedback", "Something else"];

type Fields = Partial<Record<"name" | "email" | "topic" | "message", string>>;

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Fields>({});
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("loading");
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors(json.fields ?? {});
        setMessage(json.error ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }
      form.reset();
      setState("done");
    } catch {
      setMessage("Something went wrong. Please try again.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="prose" role="status">
        <h2>Message sent</h2>
        <p>Thanks for getting in touch. We will reply to the email address you gave us.</p>
        <div className="btn-row" style={{ marginTop: 24 }}>
          <button type="button" className="btn btn-outline" onClick={() => setState("idle")}>Send another message</button>
        </div>
      </div>
    );
  }

  const err = (k: keyof Fields) =>
    errors[k] ? <p className="field-error" id={`err-${k}`}>{errors[k]}</p> : null;
  const invalid = (k: keyof Fields) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `err-${k}` } : {});

  return (
    <form className="contact-form" noValidate onSubmit={submit}>
      <div className={`field${errors.name ? " has-error" : ""}`}>
        <input type="text" id="c-name" name="name" placeholder=" " autoComplete="name" required maxLength={100} {...invalid("name")} />
        <label htmlFor="c-name">Your name</label>
        {err("name")}
      </div>
      <div className={`field${errors.email ? " has-error" : ""}`}>
        <input type="email" id="c-email" name="email" placeholder=" " autoComplete="email" required {...invalid("email")} />
        <label htmlFor="c-email">Email address</label>
        {err("email")}
      </div>
      <div className={`field${errors.topic ? " has-error" : ""}`}>
        <select id="c-topic" name="topic" required defaultValue={topics[0]} {...invalid("topic")}>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
        <label htmlFor="c-topic">Topic</label>
        {err("topic")}
      </div>
      <div className={`field${errors.message ? " has-error" : ""}`}>
        <textarea id="c-message" name="message" placeholder=" " required maxLength={5000} {...invalid("message")} />
        <label htmlFor="c-message">How can we help?</label>
        {err("message")}
      </div>
      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      <div className="btn-row" style={{ alignItems: "center" }}>
        <button className="btn btn-primary btn-lg" type="submit" disabled={state === "loading"}>
          {state === "loading" ? "Sending" : "Send message"}
        </button>
        <span className="form-status error" role="alert">{state === "error" ? message : ""}</span>
      </div>
    </form>
  );
}
