import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { person } from "@/data/content";
import { Cursor } from "./Cursor";

const links = [
  { to: "/work", label: "Work" },
  { to: "/approach", label: "Approach" },
  { to: "/writing", label: "Writing" },
  { to: "/about", label: "About" },
];

export function Layout() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const nightFirst = pathname === "/" || /^\/work\/[^/]+$/.test(pathname);
  const [paper, setPaper] = useState(!nightFirst);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
    const nightFirst = pathname === "/" || /^\/work\/[^/]+$/.test(pathname);
    setPaper(!nightFirst);
    const titles: Record<string, string> = {
      "/": "John Jayasankar — Lead Product Manager",
      "/work": "Work — John Jayasankar",
      "/approach": "Approach — John Jayasankar",
      "/writing": "Writing — John Jayasankar",
      "/about": "About — John Jayasankar",
      "/agentfit": "AgentFit — John Jayasankar",
    };
    document.title = titles[pathname] ?? (pathname.startsWith("/work/") ? "Case — John Jayasankar" : titles["/"]);
  }, [pathname]);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12);
      const probe = document.elementFromPoint(Math.min(window.innerWidth / 2, 640), 88);
      if (!probe) {
        setPaper(pathname !== "/");
        return;
      }
      const night = probe.closest(".hero, .contact, .case-hero, .case-visual-band");
      const cream = probe.closest(".paper, .case-body");
      setPaper(Boolean(cream) && !night);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Cursor />
      <header className={`site-header${scrolled ? " scrolled" : ""}${paper ? " on-cream" : ""}`}>
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="John Jayasankar home">
            <span className="brand-mark">J</span>
            <span className="brand-name">Jayasankar</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end className={({ isActive }) => (isActive ? "active" : "")}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-cta">
            <a href={person.resume} target="_blank" rel="noreferrer">
              Résumé
            </a>
            <a href={`mailto:${person.email}`}>Email</a>
          </div>
          <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span />
          </button>
        </div>
      </header>
      <nav className={`mobile-nav${open ? " open" : ""}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <a href={`mailto:${person.email}`}>Email</a>
      </nav>
      <main id="content">
        <Outlet />
      </main>
    </>
  );
}

export function SiteFooter({ night = false }: { night?: boolean }) {
  return (
    <footer className="wrap site-footer" style={night ? undefined : { borderColor: "var(--line)", color: "var(--muted)" }}>
      <span>John Jayasankar · New York · {new Date().getFullYear()}</span>
      <span>Lead Product Manager · AI agents · financial infrastructure</span>
    </footer>
  );
}
