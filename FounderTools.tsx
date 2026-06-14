import { useState } from 'react';
import { MessageSquare, Gauge, Target, BarChart2, Check } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { SectionLabel, SectionHeading, GoldText } from './shared';

const TIERS = [
  { name: 'Beta',   price: '$29', period: '/mo', features: ['Core analysis', 'Basic reports', '1 pipeline'] },
  { name: 'Full',   price: '$99', period: '/mo', features: ['All features', 'Advanced reports', '5 pipelines', 'Priority support'] },
  { name: 'Agency', price: '$199', period: '/mo', features: ['Unlimited pipelines', 'White-label', 'API access', 'Dedicated support'] },
];

const TOOLS = [
  {
    title: 'Ghosting Recovery Analyzer',
    outcome: 'Turns dead conversations into reopened deals.',
    desc: 'Diagnose why warm prospects go silent and activate structured re-engagement sequences.',
    icon: MessageSquare,
    accent: 'rgba(59,130,246,0.07)',
  },
  {
    title: 'Pipeline Leak Detector',
    outcome: 'Shows exactly where revenue is dropping.',
    desc: 'Surface the precise deal stages losing money and quantify the monthly cost per leak.',
    icon: Gauge,
    accent: 'rgba(239,68,68,0.07)',
  },
  {
    title: 'Offer Clarity Scorer',
    outcome: 'Removes confusion. Increases perceived value.',
    desc: 'Rate your offer against buyer psychology benchmarks. Fix where clarity breaks the sale.',
    icon: Target,
    accent: 'rgba(212,175,55,0.06)',
  },
  {
    title: 'DM Closing System',
    outcome: 'Turns conversations into structured closes.',
    desc: 'Proven conversation frameworks from real sales data — converts without pressure.',
    icon: BarChart2,
    accent: 'rgba(16,185,129,0.07)',
  },
];

function ToolCard({ tool }: { tool: typeof TOOLS[0] }) {
  return (
    <div className="group relative glass glass-hover rounded-2xl p-7 overflow-hidden transition-all duration-300 cursor-pointer">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: tool.accent }}
      />
      <div className="relative z-10 flex items-start gap-5">
        <div className="shrink-0 relative w-11 h-11 rounded-xl glass-gold flex items-center justify-center group-hover:bg-gold-400/10 transition-colors duration-300 overflow-hidden">
          <img src="/kartik_clarity_logo_circle.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-[0.08] rounded-xl" />
          <tool.icon className="relative z-10 w-5 h-5 text-gold-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-bold mb-1">{tool.title}</h3>
          <p className="text-white/60 text-[13px] font-medium mb-1.5">{tool.outcome}</p>
          <p className="text-gray-600 text-[12px] leading-relaxed">{tool.desc}</p>
        </div>
      </div>
    </div>
  );
}

export function FounderTools() {
  const { ref, visible } = useReveal(0.08);
  const [activeTier, setActiveTier] = useState(1);

  return (
    <section id="tools" ref={ref} className="min-h-screen flex items-center bg-black py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <SectionLabel>SaaS Tools</SectionLabel>
          <SectionHeading>
            Founder Revenue <GoldText>Tools</GoldText>
          </SectionHeading>
          <p className="text-gray-500 text-base mt-3 max-w-lg mx-auto">
            Built from real sales and revenue systems, not theory.
          </p>
        </div>

        {/* Tool cards */}
        <div className={`reveal reveal-delay-1 ${visible ? 'visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-4 mb-14`}>
          {TOOLS.map((t) => <ToolCard key={t.title} tool={t} />)}
        </div>

        {/* Pricing tier toggle */}
        <div className={`reveal reveal-delay-2 ${visible ? 'visible' : ''}`}>
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-gray-600 mb-6">
            Choose Your Plan
          </p>

          {/* Tab selector */}
          <div className="flex justify-center mb-8">
            <div className="glass rounded-xl p-1 flex gap-1">
              {TIERS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActiveTier(i)}
                  className={`px-5 py-2 rounded-lg text-[12px] font-semibold tracking-wide transition-all duration-300 ${
                    activeTier === i
                      ? 'bg-gold-400 text-black'
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing display */}
          <div className="max-w-xs mx-auto glass glass-hover rounded-2xl p-8 text-center">
            <p className="text-[11px] uppercase tracking-widest text-gray-600 mb-3">
              {TIERS[activeTier].name} Access
            </p>
            <div className="flex items-end justify-center gap-1 mb-2">
              <span className="text-[48px] font-black leading-none text-gold">{TIERS[activeTier].price}</span>
              <span className="text-gray-600 text-sm mb-2">{TIERS[activeTier].period}</span>
            </div>
            <div className="space-y-2.5 mt-6 text-left">
              {TIERS[activeTier].features.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="text-[13px] text-gray-400">{f}</span>
                </div>
              ))}
            </div>
            <button className="cta-btn w-full justify-center mt-8 !py-3 !text-[12px]">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
