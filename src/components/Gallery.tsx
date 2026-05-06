'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { X } from 'lucide-react';

const GALLERY_IMAGES = Array.from({ length: 17 }, (_, i) =>
  `/images/gallery/${String(i).padStart(2, '0')}.jpg`
);

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section id="gallery" className="bg-[#f2f2f0] px-6 py-24">
      <div className="mx-auto max-w-[1140px]">
        <FadeIn>
          <div className="mb-12 text-center">
            <div className="text-xs font-bold tracking-[3px] uppercase text-brand">Our Work</div>
            <div className="mx-auto mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
            <h2 className="font-heading text-[clamp(30px,4.5vw,46px)] font-bold leading-[1.12] text-black">
              Project Gallery
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {GALLERY_IMAGES.map((src, i) => (
            <FadeIn key={src} delay={i * 0.03}>
              <button
                onClick={() => setActive(src)}
                className="group block w-full cursor-pointer overflow-hidden rounded-[8px] border-none p-0"
              >
                <Image
                  src={src}
                  alt={`Project photo ${i + 1}`}
                  width={480}
                  height={480}
                  className="h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] md:h-[220px]"
                  loading="lazy"
                />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox overlay */}
      {active && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-white/10 text-white hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active}
              alt="Gallery photo fullscreen"
              width={1200}
              height={900}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
