"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon, Logo, type IconName } from "./Icon";
import { AssistantCard, BrowserMock, MiniRows } from "./Visuals";

const platforms: { name: string; icon: IconName; note: string; href?: string }[] = [
  {
    name: "Mac",
    icon: "apple",
    note: "macOS 12 or later",
    href: "https://5ohxxy1roe.ucarecd.net/612a7140-e160-4256-8c56-0cdf0ca5eb36/Saturn.dmg",
  },
  { name: "Windows", icon: "windows", note: "Windows 10 or later" },
  { name: "Linux", icon: "linux", note: ".deb and .rpm packages" },
];

const views = [
  { id: "browse", label: "Browse", icon: "globe" as IconName },
  { id: "zarah", label: "Zarah", icon: "spark" as IconName },
  { id: "spaces", label: "Spaces", icon: "tabs" as IconName },
];

/** Product-page style block: gallery on the left, sticky "buy" panel on the right. */
export function BuyPanel() {
  const [platform, setPlatform] = useState(platforms[0]);
  const [view, setView] = useState("browse");

  return (
    <div className="pdp">
      <div>
        <div className="pdp-gallery">
          <span className="gallery-chip"><Icon name="spark" />Zarah included</span>
          {view === "browse" && <BrowserMock />}
          {view === "zarah" && <div className="gallery-center"><AssistantCard /></div>}
          {view === "spaces" && (
            <div className="gallery-center on-dark spaces-card">
              <MiniRows
                rows={[
                  { icon: "tabs", label: "Trip planning", tag: "5 tabs" },
                  { icon: "tabs", label: "Work", tag: "8 tabs", hl: true },
                  { icon: "tabs", label: "Reading list", tag: "3 tabs" },
                ]}
              />
            </div>
          )}
        </div>
        <div className="thumbs" role="group" aria-label="Gallery views">
          {views.map((v) => (
            <button key={v.id} type="button" className="thumb" aria-pressed={view === v.id} onClick={() => setView(v.id)}>
              <Icon name={v.icon} />
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <aside className="buy-panel" aria-label="Get Saturn">
        <span className="buy-brand"><Logo size={22} />Saturn</span>
        <h3>Saturn</h3>
        <p className="buy-line">The browser with Zarah built in. <Link href="/approach">How we protect your privacy</Link></p>
        <p className="price">Free</p>
        <p className="buy-fin">Free to download and use.</p>

        <div className="swatches" role="radiogroup" aria-label="Computer">
          {platforms.map((p) => (
            <button key={p.name} type="button" role="radio" aria-checked={platform.name === p.name} aria-label={p.name} className="swatch" onClick={() => setPlatform(p)}>
              <Icon name={p.icon} />
            </button>
          ))}
        </div>
        <p className="opt-label"><strong>Computer:</strong> {platform.name}</p>

        <div className="opt-row"><span>Requirements</span><span>{platform.note}</span></div>
        <p className="avail">{platform.href ? "Available now" : "Coming soon"}</p>

        {platform.href ? (
          <a className="btn btn-primary btn-block" href={platform.href} download="Saturn.dmg" rel="noopener">Download for {platform.name}</a>
        ) : (
          <a className="btn btn-primary btn-block" href="#newsletter">Tell me when it is ready</a>
        )}
        <p className="buy-fine">By downloading, you agree to the <a href="#">Terms</a> and <Link href="/privacy-policy">Privacy Policy</Link>.</p>

        <ul className="benefits-row">
          <li><Icon name="download" />Free to download</li>
          <li><Icon name="import" />Imports your data</li>
          <li><Icon name="lock" />Private by default</li>
        </ul>
      </aside>
    </div>
  );
}
