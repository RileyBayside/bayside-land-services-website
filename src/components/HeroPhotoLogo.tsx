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

  // Fade out over first 80px of scroll — matches when nav logo fades in
  const opacity = Math.max(0, 1 - scrollY / 80);

  return (
    <div
      className="absolute z-10 pointer-events-none"
      style={{
        opacity,
        transition: 'opacity 150ms ease-out',
        right: '10%',
        top: '38%',
        transform: 'translateY(-50%)',
      }}
    >
      <Image
        src="/images/logo-hero.png"
        alt="Bayside Land Services"
        width={504}
        height={169}
        className="h-36 w-auto drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
        priority
      />
    </div>
  );
}
