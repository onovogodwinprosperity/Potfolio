import { services } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { ArrowRightIcon, CodeIcon, MentorIcon, RocketIcon } from './icons';

const serviceIcons = {
  code: CodeIcon,
  rocket: RocketIcon,
  mentor: MentorIcon,
} as const;

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative scroll-mt-20 py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-crimson-500/10 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I can do for you"
          description="Three ways to work together — whether you're hiring for a team, need a product built, or want your people to learn to build."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.title} delay={0.08 * i}>
                <article className="glass glass-hover flex h-full flex-col rounded-3xl p-7 sm:p-8">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-crimson-500/15 p-3 text-crimson-400">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400 sm:text-base">{service.description}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <ArrowRightIcon className="mt-0.5 h-4 w-4 shrink-0 text-crimson-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-crimson-400"
                  >
                    Start a conversation
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
