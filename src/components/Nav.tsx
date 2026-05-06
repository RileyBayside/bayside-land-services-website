'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_LINKS } from '@/data/content';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-[12px] shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1140px] items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? 'h-[68px]' : 'h-[100px]'
        }`}
      >
        <button
          onClick={() => scrollTo('top')}
          className="cursor-pointer border-none bg-transparent p-0"
        >
          <Image
            src="/images/logo.png"
            alt="Bayside Land Services"
            width={504}
            height={169}
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-9' : 'h-[96px] [filter:invert(1)] mix-blend-screen'}`}
          />
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-[30px] md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className={`cursor-pointer border-none bg-transparent text-sm font-semibold tracking-[0.3px] transition-colors duration-200 hover:text-brand ${
                scrolled ? 'text-black' : 'text-white/85'
              }`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex cursor-pointer items-center gap-2 rounded-[5px] border-none bg-brand px-[22px] py-[9px] text-[13px] font-semibold text-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_8px_20px_rgba(74,124,47,0.25)]"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex cursor-pointer items-center justify-center border-none bg-transparent md:hidden ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-[#e5e5e3] bg-white px-6 py-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="block w-full cursor-pointer border-b border-[#f2f2f0] bg-transparent py-3.5 text-left text-base font-medium text-black"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="mt-2.5 mb-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[5px] border-none bg-brand px-8 py-[15px] text-[15px] font-semibold text-white transition-all duration-250 hover:bg-brand-dark"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
}
