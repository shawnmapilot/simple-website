import { CONTACT_EMAIL, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="bg-paper-deep text-ink">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-10 lg:pt-28">
        <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
          <span className="text-accent">04</span> — Contact
        </p>
        <h2 id="contact-title" className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">
          Start a project.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          Tell us a little about your business and what you need. We reply to every email within two
          working days.
        </p>

        <div className="mt-10">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="break-all font-serif text-2xl text-accent underline decoration-1 underline-offset-8 hover:text-ink sm:text-4xl"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-4 inline-block border border-dashed border-accent px-3 py-1 text-xs uppercase tracking-[0.15em] text-accent">
            Placeholder email — replace in lib/site.ts before publishing
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-rule pt-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-serif text-base text-ink">North Studio</span> · © {new Date().getFullYear()}
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.filter((l) => l.href !== "#contact").map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#top" className="hover:text-ink">
                  Back to top ↑
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
