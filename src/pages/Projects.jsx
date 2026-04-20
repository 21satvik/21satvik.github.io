import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PROJECTS } from "../data.js";
import { SR } from "../components/SR.jsx";

const css = `
.proj-page { padding-top: 56px; min-height: 100vh; }

.proj-hero { padding: 3.5rem 0 3rem; border-bottom: 1px solid var(--border); }
.proj-title {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400; line-height: 0.95; letter-spacing: -0.02em; color: var(--text);
}
.proj-title em { font-style: italic; color: var(--a); display: block; }
.proj-sub { font-size: 1rem; color: var(--muted); margin-top: 1.4rem; max-width: 420px; line-height: 1.75; }

/* Card list */
.proj-list { padding: 2.5rem 0; display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }

.proj-card {
  background: var(--bg2);
  display: grid;
  grid-template-columns: 160px 1fr;
  position: relative; overflow: hidden;
  transition: background 0.25s;
  scroll-margin-top: 80px;
}
.proj-card:hover { background: var(--bg3); }
.proj-card::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--a); transform: scaleY(0); transform-origin: top;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
}
.proj-card:hover::before { transform: scaleY(1); }

/* Left — number column */
.proj-card-left {
  display: flex; flex-direction: column; align-items: center;
  justify-content: flex-start; padding: 2.2rem 1.2rem;
  border-right: 1px solid var(--border); gap: 0.6rem;
}
.proj-card-left-top { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; }
.proj-card-left-bottom { display: flex; flex-direction: column; align-items: stretch; gap: 0.5rem; width: 100%; margin-top: 0.6rem; }
.proj-num {
  font-family: var(--serif); font-size: 3.8rem; font-style: italic; line-height: 1;
  background: linear-gradient(135deg, var(--a) 0%, var(--a-bright) 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
}
.proj-cat {
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--a); text-align: center; line-height: 1.6;
}
.proj-year { font-family: var(--mono); font-size: 0.75rem; color: var(--muted2); white-space: nowrap; }
.proj-status {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--muted); white-space: nowrap;
}
.proj-left-link {
  display: flex; align-items: center; justify-content: center; gap: 0.4rem;
  font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--a); border: 1px solid var(--a-border);
  padding: 0.5rem 0.6rem; transition: all 0.2s; text-decoration: none; text-align: center;
}
.proj-left-link:hover { background: var(--a-dim); color: var(--a-bright); }
.proj-sdot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.proj-sdot.active { background: #4ade80; box-shadow: 0 0 8px #4ade80; animation: pulseDot 2.5s ease-in-out infinite; }
.proj-sdot.done { background: var(--muted2); }

/* Right — all content */
.proj-card-right { padding: 2.2rem 2.5rem; }

.proj-name {
  font-family: var(--serif);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 400; color: var(--text); line-height: 1.05; margin-bottom: 0.4rem;
}
.proj-tagline {
  font-family: var(--serif); font-style: italic;
  font-size: 1rem; color: var(--a-bright); margin-bottom: 1.5rem;
}
.proj-card-divider { height: 1px; background: var(--border); margin-bottom: 1.5rem; }

/* Body — single col now that links are in left panel */
.proj-body { display: grid; grid-template-columns: 1fr 300px; gap: 2.5rem; align-items: start; }

.proj-desc { font-size: 1rem; color: var(--muted); line-height: 1.85; margin-top: 1.2rem; margin-bottom: 0; }
.proj-challenge {
  background: var(--bg3); border-left: 2px solid var(--a);
  padding: 0.9rem 1.2rem;
}
.proj-challenge-lbl {
  font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--muted2); margin-bottom: 0.3rem;
}
.proj-challenge-txt { font-size: 0.95rem; color: var(--muted); font-style: italic; line-height: 1.65; }

.proj-outcome {
  padding: 1rem 1.2rem;
  background: var(--a-dim); border: 1px solid var(--a-border);
  font-size: 0.95rem; color: var(--text); line-height: 1.75; margin-bottom: 1rem;
}
.proj-outcome-lbl {
  font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--a); display: block; margin-bottom: 0.4rem;
}
.proj-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1rem; }
.proj-tag {
  font-family: var(--mono); font-size: 0.76rem; letter-spacing: 0.04em;
  padding: 0.25rem 0.65rem; background: var(--bg3); color: var(--text);
  border: 1px solid var(--border2); transition: all 0.2s;
}
.proj-tag:hover { border-color: var(--a-border); color: var(--a); }


/* Page footer CTA */
.proj-footer {
  border-top: 1px solid var(--border);
  padding: 4rem 0;
  display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap;
}
.proj-footer-text {
  font-family: var(--serif); font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-style: italic; color: var(--muted); line-height: 1.3;
}
.proj-footer-text strong { color: var(--text); font-style: normal; font-weight: 400; }
.proj-footer-link {
  font-family: var(--mono); font-size: 0.88rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--a); border: 1px solid var(--a-border);
  padding: 0.7rem 1.4rem; text-decoration: none; transition: all 0.2s; white-space: nowrap;
}
.proj-footer-link:hover { background: var(--a-dim); color: var(--a-bright); }

@media (max-width: 900px) {
  .proj-card { grid-template-columns: 1fr; }
  .proj-card-left {
    flex-direction: row; padding: 1.2rem 1.5rem;
    border-right: none; border-bottom: 1px solid var(--border);
    align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.8rem;
  }
  .proj-card-left-top { flex-direction: row; gap: 1rem; align-items: center; }
  .proj-card-left-bottom { flex-direction: row; margin-top: 0; width: auto; gap: 0.5rem; }
  .proj-num { font-size: 2.4rem; }
  .proj-cat { text-align: left; }
  .proj-card-right { padding: 1.5rem; }
  .proj-body { grid-template-columns: 1fr; gap: 1.2rem; }
  .proj-footer { flex-direction: column; align-items: flex-start; gap: 1rem; padding: 2.5rem 0; }
  .proj-list { padding: 1.5rem 0; }
}
@media (max-width: 480px) {
  .proj-card-left { padding: 1rem 1.2rem; }
  .proj-card-left-top { gap: 0.7rem; }
  .proj-num { font-size: 2rem; }
  .proj-card-right { padding: 1.2rem; }
  .proj-name { font-size: 1.3rem !important; }
  .proj-tagline { font-size: 0.9rem; margin-bottom: 1rem; }
  .proj-left-link { font-size: 0.68rem; padding: 0.45rem 0.5rem; }
  .proj-challenge { padding: 0.8rem 1rem; }
  .proj-outcome { padding: 0.8rem 1rem; }
}
`;

export default function Projects() {
  useEffect(() => { document.title = "Satvik Kumar — Projects"; }, []);
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);

  return (
    <>
      <style>{css}</style>
      <div className="proj-page">

        <section className="proj-hero">
          <div className="wrap">
            <SR>
              <span className="eyebrow">Projects</span>
              <h1 className="proj-title">Selected<em>work.</em></h1>
              <p className="proj-sub">Seven projects. The technical range of an engineer, applied to business problems.</p>
            </SR>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="proj-list">
              {PROJECTS.map((p, i) => (
                <SR key={p.slug} delay={Math.min(i * 40, 160)}>
                  <div id={p.slug} className="proj-card">

                    {/* Left: number + meta + links */}
                    <div className="proj-card-left">
                      <div className="proj-card-left-top">
                        <span className="proj-num">0{i + 1}</span>
                        <span className="proj-cat">{p.category}</span>
                        <span className="proj-year">{p.year}</span>
                        <div className="proj-status">
                          <span className={`proj-sdot ${p.status === "Active" ? "active" : "done"}`} />
                          {p.status}
                        </div>
                      </div>
                      <div className="proj-card-left-bottom">
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-left-link">
                          ↗ {p.linkLabel}
                        </a>
                        {p.report && (
                          <a href={p.report} target="_blank" rel="noopener noreferrer" className="proj-left-link">
                            ↗ Report

                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: all content */}
                    <div className="proj-card-right">
                      <h2 className="proj-name">{p.name}</h2>
                      <p className="proj-tagline">{p.tagline}</p>
                      <div className="proj-card-divider" />
                      <div className="proj-body">
                        <div>
                          <div className="proj-challenge">
                            <div className="proj-challenge-lbl">The problem</div>
                            <p className="proj-challenge-txt">{p.challenge}</p>
                          </div>
                          <p className="proj-desc">{p.description}</p>
                        </div>
                        <div>
                          <div className="proj-outcome">
                            <span className="proj-outcome-lbl">Result</span>
                            {p.outcome}
                          </div>
                          <div className="proj-tags">
                            {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </SR>
              ))}
            </div>

            {/* Page footer */}
            <SR>
              <div className="proj-footer">
                <p className="proj-footer-text">
                  There's more than just projects.<br /><strong>Accessibility work, leadership, recognition.</strong>
                </p>
                <a href="/impact" className="proj-footer-link">
                  View Impact →
                </a>
              </div>
            </SR>
          </div>
        </section>

      </div>
    </>
  );
}