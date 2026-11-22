import { projects, type Project, type ProjectLink } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { ExternalLinkIcon, GitHubIcon, LockIcon } from './icons';

const accentRing: Record<Project['accent'], string> = {
  crimson: 'hover:border-crimson-500/50',
  blue: 'hover:border-trust-500/50',
  violet: 'hover:border-violet-500/50',
  emerald: 'hover:border-emerald-500/50',
  amber: 'hover:border-amber-500/50',
};

const accentTag: Record<Project['accent'], string> = {
  crimson: 'bg-crimson-500/15 text-red-200 border-crimson-500/30',
  blue: 'bg-trust-500/15 text-blue-200 border-trust-500/30',
  violet: 'bg-violet-500/15 text-violet-200 border-violet-500/30',
  emerald: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/30',
  amber: 'bg-amber-500/15 text-amber-200 border-amber-500/30',
};

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  if (link.kind === 'live') {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-900 transition-colors hover:bg-slate-200"
      >
        <ExternalLinkIcon className="h-3.5 w-3.5" />
        {link.label}
      </a>
    );
  }
  if (link.kind === 'repo') {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-white/50"
      >
        <GitHubIcon className="h-3.5 w-3.5" />
        {link.label}
      </a>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-400">
      <LockIcon className="h-3.5 w-3.5" />
      {link.label}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFlagship = project.flagship === true;
  return (
    <Reveal delay={0.06 * (index % 3)} className={isFlagship ? 'md:col-span-2 lg:col-span-2' : ''}>
      <article
        className={`glass glass-hover flex h-full flex-col rounded-3xl p-6 sm:p-8 ${accentRing[project.accent]} ${
          isFlagship ? 'border-crimson-500/30 bg-gradient-to-br from-crimson-500/[0.08] to-transparent' : ''
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{project.name}</h3>
            <p className="mt-1 text-sm font-medium text-slate-300">{project.tagline}</p>
          </div>
          {isFlagship && (
            <span className="rounded-full bg-crimson-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              Flagship
            </span>
          )}
        </div>

        <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-400">
          <p>
            <span className="font-semibold text-slate-200">The problem — </span>
            {project.problem}
          </p>
          <p>
            <span className="font-semibold text-slate-200">What I built — </span>
            {project.built}
          </p>
          <p>
            <span className="font-semibold text-emerald-300">Outcome — </span>
            {project.outcome}
          </p>
        </div>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tech stack for ${project.name}`}>
          {project.stack.map((tech) => (
            <li
              key={tech}
              className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${accentTag[project.accent]}`}
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2.5 border-t border-white/10 pt-5">
          {project.links.map((link) => (
            <ProjectLinkButton key={link.label} link={link} />
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="relative scroll-mt-20 py-24 sm:py-32">
      {/* Ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-crimson-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured work"
          title="Products that ship, sell and scale"
          description="Eight projects, from a live news platform with real subscribers to the design-system work that powers community products. Every card states the problem, what I built, and the outcome — with honest link states."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
