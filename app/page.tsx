import { DownloadSection } from "@/components/DownloadSection";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ZarahDemo } from "@/components/ZarahDemo";

const features: { title: string; text: string; rows: { icon: IconName; label: string; tag?: string; hl?: boolean }[] }[] = [
  {
    title: "Understand any page in seconds",
    text: "Zarah turns long articles, papers and threads into clear summaries, then answers follow-up questions.",
    rows: [
      { icon: "doc", label: "Long article, 12 min" },
      { icon: "spark", label: "Key points ready", tag: "2s", hl: true },
      { icon: "doc", label: "Ask a follow-up" },
    ],
  },
  {
    title: "Tabs that organise themselves",
    text: "Saturn groups related tabs into Spaces and tucks away the ones you have not touched, so you always find your place.",
    rows: [
      { icon: "tabs", label: "Trip planning", tag: "5 tabs" },
      { icon: "tabs", label: "Work", tag: "8 tabs", hl: true },
      { icon: "tabs", label: "Reading list", tag: "3 tabs" },
    ],
  },
  {
    title: "Fast, quiet and focused",
    text: "Built on a modern engine with ads and trackers blocked by default. Pages load fast and stay readable.",
    rows: [
      { icon: "lock", label: "Trackers blocked", tag: "38" },
      { icon: "globe", label: "Page loaded", tag: "0.6s", hl: true },
      { icon: "import", label: "Bookmarks imported" },
    ],
  },
];

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "download", title: "Free to download", text: "Saturn and Zarah cost nothing to use." },
  { icon: "import", title: "Import everything", text: "Bookmarks, passwords and history move over from Chrome, Safari or Firefox." },
  { icon: "lock", title: "Private by default", text: "Trackers are blocked from the first launch, with no setup." },
];

const faqs = [
  { q: "What is Saturn?", a: "Saturn is a web browser with an AI assistant called Zarah built in. You browse as usual, and Zarah is one click away whenever you want help." },
  { q: "Who is Zarah?", a: "Zarah is Saturn's assistant. She can summarise pages, answer questions about what you are reading, compare tabs and help you write. She works inside the browser, so there is nothing extra to install." },
  { q: "Can Zarah see everything I browse?", a: "No. Zarah only reads the page you are on when you ask her a question. She does not watch in the background, and you can turn her off in Settings." },
  { q: "Is Saturn free?", a: "Yes. Saturn and Zarah are free to download and use." },
  { q: "Will my extensions and bookmarks work?", a: "Your bookmarks, passwords and history import from other browsers during setup. Saturn does not support Chromium extensions. Once the beta is over, Saturn will have its own extensions instead." },
];

export default function Home() {
  return (
    <>
      <main id="main">
        {/* Hero */}
        <section className="hero on-dark" id="top">
          <p className="eyebrow">Meet Zarah</p>
          <h1>The browser that browses with you</h1>
          <p className="lead">
            Saturn has Zarah built in. She reads the page, answers your questions and handles the busywork, so you can get on with what matters.
          </p>
          <div className="btn-row center">
            <a className="btn btn-primary btn-lg" href="#download">Download Saturn</a>
            <a className="btn btn-secondary btn-lg" href="#zarah">See Zarah in action</a>
          </div>
          <p className="hero-note">Free for Mac, Windows and Linux.</p>

          <div className="hero-stage">
            <div className="browser" role="img" aria-label="The Saturn browser with the Zarah assistant open in a side panel, summarising an article about ocean currents.">
              <div className="browser-top">
                <div className="dots" aria-hidden="true"><i /><i /><i /></div>
                <div className="tabs" aria-hidden="true">
                  <div className="tab is-active"><Icon name="globe" />How ocean currents work</div>
                  <div className="tab"><Icon name="globe" />Flight to Lisbon</div>
                  <div className="tab"><Icon name="globe" />Recipe notes</div>
                </div>
              </div>
              <div className="browser-bar" aria-hidden="true">
                <div className="url"><Icon name="lock" />oceanjournal.example/currents</div>
                <div className="zarah-toggle"><Icon name="spark" /><span>Zarah</span></div>
              </div>
              <div className="browser-body" aria-hidden="true">
                <div className="page-mock">
                  <span className="kicker">Science · 8 min read</span>
                  <h3>How ocean currents shape the climate</h3>
                  <div className="skel w90" /><div className="skel w80" /><div className="skel w90" /><div className="skel w60" />
                  <div className="page-img" />
                  <div className="skel w80" /><div className="skel w70" />
                </div>
                <div className="assistant">
                  <div className="assistant-head">
                    <span className="avatar"><Icon name="spark" /></span>
                    <div>Zarah<small>Reading this page</small></div>
                  </div>
                  <div className="bubble user">Give me the short version</div>
                  <div className="bubble zarah">
                    Three points:
                    <ul>
                      <li>Currents move heat from the tropics to the poles.</li>
                      <li>Warming water is slowing the Atlantic loop.</li>
                      <li>Coastal weather is the first thing to change.</li>
                    </ul>
                  </div>
                  <div className="ask-field">Ask Zarah anything</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="section">
          <div className="wrap">
            <Reveal className="section-head" style={{ marginBottom: 0 }}>
              <h2>A browser that works with you</h2>
              <p>Most browsers show you the web. Saturn helps you do something with it. Zarah is part of the browser itself, not a tab you have to open.</p>
            </Reveal>
          </div>
        </section>

        {/* Zarah */}
        <section className="section band" id="zarah">
          <div className="wrap">
            <div className="split">
              <Reveal className="copy">
                <p className="eyebrow-dark">Your assistant</p>
                <h2>Say hello to Zarah</h2>
                <p>Ask a question about the page you are on, compare tabs, or have Zarah draft a reply. She sees what you see, and only when you ask.</p>
                <a className="btn btn-primary" href="#download">Get Saturn</a>
              </Reveal>
              <Reveal>
                <ZarahDemo />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" id="features">
          <div className="wrap">
            <Reveal className="section-head">
              <h2>Everything in one calm place</h2>
              <p>Saturn keeps the web simple, fast and out of your way.</p>
            </Reveal>
            <div className="cards-3">
              {features.map((f) => (
                <Reveal as="article" className="feature" key={f.title}>
                  <div className="feature-media on-dark">
                    <h3>{f.title}</h3>
                    <div className="mini" aria-hidden="true">
                      {f.rows.map((r) => (
                        <div key={r.label} className={`row${r.hl ? " hl" : ""}`}>
                          <Icon name={r.icon} />
                          {r.label}
                          {r.tag && <small>{r.tag}</small>}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p>{f.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section className="wrap" id="privacy" style={{ paddingBottom: 112 }}>
          <Reveal className="media-card on-dark">
            <div className="rings" aria-hidden="true">
              <svg viewBox="0 0 900 600" fill="none" stroke="#fff" strokeOpacity=".35">
                <ellipse cx="450" cy="300" rx="420" ry="120" transform="rotate(-14 450 300)" />
                <ellipse cx="450" cy="300" rx="340" ry="92" transform="rotate(-14 450 300)" />
                <ellipse cx="450" cy="300" rx="260" ry="64" transform="rotate(-14 450 300)" />
              </svg>
            </div>
            <div className="content">
              <p className="eyebrow">Private by design</p>
              <h2>Your browsing stays yours</h2>
              <p>Zarah only reads a page when you ask her to. Your history is never sold, and you can clear what she remembers at any time.</p>
              <div className="btn-row center">
                <a className="btn btn-primary btn-lg" href="#download">Download</a>
                <a className="btn btn-secondary btn-lg" href="#faq">Learn more</a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Benefits */}
        <section className="section band">
          <div className="wrap">
            <Reveal className="section-head">
              <h2>Switch in a minute</h2>
              <p>Bring your life with you and be browsing before the kettle boils.</p>
            </Reveal>
            <div className="cards-3">
              {benefits.map((b) => (
                <Reveal as="article" className="benefit" key={b.title}>
                  <Icon name={b.icon} />
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <DownloadSection />

        {/* FAQ */}
        <section className="section band" id="faq">
          <div className="wrap">
            <Reveal className="section-head"><h2>Frequently asked questions</h2></Reveal>
            <Reveal className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}<span className="plus" aria-hidden="true" /></summary>
                  <div className="answer">{f.a}</div>
                </details>
              ))}
            </Reveal>
          </div>
        </section>
      </main>

    </>
  );
}
