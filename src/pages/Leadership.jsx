import { VOLUNTEERING, ACHIEVEMENTS } from "../data.js";
import { SR } from "../components/SR.jsx";

const css = `
.lead-page { padding-top: 56px; min-height: 100vh; }

/* ── HERO ── */
.lead-hero { padding: 5rem 0 4rem; border-bottom: 1px solid var(--border); }
.lead-title {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400; line-height: 0.95; letter-spacing: -0.02em; color: var(--text);
}
.lead-title em { font-style: italic; color: var(--a); display: block; }
.lead-sub { font-size: 1.05rem; color: var(--muted); margin-top: 2rem; max-width: 440px; line-height: 1.75; }

/* ── SECTION WRAPPER ── */
.lead-section { padding: 4.5rem 0; border-bottom: 1px solid var(--border); }
.lead-section-title {
  font-family: var(--serif);
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  font-weight: 400; color: var(--text); line-height: 1.1; margin-bottom: 2.5rem;
}
.lead-section-title em { font-style: italic; color: var(--a); }

/* ── VOLUNTEERING — matches Work page timeline style ── */
.vol-list { display: flex; flex-direction: column; }
.vol-item {
  display: grid; grid-template-columns: 220px 1fr; gap: 4rem;
  padding: 3rem 0; border-bottom: 1px solid var(--border);
}
.vol-item:first-child { padding-top: 0; }
.vol-item:last-child { border-bottom: none; }

.vol-left { padding-top: 0.2rem; }
.vol-period { font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.1em; color: var(--a-bright); margin-bottom: 0.4rem; display: block; }
.vol-cause-badge {
  font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.12em;
  text-transform: uppercase; padding: 0.2rem 0.6rem;
  background: var(--a-dim); border: 1px solid var(--a-border); color: var(--a);
  display: inline-block; margin-top: 0.5rem;
}

.vol-right-header { display: flex; align-items: flex-start; gap: 1.1rem; margin-bottom: 0.25rem; }
.vol-logo-wrap {
  width: 42px; height: 42px; flex-shrink: 0; background: white;
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
  padding: 5px; overflow: hidden; margin-top: 3px;
}
.vol-logo { width: 100%; height: 100%; object-fit: contain; }
.vol-logo-fb {
  width: 42px; height: 42px; flex-shrink: 0; background: var(--bg3);
  border-radius: 8px; border: 1px solid var(--border2); margin-top: 3px;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 1.07rem; color: var(--a);
}
.vol-org { font-family: var(--serif); font-size: 1.45rem; font-weight: 400; color: var(--text); margin-bottom: 0.15rem; }
.vol-role-line { font-size: 1.07rem; color: var(--muted); }
.vol-event { font-family: var(--mono); font-size: 0.77rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--a); margin: 0.8rem 0 1.2rem; }
.vol-desc { font-size: 0.98rem; color: var(--muted); line-height: 1.8; border-left: 2px solid var(--a-border); padding-left: 1.1rem; font-style: italic; }

/* ── ACHIEVEMENTS GRID — matches Education card grid ── */
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

.ach-tag {
  font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--a-bright); display: block;
}
.ach-title {
  font-family: var(--serif); font-size: 1.05rem; font-weight: 400;
  color: var(--text); line-height: 1.3;
}
.ach-desc { font-size: 0.93rem; color: var(--muted); line-height: 1.65; flex: 1; }
.ach-footer { margin-top: auto; padding-top: 0.8rem; border-top: 1px solid var(--border); }
.ach-issuer { font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.06em; color: var(--muted2); display: block; }
.ach-year   { font-family: var(--mono); font-size: 0.85rem; color: var(--muted2); display: block; margin-top: 0.15rem; }

/* ── CERTIFICATIONS ── */
.cert-section { padding: 4.5rem 0; }
.cert-list { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }
.cert-row {
  background: var(--bg2); padding: 1.1rem 1.6rem;
  display: flex; align-items: center; justify-content: space-between;
  gap: 2rem; transition: background 0.2s;
}
.cert-row:hover { background: var(--bg3); }
.cert-row-left { display: flex; align-items: center; gap: 1rem; flex: 1; min-width: 0; }
.cert-logo-wrap {
  width: 28px; height: 28px; flex-shrink: 0; background: white;
  border-radius: 5px; display: flex; align-items: center; justify-content: center;
  padding: 3px; overflow: hidden;
}
.cert-logo { width: 100%; height: 100%; object-fit: contain; }
.cert-logo-fb {
  width: 28px; height: 28px; flex-shrink: 0; background: var(--bg3);
  border-radius: 5px; border: 1px solid var(--border2);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 0.73rem; color: var(--a);
}
.cert-tag-pill {
  font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.12em;
  text-transform: uppercase; padding: 0.2rem 0.55rem;
  background: var(--bg3); border: 1px solid var(--border2);
  color: var(--muted2); white-space: nowrap; flex-shrink: 0;
}
.cert-title { font-size: 0.98rem; color: var(--text); }
.cert-right { display: flex; align-items: center; gap: 1.5rem; flex-shrink: 0; }
.cert-issuer { font-family: var(--mono); font-size: 0.77rem; letter-spacing: 0.06em; color: var(--muted2); }
.cert-year   { font-family: var(--mono); font-size: 0.77rem; color: var(--muted2); }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .vol-item { grid-template-columns: 1fr; gap: 1.2rem; }
  .vol-left { display: flex; flex-wrap: wrap; gap: 1rem; align-items: baseline; }
  .ach-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 520px) {
  .ach-grid { grid-template-columns: 1fr; }
  .cert-row { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
}
`;

function VolLogo({ logo, org }) {
  return (
    <div className="vol-logo-wrap">
      <img
        src={logo}
        alt={org}
        className="vol-logo"
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
  if (!logo) {
    return (
      <div className="cert-logo-fb">{issuer.slice(0, 2).toUpperCase()}</div>
    );
  }
  return (
    <div className="cert-logo-wrap">
      <img
        src={logo}
        alt={issuer}
        className="cert-logo"
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

const highlights = ACHIEVEMENTS.filter(a => a.highlight);
const certs      = ACHIEVEMENTS.filter(a => !a.highlight);

export default function Leadership() {
  return (
    <>
      <style>{css}</style>
      <div className="lead-page">

        {/* Hero */}
        <section className="lead-hero">
          <div className="wrap">
            <SR>
              <span className="eyebrow">Leadership & Extra</span>
              <h1 className="lead-title">
                Beyond the<em>day job.</em>
              </h1>
              <p className="lead-sub">
                Leading teams, mentoring students, building open-source. The stuff that happens when you're genuinely interested in the field rather than just working in it.
              </p>
            </SR>
          </div>
        </section>

        {/* Volunteering / Leadership */}
        <section className="lead-section">
          <div className="wrap">
            <SR>
              <span className="eyebrow">Leadership & Community</span>
              <h2 className="lead-section-title">
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

        {/* Achievements */}
        <section className="lead-section">
          <div className="wrap">
            <SR>
              <span className="eyebrow">Achievements</span>
              <h2 className="lead-section-title">
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

        {/* Certifications */}
        <section className="cert-section">
          <div className="wrap">
            <SR>
              <span className="eyebrow">Certifications</span>
              <h2 className="lead-section-title" style={{marginBottom:"2rem"}}>
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

      </div>
    </>
  );
}