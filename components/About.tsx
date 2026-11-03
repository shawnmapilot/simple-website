import SectionHeading from "./SectionHeading";

const PRINCIPLES = [
  { title: "Small on purpose", body: "We take on a few clients at a time, so you always work with the people doing the work." },
  { title: "Plain language", body: "No jargon, no mystery. You’ll know what we’re doing, why, and what it costs." },
  { title: "Built to hand over", body: "Everything we make is yours to use and update after we’re done." },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b border-rule bg-paper-deep">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <SectionHeading id="about-title" index="03" kicker="About" title="A studio for the businesses on your street." />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <blockquote className="lg:col-span-5">
            <p className="font-serif text-3xl italic leading-snug text-ink sm:text-4xl">
              “Good design shouldn’t be reserved for big budgets.”
            </p>
          </blockquote>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
            <p>
              North Studio is a small team of designers and writers. We started the studio to give
              independent businesses the same thoughtful creative work the big brands get — at a
              scale that makes sense for them.
            </p>
            <p>
              Whether you need a fresh identity, a website that finally works, or help saying what
              you do, we’ll keep it simple and get it done.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-8 border-t border-ink pt-10 sm:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <li key={p.title}>
              <h3 className="font-serif text-xl">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
