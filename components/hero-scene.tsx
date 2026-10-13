import { Chip, Person } from "@/components/scene-parts";
import { Taxi } from "@/components/taxi";
import { cn } from "@/lib/utils";

/**
 * Animated loop (about 10 seconds): a commuter walks up to the taxi, scans the
 * QR sticker, the fare is paid, the driver is paid, and the commuter boards.
 * Timings live in globals.css (.s-* classes).
 */
export function HeroScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-label="A commuter scans the QR sticker on a minibus taxi, the fare is paid, and the driver is paid straight away."
      className={cn("scene h-auto w-full", className)}
    >
      <circle cx="320" cy="205" r="185" fill="#FFC800" />

      {/* road */}
      <rect x="0" y="300" width="640" height="24" fill="#111" />
      <path d="M0 312 H640" stroke="#FFC800" strokeWidth="3" strokeDasharray="28 22" />

      {/* rank sign */}
      <path d="M592 300 V176" stroke="#111" strokeWidth="5" />
      <rect x="556" y="146" width="72" height="38" rx="4" fill="#111" />
      <text
        x="592"
        y="172"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill="#FFC800"
        letterSpacing="2"
        style={{ fontFamily: "var(--font-display), Impact, sans-serif" }}
      >
        RANK
      </text>

      {/* taxi */}
      <g transform="translate(110 100)">
        <Taxi idPrefix="hero" driverClass="s-nod" />
      </g>

      {/* scan beam */}
      <polygon points="254,216 277,222 277,264 254,228" fill="#FFC800" className="s-beam" />

      {/* commuter */}
      <g transform="translate(190 300)">
        <g className="s-commuter">
          <Person
            skin="#a0643a"
            top="#2f6fed"
            pants="#1f2937"
            hair="#111"
            legAClass="s-legA"
            legBClass="s-legB"
            armClass="s-arm"
          >
            <rect x={-6} y={34} width={12} height={20} rx={2.5} fill="#111" />
            <rect x={-4} y={36} width={8} height={14} rx={1.5} fill="#FFC800" />
          </Person>
        </g>
      </g>

      {/* coin flying from the phone to the driver */}
      <g transform="translate(262 222)">
        <g className="s-coin">
          <circle r={10} fill="#FFC800" stroke="#111" strokeWidth={2.5} />
          <text
            textAnchor="middle"
            y={4.5}
            fontSize={12}
            fontWeight={800}
            fill="#111"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          >
            R
          </text>
        </g>
      </g>

      {/* labels */}
      <Chip x={190} y={140} w={92} text="R18.00" className="s-chip-fare" />
      <Chip x={190} y={140} w={92} text="Paid ✓" fill="#16a34a" color="#fff" className="s-chip-paid" />
      <Chip x={448} y={104} w={104} text="+R18.00" fill="#FFC800" className="s-chip-driver" />
    </svg>
  );
}
