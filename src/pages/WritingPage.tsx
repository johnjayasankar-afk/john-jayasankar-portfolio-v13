import { person, writing } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/Layout";

export function WritingPage() {
  return (
    <div className="paper" style={{ paddingTop: "calc(var(--header) + 48px)" }}>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <Reveal>
            <p className="kicker">Writing</p>
            <h1 className="display" style={{ margin: "14px 0 18px", maxWidth: "14ch" }}>
              Notes on agents, markets, and product economics.
            </h1>
            <p className="lede">
              Short theses on AI product economics, autonomy, and why the hardest AI products are often infrastructure
              products.
            </p>
          </Reveal>
          <div className="writing-list" style={{ marginTop: 48 }}>
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
          <p style={{ marginTop: 32 }}>
            <a className="text-link" href={person.substack} target="_blank" rel="noreferrer">
              Follow on Substack <i>↗</i>
            </a>
          </p>
        </div>
      </section>
      <div className="wrap">
        <SiteFooter />
      </div>
    </div>
  );
}
