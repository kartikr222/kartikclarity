import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { SectionLabel, SectionHeading, GoldText } from './shared';

const FAQS = [
  {
    q: 'Why do most businesses struggle with growth even when they invest in marketing?',
    a: 'Because they are treating a system problem as a volume problem. More marketing generates more of the same result when the underlying constraint remains unnamed and unfixed.',
  },
  {
    q: 'What exactly is a revenue constraint?',
    a: 'A revenue constraint is the single most limiting factor blocking your next level of growth. It is usually invisible — buried in process friction, positioning gaps, or sales flow breakdowns — and it is rarely what you think it is.',
  },
  {
    q: 'How fast can results happen after diagnosis?',
    a: 'Most founders identify their primary constraint within the first session. Implementation timelines vary, but directional clarity — the thing that actually unblocks progress — happens immediately.',
  },
  {
    q: 'Is this consulting or SaaS?',
    a: 'It is neither and both. Kartik Clarity™ operates as a Revenue Intelligence System — diagnostic-first, with execution support layered in. The tools are SaaS products; the sessions are high-leverage engagements, not ongoing retainer consulting.',
  },
  {
    q: 'What makes Kartik Clarity™ different from a traditional revenue consultant?',
    a: 'Traditional consulting diagnoses slowly and charges for hours. Kartik Clarity™ identifies constraints in the first session, prioritizes by revenue impact, and operates as a removal system — not an advisory service.',
  },
  {
    q: 'Who is this built for?',
    a: 'Founders and revenue leaders of B2B businesses — typically $500K to $10M ARR — who are growing but feel like the system should be performing better. If you sense a hidden ceiling, this is for you.',
  },
  {
    q: 'Do I need to have a large team or complex sales process?',
    a: 'No. Constraints exist at every scale. The earlier you identify and remove them, the less structural damage they cause as you grow.',
  },
  {
    q: 'What does a Founder Clarity Session actually involve?',
    a: 'A structured 90-minute diagnostic conversation that maps your current revenue flow, surfaces the primary constraint, ranks the secondary leaks, and produces a clear action sequence. You leave with a named problem and a removal path.',
  },
  {
    q: 'Are the SaaS tools standalone products or do they require a session?',
    a: 'The tools are standalone and can be used independently. They are most powerful when paired with a session diagnosis, as they target the specific constraint areas that have already been identified.',
  },
  {
    q: 'What happens after the implementation retainer?',
    a: 'The goal is system independence. A well-engineered revenue system should not require ongoing external intervention. The retainer runs until the system is stable and you have the internal capacity to maintain it.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'The Founder Clarity Session comes with a clarity guarantee: if you leave without a clearly named constraint and a prioritized action path, you receive a full refund. No ambiguous outcomes.',
  },
  {
    q: 'How do I know if I have a constraint worth fixing?',
    a: 'If revenue is not growing proportionally to your effort, investment, or time — you have a constraint. The question is never whether it exists. The question is where it is and how much it is costing you per month.',
  },
];

export function FAQ() {
  const { ref, visible } = useReveal(0.08);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-black py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-14`}>
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading>
            Common <GoldText>Questions</GoldText>
          </SectionHeading>
        </div>

        <div className="space-y-2">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`reveal ${visible ? 'visible' : ''} glass glass-hover rounded-xl overflow-hidden transition-all duration-300`}
                style={{ transitionDelay: `${Math.min(i, 5) * 45}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[14px] font-semibold text-white leading-snug pr-2">{item.q}</span>
                  <div className="shrink-0 w-6 h-6 rounded-full glass-gold flex items-center justify-center">
                    {isOpen
                      ? <Minus className="w-3 h-3 text-gold-400" />
                      : <Plus className="w-3 h-3 text-gold-400" />
                    }
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-[13px] text-gray-500 leading-relaxed border-t border-white/[0.05] pt-4">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
