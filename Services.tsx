import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { SectionLabel, SectionHeading, GoldText } from './shared';

const TIERS = [
  {
    level: '01',
    title: 'Founder Clarity Session',
    outcome: 'Identify your biggest constraint',
    desc: 'One intensive session to name the exact constraint blocking your growth and map the first move.',
    price: '$3,000',
    tag: 'Entry',
  },
  {
    level: '02',
    title: 'Revenue Constraint Diagnosis™',
    outcome: 'Map all hidden revenue leaks',
    desc: 'End-to-end audit of acquisition, conversion, sales, and delivery — prioritized by revenue impact.',
    price: '$3,000',
    tag: 'Diagnostic',
  },
  {
    level: '03',
    title: 'Sales & Pipeline Leak Audit',
    outcome: 'Find exactly where deals are dying',
    desc: 'Quantify every dollar leaking from your pipeline with a precision remediation playbook.',
    price: '$3,000',
    tag: 'Audit',
  },
  {
    level: '04',
    title: 'Revenue Ops Engineering',
    outcome: 'Fix system friction points',
    desc: 'Design and build revenue systems that make growth predictable — no more guesswork at scale.',
    price: '$3,000',
    tag: 'Engineering',
  },
  {
    level: '05',
    title: 'Implementation Retainer',
    outcome: 'Execute until the system stabilizes',
    desc: 'Ongoing strategic partnership — execute, measure, iterate, and compound systematically.',
    price: '$3,000/mo',
    tag: 'Retainer',
  },
];

export function Services() {
  const { ref, visible } = useReveal(0.08);

  return (
    <section id="services" ref={ref} className="min-h-screen flex items-center bg-[#050505] py-28">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <SectionLabel>Engagements</SectionLabel>
          <SectionHeading>
            Services <GoldText>Ladder</GoldText>
          </SectionHeading>
          <p className="text-gray-600 text-[13px] italic mt-4 tracking-wide">
            This is not consulting. This is constraint removal.
          </p>
        </div>

        <div className="space-y-2.5">
          {TIERS.map((tier, i) => (
            <div
              key={tier.title}
              className={`reveal ${visible ? 'visible' : ''} group glass glass-hover rounded-xl transition-all duration-300`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 px-6 py-5">
                {/* Level */}
                <div className="shrink-0 w-[60px]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-700 font-medium">
                    Level {tier.level}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-[15px] font-bold">{tier.title}</h3>
                    <span className="text-[10px] text-gold-400 font-medium">→ {tier.outcome}</span>
                  </div>
                  <p className="text-gray-600 text-[12px] leading-relaxed">{tier.desc}</p>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xl md:text-2xl font-bold text-gold whitespace-nowrap">{tier.price}</span>
                  <button className="opacity-0 group-hover:opacity-100 cta-btn !py-2.5 !px-4 !text-[11px] transition-opacity duration-200 whitespace-nowrap flex items-center gap-1.5">
                    Book <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
