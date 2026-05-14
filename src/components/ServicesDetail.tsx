'use client';

import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { SERVICE_DETAILS } from '@/data/content';

export function ServicesDetail() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-24">
        {SERVICE_DETAILS.map((service, i) => {
          const isEven = i % 2 === 1;
          return (
            <FadeIn key={service.title}>
              <div
                className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 ${
                  isEven ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="overflow-hidden rounded-[10px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={560}
                    height={420}
                    className="h-[340px] w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="mb-4 font-heading text-[clamp(24px,3.5vw,36px)] font-bold leading-[1.15] text-black">
                    {service.title}
                  </h2>
                  <p className="mb-6 text-base leading-[1.8] text-[#4a4a4a]">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-[#4a4a4a]">
                        <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-brand" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
