import { useEffect, useState } from 'react';

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 500);
    const t2 = setTimeout(() => setPhase('exit'), 2600);
    const t3 = setTimeout(onDone, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div
        className={`relative flex flex-col items-center transition-all duration-700 ${
          phase === 'enter' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {/* Logo with pulse glow */}
        <div className="relative">
          <div className="logo-pulse-glow w-24 h-24 rounded-full overflow-hidden">
            <img src="/kartik_clarity_logo_circle.png" alt="Kartik Clarity" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="scan-line" />
          </div>
          <div
            className="absolute inset-[-10px] rounded-full border border-gold-400/[0.07] animate-ping"
            style={{ animationDuration: '3s' }}
          />
        </div>

        {/* Text */}
        <p className="mt-8 text-[11px] tracking-[0.35em] uppercase text-gray-600">
          Diagnosing Revenue System<span className="diagnosing-dots" />
        </p>
        <div className="mt-5 w-36 h-px bg-gray-900 rounded-full overflow-hidden">
          <div className="loading-bar h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
}
