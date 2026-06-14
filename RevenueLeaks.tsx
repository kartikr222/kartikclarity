import { useState } from 'react';
import { Target, Users, MessageSquare, TrendingDown, RotateCcw, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { SectionLabel, SectionHeading, GoldText } from './shared';

const LEAKS = [
  {
    area: 'Acquisition',
    icon: Target,
    symptom: 'Traffic is arriving but not converting to qualified leads.',
    cost: 'Wasted ad spend, bloated CAC, starved pipeline.',
    impact: 'High',
    detail: 'Your messaging attracts the wrong audience or fails to qualify intent. You are paying to bring in people who were never going to buy.',
  },
  {
    area: 'Conversion',
    icon: Users,
    symptom: 'Leads are entering the funnel but not progressing to proposals.',
    cost: 'Revenue sitting idle, sales cycle extends, team demoralised.',
    impact: 'Critical',
    detail: 'Friction at the offer, discovery, or demo stage silently kills deals before they reach your close. Most companies never track where this happens.',
  },
  {
    area: 'Positioning',
    icon: MessageSquare,
    symptom: 'Conversations happen but buyers can\'t articulate why they should choose you.',
    cost: 'Commoditised pricing pressure, lost deals to cheaper alternatives.',
    impact: 'High',
    detail: 'If your positioning is unclear, buyers default to price. Clarity in positioning directly increases perceived value without changing the product.',
  },
  {
    area: 'Sales',
    icon: TrendingDown,
    symptom: 'Warm prospects go cold. Proposals sent. Silence returned.',
    cost: 'Revenue leaking from the bottom of the funnel after significant investment.',
    impact: 'Critical',
    detail: 'Ghosting is a symptom of misalignment in the sales conversation — not a prospect problem. The leak is in your process, not their intent.',
  },
  {
    area: 'Retention',
    icon: RotateCcw,
    symptom: 'Customers churn before LTV is realised.',
    cost: 'Recurring revenue eroded, referral engine never activates.',
    impact: 'High',
    detail: 'Retention leaks are the most expensive because they destroy compounding growth. Every churned customer costs you their lifetime value plus the referrals they never gave.',
  },
];

const IMPACT_COLOR: Record<string, string> = {
  Critical: 'text-red-400 bg-red-400/10 border-red-400/20',
  High:     'text-amber-400 bg-amber-400/10 border-amber-400/20',
};

export function RevenueLeaks() {
  const { ref, visible } = useReveal(0.08);
  const [active, setActive] = useState<number | null>(null);

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-black py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <SectionLabel>Constraint Map</SectionLabel>
          <SectionHeading>
            Where is your revenue <GoldText>leaking?</GoldText>
          </SectionHeading>
          <p className="text-gray-500 text-base mt-4 max-w-md mx-auto">
            Every broken business has a leak. Click to diagnose.
          </p>
        </div>

        <div className="space-y-3">
          {LEAKS.map((leak, i) => {
            const isOpen = active === i;
            return (
              <div
                key={leak.area}
                className={`reveal ${visible ? 'visible' : ''} glass glass-hover rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  isOpen ? 'border-gold-400/20' : ''
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setActive(isOpen ? null : i)}
              >
                {/* Header row */}
                <div className="flex items-center gap-5 px-6 py-5">
                  <div className={`shrink-0 w-10 h-10 rounded-lg glass-gold flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-gold-400/12' : ''}`}>
                    <leak.icon className="w-4.5 h-4.5 text-gold-400 w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-0.5">
                      <h3 className="text-[15px] font-bold">{leak.area} Leak</h3>
                      <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border font-medium ${IMPACT_COLOR[leak.impact]}`}>
                        {leak.impact}
                      </span>
                    </div>
                    <p className="text-gray-600 text-[12px] leading-relaxed">{leak.symptom}</p>
                  </div>

                  <ChevronRight
                    className={`shrink-0 w-4 h-4 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-90 text-gold-400' : ''}`}
                  />
                </div>

                {/* Expanded content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 border-t border-white/[0.05]">
                    <div className="grid md:grid-cols-3 gap-5 mt-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Cost</p>
                        <p className="text-[13px] text-gray-400 leading-relaxed">{leak.cost}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Diagnosis</p>
                        <p className="text-[13px] text-gray-400 leading-relaxed">{leak.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
