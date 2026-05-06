import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { CERTIFICATIONS } from '@/data/content';

export function Credentials() {
  return (
    <section id="credentials" className="relative overflow-hidden bg-[#111111] px-6 py-24">
      {/* Subtle geometric SVG background pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative mx-auto max-w-[1140px]">
        <FadeIn>
          <div className="mb-14 text-center">
            <div className="text-xs font-bold tracking-[3px] uppercase text-brand-light">
              Certified &amp; Compliant
            </div>
            <div className="mx-auto mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
            <h2 className="mb-4 font-heading text-[clamp(28px,4vw,42px)] font-bold text-white">
              Certified Across the Board
            </h2>
            <p className="mx-auto max-w-[520px] text-base leading-[1.75] text-white/60">
              We hold ISO certifications across environment, safety, and quality — worth knowing when you&apos;re deciding who to put on your land.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <FadeIn key={cert.code} delay={i * 0.1}>
              <div className="flex flex-col items-center rounded-[10px] border border-white/[0.06] bg-white/[0.04] p-8 text-center">
                <Image
                  src={cert.badge}
                  alt={cert.code}
                  width={137}
                  height={179}
                  className="mb-6 h-[140px] w-auto object-contain"
                />
                <div className="mb-1 text-[11px] font-bold tracking-[2px] uppercase text-brand-light">
                  {cert.code}
                </div>
                <h3 className="mb-3 font-heading text-[19px] font-bold text-white">{cert.name}</h3>
                <p className="text-sm leading-[1.65] text-white/55">{cert.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
