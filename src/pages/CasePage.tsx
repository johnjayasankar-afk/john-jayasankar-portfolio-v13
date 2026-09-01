import { Link, Navigate, useParams } from "react-router-dom";
import { cases } from "@/data/content";
import { WorkMark } from "@/components/visuals/WorkMark";
import { SiteFooter } from "@/components/Layout";

export function CasePage() {
  const { slug } = useParams();
  const index = cases.findIndex((c) => c.slug === slug);
  const study = cases[index];
  if (!study) return <Navigate to="/work" replace />;
  const prev = cases[(index - 1 + cases.length) % cases.length];
  const next = cases[(index + 1) % cases.length];

  return (
    <>
      <section className="case-hero">
        <div className="wrap">
          <div>
            <p className="kicker">
              {study.number} · {study.kicker}
            </p>
            <h1 className="display">{study.title}</h1>
            <p className="lede light">{study.summary}</p>
          </div>
          <div className="case-metrics">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="case-visual-band">
        <WorkMark variant={study.slug} />
      </div>
      <article className="case-body">
        <div className="wrap case-layout">
          <dl className="case-side">
            <dt>Company</dt>
            <dd>{study.company}</dd>
            <dt>Role</dt>
            <dd>Product</dd>
            <dt>Stage</dt>
            <dd>{study.stage}</dd>
            <dt>Internal</dt>
            <dd>{study.alias}</dd>
            <dt>Year</dt>
            <dd>{study.year}</dd>
            {study.slug === "agentfit" && (
              <>
                <dt>Live</dt>
                <dd>
                  <Link to="/agentfit" className="text-link">
                    Open AgentFit <i>→</i>
                  </Link>
                </dd>
              </>
            )}
          </dl>
          <div className="case-article">
            <section>
              <h2>The problem</h2>
              <p>{study.problem}</p>
            </section>
            <section>
              <h2>Product decision</h2>
              <p>{study.decision}</p>
            </section>
            {study.flow && (
              <div className="flow">
                {study.flow.map((f) => (
                  <article key={f.stage}>
                    <small>{f.stage}</small>
                    <strong>{f.title}</strong>
                    <p>{f.note}</p>
                  </article>
                ))}
              </div>
            )}
            {study.blocks.map((b) => (
              <section key={b.title}>
                <h2>{b.title}</h2>
                {Array.isArray(b.body) ? (
                  <ul>
                    {b.body.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{b.body}</p>
                )}
              </section>
            ))}
            <section>
              <h2>My role</h2>
              <p>{study.role}</p>
            </section>
            <section>
              <h2>Outcome</h2>
              <p>{study.outcome}</p>
              <div className="chip-row">
                {study.chips.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </section>
            <nav className="case-nav">
              <Link to={`/work/${prev.slug}`}>
                <small>Previous</small>
                <strong>{prev.title}</strong>
              </Link>
              <Link to={`/work/${next.slug}`}>
                <small>Next</small>
                <strong>{next.title}</strong>
              </Link>
            </nav>
          </div>
        </div>
        <div className="wrap">
          <SiteFooter />
        </div>
      </article>
    </>
  );
}
