/** Slowly moving dashed route lines with stops. Pure SVG + CSS, so it is light on cheap phones. */
export function RouteLines() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(ellipse_at_60%_40%,black,transparent_75%)]"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g strokeLinecap="round" strokeDasharray="6 14" className="[&>path]:animate-dash">
        <path d="M-40 640 C 220 600, 300 380, 560 400 S 900 560, 1240 220" stroke="rgba(0,0,0,0.28)" strokeWidth="2" />
        <path d="M-40 200 C 200 260, 360 120, 620 180 S 960 380, 1240 520" stroke="rgba(0,0,0,0.16)" strokeWidth="1.5" />
        <path d="M200 860 C 320 640, 520 640, 700 520 S 1000 180, 1240 120" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
      </g>
      <g fill="#fff" stroke="#111" strokeWidth="2.5">
        <circle cx="1030" cy="400" r="7" />
        <circle cx="930" cy="610" r="7" />
      </g>
    </svg>
  );
}
