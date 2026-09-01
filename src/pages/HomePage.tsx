import { Link } from "react-router-dom";
import { cases, metrics, person, principles, writing } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { HeroCanvas } from "@/components/visuals/HeroCanvas";
import { WorkMark } from "@/components/visuals/WorkMark";
import { SiteFooter } from "@/components/Layout";

const featured = cases.find((c) => c.featured)!;
const rest = cases.filter((c) => !c.featured).slice(0, 4);

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="hero-meta">
              <span>Lead Product Manager</span>
              <span>New York</span>
              <span>Quantile · LSEG</span>
            </div>
            <h1 className="display">
              I ship production <em>AI</em> for systems that cannot fail.
            </h1>
            <p className="hero-copy">
              At Quantile, I turn high-stakes financial workflows into agents and infrastructure global banks actually
              run. Expert work that took hours now takes minutes. New products have generated $3M+ ARR. The systems have
              to be correct — and they have to change the operating model.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-solid" to="/work">
                Selected work
              </Link>
              <a className="btn btn-ghost" href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden>
            <HeroCanvas />
          </div>
        </div>
        <div className="hero-metrics">
          {metrics.map((m) => (
            <div className="metric" key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="paper section">
        <div className="wrap-wide">
          <Reveal>
            <div className="section-head">
              <p className="kicker">Selected work</p>
              <div>
                <h2 className="display">
                  Eight products. <em>Clear impact.</em>
                </h2>
                <p style={{ marginTop: 16 }}>
                  Production agents, 0→1 market infrastructure, and the control plane that made the agents safe to run.
                  Employer work is generalized to protect confidential implementation detail.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <Link to={`/work/${featured.slug}`} className="work-feature">
              <div className="work-feature-visual">
                <WorkMark variant={featured.slug} />
              </div>
              <div className="work-feature-copy">
                <div>
                  <p className="kicker">
                    {featured.number} · {featured.kicker}
                  </p>
                  <h3 className="display">{featured.title}</h3>
                  <p>{featured.summary}</p>
                  <div className="work-stats">
                    {featured.metrics.map((m) => (
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
              <Reveal key={c.slug} delay={i * 0.06}>
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
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p style={{ marginTop: 28 }}>
              <Link className="text-link" to="/work">
                All work <i>→</i>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="paper section" style={{ paddingTop: 0 }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="section-head">
              <p className="kicker">How I build</p>
              <h2 className="display">
                Agents should <em>earn</em> autonomy.
              </h2>
            </div>
          </Reveal>
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
            <p style={{ marginTop: 28 }}>
              <Link className="text-link" to="/approach">
                The control model <i>→</i>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="paper section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <p className="kicker">Writing</p>
              <h2 className="display">
                Product theses, <em>not</em> thought leadership.
              </h2>
            </div>
          </Reveal>
          <div className="writing-list">
            {writing.map((w) => (
              <a key={w.title} className="writing-row" href={person.substack} target="_blank" rel="noreferrer">
                <span className="kicker">{w.tag}</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.dek}</p>
                </div>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <p className="kicker">Contact</p>
          <h2 className="display" style={{ marginTop: 18 }}>
            Building something hard that should feel obvious?
          </h2>
          <p className="lede light" style={{ marginTop: 20 }}>
            I want to work on AI-native products, financial infrastructure, and software that turns consequential
            workflows into something dramatically better — at places that care about craft. Stripe, Ramp, OpenAI,
            Anthropic, and teams like them.
          </p>
          <div className="contact-links">
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <a href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={person.resume} target="_blank" rel="noreferrer">
              Résumé
            </a>
            <a href={person.substack} target="_blank" rel="noreferrer">
              Writing
            </a>
          </div>
          <SiteFooter night />
        </div>
      </section>
    </>
  );
}
