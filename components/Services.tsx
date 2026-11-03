import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    n: "01",
    name: "Branding",
    body: "Names, logos, and visual identities that feel like you. We build simple systems you can use every day — not a rulebook that sits in a drawer.",
    items: ["Brand strategy", "Logo & identity", "Brand guidelines"],
  },
  {
    n: "02",
    name: "Web design",
    body: "Fast, clear websites that are easy to update and easy to use. Designed for real customers on real phones.",
    items: ["Website design", "Build & launch", "Accessibility review"],
  },
  {
    n: "03",
    name: "Content",
    body: "Words and images that do the work. From your homepage copy to a month of social posts, we help you say the right thing.",
    items: ["Copywriting", "Photography direction", "Social content"],
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <SectionHeading
          id="services-title"
          index="01"
          kicker="Services"
          title="Three things, done properly."
        />

        <ol className="mt-14 border-t border-ink">
          {SERVICES.map((s) => (
            <li
              key={s.n}
              className="grid gap-4 border-b border-rule py-10 lg:grid-cols-12 lg:gap-10"
            >
              <span className="font-serif text-lg text-accent lg:col-span-1">{s.n}</span>
              <h3 className="font-serif text-3xl tracking-tight sm:text-4xl lg:col-span-3">{s.name}</h3>
              <p className="max-w-prose leading-relaxed text-ink-soft lg:col-span-5">{s.body}</p>
              <ul className="space-y-1 text-sm lg:col-span-3">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
