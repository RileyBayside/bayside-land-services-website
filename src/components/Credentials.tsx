import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from './FadeIn';
import { CERTIFICATIONS } from '@/data/content';

export function Credentials() {
  return (
    <section id="credentials" className="relative overflow-hidden bg-[#111111] px-6 py-16">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="credentials-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#credentials-grid)" />
      </svg>

      <div className="relative mx-auto max-w-[1140px]">
        <FadeIn>
          <div className="mb-8 text-center">
            <div className="text-xs font-bold tracking-[3px] uppercase text-brand-light">
              Certified &amp; Compliant
            </div>
            <div className="mx-auto mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
            <h2 className="mb-3 font-heading text-[clamp(24px,3.5vw,38px)] font-bold text-white">
              ISO Certified Across the Board
            </h2>
            <p className="mx-auto max-w-[460px] text-base leading-[1.75] text-white/60">
              We hold ISO certifications across environment, safety, and quality.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.code} className="flex flex-col items-center gap-3">
                <Image
                  src={cert.badge}
                  alt={cert.code}
                  width={80}
                  height={104}
                  className="h-[72px] w-auto object-contain"
                />
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-white/60">
                  {cert.code}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.14}>
          <div className="mt-10 text-center">
            <Link
              href="/credentials"
              className="inline-flex items-center gap-2 rounded-[5px] border border-white/20 px-[22px] py-[9px] text-[13px] font-semibold text-white/80 transition-all duration-250 hover:-translate-y-0.5 hover:border-brand-light hover:text-white"
            >
              View Our Credentials →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
