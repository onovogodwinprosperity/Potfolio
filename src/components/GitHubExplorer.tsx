import { useEffect, useMemo, useState } from 'react';
import { fallbackRepos, githubApiUrl, socials, type FallbackRepo } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { ExternalLinkIcon, GitHubIcon, SearchIcon, StarIcon } from './icons';

interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  updated: string;
  url: string;
}

interface GitHubApiRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
}

type SortKey = 'updated' | 'stars' | 'name';
type LoadState = 'loading' | 'live' | 'fallback';

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

const languageDot: Record<string, string> = {
  TypeScript: 'bg-sky-400',
  JavaScript: 'bg-yellow-300',
  HTML: 'bg-orange-500',
  CSS: 'bg-violet-400',
  Python: 'bg-green-400',
};

function languageColor(language: string | null): string {
  if (!language) return 'bg-slate-500';
  return languageDot[language] ?? 'bg-slate-400';
}

export default function GitHubExplorer() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [state, setState] = useState<LoadState>('loading');
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('All');
  const [sort, setSort] = useState<SortKey>('updated');

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10_000);

    fetch(githubApiUrl, { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        return res.json() as Promise<GitHubApiRepo[]>;
      })
      .then((data) => {
        if (cancelled) return;
        setRepos(
          data.map((r) => ({
            name: r.name,
            description: r.description,
            language: r.language,
            stars: r.stargazers_count,
            updated: r.updated_at,
            url: r.html_url,
          })),
        );
        setState('live');
      })
      .catch(() => {
        if (cancelled) return;
        // Rate limit, offline or blocked — fall back to the curated snapshot.
        const snapshot: Repo[] = fallbackRepos.map((r: FallbackRepo) => ({
          name: r.name,
          description: r.description,
          language: r.language,
          stars: r.stars,
          updated: r.updated,
          url: r.url,
        }));
        setRepos(snapshot);
        setState('fallback');
      })
      .finally(() => window.clearTimeout(timeout));

    return () => {
      cancelled = true;
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => {
      if (r.language) set.add(r.language);
    });
    return ['All', ...Array.from(set).sort()];
  }, [repos]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = repos.filter((r) => {
      const matchesQuery =
        !q || r.name.toLowerCase().includes(q) || (r.description ?? '').toLowerCase().includes(q);
      const matchesLanguage = language === 'All' || r.language === language;
      return matchesQuery && matchesLanguage;
    });
    return [...filtered].sort((a, b) => {
      if (sort === 'stars') return b.stars - a.stars;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return new Date(b.updated).getTime() - new Date(a.updated).getTime();
    });
  }, [repos, query, language, sort]);

  return (
    <section id="github" aria-labelledby="github-heading" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GitHub explorer"
          title="60+ repositories, live from GitHub"
          description="The full public record — search it, filter by language, sort by stars or recency. Pulled live from the GitHub API; if the API is unavailable, a curated snapshot is shown instead."
        />

        <Reveal>
          <div className="glass rounded-3xl p-5 sm:p-7">
            {/* Controls */}
            <div className="flex flex-col gap-3 lg:flex-row">
              <label className="relative flex-1">
                <span className="sr-only">Search repositories</span>
                <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search repositories…"
                  className="w-full rounded-full border border-white/10 bg-ink-950/70 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-crimson-500/60 focus:outline-none"
                />
              </label>
              <div className="flex gap-3">
                <label className="flex flex-1 items-center gap-2 lg:flex-none">
                  <span className="sr-only">Filter by language</span>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full rounded-full border border-white/10 bg-ink-950/70 px-4 py-2.5 text-sm text-white focus:border-crimson-500/60 focus:outline-none lg:w-auto"
                  >
                    {languages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang === 'All' ? 'All languages' : lang}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-1 items-center gap-2 lg:flex-none">
                  <span className="sr-only">Sort repositories</span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    className="w-full rounded-full border border-white/10 bg-ink-950/70 px-4 py-2.5 text-sm text-white focus:border-crimson-500/60 focus:outline-none lg:w-auto"
                  >
                    <option value="updated">Recently updated</option>
                    <option value="stars">Most stars</option>
                    <option value="name">Name A–Z</option>
                  </select>
                </label>
              </div>
            </div>

            {/* Status line */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
              {state === 'loading' && (
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-trust-400" />
                  Loading live data from GitHub…
                </span>
              )}
              {state === 'live' && (
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Live data · {repos.length} public repositories
                </span>
              )}
              {state === 'fallback' && (
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-amber-200">
                  Live data unavailable — showing curated snapshot
                </span>
              )}
              <span>
                Showing {visible.length} of {repos.length}
              </span>
            </div>

            {/* Repo list */}
            {state === 'loading' ? (
              <ul className="mt-6 space-y-3" aria-label="Loading repositories">
                {Array.from({ length: 6 }).map((_, i) => (
                  <li key={i} className="animate-pulse rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4">
                    <div className="h-4 w-1/3 rounded bg-white/10" />
                    <div className="mt-2 h-3 w-2/3 rounded bg-white/5" />
                  </li>
                ))}
              </ul>
            ) : visible.length === 0 ? (
              <p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-8 text-center text-sm text-slate-400">
                No repositories match “{query}”{language !== 'All' ? ` in ${language}` : ''}. Try a different search.
              </p>
            ) : (
              <ul className="mt-6 max-h-[32rem] space-y-3 overflow-y-auto pr-1" aria-label="GitHub repositories">
                {visible.map((repo) => (
                  <li key={repo.url}>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 transition-colors hover:border-crimson-500/40 hover:bg-white/[0.04]"
                    >
                      <div className="min-w-0">
                        <p className="truncate font-mono text-sm font-semibold text-white group-hover:text-crimson-400">
                          {repo.name}
                        </p>
                        {repo.description && (
                          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-400">{repo.description}</p>
                        )}
                        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                          {repo.language && (
                            <span className="inline-flex items-center gap-1.5">
                              <span className={`h-2.5 w-2.5 rounded-full ${languageColor(repo.language)}`} aria-hidden="true" />
                              {repo.language}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1">
                            <StarIcon className="h-3.5 w-3.5 text-amber-400" />
                            {repo.stars}
                          </span>
                          <span>Updated {formatDate(repo.updated)}</span>
                        </p>
                      </div>
                      <ExternalLinkIcon className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-white" />
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 border-t border-white/10 pt-5 text-center">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                <GitHubIcon className="h-4 w-4" />
                View all on GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
