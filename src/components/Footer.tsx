'use client';

import Image from 'next/image';
import { BUSINESS, NAV_LINKS } from '@/data/content';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] px-6 py-16">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/images/logo-transparent.png"
              alt="Bayside Land Services"
              width={200}
              height={67}
              className="h-10 w-auto [filter:brightness(0)_invert(1)]"
            />
            <p className="mt-4 text-sm leading-[1.7] text-white/45">
              Forestry mulching and land clearing across South-East Queensland. 30+ years, ISO certified.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <div className="mb-4 text-[11px] font-bold tracking-[2px] uppercase text-white/40">
              Navigation
            </div>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  className="cursor-pointer border-none bg-transparent text-left text-[14px] text-white/60 transition-colors hover:text-brand-light"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-4 text-[11px] font-bold tracking-[2px] uppercase text-white/40">
              Contact
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-[3px] shrink-0 text-brand-light" />
                <span className="text-[14px] text-white/60">{BUSINESS.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="shrink-0 text-brand-light" />
                <span className="text-[14px] text-white/60">{BUSINESS.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0 text-brand-light" />
                <span className="text-[14px] text-white/60">{BUSINESS.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-6 flex flex-col gap-1 md:flex-row md:justify-between">
          <p className="text-[12px] text-white/30">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-[12px] text-white/30">
            {BUSINESS.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
