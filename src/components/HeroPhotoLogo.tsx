'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function HeroPhotoLogo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Shrinks from 180px → 90px over the first 250px of scroll
  const width = Math.max(90, 180 - (scrollY / 250) * 90);

  return (
    <div
      className="absolute z-10 transition-[width] duration-100 ease-out"
      style={{
        width,
        right: '12%',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      <Image
        src="/images/logo-hero.png"
        alt="Bayside Land Services"
        width={504}
        height={169}
        className="w-full h-auto opacity-90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
        priority
      />
    </div>
  );
}
