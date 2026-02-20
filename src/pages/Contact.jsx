import { SITE } from "../data.js";
import { SR } from "../components/SR.jsx";

const css = `
.contact-page { padding-top: 56px; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; }
.contact-inner { padding: 6rem 0; }

.contact-big {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400; line-height: 0.95; letter-spacing: -0.02em; color: var(--text);
  margin-bottom: 3rem;
}
.contact-big em { font-style: italic; color: var(--a); display: block; }

.contact-body { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; margin-bottom: 4rem; }
.contact-body p { font-size: 1rem; color: var(--muted); line-height: 1.85; margin-bottom: 1.1rem; }

.contact-links { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }
.contact-row {
  display: flex; align-items: center; gap: 1.6rem; padding: 1.5rem 1.8rem;
  background: var(--bg2); text-decoration: none; color: inherit;
  transition: background 0.25s; position: relative; overflow: hidden;
}
.contact-row::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
  background: var(--a); transform: scaleY(0); transform-origin: top; transition: transform 0.3s;
}
.contact-row:hover { background: var(--bg3); }
.contact-row:hover::before { transform: scaleY(1); }

.contact-icon {
  width: 44px; height: 44px; flex-shrink: 0;
  background: var(--bg3); border-radius: 9px; border: 1px solid var(--border2);
  display: flex; align-items: center; justify-content: center; color: var(--a);
  transition: border-color 0.2s, background 0.2s;
}
.contact-row:hover .contact-icon { border-color: var(--a-border); background: var(--a-dim); }
.contact-icon svg { width: 21px; height: 21px; }

.contact-text { flex: 1; min-width: 0; }
.contact-lbl { font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted2); margin-bottom: 0.3rem; }
.contact-val { font-size: 1.05rem; color: var(--text); }

.contact-arr { font-size: 1rem; color: var(--muted2); flex-shrink: 0; margin-left: auto; transition: transform 0.2s, color 0.2s; }
.contact-row:hover .contact-arr { transform: translate(3px,-3px); color: var(--a); }

.contact-note {
  border-top: 1px solid var(--border); padding-top: 3rem;
  display: flex; align-items: center; gap: 0.7rem;
  font-family: var(--mono); font-size: 0.80rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted2);
}

@media (max-width: 768px) { .contact-body { grid-template-columns: 1fr; gap: 2.5rem; } }
@media (max-width: 480px) { .contact-inner { padding: 4rem 0; } .contact-row { padding: 1.2rem 1.4rem; } }
`;

const LINKS = [
  {
    label: "Email", val: SITE.email, href: `https://mail.google.com/mail/?view=cm&to=${SITE.email}`, ext: true, arr: "↗",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>,
  },
  {
    label: "LinkedIn", val: "linkedin.com/in/21satvikkumar", href: SITE.linkedin, ext: true, arr: "↗",
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>,
  },
  {
    label: "GitHub", val: "github.com/21satvik", href: SITE.github, ext: true, arr: "↗",
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>,
  },
  ...(SITE.cvLink && SITE.cvLink !== "#" ? [{
    label: "Curriculum Vitae", val: "Download PDF", href: SITE.cvLink, ext: false, arr: "↓",
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-5h8v1H8v-1zm0-3h8v1H8v-1zm0-3h4v1H8V9z"/></svg>,
  }] : []),
];

export default function Contact() {
  return (
    <>
      <style>{css}</style>
      <div className="contact-page">
        <section className="contact-inner">
          <div className="wrap">
            <SR>
              <span className="eyebrow">Contact</span>
              <h1 className="contact-big">Let's<em>talk.</em></h1>
            </SR>
            <div className="contact-body">
              <SR delay={80}>
                <div>
                  <p>Open to roles in analytics, strategy, and data science — especially where technical and business thinking need to meet.</p>
                  <p>If you're working on something interesting, reach out. I respond to emails.</p>
                </div>
              </SR>
              <SR delay={120}>
                <div className="contact-links">
                  {LINKS.map(l => (
                    <a key={l.label} href={l.href} target={l.ext ? "_blank" : undefined} rel="noopener noreferrer" className="contact-row">
                      <div className="contact-icon">{l.icon}</div>
                      <div className="contact-text">
                        <div className="contact-lbl">{l.label}</div>
                        <div className="contact-val">{l.val}</div>
                      </div>
                      <span className="contact-arr">{l.arr}</span>
                    </a>
                  ))}
                </div>
              </SR>
            </div>
            <SR delay={160}>
              <div className="contact-note">
                <span className="pulse-dot" />
                Available for opportunities · Usually responds within 24h
              </div>
            </SR>
          </div>
        </section>
      </div>
    </>
  );
}