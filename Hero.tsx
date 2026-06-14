import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const [in_, setIn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setIn(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient mesh orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Circle logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="/kartik_clarity_logo_circle.png"
          alt=""
          aria-hidden="true"
          className="w-[460px] h-[460px] rounded-full object-cover"
          style={{ opacity: 0.04, filter: 'blur(4px)' }}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center max-w-[820px] mx-auto px-6 transition-all duration-[1100ms] ease-out ${
          in_ ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full text-[11px] tracking-[0.22em] uppercase text-gold-300 mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          Revenue Intelligence System
        </div>

        <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-[0.95] tracking-[-0.03em] mb-7">
          Most businesses don't
          <br />
          have a traffic problem.
        </h1>

        <p
          className={`text-lg md:text-xl text-gray-400 max-w-[540px] mx-auto mb-4 leading-relaxed transition-all duration-[1100ms] delay-200 ${
            in_ ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          They have a{' '}
          <span className="text-white font-semibold">hidden constraint blocking revenue.</span>
          <br />
          Kartik Clarity™ identifies and removes it.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-6 transition-all duration-[1100ms] delay-[380ms] ${
            in_ ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a href="#services" className="cta-btn">
            Book Founder Clarity Session
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#framework" className="ghost-btn">
            <Play className="w-3.5 h-3.5" />
            Explore Revenue Leak System
          </a>
        </div>

        <p
          className={`text-[12px] text-gray-700 tracking-wide transition-all duration-[1100ms] delay-500 ${
            in_ ? 'opacity-100' : 'opacity-0'
          }`}
        >
          17+ years across SaaS, enterprise sales, and revenue operations
        </p>
      </div>

      {/* Scroll hint — no bounce */}
      <a
        href="#problem"
        className={`absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-700 hover:text-gray-500 transition-all duration-1000 delay-700 group ${
          in_ ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-700 to-transparent group-hover:from-gray-500 transition-colors" />
      </a>
    </section>
  );
}
