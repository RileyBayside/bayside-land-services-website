'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from './FadeIn';
import { SERVICES } from '@/data/content';

export function Services() {
  const teaser = SERVICES.slice(0, 3);

  return (
    <section id="services" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1140px]">
        <FadeIn>
          <div className="mx-auto mb-13 max-w-[560px] text-center">
            <div className="text-xs font-bold tracking-[3px] uppercase text-brand">What We Do</div>
            <div className="mx-auto mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
            <h2 className="mb-[18px] font-heading text-[clamp(30px,4.5vw,46px)] font-bold leading-[1.12] text-black">
              Forestry Mulching & Land Clearing
            </h2>
            <p className="text-base leading-[1.75] text-[#4a4a4a]">
              Forestry mulching is what we do best. We also handle land clearing, firebreak
              construction, and ongoing vegetation management for councils, developers, and
              landowners across SEQ.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-[18px] min-[501px]:grid-cols-2 lg:grid-cols-3">
          {teaser.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.04}>
              <div className="group overflow-hidden rounded-[10px] border border-[#e5e5e3] bg-white transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-[5px] hover:border-brand hover:shadow-[0_20px_44px_rgba(0,0,0,0.07),0_4px_12px_rgba(0,0,0,0.04)]">
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={330}
                    className="h-[210px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.04]"
                    priority={i < 3}
                  />
                </div>
                <div className="px-5 pt-5 pb-6">
                  <h3 className="mb-2.5 font-heading text-[17px] font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-[1.6] text-[#4a4a4a]">{service.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-[5px] border border-brand px-[22px] py-[9px] text-[13px] font-semibold text-brand transition-all duration-250 hover:-translate-y-0.5 hover:bg-brand hover:text-white"
            >
              View All Services →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
