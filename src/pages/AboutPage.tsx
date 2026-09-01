import { earlier, experience, person, skills } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/Layout";
import { CompanyLogo } from "@/components/CompanyLogos";

export function AboutPage() {
  return (
    <div className="paper" style={{ paddingTop: "calc(var(--header) + 48px)" }}>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap about-grid">
          <Reveal>
            <p className="kicker">About</p>
            <h1 className="display" style={{ margin: "14px 0 22px" }}>
              Technical enough to go deep. Product-minded enough to know why.
            </h1>
            <p className="lede">
              I build AI agents and financial infrastructure for complex, high-stakes workflows. Lead PM at Quantile
              (LSEG), shipping production agents and 0→1 products used by global banks. The work has cut expert
              workflows from hours to minutes, scaled operations without added headcount, and generated $3M+ in new and
              expansion ARR.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              Previously I originated a pre-trade margin simulator at OpenGamma. I trained in markets where precision is
              not optional — then brought that standard to agents.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              I want to do this at companies that treat product craft as a competitive advantage: Stripe, Ramp, Brex,
              OpenAI, Anthropic, Meta, Google — teams building systems people actually have to trust.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-ink" href={`mailto:${person.email}`}>
                Email me
              </a>
              <a className="btn btn-line" href={person.resume} target="_blank" rel="noreferrer">
                Résumé
              </a>
            </div>
            <p style={{ marginTop: 36, color: "var(--ink-2)" }}>
              {person.education.school}
              <br />
              {person.education.degree}
              <br />
              <span style={{ color: "var(--muted)" }}>{person.education.detail} · {person.education.year}</span>
            </p>
          </Reveal>
          <div>
            <div className="experience">
              {experience.map((e) => (
                <article className="exp-block" key={e.company}>
                  <div className="exp-top">
                    <div className="exp-identity">
                      <CompanyLogo name={e.logo} />
                      <h3>{e.company}</h3>
                    </div>
                    <span className="kicker">{e.location}</span>
                  </div>
                  <p className="parent">{e.parent}</p>
                  {e.roles.map((r) => (
                    <div className="role" key={r.title}>
                      <strong>{r.title}</strong>
                      <div className="dates">{r.dates}</div>
                      <ul>
                        {r.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </article>
              ))}
            </div>
            <div className="exp-block">
              <h3>Earlier</h3>
              {earlier.map((x) => (
                <div className="role" key={x.org}>
                  <strong>
                    {x.org} — {x.role}
                  </strong>
                  <div className="dates">{x.dates}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="wrap skill-cols">
          <div>
            <h4>AI & systems</h4>
            <ul>
              {skills.ai.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              {skills.product.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Domain</h4>
            <ul>
              {skills.domain.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Build</h4>
            <ul>
              {skills.build.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="wrap">
        <SiteFooter />
      </div>
    </div>
  );
}
