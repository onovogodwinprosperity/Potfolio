import { profile, socials } from '../data/portfolio';
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, XIcon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="font-display text-xl font-bold text-white">
            {profile.initials}
            <span className="text-crimson-500">.</span>
          </p>
          <p className="mt-1 text-sm text-slate-400">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-slate-500">Built with React + Three.js + Docker</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          <a href="#work" className="transition-colors hover:text-white">Work</a>
          <a href="#experience" className="transition-colors hover:text-white">Experience</a>
          <a href="#skills" className="transition-colors hover:text-white">Skills</a>
          <a href="#github" className="transition-colors hover:text-white">GitHub</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 transition-colors hover:text-white">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 transition-colors hover:text-white">
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-slate-400 transition-colors hover:text-white">
            <XIcon className="h-5 w-5" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-200 transition-colors hover:border-crimson-500/60 hover:text-white"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
