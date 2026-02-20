import { Link } from "react-router-dom";
import { ABOUT, EDUCATION, SKILLS, SITE } from "../data.js";
import { SR } from "../components/SR.jsx";
import { useEffect } from "react";

const css = `
.about-page { padding-top: 56px; min-height: 100vh; }

/* ── HERO ── */
.ab-hero {
  padding: 5.5rem 0 4rem; border-bottom: 1px solid var(--border);
}
.ab-hero-inner {
  display: grid; grid-template-columns: 1.4fr 1fr; gap: 5rem; align-items: start;
}
.ab-opening {
  font-family: var(--serif);
  font-size: clamp(1.7rem, 3.2vw, 2.6rem);
  font-weight: 400; color: var(--text); line-height: 1.2; margin-bottom: 2.2rem;
}
.ab-opening em { font-style: italic; color: var(--a); }
.ab-paras { display: flex; flex-direction: column; gap: 1.4rem; margin-bottom: 2.5rem; }
.ab-paras p { font-size: 1.02rem; color: var(--muted); line-height: 1.85; }
.ab-status {
  display: inline-flex; align-items: center; gap: 0.7rem;
  font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--a);
}

/* Right col */
.ab-right { display: flex; flex-direction: column; gap: 1.5rem; }
.ab-photo-wrap { position: relative; }
.ab-photo {
  width: 100%; aspect-ratio: 4/5;
  object-fit: cover; object-position: center top;
  display: block; border: 1px solid var(--border2);
  filter: grayscale(12%) contrast(1.05);
}
.ab-photo-line {
  position: absolute; bottom: -10px; left: -10px;
  width: 100%; height: 100%; border: 1px solid var(--a-border); z-index: -1;
}
.ab-facts { background: var(--bg2); border: 1px solid var(--border); }
.ab-fact { padding: 0.9rem 1.3rem; border-bottom: 1px solid var(--border); }
.ab-fact:last-child { border-bottom: none; }
.ab-fact-key { font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted2); display: block; margin-bottom: 0.2rem; }
.ab-fact-val { font-size: 1.02rem; color: var(--text); }

/* Education */
.ab-edu { padding: 4rem 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.ab-edu-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); }
.ab-edu-card { background: var(--bg2); padding: 2.2rem; transition: background 0.25s; }
.ab-edu-card:hover { background: var(--bg3); }

.ab-edu-header { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem; }
.ab-edu-logo-wrap {
  width: 44px; height: 44px; flex-shrink: 0; background: white;
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
  padding: 5px; overflow: hidden;
}
.ab-edu-logo { width: 100%; height: 100%; object-fit: contain; }
.ab-edu-logo-fb {
  width: 44px; height: 44px; flex-shrink: 0; background: var(--bg3);
  border-radius: 8px; border: 1px solid var(--border2);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 0.8rem; color: var(--a);
}
.ab-edu-title-group { flex: 1; }
.ab-edu-school { font-size: 1.05rem; font-weight: 600; color: var(--text); margin-bottom: 0.1rem; }
.ab-edu-sub-text { font-size: 1.07rem; color: var(--muted); }

.ab-edu-note { font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted2); margin-bottom: 0.5rem; }
.ab-edu-grade { font-family: var(--serif); font-size: 2.6rem; font-style: italic; color: var(--a-bright); line-height: 1; margin-bottom: 0.3rem; }
.ab-edu-honour { font-size: 1.07rem; color: var(--muted); margin-bottom: 1.2rem; }
.ab-edu-degree { font-size: 1.05rem; font-weight: 600; color: var(--text); margin-bottom: 1rem; }
.ab-edu-list { list-style: none; display: flex; flex-direction: column; gap: 0.45rem; }
.ab-edu-list li { font-size: 0.93rem; color: var(--muted); padding-left: 1.1rem; position: relative; line-height: 1.5; }
.ab-edu-list li::before { content: ''; position: absolute; left: 0; top: 0.6em; width: 4px; height: 4px; border-radius: 50%; background: var(--a); }

/* Skills */
.ab-skills { padding: 4rem 0; border-bottom: 1px solid var(--border); }
.ab-skills-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2.5rem; }
.ab-skill-group {}
.ab-skill-lbl {
  font-family: var(--mono); font-size: 0.80rem; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--a-bright); margin-bottom: 1.1rem; padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--a-border); display: block;
}
.ab-pills { display: flex; flex-wrap: wrap; gap: 0.45rem; }
.ab-pill {
  font-family: var(--mono); font-size: 0.85rem;
  letter-spacing: 0.04em; padding: 0.35rem 0.85rem;
  background: var(--bg3); border: 1px solid var(--border2);
  color: var(--text); transition: all 0.2s; cursor: default;
}
.ab-pill:hover { border-color: var(--a); color: var(--a-bright); background: var(--a-dim); }

/* Outside work section */
.ab-outside { padding: 4rem 0; border-bottom: 1px solid var(--border); }
.ab-outside-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--border); border: 1px solid var(--border);
}
.ab-outside-card {
  background: var(--bg2); padding: 2.2rem;
  transition: background 0.25s;
}
.ab-outside-card:hover { background: var(--bg3); }
.ab-outside-icon { font-size: 1.8rem; margin-bottom: 1rem; display: block; }
.ab-outside-title {
  font-family: var(--serif); font-size: 1.15rem; color: var(--text);
  margin-bottom: 0.7rem; font-weight: 400;
}
.ab-outside-desc { font-size: 0.98rem; color: var(--muted); line-height: 1.75; }

.ab-cta { padding: 3.5rem 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
.ab-cta-txt { font-family: var(--serif); font-style: italic; font-size: clamp(1.4rem, 3vw, 1.9rem); color: var(--muted); line-height: 1.3; }
.ab-cta-txt span { color: var(--text); }

/* Mobile photo — hidden on desktop, shown inline on mobile */
.ab-photo-mobile { display: none; }

@media (max-width: 900px) {
  .ab-hero-inner { grid-template-columns: 1fr; gap: 2rem; }
  /* Hide the right column entirely on mobile */
  .ab-right { display: none; }
  /* Show compact photo inline at top */
  .ab-photo-mobile {
    display: flex; align-items: center; gap: 1.2rem; margin-bottom: 1.6rem;
  }
  .ab-photo-mobile img {
    width: 90px; height: 120px; object-fit: cover; object-position: center top;
    border-radius: 12px; border: 1px solid var(--border2);
    filter: grayscale(12%) contrast(1.05); flex-shrink: 0;
  }
  .ab-photo-mobile-facts {
    display: flex; flex-direction: column; gap: 0.4rem;
  }
  .ab-photo-mobile-facts .ab-fact-key {
    font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--muted2); display: block;
  }
  .ab-photo-mobile-facts .ab-fact-val {
    font-size: 0.9rem; color: var(--text);
  }
  .ab-skills-grid { grid-template-columns: 1fr 1fr; }
  .ab-outside-grid { grid-template-columns: 1fr; }
  .ab-hero { padding: 2.5rem 0 2rem; }
  .ab-edu, .ab-skills, .ab-outside { padding: 2.5rem 0; }
}
@media (max-width: 700px) {
  .ab-edu-cards { grid-template-columns: 1fr; }
  .ab-skills-grid { grid-template-columns: 1fr; }
  .ab-edu-grade { font-size: 2rem; }
}
@media (max-width: 480px) {
  .ab-hero { padding: 1.8rem 0 1.5rem; }
  .ab-edu, .ab-skills, .ab-outside { padding: 2rem 0; }
  .ab-cta { flex-direction: column; align-items: flex-start; padding: 2rem 0; }
  .ab-outside-grid { grid-template-columns: 1fr; }
}
`;

function EduLogoCell({ logo, school }) {
  return (
    <div className="ab-edu-logo-wrap">
      <img
        src={logo}
        alt={school}
        className="ab-edu-logo"
        onError={e => {
          const fb = document.createElement("div");
          fb.className = "ab-edu-logo-fb";
          fb.textContent = school.slice(0, 2).toUpperCase();
          e.target.closest(".ab-edu-logo-wrap").replaceWith(fb);
        }}
      />
    </div>
  );
}

const OUTSIDE = [
  {
    icon: "♟",
    title: "Chess",
    desc: "Around 1000 on Chess.com. I play for the strategy — the need to think several moves ahead maps well to how I approach problems at work.",
  },
  {
    icon: "🎵",
    title: "Music",
    desc: "I listen for the lyrics. Artist, genre, popularity — none of that matters as much as whether the words actually mean something.",
  },
  {
    icon: "✈️",
    title: "Travelling",
    desc: "Lived and worked across India, Canada, and Ireland. Each place has given me a different perspective on how people think and collaborate.",
  },
];

export default function About() {
  useEffect(() => { document.title = "Satvik Kumar — About"; }, []);
  return (
    <>
      <style>{css}</style>
      <div className="about-page">

        {/* Hero */}
        <section className="ab-hero">
          <div className="wrap">
            <div className="ab-hero-inner">
              <SR>
                {/* Mobile-only: compact photo + key facts at top */}
                <div className="ab-photo-mobile">
                  <img src={SITE.avatar} alt="Satvik Kumar" />
                  <div className="ab-photo-mobile-facts">
                    {ABOUT.facts.slice(0, 3).map(f => (
                      <div key={f.label}>
                        <span className="ab-fact-key">{f.label}</span>
                        <span className="ab-fact-val">{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="eyebrow">About</span>
                <h1 className="ab-opening">
                  Technical enough to build it.<br />
                  <em>Analytical enough to question it.</em>
                </h1>
                <div className="ab-paras">
                  {ABOUT.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <div className="ab-status">
                  <span className="pulse-dot" />
                  {ABOUT.facts[3].value}
                </div>
              </SR>
              <SR delay={120}>
                <div className="ab-right">
                  <div className="ab-photo-wrap">
                    <img src={SITE.avatar} alt="Satvik Kumar" className="ab-photo" />
                    <div className="ab-photo-line" />
                  </div>
                  <div className="ab-facts">
                    {ABOUT.facts.map(f => (
                      <div key={f.label} className="ab-fact">
                        <span className="ab-fact-key">{f.label}</span>
                        <span className="ab-fact-val">{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SR>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="ab-edu">
          <div className="wrap">
            <SR>
              <span className="eyebrow">Education</span>
              <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:400,color:"var(--text)",marginBottom:"2rem",lineHeight:1.1}}>
                Where I <em style={{fontStyle:"italic",color:"var(--a)"}}>studied</em>
              </h2>
            </SR>
            <SR delay={80} stagger>
              <div className="ab-edu-cards">
                {EDUCATION.map((e, i) => (
                  <div key={i} className="ab-edu-card">
                    <div className="ab-edu-header">
                      <EduLogoCell logo={e.logo} school={e.school} />
                      <div className="ab-edu-title-group">
                        <div className="ab-edu-school">{e.school}</div>
                        <div className="ab-edu-sub-text">{e.sub} · {e.period}</div>
                      </div>
                    </div>
                    <div className="ab-edu-note">{e.note}</div>
                    <div className="ab-edu-grade">{e.grade}</div>
                    <div className="ab-edu-honour">{e.honour}</div>
                    <div className="ab-edu-degree">{e.degree}</div>
                    <ul className="ab-edu-list">
                      {e.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </SR>
          </div>
        </section>

        {/* Skills */}
        <section className="ab-skills">
          <div className="wrap">
            <SR>
              <span className="eyebrow">Skills</span>
              <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:400,color:"var(--text)",marginBottom:"2rem",lineHeight:1.1}}>
                Technical <em style={{fontStyle:"italic",color:"var(--a)"}}>stack</em>
              </h2>
            </SR>
            <div className="ab-skills-grid">
              {Object.entries(SKILLS).map(([cat, items], gi) => (
                <SR key={cat} delay={gi * 80}>
                  <div className="ab-skill-group">
                    <span className="ab-skill-lbl">{cat}</span>
                    <div className="ab-pills">
                      {items.map(s => <span key={s} className="ab-pill">{s}</span>)}
                    </div>
                  </div>
                </SR>
              ))}
            </div>
          </div>
        </section>

        {/* Outside work */}
        <section className="ab-outside">
          <div className="wrap">
            <SR>
              <span className="eyebrow">Outside work</span>
              <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:400,color:"var(--text)",marginBottom:"2rem",lineHeight:1.1}}>
                What I do when I'm <em style={{fontStyle:"italic",color:"var(--a)"}}>not working</em>
              </h2>
            </SR>
            <SR delay={80}>
              <div className="ab-outside-grid">
                {OUTSIDE.map(o => (
                  <div key={o.title} className="ab-outside-card">
                    <span className="ab-outside-icon">{o.icon}</span>
                    <div className="ab-outside-title">{o.title}</div>
                    <p className="ab-outside-desc">{o.desc}</p>
                  </div>
                ))}
              </div>
            </SR>
          </div>
        </section>

        {/* CTA */}
        <div className="wrap">
          <SR>
            <div className="ab-cta">
              <p className="ab-cta-txt">That's the background.<br /><span>Now see where it's been applied.</span></p>
              <Link to="/work" className="btn-fill">View Experience →</Link>
            </div>
          </SR>
        </div>

      </div>
    </>
  );
}