import { ArrowRight, CheckCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { SectionLabel } from './shared';

const TRUST = [
  'Constraint Identified in First Session',
  'Revenue-Focused, Not Traffic-Focused',
  'Systems That Hold at Scale',
];

export function FinalCTA() {
  const { ref, visible } = useReveal(0.2);

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-[#050505] relative overflow-hidden py-24">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(212,175,55,0.08),transparent)]" />
      {/* Mesh orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="mesh-orb mesh-orb-2" style={{ top: '20%', left: '10%', animationDelay: '-3s' }} />
        <div className="mesh-orb mesh-orb-1" style={{ bottom: '20%', right: '10%', animationDelay: '-6s' }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center w-full">
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Circle logo */}
          <div className="flex justify-center mb-10">
            <div
              className="w-14 h-14 rounded-full overflow-hidden ring-1 ring-white/[0.07]"
              style={{ boxShadow: '0 0 50px rgba(212,175,55,0.16)' }}
            >
              <img src="/kartik_clarity_logo_circle.png" alt="Kartik Clarity" className="w-full h-full object-cover" />
            </div>
          </div>

          <SectionLabel>Diagnosis</SectionLabel>

          <h2 className="text-[clamp(2.2rem,6.5vw,5.5rem)] font-black leading-[1.0] tracking-[-0.03em] mt-6 mb-6">
            WHAT IS YOUR UN-NAMED
            <br />
            <span className="text-gold">CONSTRAINT COSTING YOU?</span>
          </h2>

          <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto leading-relaxed">
            Most founders are optimizing the wrong part of the system.
          </p>

          <button className="cta-btn text-[13px]">
            Diagnose My Revenue Constraint
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Trust row */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            {TRUST.map((item) => (
              <div key={item} className="flex items-center gap-2 text-[12px] text-gray-600">
                <CheckCircle className="w-3.5 h-3.5 text-gold-400/60 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
