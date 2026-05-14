import Link from 'next/link';
import { BUSINESS } from '@/data/content';

interface PageCTAProps {
  heading?: string;
}

export function PageCTA({ heading = 'Ready to get started?' }: PageCTAProps) {
  return (
    <section className="bg-brand px-6 py-20">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="font-heading text-[clamp(24px,3.5vw,36px)] font-bold text-white">
            {heading}
          </h2>
          <div className="mt-3 flex flex-wrap justify-center gap-6 md:justify-start">
            <a
              href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {BUSINESS.phone}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {BUSINESS.email}
            </a>
          </div>
        </div>
        <Link
          href="/#contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-[5px] bg-white px-[28px] py-[12px] text-[14px] font-semibold text-brand-dark transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
