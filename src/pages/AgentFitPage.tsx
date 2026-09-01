import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/Layout";

type Inputs = {
  volume: number;
  minutes: number;
  rules: number;
  access: number;
  reverse: number;
  consequence: number;
};

const presets: Record<string, Inputs> = {
  "Ops setup": { volume: 150, minutes: 30, rules: 5, access: 4, reverse: 4, consequence: 2 },
  "Support triage": { volume: 80, minutes: 18, rules: 4, access: 4, reverse: 3, consequence: 3 },
  "Payment exception": { volume: 40, minutes: 45, rules: 3, access: 3, reverse: 2, consequence: 5 },
};

function scoreFit(i: Inputs) {
  const repetition = Math.min(100, (i.volume / 220) * 100);
  const timeValue = Math.min(100, (i.minutes / 60) * 100);
  const raw =
    (i.rules / 5) * 26 +
    (i.access / 5) * 24 +
    (i.reverse / 5) * 16 +
    repetition * 0.16 +
    timeValue * 0.1 -
    (i.consequence / 5) * 8;
  const score = Math.max(20, Math.min(96, Math.round(raw)));
  let autonomy = "Assist / automate pieces";
  let pattern = "Retrieval + deterministic workflow";
  let efficiency = 0.3;
  if (score >= 84) {
    autonomy = "Bounded autonomous";
    pattern = "APIs + typed actions + policy gates";
    efficiency = 0.72;
  } else if (score >= 68) {
    autonomy = "Supervised agent";
    pattern = "APIs + typed actions + approval";
    efficiency = 0.65;
  } else if (score >= 50) {
    autonomy = "Copilot";
    pattern = "Retrieval + suggested actions";
    efficiency = 0.48;
  }
  const hours = Math.round(((i.volume * i.minutes) / 60) * efficiency);
  return { score, autonomy, pattern, hours };
}

export function AgentFitPage() {
  const [inputs, setInputs] = useState<Inputs>(presets["Ops setup"]);
  const [preset, setPreset] = useState("Ops setup");
  const result = useMemo(() => scoreFit(inputs), [inputs]);

  const set = (key: keyof Inputs, value: number) => {
    setPreset("Custom");
    setInputs((s) => ({ ...s, [key]: value }));
  };

  return (
    <div className="paper" style={{ paddingTop: "calc(var(--header) + 48px)" }}>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <Reveal>
            <p className="kicker">Independent product</p>
            <h1 className="display" style={{ margin: "14px 0 18px", maxWidth: "16ch" }}>
              How autonomous should this workflow be?
            </h1>
            <p className="lede">
              AgentFit turns volume, time, rule clarity, system access, reversibility, and consequence into a fit score
              and a control posture. It is a discovery hypothesis — not a production authorization.
            </p>
          </Reveal>
        </div>
        <div className="wrap-wide" style={{ marginTop: 48 }}>
          <div className="fit-shell">
            <div className="fit-panel">
              <h2 className="display" style={{ fontSize: "1.8rem" }}>
                Define the work
              </h2>
              <div className="presets">
                {Object.keys(presets).map((name) => (
                  <button
                    key={name}
                    className={preset === name ? "on" : ""}
                    onClick={() => {
                      setPreset(name);
                      setInputs(presets[name]);
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <Field label="Weekly volume" value={inputs.volume} max={300} onChange={(v) => set("volume", v)} />
              <Field label="Minutes per case" value={inputs.minutes} max={90} onChange={(v) => set("minutes", v)} />
              <Field label="Rule clarity" value={inputs.rules} max={5} onChange={(v) => set("rules", v)} suffix="/5" />
              <Field label="System / data access" value={inputs.access} max={5} onChange={(v) => set("access", v)} suffix="/5" />
              <Field label="Action reversibility" value={inputs.reverse} max={5} onChange={(v) => set("reverse", v)} suffix="/5" />
              <Field
                label="Failure consequence"
                value={inputs.consequence}
                max={5}
                onChange={(v) => set("consequence", v)}
                suffix="/5"
              />
            </div>
            <div className="fit-panel fit-result">
              <div>
                <p className="kicker">Recommendation</p>
                <div className="fit-score">
                  {result.score}
                  <small>/100</small>
                </div>
                <p style={{ marginTop: 12, fontSize: "1.2rem" }}>{result.autonomy}</p>
                <p style={{ color: "rgba(244,239,230,0.55)", marginTop: 8 }}>{result.pattern}</p>
              </div>
              <div className="fit-kpis">
                <div>
                  <span>Capacity returned</span>
                  <strong>
                    {result.hours} hrs / week
                  </strong>
                </div>
                <div>
                  <span>Control posture</span>
                  <strong>{result.score >= 84 ? "Policy gates" : result.score >= 68 ? "Human approval" : "Human executes"}</strong>
                </div>
              </div>
            </div>
          </div>
          <p style={{ marginTop: 28 }}>
            <Link className="text-link" to="/work/agentfit">
              Build notes <i>→</i>
            </Link>
          </p>
        </div>
      </section>
      <div className="wrap">
        <SiteFooter />
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  max,
  onChange,
  suffix = "",
}: {
  label: string;
  value: number;
  max: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  return (
    <div className="fit-row">
      <div>
        <label>{label}</label>
        <input type="range" min={1} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} />
      </div>
      <b>
        {value}
        {suffix}
      </b>
    </div>
  );
}
