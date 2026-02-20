import { useState, useEffect } from "react";
import { VOLUNTEERING, ACHIEVEMENTS, ACCESSIBILITY } from "../data.js";
import { SR } from "../components/SR.jsx";

const css = `
.impact-page { padding-top: 56px; min-height: 100vh; }

/* ── HERO ── */
.impact-hero { padding: 5rem 0 4rem; border-bottom: 1px solid var(--border); }
.impact-title {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400; line-height: 0.95; letter-spacing: -0.02em; color: var(--text);
}
.impact-title em { font-style: italic; color: var(--a); display: block; }
.impact-sub { font-size: 1.05rem; color: var(--muted); margin-top: 2rem; max-width: 460px; line-height: 1.75; }

/* ── SHARED SECTION WRAPPER ── */
.impact-section { padding: 5rem 0; border-bottom: 1px solid var(--border); }
.impact-section-header { margin-bottom: 3.5rem; }
.impact-section-eyebrow {
  font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--muted2); margin-bottom: 3.5rem;
  display: flex; align-items: center; gap: 1rem;
}
.impact-section-eyebrow::after { content: ''; flex: 1; height: 1px; background: var(--border); }
.impact-section-title {
  font-family: var(--serif);
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  font-weight: 400; color: var(--text); line-height: 1.1;
}
.impact-section-title em { font-style: italic; color: var(--a); }

/* ── ACCESSIBILITY OPENING ── */
.acc-opening-grid {
  display: grid; grid-template-columns: 180px 1fr; gap: 4rem; align-items: start;
  margin-bottom: 4rem;
}
.acc-opening-label {
  font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--muted2); padding-top: 0.3rem;
}
.acc-opening-text {
  font-family: var(--serif);
  font-size: clamp(1.2rem, 2.2vw, 1.75rem);
  font-weight: 400; color: var(--text); line-height: 1.5;
}
.acc-opening-text em { font-style: italic; color: var(--a); }

/* ── ACCESSIBILITY PROJECT CARDS ── */
.acc-project {
  display: grid; grid-template-columns: 1fr 1fr;
  border: 1px solid var(--border); margin-bottom: 1px;
  background: var(--bg2); transition: background 0.3s;
  position: relative; overflow: hidden;
}
.acc-project:last-child { margin-bottom: 0; }
.acc-project:hover { background: var(--bg3); }
.acc-project::after {
  content: ''; position: absolute;
  top: 0; left: 0; bottom: 0; width: 2px;
  background: var(--a);
  transform: scaleY(0); transform-origin: top;
  transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
}
.acc-project:hover::after { transform: scaleY(1); }

.acc-project-left {
  padding: 3rem 2.8rem;
  border-right: 1px solid var(--border);
  display: flex; flex-direction: column; justify-content: space-between;
}
.acc-project-num {
  font-family: var(--serif); font-style: italic;
  font-size: 4.5rem; line-height: 1; color: var(--border2);
  margin-bottom: 1.2rem; display: block; transition: color 0.3s;
}
.acc-project:hover .acc-project-num { color: var(--a-border); }
.acc-project-name {
  font-family: var(--serif); font-size: 1.4rem; font-weight: 400;
  color: var(--text); line-height: 1.2; margin-bottom: 0.4rem;
}
.acc-project-meta-row {
  font-family: var(--mono); font-size: 0.77rem; letter-spacing: 0.1em;
  color: var(--muted2); display: flex; gap: 0.8rem; flex-wrap: wrap;
}
.acc-project-logo-row {
  display: flex; align-items: center; gap: 0.8rem; margin-top: 2rem;
}
.acc-logo-sm {
  width: 32px; height: 32px; flex-shrink: 0; background: white;
  border-radius: 6px; display: flex; align-items: center; justify-content: center;
  padding: 3px; overflow: hidden;
}
.acc-logo-sm img { width: 100%; height: 100%; object-fit: contain; }
.acc-org-name {
  font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.08em; color: var(--muted);
}
.acc-tag-row { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 1.5rem; }
.acc-tag {
  font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.06em;
  padding: 0.2rem 0.6rem; background: var(--bg3);
  border: 1px solid var(--border2); color: var(--muted); transition: all 0.2s;
}
.acc-project:hover .acc-tag { border-color: var(--a-border); color: var(--a); }
.acc-site-link {
  font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--a); text-decoration: none;
  display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 1rem;
  transition: color 0.2s; border-bottom: 1px solid var(--a-border); padding-bottom: 2px;
}
.acc-site-link:hover { color: var(--a-bright); }

.acc-project-right { padding: 3rem 2.8rem; }
.acc-project-body { font-size: 1rem; color: var(--muted); line-height: 1.85; }

.acc-gif-wrap {
  margin-top: 1.8rem; border: 1px solid var(--border);
  overflow: hidden; background: var(--bg3);
  max-width: 360px;
}
.acc-gif { width: 100%; display: block; }

.acc-quote {
  border-left: 2px solid var(--a-border); padding-left: 1.3rem; margin-top: 1.8rem;
}
.acc-quote-text {
  font-family: var(--serif); font-style: italic;
  font-size: 1rem; color: var(--muted); line-height: 1.75; margin-bottom: 0.7rem;
}
.acc-quote-author {
  font-family: var(--mono); font-size: 0.72rem;
  letter-spacing: 0.1em; color: var(--a); text-transform: uppercase;
}

/* ── CLOSING STATEMENT ── */
.acc-closing {
  display: grid; grid-template-columns: 160px 1fr; gap: 4rem; align-items: center;
  margin-top: 4rem;
}
.acc-closing-line {
  width: 1px; height: 100px;
  background: linear-gradient(to bottom, var(--a), transparent);
  margin: 0 auto;
}
.acc-closing-text {
  font-family: var(--serif); font-size: clamp(1rem, 1.6vw, 1.3rem);
  font-weight: 400; color: var(--muted); line-height: 1.7;
}
.acc-closing-text em { font-style: italic; color: var(--text); }

/* ── VOLUNTEERING TIMELINE ── */
.vol-list { display: flex; flex-direction: column; }
.vol-item {
  display: grid; grid-template-columns: 200px 1fr; gap: 4rem;
  padding: 3rem 0; border-bottom: 1px solid var(--border);
}
.vol-item:first-child { padding-top: 0; }
.vol-item:last-child { border-bottom: none; }
.vol-left { padding-top: 0.2rem; }
.vol-period { font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.1em; color: var(--a-bright); margin-bottom: 0.4rem; display: block; }
.vol-cause-badge {
  font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.12em;
  text-transform: uppercase; padding: 0.2rem 0.6rem;
  background: var(--a-dim); border: 1px solid var(--a-border); color: var(--a);
  display: inline-block; margin-top: 0.5rem;
}
.vol-right-header { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 0.25rem; }
.vol-logo-wrap {
  width: 38px; height: 38px; flex-shrink: 0; background: white;
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
  padding: 4px; overflow: hidden; margin-top: 3px;
}
.vol-logo { width: 100%; height: 100%; object-fit: contain; }
.vol-logo-fb {
  width: 38px; height: 38px; flex-shrink: 0; background: var(--bg3);
  border-radius: 8px; border: 1px solid var(--border2); margin-top: 3px;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 1rem; color: var(--a);
}
.vol-org { font-family: var(--serif); font-size: 1.4rem; font-weight: 400; color: var(--text); margin-bottom: 0.15rem; }
.vol-role-line { font-size: 1rem; color: var(--muted); }
.vol-event { font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--a); margin: 0.8rem 0 1rem; }
.vol-desc { font-size: 0.97rem; color: var(--muted); line-height: 1.8; }

/* ── ACHIEVEMENTS ── */
.ach-grid {
  display: grid; grid-template-columns: 1fr 1fr 1fr;
  gap: 1px; background: var(--border); border: 1px solid var(--border);
}
.ach-card {
  background: var(--bg2); padding: 2rem;
  transition: background 0.25s; position: relative; overflow: hidden;
  display: flex; flex-direction: column; gap: 0.55rem;
}
.ach-card:hover { background: var(--bg3); }
.ach-card::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0;
  height: 2px; background: linear-gradient(90deg, var(--a), transparent);
  transform: scaleX(0); transform-origin: left; transition: transform 0.35s;
}
.ach-card:hover::after { transform: scaleX(1); }
.ach-tag { font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--a-bright); display: block; }
.ach-title { font-family: var(--serif); font-size: 1.02rem; font-weight: 400; color: var(--text); line-height: 1.3; }
.ach-desc { font-size: 0.91rem; color: var(--muted); line-height: 1.65; flex: 1; }
.ach-footer { margin-top: auto; padding-top: 0.8rem; border-top: 1px solid var(--border); }
.ach-issuer { font-family: var(--mono); font-size: 0.8rem; letter-spacing: 0.06em; color: var(--muted2); display: block; }
.ach-year { font-family: var(--mono); font-size: 0.8rem; color: var(--muted2); display: block; margin-top: 0.15rem; }

/* ── CERTS ── */
.cert-section { padding: 4.5rem 0; }
.cert-list { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }
.cert-row {
  background: var(--bg2); padding: 1rem 1.5rem;
  display: flex; align-items: center; justify-content: space-between;
  gap: 2rem; transition: background 0.2s;
}
.cert-row:hover { background: var(--bg3); }
.cert-row-left { display: flex; align-items: center; gap: 1rem; flex: 1; min-width: 0; }
.cert-logo-wrap {
  width: 26px; height: 26px; flex-shrink: 0; background: white;
  border-radius: 4px; display: flex; align-items: center; justify-content: center;
  padding: 3px; overflow: hidden;
}
.cert-logo { width: 100%; height: 100%; object-fit: contain; }
.cert-logo-fb {
  width: 26px; height: 26px; flex-shrink: 0; background: var(--bg3);
  border-radius: 4px; border: 1px solid var(--border2);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 0.68rem; color: var(--a);
}
.cert-tag-pill {
  font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.12em;
  text-transform: uppercase; padding: 0.18rem 0.5rem;
  background: var(--bg3); border: 1px solid var(--border2); color: var(--muted2); white-space: nowrap;
}
.cert-title { font-size: 0.95rem; color: var(--text); }
.cert-right { display: flex; align-items: center; gap: 1.5rem; flex-shrink: 0; }
.cert-issuer { font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.06em; color: var(--muted2); }
.cert-year { font-family: var(--mono); font-size: 0.73rem; color: var(--muted2); }

/* ── LEFT PANEL IMAGE ── */
.acc-left-img-wrap {
  margin: 1.5rem 0; border: 1px solid var(--border);
  overflow: hidden; background: var(--bg3); flex-shrink: 0;
}
.acc-left-img { width: 100%; display: block; }

/* ── LIGHTBOX ── */
.lightbox-overlay {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.92);
  display: flex; align-items: center; justify-content: center;
  padding: 2rem; cursor: zoom-out;
  animation: lb-in 0.2s cubic-bezier(0.16,1,0.3,1);
}
@keyframes lb-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.lightbox-img {
  max-width: 90vw; max-height: 88vh;
  object-fit: contain; display: block;
  box-shadow: 0 40px 120px rgba(0,0,0,0.8);
  animation: lb-scale 0.25s cubic-bezier(0.16,1,0.3,1);
  cursor: default;
}
@keyframes lb-scale {
  from { transform: scale(0.92); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}
.lightbox-close {
  position: fixed; top: 1.5rem; right: 1.5rem;
  width: 40px; height: 40px;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 1.1rem; color: rgba(255,255,255,0.7);
  transition: all 0.15s; z-index: 1001;
}
.lightbox-close:hover { background: rgba(255,255,255,0.15); color: #fff; }

/* clickable image cursor */
.acc-left-img-wrap { cursor: zoom-in; }

/* ── RESPONSIVE ── */
@media (max-width: 900px) { .ach-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 860px) {
  .acc-project { grid-template-columns: 1fr; }
  .acc-project-left { border-right: none; border-bottom: 1px solid var(--border); padding: 2rem; }
  .acc-project-right { padding: 2rem; }
  .acc-project-num { font-size: 3rem; }
  .acc-opening-grid { grid-template-columns: 1fr; gap: 1.5rem; }
  .acc-closing { grid-template-columns: 1fr; gap: 2rem; }
  .acc-closing-line { display: none; }
}
@media (max-width: 720px) {
  .vol-item { grid-template-columns: 1fr; gap: 1.2rem; }
  .vol-left { display: flex; flex-wrap: wrap; gap: 1rem; align-items: baseline; }
}
@media (max-width: 520px) {
  .ach-grid { grid-template-columns: 1fr; }
  .cert-row { flex-direction: column; align-items: flex-start; gap: 0.4rem; }
}
`;

const ACC_TAGS = [
  ["Swift", "iOS Safari", "Spatial Audio", "Haptics", "Computer Vision", "Open Source"],
  ["Flutter", "Firebase", "Maps API", "Dart"],
];
const ACC_ORGS = ["McGill University · Mitacs Globalink", "SRMIST · Ultron 5.0"];

const highlights = ACHIEVEMENTS.filter(a => a.highlight);
const certs = ACHIEVEMENTS.filter(a => !a.highlight);

function VolLogo({ logo, org }) {
  return (
    <div className="vol-logo-wrap">
      <img src={logo} alt={org} className="vol-logo"
        onError={e => {
          const fb = document.createElement("div");
          fb.className = "vol-logo-fb";
          fb.textContent = org.slice(0, 2).toUpperCase();
          e.target.closest(".vol-logo-wrap").replaceWith(fb);
        }}
      />
    </div>
  );
}

function CertLogo({ logo, issuer }) {
  if (!logo) return <div className="cert-logo-fb">{issuer.slice(0, 2).toUpperCase()}</div>;
  return (
    <div className="cert-logo-wrap">
      <img src={logo} alt={issuer} className="cert-logo"
        onError={e => {
          const fb = document.createElement("div");
          fb.className = "cert-logo-fb";
          fb.textContent = issuer.slice(0, 2).toUpperCase();
          e.target.closest(".cert-logo-wrap").replaceWith(fb);
        }}
      />
    </div>
  );
}

export default function Impact() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <style>{css}</style>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img
            src={lightbox}
            className="lightbox-img"
            alt="Enlarged view"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      <div className="impact-page">

        {/* ── HERO ── */}
        <section className="impact-hero">
          <div className="wrap">
            <SR>
              <span className="eyebrow">Impact</span>
              <h1 className="impact-title">
                Beyond the<em>day job.</em>
              </h1>
              <p className="impact-sub">
                Accessibility work that reached real users. Community leadership. Recognition. The stuff that happens when you're genuinely interested in the field rather than just working in it.
              </p>
            </SR>
          </div>
        </section>

        {/* ── ACCESSIBILITY ── */}
        <section className="impact-section">
          <div className="wrap">
            <SR>
              <div className="impact-section-eyebrow">Accessibility</div>
            </SR>

            <SR delay={40}>
              <div className="acc-opening-grid">
                <span className="acc-opening-label">Why this matters</span>
                <p className="acc-opening-text">
                  I didn&apos;t set out to specialise in accessibility. But two projects brought me there, and both times I found myself{" "}
                  <em>more invested than I expected.</em>
                </p>
              </div>
            </SR>

            {ACCESSIBILITY.projects.map((p, i) => (
              <SR key={i} delay={i * 80}>
                <div className="acc-project">

                  <div className="acc-project-left">
                    <div>
                      <span className="acc-project-num">0{i + 1}</span>
                      <div className="acc-project-name">{p.name}</div>
                      <div className="acc-project-meta-row">
                        <span>{p.year}</span><span>·</span><span>{p.location}</span>
                      </div>
                      {p.siteUrl && (
                        <a href={p.siteUrl} target="_blank" rel="noopener noreferrer" className="acc-site-link">
                          image.a11y.mcgill.ca ↗
                        </a>
                      )}
                      {p.archUrl && (
                        <a href="https://github.com/21satvik/enAble-mobile-app" target="_blank" rel="noopener noreferrer" className="acc-site-link">
                          github ↗
                        </a>
                      )}
                    </div>

                    {/* Image lives in left panel */}
                    {p.sampleImg && (
                      <div className="acc-left-img-wrap" onClick={() => setLightbox(p.sampleImg)}>
                        <img src={p.sampleImg} alt="IMAGE project sample rendering" className="acc-left-img" />
                      </div>
                    )}
                    {p.archUrl && (
                      <div className="acc-left-img-wrap" onClick={() => setLightbox(p.archUrl)}>
                        <img src={p.archUrl} alt="enAble architecture" className="acc-left-img" />
                      </div>
                    )}

                    <div>
                      <div className="acc-tag-row">
                        {ACC_TAGS[i].map(t => <span key={t} className="acc-tag">{t}</span>)}
                      </div>
                      <div className="acc-project-logo-row">
                        <div className="acc-logo-sm">
                          <img src={p.logo} alt="" onError={e => { e.target.style.display = "none"; }} />
                        </div>
                        <span className="acc-org-name">{ACC_ORGS[i]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="acc-project-right">
                    <p className="acc-project-body">{p.body}</p>

                    {p.quote && (
                      <div className="acc-quote">
                        <p className="acc-quote-text">&ldquo;{p.quote}&rdquo;</p>
                        <span className="acc-quote-author">— {p.quoteAuthor}</span>
                      </div>
                    )}
                  </div>

                </div>
              </SR>
            ))}

            <SR delay={160}>
              <div className="acc-closing">
                <div className="acc-closing-line" />
                <p className="acc-closing-text">
                  These two projects aren&apos;t the core of what I do professionally. But they shaped how I think about{" "}
                  <em>who gets to use the things we build</em>
                  {" "}— and that thinking shows up in everything else.
                </p>
              </div>
            </SR>
          </div>
        </section>

        {/* ── LEADERSHIP & COMMUNITY ── */}
        <section className="impact-section">
          <div className="wrap">
            <SR>
              <div className="impact-section-eyebrow">Leadership &amp; Community</div>
              <h2 className="impact-section-title">
                Giving back to the <em>community</em>
              </h2>
            </SR>
            <div className="vol-list">
              {VOLUNTEERING.map((v, i) => (
                <SR key={i} delay={i * 60}>
                  <div className="vol-item">
                    <div className="vol-left">
                      <span className="vol-period">{v.period}</span>
                      <span className="vol-cause-badge">{v.cause}</span>
                    </div>
                    <div>
                      <div className="vol-right-header">
                        <VolLogo logo={v.logo} org={v.org} />
                        <div>
                          <div className="vol-org">{v.org}</div>
                          <div className="vol-role-line">{v.role}</div>
                        </div>
                      </div>
                      <div className="vol-event">{v.event}</div>
                      <p className="vol-desc">{v.description}</p>
                    </div>
                  </div>
                </SR>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section className="impact-section">
          <div className="wrap">
            <SR>
              <div className="impact-section-eyebrow">Achievements</div>
              <h2 className="impact-section-title">
                Recognition that <em>meant something</em>
              </h2>
            </SR>
            <SR delay={80} stagger>
              <div className="ach-grid">
                {highlights.map((a, i) => (
                  <div key={i} className="ach-card">
                    <span className="ach-tag">{a.tag}</span>
                    <div className="ach-title">{a.title}</div>
                    {a.description && <p className="ach-desc">{a.description}</p>}
                    <div className="ach-footer">
                      <span className="ach-issuer">{a.issuer}</span>
                      <span className="ach-year">{a.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SR>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="cert-section">
          <div className="wrap">
            <SR>
              <div className="impact-section-eyebrow">Certifications</div>
              <h2 className="impact-section-title" style={{ marginBottom: "2rem" }}>
                Keeping the <em>skills sharp</em>
              </h2>
            </SR>
            <SR delay={80}>
              <div className="cert-list">
                {certs.map((c, i) => (
                  <div key={i} className="cert-row">
                    <div className="cert-row-left">
                      <CertLogo logo={c.logo} issuer={c.issuer} />
                      <span className="cert-tag-pill">{c.tag}</span>
                      <span className="cert-title">{c.title}</span>
                    </div>
                    <div className="cert-right">
                      <span className="cert-issuer">{c.issuer}</span>
                      <span className="cert-year">{c.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SR>
          </div>
        </section>

        {/* ── FOOTER CTA ── */}
        <div className="wrap">
          <SR>
            <div style={{
              borderTop: "1px solid var(--border)", padding: "4rem 0",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: "2rem"
            }}>
              <p style={{
                fontFamily: "var(--serif)", fontStyle: "italic",
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)", color: "var(--muted)", lineHeight: 1.3
              }}>
                You've seen the work and the story.<br /><span style={{color: "var(--text)"}}>If it resonates, let's talk.</span>
              </p>
              <a href="#/contact" className="btn-fill">Get in touch →</a>
            </div>
          </SR>
        </div>

      </div>
    </>
  );
}