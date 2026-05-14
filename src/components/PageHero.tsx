import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from './FadeIn';

interface PageHeroProps {
  label: string;
  heading: string;
  subheading: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export function PageHero({ label, heading, subheading, ctaLabel, ctaHref, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#111111] px-6 pb-24 pt-40 min-h-[55vh] flex items-center">
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover brightness-[0.45] saturate-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.55)_0%,rgba(17,17,17,0.15)_50%,rgba(17,17,17,0.7)_100%)]" />
        </>
      ) : (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="page-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-hero-grid)" />
        </svg>
      )}
      <div className="relative mx-auto w-full max-w-[760px] text-center">
        <FadeIn>
          <div className="text-xs font-bold tracking-[3px] uppercase text-brand-light">{label}</div>
          <div className="mx-auto mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
          <h1 className="mb-5 font-heading text-[clamp(32px,5vw,54px)] font-bold leading-[1.1] text-white">
            {heading}
          </h1>
          <p className="mb-8 text-base leading-[1.75] text-white/60">{subheading}</p>
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-[5px] bg-brand px-[28px] py-[12px] text-[14px] font-semibold text-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_8px_20px_rgba(74,124,47,0.25)]"
            >
              {ctaLabel}
            </Link>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
