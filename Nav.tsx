import { useEffect, useRef, useState } from 'react';
import { BrandMark } from './shared';
import { SocialLinks } from './SocialLinks';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      const dir = y > lastY.current ? 'down' : 'up';
      lastY.current = y;
      setScrolled(y > 50);
      if (y < 80)                    setCompact(false);
      else if (dir === 'down' && y > 150) setCompact(true);
      else if (dir === 'up')         setCompact(false);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-white/[0.05]' : 'bg-transparent'
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between transition-all duration-400 ${
          compact ? 'h-12' : 'h-16'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/kartik_clarity_logo_circle.png"
            alt="Kartik Clarity"
            className={`rounded-full object-cover transition-all duration-500 ${
              compact ? 'w-7 h-7 opacity-100' : 'w-7 h-7 md:w-0 md:h-0 md:opacity-0 md:overflow-hidden'
            }`}
          />
          <div
            className={`hidden md:block overflow-hidden transition-all duration-500 ${
              compact ? 'max-w-0 opacity-0' : 'max-w-xs opacity-100'
            }`}
          >
            <BrandMark />
          </div>
          <span className="md:hidden font-bold text-[15px] tracking-tight">
            Kartik Clarity<span className="text-gold-400">™</span>
          </span>
        </a>

        {/* Center: Links + Social (desktop) */}
        <div
          className={`hidden md:flex items-center transition-all duration-300 ${
            compact ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="flex items-center gap-7 pr-8">
            {['Framework', 'Tools', 'Services', 'About'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-[13px] text-gray-500 hover:text-white transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
          {/* Social icons — minimal, subtle, between nav links and CTA */}
          <div className="ml-1">
            <SocialLinks size="sm" />
          </div>
        </div>

        {/* Right: Social on compact + CTA */}
        <div className="flex items-center gap-4">
          {/* Show social when compact on desktop */}
          <div className={`hidden md:block transition-all duration-300 ${compact ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <SocialLinks size="sm" />
          </div>

          <a
            href="#services"
            className={`outline-btn transition-all duration-300 ${compact ? '!py-2 !px-3.5 !text-[12px]' : ''}`}
          >
            Book Session
          </a>
        </div>
      </nav>
    </header>
  );
}
