import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { BUSINESS, ABOUT } from '@/data/content';

const CLIENT_TYPES = [
  'Council Contracts',
  'Government Agencies',
  'Commercial Clients',
  'Island Communities',
] as const;

export function About() {
  return (
    <section id="about" className="bg-[#f2f2f0] px-6 py-24">
      <div className="mx-auto grid max-w-[1140px] items-center gap-14 max-md:grid-cols-1 md:grid-cols-2">
        {/* Left — text */}
        <FadeIn>
          <div className="text-xs font-bold tracking-[3px] uppercase text-brand">About Us</div>
          <div className="mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
          <h2 className="mb-6 font-heading text-[clamp(28px,4vw,42px)] font-bold leading-[1.15] text-black">
            {BUSINESS.established} Years of Land Management Excellence
          </h2>
          <p className="mb-4 text-base leading-[1.8] text-[#4a4a4a]">{ABOUT.paragraph1}</p>
          <p className="mb-8 text-base leading-[1.8] text-[#4a4a4a]">{ABOUT.paragraph2}</p>

          <div className="flex flex-wrap gap-2.5">
            {CLIENT_TYPES.map((type) => (
              <span
                key={type}
                className="rounded-[4px] bg-brand-pale px-3.5 py-[7px] text-[12px] font-semibold tracking-[0.5px] text-brand-dark"
              >
                {type}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Right — photos */}
        <FadeIn delay={0.12}>
          <div className="flex flex-col gap-4">
            <Image
              src="/images/about-main.jpg"
              alt="Bayside Land Services operations"
              width={743}
              height={480}
              className="w-full rounded-lg object-cover"
            />
            <Image
              src="/images/about-drone.jpg"
              alt="Aerial view of land management"
              width={743}
              height={300}
              className="h-[180px] w-full rounded-lg object-cover object-center"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
