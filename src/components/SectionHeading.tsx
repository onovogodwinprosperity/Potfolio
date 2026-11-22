import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-crimson-400">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
