import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { SectionLabel } from './shared';

const ITEMS = [
  { cause: 'More ads',      effect: 'No growth' },
  { cause: 'More content',  effect: 'No conversion' },
  { cause: 'More outreach', effect: 'No replies' },
  { cause: 'More tools',    effect: 'More complexity' },
];

export function ProblemSection() {
  const { ref, visible } = useReveal(0.3);
  const [step, setStep] = useState(0);
  const [resolved, setResolved] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const id = setInterval(() => {
      setStep((p) => {
        if (p >= ITEMS.length - 1) {
          clearInterval(id);
          setTimeout(() => setResolved(true), 2000);
          return p;
        }
        return p + 1;
      });
    }, 1900);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <section id="problem" ref={ref} className="min-h-screen flex items-center bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        {!resolved ? (
          <div className={`transition-opacity duration-600 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <SectionLabel>The Pattern</SectionLabel>

            <div className="relative h-[90px] md:h-[120px] flex items-center justify-center mt-10">
              {ITEMS.map((item, i) => (
                <div
                  key={item.cause}
                  className={`absolute inset-x-0 flex items-center justify-center gap-3 md:gap-6 transition-all duration-700 ${
                    i === step ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
                  }`}
                >
                  <span className="text-[clamp(1.8rem,5vw,4rem)] font-black text-white">{item.cause}</span>
                  <span className="text-gray-700 text-[clamp(1.5rem,4vw,3rem)] font-thin">→</span>
                  <span className="text-[clamp(1.8rem,5vw,4rem)] font-black text-gray-500">{item.effect}</span>
                </div>
              ))}
            </div>

            {/* Progress track */}
            <div className="flex justify-center gap-1.5 mt-14">
              {ITEMS.map((_, i) => (
                <div
                  key={i}
                  className={`h-px rounded-full transition-all duration-500 ${
                    i <= step ? 'w-8 bg-gold-400' : 'w-3 bg-gray-800'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div style={{ animation: 'heroIn 0.9s cubic-bezier(0.22,1,0.36,1) forwards' }}>
            <SectionLabel>The Truth</SectionLabel>
            <h2 className="text-[clamp(2.2rem,6vw,5.5rem)] font-black leading-[1.05] tracking-[-0.03em] mt-8 mb-6">
              Volume never fixes
              <br />
              <span className="text-gold">a broken constraint.</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
              They are scaling the wrong system.
            </p>
          </div>
        )}
      </div>
      <style>{`@keyframes heroIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}
