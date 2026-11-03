type Props = { id: string; index: string; kicker: string; title: React.ReactNode };

export default function SectionHeading({ id, index, kicker, title }: Props) {
  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:gap-10">
      <p className="text-xs uppercase tracking-[0.2em] text-ink-soft lg:col-span-4">
        <span className="text-accent">{index}</span> — {kicker}
      </p>
      <h2 id={id} className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:col-span-8">
        {title}
      </h2>
    </div>
  );
}
