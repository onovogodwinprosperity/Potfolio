import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';
import { CloseIcon, DownloadIcon, MenuIcon } from './icons';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink-900/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight text-white" aria-label="Back to top — Onovo Godwin Prosperity">
          {profile.initials}
          <span className="text-crimson-500">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.cvPath}
            download="Onovo_Godwin_Prosperity_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-white/40 hover:text-white"
          >
            <DownloadIcon className="h-4 w-4" />
            CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-crimson-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-crimson-500/25 transition-all hover:bg-crimson-600 hover:shadow-crimson-500/40"
          >
            Hire me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-white/10 bg-ink-900/95 backdrop-blur-xl md:hidden">
          <ul className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3 pt-3">
              <a
                href={profile.cvPath}
                download="Onovo_Godwin_Prosperity_CV.pdf"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-crimson-500 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
