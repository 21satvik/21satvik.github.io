import { EXPERIENCE } from "../data.js";
import { SR } from "../components/SR.jsx";
import { useEffect } from "react";

const css = `
.work-page { padding-top: 56px; min-height: 100vh; }

.work-hero { padding: 5rem 0 4rem; border-bottom: 1px solid var(--border); }
.work-title {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400; line-height: 0.95; letter-spacing: -0.02em; color: var(--text);
}
.work-title em { font-style: italic; color: var(--a); display: block; }
.work-sub { font-size: 1.05rem; color: var(--muted); margin-top: 2rem; max-width: 420px; line-height: 1.75; }

/* Card list */
.work-list { padding: 4rem 0; display: flex; flex-direction: column; gap: 1px; background: var(--border); }

.work-card {
  background: var(--bg2);
  display: grid; grid-template-columns: 260px 1fr;
  position: relative; overflow: hidden; transition: background 0.3s;
}
.work-card:hover { background: var(--bg3); }
.work-card::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--a); transform: scaleY(0); transform-origin: top;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
}
.work-card:hover::before { transform: scaleY(1); }

/* Left — logo + meta */
.work-card-left {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; padding: 3.5rem 2rem;
  border-right: 1px solid var(--border); gap: 2rem;
  background: var(--bg);
}
.work-logo-wrap {
  width: 120px; height: 120px; flex-shrink: 0;
  background: white; border-radius: 24px;
  display: flex; align-items: center; justify-content: center;
  padding: 14px; overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
}
.work-logo { width: 100%; height: 100%; object-fit: contain; }
.work-logo-fb {
  width: 120px; height: 120px; flex-shrink: 0;
  background: var(--bg3); border-radius: 24px; border: 1px solid var(--border2);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 1.6rem; color: var(--a);
}
.work-card-meta { text-align: center; display: flex; flex-direction: column; gap: 0.4rem; }
.work-period {
  font-family: var(--mono); font-size: 0.82rem; letter-spacing: 0.06em;
  color: var(--a-bright); white-space: nowrap; display: block;
}
.work-loc {
  font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.06em;
  color: var(--muted2); white-space: nowrap; display: block;
}

/* Right — all content */
.work-card-right { padding: 3.5rem 3.5rem; display: flex; flex-direction: column; gap: 2rem; }

/* Header */
.work-card-header { display: flex; flex-direction: column; gap: 0.6rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border); }
.work-company {
  font-family: var(--serif); font-size: 2.4rem; font-weight: 400;
  color: var(--text); line-height: 1;
}
.work-role-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.work-role { font-size: 1.05rem; color: var(--muted); }
.work-dept {
  font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--a);
  padding: 0.2rem 0.75rem;
  background: var(--a-dim); border: 1px solid var(--a-border);
}

/* Body */
.work-desc {
  font-size: 1.05rem; color: var(--muted); line-height: 1.85;
  font-style: italic;
  border-left: 2px solid var(--a-border); padding-left: 1.3rem;
}
.work-bullets { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
.work-bullets li {
  font-size: 1.02rem; color: var(--muted); padding-left: 1.5rem;
  position: relative; line-height: 1.7;
}
.work-bullets li::before {
  content: ''; position: absolute; left: 0; top: 0.68em;
  width: 5px; height: 5px; border-radius: 50%; background: var(--a);
}

/* Tags footer */
.work-tags-footer {
  padding-top: 1.8rem; border-top: 1px solid var(--border);
  display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap;
}
.work-tags-lbl {
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--muted2); flex-shrink: 0;
}
.work-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.work-tag {
  font-family: var(--mono); font-size: 0.77rem; letter-spacing: 0.04em;
  padding: 0.28rem 0.75rem; background: var(--bg3);
  border: 1px solid var(--border2); color: var(--muted);
  transition: all 0.2s;
}
.work-tag:hover { border-color: var(--a-border); color: var(--a); }

/* Footer CTA */
.work-footer-cta {
  border-top: 1px solid var(--border); padding: 4rem 0;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem;
}
.work-footer-cta-txt { font-family: var(--serif); font-style: italic; font-size: clamp(1.4rem,3vw,1.9rem); color: var(--muted); }
.work-footer-cta-txt span { color: var(--text); }

@media (max-width: 900px) {
  .work-card { grid-template-columns: 200px 1fr; }
  .work-card-right { padding: 2.5rem; }
}
@media (max-width: 720px) {
  .work-card { grid-template-columns: 1fr; }
  .work-card-left {
    flex-direction: row; padding: 1.5rem 1.5rem;
    border-right: none; border-bottom: 1px solid var(--border);
    justify-content: flex-start; align-items: center; gap: 1.2rem;
    background: var(--bg);
  }
  .work-logo-wrap, .work-logo-fb { width: 64px; height: 64px; border-radius: 12px; }
  .work-card-meta { text-align: left; }
  .work-card-right { padding: 1.5rem; }
  .work-company { font-size: 1.6rem; }
  .work-list { padding: 2rem 0; }
  .work-footer { padding: 2.5rem 0; flex-direction: column; gap: 1.2rem; }
}
@media (max-width: 480px) {
  .work-card-left { padding: 1.2rem; gap: 1rem; }
  .work-logo-wrap, .work-logo-fb { width: 52px; height: 52px; border-radius: 10px; }
  .work-card-right { padding: 1.2rem; }
  .work-company { font-size: 1.4rem; }
  .work-tag { font-size: 0.7rem; padding: 0.2rem 0.55rem; }
}
`;

const ROLE_TAGS = {
  "University College Dublin": ["Excel", "Regression", "Linear Programming", "Time-Series Forecasting", "Classification", "Clustering", "Mentoring"],
  "Canverro":                  ["Python", "SQL", "Excel", "A/B Testing", "Tableau", "Cross-functional Collaboration", "Presentation", "Communication"],
  "McGill University":         ["Swift", "iOS", "Safari Extension", "Haptic Feedback", "Accessibility", "Independent Work", "Communication"],
  "Samsung R&D Institute":     ["Python", "C++", "OpenCV", "Video Processing", "Computer Vision", "Research", "Problem Solving", "Communication"],
  "DeepKlarity":               ["Flutter", "Dart", "Firebase", "Python", "Web Scraping"],
};

function WorkLogo({ logo, company }) {
  return (
    <div className="work-logo-wrap">
      <img
        src={logo} alt={company} className="work-logo"
        onError={e => {
          const fb = document.createElement("div");
          fb.className = "work-logo-fb";
          fb.textContent = company.slice(0, 2).toUpperCase();
          e.target.closest(".work-logo-wrap").replaceWith(fb);
        }}
      />
    </div>
  );
}

export default function Work() {
  useEffect(() => { document.title = "Satvik Kumar — Work"; }, []);
  return (
    <>
      <style>{css}</style>
      <div className="work-page">

        <section className="work-hero">
          <div className="wrap">
            <SR>
              <span className="eyebrow">Experience</span>
              <h1 className="work-title">Where I've<em>worked.</em></h1>
              <p className="work-sub">Five roles across research, enterprise R&D, startups, and academia. Each one taught me something different about what data is actually for.</p>
            </SR>
          </div>
        </section>

        <section style={{padding: "4rem 0"}}>
          <div className="wrap">
            <div className="work-list">
              {EXPERIENCE.map((e, i) => (
                <SR key={i} delay={i * 60}>
                  <div className="work-card">

                    {/* Left: logo + meta */}
                    <div className="work-card-left">
                      <WorkLogo logo={e.logo} company={e.company} />
                      <div className="work-card-meta">
                        <span className="work-period">{e.period}</span>
                        <span className="work-loc">{e.location}</span>
                      </div>
                    </div>

                    {/* Right: content */}
                    <div className="work-card-right">
                      <div className="work-card-header">
                        <div className="work-company">{e.company}</div>
                        <div className="work-role-row">
                          <span className="work-role">{e.role}</span>
                          {e.dept && <span className="work-dept">{e.dept}</span>}
                        </div>
                      </div>

                      <p className="work-desc">{e.description}</p>

                      <ul className="work-bullets">
                        {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>

                      {ROLE_TAGS[e.company] && (
                        <div className="work-tags-footer">
                          <span className="work-tags-lbl">Stack</span>
                          <div className="work-tags">
                            {ROLE_TAGS[e.company].map(t => (
                              <span key={t} className="work-tag">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </SR>
              ))}
            </div>
          </div>
        </section>

        <div className="wrap">
          <SR>
            <div className="work-footer-cta">
              <p className="work-footer-cta-txt">
                Want to see what I've built?<br /><span>Check out my projects.</span>
              </p>
              <a href="/projects" className="btn-fill">View Projects →</a>
            </div>
          </SR>
        </div>

      </div>
    </>
  );
}