import { Link } from "react-router-dom";
import { cases } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { WorkMark } from "@/components/visuals/WorkMark";
import { SiteFooter } from "@/components/Layout";

export function WorkPage() {
  const [first, ...rest] = cases;
  return (
    <div className="paper" style={{ paddingTop: "calc(var(--header) + 48px)" }}>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap-wide">
          <Reveal>
            <p className="kicker">Work</p>
            <h1 className="display" style={{ margin: "14px 0 18px", maxWidth: "16ch" }}>
              What I shipped, and what it changed.
            </h1>
            <p className="lede">
              Production AI inside live operations. 0→1 infrastructure in rates, FX, and cross-currency. A reusable
              control plane so the next agent did not start from zero.
            </p>
          </Reveal>

          <Reveal>
            <Link to={`/work/${first.slug}`} className="work-feature" style={{ marginTop: 48 }}>
              <div className="work-feature-visual">
                <WorkMark variant={first.slug} />
              </div>
              <div className="work-feature-copy">
                <div>
                  <p className="kicker">
                    {first.number} · {first.kicker}
                  </p>
                  <h3 className="display">{first.title}</h3>
                  <p>{first.summary}</p>
                  <div className="work-stats">
                    {first.metrics.map((m) => (
                      <div key={m.label}>
                        <b>{m.value}</b>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-link">
                  Read the case <i>→</i>
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="work-grid">
            {rest.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link to={`/work/${c.slug}`} className="work-card">
                  <div className="work-card-visual">
                    <WorkMark variant={c.slug} />
                  </div>
                  <div className="work-card-copy">
                    <p className="kicker">
                      {c.number} · {c.company}
                    </p>
                    <h3>{c.title}</h3>
                    <p>{c.summary}</p>
                    <div className="chip-row">
                      {c.metrics.slice(0, 2).map((m) => (
                        <span className="chip" key={m.label}>
                          {m.value}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <div className="wrap">
        <SiteFooter />
      </div>
    </div>
  );
}
