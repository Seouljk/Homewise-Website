'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const difference = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 32) {
        setHidden(false);
      } else if (Math.abs(difference) >= 6) {
        setHidden(difference > 0 && currentScrollY > 96);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header shell" data-hidden={hidden ? 'true' : 'false'}>
      <Link className="brand" href="/" aria-label="HomeWise home">
        <Image src="/homewise-logo.png" alt="" width={52} height={52} priority />
      </Link>
      <nav aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#about">About</a>
      </nav>
      <a href="#features" className="pill-button nav-button">
        Explore the app <ArrowRight size={17} aria-hidden="true" />
      </a>
    </header>
  );
}
