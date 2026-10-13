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
          className={`flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] ${
            inverted ? "text-taxi" : "text-foreground"
          }`}
        >
          <span aria-hidden className="h-1.5 w-8 bg-taxi" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl ${
          inverted ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${inverted ? "text-gray-300" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
