import { certifications } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { BadgeIcon } from './icons';

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Always learning, always shipping"
          description="Six LinkedIn Learning certifications completed in 2026 — DevOps, CI/CD and collaboration, on top of the daily production work."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={0.05 * i}>
              <article className="glass glass-hover flex h-full items-start gap-4 rounded-3xl p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-trust-500/15 text-trust-400">
                  <BadgeIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold leading-snug text-white">{cert.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
