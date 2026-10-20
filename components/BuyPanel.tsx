"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon, Logo, type IconName } from "./Icon";
import { AssistantCard, BrowserMock, MiniRows } from "./Visuals";

const DOWNLOAD_URL = "https://apps.yavqo.com/product/saturn";

const views = [
  { id: "browse", label: "Browse", icon: "globe" as IconName },
  { id: "zarah", label: "Zarah", icon: "spark" as IconName },
  { id: "spaces", label: "Spaces", icon: "tabs" as IconName },
];

/** Product-page style block: gallery on the left, sticky "buy" panel on the right. */
export function BuyPanel() {
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

        <a className="btn btn-primary btn-block" href={DOWNLOAD_URL} rel="noopener">Download Saturn</a>
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
