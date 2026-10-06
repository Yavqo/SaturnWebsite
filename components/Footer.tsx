import Link from "next/link";
import { Logo } from "./Icon";
import { Newsletter } from "./Newsletter";

const cols = [
  { title: "Product", links: [["Zarah", "/#zarah"], ["Features", "/#features"], ["Download", "/#download"]] },
  { title: "Privacy", links: [["Our approach", "/approach"], ["Privacy Policy", "/privacy-policy"], ["Cookies", "/cookies"]] },
  { title: "Support", links: [["FAQ", "/#faq"], ["Help Centre", "/help"], ["Contact us", "/contact"]] },
  { title: "Company", links: [["About Yavqo", "https://yavqo.com/about"], ["Blog", "https://blog.yavqo.com"], ["Careers", "#"]] },
];

export function Footer() {
  return (
    <footer className="footer">
      <Newsletter />
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand" href="/"><Logo size={30} />Saturn</Link>
          <p>The browser with Zarah built in.</p>
        </div>
        <div className="footer-cols">
          {cols.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    {/^https?:/.test(href) ? <a href={href} rel="noopener">{label}</a> : <Link href={href}>{label}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Yavqo</span>
        <nav aria-label="Legal">
          <a href="#">Terms</a>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/cookies">Cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
