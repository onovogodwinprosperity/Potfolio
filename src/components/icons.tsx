/** Minimal inline SVG icons — no extra dependency. */

interface IconProps {
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

function base(props: IconProps) {
  return {
    className: props.className ?? 'h-5 w-5',
    fill: 'currentColor',
    viewBox: '0 0 24 24',
    'aria-hidden': true as const,
  };
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 1.68.41.36.78 1.05.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 4h6v6M20 4 10 14M18 13.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 19V5m0 0-6 6m6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7a4 4 0 1 1 8 0v3.5" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m8 8-5 4 5 4m8-8 5 4-5 4M13 4l-2 16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2c3 2 4.5 5.5 4.5 9l2.5 3-3 .5a9 9 0 0 1-8 0l-3-.5 2.5-3C7.5 7.5 9 4 12 2Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="1.8" />
      <path d="M9 16.5c-.5 1.5-1 3-2 4.5 1.8-.3 3.3-1 4.5-2M15 16.5c.5 1.5 1 3 2 4.5-1.8-.3-3.3-1-4.5-2" strokeLinecap="round" />
    </svg>
  );
}

export function MentorIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" strokeLinejoin="round" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M21.5 8.5V14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BadgeIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9 13.5-1.5 7L12 17.5l4.5 3L15 13.5M12 6.5v5l2 1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
