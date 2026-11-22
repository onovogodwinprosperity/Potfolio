import { about, education, profile } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { BadgeIcon, MapPinIcon } from './icons';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About" title={about.heading} />

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-trust-500/40 via-transparent to-crimson-500/30 blur-xl" aria-hidden="true" />
              <img
                src={profile.portrait}
                alt={profile.portraitAlt}
                loading="lazy"
                className="relative w-full rounded-[1.75rem] border border-white/10 object-cover"
              />
              <div className="glass absolute -bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl px-4 py-3 sm:left-8 sm:right-8">
                <MapPinIcon className="h-5 w-5 shrink-0 text-crimson-400" />
                <p className="text-sm text-slate-200">
                  <span className="font-semibold text-white">{profile.location}</span>
                  <span className="text-slate-400"> — {profile.workStyle}</span>
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p className="mb-5 text-base leading-relaxed text-slate-300 sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="glass rounded-2xl px-4 py-3.5">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">{fact.label}</dt>
                    <dd className="mt-1 text-sm font-medium text-white">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass mt-6 flex items-start gap-4 rounded-2xl px-5 py-4">
                <BadgeIcon className="mt-0.5 h-6 w-6 shrink-0 text-trust-400" />
                <div>
                  <p className="font-semibold text-white">{education.degree}</p>
                  <p className="text-sm text-slate-400">
                    {education.school} · {education.period}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
