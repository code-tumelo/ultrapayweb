interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Use on dark backgrounds */
  inverted?: boolean;
}

export function SectionHeading({ eyebrow, title, description, inverted = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${
            inverted
              ? "border-silver-50/20 bg-silver-50/5 text-silver-300"
              : "border-ink/10 bg-silver-50 text-charcoal-soft"
          }`}
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-metal ring-1 ring-ink/20" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl ${
          inverted ? "text-silver-50" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${inverted ? "text-silver-300" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
