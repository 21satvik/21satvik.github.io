import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SITE, HERO, PROJECTS, CREDENTIALS, STATS } from "../data.js";

import { SR } from "../components/SR.jsx";
import RecommendationCards from "../components/RecommendationCards.jsx";

const css = `
.home { min-height: 100vh; padding-top: 56px; }

/* ── HERO ── */
.h-hero {
  min-height: calc(100vh - 56px);
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; gap: 6rem; padding: 5rem 0;
}
.h-pre {
  font-family: var(--mono); font-size: 0.93rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--a); margin-bottom: 2rem;
  display: flex; align-items: center; gap: 0.8rem;
}
.h-pre::before { content: ''; width: 28px; height: 1px; background: var(--a); display: block; }
.h-pre-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 8px #4ade80; animation: pulseDot 2.5s ease-in-out infinite; }

.h-headline {
  font-family: var(--serif);
  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 0.95; letter-spacing: -0.02em;
  color: var(--text); margin-bottom: 2rem;
}
.h-headline .l2 { display: block; color: var(--a); font-style: italic; }
.h-headline .cursor {
  display: inline-block; width: 3px; height: 0.85em;
  background: var(--a); margin-left: 4px; vertical-align: middle;
  animation: blink-cursor 1.1s step-end infinite;
}
@keyframes blink-cursor { 0%,100%{opacity:1} 50%{opacity:0} }
.h-typed {
  display: inline-block;
  transition: opacity 0.15s;
}
.h-typed.hide { opacity: 0; }

.h-sub { font-size: 1.02rem; color: var(--muted); max-width: 400px; line-height: 1.75; margin-bottom: 2.5rem; }
.h-ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }

/* Social links row */
.h-socials { display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; }
.h-social-link {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-family: var(--mono); font-size: 0.80rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted); text-decoration: none;
  transition: color 0.2s; padding-bottom: 1px; border-bottom: 1px solid transparent;
}
.h-social-link:hover { color: var(--a); border-bottom-color: var(--a-border); }
.h-social-link svg { width: 14px; height: 14px; flex-shrink: 0; }

.h-photo-frame { position: relative; max-width: 340px; margin-left: auto; }
.h-photo {
  width: 100%; aspect-ratio: 4/5;
  object-fit: cover; object-position: center top;
  display: block; border: 1px solid var(--border2);
  filter: grayscale(10%) contrast(1.05);
}
.h-photo-border {
  position: absolute; bottom: -10px; right: -10px;
  width: 100%; height: 100%; border: 1px solid var(--a-border); z-index: -1;
}

/* Stats row */
.h-stats-row {
  display: grid; grid-template-columns: repeat(4,1fr);
  gap: 1px; background: var(--border);
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
}
.h-stat-cell { background: var(--bg2); padding: 1.6rem 2rem; transition: background 0.25s; }
.h-stat-cell:hover { background: var(--bg3); }
.h-stat-num { font-family: var(--serif); font-size: 2rem; font-style: italic; color: var(--a-bright); display: block; line-height: 1; margin-bottom: 0.3rem; }
.h-stat-lbl { font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }

/* Marquee */
.h-strip {
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  overflow: hidden; white-space: nowrap; padding: 0.85rem 0; background: var(--bg2);
}
.h-strip-track { display: inline-flex; gap: 3rem; animation: marquee 22s linear infinite; }
.h-strip-track:hover { animation-play-state: paused; }
@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
.h-strip-item {
  font-family: var(--mono); font-size: 0.77rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--muted); display: flex; align-items: center; gap: 0.9rem;
}
.h-strip-sep { width: 3px; height: 3px; border-radius: 50%; background: var(--a); flex-shrink: 0; }

/* Sections */
.h-section { padding: 5rem 0; border-top: 1px solid var(--border); }
.h-section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;
}
.h-section-title { font-family: var(--serif); font-size: clamp(1.6rem,3.5vw,2.3rem); font-weight: 400; color: var(--text); line-height: 1.1; }
.h-section-title em { font-style: italic; color: var(--a); }
.h-see-all { font-family: var(--mono); font-size: 0.80rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); display: flex; align-items: center; gap: 0.5rem; transition: color 0.2s; }
.h-see-all:hover { color: var(--a); }

/* Project rows */
.h-proj-list { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }
.h-proj-row {
  display: grid; grid-template-columns: 2.5rem 1fr auto;
  align-items: center; gap: 2rem; padding: 1.6rem 1.8rem;
  background: var(--bg2); text-decoration: none; color: inherit;
  transition: background 0.25s; position: relative; overflow: hidden;
}
.h-proj-row::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
  background: var(--a); transform: scaleY(0); transform-origin: top; transition: transform 0.3s;
}
.h-proj-row:hover { background: var(--bg3); }
.h-proj-row:hover::before { transform: scaleY(1); }
.h-proj-idx { font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.08em; color: var(--a); font-weight: 500; }
.h-proj-name { font-family: var(--serif); font-size: 1.15rem; color: var(--text); margin-bottom: 0.15rem; font-weight: 400; }
.h-proj-cat { font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
.h-proj-arrow { font-size: 1.1rem; color: var(--muted2); flex-shrink: 0; transition: transform 0.2s, color 0.2s; }
.h-proj-row:hover .h-proj-arrow { transform: translate(3px,-3px); color: var(--a); }

/* Experience big cards — removed, now on Work page */

/* Worked with */
.h-worked-with {
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  padding: 2.8rem 0; background: var(--bg2);
}
.h-worked-label {
  font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--muted2); text-align: center; margin-bottom: 2.2rem;
}
.h-logo-strip {
  display: flex; align-items: stretch;
  border: 1px solid var(--border);
}
.h-logo-item {
  flex: 1;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 1.4rem 1rem;
  border-right: 1px solid var(--border);
  cursor: default;
  gap: 0.7rem;
  opacity: 0.45;
  filter: grayscale(100%);
  transition: opacity 0.3s, filter 0.3s, flex 0.4s cubic-bezier(0.16,1,0.3,1), background 0.2s;
  overflow: hidden; min-width: 0;
}
.h-logo-item:last-child { border-right: none; }
.h-logo-strip:has(.h-logo-item:hover) .h-logo-item { flex: 0.6; opacity: 0.3; filter: grayscale(100%); }
.h-logo-strip:has(.h-logo-item:hover) .h-logo-item:hover { flex: 2; opacity: 1; filter: grayscale(0%); background: var(--bg3); }
.h-logo-img { height: 38px; width: auto; max-width: 90px; object-fit: contain; display: block; flex-shrink: 0; }
.h-logo-name {
  font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--a);
  white-space: nowrap; overflow: hidden;
  max-width: 0; opacity: 0;
  transition: max-width 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s;
}
.h-logo-item:hover .h-logo-name { max-width: 200px; opacity: 1; }

/* Countries */
.h-countries {
  border-bottom: 1px solid var(--border);
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--border);
}
.h-country-cell {
  background: var(--bg2); padding: 2rem 2.4rem;
  display: flex; align-items: center; gap: 1.4rem;
  transition: background 0.25s;
}
.h-country-cell:hover { background: var(--bg3); }
.h-country-flag { font-size: 2.4rem; line-height: 1; flex-shrink: 0; }
.h-country-info {}
.h-country-name { font-family: var(--serif); font-size: 1.15rem; color: var(--text); margin-bottom: 0.2rem; }
.h-country-detail { font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.08em; color: var(--muted); }

/* Skills grid */
.h-skills-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--border); border: 1px solid var(--border);
}
.h-skill-group {
  background: var(--bg2); padding: 2rem 2.2rem;
  transition: background 0.25s;
}
.h-skill-group:hover { background: var(--bg3); }
.h-skill-group-label {
  font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--a); margin-bottom: 1.2rem;
  display: flex; align-items: center; gap: 0.6rem;
}
.h-skill-group-label::before { content: ''; width: 16px; height: 1px; background: var(--a); display: block; }
.h-skill-tags { display: flex; flex-wrap: wrap; gap: 0.45rem; }
.h-skill-tag {
  font-family: var(--mono); font-size: 0.77rem; padding: 0.25rem 0.7rem;
  background: var(--bg3); border: 1px solid var(--border2); color: var(--muted);
  transition: all 0.2s;
}
.h-skill-tag:hover { border-color: var(--a-border); color: var(--text); }

/* Currently block */
.h-currently {
  margin-top: 1px; background: var(--bg2);
  padding: 2rem 2.2rem;
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;
  border: 1px solid var(--border); border-top: none;
}
.h-now-item {}
.h-now-label {
  font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--muted2); margin-bottom: 0.5rem; display: block;
}
.h-now-val { font-size: 1.02rem; color: var(--text); line-height: 1.5; }
.h-creds { padding: 3.5rem 0; border-top: 1px solid var(--border); }
.h-creds-lbl { font-family: var(--mono); font-size: 0.77rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted2); margin-bottom: 1.2rem; }
.h-creds-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.h-cred {
  font-family: var(--mono); font-size: 0.80rem; letter-spacing: 0.04em;
  padding: 0.32rem 0.85rem; background: var(--bg2); border: 1px solid var(--border2);
  color: var(--muted); white-space: nowrap; transition: all 0.2s;
  display: inline-flex; align-items: center; gap: 0.5rem;
}
.h-cred:hover { border-color: var(--a-border); color: var(--text); }
.h-cred-issuer { color: var(--muted2); margin-left: 0.4rem; font-size: 0.85rem; }
.h-cred-logo { width: 16px; height: 16px; object-fit: contain; flex-shrink: 0; border-radius: 2px; }

/* Footer CTA */
.h-footer-cta {
  border-top: 1px solid var(--border); padding: 4rem 0;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem;
}
.h-footer-cta-txt { font-family: var(--serif); font-style: italic; font-size: clamp(1.4rem,3vw,1.9rem); color: var(--muted); }
.h-footer-cta-txt span { color: var(--text); }

@media (max-width: 960px) {
  .h-hero { grid-template-columns: 1fr; padding: 4rem 0 3rem; gap: 3rem; }
  .h-photo-frame { max-width: 260px; }
  .h-stats-row { grid-template-columns: repeat(2,1fr); }
  .h-exp-card { padding: 1.6rem; gap: 1.5rem; }
  .h-exp-logo-wrap, .h-exp-logo-fallback { width: 56px; height: 56px; border-radius: 8px; }
  .h-countries { grid-template-columns: 1fr; }
  .h-skills-grid { grid-template-columns: 1fr 1fr; }
  .h-currently { grid-template-columns: 1fr; gap: 1.2rem; }
}
@media (max-width: 600px) {
  .h-ctas { flex-direction: column; }
  .h-footer-cta { flex-direction: column; }
  .h-proj-row { grid-template-columns: 2rem 1fr auto; gap: 0.8rem; padding: 1.2rem; }
  .h-exp-period-badge { display: none; }
  .h-stats-row { grid-template-columns: 1fr 1fr; }
  .h-skills-grid { grid-template-columns: 1fr; }
  /* Logo strip: disable the fancy hover-expand effect on touch devices */
  .h-logo-strip { flex-wrap: wrap; border: none; gap: 1px; background: var(--border); }
  .h-logo-item { flex: none; width: calc(33.33% - 1px); opacity: 0.7; filter: grayscale(30%); border-right: none; border: 1px solid var(--border); }
  .h-logo-strip:has(.h-logo-item:hover) .h-logo-item { flex: none; opacity: 0.7; filter: grayscale(30%); }
  .h-logo-strip:has(.h-logo-item:hover) .h-logo-item:hover { flex: none; width: calc(33.33% - 1px); opacity: 1; filter: grayscale(0%); }
  .h-logo-name { max-width: 120px; opacity: 1; }
  .h-logo-item:hover .h-logo-name { max-width: 120px; }
  .h-stat-cell { padding: 1.2rem 1.4rem; }
}
`;

const STRIP = [
  "Python", "SQL", "Machine Learning", "RAG", "Agentic AI",
  "Tableau", "Power BI", "PostgreSQL", "Go", "Flutter",
  "Business Analysis", "Research", "Computer Vision", "NLP",
  "Data Analysis", "Microservices", "REST APIs", "Git", "Linux", "AWS",
  "Python", "SQL", "Machine Learning", "RAG", "Agentic AI",
  "Tableau", "Power BI", "PostgreSQL", "Go", "Flutter",
  "Business Analysis", "Research", "Computer Vision", "NLP",
  "Data Analysis", "Microservices", "REST APIs", "Git", "Linux", "AWS",
];

const PHRASES = [
  "decisions.",
  "stories.",
  "strategy.",
  "arguments.",
  "clarity.",
];

function TypedPhrase() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const full = PHRASES[index];
    let timeout;

    if (!deleting && displayed.length < full.length) {
      // Typing
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === full.length) {
      // Pause then start deleting
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      // Deleting
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      // Move to next phrase
      setDeleting(false);
      setIndex(i => (i + 1) % PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return <span className="h-typed">{displayed}<span className="cursor" /></span>;
}

export default function Home() {
  return (
    <>
      <style>{css}</style>
      <div className="home">

        {/* HERO */}
        <section>
          <div className="wrap">
            <div className="h-hero">
              <div className="h-hero-left">
                <div className="h-pre">
                  <span className="h-pre-dot" />
                  Available · Dublin, Ireland
                </div>
                <h1 className="h-headline">
                  I turn data into<br />
                  <span className="l2"><TypedPhrase /></span>
                </h1>
                <p className="h-sub">{HERO.sub}</p>
                <div className="h-ctas">
                  <Link to="/projects" className="btn-fill">See My Work →</Link>
                  <Link to="/about" className="btn-line">About Me</Link>
                </div>
                <div className="h-socials">
                  <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="h-social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                    LinkedIn
                  </a>
                  <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="h-social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                    GitHub
                  </a>
                  {SITE.cvLink && SITE.cvLink !== "#" && (
                    <a href={SITE.cvLink} target="_blank" rel="noopener noreferrer" className="h-social-link">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-5h8v1H8v-1zm0-3h8v1H8v-1zm0-3h4v1H8V9z"/></svg>
                      Download CV
                    </a>
                  )}
                </div>
              </div>
              <div className="h-hero-right">
                <div className="h-photo-frame">
                  <img src={SITE.avatar} alt="Satvik Kumar" className="h-photo" />
                  <div className="h-photo-border" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="h-section">
          <div className="wrap">
            <SR>
              <div className="h-section-head">
                <h2 className="h-section-title">Selected <em>projects</em></h2>
                <Link to="/projects" className="h-see-all">All projects →</Link>
              </div>
            </SR>
            <SR delay={80} stagger>
              <div className="h-proj-list">
                {PROJECTS.slice(0,4).map((p, i) => (
                  <Link key={p.slug} to={`/projects#${p.slug}`} className="h-proj-row">
                    <div className="h-proj-idx">0{i+1}</div>
                    <div>
                      <div className="h-proj-name">{p.name}</div>
                      <div className="h-proj-cat">{p.category}</div>
                    </div>
                    <div className="h-proj-arrow">↗</div>
                  </Link>
                ))}
              </div>
            </SR>
          </div>
        </section>

        {/* RECOMMENDATIONS */}
        <section className="h-section" style={{paddingTop:0}}>
          <div className="wrap">
            <SR>
              <RecommendationCards />
            </SR>
          </div>
        </section>

        {/* SKILLS & STACK */}
        <section className="h-section">
          <div className="wrap">
            <SR>
              <div className="h-section-head">
                <h2 className="h-section-title">What I <em>work with</em></h2>
                <Link to="/about" className="h-see-all">Full background →</Link>
              </div>
            </SR>
            <SR delay={80}>
              <div className="h-skills-grid">
                {[
                  { label: "Data & ML", tags: ["Python", "SQL", "Machine Learning", "XGBoost", "RAG", "Agentic AI", "NLP", "Computer Vision", "Linear Programming"] },
                  { label: "Tools & Infra", tags: ["Tableau", "Power BI", "PostgreSQL", "Go", "REST APIs", "Microservices", "AWS", "Git", "Linux", "Firebase"] },
                  { label: "Domain & Soft", tags: ["Business Analysis", "Research", "Team Leadership", "Communication", "Software Development", "Flutter", "iOS Dev"] },
                ].map(g => (
                  <div key={g.label} className="h-skill-group">
                    <div className="h-skill-group-label">{g.label}</div>
                    <div className="h-skill-tags">
                      {g.tags.map(t => <span key={t} className="h-skill-tag">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-currently">
                <div className="h-now-item">
                  <span className="h-now-label">Currently</span>
                  <span className="h-now-val">MSc Business Analytics · UCD Dublin</span>
                </div>
                <div className="h-now-item">
                  <span className="h-now-label">Based in</span>
                  <span className="h-now-val">Dublin, Ireland</span>
                </div>
                <div className="h-now-item">
                  <span className="h-now-label">Open to</span>
                  <span className="h-now-val">Full-time · Internships · Contract</span>
                </div>
              </div>
            </SR>
          </div>
        </section>

        {/* STATS ROW */}
        <div className="h-stats-row">
          {STATS.map(s => (
            <div key={s.label} className="h-stat-cell">
              <span className="h-stat-num">{s.num}</span>
              <span className="h-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>

        {/* WORKED WITH */}
        <div className="h-worked-with">
          <div className="wrap">
            <div className="h-worked-label">Organisations I've worked with</div>
            <div className="h-logo-strip">
              {[
                { src: "/images/ucd.jpeg",        alt: "University College Dublin", name: "UCD Dublin" },
                { src: "/images/mcgill.jpeg",     alt: "McGill University",         name: "McGill" },
                { src: "/images/samsung.jpeg",    alt: "Samsung R&D",               name: "Samsung R&D" },
                { src: "/images/canverro.jpeg",   alt: "Canverro",                  name: "Canverro" },
                { src: "/images/deepklarity.jpeg",alt: "DeepKlarity",               name: "DeepKlarity" },
                { src: "/images/srm.jpeg",        alt: "SRM Institute",             name: "SRM" },
              ].map(l => (
                <div key={l.alt} className="h-logo-item">
                  <img src={l.src} alt={l.alt} className="h-logo-img" />
                  <span className="h-logo-name">{l.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COUNTRIES */}
        <div className="h-countries">
          {[
            { flag: "🇮🇪", name: "Ireland", detail: "UCD Dublin · MSc · TA" },
            { flag: "🇨🇦", name: "Canada",  detail: "McGill University · Mitacs Research" },
            { flag: "🇮🇳", name: "India",   detail: "Samsung · Canverro · DeepKlarity" },
          ].map(c => (
            <div key={c.name} className="h-country-cell">
              <span className="h-country-flag">{c.flag}</span>
              <div className="h-country-info">
                <div className="h-country-name">{c.name}</div>
                <div className="h-country-detail">{c.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* MARQUEE */}
        <div className="h-strip">
          <div className="h-strip-track">
            {STRIP.map((item, i) => (
              <span key={i} className="h-strip-item">
                <span className="h-strip-sep" />{item}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="wrap">
          <SR>
            <div className="h-footer-cta">
              <p className="h-footer-cta-txt">
                Want to work together?<br /><span>Let's talk.</span>
              </p>
              <Link to="/contact" className="btn-fill">Get in touch →</Link>
            </div>
          </SR>
        </div>

      </div>
    </>
  );
}