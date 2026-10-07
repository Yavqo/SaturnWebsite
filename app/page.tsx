import Link from "next/link";
import { BuyPanel } from "@/components/BuyPanel";
import { HeroVideo } from "@/components/HeroVideo";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { StackDots } from "@/components/StackDots";
import { AssistantCard, MiniRows, type Row } from "@/components/Visuals";
import { ZarahDemo } from "@/components/ZarahDemo";

const summaryRows: Row[] = [
  { icon: "doc", label: "Long article, 12 min" },
  { icon: "spark", label: "Key points ready", tag: "2s", hl: true },
  { icon: "doc", label: "Ask a follow-up" },
];

const spaceRows: Row[] = [
  { icon: "tabs", label: "Trip planning", tag: "5 tabs" },
  { icon: "tabs", label: "Work", tag: "8 tabs", hl: true },
  { icon: "tabs", label: "Reading list", tag: "3 tabs" },
];

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "download", title: "Free to download", text: "Saturn and Zarah cost nothing to use." },
  { icon: "import", title: "Import everything", text: "Bookmarks, passwords and history move over from Chrome, Safari or Firefox." },
  { icon: "lock", title: "Private by default", text: "Trackers are blocked from the first launch, with no setup." },
];

const specs: [string, string][] = [
  ["Mac", "macOS 12 or later"],
  ["Windows", "Windows 10 or later (coming soon)"],
  ["Linux", ".deb and .rpm packages (coming soon)"],
  ["Assistant", "Zarah, built into the browser"],
  ["Import from", "Chrome, Safari and Firefox: bookmarks, passwords and history"],
  ["Extensions", "Chromium extensions are not supported. Saturn will have its own extensions after the beta."],
  ["Price", "Free"],
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
    <main id="main">
      {/* Stacked hero panels: each one slides over the last as you scroll */}
      <div className="stack hero" id="top">
        <section className="panel panel-video on-dark" id="panel-1" aria-labelledby="p1">
          <HeroVideo />
          <p className="eyebrow">Introducing Saturn</p>
          <h1 id="p1">The browser that browses with you</h1>
          <div className="btn-row center">
            <a className="btn btn-primary btn-lg" href="#download">Download</a>
            <a className="btn btn-secondary btn-lg" href="#zarah">Learn more</a>
          </div>
        </section>

        <section className="panel on-dark" id="panel-2" aria-labelledby="p2">
          <p className="eyebrow">Meet Zarah</p>
          <h2 id="p2">Ask anything, right on the page</h2>
          <div className="btn-row center">
            <a className="btn btn-primary btn-lg" href="#zarah">See Zarah</a>
          </div>
          <div className="panel-visual panel-visual-center">
            <span className="fchip chip-a"><Icon name="spark" />Summarise this page</span>
            <AssistantCard />
            <span className="fchip chip-b"><Icon name="tabs" />Compare my tabs</span>
          </div>
        </section>

        <section className="panel on-dark" id="panel-3" aria-labelledby="p3">
          <p className="eyebrow">Private by design</p>
          <h2 id="p3">Your browsing stays yours</h2>
          <div className="btn-row center">
            <Link className="btn btn-primary btn-lg" href="/approach">Our approach</Link>
          </div>
          <div className="panel-visual panel-visual-center">
            <div className="rings" aria-hidden="true">
              <svg viewBox="0 0 900 600" fill="none" stroke="#fff" strokeOpacity=".35">
                <ellipse cx="450" cy="300" rx="420" ry="120" transform="rotate(-14 450 300)" />
                <ellipse cx="450" cy="300" rx="340" ry="92" transform="rotate(-14 450 300)" />
                <ellipse cx="450" cy="300" rx="260" ry="64" transform="rotate(-14 450 300)" />
              </svg>
            </div>
            <div className="chip-cloud">
              <span className="fchip"><Icon name="lock" />38 trackers blocked</span>
              <span className="fchip"><Icon name="spark" />Zarah reads only when asked</span>
              <span className="fchip"><Icon name="doc" />History stays on your device</span>
            </div>
          </div>
        </section>
      </div>
      <StackDots count={3} />

      {/* Product sub-bar */}
      <div className="subbar">
        <div className="subbar-inner">
          <span className="subbar-name">Saturn</span>
          <div className="subbar-right">
            <div className="subbar-price"><small>Price</small><strong>Free</strong></div>
            <a className="btn btn-primary" href="#download">Download</a>
          </div>
        </div>
      </div>

      {/* Flagship media card */}
      <section className="wrap section-tight" id="zarah">
        <Reveal className="media-card on-dark">
          <div className="visual" aria-hidden="true">
            <div className="bubble user">Give me the short version</div>
            <div className="bubble zarah">Currents move heat from the tropics to the poles, and warming water is slowing the Atlantic loop.</div>
          </div>
          <div className="content">
            <p className="eyebrow">Your assistant</p>
            <h2>Say hello to Zarah</h2>
            <p>She reads the page, answers your questions and handles the busywork, only when you ask.</p>
            <div className="btn-row center">
              <a className="btn btn-primary btn-lg" href="#download">Download</a>
              <a className="btn btn-secondary btn-lg" href="#demo">Try Zarah</a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Two-up square cards */}
      <section className="wrap" id="features">
        <div className="two-up">
          <Reveal className="media-card square on-dark">
            <div className="visual"><MiniRows rows={summaryRows} /></div>
            <div className="content">
              <p className="eyebrow">Read less, know more</p>
              <h2>Understand any page in seconds</h2>
              <div className="btn-row center"><a className="btn btn-secondary" href="#demo">Try it</a></div>
            </div>
          </Reveal>
          <Reveal className="media-card square on-dark">
            <div className="visual"><MiniRows rows={spaceRows} /></div>
            <div className="content">
              <p className="eyebrow">Spaces</p>
              <h2>Tabs that organise themselves</h2>
              <div className="btn-row center"><a className="btn btn-secondary" href="#download">Get Saturn</a></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* See it in action */}
      <section className="section band" id="demo">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>See it in action</h2>
            <p>Pick a question and watch how Zarah answers.</p>
          </Reveal>
          <Reveal className="demo-wrap"><ZarahDemo /></Reveal>
        </div>
      </section>

      {/* Privacy */}
      <section className="wrap section-tight" id="privacy">
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
              <Link className="btn btn-primary btn-lg" href="/approach">Our approach</Link>
              <a className="btn btn-secondary btn-lg" href="#download">Download</a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Benefit cards */}
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

      {/* Get Saturn: gallery + buy panel */}
      <section className="section" id="download">
        <div className="wrap">
          <BuyPanel />
        </div>
      </section>

      {/* Collapsible sections */}
      <section className="wrap section-tight">
        <div className="faq">
          <details>
            <summary>Specs<span className="plus" aria-hidden="true" /></summary>
            <div className="answer">
              <dl className="specs">
                {specs.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
          </details>
        </div>
      </section>

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
  );
}
