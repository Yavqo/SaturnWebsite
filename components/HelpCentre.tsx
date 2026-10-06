"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Article = { q: string; a: React.ReactNode; text: string };
type Topic = { id: string; title: string; blurb: string; articles: Article[] };

const art = (q: string, a: string): Article => ({ q, a, text: a });

const topics: Topic[] = [
  {
    id: "getting-started",
    title: "Getting started",
    blurb: "Install and set up",
    articles: [
      art("How do I install Saturn?", "Download the installer for your computer from the Download section on the home page, open it and follow the steps. Saturn is free."),
      art("How do I import my bookmarks and passwords?", "During setup Saturn offers to import from other browsers. You can pick what to bring over: bookmarks, passwords and history."),
      art("Can I use my Chromium extensions?", "No. Saturn does not support Chromium extensions. Once the beta is over, Saturn will have its own extensions instead."),
    ],
  },
  {
    id: "zarah",
    title: "Using Zarah",
    blurb: "Your assistant",
    articles: [
      art("How do I talk to Zarah?", "Open Zarah from the button in the address bar. She opens in a side panel next to the page you are on, and you ask her anything in plain words."),
      art("What can Zarah do?", "Zarah can summarise a page, answer questions about it, compare your open tabs and help you draft replies."),
      art("Can Zarah be wrong?", "Yes. Zarah can make mistakes, so check the source for anything important, such as health, money or legal matters."),
      art("How do I turn Zarah off?", "Open Settings and switch Zarah off. While she is off, she cannot read any page."),
    ],
  },
  {
    id: "privacy",
    title: "Privacy and data",
    blurb: "What Saturn keeps",
    articles: [
      art("When does Zarah read a page?", "Only when you ask her a question. She does not read pages in the background."),
      art("Where is my browsing history stored?", "On your device. It leaves your device only if you choose to sync it."),
      art("How do I clear what Zarah remembers?", "Open Settings, go to Zarah and choose Clear memory. This cannot be undone."),
      art("Does Saturn block trackers?", "Yes. Known ads and trackers are blocked by default from the first launch."),
    ],
  },
  {
    id: "emails",
    title: "News emails",
    blurb: "Subscribe or stop",
    articles: [
      art("How do I unsubscribe from Saturn news?", "Open any email from us and use the unsubscribe link at the bottom. You will be asked to confirm, and then we stop emailing you."),
      art("I did not get my confirmation email", "Check your spam folder first. If it is not there, try subscribing again from the footer of this website, or contact us."),
      art("I subscribed by mistake", "Use the unsubscribe link in the confirmation email. It works straight away."),
    ],
  },
];

export function HelpCentre() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<string | null>(null);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return topics
      .filter((t) => !topic || t.id === topic)
      .map((t) => ({
        ...t,
        articles: t.articles.filter((a) => !q || a.q.toLowerCase().includes(q) || a.text.toLowerCase().includes(q)),
      }))
      .filter((t) => t.articles.length);
  }, [query, topic]);

  return (
    <>
      <div className="help-hero">
        <h1>Help Centre</h1>
        <p className="page-sub" style={{ maxWidth: 620, marginInline: "auto" }}>How can we help?</p>
        <div className="help-search" role="search">
          <svg aria-hidden="true"><use href="#i-search" /></svg>
          <input
            type="search"
            aria-label="Search the Help Centre"
            placeholder="Search for help"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <p className="help-fine">Search covers help articles only. We never use what you type here for ads.</p>
      </div>

      <div className="topic-tiles">
        {topics.map((t) => (
          <button
            key={t.id}
            type="button"
            className="topic-tile"
            aria-pressed={topic === t.id}
            onClick={() => setTopic(topic === t.id ? null : t.id)}
          >
            {t.title}
            <small>{t.blurb}</small>
          </button>
        ))}
      </div>

      <div aria-live="polite">
        {shown.length === 0 && <p className="help-empty">No articles match your search. Try different words, or contact us below.</p>}
        {shown.map((t) => (
          <section className="help-group" key={t.id}>
            <h2>{t.title}</h2>
            <div className="faq">
              {t.articles.map((a) => (
                <details key={a.q}>
                  <summary>{a.q}<span className="plus" aria-hidden="true" /></summary>
                  <div className="answer">{a.a}</div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="help-contact">
        <h2>Still need help?</h2>
        <p>Tell us what is going wrong and we will get back to you. You can also read our <Link href="/privacy-policy">Privacy Policy</Link> or <Link href="/approach">our approach</Link>.</p>
        <Link className="btn btn-primary" href="/contact">Contact us</Link>
      </div>
    </>
  );
}
