export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-9 grid-cols-3 gap-[3px] rounded-lg bg-primary p-[7px]" aria-hidden>
        {[1, 0, 1, 0, 1, 0, 1, 1, 0].map((f, i) => (
          <span key={i} className={`rounded-full ${f ? "bg-primary-foreground" : "bg-primary-foreground/35"}`} />
        ))}
      </span>
      <span className={`font-display text-lg font-bold tracking-tight ${inverted ? "text-ink-foreground" : "text-foreground"}`}>
        OMR <span className="text-primary">Solutions</span>
      </span>
    </span>
  );
}
