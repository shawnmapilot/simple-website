import Button from "./Button";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:px-10 lg:pb-24">
        <div className="flex items-center justify-between border-b border-ink pb-3 text-xs uppercase tracking-[0.2em] text-ink-soft">
          <span>Issue Nº 01</span>
          <span className="hidden sm:inline">Branding · Web · Content</span>
          <span>Independent studio</span>
        </div>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <h1
              id="hero-title"
              className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.5rem]"
            >
              Web Design and
              <br />
              <em className="font-normal text-accent">SEO Agency</em>
            </h1>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4">
            <p className="text-lg leading-relaxed text-ink-soft">
              North Studio is a small creative agency. We help independent businesses find their
              voice, look the part, and show up online with clarity and care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#contact">
                Start a project <span aria-hidden="true">→</span>
              </Button>
              <Button href="#work" variant="ghost">
                See our work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
