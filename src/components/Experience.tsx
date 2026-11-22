import { experience } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative scroll-mt-20 py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-trust-500/10 blur-[110px]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="A track record measured in outcomes"
          description="From intern to founder — every role with results you can check: faster pages, higher conversions, and teams that ship quicker."
        />

        <ol className="relative space-y-10 border-l-2 border-white/10 pl-8 sm:pl-12">
          {experience.map((role, i) => (
            <li key={role.company} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[2.55rem] top-1.5 h-4 w-4 rounded-full border-2 border-ink-900 sm:-left-[3.55rem] ${
                  i === 0 ? 'bg-crimson-500 shadow-[0_0_0_4px_rgba(225,29,46,0.25)]' : 'bg-trust-500'
                }`}
              />
              <Reveal delay={0.08 * i}>
                <article className="glass glass-hover rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{role.role}</h3>
                      <p className="mt-1 text-base font-semibold text-crimson-400">{role.company}</p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-slate-200">
                        {role.period}
                      </p>
                      <p className="mt-1.5 text-slate-400">{role.location}</p>
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed text-slate-300">{role.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                        <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
