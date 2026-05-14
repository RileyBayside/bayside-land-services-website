'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { FAQS } from '@/data/content';

export function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f2f2f0] px-6 py-24">
      <div className="mx-auto max-w-[760px]">
        <FadeIn>
          <div className="mb-12 text-center">
            <div className="text-xs font-bold tracking-[3px] uppercase text-brand">
              Common Questions
            </div>
            <div className="mx-auto mt-3.5 mb-[22px] h-[3px] w-12 rounded-sm bg-brand" />
            <h2 className="font-heading text-[clamp(26px,3.5vw,38px)] font-bold text-black">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FadeIn key={faq.q} delay={i * 0.04}>
              <div className="overflow-hidden rounded-[8px] border border-[#e5e5e3] bg-white">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-6 py-5 text-left"
                >
                  <span className="font-heading text-[15px] font-semibold text-black">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand transition-transform duration-200 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm leading-[1.7] text-[#4a4a4a]">{faq.a}</div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
