import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { SITE } from "../data.js";

const css = `
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  height: 56px; display: flex; align-items: center; justify-content: space-between;
  padding: 0 2.5rem;
  transition: background 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(11,11,12,0.9);
  backdrop-filter: blur(20px) saturate(1.5);
  border-color: var(--border);
}
.nav-logo {
  font-family: var(--serif); font-size: 1.05rem; color: var(--text);
  letter-spacing: 0.01em; font-style: italic;
  display: flex; align-items: center; gap: 0.65rem; text-decoration: none;
}
.nav-avatar {
  width: 28px; height: 28px; border-radius: 50%;
  border: 1.5px solid var(--a-border); object-fit: cover; display: block;
  transition: border-color 0.2s;
}
.nav-logo:hover .nav-avatar { border-color: var(--a); }
.nav-name span { color: var(--a); font-style: normal; }
.nav-right { display: flex; align-items: center; gap: 2rem; }
.nav-links { display: flex; gap: 1.8rem; list-style: none; }
.nav-links a {
  font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--muted); transition: color 0.2s;
  position: relative; padding-bottom: 2px;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
  height: 1px; background: var(--a);
  transform: scaleX(0); transform-origin: left; transition: transform 0.25s;
}
.nav-links a:hover { color: var(--text); }
.nav-links a.active { color: var(--a-bright); }
.nav-links a.active::after, .nav-links a:hover::after { transform: scaleX(1); }
.nav-cv {
  font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--a);
  border: 1px solid var(--a-border); padding: 0.35rem 0.85rem; transition: all 0.2s;
  text-decoration: none;
}
.nav-cv:hover { background: var(--a-dim); color: var(--a-bright); }
.nav-burger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.nav-burger span { display: block; width: 20px; height: 1.5px; background: var(--muted); border-radius: 1px; }
.mob-menu {
  display: none; position: fixed; top: 56px; left: 0; right: 0; bottom: 0;
  background: rgba(11,11,12,0.98); backdrop-filter: blur(20px);
  flex-direction: column; justify-content: center; align-items: center;
  gap: 2.5rem; z-index: 199;
}
.mob-menu.open { display: flex; }
.mob-menu a {
  font-family: var(--serif); font-size: 2.2rem; font-style: italic;
  color: var(--muted); transition: color 0.2s; text-decoration: none;
}
.mob-menu a:hover, .mob-menu a.active { color: var(--text); }
@media (max-width: 720px) { .nav-links, .nav-cv { display: none; } .nav-burger { display: flex; } }
@media (max-width: 480px) { .nav { padding: 0 1.5rem; } }
`;

const LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Work",     to: "/work" },
  { label: "Projects", to: "/projects" },
  { label: "Impact",   to: "/impact" },
  { label: "Contact",  to: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <style>{css}</style>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <Link to="/" className="nav-logo">
          <img src={SITE.avatar} alt="Satvik" className="nav-avatar" />
          <span className="nav-name">{SITE.name.split(" ")[0]} <span>{SITE.name.split(" ")[1]}</span></span>
        </Link>
        <div className="nav-right">
          <ul className="nav-links">
            {LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={pathname === l.to ? "active" : ""}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <a href={SITE.cvLink} target="_blank" rel="noopener noreferrer" className="nav-cv">CV ↗</a>
        </div>
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mob-menu${open ? " open" : ""}`}>
        {LINKS.map(l => (
          <Link key={l.to} to={l.to} className={pathname === l.to ? "active" : ""}>{l.label}</Link>
        ))}
      </div>
    </>
  );
}