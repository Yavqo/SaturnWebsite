"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";

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

const defaultNote = (
  <>By downloading, you agree to the <a href="#">Terms</a> and <Link href="/privacy-policy">Privacy Policy</Link>.</>
);

/** Platforms with an `href` download the installer; the others explain that theirs is coming soon. */
export function DownloadSection() {
  const [pending, setPending] = useState<string | null>(null);

  return (
    <section className="section" id="download">
      <div className="wrap">
        <Reveal className="section-head">
          <h2>Get Saturn</h2>
          <p>Pick your computer and Zarah will be ready the first time you open a page.</p>
        </Reveal>
        <div className="platforms">
          {platforms.map((p) => (
            <Reveal key={p.name} className="platform">
              <Icon name={p.icon} />
              <h3>{p.name}</h3>
              <p>{p.note}</p>
              {p.href ? (
                <a className="btn btn-primary" href={p.href} download="Saturn.dmg" rel="noopener">
                  Download for {p.name}
                </a>
              ) : (
                <button type="button" className="btn btn-primary" onClick={() => setPending(p.name)}>
                  Download for {p.name}
                </button>
              )}
            </Reveal>
          ))}
        </div>
        <p className="fine" role="status">
          {pending
            ? `The ${pending} installer is coming soon. Leave your email below and we will let you know.`
            : defaultNote}
        </p>
      </div>
    </section>
  );
}
