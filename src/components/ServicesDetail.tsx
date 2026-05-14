'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { SERVICE_DETAILS } from '@/data/content';

const XFADE_START = 1.5;  // seconds before end to begin crossfade
const XFADE_DURATION = 1200; // ms for the crossfade transition

function ServiceVideoCrossfade({ src }: { src: string }) {
  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);
  const active = useRef<'a' | 'b'>('a');
  const crossfading = useRef(false);

  useEffect(() => {
    const a = refA.current;
    const b = refB.current;
    if (!a || !b) return;

    b.style.opacity = '0';
    a.play();

    const handleTimeUpdate = (e: Event) => {
      const current = active.current === 'a' ? a : b;
      const next = active.current === 'a' ? b : a;

      if (e.target !== current) return;
      if (crossfading.current) return;
      if (current.duration - current.currentTime > XFADE_START) return;

      crossfading.current = true;
      next.currentTime = 0;
      next.play();

      current.style.transition = `opacity ${XFADE_DURATION}ms ease`;
      next.style.transition = `opacity ${XFADE_DURATION}ms ease`;
      current.style.opacity = '0';
      next.style.opacity = '1';

      setTimeout(() => {
        current.pause();
        current.currentTime = 0;
        active.current = active.current === 'a' ? 'b' : 'a';
        crossfading.current = false;
      }, XFADE_DURATION + 100);
    };

    a.addEventListener('timeupdate', handleTimeUpdate);
    b.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      a.removeEventListener('timeupdate', handleTimeUpdate);
      b.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const videoClass = 'absolute inset-0 h-full w-full object-cover';
  return (
    <div className="relative h-[340px] w-full">
      <video ref={refA} src={src} autoPlay muted playsInline className={videoClass} />
      <video ref={refB} src={src} muted playsInline className={videoClass} style={{ opacity: 0 }} />
    </div>
  );
}

export function ServicesDetail() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-24">
        {SERVICE_DETAILS.map((service, i) => {
          const isOdd = i % 2 === 1;
          return (
            <FadeIn key={service.title}>
              <div
                className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 ${
                  isOdd ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="overflow-hidden rounded-[10px]">
                  {(service as { video?: string }).video ? (
                    <ServiceVideoCrossfade src={(service as { video: string }).video} />
                  ) : (
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={560}
                      height={420}
                      className="h-[340px] w-full object-cover"
                    />
                  )}
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
