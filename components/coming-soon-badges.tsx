// "Coming soon" platform markers for the hero.
// These are deliberately NOT the official App Store / Google Play badges and
// NOT links: Apple and Google only allow those for apps that are actually
// published. Swap these for the official badges and store links at launch.

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.86-.76-1.47.02-2.83.86-3.59 2.17-1.53 2.66-.39 6.6 1.1 8.75.73 1.05 1.6 2.24 2.73 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.5zM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.65-1.05 1.68-.92 2.68.97.07 1.96-.5 2.56-1.23z" />
    </svg>
  );
}

function AndroidIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.6 9.48l1.84-3.18a.38.38 0 00-.66-.38l-1.86 3.22A11.4 11.4 0 0012 8.1c-1.74 0-3.4.37-4.92 1.04L5.22 5.92a.38.38 0 00-.66.38l1.84 3.18C3.24 11.18 1.08 14.38.75 18h22.5c-.33-3.62-2.49-6.82-5.65-8.52zM7 15.25a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  );
}

const platforms = [
  { name: "iOS", Icon: AppleIcon },
  { name: "Android", Icon: AndroidIcon },
];

export function ComingSoonBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {platforms.map(({ name, Icon }) => (
        <div
          key={name}
          className="inline-flex items-center gap-3 rounded-xl border border-ink/15 bg-ink px-4 py-2.5 text-silver-50 shadow-sm"
          aria-label={`Coming soon to ${name}`}
        >
          <Icon className="h-6 w-6" />
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-silver-300">Coming soon to</span>
            <span className="text-sm font-semibold">{name}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
