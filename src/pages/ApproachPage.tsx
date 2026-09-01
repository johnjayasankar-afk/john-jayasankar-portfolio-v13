import { Link } from "react-router-dom";
import { principles } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/Layout";

const ladder = [
  { n: "01", t: "Assist", d: "Retrieve and summarize. Human executes." },
  { n: "02", t: "Copilot", d: "Recommend actions. Human decides." },
  { n: "03", t: "Supervised", d: "Act with approval. Human remains the gate." },
  { n: "04", t: "Bounded", d: "Act inside policy. Evals decide the next inch." },
];

export function ApproachPage() {
  return (
    <div className="paper" style={{ paddingTop: "calc(var(--header) + 48px)" }}>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <Reveal>
            <p className="kicker">Approach</p>
            <h1 className="display" style={{ margin: "14px 0 18px", maxWidth: "14ch" }}>
              Model capability is only one layer.
            </h1>
            <p className="lede">
              Consequential workflows need context, bounded tools, deterministic services, human control, and evidence
              that the system deserves more scope. That is the product.
            </p>
          </Reveal>
        </div>
        <div className="wrap-wide" style={{ marginTop: 64 }}>
          <div className="principle-grid">
            {principles.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.08}>
                <article className="principle">
                  <div className="num">{p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="control-band">
              <div>
                <p className="kicker">Autonomy ladder</p>
                <h2 className="display" style={{ fontSize: "2.2rem", margin: "12px 0 14px" }}>
                  Scope expands when the evidence says it should.
                </h2>
                <p style={{ color: "rgba(244,239,230,0.68)" }}>
                  I standardized this pattern across five enterprise systems: reusable MCP servers, domain APIs,
                  Pydantic-typed actions, deterministic services, human approval, and evaluation baselines.
                </p>
                <p style={{ marginTop: 18 }}>
                  <Link to="/work/platform" className="text-link">
                    Platform case <i>→</i>
                  </Link>
                </p>
              </div>
              <ul className="ladder">
                {ladder.map((l) => (
                  <li key={l.n}>
                    <small>{l.n}</small>
                    {l.t}
                    <span style={{ display: "block", marginTop: 6, color: "rgba(244,239,230,0.5)" }}>{l.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
      <div className="wrap">
        <SiteFooter />
      </div>
    </div>
  );
}
