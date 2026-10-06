"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon, Logo } from "./Icon";

const links = [
  { href: "/#zarah", label: "Zarah" },
  { href: "/#features", label: "Features" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const solid = !isHome || scrolled;
  const [open, setOpen] = useState(false);
  const openBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector<HTMLElement>(".hero");
      setScrolled(hero ? window.scrollY > hero.offsetHeight - 80 : false);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const toggle = (next: boolean) => {
    setOpen(next);
    requestAnimationFrame(() => (next ? closeBtn : openBtn).current?.focus());
  };

  return (
    <>
      <header className={`header${solid ? " is-solid" : ""}`}>
        <div className="header-inner">
          <button ref={openBtn} className="menu-btn" aria-label="Open menu" aria-controls="mobileMenu" onClick={() => toggle(true)}>
            <Icon name="menu" />
          </button>
          <Link className="brand" href="/" aria-label="Saturn home">
            <Logo size={30} />
            Saturn
          </Link>
          <nav className="nav" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>
          <div className="nav-right">
            <Link href="/#faq">Support</Link>
            <Link className="btn btn-primary" href="/#download">Download</Link>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? " is-open" : ""}`} id="mobileMenu" role="dialog" aria-modal="true" aria-label="Menu" onClick={(e) => (e.target as HTMLElement).closest("a") && toggle(false)}>
        <button ref={closeBtn} className="mobile-close" aria-label="Close menu" onClick={() => toggle(false)}>
          <Icon name="close" />
        </button>
        {links.map((l) => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
        <Link className="btn btn-primary btn-lg" href="/#download">Download Saturn</Link>
      </div>
    </>
  );
}
