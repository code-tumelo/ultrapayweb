import { cn } from "@/lib/utils";

interface PersonProps {
  skin: string;
  top: string;
  pants: string;
  hair: string;
  /** Animation classes, defined in globals.css */
  legAClass?: string;
  legBClass?: string;
  armClass?: string;
  /** Something held in the front hand (a phone, a banknote). Keep it centred on the arm. */
  children?: React.ReactNode;
}

/**
 * A simple flat-style person facing right, drawn with the feet at (0, 0).
 * The front arm and both legs can be animated by passing classes.
 */
export function Person({
  skin,
  top,
  pants,
  hair,
  legAClass,
  legBClass,
  armClass,
  children,
}: PersonProps) {
  return (
    <g>
      {/* legs */}
      <g className={cn("pivot-top", legBClass)}>
        <rect x={1} y={-50} width={11} height={50} rx={5} fill={pants} />
        <rect x={1} y={-6} width={16} height={6} rx={3} fill="#111" />
      </g>
      <g className={cn("pivot-top", legAClass)}>
        <rect x={-12} y={-50} width={11} height={50} rx={5} fill={pants} />
        <rect x={-10} y={-6} width={16} height={6} rx={3} fill="#111" />
      </g>

      {/* back arm */}
      <rect x={-22} y={-98} width={9} height={42} rx={4.5} fill={top} opacity={0.85} />

      {/* torso */}
      <rect x={-17} y={-102} width={34} height={56} rx={14} fill={top} />

      {/* head */}
      <circle cx={2} cy={-118} r={14} fill={skin} />
      <path d="M-12 -121 A14 14 0 0 1 16 -121 Z" fill={hair} />
      <circle cx={8} cy={-117} r={1.6} fill="#111" />

      {/* front arm (pivots at the shoulder) */}
      <g transform="translate(13 -96)">
        <g className={cn("pivot-top", armClass)}>
          <rect x={-4.5} y={0} width={9} height={40} rx={4.5} fill={top} />
          <circle cx={0} cy={41} r={5} fill={skin} />
          {children}
        </g>
      </g>
    </g>
  );
}

interface ChipProps {
  x: number;
  y: number;
  w: number;
  text: string;
  className?: string;
  fill?: string;
  color?: string;
}

/** A small speech-bubble style label that pops in and out. */
export function Chip({ x, y, w, text, className, fill = "#fff", color = "#111" }: ChipProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={cn("s-chip pivot-bottom", className)}>
        <rect x={-w / 2} y={-15} width={w} height={30} rx={15} fill={fill} stroke="#111" strokeWidth={2.5} />
        <text
          textAnchor="middle"
          y={5}
          fontSize={14}
          fontWeight={800}
          fill={color}
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        >
          {text}
        </text>
      </g>
    </g>
  );
}
