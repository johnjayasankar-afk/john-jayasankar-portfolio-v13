type MarkProps = { variant: string };

export function WorkMark({ variant }: MarkProps) {
  return (
    <svg viewBox="0 0 640 360" className="work-mark" aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1714" />
          <stop offset="100%" stopColor="#0c0b0a" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#g)" />
      {variant === "iport" && <IPort />}
      {variant === "coco" && <Coco />}
      {variant === "cross-currency" && <Net />}
      {variant === "valuation" && <Dual />}
      {variant === "fx-compression" && <Gate />}
      {variant === "platform" && <Layers />}
      {variant === "margin-simulator" && <Bars />}
      {variant === "agentfit" && <Fit />}
    </svg>
  );
}

function stroke(ctx: "night" | "copper" = "night") {
  return ctx === "copper" ? "#c45c26" : "rgba(244,239,230,0.55)";
}

function IPort() {
  return (
    <g fill="none" strokeLinecap="round">
      <path d="M72 250 H568" stroke="rgba(244,239,230,0.12)" strokeWidth="1" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={80 + i * 42}
          y={168}
          width={28}
          height={82}
          rx="3"
          stroke="rgba(244,239,230,0.22)"
          className="mark-bar"
          style={{ animationDelay: `${i * 90}ms` }}
        />
      ))}
      <rect x="420" y="196" width="28" height="54" rx="3" stroke={stroke("copper")} strokeWidth="1.6" />
      <rect x="458" y="214" width="28" height="36" rx="3" stroke={stroke("copper")} strokeWidth="1.6" />
      <rect x="496" y="228" width="28" height="22" rx="3" stroke={stroke("copper")} strokeWidth="1.8" />
      <circle cx="510" cy="118" r="36" stroke={stroke("copper")} strokeWidth="1.4" />
      <circle cx="510" cy="118" r="6" fill="#c45c26" />
      <text x="72" y="86" fill="rgba(244,239,230,0.4)" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">
        EXPERT SETUP → BOUNDED AGENT
      </text>
      <text x="72" y="312" fill="rgba(244,239,230,0.72)" fontFamily="Fraunces, serif" fontSize="28">
        3.5h → 8m
      </text>
    </g>
  );
}

function Coco() {
  return (
    <g fill="none">
      <rect x="80" y="110" width="150" height="88" rx="10" stroke="rgba(244,239,230,0.3)" />
      <rect x="80" y="214" width="150" height="88" rx="10" stroke="rgba(244,239,230,0.3)" />
      <text x="98" y="160" fill="#f4efe6" fontFamily="IBM Plex Mono, monospace" fontSize="12">
        MCP 01
      </text>
      <text x="98" y="264" fill="#f4efe6" fontFamily="IBM Plex Mono, monospace" fontSize="12">
        MCP 02
      </text>
      <path d="M230 154 H310" stroke={stroke("copper")} />
      <path d="M230 258 H310" stroke={stroke("copper")} />
      <circle cx="352" cy="206" r="42" stroke={stroke("copper")} strokeWidth="1.5" />
      <text x="334" y="211" fill="#f4efe6" fontFamily="Outfit, sans-serif" fontSize="13">
        diagnose
      </text>
      <path d="M394 206 H470" stroke="rgba(244,239,230,0.35)" />
      <rect x="470" y="168" width="96" height="76" rx="10" stroke="rgba(244,239,230,0.3)" />
      <text x="486" y="212" fill="#e08a52" fontFamily="Fraunces, serif" fontSize="20">
        −78%
      </text>
    </g>
  );
}

function Net() {
  const pts = [
    [180, 90],
    [300, 70],
    [430, 110],
    [500, 200],
    [420, 290],
    [260, 300],
    [140, 220],
    [220, 170],
  ];
  return (
    <g fill="none">
      {pts.map(([x, y], i) => (
        <g key={i}>
          <line x1="320" y1="186" x2={x} y2={y} stroke="rgba(244,239,230,0.16)" />
          <circle cx={x} cy={y} r="5" fill={i % 2 ? "#c45c26" : "#f4efe6"} />
        </g>
      ))}
      <circle cx="320" cy="186" r="16" stroke={stroke("copper")} strokeWidth="1.5" />
      <circle cx="320" cy="186" r="4" fill="#c45c26" />
      <text x="72" y="322" fill="rgba(244,239,230,0.72)" fontFamily="Fraunces, serif" fontSize="26">
        $6.5T network
      </text>
    </g>
  );
}

function Dual() {
  return (
    <g fill="none">
      <path d="M120 80 V280" stroke="rgba(244,239,230,0.2)" />
      <path d="M240 80 V280" stroke="rgba(244,239,230,0.2)" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <g key={i}>
          <circle cx="120" cy={100 + i * 26} r="4" fill={i === 3 ? "#c45c26" : "rgba(244,239,230,0.7)"} />
          <circle cx="240" cy={104 + i * 25} r="4" fill={i === 3 ? "#c45c26" : "rgba(244,239,230,0.7)"} />
          {i === 3 && <path d="M120 178 H240" stroke="#c45c26" />}
        </g>
      ))}
      <rect x="340" y="140" width="200" height="120" rx="12" stroke={stroke("copper")} />
      <text x="368" y="192" fill="#f4efe6" fontFamily="Fraunces, serif" fontSize="28">
        verified
      </text>
      <text x="368" y="222" fill="rgba(244,239,230,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">
        48H EARLIER · −91%
      </text>
    </g>
  );
}

function Gate() {
  return (
    <g fill="none" strokeLinecap="round">
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M80 ${110 + i * 36} C 220 ${110 + i * 36}, 260 180, 340 180`}
          stroke={i === 2 ? "#c45c26" : "rgba(244,239,230,0.28)"}
          strokeWidth={i === 2 ? 1.8 : 1.2}
        />
      ))}
      <rect x="340" y="148" width="70" height="64" rx="8" stroke={stroke("copper")} />
      <text x="352" y="186" fill="#f4efe6" fontSize="12" fontFamily="IBM Plex Mono, monospace">
        GATE
      </text>
      <path d="M410 180 H560" stroke="#c45c26" strokeWidth="1.6" />
      <circle cx="568" cy="180" r="8" fill="#c45c26" />
      <text x="80" y="312" fill="rgba(244,239,230,0.72)" fontFamily="Fraunces, serif" fontSize="26">
        100% accepted
      </text>
    </g>
  );
}

function Layers() {
  return (
    <g fill="none">
      {["context", "tools", "actions", "control", "evals"].map((label, i) => (
        <g key={label} transform={`translate(${90 + i * 18} ${80 + i * 28})`}>
          <rect width="360" height="52" rx="10" stroke={i === 3 ? "#c45c26" : "rgba(244,239,230,0.28)"} />
          <text x="18" y="32" fill="#f4efe6" fontFamily="Outfit, sans-serif" fontSize="14">
            {label}
          </text>
        </g>
      ))}
    </g>
  );
}

function Bars() {
  const h = [46, 92, 70, 128, 88, 54];
  return (
    <g fill="none">
      {h.map((v, i) => (
        <rect
          key={i}
          x={90 + i * 70}
          y={260 - v}
          width="42"
          height={v}
          rx="4"
          stroke={i === 3 ? "#c45c26" : "rgba(244,239,230,0.3)"}
          fill={i === 3 ? "rgba(196,92,38,0.18)" : "transparent"}
        />
      ))}
      <path d="M80 260 H520" stroke="rgba(244,239,230,0.16)" />
      <text x="80" y="312" fill="rgba(244,239,230,0.72)" fontFamily="Fraunces, serif" fontSize="26">
        up to −30% IM
      </text>
    </g>
  );
}

function Fit() {
  return (
    <g fill="none">
      <circle cx="320" cy="176" r="110" stroke="rgba(244,239,230,0.12)" />
      <circle cx="320" cy="176" r="78" stroke="rgba(244,239,230,0.2)" />
      <circle cx="320" cy="176" r="48" stroke="#c45c26" strokeWidth="1.6" strokeDasharray="220 80" />
      <text x="320" y="172" textAnchor="middle" fill="#f4efe6" fontFamily="Fraunces, serif" fontSize="42">
        82
      </text>
      <text x="320" y="196" textAnchor="middle" fill="rgba(244,239,230,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">
        FIT / 100
      </text>
    </g>
  );
}
