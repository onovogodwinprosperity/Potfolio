import { useState, type FormEvent } from 'react';
import { profile, socials } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon, XIcon } from './icons';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  /** No backend — the form opens the visitor's own mail client, pre-filled. */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative scroll-mt-20 py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[46rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson-500/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something that sells"
          description="Hiring for a frontend role, or need a product built? Tell me about it — I reply personally, usually within a day."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Direct channels */}
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="glass glass-hover flex items-center gap-4 rounded-3xl px-6 py-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-crimson-500/15 text-crimson-400">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Email</span>
                  <span className="block break-all text-sm font-semibold text-white sm:text-base">{profile.email}</span>
                </span>
              </a>

              <a href={profile.phoneHref} className="glass glass-hover flex items-center gap-4 rounded-3xl px-6 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-trust-500/15 text-trust-400">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Phone / WhatsApp</span>
                  <span className="block text-sm font-semibold text-white sm:text-base">{profile.phoneDisplay}</span>
                </span>
              </a>

              <div className="glass flex items-center gap-4 rounded-3xl px-6 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Location</span>
                  <span className="block text-sm font-semibold text-white sm:text-base">
                    {profile.location} · {profile.workStyle}
                  </span>
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub — onovogodwinprosperity"
                  className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                >
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn — Onovo Godwin Prosperity"
                  className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter) — @godwin_onovo"
                  className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                >
                  <XIcon className="h-5 w-5" />
                </a>
              </div>

              <p className="pt-2 text-sm leading-relaxed text-slate-400">
                Also writing at{' '}
                <a href={socials.blog} target="_blank" rel="noopener noreferrer" className="font-medium text-white underline decoration-crimson-500/60 underline-offset-4 hover:text-crimson-400">
                  {socials.blogLabel}
                </a>{' '}
                and building{' '}
                <a href={socials.productSite} target="_blank" rel="noopener noreferrer" className="font-medium text-white underline decoration-crimson-500/60 underline-offset-4 hover:text-crimson-400">
                  SpeedReporters
                </a>
                .
              </p>
            </div>
          </Reveal>

          {/* Mailto form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-200">Your name</span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Cooper"
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-crimson-500/60 focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-200">Your email</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-crimson-500/60 focus:outline-none"
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-1.5 block text-sm font-medium text-slate-200">Message</span>
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role or project…"
                  className="w-full resize-y rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm leading-relaxed text-white placeholder:text-slate-500 focus:border-crimson-500/60 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-crimson-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-crimson-500/25 transition-all hover:bg-crimson-600 sm:w-auto"
              >
                <MailIcon className="h-4 w-4" />
                Send via email
              </button>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                This opens your own mail client with the message pre-filled — nothing is sent until you press send there.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
