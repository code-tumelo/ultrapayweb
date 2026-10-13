import { Chip, Person } from "@/components/scene-parts";
import { cn } from "@/lib/utils";

const STRIPES = Array.from({ length: 10 }, (_, i) => i);

/**
 * Animated loop (about 9 seconds): a customer without a bank account walks up to a
 * spaza shop, hands over cash, and her phone-number wallet is topped up.
 */
export function VendorScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 320"
      role="img"
      aria-label="A customer hands cash to a spaza shop owner and her UltraPay wallet is topped up on her phone."
      className={cn("scene h-auto w-full", className)}
    >
      <circle cx="250" cy="185" r="150" fill="#FFC800" />

      {/* ground */}
      <rect x="0" y="290" width="520" height="22" fill="#111" />
      <path d="M0 301 H520" stroke="#FFC800" strokeWidth="3" strokeDasharray="28 22" />

      {/* shop */}
      <rect x="236" y="84" width="264" height="206" fill="#fff" stroke="#111" strokeWidth="4" />
      {STRIPES.map((i) => (
        <rect key={i} x={226 + i * 28.8} y={66} width={28.8} height={38} fill={i % 2 ? "#FFC800" : "#111"} />
      ))}
      <rect x="226" y="66" width="288" height="38" fill="none" stroke="#111" strokeWidth="3" />
      <rect x="296" y="114" width="164" height="30" fill="#111" />
      <text
        x="378"
        y="135"
        textAnchor="middle"
        fontSize="19"
        fontWeight="800"
        fill="#FFC800"
        letterSpacing="2"
        style={{ fontFamily: "var(--font-display), Impact, sans-serif" }}
      >
        SPAZA SHOP
      </text>

      {/* serving window with shelves */}
      <rect x="256" y="154" width="224" height="86" fill="#f1ecdc" stroke="#111" strokeWidth="3" />
      <rect x="268" y="172" width="18" height="28" fill="#ef4444" />
      <rect x="290" y="178" width="16" height="22" fill="#2f6fed" />
      <rect x="310" y="168" width="20" height="32" fill="#16a34a" />
      <rect x="264" y="200" width="76" height="4" fill="#111" />

      {/* vendor, facing the customer */}
      <g transform="translate(386 290) scale(-1 1)">
        <g className="s2-vendor">
          <Person skin="#8d5524" top="#FFC800" pants="#1f2937" hair="#111" />
        </g>
      </g>

      {/* counter */}
      <rect x="246" y="232" width="244" height="14" fill="#111" />
      <rect x="250" y="246" width="236" height="44" fill="#FFC800" stroke="#111" strokeWidth="3" />
      <text
        x="368"
        y="275"
        textAnchor="middle"
        fontSize="18"
        fontWeight="800"
        fill="#111"
        letterSpacing="1.5"
        style={{ fontFamily: "var(--font-display), Impact, sans-serif" }}
      >
        ULTRAPAY CASH-IN
      </text>

      {/* customer */}
      <g transform="translate(190 290)">
        <g className="s2-customer">
          <Person
            skin="#c68642"
            top="#111"
            pants="#6b7280"
            hair="#3b2314"
            legAClass="s2-legA"
            legBClass="s2-legB"
            armClass="s2-arm"
          >
            <g className="s2-note">
              <rect x={-8} y={36} width={16} height={11} rx={1.5} fill="#16a34a" stroke="#0f5132" strokeWidth={1.5} />
              <circle cx={0} cy={41.5} r={2.5} fill="#bbf7d0" />
            </g>
          </Person>
        </g>
      </g>

      {/* labels */}
      <Chip x={186} y={132} w={118} text="R50 cash-in" className="s2-chip-cash" />
      <Chip x={160} y={132} w={150} text="+R50.00 wallet" fill="#16a34a" color="#fff" className="s2-chip-wallet" />
    </svg>
  );
}
