import { Link } from "react-router-dom";
import { SITE } from "../data.js";
import { useEffect, useState } from "react";

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent));
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return mobile;
}

const css = `
.footer {
  border-top: 1px solid var(--border);
  background: var(--bg2);
  padding: 3rem 0 2rem;
}
.footer-inner {
  display: grid; grid-template-columns: 1fr auto 1fr;
  align-items: start; gap: 2rem;
}
.footer-brand {
  display: flex; flex-direction: column; gap: 0.5rem;
}
.footer-name {
  font-family: var(--serif); font-style: italic; font-size: 1.1rem; color: var(--text);
}
.footer-tagline {
  font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--muted2);
}
.footer-nav {
  display: flex; gap: 2rem; list-style: none;
  justify-content: center; flex-wrap: wrap;
}
.footer-nav a {
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--muted); transition: color 0.2s;
}
.footer-nav a:hover { color: var(--a); }
.footer-right {
  display: flex; flex-direction: column; align-items: flex-end; gap: 0.7rem;
}
.footer-socials {
  display: flex; gap: 1.2rem; align-items: center;
}
.footer-social {
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted); transition: color 0.2s;
  display: flex; align-items: center; gap: 0.4rem;
}
.footer-social:hover { color: var(--a); }
.footer-social svg { width: 13px; height: 13px; }
.footer-bottom {
  margin-top: 2.5rem; padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
}
.footer-copy {
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.08em;
  color: var(--muted2);
}
.footer-avail {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--a);
}
.footer-avail-dot {
  width: 6px; height: 6px; border-radius: 50%; background: #4ade80;
  box-shadow: 0 0 8px #4ade80; animation: pulseDot 2.5s ease-in-out infinite;
}

@media (max-width: 720px) {
  .footer { padding: 2rem 0 1.5rem; }
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 0;
  }
  /* Brand row + socials side by side at top */
  .footer-brand {
    display: flex; flex-direction: row;
    align-items: center; justify-content: space-between;
    padding-bottom: 1.2rem; border-bottom: 1px solid var(--border);
    margin-bottom: 0;
  }
  .footer-tagline { display: block; font-size: 0.68rem; }
  /* Socials inline with brand */
  .footer-right { align-items: flex-end; gap: 0; order: 2; }
  .footer-socials { gap: 1rem; }
  .footer-social span { display: none; } /* hide text labels, keep icons only */
  .footer-social svg { width: 18px; height: 18px; }
  /* Nav links as a compact wrap row */
  .footer-nav {
    order: 3;
    justify-content: flex-start;
    gap: 0;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border);
  }
  .footer-nav li { width: 50%; }
  .footer-nav a {
    display: block; padding: 0.45rem 0;
    font-size: 0.72rem;
  }
  .footer-bottom {
    margin-top: 1rem; padding-top: 1rem;
    flex-direction: column; align-items: flex-start; gap: 0.5rem;
  }
}
`;

const NAV_LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Work",     to: "/work" },
  { label: "Projects", to: "/projects" },
  { label: "Impact",   to: "/impact" },
  { label: "Contact",  to: "/contact" },
];

export default function Footer() {
  const isMobile = useIsMobile();
  const emailHref = isMobile ? `mailto:${SITE.email}` : `https://mail.google.com/mail/?view=cm&to=${SITE.email}`;
  return (
    <>
      <style>{css}</style>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-inner">
            {/* Brand */}
            <div className="footer-brand">
              <span className="footer-name">{SITE.name}</span>
              <span className="footer-tagline">Data · Analytics · Strategy</span>
            </div>

            {/* Nav */}
            <ul className="footer-nav">
              {NAV_LINKS.map(l => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>

            {/* Socials */}
            <div className="footer-right">
              <div className="footer-socials">
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  LinkedIn
                </a>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="footer-social">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                  GitHub
                </a>
                <a href={emailHref} target={isMobile ? undefined : "_blank"} rel="noopener noreferrer" className="footer-social">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">© {new Date().getFullYear()} {SITE.name} · Dublin, Ireland</span>
            <span className="footer-avail">
              <span className="footer-avail-dot" />
              Open to opportunities
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}