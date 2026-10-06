import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our approach | Saturn Browser",
  description: "How Saturn and Zarah are designed to respect your privacy and keep you in control.",
};

const principles: { icon: IconName; title: string; text: string }[] = [
  { icon: "spark", title: "Zarah helps when asked", text: "She reads a page only when you ask her a question. She does not watch in the background." },
  { icon: "lock", title: "Private by default", text: "Trackers are blocked from the first launch. You do not need to find a setting to turn this on." },
  { icon: "doc", title: "You stay in control", text: "You can see what Zarah remembers, clear it at any time, or turn her off completely." },
];

const sections = [
  {
    title: "Zarah reads only when you ask",
    body: [
      "Zarah is built into Saturn, but she is not always listening or reading. When you open her panel and ask a question, she reads the page you are on to answer it. When you close the panel, she stops.",
      "She will never read a page in a private window unless you ask her to in that window.",
    ],
  },
  {
    title: "Your history is yours",
    body: [
      "We do not sell your browsing history, and we do not use it to build advertising profiles. Bookmarks, passwords and history stay on your device unless you choose to sync them.",
    ],
  },
  {
    title: "Honest about what AI can do",
    body: [
      "Zarah is good at summarising, comparing and drafting, but she can make mistakes. Where she uses a page to answer, she tells you which one, so you can check for yourself. For anything important, such as health, money or legal matters, check the source.",
    ],
  },
  {
    title: "Simple choices, no tricks",
    body: [
      "Settings are written in plain words. Privacy options are never hidden behind a confusing flow, and turning something off is as easy as turning it on.",
    ],
  },
];

export default function ApproachPage() {
  return (
    <main id="main" className="page page-wide">
      <div className="page-head center">
        <h1>Our approach</h1>
        <p className="page-sub">A browser should work for you. These are the rules we build Saturn and Zarah by.</p>
      </div>

      <div className="cards-3 approach-cards">
        {principles.map((p) => (
          <Reveal as="article" className="benefit" key={p.title}>
            <Icon name={p.icon} />
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </div>

      <div className="prose approach-prose">
        {sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {s.body.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </section>
        ))}
        <p>
          For how this website uses cookies, see our <Link href="/cookies">cookies page</Link>.
        </p>
        <div className="btn-row" style={{ marginTop: 32 }}>
          <Link className="btn btn-primary" href="/#download">Get Saturn</Link>
          <Link className="btn btn-outline" href="/#faq">Read the FAQ</Link>
        </div>
      </div>
    </main>
  );
}
