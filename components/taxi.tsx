import { Pattern } from "@/components/qr-sticker";

// Side-view minibus taxi, facing right. Local box is about 420 x 200 (wheels end at y = 200).
const BODY = "M0 166 V50 Q0 26 24 26 H318 Q346 26 364 52 L398 102 Q410 118 410 140 V166 Z";
const CAB = "M292 44 H324 Q337 44 346 57 L368 88 H292 Z";
const GLASS = "#cfe3f5";

interface TaxiProps {
  /** Unique per instance on the page (used for clip-path ids). */
  idPrefix: string;
  /** Spin the wheels (for the driving taxi). */
  spin?: boolean;
  /** Animation class for the driver (e.g. a small nod). */
  driverClass?: string;
}

export function Taxi({ idPrefix, spin = false, driverClass }: TaxiProps) {
  const id = (s: string) => `${idPrefix}-${s}`;

  return (
    <g>
      <defs>
        <clipPath id={id("body")}>
          <path d={BODY} />
        </clipPath>
        <clipPath id={id("cab")}>
          <path d={CAB} />
        </clipPath>
        <clipPath id={id("w1")}>
          <rect x={26} y={44} width={78} height={44} rx={8} />
        </clipPath>
        <clipPath id={id("w2")}>
          <rect x={114} y={44} width={78} height={44} rx={8} />
        </clipPath>
      </defs>

      {/* roof sign */}
      <rect x={128} y={2} width={92} height={26} rx={5} fill="#FFC800" stroke="#111" strokeWidth={3} />
      <text
        x={174}
        y={21}
        textAnchor="middle"
        fontSize={18}
        fontWeight={800}
        fill="#111"
        letterSpacing={2}
        style={{ fontFamily: "var(--font-display), Impact, sans-serif" }}
      >
        TAXI
      </text>

      {/* body + yellow band */}
      <path d={BODY} fill="#fff" stroke="#111" strokeWidth={4} strokeLinejoin="round" />
      <g clipPath={`url(#${id("body")})`}>
        <rect x={0} y={104} width={420} height={18} fill="#FFC800" />
        <rect x={0} y={104} width={420} height={2.5} fill="#111" />
        <rect x={0} y={119.5} width={420} height={2.5} fill="#111" />
      </g>

      {/* windows */}
      <rect x={26} y={44} width={78} height={44} rx={8} fill={GLASS} stroke="#111" strokeWidth={3} />
      <rect x={114} y={44} width={78} height={44} rx={8} fill={GLASS} stroke="#111" strokeWidth={3} />
      <rect x={202} y={44} width={78} height={44} rx={8} fill={GLASS} stroke="#111" strokeWidth={3} />
      <path d={CAB} fill={GLASS} stroke="#111" strokeWidth={3} strokeLinejoin="round" />

      {/* passengers */}
      <g clipPath={`url(#${id("w1")})`}>
        <circle cx={66} cy={68} r={11} fill="#7a4a2a" />
        <path d="M40 92 Q40 80 66 80 Q92 80 92 92 Z" fill="#2f6fed" />
      </g>
      <g clipPath={`url(#${id("w2")})`}>
        <circle cx={152} cy={68} r={11} fill="#c68642" />
        <path d="M126 92 Q126 80 152 80 Q178 80 178 92 Z" fill="#111" />
      </g>

      {/* driver */}
      <g clipPath={`url(#${id("cab")})`}>
        <g className={driverClass}>
          <circle cx={330} cy={66} r={11} fill="#5b3a1e" />
          <path d="M304 92 Q304 80 330 80 Q356 80 356 92 Z" fill="#16a34a" />
          <ellipse cx={353} cy={80} rx={3} ry={10} fill="#111" />
        </g>
      </g>

      {/* door seams + handle */}
      <path d="M108 30 V166 M286 30 V166" stroke="#111" strokeWidth={2.5} />
      <rect x={246} y={98} width={24} height={5} rx={2.5} fill="#111" />

      {/* QR sticker on the side */}
      <rect x={167} y={124} width={48} height={42} rx={4} fill="#fff" stroke="#111" strokeWidth={2} />
      <Pattern x={171} y={126} width={40} height={38} />

      {/* lights + bumpers */}
      <circle cx={402} cy={138} r={6} fill="#FFC800" stroke="#111" strokeWidth={2} />
      <rect x={-2} y={128} width={6} height={14} rx={2} fill="#dc2626" />
      <rect x={396} y={152} width={18} height={12} rx={3} fill="#333" />
      <rect x={-8} y={152} width={14} height={12} rx={3} fill="#333" />

      {/* wheels */}
      {[88, 316].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy={168} r={32} fill="#111" />
          <circle cx={cx} cy={168} r={14} fill="#d4d4d4" />
          <g className={spin ? "spin-wheel" : undefined}>
            <path d={`M${cx - 12} 168 H${cx + 12} M${cx} 156 V180`} stroke="#111" strokeWidth={3} />
          </g>
        </g>
      ))}
    </g>
  );
}
