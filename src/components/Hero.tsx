import { Suspense, lazy, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile, socials, stats } from '../data/portfolio';
import ErrorBoundary from './ErrorBoundary';
import { ArrowRightIcon, DownloadIcon, GitHubIcon } from './icons';

// Lazy-load the 3D canvas so it never blocks the first paint.
const HeroScene = lazy(() => import('./HeroScene'));

/** Detects WebGL support without throwing — false means "use the 2D fallback". */
function webGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      canvas.getContext('webgl2') ?? canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl'),
    );
  } catch {
    return false;
  }
}

/** Static 2D backdrop used when WebGL is unavailable or motion is reduced. */
function StaticBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-60" />
      <div className="absolute -top-32 right-[8%] h-96 w-96 rounded-full bg-crimson-500/25 blur-[110px]" />
      <div className="absolute bottom-[10%] left-[4%] h-80 w-80 rounded-full bg-trust-500/25 blur-[110px]" />
      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-crimson-500/10 blur-[90px]" />
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [webgl, setWebgl] = useState(false);

  useEffect(() => {
    setWebgl(webGLAvailable());
  }, []);

  const show3D = webgl && !reduceMotion;

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden pt-16">
      {/* Background layer: 3D canvas when possible, static gradient otherwise */}
      <div className="absolute inset-0">
        {show3D ? (
          <ErrorBoundary fallback={<StaticBackdrop />}>
            <Suspense fallback={<StaticBackdrop />}>
              <HeroScene />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <StaticBackdrop />
        )}
        {/* Readability gradient over the canvas */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/30 to-ink-900" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {profile.availability}
              </p>
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Onovo Godwin
              <br />
              <span className="text-gradient">Prosperity</span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 font-display text-lg font-medium text-slate-200 sm:text-xl"
            >
              {profile.roleLine}
            </motion.p>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-crimson-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-crimson-500/30 transition-all hover:-translate-y-0.5 hover:bg-crimson-600"
              >
                View my work
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.cvPath}
                download="Onovo_Godwin_Prosperity_CV.pdf"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/30"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Portrait card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-crimson-500/50 via-trust-500/30 to-transparent blur-xl" aria-hidden="true" />
            <figure className="glass relative overflow-hidden rounded-[1.75rem]">
              <img
                src={profile.portrait}
                alt={profile.portraitAlt}
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/95 via-ink-950/60 to-transparent px-5 pb-5 pt-16">
                <p className="font-display text-lg font-bold text-white">{profile.name}</p>
                <p className="text-sm text-slate-300">Founder, Cavalcade Tech Ltd</p>
                <p className="mt-1 text-xs text-slate-400">{profile.location} · {profile.workStyle}</p>
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.dl
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="glass mt-16 grid grid-cols-2 gap-6 rounded-3xl px-6 py-6 sm:grid-cols-4 sm:px-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <dt className="order-2 mt-1 text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm sm:normal-case sm:tracking-normal">
                {stat.label}
              </dt>
              <dd className="font-display text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
