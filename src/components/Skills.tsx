import { skillGroups } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const levelStyle: Record<string, { bar: string; width: string; badge: string }> = {
  Expert: { bar: 'bg-crimson-500', width: 'w-[92%]', badge: 'bg-crimson-500/15 text-red-200 border-crimson-500/30' },
  Advanced: { bar: 'bg-trust-500', width: 'w-[78%]', badge: 'bg-trust-500/15 text-blue-200 border-trust-500/30' },
  Working: { bar: 'bg-emerald-500', width: 'w-[60%]', badge: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/30' },
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="The full stack behind the interfaces"
          description="Levels are self-assessed and qualitative — Expert means production-proven daily, Advanced means shipped and confident, Working means used in real projects."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={0.06 * gi}>
              <article className="glass h-full rounded-3xl p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-white">{group.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{group.description}</p>
                <ul className="mt-6 space-y-4">
                  {group.skills.map((skill) => {
                    const style = levelStyle[skill.level];
                    return (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                          <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${style.badge}`}>
                            {skill.level}
                          </span>
                        </div>
                        <div
                          className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"
                          role="img"
                          aria-label={`${skill.name}: ${skill.level} (self-assessed)`}
                        >
                          <div className={`h-full rounded-full ${style.bar} ${style.width}`} />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
