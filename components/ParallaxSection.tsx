'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ParallaxSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.backgroundPositionY = `${scrolled * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={parallaxRef}
      className="relative h-[700px] w-full overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/caos.webp")',
      }}
    >
    </section>
  );
}
