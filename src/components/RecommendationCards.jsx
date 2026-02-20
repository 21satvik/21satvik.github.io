import { RECOMMENDATIONS } from "../data.js";

const css = `
.rec-section { padding: 5rem 0; border-top: 1px solid var(--border); }
.rec-section-head { margin-bottom: 3rem; }
.rec-section-title {
  font-family: var(--serif);
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 400; color: var(--text); line-height: 1.1; margin-top: 0.5rem;
}
.rec-section-title em { font-style: italic; color: var(--a); }

.rec-cards {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--border); border: 1px solid var(--border);
}
.rec-card {
  background: var(--bg2); padding: 2.4rem;
  display: flex; flex-direction: column;
  position: relative; transition: background 0.25s; overflow: hidden;
}
.rec-card:hover { background: var(--bg3); }
.rec-card::before {
  content: '\u201C';
  position: absolute; top: 0.8rem; left: 1.6rem;
  font-family: var(--serif); font-size: 5rem;
  color: var(--a-dim); line-height: 1; pointer-events: none;
}
.rec-card::after {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: var(--a);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
}
.rec-card:hover::after { transform: scaleX(1); }

.rec-context {
  font-family: var(--mono); font-size: 0.73rem;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--a); margin-bottom: 1.2rem; padding-top: 2.2rem;
}
.rec-text {
  font-size: 0.96rem; color: var(--muted);
  line-height: 1.85; margin-bottom: 2rem; flex: 1;
}

.rec-footer {
  display: flex; align-items: center; gap: 1rem;
  padding-top: 1.4rem; border-top: 1px solid var(--border);
  margin-top: auto;
}
/* Avatar circle — shown when photo available */
.rec-avatar {
  width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0;
  object-fit: cover; object-position: center top;
  border: 1.5px solid var(--a-border);
}
/* Org logo fallback — shown when no photo */
.rec-logo-wrap {
  width: 38px; height: 38px; flex-shrink: 0;
  background: white; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  padding: 4px; overflow: hidden;
}
.rec-logo { width: 100%; height: 100%; object-fit: contain; }

.rec-author { font-size: 1rem; font-weight: 600; color: var(--text); margin-bottom: 0.15rem; }
.rec-role { font-family: var(--mono); font-size: 0.71rem; letter-spacing: 0.04em; color: var(--muted2); line-height: 1.5; }

@media (max-width: 900px) { .rec-cards { grid-template-columns: 1fr; } }
`;

export default function RecommendationCards() {
  return (
    <>
      <style>{css}</style>
      <div className="rec-section">
        <div className="rec-section-head">
          <span className="eyebrow">Recommendations</span>
          <h2 className="rec-section-title">What people <em>say</em></h2>
        </div>
        <div className="rec-cards">
          {RECOMMENDATIONS.map((r, i) => (
            <div key={i} className="rec-card">
              <div className="rec-context">{r.context}</div>
              <p className="rec-text">&ldquo;{r.text}&rdquo;</p>
              <div className="rec-footer">
                {r.avatar
                  ? <img src={r.avatar} alt={r.author} className="rec-avatar"
                      onError={e => { e.target.style.display = "none"; }} />
                  : <div className="rec-logo-wrap">
                      <img src={r.logo} alt={r.context} className="rec-logo"
                        onError={e => { e.target.style.display = "none"; }} />
                    </div>
                }
                <div>
                  <div className="rec-author">{r.author}</div>
                  <div className="rec-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}