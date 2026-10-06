import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies | Saturn Browser",
  description: "How the Saturn website uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <main id="main" className="page">
      <div className="page-head">
        <h1>Cookies</h1>
        <p className="page-sub">How this website uses cookies, and what that means for you.</p>
        <p className="page-date">Last updated 6 October 2026</p>
      </div>

      <div className="prose">
        <h2>What cookies are</h2>
        <p>Cookies are small text files that a website saves on your device. Sites use them to remember settings, keep you signed in, or measure how people use the site.</p>

        <h2>What this website uses</h2>
        <p>The Saturn website does not set advertising or tracking cookies. It does not run analytics or share data about your visit with advertisers. Because of this, we do not show a cookie banner.</p>
        <p>If we add anything that needs your consent, such as analytics, we will ask you first and update this page before we do.</p>

        <div className="table-wrap">
          <table>
            <thead>
              <tr><th scope="col">Type</th><th scope="col">Used here</th><th scope="col">Purpose</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Essential</th><td>None at the moment</td><td>Would be used only to make the site work, for example to remember a choice you made.</td></tr>
              <tr><th scope="row">Analytics</th><td>No</td><td>We do not measure visits with cookies.</td></tr>
              <tr><th scope="row">Advertising</th><td>No</td><td>We do not show ads or build advertising profiles.</td></tr>
            </tbody>
          </table>
        </div>

        <h2>The Saturn browser is different</h2>
        <p>This page covers the website only. The Saturn browser handles cookies on the sites you visit, and blocks known trackers by default. You can change this in the browser's settings.</p>
        <p>Zarah does not use cookies to read your pages. Read more in <Link href="/approach">our approach</Link>.</p>

        <h2>Control cookies yourself</h2>
        <p>Every browser, including Saturn, lets you see, block and delete cookies from its settings. Blocking cookies will not stop this website from working.</p>

        <h2>Questions</h2>
        <p>If you have a question about this page, <Link href="/contact">contact us</Link>.</p>
      </div>
    </main>
  );
}
