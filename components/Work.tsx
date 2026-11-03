import SectionHeading from "./SectionHeading";

// Fictional sample projects for this first version. Swap in real case studies later.
const PROJECTS = [
  {
    label: "Sample project 01",
    client: "Ferncliff Bakery",
    type: "Branding",
    summary: "A warm new identity and packaging system for a neighbourhood bakery.",
    art: "bg-accent",
    mark: "F",
    layout: "lg:col-span-7",
    ratio: "aspect-[4/3]",
  },
  {
    label: "Sample project 02",
    client: "Harbor & Pine Outfitters",
    type: "Web design",
    summary: "A simple online shop and booking site for a small outdoor gear store.",
    art: "bg-ink",
    mark: "H&P",
    layout: "lg:col-span-5 lg:mt-24",
    ratio: "aspect-[4/5]",
  },
  {
    label: "Sample project 03",
    client: "Juniper Wellness Clinic",
    type: "Content",
    summary: "Website copy, photo direction, and a launch campaign for a family clinic.",
    art: "bg-paper-deep",
    mark: "J",
    layout: "lg:col-span-8 lg:col-start-3",
    ratio: "aspect-[16/9]",
  },
];

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <SectionHeading
          id="work-title"
          index="02"
          kicker="Selected work"
          title="A few things we’ve made lately."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          {PROJECTS.map((p) => {
            const dark = p.art === "bg-accent" || p.art === "bg-ink";
            return (
              <article key={p.label} className={p.layout} aria-labelledby={`${p.label}-title`.replace(/\s/g, "-")}>
                <div
                  aria-hidden="true"
                  className={`${p.art} ${p.ratio} flex items-end justify-between overflow-hidden p-6 sm:p-8 ${
                    dark ? "text-paper" : "text-ink"
                  } ${p.art === "bg-paper-deep" ? "border border-rule" : ""}`}
                >
                  <span className="font-serif text-7xl leading-none sm:text-9xl">{p.mark}</span>
                </div>
                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2 border-t border-ink pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {p.label}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">{p.type}</p>
                </div>
                <h3
                  id={`${p.label}-title`.replace(/\s/g, "-")}
                  className="mt-3 font-serif text-2xl tracking-tight sm:text-3xl"
                >
                  {p.client}
                </h3>
                <p className="mt-2 max-w-prose leading-relaxed text-ink-soft">{p.summary}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
