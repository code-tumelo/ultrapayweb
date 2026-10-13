import { cn } from "@/lib/utils";

const N = 25;

/**
 * Decorative QR-style pattern. It is generated deterministically (so server and
 * client always match) and is NOT a scannable code.
 */
function buildPattern(): boolean[][] {
  let seed = 7;
  const rand = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 2 ** 32;
  };

  const grid: boolean[][] = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => rand() > 0.5)
  );

  const corners: [number, number][] = [
    [0, 0],
    [0, N - 7],
    [N - 7, 0],
  ];

  // Clear the finder zones (7x7 plus a 1-cell separator), then draw the finders
  for (const [r0, c0] of corners) {
    for (let r = r0 - 1; r <= r0 + 7; r++) {
      for (let c = c0 - 1; c <= c0 + 7; c++) {
        if (r >= 0 && r < N && c >= 0 && c < N) grid[r][c] = false;
      }
    }
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        const ring = i === 0 || i === 6 || j === 0 || j === 6;
        const core = i >= 2 && i <= 4 && j >= 2 && j <= 4;
        grid[r0 + i][c0 + j] = ring || core;
      }
    }
  }
  return grid;
}

const PATTERN = buildPattern();

export function Pattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={`-1 -1 ${N + 2} ${N + 2}`}
      shapeRendering="crispEdges"
      aria-hidden
      {...props}
    >
      <rect x={-1} y={-1} width={N + 2} height={N + 2} fill="#fff" />
      {PATTERN.flatMap((row, r) =>
        row.map((on, c) =>
          on ? <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="#000" /> : null
        )
      )}
    </svg>
  );
}

interface QrStickerProps {
  className?: string;
  /** Just the code, no header or footer (used inside the phone screen). */
  compact?: boolean;
}

export function QrSticker({ className, compact = false }: QrStickerProps) {
  if (compact) {
    return (
      <div className={cn("overflow-hidden rounded-lg", className)}>
        <Pattern className="block w-full" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl",
        className
      )}
    >
      <div className="bg-taxi px-4 py-2 text-center font-display text-2xl font-extrabold uppercase leading-none tracking-wide text-black">
        Scan &amp; Go
      </div>
      <div className="p-3">
        <Pattern className="block w-full" />
      </div>
      <div className="bg-black px-4 py-2 text-center font-display text-lg font-bold uppercase leading-none tracking-wider text-white">
        Ultra<span className="text-taxi">Pay</span>
      </div>
    </div>
  );
}
