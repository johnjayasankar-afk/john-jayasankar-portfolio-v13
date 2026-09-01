type LogoName = "quantile" | "opengamma";

export function CompanyLogo({ name }: { name: LogoName }) {
  return (
    <span className="company-logo" data-logo={name} aria-hidden="true">
      {name === "quantile" ? <QuantileMark /> : <OpenGammaMark />}
    </span>
  );
}

function OpenGammaMark() {
  return (
    <svg viewBox="0.88 0 293.12 31.5" fill="currentColor" overflow="visible">
      <path d="M10.1314.146H9.71168C4.85436.146.883 3.838.883 8.647v14.186c0 4.809 3.971 8.55 8.755 8.55h.42c4.859 0 8.755-3.741 8.755-8.55h.073V8.647c0-4.809-3.896-8.501-8.755-8.501Zm4.414 22.663c0 2.429-2.047 4.276-4.439 4.348h-.42c-2.392 0-4.439-1.895-4.439-4.348V8.624c0-2.428 2.047-4.276 4.439-4.276h.42c2.392 0 4.439 1.846 4.439 4.276v14.185Z" />
      <path d="M43.547.364h-7.349c-1.208 0-2.17 1.021-2.17 2.138v26.744c0 1.432 1.084 2.138 2.17 2.138s2.171-1.704 2.171-2.138V17.659h5.105c4.859 0 8.459-3.862 8.459-8.671S48.405.364 43.547.364Zm-.025 13.069h-5.105V4.566h5.105c2.465 0 4.143 2.017 4.143 4.397s-1.678 4.47-4.143 4.47Z" />
      <path d="M81.08 4.519c1.43 0 2.17-1.069 2.17-2.089C83.25 1.41 82.536.292 81.08.292H67.467c-1.134 0-2.17 1.02-2.17 2.138v26.429c0 1.117 1.011 2.138 2.17 2.138H81.08c1.43 0 2.17-1.068 2.17-2.089 0-1.02-.714-2.138-2.17-2.138H69.563V17.296h7.792c1.431 0 2.171-1.068 2.171-2.138 0-1.07-.715-2.089-2.171-2.089H69.563V4.519H81.08Z" />
      <path d="M114.718 2.138C114.718.705 113.583 0 112.499 0c-1.085 0-2.096.704-2.096 2.138v18.606L101.822 1.603C101.155.049 100.096.049 99.553.049h-.493c-1.431 0-2.269 1.068-2.269 2.21v26.915c0 1.432 1.135 2.138 2.219 2.138 1.084 0 2.095-.704 2.095-2.138V10.348l8.582 19.141c.715 1.677 1.801 1.846 2.392 1.846h.493c1.208 0 2.171-1.021 2.171-2.138l-.025-.025V2.138Z" />
      <path d="M145.667 13.846h-5.746c-1.43 0-2.17 1.02-2.17 2.089 0 1.068.715 2.138 2.17 2.138h3.65v4.566c0 2.428-2.047 4.445-4.439 4.445h-.42c-2.392 0-4.439-1.895-4.439-4.348V8.55c0-2.428 2.047-4.276 4.439-4.276h.42c2.219 0 4.266 1.068 4.487 3.085.174 1.311 1.135 1.895 2.096 1.895 1.011 0 2.096-.704 2.096-2.016v-.243c-.42-3.862-4.02-6.947-8.706-6.947h-.419c-4.809 0-8.755 3.692-8.755 8.502v14.186c0 4.809 3.896 8.55 8.755 8.55h.419c4.859 0 8.755-3.862 8.755-8.671l.025.024v-6.655c0-1.19-1.084-2.138-2.218-2.138Z" />
      <path d="M182.855 28.59 174.346 1.749C173.976.607 172.965.097 171.881.097c-1.085 0-2.096.535-2.466 1.652L160.907 28.59c0 .243-.05.486-.05.704 0 1.117.913 2.016 2.219 2.016 1.306 0 1.8-.486 2.095-1.555l1.801-5.879h9.963l1.849 5.879c.369 1.068 1.207 1.555 2.047 1.555 1.307 0 2.219-.899 2.219-2.016 0-.171-.05-.486-.174-.704h-.025zm-14.574-8.914 3.6-11.756 3.649 11.756h-7.249z" />
      <path d="M217.38.072h-.543c-1.208 0-1.801.292-2.219 1.239l-6.535 14.671-6.658-14.671C201.056.486 200.218.072 199.207.072h-.543c-1.135 0-2.171 1.021-2.171 2.138v26.962c0 1.432 1.085 2.138 2.171 2.138 1.086 0 2.17-.704 2.17-2.138V10.347l5.031 11.101c.419.899 1.307 1.311 2.218 1.311.912 0 1.849-.413 2.269-1.311l4.859-11.101v18.826c0 1.432 1.084 2.138 2.17 2.138 1.086 0 2.171-.704 2.171-2.138V2.21c0-1.142-1.011-2.138-2.171-2.138Z" />
      <path d="M256.122.072h-.543c-1.208 0-1.801.292-2.219 1.239l-6.535 14.671-6.658-14.671C239.797.486 238.959.072 237.948.072h-.543c-1.134 0-2.17 1.021-2.17 2.138v26.962c0 1.432 1.084 2.138 2.17 2.138 1.086 0 2.171-.704 2.171-2.138V10.347l5.03 11.101c.42.899 1.308 1.311 2.219 1.311.911 0 1.849-.413 2.269-1.311l4.859-11.101v18.826c0 1.432 1.084 2.138 2.17 2.138 1.086 0 2.171-.704 2.171-2.138V2.21c0-1.142-1.012-2.138-2.171-2.138Z" />
      <path d="M293.804 28.614v-.024L285.295 1.749C284.925.607 283.914.097 282.83.097c-1.085 0-2.096.535-2.465 1.652l-8.509 26.865c0 .243-.05.486-.05.704 0 1.117.913 2.016 2.219 2.016 1.306 0 1.801-.486 2.095-1.555l1.801-5.879h9.963l1.849 5.879c.37 1.068 1.208 1.555 2.047 1.555 1.308 0 2.219-.899 2.219-2.016 0-.17-.074-.486-.197-.704zm-14.575-8.938 3.599-11.756 3.65 11.756h-7.249z" />
    </svg>
  );
}

function QuantileMark() {
  const H = 32;
  const S = 4.22;
  const paths: Array<{ x: number; d: string; evenodd?: boolean; stroke?: boolean }> = [];

  paths.push({ x: 0, d: ring(H / 2, H / 2, H / 2, H / 2 - S), evenodd: true });
  paths.push({ x: 0, d: qTail(H / 2, H / 2, H / 2, H / 2 - S, S) });

  let x = H + 11.1;
  const uW = 27.15;
  paths.push({ x, d: makeU(H, S, uW), stroke: true });
  x += uW + 9.05;

  const aW = 31.35;
  paths.push({ x, d: makeA(aW, H, S) });
  x += aW + 10.5;

  const nW = 28.2;
  paths.push({ x, d: makeN(nW, H, S) });
  x += nW + 10.95;

  const tW = 26.15;
  paths.push({ x, d: makeT(tW, H, S) });
  x += tW + 10.95;

  paths.push({ x, d: makeI(H, S) });
  x += S + 15.15;

  const lW = 22.55;
  paths.push({ x, d: makeL(lW, H, S) });
  x += lW + 9.35;

  const eW = 24.05;
  paths.push({ x, d: makeE(eW, H, S) });
  const width = x + eW;

  return (
    <svg viewBox={`0 0 ${width.toFixed(2)} ${H}`} fill="currentColor" overflow="visible">
      {paths.map((p, i) =>
        p.stroke ? (
          <path
            key={i}
            transform={`translate(${p.x} 0)`}
            d={p.d}
            fill="none"
            stroke="currentColor"
            strokeWidth={S}
            strokeLinecap="butt"
            strokeLinejoin="round"
          />
        ) : (
          <path key={i} transform={`translate(${p.x} 0)`} d={p.d} fillRule={p.evenodd ? "evenodd" : "nonzero"} />
        ),
      )}
    </svg>
  );
}

function ring(cx: number, cy: number, ro: number, ri: number) {
  return [
    `M ${fmt(cx + ro)} ${fmt(cy)}`,
    `A ${fmt(ro)} ${fmt(ro)} 0 1 1 ${fmt(cx - ro)} ${fmt(cy)}`,
    `A ${fmt(ro)} ${fmt(ro)} 0 1 1 ${fmt(cx + ro)} ${fmt(cy)} Z`,
    `M ${fmt(cx + ri)} ${fmt(cy)}`,
    `A ${fmt(ri)} ${fmt(ri)} 0 1 0 ${fmt(cx - ri)} ${fmt(cy)}`,
    `A ${fmt(ri)} ${fmt(ri)} 0 1 0 ${fmt(cx + ri)} ${fmt(cy)} Z`,
  ].join(" ");
}

function qTail(cx: number, cy: number, ro: number, ri: number, S: number) {
  const ang = (44 * Math.PI) / 180;
  const ux = Math.cos(ang);
  const uy = Math.sin(ang);
  const px = -uy;
  const py = ux;
  const start = ri - 0.2;
  const end = ro + 2.45;
  const h = S / 2;
  const pts = [
    [cx + ux * start + px * h, cy + uy * start + py * h],
    [cx + ux * end + px * h, cy + uy * end + py * h],
    [cx + ux * end - px * h, cy + uy * end - py * h],
    [cx + ux * start - px * h, cy + uy * start - py * h],
  ];
  return `M ${fmt(pts[0][0])} ${fmt(pts[0][1])} L ${fmt(pts[1][0])} ${fmt(pts[1][1])} L ${fmt(pts[2][0])} ${fmt(pts[2][1])} L ${fmt(pts[3][0])} ${fmt(pts[3][1])} Z`;
}

function makeU(H: number, S: number, W: number) {
  const r = W / 2 - S / 2;
  const cy = H - W / 2;
  return `M ${fmt(S / 2)} 0 V ${fmt(cy)} A ${fmt(r)} ${fmt(r)} 0 0 0 ${fmt(W - S / 2)} ${fmt(cy)} V 0`;
}

function makeA(W: number, H: number, S: number) {
  const half = W / 2;
  const len = Math.hypot(half, H);
  const foot = (S * len) / H;
  const innerY = (S * len) / half;
  return [
    `M ${fmt(half)} 0`,
    `L 0 ${H}`,
    `L ${fmt(foot)} ${H}`,
    `L ${fmt(half)} ${fmt(innerY)}`,
    `L ${fmt(W - foot)} ${H}`,
    `L ${W} ${H} Z`,
  ].join(" ");
}

function makeN(W: number, H: number, S: number) {
  return [
    `M 0 0 H ${fmt(S)} V ${H} H 0 Z`,
    `M ${fmt(W - S)} 0 H ${fmt(W)} V ${H} H ${fmt(W - S)} Z`,
    `M 0 0 L ${fmt(S)} 0 L ${fmt(W)} ${fmt(H - S)} L ${fmt(W)} ${H} L ${fmt(W - S)} ${H} L 0 ${fmt(S)} Z`,
  ].join(" ");
}

function makeT(W: number, H: number, S: number) {
  const mid = (W - S) / 2;
  return `M 0 0 H ${fmt(W)} V ${fmt(S)} H ${fmt(mid + S)} V ${H} H ${fmt(mid)} V ${fmt(S)} H 0 Z`;
}

function makeI(H: number, S: number) {
  return `M 0 0 H ${fmt(S)} V ${H} H 0 Z`;
}

function makeL(W: number, H: number, S: number) {
  return `M 0 0 H ${fmt(S)} V ${fmt(H - S)} H ${fmt(W)} V ${H} H 0 Z`;
}

function makeE(W: number, H: number, S: number) {
  const midY = (H - S) / 2;
  return `M 0 0 H ${fmt(W)} V ${fmt(S)} H ${fmt(S)} V ${fmt(midY)} H ${fmt(W)} V ${fmt(midY + S)} H ${fmt(S)} V ${fmt(H - S)} H ${fmt(W)} V ${H} H 0 Z`;
}

function fmt(n: number) {
  return Number(n.toFixed(3)).toString();
}
